package sp.datagrid;

import com.spoonconsulting.lightning.Button;

import com.spoonconsulting.lightning.ButtonGroup;
import com.spoonconsulting.lightning.Layout;
import com.spoonconsulting.lightning.LayoutItem;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.LayoutItemPadding;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

import static def.dom.Globals.alert;

public class AppHeader extends Layout{
	
private Button actChangeOwner = new Button("changeOwner").setLabel("Change Owner").setVariant(Variant.NEUTRAL);
	
	private Button actNew = new Button("new").setLabel("New Case").setVariant(Variant.NEUTRAL);
	
	private Button actNewTask = new Button("new").setLabel("New Task").setVariant(Variant.NEUTRAL);
	
	//private Button actPrintableView = new Button("printableView").setLabel("Printable View").setVariant(Variant.NEUTRAL);
	
	//private Button actClose = new Button("close").setLabel("Close Cases").setVariant(Variant.NEUTRAL);
	
	private Button actMerge = new Button("merge").setLabel("Merge Cases").setVariant(Variant.NEUTRAL);
	
	private ModalChangeOwner modalChangeOwner = new ModalChangeOwner("changeOwner");
	
	
	
	private ModalMergeCases modalMergeCase = new ModalMergeCases("mergeCases");
	
	
	private Modal.BackDrop bd = new Modal.BackDrop("bd");

	private DataGrid grid_;

	public AppHeader(String name, DataGrid grid, boolean dry) {
		super(name, "div");
		setMultipleRows(true);
		this.grid_ = grid;
		LayoutItem topLeft = new LayoutItem("topLeft", "div").setSize(5).setPadding(LayoutItemPadding.AROUND_MEDIUM);
		LayoutItem topRight = new LayoutItem("topRight", "div").setSize(7).setPadding(LayoutItemPadding.AROUND_MEDIUM);
		addChild(topLeft).addChild(topRight);
		
		ButtonGroup actGroup = new ButtonGroup("actions");
		topRight.addChild(actGroup).setStyle("text-align", "right");
		actGroup.addButton(actNew).addButton(actChangeOwner).addButton(actMerge);
		
		JSContainer la = new JSContainer("h3");
		la.setStyle("font-weight", "bold").setStyle("font-size", "14px");
		topLeft.addChild(la);
		if(!dry) {
			Util.getService().getBranches().then((r)->{
				if(r != null) {
					String s = r.replaceAll(";", ", ");
					if(r.contains(";"))
						la.setHtml("My branches are: " + s);
					else
						la.setHtml("My branch is: " + s);
					topLeft.setRendered(false);
					topLeft.render();
				}
			});
		}
		
		/*actClose.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Array<String> selected = grid_.getSelectedIds();
				if(selected.length > 0) {
					modalCloseCase.refresh(grid_);
					modalCloseCase.open();
				}else {
					alert("Please select one or more cases from the table below");
				}
				//modalCloseCase.refresh(grid);
			//	modalCloseCase.open();
			}
		}, "click");*/
		
		actMerge.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				Array<String> selected = grid_.getSelectedIds();
				if(selected.length > 0) {
					Grids gris = (Grids)getAncestorWithClass("Grids");
					modalMergeCase.refresh(gris);
					modalMergeCase.open();
				}else {
					alert("Please select one or more cases from the table below");
				}
			}
		}, "click");
		
		actNew.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				Grids gri = source.getAncestorWithClass("Grids");
				evt.$set("objectType", "Case");
				gri.fireListener("createNew", evt);
			}
		}, "click");
		
		actNewTask.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				Grids gri = source.getAncestorWithClass("Grids");
				evt.$set("objectType", "Task");
				gri.fireListener("createNew", evt);
			}
		}, "click");
		actChangeOwner.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Array<String> selected = grid_.getSelectedIds();
				if(selected.length > 0) {
					modalChangeOwner.refresh(grid_);
					modalChangeOwner.open();
				}else {
					alert("Please select one or more cases from the table below");
				}
			}
		}, "click");
		
		addChild(modalChangeOwner);
		modalChangeOwner.setBackdrop(bd);
		//addChild(modalCloseCase);
		//modalCloseCase.setBackdrop(bd);
		addChild(modalMergeCase);
		modalMergeCase.setBackdrop(bd);
	
		addChild(bd);
	}

}
