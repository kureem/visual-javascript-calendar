package com.spoonconsulting.calendar;

import jsweet.lang.Array;

public class WeekViewBody extends Box {

	public WeekViewBody(String name) {
		super(name, 11, 12);
		addClass("spn-body-right-body");
	}
	
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Array<WeekViewDateCell> getCells(){
		Array result = getChildren();
		return result;
	}
	
	public void unholdEvent(WeekViewEvent uiCalEvt) {
		for(WeekViewDateCell dc : getCells()) {
			for(WeekViewCell c : dc.getCells()) {
				c.unhold(uiCalEvt);
			}
		}
	}

}
