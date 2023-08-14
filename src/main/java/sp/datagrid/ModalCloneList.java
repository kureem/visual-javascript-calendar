package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Input;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.InputType;
import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class ModalCloneList extends Modal{

	Input newListName = new Input("newList");
	public ModalCloneList(String name) {
		super(name);
		setTitle("Clone List View");
		
		newListName.setType(InputType.TEXT);
		newListName.setLabel("Name of new list view:");
		newListName.setVariant(FormElementVariant.LABEL_STACKED);
		
		getContent().addChild(newListName);
		getContent().setStyle("padding", "0.5rem");
		Button saveNewList = new Button("save").setLabel("Save").setVariant(Variant.BRAND);
		Button cancelNewList = new Button("cancel").setLabel("Cancel").setVariant(Variant.NEUTRAL);
		
		getFooter().addChild(cancelNewList).addChild(saveNewList);
		
		saveNewList.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String label = (String)newListName.getValue();
				if(label != null && label.trim().length() > 0) {
					HeavyGrid grid = source.getAncestorWithClass("HeavyGrid");
					grid.cloneList(label);
					
					close();
				}
			}
		}, "click");
		
		cancelNewList.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		
		
	}
	
	@SuppressWarnings("unchecked")
	public void setClonedLabel(String label) {
		this.newListName.setValue(label + " Copy");
	}

}
