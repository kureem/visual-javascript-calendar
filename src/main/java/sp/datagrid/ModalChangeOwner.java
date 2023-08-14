package sp.datagrid;

import static jsweet.dom.Globals.alert;

import com.spoonconsulting.lightning.Button;
import com.spoonconsulting.lightning.ButtonMenu;
import com.spoonconsulting.lightning.CheckBox;
import com.spoonconsulting.lightning.ComboBox;
import com.spoonconsulting.lightning.MenuItem;
import com.spoonconsulting.lightning.Modal;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;
public class ModalChangeOwner extends Modal{
	
	private ButtonMenu ownerType = new ButtonMenu("ownerType", "span");

	
	private ComboBox input = new ComboBox("input");
	
	private CheckBox sendNotif = new CheckBox("sendNotif");
	
	
	private Button save = new Button("save").setLabel("Save").setVariant(Variant.BRAND);
	
	private Button cancel = new Button("cancel").setLabel("Cancel").setVariant(Variant.NEUTRAL);
	
	private String type = "users";
	
	private Array<jsweet.lang.Object> users = null;
	
	private Array<Object> customerPortalUsers = null;
	
	private Array<Object> queues = null;
	
	private Array<String> caseIds = null;
	
	private DataGrid grid_ = null;
	 
	 
	public ModalChangeOwner(String name) {
		super(name);
		setTitle("Change Owner");
		addItem("users", "Users", "standard:avatar");
		addItem("portalUser", "Customer Portal Users", "standard:customer_portal_users");
		addItem("queues", "Queues", "standard:orders");
		input.getCombo().getChildren().$get(0).addClass("except");
		 ownerType.getButton().addClass("bt");
		ownerType.getButton().getPrefixIcon().addClass("pref");
		ownerType.getButton().getIcon().addClass("suf");
		ownerType.setStyle("position", "absolute").setStyle("z-index", "5");
		
		ownerType.getButton().setPrefixIconName("standard:avatar");
		ownerType.getButton().addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				input.getCombo().setExpand(false);
				input.setValue(null);
			}
		}, "click");
		ownerType.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String name = source.getName();
				System.out.println(name);
				
				MenuItem src = (MenuItem)evt.$get("source");
				if(type == src.getName()) {
					return ;
				}
				type= src.getName();
				if(src.getName() == "users") {
					ownerType.getButton().setPrefixIconName("standard:avatar");
					ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
					if(users == null) {
						Util.getService().getUsers(null).then((result)->{
							input.setOptions(result);
							input.setRendered(false);
							users = result;
							input.render();
						});
					}else {
						input.setOptions(users);
						input.setRendered(false);
						input.render();
					}
				}else if(src.getName() == "portalUser") {
					ownerType.getButton().setPrefixIconName("standard:customer_portal_users");
					ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
					if(customerPortalUsers == null) {
						Util.getService().getCustomerPortalUsers().then((result)->{
							
							input.setOptions(result);
							input.setRendered(false);
							customerPortalUsers = result;
							
							input.render();
						});
					}else {
						input.setOptions(customerPortalUsers);
						input.setRendered(false);
						input.render();
					}
					
				}else if(src.getName() == "queues") {
					ownerType.getButton().setPrefixIconName("standard:orders");
					ownerType.getButton().getPrefixIcon().setStyle("background", "#769ED9");
					if(queues == null) {
						Util.getService().getQueues().then((result)->{
							input.setOptions(result);
							input.setRendered(false);
							queues = result;
							input.render();
							
						});
					}else {
						input.setOptions(queues);
						input.setRendered(false);
						input.render();
					}
				}
				
			}
		}, "select");
		
		
		input.getCombo().getInput().addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				if(type == "users") {
					String txt = input.getCombo().getInput().getValue();
					if(txt.length() % 3 ==0) {
						Util.getService().getUsers(txt).then(result->{
							users = result;
							input.setOptions(result);
							input.getCombo().setExpand(true);
							input.getCombo().getDropdown().setRendered(false);
							input.getCombo().render();
						});
					}
				}
			}
		}, "keyup");
		input.getCombo().getInput().setStyle("padding-left", "3.2rem").setStyle("font-size", "0.75rem").setStyle("color", "#3e3e3c");
		input.getCombo().getInputIcon().setIconName("utility:search").setStyle("margin", "-9px 6px");
		input.setStrict(false);
		input.getControlCtn().addChildAt(0, ownerType);
		
		input.setLabel("Choose an owner:");
		
		getContent().addChild(input);
		getContent().setStyle("padding", "2rem").setStyle("height", "310px");
		
		
		getContent().addChild(sendNotif);
		sendNotif.setLabel("Send notification email");
		
		sendNotif.addClass("slds-m-top_large");
		
		
		
		JSContainer lowerText = new JSContainer("lowerText", "div").setHtml("<div class=\"uiOutputRichText\"><div><span class=\"desc\">The new owner</span> will also become the owner of these records related to <span class=\"desc\"></span> that are owned by <span class=\"desc\">the current record owner</span>.</div></div><ul role=\"group\" style=\"list-style-type:circle;margin-left: 2rem;line-height: 1.9rem;margin-top: 1rem;\"><li>Notes and attachments</li><li>Open activities</li></ul><div class=\"clearall\"></div>");
		lowerText.addClass("slds-m-top_large");
		
		getContent().addChild(lowerText);
		
		
		
		
		getFooter().addChild(cancel).addChild(save);
		
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
		
		save.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				doSave();
			}
		}, "click");
		
	
	}
	
	
	@SuppressWarnings("unchecked")
	public void doSave() {
		String val = input.getValue();
	
		
		
		Util.getService().changeOwner(val, caseIds).then((result)->{
			HeavyGrid hgrid = grid_.getAncestorWithClass("HeavyGrid");
			hgrid.doRefreshList((res)->{
				close();
				Grids gris = getAncestorWithClass("Grids");
				gris.setRendered(false);
				gris.render();
				return null;
			});
		}).Catch((e)->{
			Object b =  (Object)((Object)e).$get("body");
			Array<Object> pe = (Array<Object>)b.$get("pageErrors");
			alert(pe.$get(0).$get("message"));
			close();
			Grids gris = getAncestorWithClass("Grids");
			gris.setRendered(false);
			gris.render();
			
		});
	}
	
	
	public void addItem(String name, String label, String iconName) {
		MenuItem item = new MenuItem(name);
		item.setLabel(label);
		item.setPrefixIconName(iconName);
		item.setChecked(false);
		item.addClass("menu-item").addClass(name);
		ownerType.addItem(item);
	}
	
	public void refresh(DataGrid grid) {
		this.caseIds = grid.getSelectedIds();
		this.grid_ = grid;
		Util.getService().getUsers(null).then((result)->{
			input.setOptions(result);
			input.render();
		});
	}

}
