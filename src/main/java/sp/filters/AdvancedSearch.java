package sp.filters;
 
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
import framework.components.input.JSSelect;
import framework.components.input.JSTextInput;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;


/**
{@snippet :
   public static void main(String... args) {
       System.out.println("Hello, World!");
   }
}
 * @author Kureem Rossaye<br>
 *    <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 *
 */
public class AdvancedSearch extends Modal{

	private JSContainer body = new JSContainer("div");
	
	private Object column;
	
	private JSSelect operators = new JSSelect("operators");
	
	private JSSelect operators2 = new JSSelect("operators2");
	

	private JSTextInput values = new JSTextInput("values");
	
	private JSTextInput values2 = new JSTextInput("values2");
	
	private RadioGroup andOr = new RadioGroup("andOr");
	
	private JSContainer plabel = new JSContainer("p");
	
	private Button ok = new Button("ok").setLabel("Ok").setVariant(Variant.BRAND);
	private Button cancel = new Button("cancel").setLabel("Cancel");
	
	private String objectType = "Case";
	
	public AdvancedSearch(String name) {
		super(name);
		setTitle("Custom Search");
		setSize(ModalSize.SMALL);
	
		body.addChild(new JSContainer("p").setHtml("Show rows where:").setStyle("padding", "0.5rem 1rem"));
		body.addChild(plabel);
		operators.addOption("equals","=");
		operators.addOption("greater",">");
		operators.addOption("greater or equal",">=");
		operators.addOption("less","<");
		operators.addOption("less or equal","<=");
		
		operators.addOption("contains", "contains");
		operators.addOption("not contain", "notcontains");
		operators.addOption("starts with", "starts");
		operators.addOption("not start with", "notstarts");
		operators.addOption("ends with", "ends");
		operators.addOption("not end with", "notends");

		operators.addClass("slds-input");
		
		operators2.addOption("equals","=");
		operators2.addOption("greater",">");
		operators2.addOption("greater or equal",">=");
		operators2.addOption("less","<");
		operators2.addOption("less or equal","<=");
		
		operators2.addOption("contains", "contains");
		operators2.addOption("not contain", "notcontains");
		operators2.addOption("starts with", "starts");
		operators2.addOption("not start with", "notstarts");
		operators2.addOption("ends with", "ends");
		operators2.addOption("not end with", "notends");
		operators2.addClass("slds-input");
		
		values.addClass("slds-input");
		values2.addClass("slds-input");
				
		getContent().addChild(body);
		body.setStyle("padding", "1rem").setStyle("height", "225px");
		

		
		
		
		Layout layout = new Layout("layout", "div").setMultipleRows(true);
		LayoutItem left = new LayoutItem("left","div");
		left.setSize(4);
		LayoutItem right = new LayoutItem("right", "div");
		right.setSize(8);
		layout.addChild(left);
		layout.addChild(right);
		left.addChild(operators);
		right.addChild(values);
		left.setPadding(LayoutItemPadding.AROUND_SMALL);
		right.setPadding(LayoutItemPadding.AROUND_SMALL);
		
		body.addChild(layout);
		
		
		
		
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

		
		//andOr.setOptions(andOrOpts);
		Layout layoutAndOr = new Layout("landord", "div").setMultipleRows(true);
		layoutAndOr.addChild(new LayoutItem("item", "div").setSize(12).setPadding(LayoutItemPadding.HORIZONTAL_SMALL).addChild(andOr));
		body.addChild(layoutAndOr);
		
		Layout layout2 = new Layout("layout2", "div").setMultipleRows(true);
		LayoutItem left2 = new LayoutItem("left2","div");
		left2.setSize(4);
		LayoutItem right2 = new LayoutItem("right2", "div");
		right2.setSize(8);
		layout2.addChild(left2);
		layout2.addChild(right2);
		left2.addChild(operators2);
		right2.addChild(values2);
		left2.setPadding(LayoutItemPadding.AROUND_SMALL);
		right2.setPadding(LayoutItemPadding.AROUND_SMALL);
		
		body.addChild(layout2);
		
		cancel.setVariant(Variant.NEUTRAL);

		
		
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		
		ok.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("fieldName", getFieldName());
				evt.$set("objectType", "ContentVersion");
				evt.$set("filter", getFilter());
				fireListener("onapply", evt);
				close();
				
				
			}
		}, "click");
		
		Button clear = new Button("clear");
		clear.setLabel("Clear Filters");
		clear.setVariant(Variant.DESTRUCTIVE);
		clear.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("fieldName", getFieldName());
				evt.$set("objectType", "ContentVersion");
				evt.$set("filter", null);
				fireListener("onapply", evt);
				close();
				
				
			}
		}, "click");
		
		
		getFooter().addChild(cancel).addChild(ok).addChild(clear);
		
	}
	
	public Object getFilter() {
		String val1 = values.getValue();
		String oper1 = (String)operators.getValue();
		String val2 = values2.getValue();
		String oper2 = (String)operators2.getValue();
		String sandOr = andOr.getValue().$get(0);
		Object result = new Object();
		result.$set("value1", val1);
		result.$set("value2", val2);
		result.$set("operator1", oper1);
		result.$set("operator2", oper2);
		result.$set("andOr", sandOr);
		return result;
	}
	
	public String getFieldName() {
		return (String)column.$get("fieldName");
	}
	
	public String getObjectType() {
		return objectType;
	}
	
	public void refresh(Object col, String objectType) {
		operators.setOptions(new Array<Object>());
		operators2.setOptions(new Array<Object>());
		operators.setRendered(false);
		operators2.setRendered(false);
		String sfType = (String)col.$get("fieldName");
		if(sfType == "ContentSize" ) {
			
			operators.addOption("equals","=");
			operators.addOption("not equal","!=");
			operators.addOption("greater",">");
			operators.addOption("greater or equal",">=");
			operators.addOption("less","<");
			operators.addOption("less or equal","<=");

			operators2.addOption("equals","=");
			operators2.addOption("not equal","!=");
			operators2.addOption("greater",">");
			operators2.addOption("greater or equal",">=");
			operators2.addOption("less","<");
			operators2.addOption("less or equal","<=");
		}else {
			operators.addOption("equals","=");
			operators.addOption("not equal","!=");
			operators.addOption("contains", "contains");
			operators.addOption("not contain", "notcontains");
			operators.addOption("starts with", "starts");
			operators.addOption("not start with", "notstarts");
			operators.addOption("ends with", "ends");
			operators.addOption("not end with", "notends");

			operators2.addOption("equals","=");
			operators2.addOption("not equal","!=");
			operators2.addOption("contains", "contains");
			operators2.addOption("not contain", "notcontains");
			operators2.addOption("starts with", "starts");
			operators2.addOption("not start with", "notstarts");
			operators2.addOption("ends with", "ends");
			operators2.addOption("not end with", "notends");
		}
		
		if(col.hasOwnProperty("custom") && col.$get("custom") != null) {
			Object cu = (Object)col.$get("custom");
			String val1 = (String)cu.$get("value1");
			String val2 = (String)cu.$get("value2");
			String ope1 = (String)cu.$get("operator1");
			String ope2 = (String)cu.$get("operator2");
			String sAndor = (String)cu.$get("andOr");
			values.setValue(val1);
			values2.setValue(val2);
			operators.setValue(ope1);
			operators2.setValue(ope2);
			Array<String> arandor = new Array<String>();
			arandor.push(sAndor);
			andOr.setValue(arandor);
			
		}else {
			values.setValue("");
			values2.setValue("");
			operators.setValue("=");
			operators2.setValue("=");
			Array<String> arandor = new Array<String>();
			arandor.push("and");
			andOr.setValue(arandor);
		}
		
		this.column = col;
		this.objectType = objectType;
		String label = (String)col.$get("label");
		plabel.setHtml(label);
	}

}
