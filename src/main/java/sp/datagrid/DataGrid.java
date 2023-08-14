package sp.datagrid;

import static jsweet.dom.Globals.document;

import com.spoonconsulting.lightning.CheckBox;
import com.spoonconsulting.lightning.enums.MenuAlignment;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.dom.Node;
import jsweet.dom.NodeList;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class DataGrid extends JSContainer{

	private Array<Object> columns = new Array<Object>();
	
	private Array<Object> data = new Array<Object>();
	
	private JSContainer header = new JSContainer("head", "thead");
	
	private JSContainer body = new JSContainer("body", "tbody");
	
	
	private String orderBy = "CaseNumber";
	
	private String orderByDir = "ASC";
	
	private Array<DataGridHeader> tableHeaders = new Array<DataGridHeader>();
	
	
	private double pageSize = 20;
	
	private double currentPage = 0;
	
	private boolean lastPage = false;
	
	private Object filters = new Object();
	
	private String type;
	
	private boolean loading = false;
	
	public DataGrid(String name, String type) {
		super(name, "table");
		this.type = type;
		addClass("DataGrid");
		addClass("slds-table").addClass("slds-table_bordered").addClass("slds-table_fixed-layout");
		setStyle("position", "relative");
		addChild(header);
		addChild(body);
		
		
		document.addEventListener("click",(e)->{
			NodeList dps = document.querySelectorAll(".slds-dropdown");
			NodeList triggers = document.querySelectorAll(".slds-dropdown-trigger");
			boolean istrigger = false;
			
			boolean bypass = false;
			for(Node trigger :triggers) {
				HTMLElement elem = (HTMLElement)trigger;
				if(elem.classList.contains("except")) {
					bypass = true;
					break;
				}
			//	if(!elem.classList.contains("except")) {
					
					if(trigger.contains((Node)e.target)){
						istrigger = true;
						break;
					}
				//}
			}
			try {
				if(!istrigger && !bypass) {
					dps.forEach((n)->{
						if(! n.contains((Node)e.target)) {
							HTMLElement el = (HTMLElement)n;
							el.style.display = "none";
						}
					});
				}
			}catch(Exception ee) {
				
			}
		});
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String fieldName = (String)evt.$get("fieldName");
				String sortDir = (String)evt.$get("sortDir");
				String onOff = (String)evt.$get("onOff");
				Object filter = (Object)filters.$get(fieldName);
				if(filter == null) {
					filter = new Object();
					filters.$set(fieldName, filter);
				}
				if(onOff == "on") {
					
					filter.$set("sorting", sortDir);
				}else {
					filter.$delete("sorting");
				}
				
				filters.$set(fieldName, filter);
				
				refreshList();
			}
		}, "sorting");
		
		
		addEventListener(new EventListener() {
			
			@SuppressWarnings("unchecked")
			@Override
			public void performAction(Renderable source, Event evt) {
				String fieldName = (String)evt.$get("fieldName");
				Array<Object> inclopts = (Array<Object>)evt.$get("options");
				Array<String> includes = new Array<String>();
				for(Object o : inclopts) {
					includes.push((String)o.$get("value"));
				}
				
				Object filter = (Object)filters.$get(fieldName);
				if(filter == null) {
					filter = new Object();
					filters.$set(fieldName, filter);
				}
				filter.$set("includes", includes);
				if((Boolean)evt.$get("clearFilter")) {
					filter.$delete("custom");
				}
				filters.$set(fieldName, filter);
				refreshList();
				
			}
		}, "filterIncludes");
	}
	
	public void refreshList() {
		currentPage = 0;
		this.lastPage = false;
		HeavyGrid gr = getAncestorWithClass("HeavyGrid");
		gr.doRefreshList();
	}
	
	public void setFilters(Object filters) {
		this.filters = filters;
		this.columns = new Array<Object>();
		
		for(String fieldName : Object.keys(filters)) {
			Object col = (Object)filters.$get(fieldName);
			this.columns.push(col);
		}
		sortColumns();
		setColumns(columns);
		//refreshList();
	}
	
	public void setCustomFilter(String field, Object fil) {
		Object f = (Object)filters.$get(field);
		f.$set("custom", fil);
		this.columns = new Array<Object>();
		
		for(String fieldName : Object.keys(filters)) {
			Object col = (Object)filters.$get(fieldName);
			this.columns.push(col);
		}
		sortColumns();
	}
	
	public void sortColumns() {
		Object[] objs = this.columns.sort((a,b)->{
			Double pos1 = (Double)a.$get("position");
			Double pos2 = (Double)b.$get("position");
			Integer res = pos1.compareTo(pos2);
			return res.doubleValue();
		});
		//Object[] objs = this.columns.reverse();
		this.columns = new Array<Object>();
		for(Object obj : objs) {
			this.columns.push(obj);
		}
	}
	
	public Array<Object> getColumns(){
		return columns;
	}
	
	public Array<String> getSelectedIds(){
		Array<String> ids = new Array<String>();
		for(DataRow row : getRows()) {
			if(row.isSelected()) {
				ids.push((String)row.getData().$get("Id"));
			}
		}
		return ids;
	}
	
	public void showColumns(Array<String> cols) {
		
		for(String fieldName : Object.keys(filters)) {
			double index = cols.indexOf(fieldName);
			Object filter = (Object)filters.$get(fieldName);
			if(index < 0) {
				filter.$set("hidden", true);
				
			}else {
				filter.$set("hidden", false);
			}
			filter.$set("position", index);
		}
		
		for(Object col : columns) {
			String name = (String)col.$get("fieldName");
			
			Object filter = (Object)filters.$get(name);
			if(filter == null) {
				filter = new Object();
				filters.$set(name, filter);
			}
			col.$set("position", filter.$get("position"));
			
			if(cols.indexOf(name) <0) {
				col.$set("hidden", true);
				filter.$set("hidden", true);
			}else {
				col.$set("hidden", false);
				filter.$set("hidden", false);
			}
		}
		
		sortColumns();
		setColumns(columns);
		refreshList();
	}
	
	public Object getFilters() {
		return this.filters;
	}
	
	@SuppressWarnings("unchecked")
	public void setColumns(Array<Object> cols) {
		this.columns = cols;
		tableHeaders = new Array<DataGridHeader>();
		header.clearChildren();
		header.setRendered(false);
		JSContainer hrow = new JSContainer("tr");
		header.addChild(hrow);
		hrow.addClass("slds-line-height_reset");
		JSContainer num = new JSContainer("th").setStyle("width", "42px");
		num.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
		num.setHtml("&nbsp;");
		hrow.addChild(num);
		
		JSContainer select = new JSContainer("th").setStyle("width", "30px");
		select.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
		select.addChild(createHeaderSelect());
		hrow.addChild(select);
		
		double length = cols.length;
		double index = 0;
		for(Object col : cols) {
			Boolean hidden = (Boolean)col.$get("hidden");
			Boolean display = (Boolean)col.$get("display");
			if((hidden == null || !hidden) && (display == null || display)) {
				Double width = (Double)col.$get("width");
				Boolean hasQuery = false;
				if(col.hasOwnProperty("includes")) {
					Array<String> incl = (Array<String>)col.$get("includes");
					if(incl.length > 0) {
						hasQuery = true;
					}
				}
				if(col.hasOwnProperty("custom")) {
					hasQuery = true;
				}
				DataGridHeader uicol = createStringHead(col);
				hrow.addChild(uicol);
				index++;
				if(index >= length -3) {
					uicol.setMenuAlignment(MenuAlignment.RIGHT);
				}
				if(width != null) {
					uicol.setStyle("width", width + "rem");
				}
				if(hasQuery) {
					uicol.addClass("hasquery");
				}else {
					uicol.removeClass("hasquery");
				}
			}
		}
		
		JSContainer act = new JSContainer("th").setStyle("width", "32px");
		act.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
		act.setHtml("&nbsp;");
		hrow.addChild(act);
		
		
	}
	
	public void setColumnWidth(String name, Double width) {
		Object filter = (Object)filters.$get(name);
		if(filter == null) {
			filter = new Object();
			filters.$set(name, filter);
		}
		filter.$set("width", width);
	}
	
	private DataGridHeader createStringHead(Object col) {
		
		String name = (String)col.$get("fieldName");
		DataGridHeader h = new DataGridHeader(name, col,type);
		if(name == "CaseNumber")
			h.setOrderByDir("ASC");
		else
			h.setOrderByDir("none");
		tableHeaders.push(h);
		return h;
		
	}
	
	public void setData(Array<Object> data) {
		this.data = data;
		this.body.clearChildren();
		this.body.setRendered(false);
		this.currentPage = 0;
		this.lastPage = false;
		addPage();
		getParent().getListeners().$delete("scroll");
		infiniteTable();
		
	
	}
	
	public void refresh() {
		for(DataGridHeader header : tableHeaders) {
			header.refresh();
		}
	}
	
	public JSContainer getBody() {
		return body;
	}
	
	
	public void addPage() {
		double start = currentPage*pageSize;
		double end = start + pageSize;
		if(data.length < end) {
			end = data.length;
		}
		for(double i = start; i < end; i++) {
			DataRow row = new DataRow("", type);
			Object line = data.$get(i);
			row.setData(line, columns);
			body.addChild(row);
			
		}		
	}
	
	public void retrievePage() {
		if(!lastPage) {
			
			Integer page = Integer.parseInt(getCurrentPage()+ "");
			HeavyGrid hg = getAncestorWithClass("HeavyGrid");
			String filterId = hg.getFilterId();
			loading = true;
			Util.getService().getCases(page, JSON.stringify( filters),type, filterId).then((result)->{
				addNewPage(result);
				loading = false;
			});
		}
		
	}
	
	public void addNewPage(Array<Object> data) {
		
		if(data.length > 0) {
			for(Object o : data) {
				this.data.push(o);
			}
			
			addPage();
			body.setRendered(false);
			body.render();
		}
		
		if(data.length < 20) {
			lastPage = true;
		}
	}
	
	
	public double getCurrentPage() {
		return currentPage;
	}



	public void infiniteTable() {
		
		if(!getParent().hasListenerOfType("scroll")) {
		
			getParent().addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					HTMLElement div = source.getElement();
					
					for(DataGridHeader he : tableHeaders) {
						he.getAction().positionDropdown(evt);
					}
					/*
					 * double left = div.scrollLeft;
					 * document.querySelectorAll(".my-dp").forEach((n)->{ HTMLElement e =
					 * (HTMLElement)n; e.style.left = (Double.parseDouble(e.style.left.replace("px",
					 * "")) -left) + "px"; });
					 */
					// TODO Auto-generated method stub
					if(!loading && !lastPage) {
						
						if((div.scrollTop + div.clientHeight + 20) > div.scrollHeight) {
							currentPage++;
							System.out.println("currentPage:" + currentPage);
							//addPage();
							retrievePage();
						}
					}
					
					
				}
			}, "scroll");
		}
		

	}
	
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<DataRow> getRows(){
		Array rows = body.getChildren();
		return rows;
	}
	
	private JSContainer createHeaderSelect() {
		JSContainer div = new JSContainer("div");
		div.addClass("slds-th__action slds-th__action_form");
		CheckBox checkbox = new CheckBox("cb");
		checkbox.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Boolean selected = checkbox.getValue();
				for(DataRow row : getRows()) {
					row.setSelected(selected);
				}
			}
		}, "change");
		div.addChild(checkbox);
		return div;
	}

	public String getOrderBy() {
		return orderBy;
	}

	public String getOrderByDir() {
		return orderByDir;
	}

	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}

	public void setOrderByDir(String orderByDir) {
		this.orderByDir = orderByDir;
	}
	
	public void orderBy(String name, String dir) {
		for(DataGridHeader he : tableHeaders) {
			if(he.getName() == name) {
				he.setOrderByDir(dir);
			}else {
				he.setOrderByDir("none");
			}
		}
		this.orderBy = name;
		this.orderByDir = dir;
		CustomEvent evt = new CustomEvent("orderby");
		evt.$set("orderBy",name);
		evt.$set("orderByDir", dir);
		fireListener("orderby", evt);
		
	}

}
