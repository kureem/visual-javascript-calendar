package sp.datagrid;

import static jsweet.lang.Globals.eval;

public class App {

	public static void main(String[] args) {

		eval("window.sp = sp;");
		/*Array<jsweet.lang.Object> data =   (Array<jsweet.lang.Object>)window.$get("data"); 
		Array<Object> columns = getColumns();
		//injectMetadata(columns, data);
		//CasesGrid gr = new CasesGrid("hg");
		//gr.setColumns(columns);
		//gr.setData(data);

		
		Array<jsweet.lang.Object> tasks =   (Array<jsweet.lang.Object>)window.$get("tasks"); 
		Array<Object> columnst = getColumnsTasks();
		injectMetadata(columnst, tasks);
		//CasesGrid grt = new CasesGrid("hg");
		//grt.setColumns(columns);
		//grt.setData(data);

		
		//gr.render();
		Grids gr = new Grids("ds");
		//gr.setCases(data, columns);
		gr.setTasks(tasks, columnst);
		
		gr.render();*/
		
	}
	
	/*
	 * public static Array<Object> getColumnsTasks(){ //SELECT Id, Subject, WhoId,
	 * Who.Name, WhatId, What.Name, OwnerId, Owner.Name, LastModifiedDate, Priority,
	 * Status, Branch_Code__c,LastModifiedById, LastModifiedBy.Name FROM Task
	 * 
	 * Object Subject = createColumn("Subject", "Subject", "String"); Object
	 * Who__Name = createColumn("Who.Name", "Name", "String"); Object What__Name =
	 * createColumn("What.Name", "Related To", "String"); Object Owner__Name =
	 * createColumn("Owner.Name", "Assigned To", "String"); Object ActivityDate =
	 * createColumn("ActivityDate", "Due Date", "DateTime"); Object LastModifiedDate
	 * = createColumn("LastModifiedDate", "Last Modified Date", "DateTime"); Object
	 * Priority = createColumn("Priority", "Priority", "String"); Object Status =
	 * createColumn("Status", "Status", "String"); Object Branch_Code__c =
	 * createColumn("Branch_Code__c", "Branch Code", "String"); Object
	 * LastModifiedBy__Name = createColumn("LastModifiedBy.Name",
	 * "Last Modified By", "String");
	 * 
	 * Array<Object> columns = new Array<Object>(); columns.push(Subject);
	 * columns.push(Who__Name); columns.push(What__Name); columns.push(Owner__Name);
	 * columns.push(ActivityDate); columns.push(LastModifiedDate);
	 * columns.push(Priority); columns.push(Status); columns.push(Branch_Code__c);
	 * columns.push(LastModifiedBy__Name); return columns;
	 * 
	 * }
	 * 
	 * public static Array<Object> getColumns(){ Object caseNumber =
	 * createColumn("CaseNumber", "Case Number", "String"); Object Unread__c =
	 * createColumn("Unread__c", "Unread Email", "Boolean"); Object
	 * RelatedCompany__r__Name = createColumn("RelatedCompany__r.Name",
	 * "Related Company", "String"); Object Account__Name =
	 * createColumn("Account.Name", "Company Name", "String"); Object Contact__Name
	 * = createColumn("Contact.Name", "Contact Name", "String"); Object Subject =
	 * createColumn("Subject", "Subject", "String"); Object CEVA_reference__c =
	 * createColumn("CEVA_reference__c", "CEVA Reference", "String"); Object Status
	 * = createColumn("Status", "Status", "String"); Object Branch_Code__c =
	 * createColumn("Branch_Code__c", "Branch Code", "String"); Object
	 * Contract_Code__c = createColumn("Contract_Code__c", "Contract Code",
	 * "String"); Object Trade_Type__c = createColumn("Trade_Type__c", "Trade Type",
	 * "String"); Object CreatedDate = createColumn("CreatedDate",
	 * "Date/Time Opened", "DateTime"); Object Last_Mail_Received__c =
	 * createColumn("Last_Mail_Received__c", "Last Mail Received", "DateTime");
	 * Object Origin = createColumn("Origin", "Origin", "String"); Object
	 * Owner__Alias = createColumn("Owner.Alias", "Owner Alias", "String");
	 * 
	 * Array<Object> columns = new Array<Object>(); columns.push(caseNumber);
	 * columns.push(Unread__c); columns.push(RelatedCompany__r__Name);
	 * columns.push(Account__Name); columns.push(Contact__Name);
	 * columns.push(Subject); columns.push(CEVA_reference__c); columns.push(Status);
	 * columns.push(Branch_Code__c); columns.push(Contract_Code__c);
	 * columns.push(Trade_Type__c); columns.push(CreatedDate);
	 * columns.push(Last_Mail_Received__c); columns.push(Origin);
	 * columns.push(Owner__Alias);
	 * 
	 * 
	 * 
	 * return columns; }
	 * 
	 * public static void injectMetadata(Array<Object> columns, Array<Object> data){
	 * 
	 * Object meta = new Object();
	 * 
	 * 
	 * for(Object col : columns) { String fieldName = (String)col.$get("fieldName");
	 * String type = (String)col.$get("type"); Array<Object> fieldMeta = new
	 * Array<Object>(); meta.$set(fieldName, fieldMeta); for(Object line : data) {
	 * java.lang.Object val = extractVal(line, fieldName, type); if(val != null) {
	 * Object m = new Object(); m.$set("label", val + ""); m.$set("value", val +
	 * ""); fieldMeta.push(m); }
	 * 
	 * } col.$set("metadata", fieldMeta); }
	 * 
	 * }
	 * 
	 * private static java.lang.Object extractVal(Object data, String name, String
	 * type) { java.lang.Object raw = null; if(name.contains(".")) { String[] path =
	 * name.split("."); Object top = (Object)data.$get(path[0]); if(top != null) {
	 * raw = top.$get(path[1]); } }else { raw = data.$get(name); }
	 * 
	 * if(type == "Boolean") { if(raw == null || !(Boolean)raw) { return false;
	 * }else { return true; } }else if(type == "DateTime") { if(raw == null) {
	 * return null; }else { return new Date(raw.toString()); } }else { return raw; }
	 * }
	 * 
	 * private static Object createColumn(String name, String label, String type) {
	 * Object col = new Object(); col.$set("fieldName", name); col.$set("label",
	 * label); col.$set("type", type); return col; }
	 */
}
