package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class ModalDeleteList extends Modal{

	public ModalDeleteList(String name) {
		super(name);
		setTitle("Delete List View");
		JSContainer labelDelete = new JSContainer("p").setHtml("Are you sure you want to delete this list view?");
		getContent().addChild(labelDelete).setStyle("padding", "1rem").setStyle("text-align", "center");
		
		Button cancelDeleteList= new Button("cancel").setLabel("Cancel").setVariant(Variant.NEUTRAL);;
		Button deleteDeleteList= new Button("delete").setLabel("Delete").setVariant(Variant.BRAND);
		
		getFooter().addChild(cancelDeleteList).addChild(deleteDeleteList);
		
		deleteDeleteList.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
				HeavyGrid grid = source.getAncestorWithClass("HeavyGrid");
				grid.deleteList();
				close();
			}
		}, "click");
		
		cancelDeleteList.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
				close();
			}
		}, "click");
	}

}
