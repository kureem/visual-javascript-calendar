package sp.datagrid;


import static jsweet.dom.Globals.alert;

import java.util.function.Function;

import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.Modal.BackDrop;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.JSON;
import jsweet.lang.Object;

public class HeavyGrid extends JSContainer{

	private DataGrid grid = null;
	
	private Array<Object> columns = new Array<Object>();
	
	private GridControls controls = null;
	
	private Object sfFilters;
	
	private ModalListFilters modalListFilters = null;
	
	private AdvancedSearch search = new AdvancedSearch("search");
	
	private AdvancedDateSearch dateSearch = new AdvancedDateSearch("search");
	
	private ModalCloseCase modalCloseCase = new ModalCloseCase("closeCases");
	
	private BackDrop bd = new BackDrop("bd");
	
	private String type;
	
	public HeavyGrid(String name, String type, boolean dry) {
		super(name, "div");
		this.type = type;
		grid = new DataGrid("grid",type);
		controls = new GridControls("ctrs", grid, dry, type);
		modalListFilters = new ModalListFilters("listFilters", type);
		addClass("HeavyGrid");
		modalListFilters.setBackdrop(bd);
		modalCloseCase.setBackdrop(bd);
		search.setBackdrop(bd);
		dateSearch.setBackdrop(bd);
		addChild(dateSearch);
		addChild(modalListFilters);
		addChild(modalCloseCase);
		addChild(search);
		addChild(bd);
		addChild(controls);
		
		Layout lgrid = new Layout("lgrid", "div");
		LayoutItem lgridItem = new LayoutItem("lgridItem", "div");
		
		lgridItem.setSize(12);
		lgridItem.setStyle("position", "relative");
		lgrid.setMultipleRows(true);
		
		lgridItem.addChild(grid);
		lgridItem.addClass("scroller_" + type);
		lgrid.addChild(lgridItem);
		lgridItem.setStyle("height", "560px").setStyle("overflow", "auto");
		
		addChild(lgrid);
		
		grid.setColumns(columns);

		
		grid.on("orderby", (a,b)->{
		
			DataGrid gri = (DataGrid)a;
			
			String orderBy = (String)b.$get("orderBy");
			String orderByDir = (String)b.$get("orderByDir");
			System.out.println("gri.getOrderBy():" +gri.getOrderBy());
			System.out.println("gri.getOrderByDir():" +gri.getOrderByDir());
			System.out.println("orderBy:" + orderBy);
			System.out.println("orderByDir:" + orderByDir);
			
			return null;
		});
		
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Grids grids = getAncestorWithClass("Grids");
				evt.$set("Grid", getName());
				grids.fireListener("remoteSearch", evt);
				
			}
		}, "remoteSearch");
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String fieldName = (String)evt.$get("fieldName");
				clearQuery(fieldName);
			}
		}, "clearQuery");
		
	}
	
	public void closeCase(String selectedId) {
		modalCloseCase.open();
		modalCloseCase.refresh(grid, selectedId, type);
	}
	
	public int getLeft(String colName) {
		Object o = grid.getFilters();
		Array<Object> lst = new Array<Object>();
		for(String fieldName : Object.keys(o)) {
			lst.push((Object)o.$get(fieldName));
		}
		
		Object[] res = lst.sort((a,b)->{
			Integer pos1 = (Integer)a.$get("position");
			Integer pos2 = (Integer)b.$get("position");
			return Double.valueOf( pos1.compareTo(pos2) + "");
			
		});
		
		int total = 0;
		for(Object filter : res) {
			Integer widht = 5;
			if(filter.hasOwnProperty("width") && filter.$get("width") != null) {
				widht = (Integer)filter.$get("width");
			}
			total = total + widht;
			
			String fieldName = (String)filter.$get("fieldName");
			if(fieldName == colName) {
				break;
			}
		}
		
	
		return total;
	}
	

	
	@SuppressWarnings("unchecked")
	public void pinCurrent() {
		String filterId = (String)sfFilters.$get("Id");
		Util.getService().pinFilter(filterId, type).then((result)->{
			sfFilters.$set("Is_Default__c", true);
		}).Catch((e)->{
			Object b =  (Object)((Object)e).$get("body");
			Array<Object> pe = (Array<Object>)b.$get("pageErrors");
			if(pe != null && pe.length > 0) {
				alert(pe.$get(0).$get("message"));
			}
			Object fe  =(Object)b.$get("fieldErrors");
			if(fe != null && Object.keys(fe).length > 0) {
				String feMsg  = "";
				for(String key : Object.keys(fe)) {
					
					Array<Object> f = (Array<Object>)fe.$get(key);
					if(f != null && f.length > 0) {
						feMsg = feMsg + "\n" + f.$get(0).$get("message");
					}
				}
				if(feMsg != null) {
					alert(feMsg);
				}
			}
		});
	}
	
	public void editRecord(Event evt) {
		Grids grids = getAncestorWithClass("Grids");
		evt.$set("objectType", type);
		grids.fireListener("editRecord", evt);
	}
	
	public String getType() {
		return type;
	}
	
	public void openListFilters() {
		modalListFilters.open();
		modalListFilters.refresh();
	}
	
	public void setFilters(Object filters) {
		this.sfFilters = filters;
		String label = (String)filters.$get("Label__c");
		String sFilters = (String)filters.$get("Filters__c");
		Boolean pinned = (Boolean)filters.$get("Is_Default__c");
		Object oFilters = (Object)JSON.parse(sFilters);
		setFilters(oFilters, label);
		controls.setPinned(pinned);
	}
	
	
	public void setFilters(Object filters, String label) {
		grid.setFilters(filters);
		this.columns = grid.getColumns();
		controls.setColumns(columns);
		controls.setFilterLabel(label);
	}
	
	
	public void doRefreshList() {
		doRefreshList(null);
	}
	
	public String getFilterId() {
		return (String)sfFilters.$get("Id");
	}
	
	public void doRefreshList(Function<Array<Object>, Void> callback) {
		try {
		Object of = grid.getFilters();
		if(of != null && Object.keys(of).length > 0) {
			sfFilters.$set("Filters__c", JSON.stringify(of));
		}
		String sFilters = (String)sfFilters.$get("Filters__c");
		Grids grids = getAncestorWithClass("Grids");
		grids.showSpinner(true);
		String filterId = (String)sfFilters.$get("Id");
		Util.getService().getCases(0, sFilters, type, filterId).then((result)->{
			setRendered(false);
			setData(result);
			grids.showSpinner(false);
			grids.render();
			refresh();
			if(callback != null) {
				callback.apply(result);
			}
			
		});
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	
	public void clearQuery(String fieldName) {
		//remove includes
		//remove custom
		//Object filter = (Object)sfFilters.$get(fieldName);
		String sFilters = (String)sfFilters.$get("Filters__c");
		Object oFilters = (Object)JSON.parse(sFilters);
		
		Object ffilter = (Object)oFilters.$get(fieldName);
		
		ffilter.$set("includes", new Array<String>());
		ffilter.$delete("custom");
		oFilters.$set(fieldName, ffilter);
		sfFilters.$set("Filters__c", JSON.stringify( oFilters));
		setFilters(sfFilters);
		doRefreshList();
	}
	
	public void saveCustomFilter(String fieldName, String objectType, Object result, Function<Array<Object>, Void> callback) {
		grid.setCustomFilter(fieldName, result);
		doRefreshList(callback);
	}
	
	public void customFilter(Object col) {
		String type =(String)col.$get("type");
		if(type == "DateTime") {
			dateSearch.refresh(col, type);
			dateSearch.open();
		}else {
			search.refresh(col, this.type);
			search.open();
		}
	}
	
	public void showSpinner(boolean b) {
		Grids grids = getAncestorWithClass("Grids");
		grids.showSpinner(b);
	}
	public void refresh() {
		grid.refresh();
	}
	
	public void cloneList(String label) {
		showSpinner(true);
		Util.getService().cloneFilter((String)this.sfFilters.$get("Id"), label).then((result)->{
			setFilters(result);
			doRefreshList();
		});
	}
	public void deleteList() {
		showSpinner(true);
		Util.getService().deleteFilter((String)this.sfFilters.$get("Id")).then((result)->{
			setFilters(result);
			doRefreshList();
		});
	}
	
	public void addList(String label) {
		showSpinner(true);
		Util.getService().createNewFilter(type, label).then((result)->{
			setFilters(result);
			doRefreshList();
		});
	}
	
	public void renameList(String label) {
		this.sfFilters.$set("Label__c", label);
		this.controls.setFilterLabel(label);
		Util.getService().renameFilter((String)this.sfFilters.$get("Id"), label);
	}
	
	public void setColumns(Array<Object> cols) {
		this.columns = cols;
		grid.setColumns(columns);
		controls.setColumns(columns);
	}
	
	public void setData(Array<Object> data) {
		grid.setData(data);
	}
	
	public void setGridInfo(String icon, String title, String subtitle) {
		this.controls.setTableInfo(icon, title, subtitle);
	}
	
	public void refreshList() {
		this.grid.refreshList();
	}

	public DataGrid getGrid() {
		return this.grid;
	}
}
