package com.spoonconsulting.calendar;

import static jsweet.dom.Globals.setTimeout;
import static jsweet.util.Globals.function;

import framework.components.api.ContainerRenderer;

public class Boot {
public static void main(String[] args) {

		
		WeekView table =new WeekView("wv");
		table.reset();
	    setTimeout(function((e)->{
	    	table.render(ContainerRenderer.getElementById("semainetype"));
	    	//table.addItem("09:30", "12:30", "dispo", "Mercredi");
	    	//table.setSemaineType(Util.getSemaineType());
	    	table.render(ContainerRenderer.getElementById("semainetype"));
	    }), 1000 );
	}

}
