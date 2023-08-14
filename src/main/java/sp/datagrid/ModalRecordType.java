package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.RadioGroup;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalRecordType extends Modal{

	//private String objectType;
	
	private RadioGroup recs = new RadioGroup("recs");
	public ModalRecordType(String name, String objectType) {
		super(name);
		addClass("modal-recordtype");
		//this.objectType = objectType;
		setTitle("New " + objectType);
		getContent().setStyle("padding", "2rem");
		getContent().addChild(recs);
		recs.setLabel("Choose a Record Type:");
		
		Util.getService().getRecordTypes(objectType).then((result)->{
			
			Array<Object> options = new Array<Object>();
			for(jsweet.lang.Object o : result) {
				Object opt = new Object();
				opt.$set("value",(String)o.$get("Id"));
				opt.$set("label", (String)o.$get("Name"));
				options.push(opt);
			}
			Array<String> val = new Array<String>();
			val.push((String)options.$get(0).$get("value"));
			recs.setOptions(options);
			recs.setValue(val);
			recs.setRendered(false);
			recs.render();
			
		}).Catch((e)->{
			
		});
		
		Button cancel = new Button("cancel");
		cancel.setLabel("Cancel");
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				 close();
			}
		}, "click");
		
		
		
		Button next = new Button("next");
		next.setLabel("Next");
		next.setVariant(Variant.BRAND);
		next.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Grids gris = source.getAncestorWithClass("Grids");
				evt.$set("objectType", objectType);
				evt.$set("recordTypeId", recs.getValue().$get(0));
				gris.fireListener("createNew", evt);
				close();
			}
		}, "click");
		
		getFooter().addChild(cancel).addChild(next);
		getContent().addClass("closecases");
	}
	
	

}
