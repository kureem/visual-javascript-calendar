package sp.datagrid;

import com.spoonconsulting.lightning.ButtonMenu;
import com.spoonconsulting.lightning.MenuItem;
import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class DataRow extends JSContainer{

	private Object data = null;
	private Array<Object> columns = null;
	private DataCell num = new DataCell("num", "");
	private BooleanDataCell select = new BooleanDataCell("select", false);
	String objectType;
	
	public DataRow(String name, String objectType) {
		super(name, "tr");
		this.objectType = objectType;
		addClass("slds-hint-parent");
	}
	
	public void setData(Object data, Array<Object> cols) {

		this.data = data;
		this.columns = cols;
		addChild(num);
		num.getChildren().$get(0).addClass("slds-row-number");
		addChild(select); 
		for(Object col : cols) {
			String name = (String)col.$get("fieldName");
			String type = (String)col.$get("type");
			Boolean hidden = (Boolean)col.$get("hidden");
			Boolean display = (Boolean)col.$get("display");
			if((hidden == null || !hidden) && display == null || display) {
				java.lang.Object val = Util.extractVal(data, name, type);
				if(name == "CaseNumber") {
					ClickableDataCell cell = new ClickableDataCell(name, (String)val, (String)data.$get("Id"));
					addChild(cell);
				}else if(name == "Subject"){
					if(val == "" || val == null) {
						val = "---";
					}
					ClickableDataCell cell = new ClickableDataCell(name, (String)val, (String)data.$get("Id"));
					addChild(cell);
				}else if(type == "Boolean") {
					BooleanDataCell cell = new BooleanDataCell(name, (Boolean)val);
					addChild(cell);
				}else if(type == "DateTime") {
					DateDataCell cell = new DateDataCell(name, (Date)val);
					addChild(cell);
				}else if(name.contains(".")) {
					String[] path = name.split(".");
					Object top = (Object)data.$get(path[0]);
					if(top != null) {
						if(top.hasOwnProperty("attributes")) {
							String url = (String)((Object)top.$get("attributes")).$get("url");
							String[] pathss = url.split("/");
							String id = pathss[pathss.length-1];
							ClickableDataCell cell = new ClickableDataCell(name, (String)val, id);
							addChild(cell);
						}else {
							String id = (String)top.$get("Id");
							ClickableDataCell cell = new ClickableDataCell(name, (String)val, id);
							addChild(cell);
						}
					}else {
						DataCell cell = new DataCell(name, (String)val);
						addChild(cell);
					}
					
				}
				else {
					DataCell cell = new DataCell(name, (String)val);
					addChild(cell);
				}
			}
		}
		
		
		JSContainer actions = new JSContainer("td");
		ButtonMenu menu = new ButtonMenu("menu", "div");
		menu.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				String name = source.getName();
				System.out.println(name);

				MenuItem src = (MenuItem) evt.$get("source");
				if (src.getName() == "edit") {
					evt.$set("recordId",data.$get("Id") );
					HeavyGrid gr = getAncestorWithClass("HeavyGrid");
					gr.editRecord(evt);
				}else if(src.getName() == "close") {
					HeavyGrid gr = getAncestorWithClass("HeavyGrid");
					gr.closeCase((String)data.$get("Id"));
				}

			}
		}, "select");
		
		MenuItem edit = new MenuItem("edit");
		edit.setLabel("Edit").refresh();
		menu.getDropdown().addItem(edit);
		if(objectType == "Case") {
			MenuItem delete = new MenuItem("close");
			delete.setLabel("Close").refresh();
			menu.getDropdown().addItem(delete);
		}
		actions.addChild(menu);
		menu.setMenuAlignment(MenuAlignment.RIGHT);
		menu.setVariant(ButtonIconVariant.BARE);
		menu.setButtonSize(Size.EXTRA_SMALL);
		
		addChild(actions);
		
		this.data = data;
	}
	
	
	public Boolean search(String txt) {
		if(txt == null || txt.trim().length() <=0) {
			setStyle("display", null);
			return true;
		}
		String ltxt = txt.toLowerCase();
		for(Object col : columns) {
			String type = (String)col.$get("type");
			String fieldName = (String)col.$get("fieldName");
			if(type == "String") {
				String val = (String)Util.extractVal(data, fieldName, type);
				if(val != null && val.trim().length() > 0) {
					if(val.toLowerCase().contains(ltxt)) {
						setStyle("display", null);
						return true;
						
					}
				}
			}
		}
		setStyle("display", "none");
		return false;
	}
	
	public void setSelected(Boolean b) {
		select.setValue(b);
	}

	public Boolean isSelected() {
		return select.getValue();
	}
	
	public Object getData() {
		return this.data;
	}
	

	public void setNum(Integer num) {
		this.num.setText(num.toString());
	}

}
