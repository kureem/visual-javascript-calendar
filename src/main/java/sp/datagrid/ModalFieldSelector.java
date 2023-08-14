package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.DualListBox;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalFieldSelector extends Modal{

	
	private DualListBox listBox = new DualListBox("listBox");
	
	private Array<Object> options = new Array<Object>();

	
	private Button save = new Button("save").setLabel("Save").setVariant(Variant.BRAND);
	
	private Button cancel = new Button("cancel").setLabel("Cancel").setVariant(Variant.NEUTRAL);
	
	//private DataGrid grid;
	
	public ModalFieldSelector(String name, DataGrid grid) {
		super(name);
		setTitle("Select Fields to display");
		//this.grid = grid;
		
		listBox.setLabel("Select fields to display");

		listBox.setSourceLabel("Available Fields");
		listBox.setSelectedLabel("Visible Fields");
		listBox.setAddButtonLabel("Move selection to Visible Fields");
		listBox.setRemoveButtonLabel("Move selection to Available Fields");
		listBox.setUpButtonLabel("Move selection up");
		listBox.setDownButtonLabel("Move selection down");
		
		listBox.setVariant(FormElementVariant.LABEL_HIDDEN);
		getContent().addChild(listBox).setStyle("padding", "1rem 2.5rem").setStyle("height", "300px");
		
		
		getFooter().addChild(cancel).addChild(save);
		
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				//shown
				
				
				close();
			}
		}, "click");
		
		save.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Array<String> values = listBox.getValue();
				
				
				grid.showColumns(values);
				
				close();
				
				
			}
		}, "click");
	}
	
	
	public void setColumns(Array<Object> cols) {
		Array<String> values = new Array<String>();
		options = new Array<Object>();
		Object[] precols = cols.sort((a,b)->{
			Double l1 = (Double)a.$get("position");
			Double l2 = (Double)b.$get("position");
			return Double.valueOf(l1.compareTo(l2) + "");
		});
		for(Object col : precols) {
			Object option = new Object();
			option.$set("value", (String)col.$get("fieldName"));
			option.$set("label", (String)col.$get("label"));
			Boolean hidden = (Boolean)col.$get("hidden");
			Boolean display = (Boolean)col.$get("display");
			if((hidden == null || !hidden )) {
				values.push((String)col.$get("fieldName"));
			}
			options.push(option);
		}
		Object[] sorted = options.sort((a,b)->{
			Double l1 = (Double)a.$get("position");
			Double l2 = (Double)b.$get("position");
			return Double.valueOf(l1.compareTo(l2) + "");
		});
		options = new Array<Object>();
		for(Object o : sorted) {
			options.push(o);
		}
		listBox.setOptions(options);
		listBox.setValue(values);
		
		sorted = options.sort((a,b)->{
			String l1 = (String)a.$get("label");
			String l2 = (String)b.$get("label");
			return Double.valueOf(l1.compareTo(l2) + "");
		});
		options = new Array<Object>();
		for(Object o : sorted) {
			options.push(o);
		}
		listBox.setOptions(options);
	}
	

}
