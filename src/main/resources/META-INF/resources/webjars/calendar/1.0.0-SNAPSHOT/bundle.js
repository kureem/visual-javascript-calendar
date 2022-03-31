/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var com;
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class Boot {
                static main(args) {
                    const table = new com.spoonconsulting.calendar.WeekView("wv");
                    table.reset();
                    setTimeout((((table) => {
                        return (e) => {
                            table.render(api.ContainerRenderer.getElementById("semainetype"));
                            table.render(api.ContainerRenderer.getElementById("semainetype"));
                        };
                    })(table)), 1000);
                }
            }
            calendar.Boot = Boot;
            Boot["__class"] = "com.spoonconsulting.calendar.Boot";
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class Box extends JSContainer {
                constructor(name, size, of) {
                    super(name, "div");
                    this.addClass("slds-grid slds-wrap slds-col slds-size_" + size + "-of-" + of);
                }
            }
            calendar.Box = Box;
            Box["__class"] = "com.spoonconsulting.calendar.Box";
            Box["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class Col extends JSContainer {
                constructor(name, size, of) {
                    super(name, "div");
                    this.addClass("slds-col slds-size_" + size + "-of-" + of);
                }
            }
            calendar.Col = Col;
            Col["__class"] = "com.spoonconsulting.calendar.Col";
            Col["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class MonthView extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.startDate = new Date();
                    this.days = 7;
                    this.header = new com.spoonconsulting.calendar.Box("header", 12, 12);
                    this.body = new com.spoonconsulting.calendar.MonthViewBody("body");
                    this.addClass("MonthView");
                    this.addClass("spn-month-view");
                    this.addChild(this.header);
                    this.header.addClass("spn-month-view-header");
                    this.addChild(this.body);
                    this.addClass("brd-left");
                    this.addClass("brd-top");
                }
                static DAYS_$LI$() { if (MonthView.DAYS == null) {
                    MonthView.DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                } return MonthView.DAYS; }
                getStartDate() {
                    return this.startDate;
                }
                setStartDate(startDate) {
                    this.startDate = startDate;
                }
                reset() {
                    this.fillHeader();
                    this.fillBody();
                }
                /*private*/ fillHeader() {
                    this.header.clearChildren();
                    this.header.setRendered(false);
                    for (let i = 0; i < this.days; i++) {
                        {
                            const cell = new com.spoonconsulting.calendar.Box(MonthView.DAYS_$LI$()[i], 1, this.days);
                            cell.addClass("spn-month-view-header-cell");
                            cell.setHtml(MonthView.DAYS_$LI$()[i]);
                            this.header.addChild(cell);
                            cell.addClass("brd-btm");
                            cell.addClass("brd-right");
                        }
                        ;
                    }
                }
                /*private*/ fillBody() {
                    let firstDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1, 0, 0);
                    let firstDay = this.startDate.getDay();
                    if (firstDay === 0) {
                        firstDay = 7;
                    }
                    firstDate = com.spoonconsulting.calendar.Util.addDays(firstDate, 1 - firstDay);
                    const endDate = com.spoonconsulting.calendar.Util.getLastDateOfMonth(this.startDate);
                    let lastDate = endDate;
                    const lastDay = endDate.getDay();
                    if (lastDay === 1) {
                        lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, 6);
                    }
                    else if (lastDay === 2) {
                        lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, 5);
                    }
                    if (lastDay > 0)
                        lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, this.days - lastDay);
                    let tmp = firstDate;
                    let counter = 0;
                    while ((true)) {
                        {
                            const c = new com.spoonconsulting.calendar.MonthViewCell("", this.days);
                            c.setStyle("height", MonthView.CELL_HEIGHT + "px");
                            c.setDate(tmp);
                            this.body.addChild(c);
                            if (tmp.getTime() >= lastDate.getTime()) {
                                break;
                            }
                            else {
                                tmp = com.spoonconsulting.calendar.Util.addDays(tmp, 1);
                            }
                            counter++;
                        }
                    }
                    ;
                    const rows = ((counter / this.days | 0)) + 1;
                    this.body.setStyle("height", (MonthView.CELL_HEIGHT * rows) + "px");
                }
                addCalEvent(evt) {
                    const wk = new com.spoonconsulting.calendar.MonthViewEvent("");
                    wk.setValue(evt);
                    const startDate = wk.getStartDate();
                    const cell = this.getCell(startDate);
                    cell.addCalEvent(wk);
                }
                removeCalEvent(uiCalEvt) {
                    {
                        let array151 = this.body.getCells();
                        for (let index150 = 0; index150 < array151.length; index150++) {
                            let r = array151[index150];
                            {
                                r.removeCalEvent(uiCalEvt);
                            }
                        }
                    }
                }
                moveCalEvent(uiCalEvent, newEvent) {
                    this.removeCalEvent(uiCalEvent);
                    this.addCalEvent(newEvent);
                }
                getCell(dt) {
                    {
                        let array153 = this.body.getCells();
                        for (let index152 = 0; index152 < array153.length; index152++) {
                            let cell = array153[index152];
                            {
                                if (cell.isSameDate(dt)) {
                                    return cell;
                                }
                            }
                        }
                    }
                    return null;
                }
            }
            MonthView.CELL_HEIGHT = 100;
            calendar.MonthView = MonthView;
            MonthView["__class"] = "com.spoonconsulting.calendar.MonthView";
            MonthView["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class MonthViewEvent extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.header = new JSContainer("header", "div");
                    this.close = new JSContainer("close", "div");
                    this.title = new JSContainer("title", "p");
                    this.addClass("spn-month-view-event");
                    this.addChild(this.header.addClass("spn-header"));
                    this.header.addChild(this.title.addClass("spn-title")).addChild(this.close.addClass("spn-close"));
                    this.header.setAttribute("draggable", "true");
                    this.header.addEventListener(new MonthViewEvent.MonthViewEvent$0(this), "dragstart");
                    this.header.addEventListener(new MonthViewEvent.MonthViewEvent$1(this), "dragend");
                    this.close.addEventListener(new MonthViewEvent.MonthViewEvent$2(this), "click");
                }
                reset() {
                    const title = this.value["title"];
                    const startDate = this.value["startDate"];
                    this.title.setHtml(this.formatDate(startDate) + " - " + title);
                }
                formatDate(dt) {
                    return com.spoonconsulting.calendar.Util.formatDate(dt, "hh:mm");
                }
                setValue(value) {
                    this.setName(value["title"]);
                    this.value = value;
                    this.reset();
                }
                getStartDate() {
                    return this.value["startDate"];
                }
                getEndDate() {
                    return this.value["endDate"];
                }
                /**
                 *
                 * @param {Date} startDate
                 * @return {Object}
                 */
                getNewEvent(startDate) {
                    const evt = new Object();
                    {
                        let array155 = Object.keys(this.value);
                        for (let index154 = 0; index154 < array155.length; index154++) {
                            let key = array155[index154];
                            {
                                evt[key] = this.value[key];
                                if (key === "startDate") {
                                    evt["startDate"] = startDate;
                                }
                                if (key === "endDate") {
                                    const ostartDate = this.value["startDate"];
                                    const oendDate = this.value["endDate"];
                                    const diff = oendDate.getTime() - ostartDate.getTime();
                                    const endDate = new Date(startDate.getTime() + diff);
                                    evt["endDate"] = endDate;
                                }
                            }
                        }
                    }
                    return evt;
                }
                /**
                 *
                 * @return {Object}
                 */
                getValue() {
                    return this.value;
                }
            }
            calendar.MonthViewEvent = MonthViewEvent;
            MonthViewEvent["__class"] = "com.spoonconsulting.calendar.MonthViewEvent";
            MonthViewEvent["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.calendar.ViewEvent"];
            (function (MonthViewEvent) {
                class MonthViewEvent$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const de = evt;
                        de.dataTransfer.setData("text/plain", "move");
                        const el = evt.target;
                        setTimeout((((el) => {
                            return () => {
                                el.parentElement.classList.add("slds-hide");
                            };
                        })(el)), 0);
                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = source.getParent();
                        com.spoonconsulting.calendar.WeekViewDndManager.resizing = null;
                    }
                }
                MonthViewEvent.MonthViewEvent$0 = MonthViewEvent$0;
                MonthViewEvent$0["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewEvent$1 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const de = evt;
                        de.dataTransfer.setData("text/plain", "move");
                        const el = evt.target;
                        setTimeout((((el) => {
                            return () => {
                                el.parentElement.classList.remove("slds-hide");
                            };
                        })(el)), 0);
                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                    }
                }
                MonthViewEvent.MonthViewEvent$1 = MonthViewEvent$1;
                MonthViewEvent$1["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewEvent$2 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const wv = (this.__parent.getAncestorWithClass("MonthView"));
                        const ev = (source.getAncestorWithClass("spn-month-view-event"));
                        wv.removeCalEvent(ev);
                    }
                }
                MonthViewEvent.MonthViewEvent$2 = MonthViewEvent$2;
                MonthViewEvent$2["__interfaces"] = ["framework.components.api.EventListener"];
            })(MonthViewEvent = calendar.MonthViewEvent || (calendar.MonthViewEvent = {}));
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class Util {
                static DAYS_$LI$() { if (Util.DAYS == null) {
                    Util.DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
                } return Util.DAYS; }
                static LONG_MONTHS_$LI$() { if (Util.LONG_MONTHS == null) {
                    Util.LONG_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                } return Util.LONG_MONTHS; }
                static SHORT_MONTHS_$LI$() { if (Util.SHORT_MONTHS == null) {
                    Util.SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                } return Util.SHORT_MONTHS; }
                static SHORT_DAYS_$LI$() { if (Util.SHORT_DAYS == null) {
                    Util.SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                } return Util.SHORT_DAYS; }
                static LONG_DAYS_$LI$() { if (Util.LONG_DAYS == null) {
                    Util.LONG_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                } return Util.LONG_DAYS; }
                static getSemaineType() {
                    const s = "{\r\n  \"config\": {\r\n    \"Lundi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"12:00\",\r\n          \"to\": \"14:00\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Mardi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"11:30\",\r\n          \"to\": \"12:30\",\r\n          \"quantity\": \"4\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Mercredi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"09:00\",\r\n          \"to\": \"10:00\",\r\n          \"quantity\": \"4\"\r\n        },\r\n        {\r\n          \"from\": \"12:00\",\r\n          \"to\": \"14:30\",\r\n          \"quantity\": \"3\"\r\n        },\r\n        {\r\n          \"from\": \"12:30\",\r\n          \"to\": \"13:30\",\r\n          \"quantity\": \"3\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Jeudi\": {\r\n      \"dispo\": [],\r\n      \"abs\": [\r\n        {\r\n          \"from\": \"10:00\",\r\n          \"to\": \"11:00\",\r\n          \"quantity\": 1\r\n        }\r\n      ]\r\n    },\r\n    \"Vendredi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"15:30\",\r\n          \"to\": \"17:00\",\r\n          \"quantity\": \"4\"\r\n        },\r\n        {\r\n          \"from\": \"10:30\",\r\n          \"to\": \"14:00\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Samedi\": {\r\n      \"dispo\": [],\r\n      \"abs\": []\r\n    }\r\n  },\r\n  \"until\": \"2020-12-27T00:00:00.000Z\"\r\n}";
                    const obj = JSON.parse(s);
                    return obj;
                }
                static getDaysInMonth(date) {
                    if (date.getMonth() === 11) {
                        return 31;
                    }
                    else {
                        const tmp = Util.addDays(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 0, 0, 0, 0), -1);
                        return tmp.getDate();
                    }
                }
                static getFirstDateOfMonth(date) {
                    return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
                }
                static getLastDateOfMonth(date) {
                    if (date.getMonth() === 11) {
                        return new Date(date.getFullYear(), date.getMonth(), 31, 0, 0, 0, 0);
                    }
                    else {
                        const tmp = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, 0);
                        return Util.addDays(tmp, -1);
                    }
                }
                static to2num(val) {
                    if (val < 10) {
                        return "0" + val;
                    }
                    else {
                        return val + "";
                    }
                }
                static getTime(hour, minute) {
                    return Util.to2num(hour) + ":" + Util.to2num(minute);
                }
                static getHour(time) {
                    return /* parseInt */ parseInt(time.split(":")[0]);
                }
                static getMinute(time) {
                    return /* parseInt */ parseInt(time.split(":")[1]);
                }
                static countRows(startTime, endTime) {
                    const fromHr = Util.getHour(startTime);
                    const toHr = Util.getHour(endTime);
                    const fromMin = Util.getMinute(startTime);
                    const toMin = Util.getMinute(endTime);
                    let whole = ((toHr - fromHr) * 2) + 1;
                    if (fromMin === 30) {
                        whole = whole - 1;
                    }
                    if (toMin === 30) {
                        whole = whole + 1;
                    }
                    return whole;
                }
                static countStartRowPosition(startTime) {
                    const hr = Util.getHour(startTime);
                    const minute = Util.getMinute(startTime);
                    let startRow = (hr - Util.MIN_HOUR) * 2 + 1;
                    if (minute === 30) {
                        startRow = startRow + 1;
                    }
                    const top = (startRow * Util.ROW_HEIGHT_PX) + 1;
                    return top;
                }
                static formatDate(dt, format) {
                    const dd = Util.formatNum(dt.getDate());
                    const MM = Util.formatNum(dt.getMonth());
                    const hh = Util.formatNum(dt.getHours());
                    const mm = Util.formatNum(dt.getMinutes());
                    const ss = Util.formatNum(dt.getSeconds());
                    const EE = Util.SHORT_DAYS_$LI$()[(dt.getDay() | 0)];
                    const EEEE = Util.LONG_DAYS_$LI$()[(dt.getDay() | 0)];
                    const yyyy = dt.getFullYear() + "";
                    format = Util.replace(format, "dd", dd);
                    format = Util.replace(format, "MM", MM);
                    format = Util.replace(format, "hh", hh);
                    format = Util.replace(format, "mm", mm);
                    format = Util.replace(format, "ss", ss);
                    format = Util.replace(format, "EE", EE);
                    format = Util.replace(format, "EEEE", EEEE);
                    format = Util.replace(format, "yyyy", yyyy);
                    return format;
                }
                static replace(text, s, __with) {
                    return /* replace */ text.split(s).join(__with);
                }
                static formatNum(d) {
                    return d < 10 ? "0" + d : d + "";
                }
                static countStartColPosition(day, gutter, colWidth) {
                    let index = 0;
                    for (let index156 = 0; index156 < Util.DAYS_$LI$().length; index156++) {
                        let s = Util.DAYS_$LI$()[index156];
                        {
                            if (s === day) {
                                break;
                            }
                            index++;
                        }
                    }
                    return (colWidth * index) + gutter;
                }
                static addWeeks(dt, weeks) {
                    return Util.addDays(dt, weeks * 7);
                }
                static addDays(dt, days) {
                    return Util.addHour(dt, days * 24);
                }
                static addHour(dt, hrs) {
                    return Util.addMinutes(dt, hrs * 60);
                }
                static addMinutes(dt, minutes) {
                    return Util.addSeconds(dt, minutes * 60);
                }
                static addSeconds(dt, secs) {
                    return Util.addMiliseconds(dt, secs * 1000);
                }
                static addMiliseconds(dt, ms) {
                    return new Date(dt.getTime() + ms);
                }
                static isSameDate(dt1, dt2) {
                    return (dt1.getDate() === dt2.getDate()) && (dt1.getMonth() === dt2.getMonth()) && (dt1.getFullYear() === dt2.getFullYear());
                }
            }
            Util.MIN_HOUR = 6;
            Util.MAX_HOUR = 21;
            Util.ROW_HEIGHT_PX = 28;
            Util.COLOR_DISPO = "#cfebfe";
            Util.COLOR_ABS = "#425c5a";
            calendar.Util = Util;
            Util["__class"] = "com.spoonconsulting.calendar.Util";
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            let WeekDay;
            (function (WeekDay) {
                WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
                WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
                WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
                WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
                WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
                WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
                WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
            })(WeekDay = calendar.WeekDay || (calendar.WeekDay = {}));
            /** @ignore */
            class WeekDay_$WRAPPER {
                constructor(_$ordinal, _$name, shortFR, shortEN, longFR, longEN) {
                    this._$ordinal = _$ordinal;
                    this._$name = _$name;
                    if (this.shortFR === undefined) {
                        this.shortFR = null;
                    }
                    if (this.shortEN === undefined) {
                        this.shortEN = null;
                    }
                    if (this.longFR === undefined) {
                        this.longFR = null;
                    }
                    if (this.longEN === undefined) {
                        this.longEN = null;
                    }
                    this.shortFR = shortFR;
                    this.shortEN = shortEN;
                    this.longFR = longFR;
                    this.longEN = longEN;
                }
                getShortFR() {
                    return this.shortFR;
                }
                getShortEN() {
                    return this.shortEN;
                }
                getLongFR() {
                    return this.longFR;
                }
                getLongEN() {
                    return this.longEN;
                }
                name() { return this._$name; }
                ordinal() { return this._$ordinal; }
                compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
            }
            calendar.WeekDay_$WRAPPER = WeekDay_$WRAPPER;
            WeekDay["__class"] = "com.spoonconsulting.calendar.WeekDay";
            WeekDay["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
            WeekDay["_$wrappers"] = { 0: new WeekDay_$WRAPPER(0, "SUNDAY", "Dim", "Dimanche", "Sun", "Sunday"), 1: new WeekDay_$WRAPPER(1, "MONDAY", "Lun", "Lundi", "Mon", "Monday"), 2: new WeekDay_$WRAPPER(2, "TUESDAY", "Mar", "Mardi", "Tue", "Tuesday"), 3: new WeekDay_$WRAPPER(3, "WEDNESDAY", "Mer", "Mercredi", "Wed", "Wednesday"), 4: new WeekDay_$WRAPPER(4, "THURSDAY", "Jeu", "Jeudi", "Thurs", "Thursday"), 5: new WeekDay_$WRAPPER(5, "FRIDAY", "Ven", "Vendredi", "Fri", "Friday"), 6: new WeekDay_$WRAPPER(6, "SATURDAY", "Sam", "Samedi", "Sat", "Saturday") };
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekView extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.events = (new Array());
                    this.startDate = new Date();
                    this.days = 7;
                    this.startHour = 0;
                    this.endHour = 23;
                    this.header = new com.spoonconsulting.calendar.Box("header", 12, 12);
                    this.headerLeftGutter = new com.spoonconsulting.calendar.Box("headerLeftGutter", 1, 12);
                    this.headerRightBody = new com.spoonconsulting.calendar.Box("headerRightBody", 11, 12);
                    this.body = new com.spoonconsulting.calendar.Box("body", 12, 12);
                    this.bodyLeftGutter = new com.spoonconsulting.calendar.Box("bodyLeftGutter", 1, 12);
                    this.bodyRightBody = new com.spoonconsulting.calendar.WeekViewBody("bodyRightBody");
                    if (this.cellDecorator === undefined) {
                        this.cellDecorator = null;
                    }
                    if (this.eventDecorator === undefined) {
                        this.eventDecorator = null;
                    }
                    this.addClass("slds-grid slds-wrap spn-week-view brd-top brd-left WeekView");
                    this.header.addClass("spn-header brd-btm");
                    this.body.addClass("spn-body");
                    this.addChild(this.header);
                    this.addChild(this.body);
                    this.headerLeftGutter.addClass("spn-header-left-gutter");
                    this.header.addChild(this.headerLeftGutter);
                    this.headerRightBody.addClass("spn-header-right-body");
                    this.header.addChild(this.headerRightBody);
                    this.bodyLeftGutter.addClass("spn-body-left-gutter brd-right");
                    this.body.addChild(this.bodyLeftGutter);
                    this.body.addChild(this.bodyRightBody);
                    this.body.setStyle("height", "729px");
                    this.body.setStyle("overflow", "auto");
                }
                refresh() {
                    this.reset();
                }
                reset() {
                    this.fillAll();
                }
                fillAll() {
                    this.fillLeftGutter();
                    this.fillRightBody();
                }
                /*private*/ formatDate(date) {
                    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    const day = date.getDay();
                    const iDate = date.getDate();
                    const month = date.getMonth() + 1;
                    const sDate = iDate < 10 ? "0" + iDate : iDate + "";
                    const sMonth = month < 10 ? "0" + month : month + "";
                    return days[(day | 0)] + " " + sDate + "/" + sMonth;
                }
                fillLeftGutter() {
                    this.headerLeftGutter.clearChildren();
                    this.headerLeftGutter.setRendered(false);
                    const hgut = new JSContainer("div");
                    hgut.addClass("slds-col slds-size_1-of-1");
                    hgut.addClass("spn-header-left-gutter-cell");
                    this.bodyLeftGutter.clearChildren();
                    this.bodyLeftGutter.setRendered(false);
                    for (let i = this.startHour; i <= this.endHour; i++) {
                        {
                            const gut = new com.spoonconsulting.calendar.Box("gut", 1, 1);
                            gut.addClass("spn-body-left-gutter-cell");
                            this.bodyLeftGutter.addChild(gut);
                            const fullHr = new com.spoonconsulting.calendar.Col("fullHr", 1, 1);
                            fullHr.addClass("brd-btm");
                            fullHr.setStyle("height", WeekView.CELL_HEIGHT + "px");
                            fullHr.setHtml(i + ":00");
                            gut.addChild(fullHr);
                            const halfHr = new com.spoonconsulting.calendar.Col("halfHr", 1, 1);
                            halfHr.addClass("brd-btm");
                            halfHr.setStyle("height", WeekView.CELL_HEIGHT + "px");
                            gut.addChild(halfHr);
                        }
                        ;
                    }
                }
                decorateCell(cell) {
                    if (this.cellDecorator != null) {
                        (target => (typeof target === 'function') ? target(cell) : target.apply(cell))(this.cellDecorator);
                    }
                }
                decorateCalEvent(calEvt) {
                    if (this.eventDecorator != null) {
                        (target => (typeof target === 'function') ? target(calEvt) : target.apply(calEvt))(this.eventDecorator);
                    }
                }
                moveDays(amount) {
                    this.startDate = com.spoonconsulting.calendar.Util.addDays(this.startDate, amount);
                    this.getStartDate();
                    this.refresh();
                }
                fillRightBody() {
                    this.getStartDate();
                    this.headerRightBody.clearChildren();
                    this.headerRightBody.setRendered(false);
                    this.bodyRightBody.clearChildren();
                    this.bodyRightBody.setRendered(false);
                    for (let d = 0; d < this.days; d++) {
                        {
                            const aDay = 1000 * 60 * 60 * 24 * d;
                            const dt = new Date(this.startDate.getTime() + aDay);
                            const headerRightBodyCell = new com.spoonconsulting.calendar.Col("div", 1, this.days);
                            headerRightBodyCell.addClass("spn-header-right-body-cell brd-right");
                            headerRightBodyCell.setHtml(this.formatDate(dt));
                            this.headerRightBody.addChild(headerRightBodyCell.setStyle("height", WeekView.CELL_HEIGHT + "px"));
                        }
                        ;
                    }
                    let row = 0;
                    for (let h = this.startHour; h <= this.endHour; h++) {
                        {
                            let col = 0;
                            for (let d = 0; d < this.days; d++) {
                                {
                                    const aDay = 1000 * 60 * 60 * 24 * d;
                                    const dt = new Date(this.startDate.getTime() + aDay);
                                    const bodyRightBodyCell = new com.spoonconsulting.calendar.WeekViewDateCell(dt, h, this.days, row, col);
                                    this.bodyRightBody.addChild(bodyRightBodyCell);
                                    col = col + 1;
                                }
                                ;
                            }
                            row = row + 1;
                        }
                        ;
                    }
                    for (let index157 = 0; index157 < this.events.length; index157++) {
                        let evt = this.events[index157];
                        {
                            this.addCalEvent$jsweet_lang_Object$boolean(evt, false);
                        }
                    }
                }
                getDays() {
                    return this.days;
                }
                setDays(days) {
                    this.days = days;
                    this.getStartDate();
                }
                getStartHour() {
                    return this.startHour;
                }
                setStartHour(startHour) {
                    this.startHour = startHour;
                    this.getStartDate();
                }
                getEndHour() {
                    return this.endHour;
                }
                setEndHour(endHour) {
                    this.endHour = endHour;
                }
                setStartDate(date) {
                    this.startDate = date;
                    this.getStartDate();
                }
                getEndDate() {
                    this.getStartDate();
                    let endDate = com.spoonconsulting.calendar.Util.addDays(this.startDate, this.days - 1);
                    endDate = com.spoonconsulting.calendar.Util.addHour(endDate, this.endHour);
                    endDate = com.spoonconsulting.calendar.Util.addMinutes(endDate, 59);
                    return endDate;
                }
                getStartDate() {
                    this.startDate.setHours(0, 0, 0, 0);
                    const day = this.startDate.getDay();
                    if (day > 0) {
                        const toRemove = 1000 * 60 * 60 * 24 * (day - 1);
                        this.startDate = new Date(this.startDate.getTime() - toRemove);
                    }
                    else {
                        const toRemove = 1000 * 60 * 60 * 24 * 6;
                        this.startDate = new Date(this.startDate.getTime() - toRemove);
                    }
                    this.startDate.setHours(this.startHour);
                    this.startDate.setMinutes(0);
                    return this.startDate;
                }
                isInRange(date) {
                    const startDate = this.getStartDate();
                    const endDate = this.getEndDate();
                    if (date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()) {
                        return true;
                    }
                    return false;
                }
                setTimeRange(startHour, endHour) {
                    this.startHour = startHour;
                    this.endHour = endHour;
                }
                removeEvent(value) {
                    const tmp = (new Array());
                    const index = this.events.indexOf(value);
                    let i = 0;
                    for (let index158 = 0; index158 < this.events.length; index158++) {
                        let tm = this.events[index158];
                        {
                            if (index !== i) {
                                tmp.push(tm);
                            }
                            i++;
                        }
                    }
                    this.events = tmp;
                }
                removeCalEvent(uiCalEvt) {
                    const value = uiCalEvt.getValue();
                    this.removeEvent(value);
                    {
                        let array160 = this.bodyRightBody.getCells();
                        for (let index159 = 0; index159 < array160.length; index159++) {
                            let r = array160[index159];
                            {
                                r.removeCalEvent(uiCalEvt);
                            }
                        }
                    }
                    this.adjustEventWidth();
                }
                adjustEventWidth() {
                    const multiHold = (new Array());
                    {
                        let array162 = this.bodyRightBody.getCells();
                        for (let index161 = 0; index161 < array162.length; index161++) {
                            let dcell = array162[index161];
                            {
                                {
                                    let array164 = dcell.getCells();
                                    for (let index163 = 0; index163 < array164.length; index163++) {
                                        let cell = array164[index163];
                                        {
                                            const holding = cell.getHolding();
                                            const size = holding.length;
                                            if (size > 0) {
                                                multiHold.push(cell);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    const sorted = multiHold.sort((a, b) => {
                        return (b.getHolding().length - a.getHolding().length);
                    });
                    const done = new Object();
                    for (let index165 = 0; index165 < sorted.length; index165++) {
                        let cell = sorted[index165];
                        {
                            const hds = cell.getHolding();
                            const size = hds.length;
                            console.info("size::" + size);
                            for (let index166 = 0; index166 < hds.length; index166++) {
                                let ev = hds[index166];
                                {
                                    if (!done.hasOwnProperty(ev.getId())) {
                                        done[ev.getId()] = ev;
                                        if (size === 1) {
                                            ev.setStyle("width", "90%");
                                        }
                                        else {
                                            ev.setStyle("width", (100 / size) + "%");
                                        }
                                        ev.setStyle("left", (90 / size) * hds.indexOf(ev) + "%");
                                    }
                                }
                            }
                        }
                    }
                }
                addCalEvent$jsweet_lang_Object(evt) {
                    this.addCalEvent$jsweet_lang_Object$boolean(evt, true);
                }
                addCalEvent$jsweet_lang_Object$boolean(evt, push) {
                    if (push) {
                        this.events.push(evt);
                    }
                    const wk = new com.spoonconsulting.calendar.WeekViewEvent("");
                    wk.setValue(evt);
                    const startDate = wk.getStartDate();
                    const endDate = wk.getEndDate();
                    if (this.isInRange(startDate)) {
                        const cell = this.getDateCell(startDate);
                        cell.addCalEvent(wk);
                        const startHr = startDate.getHours();
                        const endHr = endDate.getHours();
                        const endMin = endDate.getMinutes();
                        let counter = 0;
                        for (let i = startHr; i < endHr; i++) {
                            {
                                counter++;
                                const tmpDate = com.spoonconsulting.calendar.Util.addHour(startDate, counter);
                                const hcell = this.getDateCell(tmpDate);
                                hcell.holdHr(wk);
                                if (i < endHr - 1) {
                                    hcell.holdHalfHr(wk);
                                }
                                else {
                                    if (endMin > 0) {
                                        hcell.holdHalfHr(wk);
                                    }
                                }
                            }
                            ;
                        }
                        this.adjustEventWidth();
                    }
                }
                addCalEvent(evt, push) {
                    if (((evt != null && evt instanceof Object) || evt === null) && ((typeof push === 'boolean') || push === null)) {
                        return this.addCalEvent$jsweet_lang_Object$boolean(evt, push);
                    }
                    else if (((evt != null && evt instanceof Object) || evt === null) && push === undefined) {
                        return this.addCalEvent$jsweet_lang_Object(evt);
                    }
                    else
                        throw new Error('invalid overload');
                }
                unHoldEvent(uiCalEvt) {
                    this.bodyRightBody.unholdEvent(uiCalEvt);
                }
                adjustHolding(uiCalEvt) {
                    this.unHoldEvent(uiCalEvt);
                    const cells = this.getCellsForDateRange(uiCalEvt.getStartDate(), uiCalEvt.getEndDate());
                    for (let index167 = 0; index167 < cells.length; index167++) {
                        let cell = cells[index167];
                        {
                            cell.hold(uiCalEvt);
                        }
                    }
                }
                moveCalEvent(uiCalEvt, newEvt) {
                    this.removeCalEvent(uiCalEvt);
                    this.addCalEvent$jsweet_lang_Object(newEvt);
                }
                getCellsForDateRange(startDate, endDate) {
                    const result = (new Array());
                    const startHr = startDate.getHours();
                    const startMins = startDate.getMinutes();
                    const endHr = endDate.getHours();
                    const endMins = endDate.getMinutes();
                    for (let i = startHr; i <= endHr; i++) {
                        {
                            const tmp = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), i, 0);
                            const cell = this.getDateCell(tmp);
                            if (i === startHr && startMins === 0) {
                                result.push(cell.getCellHr());
                                result.push(cell.getCellHalfHr());
                            }
                            else if (i === startHr && startMins > 0) {
                                result.push(cell.getCellHalfHr());
                            }
                            else if (i === endHr && endMins > 0) {
                                result.push(cell.getCellHr());
                                result.push(cell.getCellHalfHr());
                            }
                            else if (i === endHr && endMins === 0) {
                                result.push(cell.getCellHr());
                            }
                            else {
                                result.push(cell.getCellHr());
                                result.push(cell.getCellHalfHr());
                            }
                        }
                        ;
                    }
                    return result;
                }
                getDateCell(date) {
                    const hr = date.getHours();
                    {
                        let array169 = this.bodyRightBody.getCells();
                        for (let index168 = 0; index168 < array169.length; index168++) {
                            let cell = array169[index168];
                            {
                                if (com.spoonconsulting.calendar.Util.isSameDate(cell.getDate(), date)) {
                                    if (cell.getHour() === hr)
                                        return cell;
                                }
                            }
                        }
                    }
                    return null;
                }
            }
            WeekView.CELL_HEIGHT = 22;
            calendar.WeekView = WeekView;
            WeekView["__class"] = "com.spoonconsulting.calendar.WeekView";
            WeekView["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekViewDndManager {
            }
            WeekViewDndManager.dragging = null;
            WeekViewDndManager.resizing = null;
            calendar.WeekViewDndManager = WeekViewDndManager;
            WeekViewDndManager["__class"] = "com.spoonconsulting.calendar.WeekViewDndManager";
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekViewEvent extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.header = new JSContainer("header", "div");
                    this.body = new JSContainer("body", "div");
                    this.footer = new JSContainer("footer", "div");
                    this.title = new JSContainer("title", "p");
                    this.time = new JSContainer("time", "span");
                    this.description = new JSContainer("description", "p");
                    this.resizer = new JSContainer("resizer", "div");
                    this.close = new JSContainer("close", "div");
                    this.heldBy = (new Array());
                    if (this.startY === undefined) {
                        this.startY = 0;
                    }
                    if (this.startHeight === undefined) {
                        this.startHeight = 0;
                    }
                    if (this.newHeight === undefined) {
                        this.newHeight = 0;
                    }
                    this.resizing = false;
                    this.p = null;
                    this.doDrag = (e) => {
                        this.p.classList.add("spn-resizing");
                        this.resizing = true;
                        this.p.style.height = (this.startHeight + e.clientY - this.startY) + "px";
                        this.newHeight = (this.startHeight + e.clientY - this.startY);
                    };
                    this.stopDrag = (e) => {
                        if (this.resizing) {
                            this.resizing = false;
                            const ce = this.beforeResize();
                            const cancel = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
                            if (cancel) {
                                this.cancelUpdate();
                            }
                            else {
                                this.updateEndDate();
                            }
                            this.p.classList.remove("spn-resizing");
                            document.documentElement.removeEventListener("mousemove", (((funcInst) => { if (typeof funcInst == 'function') {
                                return funcInst;
                            } return (arg0) => (funcInst['apply'] ? funcInst['apply'] : funcInst).call(funcInst, arg0); })(this.doDrag)), false);
                            this.render();
                        }
                    };
                    this.addRenderer(this);
                    this.addClass("spn-week-view-event");
                    this.addChild(this.header.addClass("spn-header"));
                    this.addChild(this.body.addClass("spn-body"));
                    this.addChild(this.footer.addClass("spn-footer"));
                    this.header.addChild(this.time.addClass("spn-time")).addChild(this.close.addClass("spn-close"));
                    this.body.addChild(this.title.addClass("spn-title")).addChild(this.description.addClass("spn-description"));
                    this.footer.addChild(this.resizer.addClass("spn-resizer"));
                    this.header.setAttribute("draggable", "true");
                    this.header.addEventListener(new WeekViewEvent.WeekViewEvent$0(this), "dragstart");
                    this.header.addEventListener(new WeekViewEvent.WeekViewEvent$1(this), "dragend");
                    this.resizer.addEventListener(new WeekViewEvent.WeekViewEvent$2(this), "mouseenter");
                    this.close.addEventListener(new WeekViewEvent.WeekViewEvent$3(this), "click");
                }
                reset() {
                    const title = this.value["title"];
                    const description = this.value["description"];
                    const startDate = this.value["startDate"];
                    const endDate = this.value["endDate"];
                    this.title.setHtml(title);
                    this.description.setHtml(description);
                    this.time.setHtml(this.formatDate(startDate) + " - " + this.formatDate(endDate));
                    const startHr = startDate.getHours();
                    const startMin = startDate.getMinutes();
                    const endHr = endDate.getHours();
                    const endMin = endDate.getMinutes();
                    let diffHr = (endHr - startHr) * 2;
                    if (startMin > 0) {
                        diffHr = diffHr - 1;
                    }
                    if (endMin > 0) {
                        diffHr = diffHr + 1;
                    }
                    this.setStyle("height", diffHr * com.spoonconsulting.calendar.WeekView.CELL_HEIGHT + "px");
                }
                getGhost() {
                    const g = new JSContainer("div");
                    g.setStyle("border", "dotted 1px red");
                    g.setStyle("height", this.getNative().style.height);
                    g.setStyle("width", this.getNative().offsetWidth + "px");
                    return g;
                }
                getStartDate() {
                    return this.value["startDate"];
                }
                getEndDate() {
                    return this.value["endDate"];
                }
                getEventDurationMS() {
                    const startDate = this.getStartDate();
                    const endDate = this.getEndDate();
                    return (endDate.getTime() - startDate.getTime());
                }
                isHeldBy(cell) {
                    for (let index170 = 0; index170 < this.heldBy.length; index170++) {
                        let c = this.heldBy[index170];
                        {
                            if (c.getId() === cell.getId()) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                addHeldBy(cell) {
                    if (!this.isHeldBy(cell)) {
                        this.heldBy.push(cell);
                    }
                }
                formatDate(dt) {
                    const hr = dt.getHours();
                    const mins = dt.getMinutes();
                    return (hr < 10 ? "0" + hr : hr + "") + ":" + (mins < 10 ? "0" + mins : mins);
                }
                setValue(value) {
                    this.setName(value["title"]);
                    this.value = value;
                    this.reset();
                }
                getValue() {
                    return this.value;
                }
                removeFromCell() {
                    const cell = (this.getAncestorWithClass("spn-week-view-cell"));
                    cell.removeCalEvent(this);
                    this.heldBy = (new Array());
                }
                getNewEvent(startDate) {
                    const evt = new Object();
                    {
                        let array172 = Object.keys(this.value);
                        for (let index171 = 0; index171 < array172.length; index171++) {
                            let key = array172[index171];
                            {
                                evt[key] = this.value[key];
                                if (key === "startDate") {
                                    evt["startDate"] = startDate;
                                }
                                if (key === "endDate") {
                                    const ostartDate = this.value["startDate"];
                                    const oendDate = this.value["endDate"];
                                    const diff = oendDate.getTime() - ostartDate.getTime();
                                    const endDate = new Date(startDate.getTime() + diff);
                                    evt["endDate"] = endDate;
                                }
                            }
                        }
                    }
                    return evt;
                }
                cancelUpdate() {
                    this.setStyle("height", this.getStyle("height"));
                }
                beforeResize() {
                    const evt = new CustomEvent("beforeresize");
                    evt["value"] = this.value;
                    evt["calEvent"] = this;
                    const wj = (this.getAncestorWithClass("WeekView"));
                    wj.fireListener("beforeresize", evt);
                    return evt;
                }
                updateEndDate() {
                    const wj = (this.getAncestorWithClass("WeekView"));
                    const remainder = this.newHeight % com.spoonconsulting.calendar.WeekView.CELL_HEIGHT;
                    let segments = (this.newHeight - remainder) / com.spoonconsulting.calendar.WeekView.CELL_HEIGHT;
                    if (remainder > 0) {
                        segments = segments + 1;
                    }
                    const ms = 30 * 60 * 1000 * segments;
                    const endDate = new Date(this.getStartDate().getTime() + ms);
                    this.value["endDate"] = endDate;
                    this.setStyle("height", segments * com.spoonconsulting.calendar.WeekView.CELL_HEIGHT + "px");
                    this.getNative().style.height = this.getStyle("height");
                    this.time.setHtml(this.formatDate(this.getStartDate()) + " - " + this.formatDate(this.getEndDate()));
                    wj.adjustHolding(this);
                    wj.adjustEventWidth();
                    const evt = new CustomEvent("afterresize");
                    evt["calEvent"] = this;
                    evt["value"] = this.value;
                    wj.fireListener("afterresize", evt);
                }
                /**
                 *
                 * @param {com.spoonconsulting.calendar.WeekViewEvent} renderable
                 * @param {HTMLElement} parent
                 */
                doRender(renderable, parent) {
                    const wv = (this.getAncestorWithClass("WeekView"));
                    wv.decorateCalEvent(renderable);
                }
            }
            calendar.WeekViewEvent = WeekViewEvent;
            WeekViewEvent["__class"] = "com.spoonconsulting.calendar.WeekViewEvent";
            WeekViewEvent["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.calendar.ViewEvent", "framework.components.api.Renderer"];
            (function (WeekViewEvent) {
                class WeekViewEvent$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const de = evt;
                        de.dataTransfer.setData("text/plain", "move");
                        const el = evt.target;
                        setTimeout((((el) => {
                            return () => {
                                el.parentElement.classList.add("slds-hide");
                            };
                        })(el)), 0);
                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = source.getParent();
                        com.spoonconsulting.calendar.WeekViewDndManager.resizing = null;
                    }
                }
                WeekViewEvent.WeekViewEvent$0 = WeekViewEvent$0;
                WeekViewEvent$0["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewEvent$1 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const de = evt;
                        de.dataTransfer.setData("text/plain", "move");
                        const el = evt.target;
                        setTimeout((((el) => {
                            return () => {
                                el.parentElement.classList.remove("slds-hide");
                            };
                        })(el)), 0);
                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                    }
                }
                WeekViewEvent.WeekViewEvent$1 = WeekViewEvent$1;
                WeekViewEvent$1["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewEvent$2 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const me = evt;
                        this.__parent.startY = me.clientY;
                        this.__parent.p = this.__parent.getNative();
                        this.__parent.startHeight = parseInt(this.__parent.p.style.height, 10);
                        this.__parent.resizer.getNative().addEventListener("mousedown", (e) => {
                            document.documentElement.addEventListener("mousemove", (((funcInst) => { if (typeof funcInst == 'function') {
                                return funcInst;
                            } return (arg0) => (funcInst['apply'] ? funcInst['apply'] : funcInst).call(funcInst, arg0); })(this.__parent.doDrag)), false);
                            document.documentElement.addEventListener("mouseup", (((funcInst) => { if (typeof funcInst == 'function') {
                                return funcInst;
                            } return (arg0) => (funcInst['apply'] ? funcInst['apply'] : funcInst).call(funcInst, arg0); })(this.__parent.stopDrag)), false);
                            return true;
                        }, false);
                    }
                }
                WeekViewEvent.WeekViewEvent$2 = WeekViewEvent$2;
                WeekViewEvent$2["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewEvent$3 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const wv = (this.__parent.getAncestorWithClass("WeekView"));
                        const uical = (source.getAncestorWithClass("spn-week-view-event"));
                        const beforedelete = new CustomEvent("beforedelete");
                        beforedelete["calEvent"] = uical;
                        beforedelete["value"] = this.__parent.value;
                        wv.fireListener("beforedelete", beforedelete);
                        const cancel = beforedelete.defaultPrevented || beforedelete.cancelBubble || !beforedelete.returnValue;
                        if (!cancel) {
                            wv.removeCalEvent(uical);
                            const __delete = new CustomEvent("delete");
                            __delete["value"] = this.__parent.value;
                            __delete["calEvent"] = uical;
                            wv.fireListener("delete", __delete);
                        }
                    }
                }
                WeekViewEvent.WeekViewEvent$3 = WeekViewEvent$3;
                WeekViewEvent$3["__interfaces"] = ["framework.components.api.EventListener"];
            })(WeekViewEvent = calendar.WeekViewEvent || (calendar.WeekViewEvent = {}));
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class MonthViewBody extends com.spoonconsulting.calendar.Box {
                constructor(name) {
                    super(name, 1, 1);
                    this.addClass("spn-month-view-body");
                }
                getCells() {
                    const result = this.getChildren();
                    return result;
                }
            }
            calendar.MonthViewBody = MonthViewBody;
            MonthViewBody["__class"] = "com.spoonconsulting.calendar.MonthViewBody";
            MonthViewBody["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class MonthViewCell extends com.spoonconsulting.calendar.Box {
                constructor(name, of) {
                    super(name, 1, of);
                    if (this.date === undefined) {
                        this.date = null;
                    }
                    this.header = new com.spoonconsulting.calendar.Box("header", 1, 1);
                    this.body = new com.spoonconsulting.calendar.Box("body", 1, 1);
                    this.addClass("spn-month-view-cell");
                    this.addChild(this.header);
                    this.addChild(this.body);
                    this.header.setStyle("height", ((com.spoonconsulting.calendar.MonthView.CELL_HEIGHT / 6 | 0)) + "px");
                    this.body.setStyle("height", ((com.spoonconsulting.calendar.MonthView.CELL_HEIGHT * 5 / 6 | 0)) + "px");
                    this.body.setStyle("overflow-y", "auto");
                    this.addClass("brd-btm");
                    this.addClass("brd-right");
                    this.addEventListener(new MonthViewCell.MonthViewCell$0(this), "dblclick");
                    this.addEventListener(new MonthViewCell.MonthViewCell$1(this), "dragenter");
                    this.addEventListener(new MonthViewCell.MonthViewCell$2(this), "dragover");
                    this.addEventListener(new MonthViewCell.MonthViewCell$3(this), "dragleave");
                    this.addEventListener(new MonthViewCell.MonthViewCell$4(this), "drop");
                }
                setDate(date) {
                    this.date = date;
                    this.header.setHtml(date.getDate() + "");
                }
                isSameDate(dt) {
                    if (dt.getFullYear() === this.date.getFullYear()) {
                        if (dt.getMonth() === this.date.getMonth()) {
                            if (dt.getDate() === this.date.getDate()) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                addCalEvent(uiCalEvent) {
                    this.body.addChild(uiCalEvent);
                }
                getDate() {
                    return this.date;
                }
                removeCalEvent(uiCalEvent) {
                    this.body.removeChild(uiCalEvent);
                }
            }
            calendar.MonthViewCell = MonthViewCell;
            MonthViewCell["__class"] = "com.spoonconsulting.calendar.MonthViewCell";
            MonthViewCell["__interfaces"] = ["framework.components.api.Renderable"];
            (function (MonthViewCell) {
                class MonthViewCell$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const top = source.getNative().offsetTop;
                        const left = source.getNative().offsetLeft;
                        console.log("{" + left + "," + top + "}");
                        const shrs = prompt("Number of hours:");
                        if (shrs != null) {
                            const ce = new Object();
                            ce["title"] = "New Event";
                            ce["description"] = "Arbitrary event added";
                            const startDate = new Date(this.__parent.date.getFullYear(), this.__parent.date.getMonth(), this.__parent.date.getDate(), parseFloat(shrs), 30);
                            const endDate = com.spoonconsulting.calendar.Util.addHour(startDate, 4);
                            ce["startDate"] = startDate;
                            ce["endDate"] = endDate;
                            const wj = (source.getAncestorWithClass("spn-month-view"));
                            wj.addCalEvent(ce);
                        }
                    }
                }
                MonthViewCell.MonthViewCell$0 = MonthViewCell$0;
                MonthViewCell$0["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewCell$1 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                            evt.preventDefault();
                            source.addClass("drag-over");
                        }
                    }
                }
                MonthViewCell.MonthViewCell$1 = MonthViewCell$1;
                MonthViewCell$1["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewCell$2 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                            evt.preventDefault();
                            source.addClass("drag-over");
                        }
                    }
                }
                MonthViewCell.MonthViewCell$2 = MonthViewCell$2;
                MonthViewCell$2["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewCell$3 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                            evt.preventDefault();
                            source.removeClass("drag-over");
                        }
                    }
                }
                MonthViewCell.MonthViewCell$3 = MonthViewCell$3;
                MonthViewCell$3["__interfaces"] = ["framework.components.api.EventListener"];
                class MonthViewCell$4 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                            evt.preventDefault();
                            source.removeClass("drag-over");
                            evt.target.classList.remove("drag-over");
                            const dragging = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
                            if (dragging != null) {
                                const srcStartDate = dragging.getStartDate();
                                const startDate = new Date(this.__parent.date.getFullYear(), this.__parent.date.getMonth(), this.__parent.date.getDate(), srcStartDate.getHours(), srcStartDate.getMinutes());
                                const newEvt = dragging.getNewEvent(startDate);
                                const wek = (source.getAncestorWithClass("spn-month-view"));
                                wek.moveCalEvent(dragging, newEvt);
                                com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                            }
                        }
                    }
                }
                MonthViewCell.MonthViewCell$4 = MonthViewCell$4;
                MonthViewCell$4["__interfaces"] = ["framework.components.api.EventListener"];
            })(MonthViewCell = calendar.MonthViewCell || (calendar.MonthViewCell = {}));
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekViewBody extends com.spoonconsulting.calendar.Box {
                constructor(name) {
                    super(name, 11, 12);
                    this.addClass("spn-body-right-body");
                }
                getCells() {
                    const result = this.getChildren();
                    return result;
                }
                unholdEvent(uiCalEvt) {
                    {
                        let array174 = this.getCells();
                        for (let index173 = 0; index173 < array174.length; index173++) {
                            let dc = array174[index173];
                            {
                                {
                                    let array176 = dc.getCells();
                                    for (let index175 = 0; index175 < array176.length; index175++) {
                                        let c = array176[index175];
                                        {
                                            c.unhold(uiCalEvt);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            calendar.WeekViewBody = WeekViewBody;
            WeekViewBody["__class"] = "com.spoonconsulting.calendar.WeekViewBody";
            WeekViewBody["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekViewDateCell extends com.spoonconsulting.calendar.Box {
                constructor(date, hr, days, row, col) {
                    super(com.spoonconsulting.calendar.Util.formatDate(date, "dd"), 1, days);
                    if (this.date === undefined) {
                        this.date = null;
                    }
                    if (this.hour === undefined) {
                        this.hour = null;
                    }
                    if (this.cellHr === undefined) {
                        this.cellHr = null;
                    }
                    if (this.cellHalfHr === undefined) {
                        this.cellHalfHr = null;
                    }
                    this.date = date;
                    this.hour = hr;
                    this.addClass("spn-body-right-body-cell");
                    this.cellHr = new com.spoonconsulting.calendar.WeekViewCell(hr, 0, date, row, col);
                    this.cellHalfHr = new com.spoonconsulting.calendar.WeekViewCell(hr, 30, date, row++, col);
                    this.addChild(this.cellHr.addClass("brd-btm brd-right")).addChild(this.cellHalfHr.addClass("brd-btm brd-right"));
                }
                addCalEvent(uiCalEvt) {
                    const dt = uiCalEvt.getStartDate();
                    const mins = dt.getMinutes();
                    if (mins > 0) {
                        this.cellHalfHr.addCalEvent(uiCalEvt);
                    }
                    else {
                        this.cellHr.addCalEvent(uiCalEvt);
                    }
                }
                getCells() {
                    const result = this.getChildren();
                    return result;
                }
                removeCalEvent(uiCalEvt) {
                    this.cellHalfHr.removeCalEvent(uiCalEvt);
                    this.cellHr.removeCalEvent(uiCalEvt);
                }
                getDate() {
                    return this.date;
                }
                getHour() {
                    return this.hour;
                }
                holdHr(uiCalEvt) {
                    this.cellHr.hold(uiCalEvt);
                }
                holdHalfHr(uiCalEvt) {
                    this.cellHalfHr.hold(uiCalEvt);
                }
                unhold(uiCalEvt) {
                    this.cellHr.unhold(uiCalEvt);
                    this.cellHalfHr.unhold(uiCalEvt);
                }
                getCellHr() {
                    return this.cellHr;
                }
                getCellHalfHr() {
                    return this.cellHalfHr;
                }
            }
            calendar.WeekViewDateCell = WeekViewDateCell;
            WeekViewDateCell["__class"] = "com.spoonconsulting.calendar.WeekViewDateCell";
            WeekViewDateCell["__interfaces"] = ["framework.components.api.Renderable"];
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var calendar;
        (function (calendar) {
            class WeekViewCell extends com.spoonconsulting.calendar.Col {
                constructor(hour, min, date, row, col) {
                    super(hour + "-" + min, 1, 1);
                    if (this.hour === undefined) {
                        this.hour = 0;
                    }
                    if (this.min === undefined) {
                        this.min = 0;
                    }
                    if (this.date === undefined) {
                        this.date = null;
                    }
                    this.holding = (new Array());
                    if (this.row === undefined) {
                        this.row = 0;
                    }
                    if (this.col === undefined) {
                        this.col = 0;
                    }
                    this.disabled = false;
                    this.addRenderer(this);
                    this.hour = hour;
                    this.min = min;
                    this.date = date;
                    this.row = row;
                    this.col = col;
                    this.addClass("spn-week-view-cell WeekViewCell");
                    this.setStyle("height", com.spoonconsulting.calendar.WeekView.CELL_HEIGHT + "px");
                    this.addEventListener(new WeekViewCell.WeekViewCell$0(this), "dblclick");
                    this.addEventListener(new WeekViewCell.WeekViewCell$1(this), "click");
                    this.addEventListener(new WeekViewCell.WeekViewCell$2(this), "dragenter");
                    this.addEventListener(new WeekViewCell.WeekViewCell$3(this), "dragover");
                    this.addEventListener(new WeekViewCell.WeekViewCell$4(this), "dragleave");
                    this.addEventListener(new WeekViewCell.WeekViewCell$5(this, date, hour, min), "drop");
                }
                addCalEvent(uiCalEvt) {
                    this.addChild(uiCalEvt);
                    this.hold(uiCalEvt);
                }
                removeCalEvent(uiCalEvt) {
                    this.removeChild(uiCalEvt);
                    this.unhold(uiCalEvt);
                }
                /*private*/ fireEvent(type) {
                    const ev = new CustomEvent(type);
                    ev.initEvent(type, true, true);
                    ev["startDate"] = this.getStartDate();
                    ev["cell"] = this;
                    ev["calEvent"] = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
                    const wj = (this.getAncestorWithClass("spn-week-view"));
                    wj.fireListener(type, ev);
                    return ev;
                }
                getHour() {
                    return this.hour;
                }
                getMin() {
                    return this.min;
                }
                getDate() {
                    return this.date;
                }
                getStartDate() {
                    return new Date(this.date.getTime() + this.hour * 60 * 60000 + this.min * 60000);
                }
                hold(uiCalEvt) {
                    if (!this.isHolding(uiCalEvt)) {
                        this.holding.push(uiCalEvt);
                    }
                    uiCalEvt.addHeldBy(this);
                }
                unhold(uiCalEvt) {
                    const tmp = (new Array());
                    for (let index177 = 0; index177 < this.holding.length; index177++) {
                        let ev = this.holding[index177];
                        {
                            if (ev.getId() !== uiCalEvt.getId()) {
                                tmp.push(ev);
                            }
                        }
                    }
                    this.holding = tmp;
                }
                isHolding(uiCalEvt) {
                    for (let index178 = 0; index178 < this.holding.length; index178++) {
                        let ev = this.holding[index178];
                        {
                            if (ev.getId() === uiCalEvt.getId()) {
                                return true;
                            }
                        }
                    }
                    return false;
                }
                getHolding() {
                    return this.holding;
                }
                getRow() {
                    return this.row;
                }
                getCol() {
                    return this.col;
                }
                /**
                 *
                 * @param {com.spoonconsulting.calendar.WeekViewCell} renderable
                 * @param {HTMLElement} parent
                 */
                doRender(renderable, parent) {
                    const wv = (this.getAncestorWithClass("WeekView"));
                    wv.decorateCell(renderable);
                }
                isDisabled() {
                    return this.disabled;
                }
                setDisabled(disabled) {
                    if (disabled) {
                        this.addClass("is-disabled");
                    }
                    else {
                        this.removeClass("is-disabled");
                    }
                    this.disabled = disabled;
                }
            }
            calendar.WeekViewCell = WeekViewCell;
            WeekViewCell["__class"] = "com.spoonconsulting.calendar.WeekViewCell";
            WeekViewCell["__interfaces"] = ["framework.components.api.Renderable", "framework.components.api.Renderer"];
            (function (WeekViewCell) {
                class WeekViewCell$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled)
                            this.__parent.fireEvent("dblclickcell");
                    }
                }
                WeekViewCell.WeekViewCell$0 = WeekViewCell$0;
                WeekViewCell$0["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewCell$1 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled)
                            this.__parent.fireEvent("click");
                    }
                }
                WeekViewCell.WeekViewCell$1 = WeekViewCell$1;
                WeekViewCell$1["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewCell$2 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled) {
                            if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                                evt.preventDefault();
                                evt.target.classList.add("drag-over");
                                this.__parent.fireEvent("dragentercell");
                            }
                        }
                    }
                }
                WeekViewCell.WeekViewCell$2 = WeekViewCell$2;
                WeekViewCell$2["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewCell$3 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled) {
                            if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                                evt.preventDefault();
                                evt.target.classList.add("drag-over");
                                this.__parent.fireEvent("dragovercell");
                            }
                        }
                    }
                }
                WeekViewCell.WeekViewCell$3 = WeekViewCell$3;
                WeekViewCell$3["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewCell$4 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled) {
                            if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                                evt.preventDefault();
                                evt.target.classList.remove("drag-over");
                                this.__parent.fireEvent("dragleavecell");
                            }
                        }
                    }
                }
                WeekViewCell.WeekViewCell$4 = WeekViewCell$4;
                WeekViewCell$4["__interfaces"] = ["framework.components.api.EventListener"];
                class WeekViewCell$5 {
                    constructor(__parent, date, hour, min) {
                        this.date = date;
                        this.hour = hour;
                        this.min = min;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.__parent.disabled) {
                            if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null) {
                                evt.preventDefault();
                                evt.target.classList.remove("drag-over");
                                const dragging = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
                                if (dragging != null) {
                                    const ce = this.__parent.fireEvent("beforedropcell");
                                    const cancel = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
                                    if (!cancel) {
                                        const startDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.hour, this.min);
                                        const newEvt = dragging.getNewEvent(startDate);
                                        dragging.setValue(newEvt);
                                        const wek = (source.getAncestorWithClass("spn-week-view"));
                                        wek.moveCalEvent(dragging, newEvt);
                                        this.__parent.fireEvent("dropcell");
                                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                                    }
                                }
                            }
                        }
                    }
                }
                WeekViewCell.WeekViewCell$5 = WeekViewCell$5;
                WeekViewCell$5["__interfaces"] = ["framework.components.api.EventListener"];
            })(WeekViewCell = calendar.WeekViewCell || (calendar.WeekViewCell = {}));
        })(calendar = spoonconsulting.calendar || (spoonconsulting.calendar = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
com.spoonconsulting.calendar.Util.LONG_DAYS_$LI$();
com.spoonconsulting.calendar.Util.SHORT_DAYS_$LI$();
com.spoonconsulting.calendar.Util.SHORT_MONTHS_$LI$();
com.spoonconsulting.calendar.Util.LONG_MONTHS_$LI$();
com.spoonconsulting.calendar.Util.DAYS_$LI$();
com.spoonconsulting.calendar.MonthView.DAYS_$LI$();
com.spoonconsulting.calendar.Boot.main(null);
