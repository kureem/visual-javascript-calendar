package sp.filters;

import def.js.Promise;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class ApexHomePageService  implements HompPageService{
	
	public static Object container = new Object();
	
	@SuppressWarnings("unchecked")
	@Override
	public Promise<Object> updateFilter(String filter, String filterId) {
		Function fn = (Function)container.$get("updateFilter");
		Object params = new Object();
		params.$set("filter",filter );
		params.$set("filterId", filterId);
		Promise<Object> pr = (Promise<Object>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Object> getDefaultFilter(String objectType) {
		Function fn = (Function)container.$get("getDefaultFilter");
		Object params = new Object();
		params.$set("objectType", objectType);
		Promise<Object> pr = (Promise<Object>)fn.call(fn, params);

		return pr;
	}
}
