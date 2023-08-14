package sp.datagrid;

import framework.components.JSContainer;

public class DataCell extends JSContainer{

	protected Object value;
	
	protected JSContainer div = new JSContainer("div");
	
	public DataCell(String name, String txt) {
		super(name, "td");
		setAttribute("role", "gridcell");
	//	JSContainer div = new JSContainer("div");
		div.setAttribute("title", txt).addClass("slds-truncate").setHtml(txt);
		addChild(div);
		this.value = txt;
	}
	
	public void setText(String txt) {
		div.setAttribute("title", txt).setHtml(txt);
	}
	
	public void setAlign(String dir) {
		removeClass("slds-text-align_right");
		removeClass("slds-text-align_center");
		if(dir == "right") {
			addClass("slds-text-align_right");
		}else if(dir == "center") {
			addClass("slds-text-align_center");
		}
	}

	public Object getValue() {
		return value;
	}
}
