package sp.datagrid;

import com.spoonconsulting.lightning.CheckBox;

public class BooleanDataCell extends DataCell{

	private CheckBox cb = new CheckBox(getName());
	
	public BooleanDataCell(String name, Boolean value) {
		super(name, "");
		clearChildren();
		addChild(cb);
		cb.setValue(value);
		setAlign("center");
		super.value = value;
	}
	
	
	public void setValue(Boolean b) {
		cb.setValue(b);
	}
	
	public Boolean getValue() {
		return cb.getValue();
	}
	

}
