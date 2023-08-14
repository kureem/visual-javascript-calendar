package sp.filters;

import framework.components.JSContainer;

public class TableTitle extends JSContainer{

	private JSContainer icon = new JSContainer("img");
	
	private JSContainer subtitle = new JSContainer("span").addClass("slds-var-p-right_x-small");
	
	private JSContainer title = new JSContainer("title", "span");
	
	//private ButtonMenu menu = new ButtonMenu("menu", "div");
	
	//private ButtonIcon pin = new ButtonIcon("", "utility:pin");
	
	public TableTitle(String name) {
		super(name, "div");
		addClass("slds-media").addClass("slds-no-space").addClass("slds-grow");
		
		JSContainer iconctn = new JSContainer("div").addClass("slds-avatar").addClass("slds-m-right_small").setStyle("margin-top", "6px");
		addChild(iconctn);
		icon.setAttribute("src", "https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png");
		iconctn.addChild(icon).setStyle("background", "#F2CF5B");
		
		JSContainer middle = new JSContainer("middle", "div");
		middle.addClass("slds-media__body").addClass("slds-align-middle");
		addChild(middle);
		
		middle.addChild(subtitle.setHtml("Cases"));
		JSContainer body = new JSContainer("div").addClass("slds-grid slds-media__body");
		middle.addChild(body);
		
		JSContainer btn = body.addChild("", "div", "slds-button");
		btn.addClass("slds-button--reset").addClass(" slds-type-focus").addClass("slds-truncate").addClass("slds-page-header__title").addClass("slds-text-color--default");
		
		
		
		JSContainer headerName = btn.addChild("", "div").addClass("slds-page-header__name");
		headerName.addChild("", "div").addChild("", "h1").addChild(title);
		title.addClass("slds-page-header__title").addClass("slds-truncate").addClass("slds-p-right--xx-small");
		
		//title.setHtml("2. CS  Open in Branch");
		
		
		//JSContainer switcher= new JSContainer("div").addClass("slds-page-header__name-switcher");
		
	//	switcher.addChild(menu);
		//JSContainer insw = switcher.addChild("", "div", "slds-dropdown-trigger").addClass("slds-dropdown-trigger_click");
		//ButtonIcon downIcon = new ButtonIcon("down", "utility:down");
		//insw.addChild(downIcon);
	//	menu.getButton().addClass("slds-button--reset").addClass("slds-m-top_xxx-small").addClass("slds-p-right_xxx-small");
//		menu.setButtonSize(Size.EXTRA_SMALL);
//		menu.setVariant(ButtonIconVariant.BARE);
	//	headerName.addChild(switcher);
		
		
	/*
	 * switcher.addChild(pin); pin.setTitle("Pin this list");
	 * pin.addEventListener(new EventListener() {
	 * 
	 * @Override public void performAction(Renderable source, Event evt) {
	 * if(pin.getIconName() == "utility:pin") { GridHeader gr =
	 * source.getAncestorWithClass("GridHeader"); gr.pinCurrent();
	 * pin.setIconName("utility:pinned"); }else { alert("Pin another list"); } } },
	 * "click"); pin.setVariant(ButtonIconVariant.BARE);
	 */	
	/*
	 * title.addEventListener(new EventListener() {
	 * 
	 * @Override public void performAction(Renderable source, Event evt) {
	 * doOpenListFilters(source); } }, "click");
	 */
		
		/*
		 * menu.addEventListener(new EventListener() {
		 * 
		 * @Override public void performAction(Renderable source, Event evt) {
		 * doOpenListFilters(source); } }, "click");
		 */
		
	}
	
	/*
	 * public void doOpenListFilters(Renderable source) { GridHeader grid =
	 * source.getAncestorWithClass("GridHeader"); grid.openListFilters(); }
	 */
	
	
	public void setInfo(String icon, String title, String subtitle) {
		this.icon.setAttribute("src", icon);
		this.title.setHtml(title);
		this.subtitle.setHtml(subtitle);
		
		this.icon.getParent().setStyle("background", "#4BC076");
	}
	
	public void setFilterLabel(String label) {
		this.title.setHtml(label);
	}
	
	/*
	 * public void setPinned(boolean b) {
	 * pin.setIconName(b?"utility:pinned":"utility:pin"); }
	 */
}
