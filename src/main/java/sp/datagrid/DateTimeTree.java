package sp.datagrid;

import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class DateTimeTree extends Object{

    public Array<YearNode> years = new Array<YearNode>();

    
    @SuppressWarnings("unchecked")
    public DateTimeTree create( Object prot) {
    	DateTimeTree tree = new DateTimeTree();
    	for(Object year : (Array<Object>)prot.$get("years")) {
    		YearNode yn = new YearNode().create(year);
    		tree.years.push(yn);
    	}
    	
    	return tree;
    }
    
    public Array<jsweet.lang.Object> getItems(){
    	Array<jsweet.lang.Object> items = new Array<jsweet.lang.Object>();
    	for(YearNode year : years) {
    		items.push(year.getItem());
    	}
    	return items;
    }
    
    public YearNode getYear(Double year){
        for(YearNode child : years){
            if(child.year == year) 
                return child;
        }

        YearNode result = new YearNode();
        result.year = year;
        years.push(result);
        return result;
    }
    
    

    public void addDate(Date dt){
        Double year = dt.getFullYear();
        Double month = dt.getMonth() +1;
        Double day = dt.getDate();
        getYear(year).getMonth(month).getDay(day);
    }
    
    class YearNode extends Object{

        public Double year;

        public Array<MonthNode> children = new Array<MonthNode>();
        
        @SuppressWarnings("unchecked")
        public  YearNode create(Object prot) {
        	YearNode result = new YearNode();
        	result.year = (Double)prot.$get("year");
        	for(Object child : (Array<Object>)prot.$get("children")) {
        		MonthNode dn = new MonthNode().create(child);
        		result.children.push(dn);
        	}
        	return result;
        }
        
        public jsweet.lang.Object getItem(){
        	jsweet.lang.Object item = new jsweet.lang.Object();
        	item.$set("name", year + "");
        	item.$set("label", year + "");
        	Array<jsweet.lang.Object> items = new Array<jsweet.lang.Object>();
        	item.$set("items", items);
        	for(MonthNode child: children) {
        		jsweet.lang.Object titem = child.getItem();
        		items.push(titem);
        	}
        	return item;
        }

        public MonthNode getMonth(Double month){
            for(MonthNode child : children){
                if(child.month == month){
                    return child;
                }
            }

            MonthNode result = new MonthNode();
            result.month = month;
            children.push(result);
            return result;
        }

    }
    
    class MonthNode extends Object{
        public Double month;

        public Array<DateNode> children = new Array<DateNode>();
        
        @SuppressWarnings("unchecked")
        public  MonthNode create(Object prot) {
        	MonthNode result = new MonthNode();
        	result.month = (Double)prot.$get("month");
        	for(Object child : (Array<Object>)prot.$get("children")) {
        		DateNode dn = new DateNode();
        		dn.day = (Double)child.$get("day");
        		result.children.push(dn);
        	}
        	return result;
        }
        
        public jsweet.lang.Object getItem(){
        	jsweet.lang.Object item = new jsweet.lang.Object();
        	item.$set("name", month + "");
        	item.$set("label", month + "");
        	Array<jsweet.lang.Object> items = new Array<jsweet.lang.Object>();
        	item.$set("items", items);
        	for(DateNode child : children) {
        		jsweet.lang.Object titem = new jsweet.lang.Object();
        		titem.$set("name", child.day + "");
        		titem.$set("label", child.day + "");
        		items.push(titem);
        	}
        	return item;
        }

        public DateNode getDay(Double day){
            for(DateNode child : children){
                if(child.day == day){
                    return child;
                }
            }

            DateNode result = new DateNode();
            result.day = day;
            children.push(result);
            return result;
        }
    }

    class DateNode{
        public Double day;
    }
}
