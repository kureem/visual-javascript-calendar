package sp.datagrid;

import static jsweet.dom.Globals.setTimeout;
import static jsweet.util.Lang.function;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.ButtonMenu;
import com.spoonconsulting.lightning.MenuItem;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.dom.HTMLInputElement;
import jsweet.lang.Array;
import jsweet.lang.Object;
public class HeaderAction extends ButtonMenu{
	
	//private AdvancedSearch search = null;
	
	private TextSearch txtSearch;
	
	private Object column;
	
	private String objectType;
	
	
	@SuppressWarnings("unchecked")
	public HeaderAction(String name, Object col,  String objectType) {
		super(name, "span");
		this.column = col;
		this.objectType = objectType;
		String type = (String)col.$get("type");
		//this.search = search;
		getButton().addClass("slds-button_icon-x-small");
		getButton().removeClass("slds-button_icon-border-filled");
		addClass("slds-th__action-button ");
		getButton().getIcon().addClass("slds-button__icon_hint slds-button__icon_small");
		setSticky(true);
		getDropdown().addClass("my-dp").setAttribute("relatedId", getButton().getId());
		
		MenuItem sortAsc = new MenuItem("sortAsc");
		sortAsc.setLabel("Sort A to Z");
		sortAsc.refresh();
		getDropdown().addItem(sortAsc);
		
		MenuItem sortDesc = new MenuItem("sortDesc");
		sortDesc.setLabel("Sort Z to A");
		sortDesc.refresh();
		getDropdown().addItem(sortDesc);
		getDropdown().addMenuDivider();
		if(col.hasOwnProperty("sorting")) {
			String sort = (String)col.$get("sorting");
			if(sort == "ASC") {
				sortAsc.setChecked(true);
				sortAsc.refresh();
			}else {
				sortDesc.setChecked(true);
				sortDesc.refresh();
			}
		}
		String fname = (String)col.$get("fieldName");
		
		//if(fname != "Branch_Code__c") {
		
			if(type != "Boolean") {
				MenuItem customFilter = new MenuItem("customFilter");
				customFilter.setLabel("Custom Filter");
				customFilter.refresh();
				getDropdown().addItem(customFilter);
				getDropdown().addMenuDivider();
			}
		//}
		
		MenuItem mWidth = new MenuItem("width");
		mWidth.setChecked(false);
		JSContainer wlabel = new JSContainer("span").setHtml("Column width: 5rem");
		mWidth.getChildren().$get(0).addChild(wlabel);
		mWidth.getChildren().$get(0).setStyle("width", "100%");
		
		JSContainer slider = new JSContainer("slider", "input");
		slider.setAttribute("type", "range");
		slider.setAttribute("min", "2");
		slider.setAttribute("max", "30");
		slider.setAttribute("value", "5");
		if(col.hasOwnProperty("width")) {
			Double width = (Double)col.$get("width");
			if(width != null) {
				slider.setAttribute("value", width + "");
				wlabel.setHtml("Column width: " + width + "rem");
			}
		}
		mWidth.getChildren().$get(0).addChild(slider);
		slider.setStyle("width", "100%").setStyle("display", "block");
		slider.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String value=  ((HTMLInputElement)source.getElement()).value;
				DataGridHeader header = source.getAncestorWithClass("DataGridHeader");
				header.setWidth(Double.parseDouble(value));
				//header.setStyle("width", value + "rem");
				wlabel.setHtml("Column width: " + value + "rem");
				
			}
		}, "change");
		//<input type="range" min="1" max="100" value="50">
		
		getDropdown().addItem(mWidth);
		
		//if(fname != "Branch_Code__c") {
		
			getDropdown().addMenuDivider();
			getDropdown().setStyle("min-width", "250px");
			
			
			if(type == "String") {
				Array<Object> metadata = (Array<Object>)col.$get("metadata");
				txtSearch = new TextSearch("textSearch_" +fname,objectType, col);
				txtSearch.setData(metadata);
				
				MenuItem msearch = new MenuItem("textSearch");
				msearch.setChecked(false);
				msearch.setPrefixIconName(null);
				msearch.setIconName(null);
				msearch.refresh();
				
				msearch.getChildren().$get(0).addChild(txtSearch);
				msearch.getChildren().$get(0).setStyle("width", "100%");
				getDropdown().addItem(msearch);
			}else if(type == "Boolean") {
				Array<Object> metadata = new Array<Object>();
				Object tr = new Object();
				tr.$set("label", "TRUE");
				tr.$set("value", "TRUE");
				metadata.push(tr);
				
				Object fl = new Object();
				fl.$set("label", "FALSE");
				fl.$set("value", "FALSE");
				metadata.push(fl);
				txtSearch = new TextSearch("textSearch",objectType, col);
				txtSearch.setData(metadata);
				
				MenuItem msearch = new MenuItem("textSearch");
				msearch.setChecked(false);
				msearch.setPrefixIconName(null);
				msearch.setIconName(null);
				msearch.refresh();
				
				msearch.getChildren().$get(0).addChild(txtSearch);
				msearch.getChildren().$get(0).setStyle("width", "100%");
				
				getDropdown().addItem(msearch);
			}else if(type == "DateTime") {
				txtSearch = new TextSearch("textSearch",objectType, col);
				txtSearch.setDateOptions();
				
				MenuItem msearch = new MenuItem("textSearch");
				msearch.setChecked(false);
				msearch.setPrefixIconName(null);
				msearch.setIconName(null);
				msearch.refresh();
				
				msearch.getChildren().$get(0).addChild(txtSearch);
				msearch.getChildren().$get(0).setStyle("width", "100%");
				
				getDropdown().addItem(msearch);
			}
		//}
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String name = source.getName();
				System.out.println(name);
				
				MenuItem src = (MenuItem)evt.$get("source");
				if(src == null) {
					return;
				}
				if(src.getName() == "customFilter") {
					HeavyGrid grid = getAncestorWithClass("HeavyGrid");
					grid.customFilter(col);
					close();
					//getDropdown().setStyle("display", "none");
					
				}else if(src.getName() == "sortAsc") {
					src.setChecked(!src.isChecked());
					src.refresh();
					evt.$set("fieldName", fname);
					evt.$set("sortDir", "ASC");
					
					if(src.isChecked()) {
						evt.$set("onOff", "on");
						MenuItem desc = getMenuItem("sortDesc");
						if(desc.isChecked()) {
							desc.setChecked(false);
							desc.refresh();
						}
					}else {
						evt.$set("onOff", "off");
					}
					//getDropdown().setStyle("display", "none");
					close();
					DataGrid dg = getAncestorWithClass("DataGrid");
					dg.fireListener("sorting", evt);
					
					
				}else if(src.getName() == "sortDesc") {
					src.setChecked(!src.isChecked());
					src.refresh();
					evt.$set("fieldName", fname);
					evt.$set("sortDir", "DESC");
					if(src.isChecked()) {
						evt.$set("onOff", "on");
						MenuItem asc = getMenuItem("sortAsc");
						if(asc.isChecked()) {
							asc.setChecked(false);
							asc.refresh();
						}
					}else {
						evt.$set("onOff", "off");
					}
					//getDropdown().setStyle("display", "none");
					close();
					DataGrid dg = getAncestorWithClass("DataGrid");
					dg.fireListener("sorting", evt);
					
				}
				
			}
		}, "select");
		
		
		MenuItem btnCtn = new MenuItem("btnCtn");
		btnCtn.setChecked(false);
		btnCtn.setPrefixIconName(null);
		btnCtn.setIconName(null);
		btnCtn.refresh();
		
		
		
		Button ok = new Button("ok");
		ok.setLabel("Ok");
		ok.setVariant(Variant.BRAND);
		ok.setStyle("margin-right", "0.5rem");
		ok.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				//toggle();
				//getDropdown().setStyle("display", "none");
				close();
				if(txtSearch != null) {
					Array<Object> options = txtSearch.getSelectedOptions();
					evt.$set("options", options);
					evt.$set("fieldName", fname);
					DataGrid dg = getAncestorWithClass("DataGrid");
					dg.fireListener("filterIncludes", evt);
				}
			}
		}, "click");
		
		Button cancel = new Button("cancel");
		cancel.setLabel("Cancel");
		cancel.setVariant(Variant.NEUTRAL);
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				//toggle();
				//getDropdown().setStyle("display", "none");
				close();
				
			}
		}, "click");
		
		Button clear = new Button("clear");
		//if(fname != "Branch_Code__c") {
			
			clear.setLabel("Clear filters");
			clear.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					//toggle();
					//getDropdown().setStyle("display", "none");
					close();
					if(txtSearch != null) {
						Array<Object> options =new Array<Object>();// txtSearch.getSelectedOptions();
						evt.$set("options", options);
						evt.$set("fieldName", fname);
						evt.$set("clearFilter", true);
						txtSearch.setSelectedOptions(new Array<String>());
						DataGrid dg = getAncestorWithClass("DataGrid");
						dg.fireListener("filterIncludes", evt);
					}else {
						Array<Object> options =new Array<Object>();// txtSearch.getSelectedOptions();
						evt.$set("options", options);
						evt.$set("fieldName", fname);
						evt.$set("clearFilter", true);
						DataGrid dg = getAncestorWithClass("DataGrid");
						dg.fireListener("filterIncludes", evt);
					}
					
					
					
				}
			}, "click");
			clear.setVariant(Variant.DESTRUCTIVE);
		//}
		
		
		btnCtn.getChildren().$get(0).addChild(cancel);
		//if(fname != "Branch_Code__c") {
			btnCtn.getChildren().$get(0).addChild(clear);
		//}
		btnCtn.getChildren().$get(0).addChild(ok);
		btnCtn.getChildren().$get(0).setStyle("width", "100%").setStyle("text-align", "right");
		
		getDropdown().addMenuDivider();
		getDropdown().addItem(btnCtn);
		 
		refresh();
		
		if(type != "DateTime") {
			getButton().addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
	
					if(txtSearch != null) {
						txtSearch.doRemoteSearch(true);
					}
					setDropdownPosition(evt);
					
				}
			}, "click");
		
		}
		
		if(type == "DateTime") {
			getButton().addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					setDropdownPosition(evt);
					
				}
			}, "click");
		}
		
	}
	
	public void displaceDropdown() {
		HTMLElement drop = getDropdown().getElement();
		drop.style.position = "fixed";
		/*try {
			String cls = ".scroller_" + objectType;
			cls = "c-grids";
			document.querySelectorAll(cls).item(0).appendChild(drop);
		}catch(Exception e) {
			document.body.appendChild(drop);
		}*/
	}
	
	public void positionDropdown(Event evt) {
		/*HTMLElement drop = getDropdown().getElement();
	//	MouseEvent me = (MouseEvent)evt;
		HTMLElement btn = getButton().getElement();
		DataGridHeader head = getAncestorWithClass("DataGridHeader");
		HTMLElement hhead = head.getElement();
		double hwidth = hhead.getBoundingClientRect().width;
		Double w = (Double)this.column.$get("width");
		if(w == null) {
			w = 5d;
		}
		double rem = hwidth/w;
		
		ClientRect rect = btn.getBoundingClientRect();
		double top = rect.top + window.screenTop;
		double left = rect.left + window.screenLeft;
		//drop.style.display = "none";
		 //double scrollLeft = document.querySelector(".scroller_" + objectType).scrollLeft;
		drop.style.top = (top - 126 + window.scrollY) + "px";
		//drop.style.top = me.screenY + "px";
		//String scroll = window.scrollY + "px";
		drop.style.left = (left + 4) + "px";
		HeavyGrid grid = getAncestorWithClass("HeavyGrid");
		String fieldName = (String)this.column.$get("fieldName");
		int wid = grid.getLeft(fieldName);
		double ileft = (wid*rem )+ 52;
		
		JSContainer scrollcase = getAncestorWithClass("scroller_" + objectType);
		double scrollleft = scrollcase.getElement().scrollLeft;
		
		if(objectType == "Case") {
			drop.style.top = "140px";
		}else {
			drop.style.top = "450px";
		}
		
		String sleft = ((ileft) -  scrollleft) + "px";
		///drop.style.left = "calc(" + wid + "rem -"  + scroll + ")";
		drop.style.left = sleft;
		System.out.println( "window.screen.width:" +window.screen.width);
		System.out.println( "window.screen.availWidth:" +window.screen.availWidth);
		System.out.println( "window.innerWidth:" +window.innerWidth);
		System.out.println( "window.outerWidth:" +window.outerWidth);
		
		if(objectType == "Task") {
			try {
				//ClientRect r = document.querySelector(".navexSplitViewWrapper").getBoundingClientRect();
				//drop.style.top = (top + Double.valueOf(evt.$get("y") + "") ) + "px";
			}catch(Exception e) {
				
			}
		}*/
	}
	
	public void setDropdownPosition(Event evt) {
		displaceDropdown();
		positionDropdown(evt);
	}
	
	public void refresh() {
		super.refresh();
		setTimeout(function(() -> {
			try {
				setDropdownPosition(null);
				HTMLElement drop = getDropdown().getElement();
				drop.style.display = "none";
			}catch(Exception e) {
				System.err.println(e);
				e.printStackTrace();
			}
		}), 2000);
	}

}
