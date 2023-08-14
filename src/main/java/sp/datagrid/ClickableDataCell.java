package sp.datagrid;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class ClickableDataCell extends DataCell{

	public ClickableDataCell(String name, String txt, String Id) {
		super(name, txt);
		div.setHtml("");
		
		JSContainer a = new JSContainer("a");
		a.setHtml(txt);
		a.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("recordId", Id);
				evt.$set("objectType", "Task");
				Grids grids = source.getAncestorWithClass("Grids");
				grids.fireListener("viewRecord", evt);
				
			}
		}, "click");
		/*
		 * if(name == "CaseNumber") { a.addEventListener(new EventListener() {
		 * 
		 * @Override public void performAction(Renderable source, Event evt) {
		 * evt.$set("recordId", Id); evt.$set("objectType", "Case"); Grids grids =
		 * source.getAncestorWithClass("Grids"); grids.fireListener("editRecord", evt);
		 * 
		 * } }, "click"); }else if(name == "Subject") { a.addEventListener(new
		 * EventListener() {
		 * 
		 * @Override public void performAction(Renderable source, Event evt) {
		 * evt.$set("recordId", Id); evt.$set("objectType", "Task"); Grids grids =
		 * source.getAncestorWithClass("Grids"); grids.fireListener("editRecord", evt);
		 * 
		 * } }, "click"); }else { a.setAttribute("href", "/" + Id);
		 * a.setAttribute("target", "_blank"); }
		 */
		div.addChild(a);
		
	}
	

}
