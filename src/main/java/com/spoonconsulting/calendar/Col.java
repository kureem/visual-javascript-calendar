package com.spoonconsulting.calendar;

import framework.components.JSContainer;

public class Col extends JSContainer{
	
	public Col(String name, int size, int of) {
		super(name, "div");
		addClass("slds-col slds-size_"+size+"-of-" + of);
	}

}
