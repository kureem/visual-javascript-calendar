package sp.filters;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalTextSearch extends Modal{

	private TextSearch textSearch;
	
	
	public ModalTextSearch(String name) {
		super(name);
		textSearch = new TextSearch("txtsearch");
		//textSearch.setColumn(column);
		getContent().addChild(textSearch);
		
		Button cancel = new Button("cancel");
		cancel.setLabel("Cancel");
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		cancel.setVariant(Variant.NEUTRAL);
		
		Button apply = new Button("apply");
		apply.setLabel("Apply Filter");
		apply.on("click", (e,d)->{
			Array<Object> options = textSearch.getSelectedOptions();
			Array<String> includes = new Array<String>();
			for(Object opt : options) {
				includes.push(opt.$get("value") + "");
			}
			CustomEvent onapply = new CustomEvent("onapply");
			onapply.$set("column", textSearch.getColumn());
			onapply.$set("options", options);
			onapply.$set("includes", includes);
			fireListener("onapply", onapply);
			close();
			
			return null;
		});
		apply.setVariant(Variant.BRAND);
		
		Button clear = new Button("clear");
		clear.setLabel("Clear Filters");
		clear.setVariant(Variant.DESTRUCTIVE);
		clear.on("click", (e,v)->{
			
			CustomEvent onapply = new CustomEvent("onapply");
			Array<Object> options = new Array<Object>();
			Array<String> includes = new Array<String>();
			onapply.$set("column", textSearch.getColumn());
			onapply.$set("options", options);
			onapply.$set("includes", includes);
			fireListener("onapply", onapply);
			close();
			
			return null;
		});
		getFooter().addChild(cancel).addChild(apply).addChild(clear);
	}

	
	public void setColumn(Object column) {
		textSearch.setColumn(column);
	}
	
	public void setData(Array<Object> data, Array<String> includes) {
		Object col = textSearch.getColumn();
		String fieldName  =(String)col.$get("fieldName");
		if(fieldName.toLowerCase() == "filelink") {
			fieldName = "Title";
		}
		if(fieldName == "OwnerLink") {
			fieldName = "OwnerName";
		}
		if(fieldName == "ContentModifiedDate") {
			setDate();
			return;
		}
		Array<String> current = new Array<String>();
		Array<Object> ldata = new Array<Object>();
		for(Object line : data) {
			
			Object oval = (Object)line.$get(fieldName);
			String val= "";
			if(oval != null) {
				val = oval + "";
			}
			if(current.indexOf(val) < 0) {
				Object opt = new Object();
				opt.$set("value", val);
				opt.$set("label", val);
				ldata.push(opt);
				current.push(val);
			}
		}
		Object[] sorted = ldata.sort((a,b)->{
			String sa = (String)a.$get("label");
			String sb = (String)b.$get("label");
			double indexa = -1;
			double indexb = -1;
			if(includes != null) {
				indexa = includes.indexOf(sa);
				indexb =includes.indexOf(sb);
			}
			if(indexa > indexb) {
				return -1d;
			}else if(indexb > indexa) {
				return 1d;
			}else {
				sa = sa.toLowerCase();
				sb = sb.toLowerCase();
				Integer res =sa.compareTo(sb);
				return Double.valueOf(res + "");
			}
		});
		
		Array<Object> arrSorted = new Array<>();
		for(Object o : sorted) {
			arrSorted.push(o);
		}
		textSearch.setData(arrSorted);
	}
	
	public void setSelectedOptions(Array<String> opts) {
		textSearch.setSelectedOptions(opts);
	}
	
	public void setDate() {
		textSearch.setDateOptions();
	}
}
