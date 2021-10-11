package com.spoonconsulting.calendar;

public enum WeekDay {
	
	SUNDAY("Dim", "Dimanche", "Sun", "Sunday"),
	MONDAY("Lun", "Lundi", "Mon", "Monday"),
	TUESDAY("Mar", "Mardi", "Tue", "Tuesday"),
	WEDNESDAY("Mer", "Mercredi", "Wed", "Wednesday"),
	THURSDAY("Jeu", "Jeudi", "Thurs", "Thursday"),
	FRIDAY("Ven", "Vendredi", "Fri", "Friday"),
	SATURDAY("Sam", "Samedi", "Sat", "Saturday");
	
	
	private WeekDay(String shortFR, String shortEN, String longFR, String longEN) {
		this.shortFR = shortFR;
		this.shortEN = shortEN;
		this.longFR = longFR;
		this.longEN = longEN;
	}
	
	private String shortFR;
	
	private String shortEN;
	
	private String longFR;
	
	private String longEN;

	public String getShortFR() {
		return shortFR;
	}

	public String getShortEN() {
		return shortEN;
	}

	public String getLongFR() {
		return longFR;
	}

	public String getLongEN() {
		return longEN;
	}
	
	
	

}
