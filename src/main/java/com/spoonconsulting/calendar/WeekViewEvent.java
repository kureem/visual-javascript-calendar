package com.spoonconsulting.calendar;

import static jsweet.dom.Globals.document;
import static jsweet.dom.Globals.setTimeout;
import static jsweet.lang.Globals.parseInt;
import static jsweet.util.Globals.function;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.api.Renderer;
import jsweet.dom.CustomEvent;
import jsweet.dom.DragEvent;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.dom.MouseEvent;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;
import jsweet.util.StringTypes;

public class WeekViewEvent extends JSContainer implements ViewEvent, Renderer<WeekViewEvent> {

	private Object value;

	private JSContainer header = new JSContainer("header", "div");

	private JSContainer body = new JSContainer("body", "div");

	private JSContainer footer = new JSContainer("footer", "div");

	private JSContainer title = new JSContainer("title", "p");

	private JSContainer time = new JSContainer("time", "span");

	private JSContainer description = new JSContainer("description", "p");

	private JSContainer resizer = new JSContainer("resizer", "div");
	
	private JSContainer close = new JSContainer("close", "div");

	private Array<WeekViewCell> heldBy = new Array<WeekViewCell>();

	double startY, startHeight;
	double newHeight;
	boolean resizing = false;
	HTMLElement p = null;
	jsweet.dom.EventListener doDrag = (e) -> {
		p.classList.add("spn-resizing");
		resizing = true;
		
		p.style.height = (startHeight + ((MouseEvent) e).clientY - startY) + "px";
		newHeight = (startHeight + ((MouseEvent) e).clientY - startY);
	};

	jsweet.dom.EventListener stopDrag = (e) -> {

		if(resizing) {
			resizing = false;
			
			CustomEvent ce = beforeResize();
			boolean cancel = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
			if(cancel) {
				cancelUpdate();
			}else {
				updateEndDate();
			}
			p.classList.remove("spn-resizing");
			document.documentElement.removeEventListener("mousemove", doDrag, false);
			render();
		
		}
	};

	public WeekViewEvent(String name) {
		super(name, "div");
		addRenderer(this);
		addClass("spn-week-view-event");
		addChild(header.addClass("spn-header"));
		
		addChild(body.addClass("spn-body"));
		addChild(footer.addClass("spn-footer"));
		header.addChild(time.addClass("spn-time"))
				
				.addChild(close.addClass("spn-close"));
		
		body.addChild(title.addClass("spn-title")).addChild(description.addClass("spn-description"));
		footer.addChild(resizer.addClass("spn-resizer"));
		header.setAttribute("draggable", "true");
		header.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				DragEvent de = (DragEvent) evt;
				de.dataTransfer.setData("text/plain", "move");
				HTMLElement el = (HTMLElement) evt.target;
				setTimeout(function(() -> {
					el.parentElement.classList.add("slds-hide");
				}), 0);

				WeekViewDndManager.dragging = (WeekViewEvent) source.getParent();
				WeekViewDndManager.resizing = null;
				//
			}
		}, "dragstart");

		header.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				DragEvent de = (DragEvent) evt;
				de.dataTransfer.setData("text/plain", "move");
				HTMLElement el = (HTMLElement) evt.target;
				setTimeout(function(() -> {
					el.parentElement.classList.remove("slds-hide");
				}), 0);

				WeekViewDndManager.dragging = null;
			}
		}, "dragend");

		resizer.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {

				MouseEvent me = (MouseEvent) evt;
				startY = me.clientY;
				p = getNative();
				startHeight = parseInt(p.style.height, 10);

				resizer.getNative().addEventListener(StringTypes.mousedown, (e) -> {

					document.documentElement.addEventListener("mousemove", doDrag, false);
					document.documentElement.addEventListener("mouseup", stopDrag, false);

					return true;
				}, false);
			}
		}, "mouseenter");
		
		
		close.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				WeekView wv = getAncestorWithClass("WeekView");
				
				WeekViewEvent uical =source.getAncestorWithClass("spn-week-view-event");
				CustomEvent beforedelete = new CustomEvent("beforedelete");
				beforedelete.$set("calEvent", uical);
				beforedelete.$set("value", value);
				
				wv.fireListener("beforedelete", beforedelete);
				
				boolean cancel = beforedelete.defaultPrevented || beforedelete.cancelBubble || !beforedelete.returnValue;
				
				if(!cancel) {
					wv.removeCalEvent(uical);
					CustomEvent delete = new CustomEvent("delete");
					delete.$set("value", value);
					delete.$set("calEvent",uical);
					wv.fireListener("delete", delete);
				}
				
			}
		}, "click");
		
	}

	public void reset() {
		String title = (String) this.value.$get("title");
		String description = (String) this.value.$get("description");
		Date startDate = (Date) this.value.$get("startDate");
		Date endDate = (Date) this.value.$get("endDate");
		this.title.setHtml(title);
		this.description.setHtml(description);
		this.time.setHtml(formatDate(startDate) + " - " + formatDate(endDate));

		double startHr = startDate.getHours();
		double startMin = startDate.getMinutes();
		double endHr = endDate.getHours();
		double endMin = endDate.getMinutes();

		double diffHr = (endHr - startHr) * 2;

		if (startMin > 0) {
			diffHr = diffHr - 1;
		}

		if (endMin > 0) {
			diffHr = diffHr + 1;
		}

		setStyle("height", diffHr * WeekView.CELL_HEIGHT + "px");

	}

	public JSContainer getGhost() {
		JSContainer g = new JSContainer("div");
		g.setStyle("border", "dotted 1px red");
		g.setStyle("height", getNative().style.height);
		g.setStyle("width", getNative().offsetWidth + "px");
		return g;
	}

	public Date getStartDate() {
		return (Date) this.value.$get("startDate");
	}

	public Date getEndDate() {
		return (Date) this.value.$get("endDate");
	}

	public double getEventDurationMS() {
		Date startDate = getStartDate();
		Date endDate = getEndDate();

		return (endDate.getTime() - startDate.getTime());

	}

	public boolean isHeldBy(WeekViewCell cell) {
		for (WeekViewCell c : heldBy) {
			if (c.getId() == cell.getId()) {
				return true;
			}
		}
		return false;
	}

	public void addHeldBy(WeekViewCell cell) {
		if (!isHeldBy(cell)) {
			heldBy.push(cell);
		}
	}

	protected String formatDate(Date dt) {
		double hr = dt.getHours();
		double mins = dt.getMinutes();

		return (hr < 10 ? "0" + hr : hr + "") + ":" + (mins < 10 ? "0" + mins : mins);
	}

	public void setValue(Object value) {
		setName((String) value.$get("title"));
		this.value = value;
		reset();
	}

	public Object getValue() {
		return this.value;
	}

	public void removeFromCell() {
		WeekViewCell cell = getAncestorWithClass("spn-week-view-cell");
		cell.removeCalEvent(this);
		heldBy = new Array<WeekViewCell>();
	}

	public Object getNewEvent(Date startDate) {
		Object evt = new Object();
		for (String key : Object.keys(this.value)) {
			evt.$set(key, value.$get(key));
			if (key == "startDate") {
				evt.$set("startDate", startDate);
			}
			if (key == "endDate") {
				Date ostartDate = (Date) value.$get("startDate");
				Date oendDate = (Date) value.$get("endDate");
				double diff = oendDate.getTime() - ostartDate.getTime();
				Date endDate = new Date(startDate.getTime() + diff);
				evt.$set("endDate", endDate);
			}
		}
		return evt;
	}
	
	
	
	public void cancelUpdate() {
		setStyle("height", getStyle("height"));
	}
	
	
	public CustomEvent beforeResize() {
		CustomEvent evt = new CustomEvent("beforeresize");
		evt.$set("value", value);
		evt.$set("calEvent", this);
		WeekView wj = getAncestorWithClass("WeekView");
		wj.fireListener("beforeresize", evt);
		return evt;
	}
	
	public void updateEndDate() {
		WeekView wj = getAncestorWithClass("WeekView");
		
		
		double remainder = newHeight % WeekView.CELL_HEIGHT;
		double segments = (newHeight - remainder)/WeekView.CELL_HEIGHT;
		if(remainder > 0) {
			segments = segments + 1;
		}
		
		double ms = 30*60*1000*segments;
		
		Date endDate = new Date(getStartDate().getTime() + ms);
		this.value.$set("endDate", endDate);
		setStyle("height", segments*WeekView.CELL_HEIGHT + "px");
		getNative().style.height = getStyle("height");
		this.time.setHtml(formatDate(getStartDate()) + " - " + formatDate(getEndDate()));
		
		
		wj.adjustHolding(this);
		wj.adjustEventWidth();
		CustomEvent evt = new CustomEvent("afterresize");
		evt.$set("calEvent", this);
		evt.$set("value", value);
		wj.fireListener("afterresize", evt);
		
	}

	@Override
	public void doRender(WeekViewEvent renderable, HTMLElement parent) {
		
		WeekView wv = getAncestorWithClass("WeekView");
		wv.decorateCalEvent(renderable);
		
	}

}
