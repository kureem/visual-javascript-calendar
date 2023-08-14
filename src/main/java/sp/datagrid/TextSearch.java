package sp.datagrid;

import static jsweet.dom.Globals.clearTimeout;
import static jsweet.dom.Globals.setTimeout;
import static jsweet.util.Lang.function;

import com.spoonconsulting.lightning.CheckBox;
import com.spoonconsulting.lightning.Modal.BackDrop;
import com.spoonconsulting.lightning.Tree;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSTextInput;
import jsweet.dom.Event;
import jsweet.dom.HTMLInputElement;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class TextSearch extends JSContainer{

	private JSTextInput input = new JSTextInput("txt");
	
	private JSContainer list = new JSContainer("list", "ul");
	
//	private boolean remoteSearch = false;
	
	private boolean cached = false;
	
	private String objectType;
	private Object column;
	
	private boolean searching = false;
	private BackDrop bd = new BackDrop("3");
	private double timeoutHandle = -1;
	public TextSearch(String name, String objectType, Object col) {
		super(name, "div");
		this.column = col;
		bd.setStyle("display", "none");
		this.objectType = objectType;
		addClass("slds-card").setStyle("padding", "0.5rem");
		addChild(input.addClass("slds-input").setStyle("width", "100%"));
		JSContainer wrap = new JSContainer("div");
		wrap.setStyle("position", "relative");
		
		addChild(wrap);
		
		wrap.addChild(bd);
		wrap.addChild(list);
		//list.setStyle("height", "150px").setStyle("overflow-y", "auto").setStyle("overflow-x", "hidden");

		list.addClass("txt-search-options");
		list.setStyle("height", "150px")
		.setStyle("overflow", "hidden auto")
		.setStyle("border", "solid 1px silver")
		.setStyle("margin", "0.25rem")
		.setStyle("padding", "0.25rem")
		.setStyle("border-radius", "5px");
		input.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String val = input.getValue();
				input.setValue(val);
				if(!requireRefresh()) {
				//if(!remoteSearch) {
					Array<ListItem> items = getItems();
					for(ListItem item : items) {
						if(val == null || val.trim() == "") {
							item.setStyle("display", null);
						}else {
							String v = (String)item.getData().$get("label");
							if(v.toLowerCase().contains(val.toLowerCase())) {
								item.setStyle("display", null);
							}else {
								item.setStyle("display", "none");
							}
						}
					}
				}else {
					if(!searching)
						doRemoteSearch(false);
				}
			}
		}, "keyup");
	}
	
	
	public void setDateOptions() {
		Array<Object> opts = new Array<Object>();
		addOpt("3-days", "Since last 3 days", opts);
		addOpt("7-days", "Since last week", opts);
		addOpt("14-days", "Since last fortnight", opts);
		addOpt("31-days", "Since last month", opts);
		addOpt("90-days", "Since last 3 months", opts);
		addOpt("-90-days", "Up to next 3 months", opts);
		addOpt("-31-days", "Up to next month", opts);
		addOpt("-14-days", "Up to next fortnight", opts);
		addOpt("-7-days", "Up to next week", opts);
		addOpt("-3-days", "Up to next 3 days", opts);
		setData(opts);
		//last 3 days
		//current week
		//last 2 weeks
		//current month
		//last 3 months
	}
	
	private static void addOpt(String value, String label, Array<Object> opts) {
		Object opt = new Object();
		opt.$set("value", value);
		opt.$set("label", label);
		opts.push(opt);
	}
	
	public void setSelectedOptions(Array<String> sels) {
		for(ListItem item : getItems()) {
			String val = item.getValue();
			if(sels.indexOf(val)>=0) {
				item.setSelected(true);
			}else {
				item.setSelected(false);
			}
		}
	}
	
	private boolean requireRefresh() {
		String type = (String)column.$get("type");
		String sfType = (String)column.$get("sfType");
		if(type == "Boolean") {
			return false;
		}
		
		if(sfType == "PICKLIST" || sfType == "PICKLIST" || sfType == "MULTIPICKLIST" ||  sfType == "DATE" || sfType == "DATETIME") {
			return false;
		}
		
		return true;
	}
	
	private boolean isPicklist() {
		String sfType = (String)column.$get("sfType");
		
		if(sfType == "PICKLIST" || sfType == "PICKLIST" || sfType == "MULTIPICKLIST") {
			return true;
		}
		
		return false;
		
	}
	
	@SuppressWarnings("unchecked")
	public void doRemoteSearch(boolean force) {
		
		String type = (String)column.$get("type");
		String sfType = (String)column.$get("sfType");
		if(sfType == "DATE" || sfType == "DATETIME") {
			return;
		}
		if(type == "Boolean") {
			if(column.hasOwnProperty("includes")) {
				Array<String> incl = (Array<String>)column.$get("includes");
				setSelectedOptions(incl);
			}
		}
		
		
		if(!cached && type != "Boolean") {
			
			String fieldName = getName().replace("textSearch_", "");
			String txt = input.getValue();
			boolean picklist = isPicklist();
			if(txt != null && txt.trim().length() > 0 || picklist || force) {
				txt = txt.replace("*", "%");
				int page = 0;
				if(force) {
					txt = "%";
				}
				
				String va= txt;
				//if(timeoutHandle != -1) {
					clearTimeout(timeoutHandle);
					timeoutHandle = -1;
				//}
				HeavyGrid hg = getAncestorWithClass("HeavyGrid");
				String filterId = hg.getFilterId();
				timeoutHandle = setTimeout(function(()->{
					this.searching = true;
					//bd.setStyle("visiblity", "visible").setStyle("display", null).setStyle("opacity", "1");
					//input.setReadOnly(true);
					//bd.render();
					list.setStyle("opacity", "0.4").setStyle("background", "silver").render();
					Util.getService().getFieldValues(fieldName,va,page,objectType, filterId).then((result)->{
						searching = false;
						if(!requireRefresh()) {
							cached = true;
						}
						//bd.setStyle("visiblity", null).setStyle("display", "none").setStyle("opacity", null);
						//input.setValue(txt);
						list.setStyle("opacity", null).setStyle("background", null);
						setRendered(false);
						setData(result);
						if(column.hasOwnProperty("includes")) {
							Array<String> incl = (Array<String>)column.$get("includes");
							setSelectedOptions(incl);
						}
						render();
						HTMLInputElement el = (HTMLInputElement)input.getElement();
						el.focus();
						el.setSelectionRange(el.value.length(), el.value.length());
						//input.getElement().focus();
					}).Catch((e)->{
						searching = false;
					});
					
				}),picklist || force?100:3000);
			
			}
			
		}
	}
	
	public void setTree(Tree tree) {
		list.clearChildren();
		JSContainer selall = new JSContainer("li");
		selall.addChild(tree);
		list.addChild(selall);
	}
	
	public void setData(Array<Object> data) {
	
		if(data != null) {
		
			Array<Object> selected = getSelectedOptions();
			list.clearChildren();
			JSContainer selall = new JSContainer("li");
			selall.addChild(new CheckBox("cl").addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					for(ListItem item : getItems()) {
						if(item.isVisible())
							item.cb.setValue( ((CheckBox)source).getValue());
						else
							item.cb.setValue(false);
					}
					
				}
			}, "change")).addChild(new JSContainer("span").setStyle("font-weight", "bold").addClass("slds-truncate").setHtml("Select All"));
			list.addChild(selall);
		
			Array<Object> used = new Array<Object>();
			for(Object line : data) {
				ListItem item = getListItem(line);
				
				Object selItem = getInSelected(line, selected);
				if(selItem != null) {
					item.setSelected(true);
					used.push(line);
				}
				list.addChild(item);
			}
			//more seleted than searched
			if(used.length < selected.length) {
				for(Object sel : selected) {
					Object ins = getInSelected(sel, used);
					if(ins == null) {
						ListItem item = getListItem(sel);
						item.setSelected(true);
						list.addChildAt(0, item);
					}
				}
			}
		}
	}
	
	private static Object getInSelected(Object line, Array<Object> selected) {
		for(Object sel : selected) {
			if(sel.$get("value") == line.$get("value")) {
				return line;
			}
		}
		return null;
	}
	
	
	
	

	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<ListItem> getItems(){
		Array items = list.getChildren();
		Array result = new Array<>();
		if(items.length > 1) {
			java.lang.Object[] slic =items.slice(1);
			result = new Array<>(slic);
			
		}
		return result;
	}
	
	
	private ListItem getListItem(Object line) {
		
		ListItem item = new ListItem("", line);
		return item;
		
	}
	
	
	public Array<Object> getSelectedOptions(){
		Array<Object> result = new Array<Object>();
		for(ListItem item : getItems()) {
			if(item.isSelected()) {
				result.push(item.getData());
			}
		}
		return result;
	}
	

	public class ListItem extends JSContainer{

		private CheckBox cb = new CheckBox("cb");
		
		private JSContainer label = new JSContainer("label", "span");
		
		private Object data = null;
		public ListItem(String name, Object data) {
			super(name, "li");
			addClass("slds-truncate");
			this.data = data;
			addChild(cb);
			addChild(label);
			
			//label.addClass("slds-truncate");
			String value = (String)data.$get("label");
			setAttribute("title", value);
			label.setHtml(value);
			
		}
		
		public String getValue() {
			return (String)data.$get("value");
		}
		
		public Boolean isVisible() {
			return getStyle("display") != "none";
		}
		
		public Boolean isSelected() {
			if(isVisible() && cb.getValue()) {
				return true;
			}else {
				return false;
			}
		}
		
		public void setSelected(boolean b) {
			cb.setValue(b);
		}
		
		public Object getData() {
			return this.data;
		}
		
	}
}
