package com.spoonconsulting.calendar;

import framework.components.JSContainer;

public class Box extends JSContainer{

	public Box(String name, int size, int of) {
		super(name, "div");
		addClass("slds-grid slds-wrap slds-col slds-size_"+size+"-of-" + of);
	}
	
	

}
