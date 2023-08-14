package sp.filters;

import static jsweet.dom.Globals.setTimeout;
import static jsweet.util.Lang.function;

import java.util.function.Function;

import com.spoonconsulting.lightning.Modal.BackDrop;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;



public class GridHeader extends JSContainer{
	
private GridControls controls = null;
	
	private Object sfFilters;
	
	private Object filters;
	
	private AdvancedSearch search = new AdvancedSearch("search");
	
	private BackDrop bd = new BackDrop("bd");
	
	private ModalTextSearch textSearch = new ModalTextSearch("textSearch");
	
	private String type;
	
	

	public GridHeader(String name) {
		super(name, "div");
		addChild(textSearch);
		textSearch.setBackdrop(bd);
		addChild(bd);
		controls = new GridControls("controls");
		addChild(controls);
		addChild(search);
		addClass("GridHeader");
		this.type = "ContentVersion";
		search.setBackdrop(bd);
		Util.getService().getDefaultFilter("ContentVersion").then((r)->{
			setFilters(r);
			
			setTimeout(function(() -> {
				doRefreshList();
			}), 2000);
			
		});
		 
		controls.setTableInfo("https://ceva--jun2022.sandbox.lightning.force.com/img/icon/t4v35/standard/custom_120.png", "", "Attachments");
		
		textSearch.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				@SuppressWarnings("unchecked")
				Array<String> includes = (Array<String>)evt.$get("includes");
				Object col = (Object)evt.$get("column");
				String fieldName = (String)col.$get("fieldName");
				Object filter = (Object)filters.$get(fieldName);
				filter.$set("includes",includes);
				filters.$set(fieldName, filter);
				sfFilters.$set("Filters__c", JSON.stringify(filters));
				doRefreshList();
				
			}
		}, "onapply");
		
		search.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Object cfilter = (Object)evt.$get("filter");
				//Object col = (Object)evt.$get("column");
				String fieldName = (String)evt.$get("fieldName");
				Object filter = (Object)filters.$get(fieldName);
				if(cfilter == null) {
					filter.$delete("custom");
				}else {
					filter.$set("custom",cfilter);
				}
				filters.$set(fieldName, filter);
				sfFilters.$set("Filters__c", JSON.stringify(filters));
				doRefreshList();
				
			}
		}, "onapply");
	}
	
	public String getType() {
		return this.type;
	}
	
	public Array<Object> customFilter(Array<Object> lst ){
		String sFilter = (String)sfFilters.$get("Filters__c");
		Object oFilters = (Object)JSON.parse(sFilter);
		Array<Object> result = new Array<Object>();
		for(Object o : lst) {
			boolean incl = doIncl(o, oFilters);
			if(incl) {
				result.push(o);
			}
		}
		return result;
		//String op1 =
	}
	
	public boolean doIncl(Object o, Object oFilters) {
		for(String key : Object.keys(oFilters)) {
			Object oFilter = (Object)oFilters.$get(key);
			Object custom = (Object)oFilter.$get("custom");
			
			boolean b = doCustomFilter(custom, o, key);
			if(!b) {
				return false;
			}
		}
		return true;
	}
	
	public boolean doCustomFilter(Object filter, Object o, String fieldName){
		if(filter == null) {
			return true;
		}
		String op1 = (String)filter.$get("operator1");
		String val1 = (String)filter.$get("value1");
		String op2 = (String)filter.$get("operator2");
		String val2 = (String)filter.$get("value2");
		String op = (String)filter.$get("andOr");
		
		if(fieldName == "ContentSize") {
			String sval = (String)o.$get(fieldName);
			Double val = 0d;
			if(sval != null && sval.length() > 0) {
				val = Double.parseDouble(sval.replace("KB", "").trim());
			}
			boolean incl1 = incl(val, op1, val1);
			boolean incl2 = incl(val, op2, val2);
			if(op == "and") {
				return incl1 && incl2;
			}else {
				return incl1 || incl2;
			}
		}else {
		
			String val = (String)o.$get(fieldName);
			if(fieldName.toLowerCase() == "filelink") {
				val = (String)o.$get("Title");
			}
			if(fieldName == "OwnerLink") {
				val = (String)o.$get("OwnerName");
			}
			if(val == null) {
				return false;
			}
			boolean incl1 = incl(val, op1, val1);
			boolean incl2 = incl(val, op2, val2);
			if(op == "and") {
				return incl1 && incl2;
			}else {
				return incl1 || incl2;
			}
		}
		
	}
	
	public boolean incl(Double o, String op, String sval) {
		try {
			Double val = Double.valueOf(sval);
			if(op == "=") {
				return o == val;
			}else if(op == ">") {
				return o > val;
			}else if(op == ">=") {
				return o >= val;
			}else if(op == "<") {
				return o < val;
			}else if(op == "<=") {
				return o <= val;
			}else if(op == "!=") {
				return o != val;
			}
		}
		catch(Exception e) {
			return true;
		}
		
		return false;
	}
	
	public boolean incl(String o, String op, String val) {
		if(op == "=") {
			return o == val;
		}else if(op == "contains") {
			return o.toLowerCase().contains(val.toLowerCase());
		}else if(op == "starts") {
			return o.toLowerCase().startsWith(val.toLowerCase());
		}else if(op == "ends") {
			return o.toLowerCase().endsWith(val.toLowerCase());
		}else if(op == "notcontains") {
			return !incl(o, "contains", val);
		}else if(op == "notstarts") {
			return !incl(o, "starts", val);
		}else if(op == "notends") {
			return !incl(o, "ends", val);
		}else if(op == "!=") {
			return o.toLowerCase() != val.toLowerCase();
		}
		return false;
	}
	
	public void openCustomFilter(String fieldName) {
		Object col = (Object)this.filters.$get(fieldName);
		if(fieldName == "fileLink" && col == null) {
			col = (Object)this.filters.$get("FileLink");
		}
		search.refresh(col, "ContentVersion");
		search.open();
		setRendered(false);
		render();
	}
	
	public void setWidths(Array<Double> widths) {
		((Object)this.filters.$get("ContentModifiedDate")).$set("width", widths.$get(0));
		((Object)this.filters.$get("fileLink")).$set("width", widths.$get(1));
		if(this.filters.hasOwnProperty("FileLink")) {
			((Object)this.filters.$get("FileLink")).$set("width", widths.$get(1));
		}
		((Object)this.filters.$get("FileExtension")).$set("width", widths.$get(2));
		((Object)this.filters.$get("ContentSize")).$set("width", widths.$get(3));
		((Object)this.filters.$get("OwnerLink")).$set("width", widths.$get(4));
		this.sfFilters.$set("Filters__c", JSON.stringify(this.filters));
		updateFilter();
	}
	
	public void setSort(Object sort) {
		String fieldName = (String)sort.$get("fieldName");
		String direction = (String)sort.$get("sortDirection");
		
		for(String key : Object.keys(this.filters)) {
			Object filter = (Object)this.filters.$get(key);
			filter.$delete("sorting");
			if(key == fieldName) {
				filter.$set("sorting", direction);
				if(fieldName.toLowerCase() == "filelink") {
					if(filters.hasOwnProperty("FileLink")) {
						Object excep = (Object)this.filters.$get("FileLink");
						excep.$set("sorting", direction);
						filters.$set("FileLink", excep);
					}
				}
			}
			this.filters.$set(key, filter);
		}
		this.sfFilters.$set("Filters__c", JSON.stringify(this.filters));
		doRefreshList();
	}
	
	public void clearFilters() {
		for(String key : Object.keys(this.filters)) {
			Object filter = (Object)this.filters.$get(key);
			filter.$delete("custom");
			filter.$delete("includes");
			this.filters.$set(key, filter);
		}
		this.sfFilters.$set("Filters__c", JSON.stringify(this.filters));
		doRefreshList();
		
	}
	
	@SuppressWarnings("unchecked")
	public void openSimpleFilter(String fieldName, Array<Object> fileData) {
		textSearch.open();
		System.out.println(fileData);
		
		Object col = (Object)this.filters.$get(fieldName);
		if(fieldName == "fileLink" && col == null) {
			col = (Object)this.filters.$get("FileLink");
		}
		System.out.println(col);
		textSearch.setColumn(col);
		Array<String> includes = (Array<String>)col.$get("includes");
		textSearch.setData(fileData, includes);
		
		if(includes != null) {
			textSearch.setSelectedOptions(includes);
		}
		setRendered(false);
		render();
	}
	
	public void setFilters(Object filters) {
		
		this.sfFilters = filters;
		String label = (String)filters.$get("Label__c");
		String sFilters = (String)filters.$get("Filters__c");
		//Boolean pinned = (Boolean)filters.$get("Is_Default__c");
		Object oFilters = (Object)JSON.parse(sFilters);
		setFilters(oFilters, label);
	}
	
	
	public void setFilters(Object filters, String label) {
		this.filters = filters;
		controls.setFilterLabel(label);
	}
	
	
	public void doRefreshList() {
		this.doRefreshList(null);
	}
	
	public void doRefreshList(Function<Array<Object>, Void> callback) {
		CustomEvent refreshList = new CustomEvent("refreshList");
		refreshList.$set("filters", filters);
		fireListener("refreshList", refreshList);
		setRendered(false);
		render();
		String sffiters = (String)this.sfFilters.$get("Filters__c");
		Util.getService().updateFilter(sffiters, getFilterId());
	}
	
	public void updateFilter() {
		String sffiters = (String)this.sfFilters.$get("Filters__c");
		Util.getService().updateFilter(sffiters, getFilterId());
	}
	
	public String getFilterId() {
		return (String)sfFilters.$get("Id");
	}

}
