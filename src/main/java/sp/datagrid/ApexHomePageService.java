package sp.datagrid;

import def.js.Promise;
import jsweet.lang.Array;
import jsweet.lang.Function;
import jsweet.lang.Object;

public class ApexHomePageService  implements HompPageService{
	
	public static Object container = new Object();

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getFilters(String objectType) {
		Function fn = (Function)container.$get("getFilters");
		Object params = new Object();
		params.$set("objectType",objectType );
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);
		return pr;
		
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getRecordTypes(String objectType) {
		Function fn = (Function)container.$get("getRecordTypes");
		Object params = new Object();
		params.$set("objectType",objectType );
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);
		return pr;
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Object> createNewFilter(String objectType, String label) {
		Function fn = (Function)container.$get("createNewFilter");
		Object params = new Object();
		params.$set("objectType",objectType );
		params.$set("label", label);
		Promise<Object> pr = (Promise<Object>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Object> deleteFilter(String IdToDelete) {
		Function fn = (Function)container.$get("deleteFilter");
		Object params = new Object();
		params.$set("IdToDelete",IdToDelete );
		Promise<Object> pr = (Promise<Object>)fn.call(fn, params);

		return pr;
	}

	@Override
	public void renameFilter(String IdToRename, String label) {
		Function fn = (Function)container.$get("renameFilter");
		Object params = new Object();
		params.$set("IdToRename", IdToRename);
		params.$set("label", label);
		fn.call(fn, params);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Object> cloneFilter(String IdToClone, String label) {
		Function fn = (Function)container.$get("cloneFilter");
		Object params = new Object();
		params.$set("IdToClone", IdToClone);
		params.$set("label", label);
		Promise<Object> pr = (Promise<Object>)fn.call(fn, params);

		return pr;
	}

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
	
	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getCases(Integer page, String filter,String objectType, String filterId) {
		Function fn = (Function)container.$get("getCases");
		Object params = new Object();
		params.$set("page", page);
		params.$set("filter",filter );
		params.$set("objectType", objectType);
		params.$set("filterId", filterId);
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getCustomerPortalUsers() {
		Function fn = (Function)container.$get("getCustomerPortalUsers");
		Object params = new Object();
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getQueues() {
		Function fn = (Function)container.$get("getQueues");
		Object params = new Object();
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getUsers(String txt) {
		Function fn = (Function)container.$get("getUsers");
		Object params = new Object();
		params.$set("txt", txt);
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);

		return pr;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Promise<Array<Object>> getFieldValues(String fieldName, String txt, Integer page,String objectType, String filterId) {
		Function fn = (Function)container.$get("getFieldValues");
		Object params = new Object();
		params.$set("fieldName", fieldName);
		params.$set("txt",txt );
		params.$set("page", page);
		params.$set("objectType", objectType);
		params.$set("filterId", filterId);
		Promise<Array<Object>> pr = (Promise<Array<Object>>)fn.call(fn, params);

		return pr;
	}
	
	@SuppressWarnings("unchecked")
	//@Override
	public Promise<DateTimeTree> getFieldDateTimeTree(String fieldName,String objectType){
		Function fn = (Function)container.$get("getFieldDateTimeTree");
		Object params = new Object();
		params.$set("fieldName", fieldName);
		params.$set("objectType", objectType);
		Promise<DateTimeTree> pr = (Promise<DateTimeTree>)fn.call(fn, params);

		return pr;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public  Promise<String> getBranches() {
		Function fn = (Function)container.$get("getBranches");
		
		Promise<String> pr = (Promise<String>)fn.call(fn);
		return pr;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public  Promise<String> changeOwner(String ownerId, Array<String> caseIds) {
		Function fn = (Function)container.$get("changeOwner");
		Object params = new Object();
		params.$set("ownerId", ownerId);
		params.$set("caseIds", caseIds);
		Promise<String> pr = (Promise<String>)fn.call(fn, params);
		return pr;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public  Promise<String> pinFilter(String filterId, String objectType) {
		Function fn = (Function)container.$get("pinFilter");
		Object params = new Object();
		params.$set("filterId", filterId);
		params.$set("objectType", objectType);
		Promise<String> pr = (Promise<String>)fn.call(fn, params);
		return pr;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public  Promise<String> closeCases(String status, Array<String> caseIds) {
		Function fn = (Function)container.$get("closeCases");
		Object params = new Object();
		params.$set("status", status);
		params.$set("caseIds", caseIds);
		Promise<String> pr = (Promise<String>)fn.call(fn, params);
		return pr;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public  Promise<String> mergeCases(Array<String> caseIds) {
		Function fn = (Function)container.$get("mergeCases");
		Object params = new Object();
		params.$set("caseIds", caseIds);
		Promise<String> pr = (Promise<String>)fn.call(fn, params);
		return pr;
	}

}
