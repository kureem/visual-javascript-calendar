package sp.datagrid;

import com.spoonconsulting.lightning.ButtonIcon;
import com.spoonconsulting.lightning.ButtonMenu;
import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.MenuItem;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class GridControls extends Layout {

	private ButtonMenu controls = new ButtonMenu("controls", "div");

	private ButtonIcon refresh = new ButtonIcon("refresh", "utility:refresh");

	private ModalDeleteList modalDeleteList = new ModalDeleteList("deleteList");

	private ModalNewList modalNewList = new ModalNewList("newList");

	private ModalCloneList modalCloneList = new ModalCloneList("cloneList");

	private ModalRenameList modalRenameList = new ModalRenameList("renameList");

	private ModalFieldSelector modalFieldSelector = null;

	private Modal.BackDrop bd = new Modal.BackDrop("bd");
	
	private TableTitle tableInfo = null;//new TableTitle("tableInfo");

	public GridControls(String name, DataGrid grid, boolean dry, String objectType) {
		super(name, "div");

		tableInfo = new TableTitle("tableInfo", dry);
		modalFieldSelector = new ModalFieldSelector("fieldSelector", grid);
		
		// this should contain subtitle (number of items in list, type of filter etc)
		LayoutItem left = new LayoutItem("left", "div").setSize(10);
		//left.setHtml("<div class=\"slds-media slds-no-space slds-grow\" data-aura-rendered-by=\"337:0\"><records-highlights-icon data-data-rendering-service-uid=\"226\" data-aura-rendered-by=\"682:0\"><div class=\"highlights-icon-container slds-avatar slds-m-right_small icon\" style=\"background-color: #F2CF5B\"><img src=\"https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png\" alt=\"\"></div></records-highlights-icon><div class=\"slds-media__body slds-align-middle\" data-aura-rendered-by=\"340:0\"><lst-breadcrumbs data-data-rendering-service-uid=\"227\" data-aura-rendered-by=\"342:0\"><div class=\"slds-breadcrumb slds-list_horizontal slds-wrap\"><div class=\"slds-breadcrumb__item slds-line-height--reset\"><span class=\"slds-var-p-right_x-small\">Cases</span></div></div></lst-breadcrumbs><div class=\"slds-grid slds-media__body\" data-aura-rendered-by=\"345:0\"><div class=\"triggerLink slds-button slds-button--reset slds-type-focus slds-truncate slds-page-header__title slds-text-color--default forceListViewPicker\" data-aura-rendered-by=\"349:0\" data-aura-class=\"forceListViewPicker\"><div class=\"triggerLinkTextAndIconWrapper slds-page-header__name\" data-aura-rendered-by=\"350:0\"><div class=\"slds-page-header__name-title\" data-aura-rendered-by=\"351:0\"><h1 class=\"slds-scrollable_none\" data-aura-rendered-by=\"352:0\"><span class=\"slds-assistive-text\" data-aura-rendered-by=\"353:0\">Cases</span><span class=\"triggerLinkText selectedListView slds-page-header__title slds-truncate slds-p-right--xx-small uiOutputText\" data-aura-rendered-by=\"357:0\" data-aura-class=\"uiOutputText\">2. CS  Open in Branch</span></h1></div><div class=\"slds-page-header__name-switcher\" data-aura-rendered-by=\"358:0\"><div class=\"slds-dropdown-trigger slds-dropdown-trigger_click\" data-aura-rendered-by=\"359:0\"><button role=\"button\" aria-expanded=\"false\" title=\"Select a List View\" class=\"slds-button slds-button--reset downIcon slds-m-top_xxx-small slds-p-right_xxx-small\" data-aura-rendered-by=\"360:0\"><lightning-icon class=\"slds-icon-utility-down slds-button__icon slds-icon_container forceIcon\" data-data-rendering-service-uid=\"228\" data-aura-rendered-by=\"363:0\" data-aura-class=\"forceIcon\"><lightning-primitive-icon><svg class=\"slds-icon slds-icon-text-default slds-icon_x-small\" focusable=\"false\" data-key=\"down\" aria-hidden=\"true\" viewBox=\"0 0 52 52\"><g><path d=\"M8.3 14h35.4c1 0 1.7 1.3.9 2.2L27.3 37.4c-.6.8-1.9.8-2.5 0L7.3 16.2c-.7-.9-.1-2.2 1-2.2z\"></path></g></svg></lightning-primitive-icon><span class=\"slds-assistive-text\">Select a List View</span></lightning-icon></button></div></div></div></div><force-list-view-manager-pin-button class=\"slds-m-right_small\" data-data-rendering-service-uid=\"229\" data-aura-rendered-by=\"365:0\" force-listviewmanagerpinbutton_listviewmanagerpinbutton-host=\"\"><div force-listviewmanagerpinbutton_listviewmanagerpinbutton=\"\" class=\"id-wrapper slds-p-left_xx-small\"><lightning-button-icon force-listviewmanagerpinbutton_listviewmanagerpinbutton=\"\"><button class=\"slds-button slds-button_icon slds-button_icon-small slds-button_icon-border-filled\" title=\"Pin this list view\" type=\"button\"><lightning-primitive-icon><svg class=\"slds-button__icon\" focusable=\"false\" data-key=\"pin\" aria-hidden=\"true\" viewBox=\"0 0 52 52\"><g><path d=\"M49.5 15.4L36 1.9c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l.7.7-16.2 10.7-.5-.5c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5l7.2 7.2L2.4 44.8c-1.4 1.4-1.4 3.7 0 5.1 1.4 1.4 3.7 1.4 5.1 0L22.3 35l6.3 6.3c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5l-.5-.5 10.6-16.3.7.7c1.4 1.4 3.6 1.4 5 0 1.4-1.2 1.4-3.4.1-4.8z\"></path></g></svg></lightning-primitive-icon><span class=\"slds-assistive-text\">Pin this list view.</span></button></lightning-button-icon></div></force-list-view-manager-pin-button></div></div></div>");
		left.addChild(tableInfo);
		LayoutItem itemBtns = new LayoutItem("itemBtns", "div").setSize(2);
		itemBtns.setStyle("text-align", "right");
		// addChild(head);
		addChild(left).addChild(itemBtns);
		setMultipleRows(true);
		setStyle("padding", "0.5rem");

		itemBtns.addClass("btn-container");
		//if(!dry) {
			controls.getButton().setPrefixIconName("utility:settings");
			controls.setMenuAlignment(MenuAlignment.RIGHT);
			itemBtns.addChild(controls);
			
			boolean onlyfs = false;
			if(objectType == "Case-1" || objectType == "Case-2" || objectType == "Case-3") {
				onlyfs = true;
			}
			if(objectType == "Task" && dry) {
				onlyfs = true;
			}
			//if(!onlyfs) {
				
		//	}
			MenuItem fields = new MenuItem("fieldSelector").setLabel("Select Fields to Display").refresh();
			
			
			if(!onlyfs) {
				MenuItem mnew = new MenuItem("new").setLabel("New").refresh();
				MenuItem clone = new MenuItem("clone").setLabel("Clone").refresh();
				MenuItem rename = new MenuItem("rename").setLabel("Rename").refresh();
				controls.getDropdown().addItem(mnew);
				controls.getDropdown().addItem(clone);
				controls.getDropdown().addItem(rename);
			}
			controls.getDropdown().addItem(fields);
			if(!onlyfs) {
				MenuItem mdelete = new MenuItem("delete").setLabel("Delete").refresh();
				controls.getDropdown().addItem(mdelete);
			}
	
			if(!onlyfs) {
				addChild(modalNewList);
				modalNewList.setBackdrop(bd);
		
				addChild(modalDeleteList);
				modalDeleteList.setBackdrop(bd);
		
				addChild(modalCloneList);
				modalCloneList.setBackdrop(bd);
		
				addChild(modalRenameList);
				modalRenameList.setBackdrop(bd);
			}
			addChild(modalFieldSelector);
			modalFieldSelector.setBackdrop(bd);
		//}
		itemBtns.addChild(refresh.setVariant(ButtonIconVariant.BORDER_FILLED));
		addChild(bd);
		
		refresh.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				HeavyGrid grid = getAncestorWithClass("HeavyGrid");
				grid.doRefreshList();
			}
		}, "click");

		//if(!dry) {
			controls.addEventListener(new EventListener() {
	
				@Override
				public void performAction(Renderable source, Event evt) {
					String name = source.getName();
					System.out.println(name);
	
					MenuItem src = (MenuItem) evt.$get("source");
					if (src.getName() == "new") {
						modalNewList.open();
					} else if (src.getName() == "delete") {
						modalDeleteList.open();
					} else if (src.getName() == "clone") {
						modalCloneList.open();
					} else if (src.getName() == "rename") {
						modalRenameList.open();
					} else if (src.getName() == "fieldSelector") {
						modalFieldSelector.open();
					}
	
				}
			}, "select");
	//	}

		// New
		// Clone
		// Rename
		// Select Fields to display
		// Delete

		controls.setStyle("margin-left", "0.5rem");
		refresh.setStyle("margin-left", "0.25rem");

	}
	
	public void setColumns(Array<jsweet.lang.Object> columns) {
		modalFieldSelector.setColumns(columns);
	}
	
	public void setTableInfo(String icon, String title,String subtitle) {
		this.tableInfo.setInfo(icon, title, subtitle);
	}
	
	public void setFilterLabel(String label) {
		this.tableInfo.setFilterLabel(label);
		this.modalRenameList.setCurrentLabel(label);
		this.modalCloneList.setClonedLabel(label);
	}
	
	public void setPinned(boolean b) {
		tableInfo.setPinned(b);
	}

}
