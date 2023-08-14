package sp.datagrid;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ModalListFilters extends Modal{

	private JSContainer list = new JSContainer("lis", "ul");
	
	
	private Array<Object> filters = new Array<Object>();
	
	private String type_;
	public ModalListFilters(String name, String type) {
		super(name);
		this.type_ = type;
		setTitle("Filters");
		addClass("list-filters");
		
		
		getContent().setStyle("padding", "1rem").addChild(list);
		
		Button close = new Button("close");
		close.setLabel("Close");
		getFooter().addChild(close);
		close.setVariant(Variant.NEUTRAL);
		close.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
	}
	
	public void addFilter(Object o) {
		String label = (String)o.$get("Label__c");
		JSContainer li = new JSContainer(o.$get("Id") + "", "li");
		JSContainer a = new JSContainer("", "a").setAttribute("href", "javascript:void(0);").setHtml(label);
		li.addChild(a);
		list.addChild(li);
		a.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				HeavyGrid grid = source.getAncestorWithClass("HeavyGrid");
				grid.setFilters(o);
				grid.doRefreshList((r)->{
					close();
					getParent().render();
					return null;
				});
			}
		}, "click");
		
	}
	
	public void refresh() {
		Util.getService().getFilters(type_).then((result)->{
			this.filters = result;
			list.clearChildren();
			list.setRendered(false);
			for(Object o : filters) {
				addFilter(o);
			}
			render();
		});
	}

}
