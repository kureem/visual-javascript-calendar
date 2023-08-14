package sp.datagrid;

import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.Modal.BackDrop;
import com.spoonconsulting.lightning.Spinner;

import jsweet.lang.Array;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class Grids extends Layout{

	private HeavyGrid casesGrid = null;//new HeavyGrid("cases", "Case");
	
	private HeavyGrid tasks = null;//new HeavyGrid("tasks", "Task", false);
	
//	private Function getCases = null;
	
	
	private Spinner spinner = new Spinner("spinner");
	
	private BackDrop bd = new BackDrop("bd");
	
	public Grids(String name) {
		super(name, "div");
		boolean casedry = false;
		if(name != "dss" && name != "ds" && name != "dsss") {
			casedry = true;
		}
		String casetype = "Case";
		String tasktype = "Task";
		if(name == "ds") {
			casetype = "Case-1";
		}else if(name == "ds-1") {
			casetype = "Case-2";
		}else if(name == "ds-2") {
			casetype = "Case-3";
		}else if(name == "dsss") {
			casetype = "Case-4";
			tasktype = "Task-4";
		}
		casesGrid = new HeavyGrid("cases", casetype, casedry);
		tasks = new HeavyGrid("tasks", tasktype, casedry);
		addChild(bd.addChild(spinner));
		bd.setStyle("display", "none");
		addClass("slds-card");
		addClass("Grids");
		addClass("sticky-grid");
		LayoutItem head = new LayoutItem("head", "div");
		addChild(head);
		head.addChild(new AppHeader("appHeader", casesGrid.getGrid(),casedry));
		
		LayoutItem top = new LayoutItem("top", "div");
		top.setSize(12);
		top.addChild(casesGrid);
		addChild(top);
		casesGrid.setAttribute("type", casetype);
		
		
		
		
		
		setMultipleRows(true);
		
		
		Util.getService().getDefaultFilter(casetype).then((r)->{
			casesGrid.setFilters(r);
			String filterId = (String)r.$get("Id");
			Util.getService().getCases(0, (String)r.$get("Filters__c"), "Case", filterId).then((cases)->{
				casesGrid.setData(cases);
				casesGrid.setRendered(false);
				casesGrid.render();
			});
		});
		
		if(name == "ds-2" || name== "dss"  || name == "dsss") {
		
			LayoutItem bottom = new LayoutItem("bottom", "div");
			bottom.setSize(12);
			addChild(bottom);
			bottom.setStyle("margin-top", "1rem");
			
			bottom.addChild(tasks);
			
			tasks.setGridInfo("https://ceva--uat.sandbox.lightning.force.com/img/icon/t4v35/standard/task_120.png", "", "Tasks");
			
			tasks.setAttribute("type", "Task");
			
			
			
			
			Util.getService().getDefaultFilter(tasktype).then((r)->{
				tasks.setFilters(r);
				String filterId = (String)r.$get("Id");
				Util.getService().getCases(0, (String)r.$get("Filters__c"), "Task", filterId).then((cases)->{
					tasks.setData(cases);
					tasks.setRendered(false);
					tasks.render();
				});
			});
		}
	}
	
	
	public HeavyGrid getCasesGrid() {
		return this.casesGrid;
	}
	
	public void setCases(Array<jsweet.lang.Object> cases, Array<jsweet.lang.Object>  columns) {
		casesGrid.setColumns(columns);
		casesGrid.setData(cases);
	}
	
	public void setTasks(Array<jsweet.lang.Object> data, Array<jsweet.lang.Object>  columns) {
		tasks.setColumns(columns);
		tasks.setData(data);
	}
	
	public void callGetCases(Object params) {
		
		/*Promise<Array<Object>> promis =(Promise) this.getCases.call(this.getCases, params);
		promis.then((result)->{
			casesGrid.setData(result);
			casesGrid.setRendered(false);
			casesGrid.render();
			//return null;
		});*/
	}
	
	
	public void setGetCases(Function fn) {
	//	this.getCases = fn;
	}
	
	public void showSpinner(boolean b) {
		if(b) {
			if(!bd.hasClass("slds-backdrop_open"))
				bd.addClass("slds-backdrop_open");
		}else {
			bd.removeClass("slds-backdrop_open");
		}
		bd.setStyle("display", b? null : "none");
	}

}
