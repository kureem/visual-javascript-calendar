package sp.filters;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.ButtonIcon;
import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import static jsweet.dom.Globals.confirm;

public class GridControls extends Layout {

	private ButtonIcon refresh = new ButtonIcon("refresh", "utility:refresh");
	
	private Button clearFilters = new Button("clear");

	private Modal.BackDrop bd = new Modal.BackDrop("bd");

	private TableTitle tableInfo = new TableTitle("tableInfo");

	public GridControls(String name) {
		super(name, "div");

		// this should contain subtitle (number of items in list, type of filter etc)
		LayoutItem left = new LayoutItem("left", "div").setSize(10);
		left.addChild(tableInfo);
		LayoutItem itemBtns = new LayoutItem("itemBtns", "div").setSize(2);
		itemBtns.setStyle("text-align", "right");
		addChild(left).addChild(itemBtns);
		setMultipleRows(true);
		setStyle("padding", "0.5rem");

		itemBtns.addClass("btn-container");
		
		
		clearFilters.setLabel("Clear Filters");
		clearFilters.setVariant(Variant.BRAND);
		clearFilters.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				if(confirm("Do you really want to clear all the filters? The action cannot be un-done")) {
					GridHeader header = getAncestorWithClass("GridHeader");
					header.clearFilters();
				}
			}
		}, "click");
		itemBtns.addChild(clearFilters);
		itemBtns.addChild(refresh.setVariant(ButtonIconVariant.BORDER_FILLED));
		clearFilters.setStyle("margin-right", "8px");
		clearFilters.setStyle("position", "relative").setStyle("top", "2px");

		addChild(bd);

		refresh.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				GridHeader grid = getAncestorWithClass("GridHeader");
				grid.doRefreshList();
			}
		}, "click");

		refresh.setStyle("margin-left", "0.25rem");

	}

	public void setTableInfo(String icon, String title, String subtitle) {
		this.tableInfo.setInfo(icon, title, subtitle);
	}

	public void setFilterLabel(String label) {
		this.tableInfo.setFilterLabel(label);
	}

}
