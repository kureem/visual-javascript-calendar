package sp.filters;

import def.js.Promise;

public interface HompPageService {

	public Promise<jsweet.lang.Object> updateFilter(String filter, String filterId);

	public Promise<jsweet.lang.Object> getDefaultFilter(String objectType);
}
