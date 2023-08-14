package sp.datagrid;

import static jsweet.dom.Globals.alert;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalMergeCases extends Modal{
	
	private Grids grid;

	JSContainer h3 = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
	
	public ModalMergeCases(String name) {
		super(name);
		setTitle("Merge Cases");
		
		JSContainer h1 = new JSContainer("h3");
		h1.addClass("slds-text-heading--large slds-text-align--center slds-p-bottom--small setupFlowHeader");
		getContent().addClass("slds-p-around--x-large");
		getContent().addChild(h1);
		h1.setHtml("Confirm merge");
		
		JSContainer h2 = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
		h2.setHtml("We're ready to merge these records");
		
		
		h3.setHtml("You are about to merge 2 cases. You can't undo a merge");
		
		getContent().addChild(h2).addChild(h3);
		
		Button merge = new Button("merge");
		merge.setVariant(Variant.BRAND);
		merge.setLabel("Merge Cases");
		merge.addEventListener(new EventListener() {
			
			@SuppressWarnings("unchecked")
			@Override
			public void performAction(Renderable source, Event evt) {
				
				Array<String> caseIds = grid.getCasesGrid().getGrid().getSelectedIds();
				Util.getService().mergeCases(caseIds).then((result)->{
					
					if(result + "" == "nopermission") {
						alert("You do not have the right to merge cases");
						close();
						//grid.setRendered(false);
						//grid.render();
					}else if(result+ "" == "merged") {
						alert("You cannot merge already merged cases");
						close();
						
					}else if(result + "" == "not-email"){
                        alert("Only cases with origin Email and CEVA can be merged");
                        close();
                    }
					grid.getCasesGrid().doRefreshList((res)->{
						close();
						grid.setRendered(false);
						grid.render();
						return null;
					});
				}).Catch((e)->{
					Object b =  (Object)((Object)e).$get("body");
					Array<Object> pe = (Array<Object>)b.$get("pageErrors");
					alert(pe.$get(0).$get("message"));
					close();
					grid.setRendered(false);
					grid.render();
				});
			}
		}, "click");
		
		Button cancel = new Button("cancel");
		cancel.setVariant(Variant.NEUTRAL);
		cancel.setLabel("Cancel");
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		
		getFooter().addChild(cancel).addChild(merge);
	}
	
	public void refresh(Grids grids) {
		this.grid = grids;
		Array<String> caseIds = grids.getCasesGrid().getGrid().getSelectedIds();
		h3.setHtml("You are about to merge "+caseIds.length+" cases. You can't undo a merge");
	}

}
