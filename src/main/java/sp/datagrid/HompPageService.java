package sp.datagrid;

import def.js.Promise;
import jsweet.lang.Array;

public interface HompPageService {

	public Promise<Array<jsweet.lang.Object>> getFilters(String objectType);
	
	public Promise<Array<jsweet.lang.Object>> getRecordTypes(String objectType);

	public Promise<jsweet.lang.Object> createNewFilter(String objectType, String label);

	public Promise<jsweet.lang.Object> deleteFilter(String IdToDelete);

	public void renameFilter(String IdToRename, String label);

	public Promise<jsweet.lang.Object> cloneFilter(String IdToClone, String label);

	public Promise<jsweet.lang.Object> updateFilter(String filter, String filterId);

	public Promise<jsweet.lang.Object> getDefaultFilter(String objectType);

	public Promise<Array<jsweet.lang.Object>> getCases(Integer page, String filter, String objectType, String filterId);

	public Promise<Array<jsweet.lang.Object>> getCustomerPortalUsers();

	public Promise<Array<jsweet.lang.Object>> getQueues();

	public Promise<Array<jsweet.lang.Object>> getUsers(String txt);
	
	//public Promise<DateTimeTree> getFieldDateTimeTree(String fieldName, String objectType);

	public Promise<Array<jsweet.lang.Object>> getFieldValues(String fieldName, String txt, Integer page, String objectType, String filterId);
	
	public  Promise<String> changeOwner(String ownerId, Array<String> caseIds);
	
	public  Promise<String> closeCases(String status, Array<String> caseIds);
	
	public  Promise<String> mergeCases(Array<String> caseIds);
	
	public Promise<String> pinFilter(String filterId, String objectType);
	
	public  Promise<String> getBranches();
	
	

}
