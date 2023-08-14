package sp.datagrid;

import static jsweet.dom.Globals.alert;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.RadioGroup;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalCloseCase extends Modal{

	RadioGroup radio = new RadioGroup("status");

	private JSContainer label = new JSContainer("label").setStyle("font-weight", "bold");
	
	//private DataGrid grid_ = null;
	
	//private HeavyGrid hgri = null;
	
	private String selectedId = null;
	
	private Array<Object> optCases = new Array<Object>();
	private Array<Object> optTasks = new Array<Object>();
	
	public ModalCloseCase(String name) {
		super(name);
		setTitle("Close Case");
		Array<jsweet.lang.Object> opts = new Array<jsweet.lang.Object>();
		
		
		addOption("Closed-Resolved", optCases);
		//addOption("Closed-Cancelled", optCases);
		addOption("Closed-No Action Needed", optCases);
		//addOption("Completed", optCases);
		//addOption("Closed", optCases);
		//addOption("Completed", optTasks);
		
		
		radio.setOptions(opts);
		radio.addClass("closecases");
		Array<String> val = new Array<String>();
		val.push("Closed-Resolved");
		radio.setValue(val);
		
		getContent().setStyle("padding", "1rem");
		getContent().addChild(label);
		getContent().addChild(radio);

		
		Button close = new Button("close");
		
		close.setVariant(Variant.BRAND);
		close.setLabel("Close");
		close.addEventListener(new EventListener() {
			
			@SuppressWarnings("unchecked")
			@Override
			public void performAction(Renderable source, Event evt) {
				
				String status = radio.getValue().$get(0);
				//Array<String> caseIds = grid_.getSelectedIds();
				Array<String> caseIds = new Array<String>();
				caseIds.push(selectedId);
				Util.getService().closeCases(status,caseIds).then((result)->{
					Grids g = source.getAncestorWithClass("Grids");
					g.getCasesGrid().doRefreshList((res)->{
						//Grids g = hgri.getAncestorWithClass("Grids");
						close();
						g.setRendered(false);
						g.render();
						return null;
					});
				}).Catch((e)->{
					Object b =  (Object)((Object)e).$get("body");
					Array<Object> pe = (Array<Object>)b.$get("pageErrors");
					if(pe != null && pe.length > 0) {
						alert(pe.$get(0).$get("message"));
					}
					Object fe  =(Object)b.$get("fieldErrors");
					if(fe != null && Object.keys(fe).length > 0) {
						String feMsg  = "";
						for(String key : Object.keys(fe)) {
							
							Array<Object> f = (Array<Object>)fe.$get(key);
							if(f != null && f.length > 0) {
								feMsg = feMsg + "\n" + f.$get(0).$get("message");
							}
						}
						if(feMsg != null) {
							alert(feMsg);
						}
					}
					close();
					Grids gris = getAncestorWithClass("Grids");
					gris.setRendered(false);
					gris.render();
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
		
		getFooter().addChild(cancel);
		getFooter().addChild(close);
	}
	
	private void addOption(String st,Array<jsweet.lang.Object> opts) {
		jsweet.lang.Object opt2 = new jsweet.lang.Object();
		opt2.$set("value", st);
		opt2.$set("label", "Yes, Closed as : " + st);
		opts.push(opt2);
	}
	
	public void refresh(DataGrid grid, String selectedId, String objectType) {
		//this.grid_ = grid;
		this.selectedId = selectedId;
		if(objectType == "Case") {
			this.radio.setOptions(optCases);
		}else {
			this.radio.setOptions(optTasks);
		}
		//Array<String> sels = grid.getSelectedIds();
		setTitle("Close " + objectType);
		this.label.setHtml("Do you want to close this "+objectType+"?");
	}

}
