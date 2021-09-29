package com.spoonconsulting.calendar;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.api.Renderer;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class WeekViewCell extends Col implements Renderer<WeekViewCell>{

	private double hour;
	private double min;

	private Date date;

	private Array<ViewEvent> holding = new Array<ViewEvent>();
	
	private int row;
	
	private int col;
	
	private boolean disabled = false;

	public WeekViewCell(double hour, double min, Date date, int row, int col) {
		super(hour + "-" + min, 1, 1);
		addRenderer(this);
		this.hour = hour;
		this.min = min;
		this.date = date;
		this.row = row;
		this.col = col;
		addClass("spn-week-view-cell WeekViewCell");
		setStyle("height", WeekView.CELL_HEIGHT + "px");
		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled)
					fireEvent("dblclickcell");

			}
		}, "dblclick");
		
		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled)
					fireEvent("click");

			}
		}, "click");

		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled) {
					if (WeekViewDndManager.dragging != null) {
						evt.preventDefault();
						((HTMLElement) evt.target).classList.add("drag-over");
						fireEvent("dragentercell");
					}
				}
			}
		}, "dragenter");

		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled) {
					if (WeekViewDndManager.dragging != null) {
						evt.preventDefault();
						((HTMLElement) evt.target).classList.add("drag-over");
						fireEvent("dragovercell");
					}
				
				}
			}
		}, "dragover");

		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled) {
					if (WeekViewDndManager.dragging != null) {
						evt.preventDefault();
						((HTMLElement) evt.target).classList.remove("drag-over");
						fireEvent("dragleavecell");
					}
				}
			}
		}, "dragleave");

		addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				if(!disabled) {
					if (WeekViewDndManager.dragging != null) {
	
						evt.preventDefault();
	
						((HTMLElement) evt.target).classList.remove("drag-over");
	
						ViewEvent dragging = WeekViewDndManager.dragging;
						if (dragging != null) {
							CustomEvent ce = fireEvent("beforedropcell");
							boolean cancel = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
							if(!cancel) {
								Date startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, min);
								Object newEvt = dragging.getNewEvent(startDate);
								WeekView wek = source.getAncestorWithClass("spn-week-view");
								wek.moveCalEvent(dragging, newEvt);
								WeekViewDndManager.dragging = null;
								fireEvent("dropcell");
							}
						}
					}
				}
			}
		}, "drop");

	}

	public void addCalEvent(WeekViewEvent uiCalEvt) {
		addChild(uiCalEvt);
		hold(uiCalEvt);
	}

	public void removeCalEvent(ViewEvent uiCalEvt) {
		removeChild(uiCalEvt);
		unhold(uiCalEvt);
		//setRendered(false);
	}
	
	private CustomEvent fireEvent(String type) {
		CustomEvent ev = new CustomEvent(type);
		ev.initEvent(type, true, true);
		ev.$set("startDate", getStartDate());
		ev.$set("cell", this);
		ev.$set("calEvent", WeekViewDndManager.dragging);
		WeekView wj = getAncestorWithClass("spn-week-view");
		wj.fireListener(type, ev);
		return ev;
	}

	public double getHour() {
		return hour;
	}

	public double getMin() {
		return min;
	}

	public Date getDate() {
		return date;
	}
	
	public Date getStartDate() {
		return new Date(date.getTime() + hour*60*60000 + min*60000);
	}

	public void hold(WeekViewEvent uiCalEvt) {
		if (!isHolding(uiCalEvt)) {
			holding.push(uiCalEvt);
		}

		uiCalEvt.addHeldBy(this);
	}

	public void unhold(ViewEvent uiCalEvt) {
		Array<ViewEvent> tmp = new Array<ViewEvent>();
		for (ViewEvent ev : holding) {
			if (ev.getId() != uiCalEvt.getId()) {
				tmp.push(ev);
			}
		}
		this.holding = tmp;
	}

	public Boolean isHolding(ViewEvent uiCalEvt) {
		for (ViewEvent ev : holding) {
			if (ev.getId() == uiCalEvt.getId()) {
				return true;
			}
		}

		return false;
	}
	

	public Array<ViewEvent> getHolding() {
		return holding;
	}

	public int getRow() {
		return row;
	}

	public int getCol() {
		return col;
	}

	@Override
	public void doRender(WeekViewCell renderable, HTMLElement parent) {
		WeekView wv = getAncestorWithClass("WeekView");
		wv.decorateCell(renderable);
	}

	public boolean isDisabled() {
		return disabled;
	}

	public void setDisabled(boolean disabled) {
		if(disabled) {
			addClass("is-disabled");
		}else {
			removeClass("is-disabled");
		}
		this.disabled = disabled;
	}
	
	

}
