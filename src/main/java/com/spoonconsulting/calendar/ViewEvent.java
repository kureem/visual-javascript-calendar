package com.spoonconsulting.calendar;

import framework.components.api.Renderable;
import jsweet.lang.Date;
import jsweet.lang.Object;

public interface ViewEvent  extends Renderable{
	
	public jsweet.lang.Object getNewEvent(Date date);
	
	public void setValue(Object value);
	
	public Date getStartDate();

	public Date getEndDate() ;

}
