package sp.datagrid;

import com.spoonconsulting.lightning.enums.MenuAlignment;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class DataGridHeader extends JSContainer{
	

	private Object column = null;
	
	//private IconContainer sorticon = new IconContainer("sorting", "span");
	
	private HeaderAction action = null;
	
	private String orderByDir = "none";
	
	//private AdvancedSearch search =null;
	//private Modal.BackDrop bd = new Modal.BackDrop("bd");
	
	public DataGridHeader(String name, Object col, String objectType) {
		super(name, "th");
		addClass("DataGridHeader");
		setStyle("width", "5rem");
		this.column = col;
	//	 search = new AdvancedSearch("advanced");
		//addChild(search);
	//	addChild(bd);
		//search.setBackdrop(bd);
		String label = (String)col.$get("label");

		setStyle("padding", "0")
		//.setStyle("position", "sticky")
		.setStyle("top", "0")
		.setStyle("z-index", "10")
		.setStyle("border-bottom", "solid 1px silver");
		
		addClass("slds-has-button-menu slds-is-sortable");
		JSContainer a = new JSContainer(name, "a");
		addChild(a);
		a.addClass("slds-th__action slds-text-link_reset");
		a.setAttribute("href", "javascript:void(0);");
		
		JSContainer div = new JSContainer(name, "div");
		div.addClass("slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate");
		a.addChild(div);
		JSContainer span = new JSContainer("label", "span")
				.addClass("slds-truncate")
				.setHtml(label)
				.setAttribute("title", label);
		div.addChild(span);
		
	//	sorticon.setIconName("utility:arrowdown");
		//sorticon.getIcon().addClass("slds-icon-text-default slds-is-sortable__icon");
		//div.addChild(sorticon);
		
		action = new HeaderAction("action", col, objectType);
		addChild(action);
		
		
		a.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
				DataGrid grid = getAncestorWithClass("slds-table");
				if(orderByDir == "ASC") {
					orderByDir ="DESC";
				}else {
					orderByDir = "ASC";
				}
				
				grid.orderBy(name, orderByDir);
			}
		}, "click");
		
		
	}
	
	
	public Object getColumn() {
		return column;
	}
	
	@SuppressWarnings("unchecked")
	public void setHasQuery() {
		boolean hasQuery = false;
		if(column.hasOwnProperty("includes")) {
			Array<String> incl = (Array<String>)column.$get("includes");
			if(incl.length > 0) {
				hasQuery = true;
			}
		}
		
		if(column.hasOwnProperty("custom")) {
			hasQuery = true;
		}
		
		if(hasQuery) {
			addClass("hasquery");
		}else {
			removeClass("hasquery");
		}
		render();
	}
	public void setOrderByDir(String dir) {
		this.orderByDir = dir;
	/*	if(dir == "none") {
			sorticon.setStyle("display", "none");
		}else {
			sorticon.setStyle("display", null);
			if(dir == "ASC") {
				sorticon.setIconName("utility:arrowup");
			}else {
				sorticon.setIconName("utility:arrowdown");
			}
		}*/
	}
	
	public HeaderAction getAction() {
		return action;
	}
	
	public void setMenuAlignment(MenuAlignment alignment) {
		this.action.setMenuAlignment(alignment);
	}
	
	public void setWidth(Double width) {
		setStyle("width", width + "rem");
		column.$set("width", width);
		
	}

	public void refresh() {
		action.refresh();
		setHasQuery();
	}
}
