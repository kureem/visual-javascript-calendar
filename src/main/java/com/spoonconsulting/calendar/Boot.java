package com.spoonconsulting.calendar;

import static jsweet.dom.Globals.setTimeout;
import static jsweet.util.Globals.function;
import static jsweet.lang.Globals.eval;

import framework.components.api.ContainerRenderer;

public class Boot {
public static void main(String[] args) {

		eval("window.calendar = com.spoonconsulting.calendar;");
		
		/*WeekView table =new WeekView("wv");
		table.reset();
	    setTimeout(function((e)->{
	    	table.render(ContainerRenderer.getElementById("semainetype"));
	    	//table.addItem("09:30", "12:30", "dispo", "Mercredi");
	    	//table.setSemaineType(Util.getSemaineType());
	    	table.render(ContainerRenderer.getElementById("semainetype"));
	    }), 1000 );*/
	}

}
