package sp.datagrid;

import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

import static jsweet.dom.Globals.window;
public class Util {
	
	
	public static HompPageService getService() {
		
		if(window.location.href.contains("localhost"))
			return new MockHomePageService();
		
		return new ApexHomePageService();
		
	}
	
	@SuppressWarnings("unchecked")
	public static void preprocessData(Array<Object> cols, Array<Object> data) {
		
		System.out.println(data);
		for(Object dat: data) {
			for(Object col: cols) {
				String type = (String)col.$get("type");
				String name = (String)col.$get("fieldName");
				if(type == "String") {
					if(name.contains(".")) {
						
						String[] parts = name.split(".");
						Object top =  (Object)dat.$get(parts[0]);
						if(top != null) {
							Object met = new Object();
							String label = (String)top.$get(parts[1]);
							String value = (String)top.$get("Id");
							if(value != null && label != null) {
								met.$set("value", value);
								met.$set("label", label);
								
								Array<Object> meta = (Array<Object>)col.$get("metadata");
								if(meta == null) {
									meta = new Array<Object>();
									col.$set("metadata", meta);
								}
								if(meta.indexOf(met) < 0) {
									meta.push(met);
								}
							}
						}
						//id
						//value
					}else if(name == "CaseNumber") {
						String value = (String)dat.$get("Id");
						String label = (String)dat.$get(name);
						Object met = new Object();
						met.$set("value", value);
						met.$set("label", label);
						Array<Object> meta = (Array<Object>)col.$get("metadata");
						if(meta == null) {
							meta = new Array<Object>();
							col.$set("metadata", meta);
						}
						if(meta.indexOf(met) < 0) {
							meta.push(met);
						}
						
					}else {
						String value = (String)dat.$get(name);
						Array<Object> meta = (Array<Object>)col.$get("metadata");
						if(meta == null) {
							meta = new Array<Object>();
							col.$set("metadata", meta);
						}
						if(value != null) {
							Object met = new Object();
							met.$set("value", value);
							met.$set("label", value);
							
							if(meta.indexOf(met) < 0) {
								meta.push(met);
							}
						}
					}
				}else if(type == "Boolean") {
					Array<Object> metadata = (Array<Object>)col.$get("metadata");
					if(metadata == null) {
						metadata = new Array<Object>();
						Object tr = new Object();
						tr.$set("label", "TRUE");
						tr.$set("value", "TRUE");
						metadata.push(tr);
						
						Object fl = new Object();
						fl.$set("label", "FALSE");
						fl.$set("value", "FALSE");
						metadata.push(fl);
						col.$set("metadata", metadata);
					}
				}else if(type == "DateTime") {
					Array<Object> metadata = (Array<Object>)col.$get("metadata");
					if(metadata == null) {
						metadata= new Array<Object>();
						col.$set("metadata", metadata);
					}
						
					Date dt = new Date((String)dat.$get(name));
					
					
					double year = dt.getFullYear();
					Object oyear = getYear(metadata, year);
					Array<Object> months = (Array<Object>)oyear.$get("children");
					double month = dt.getMonth();
					Object omonth = getMonth(months, month);
					Array<Double> dates = (Array<Double>)omonth.$get("children");
					double date = dt.getDate();
					if(dates.indexOf(date) <0) {
						dates.push(date);
						//Double[] sortedDates = dates.sort();
						//Array<Double> arrdates = new Array<>(sortedDates);
						omonth.$set("children", dates);
					}
				}
			}
		}
		
		
	/*	for(Object col : cols) {
			String type = (String)col.$get("type");
			if(type == "String") {
				Array<Object> metadata = (Array<Object>)col.$get("metadata");
				System.out.println(metadata);
				Object[] sorted = metadata.sort((a,b)->{
					
					String labela = (String)a.$get("label");
					String labelb = (String)b.$get("label");
					return Double.parseDouble(labela.compareTo(labelb) + "");
					
				});
				System.out.println(sorted);
				col.$set("metadata", new Array<Object>(sorted));
			}else if(type == "DateTime") {
				Array<Object> metadata = (Array<Object>)col.$get("metadata");
				
				Object[] sorted = metadata.sort((a,b)->{
					
					Double labela = (Double)a.$get("value");
					Double labelb = (Double)b.$get("value");
					return Double.parseDouble(labela.compareTo(labelb) + "");
					
				});
				for(Object met : metadata) {
					Array<Object> months = (Array<Object>)met.$get("children");
					Object[] sortedM = months.sort((a,b)->{
						
						Double labela = (Double)a.$get("value");
						Double labelb = (Double)b.$get("value");
						return Double.parseDouble(labela.compareTo(labelb) + "");
						
					});	
					met.$set("children", new Array<Object>(sortedM));
					for(Object month : sortedM) {
						Array<Double> dates = (Array<Double>)month.$get("children");
						Double[] sortedD = dates.sort();
						month.$set("children", sortedD);
					}
					
				}
				col.$set("metadata", new Array<Object>(sorted));
			}
		}*/
	}
	
	
	public static Object getMonth(Array<Object> months, double month) {
		for(Object m : months) {
			Double va = (Double)m.$get("value");
			if(va == month) {
				return m;
			}
		}
		
		Object m = new Object();
		m.$set("value", month);
		m.$set("children", new Array<Double>());
		months.push(m);
		return m;
	}
	
	public static Object getYear(Array<Object> met, double year) {
		for(Object o : met) {
			Double val = (Double)o.$get("value");
			if(val == year) {
				return o;
			}
		}
		Object y = new Object();
		y.$set("value", year);
		Array<Object> children = new Array<Object>();
		y.$set("children", children);
		met.push(y);
		
		 
		return y;
	}
	
	public static java.lang.Object extractVal(Object data, String name, String type ) {
		
		java.lang.Object raw = null;
		if(name.contains(".")) {
			String[] path = name.split(".");
			Object top = (Object)data.$get(path[0]);
			if(top != null) {
				raw = top.$get(path[1]);
			}
		}else {
			raw = data.$get(name);
		}
		
		if(type == "Boolean") {
			if(raw == null || !(Boolean)raw) {
				return false;
			}else {
				return true;
			}
		}else if(type == "DateTime") {
			if(raw == null) {
				return null;
			}else {
				return new Date(raw.toString());
			}
		}else {
			return raw;
		}
	}
	
	
}
