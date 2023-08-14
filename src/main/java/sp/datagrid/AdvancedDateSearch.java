package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.RadioGroup;
import com.spoonconsulting.lightning.enums.LayoutItemPadding;
import com.spoonconsulting.lightning.enums.ModalSize;
import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSDateInput;
import framework.components.input.JSSelect;
import jsweet.dom.Event;
import jsweet.dom.HTMLInputElement;
import jsweet.lang.Array;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class AdvancedDateSearch extends Modal{

	private JSContainer body = new JSContainer("div");
	
	private Object column;

	private RadioGroup andOr = new RadioGroup("andOr");
	
	private JSContainer plabel = new JSContainer("p");
	
	private Button ok = new Button("ok").setLabel("Ok").setVariant(Variant.BRAND);
	
	private Button cancel = new Button("cancel").setLabel("Cancel");
	
	private String objectType = "Case";
	

	private DateCriteria criteria1 = new DateCriteria("1");
	
	private DateCriteria criteria2 = new DateCriteria("2");
	
	public AdvancedDateSearch(String name) {
		super(name);
		setTitle("Custom Filter");
		setSize(ModalSize.SMALL);
		
		body.addChild(new JSContainer("p").setHtml("Show rows where:").setStyle("padding", "0.5rem 1rem"));
		body.addChild(plabel);
		getContent().addChild(body);
		getContent().setStyle("padding", "1rem");
		Object and= new Object();
		and.$set("value", "and");
		and.$set("label", "And");
		Object or= new Object();
		or.$set("value", "or");
		or.$set("label", "Or");
		
		Array<Object> andOrOpts = new Array<Object>();
		andOrOpts.push(and);
		andOrOpts.push(or);
		andOr.setOptions(andOrOpts);
		andOr.setVariant(FormElementVariant.LABEL_HIDDEN);
		
		Layout layout = new Layout("layout", "div").setMultipleRows(true);
		LayoutItem top = new LayoutItem("top", "div").setSize(12);
		LayoutItem middle = new LayoutItem("middle", "div").setSize(12);
		LayoutItem bottom = new LayoutItem("bottom", "div").setSize(12);

		layout.addChild(top).addChild(middle).addChild(bottom);
		
		top.addChild(criteria1);
		middle.addChild(andOr);
		bottom.addChild(criteria2);
		
		getContent().addChild(layout);
		
		cancel.setVariant(Variant.NEUTRAL);

		getFooter().addChild(cancel).addChild(ok);
		
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		
		ok.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				HeavyGrid hg = getAncestorWithClass("HeavyGrid");
				Object fi = getFilter();
				if(fi.hasOwnProperty("andOr")) {
					hg.saveCustomFilter(getFieldName(), getObjectType(), getFilter(), (a)->{
						close();
						getParent().render();
						
						return null;
					});
				}
				
			}
		}, "click");
	}
	
	public Object getFilter() {
		Object result = new Object();
		if(criteria1.getCriteria(result)) {
			if(criteria2.getCriteria(result)) {
				String sandOr = andOr.getValue().$get(0);
				result.$set("andOr", sandOr);
			}
		}
		return result;
	}
	
	public String getFieldName() {
		return (String)column.$get("fieldName");
	}
	
	public String getObjectType() {
		return objectType;
	}
	
	public void refresh(Object col, String objectType) {
		String sfType = (String)col.$get("sfType");
		if(sfType == "DATETIME") {
			criteria1.setTime(true);
			criteria2.setTime(true);
		}else {
			criteria1.setTime(false);
			criteria2.setTime(false);
		}
		if(col.hasOwnProperty("custom") && col.$get("custom") != null) {
			Object cu = (Object)col.$get("custom");
			String sAndor = (String)cu.$get("andOr");
			Array<String> arandor = new Array<String>();
			arandor.push(sAndor);
			andOr.setValue(arandor);
			criteria1.setValue(cu);
			criteria2.setValue(cu);
			
		}else {
			
			Array<String> arandor = new Array<String>();
			arandor.push("and");
			andOr.setValue(arandor);
			criteria1.setValue(null);
			criteria2.setValue(null);
		}
		
		this.column = col;
		this.objectType = objectType;
		String label = (String)col.$get("label");
		plabel.setHtml(label);
	}

	

	public class DateCriteria extends Layout{
		
		private JSSelect operators = new JSSelect("operators");
		
		private JSDateInput fromDate = new JSDateInput("from");
		
		private JSDateInput toDate = new JSDateInput("to");
		
		LayoutItem item2 = new LayoutItem("2", "div").setSize(4);
		
		private boolean time = false;

		public DateCriteria(String name) {
			super(name, "div");
			setMultipleRows(true);
			LayoutItem item0 = new LayoutItem("0", "div").setSize(4);
			LayoutItem item1 = new LayoutItem("1", "div").setSize(4);
			
			fromDate.setRequired(true);
			toDate.setRequired(true);
			
			item0.setPadding(LayoutItemPadding.AROUND_SMALL).addChild(operators.addClass("slds-input"));
			item1.setPadding(LayoutItemPadding.AROUND_SMALL).addChild(fromDate.addClass("slds-input"));
			item2.setPadding(LayoutItemPadding.AROUND_SMALL).addChild(toDate.addClass("slds-input"));
			addChild(item0).addChild(item1).addChild(item2);
			operators.addOption("equals","=");
			operators.addOption("not equal","!=");
			operators.addOption("greater",">");
			operators.addOption("greater or equal",">=");
			operators.addOption("less","<");
			operators.addOption("less or equal","<=");
			operators.addOption("between","between");
			operators.setValue("=");
			operators.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					String value = (String)operators.getValue();
					if(value == "between") {
						item2.setStyle("display", null);
					}else {
						item2.setStyle("display", "none");
					}
					
				}
			}, "change");
			
		}
		
		@SuppressWarnings("unchecked")
		public void setValue(Object cu) {
			if(cu != null) {
				String oper = (String)cu.$get("operator" + getName());
				operators.setValue(oper);
				Array<String> vals = (Array<String>)cu.$get("value" + getName());
				String sfrom = vals.$get(0).split("T")[0];
				((HTMLInputElement)fromDate.getElement()).value = sfrom;
				//fromDate.setValue(new Date(vals.$get(0)));
				if(oper == "between") {
					item2.setStyle("display", null);
					//toDate.setValue(new Date(vals.$get(1)));
					String sto = vals.$get(1).split("T")[0];
					((HTMLInputElement)toDate.getElement()).value = sto;
				}else {
					item2.setStyle("display", "none");
				}
			}else {
				operators.setValue("=");
				item2.setStyle("display", "none");
				//fromDate.setValue(null);
				//toDate.setValue(null);
			}
			
		}
		public void setTime(boolean b) {
			this.time = b;
			if(b) {
				fromDate.setAttribute("type", "date");
				toDate.setAttribute("type", "date");
			}else {
				fromDate.setAttribute("type", "date");
				toDate.setAttribute("type", "date");
			}
		}
		
		private boolean checkValidity() {
			HTMLInputElement elem =  ((HTMLInputElement)fromDate.getElement());
			if(!elem.checkValidity()) {
				Function val =  (Function)elem.$get("reportValidity");
				val.call(elem);
				return false; 
			}
			
			String oper = (String)operators.getValue();
			if(oper == "between") {
				HTMLInputElement elto =((HTMLInputElement)toDate.getElement());
				
				if(!elto.checkValidity()) {
					Function val =  (Function)elto.$get("reportValidity");
					val.call(elem);
					return false; 
				}
			}
			return true;
			
		}
		
		public boolean getCriteria(Object result) {
			
			if(checkValidity()) {
			
				String oper = (String)operators.getValue();
				String dfrom = ((HTMLInputElement)fromDate.getElement()).value;
				
				if(time) {
					dfrom = dfrom + "T00:00:00.000+00:00";
				}
				
				String suffix = getName();
				result.$set("operator"+ suffix, oper);
				Array<String> val = new Array<String>();
				if(oper != "between") {
					val.push(dfrom);
				}else {
					HTMLInputElement elto =((HTMLInputElement)toDate.getElement());
					
					String dto = elto.value;
					
					if(time) {
						dto = dto +  "T23:59:00.000+00:00";
					}
					val.push(dfrom,dto);
				}
				result.$set("value" + suffix, val);
				return true;
			}else {
				return false;
			}
			
		}
		
		
	}

}
