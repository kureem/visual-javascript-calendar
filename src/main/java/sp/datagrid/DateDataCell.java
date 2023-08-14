package sp.datagrid;

import jsweet.dom.intl.DateTimeFormat;
import jsweet.lang.Date;

public class DateDataCell extends DataCell{

	public DateDataCell(String name, Date date) {
		super(name, "");
		value = date;
		setText(formatDate(date));
		
	}
	
	private String formatDate(Date dt) {
		DateTimeFormat ft = new DateTimeFormat();
		return ft.format(dt);
	}
	
	public Date getValue() {
		return (Date)value;
	}
	
	

}
