/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.spoonconsulting.calendar {
    export class Boot {
        public static main(args: string[]) {
            const table: com.spoonconsulting.calendar.WeekView = new com.spoonconsulting.calendar.WeekView("wv");
            table.reset();
            setTimeout((((table) => {
                return (e) => {
                    table.render(api.ContainerRenderer.getElementById("semainetype"));
                    table.render(api.ContainerRenderer.getElementById("semainetype"));
                }
            })(table)), 1000);
        }
    }
    Boot["__class"] = "com.spoonconsulting.calendar.Boot";

}
namespace com.spoonconsulting.calendar {
    export class Box extends JSContainer {
        public constructor(name: string, size: number, of: number) {
            super(name, "div");
            this.addClass("slds-grid slds-wrap slds-col slds-size_" + size + "-of-" + of);
        }
    }
    Box["__class"] = "com.spoonconsulting.calendar.Box";
    Box["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class Col extends JSContainer {
        public constructor(name: string, size: number, of: number) {
            super(name, "div");
            this.addClass("slds-col slds-size_" + size + "-of-" + of);
        }
    }
    Col["__class"] = "com.spoonconsulting.calendar.Col";
    Col["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class MonthView extends JSContainer {
        /*private*/ startDate: Date;

        public static CELL_HEIGHT: number = 100;

        /*private*/ days: number;

        /*private*/ header: com.spoonconsulting.calendar.Box;

        /*private*/ body: com.spoonconsulting.calendar.MonthViewBody;

        static DAYS: string[]; public static DAYS_$LI$(): string[] { if (MonthView.DAYS == null) { MonthView.DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; }  return MonthView.DAYS; }

        public constructor(name: string) {
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

        public getStartDate(): Date {
            return this.startDate;
        }

        public setStartDate(startDate: Date) {
            this.startDate = startDate;
        }

        public reset() {
            this.fillHeader();
            this.fillBody();
        }

        /*private*/ fillHeader() {
            this.header.clearChildren();
            this.header.setRendered(false);
            for(let i: number = 0; i < this.days; i++) {{
                const cell: com.spoonconsulting.calendar.Box = new com.spoonconsulting.calendar.Box(MonthView.DAYS_$LI$()[i], 1, this.days);
                cell.addClass("spn-month-view-header-cell");
                cell.setHtml(MonthView.DAYS_$LI$()[i]);
                this.header.addChild(cell);
                cell.addClass("brd-btm");
                cell.addClass("brd-right");
            };}
        }

        /*private*/ fillBody() {
            let firstDate: Date = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), 1, 0, 0);
            let firstDay: number = this.startDate.getDay();
            if (firstDay === 0){
                firstDay = 7;
            }
            firstDate = com.spoonconsulting.calendar.Util.addDays(firstDate, 1 - firstDay);
            const endDate: Date = com.spoonconsulting.calendar.Util.getLastDateOfMonth(this.startDate);
            let lastDate: Date = endDate;
            const lastDay: number = endDate.getDay();
            if (lastDay === 1){
                lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, 6);
            } else if (lastDay === 2){
                lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, 5);
            }
            if (lastDay > 0)lastDate = com.spoonconsulting.calendar.Util.addDays(endDate, this.days - lastDay);
            let tmp: Date = firstDate;
            let counter: number = 0;
            while((true)) {{
                const c: com.spoonconsulting.calendar.MonthViewCell = new com.spoonconsulting.calendar.MonthViewCell("", this.days);
                c.setStyle("height", MonthView.CELL_HEIGHT + "px");
                c.setDate(tmp);
                this.body.addChild(c);
                if (tmp.getTime() >= lastDate.getTime()){
                    break;
                } else {
                    tmp = com.spoonconsulting.calendar.Util.addDays(tmp, 1);
                }
                counter++;
            }};
            const rows: number = ((counter / this.days|0)) + 1;
            this.body.setStyle("height", (MonthView.CELL_HEIGHT * rows) + "px");
        }

        public addCalEvent(evt: Object) {
            const wk: com.spoonconsulting.calendar.MonthViewEvent = new com.spoonconsulting.calendar.MonthViewEvent("");
            wk.setValue(evt);
            const startDate: Date = wk.getStartDate();
            const cell: com.spoonconsulting.calendar.MonthViewCell = this.getCell(startDate);
            cell.addCalEvent(wk);
        }

        public removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent) {
            {
                let array151 = this.body.getCells();
                for(let index150=0; index150 < array151.length; index150++) {
                    let r = array151[index150];
                    {
                        r.removeCalEvent(uiCalEvt);
                    }
                }
            }
        }

        public moveCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent, newEvent: Object) {
            this.removeCalEvent(uiCalEvent);
            this.addCalEvent(newEvent);
        }

        public getCell(dt: Date): com.spoonconsulting.calendar.MonthViewCell {
            {
                let array153 = this.body.getCells();
                for(let index152=0; index152 < array153.length; index152++) {
                    let cell = array153[index152];
                    {
                        if (cell.isSameDate(dt)){
                            return cell;
                        }
                    }
                }
            }
            return null;
        }
    }
    MonthView["__class"] = "com.spoonconsulting.calendar.MonthView";
    MonthView["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class MonthViewEvent extends JSContainer implements com.spoonconsulting.calendar.ViewEvent {
        /*private*/ value: Object;

        /*private*/ header: JSContainer;

        /*private*/ close: JSContainer;

        /*private*/ title: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            if (this.value === undefined) { this.value = null; }
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

        public reset() {
            const title: string = <string>this.value["title"];
            const startDate: Date = <Date>this.value["startDate"];
            this.title.setHtml(this.formatDate(startDate) + " - " + title);
        }

        formatDate(dt: Date): string {
            return com.spoonconsulting.calendar.Util.formatDate(dt, "hh:mm");
        }

        public setValue(value: Object) {
            this.setName(<string>value["title"]);
            this.value = value;
            this.reset();
        }

        public getStartDate(): Date {
            return <Date>this.value["startDate"];
        }

        public getEndDate(): Date {
            return <Date>this.value["endDate"];
        }

        /**
         * 
         * @param {Date} startDate
         * @return {Object}
         */
        public getNewEvent(startDate: Date): Object {
            const evt: Object = <Object>new Object();
            {
                let array155 = Object.keys(this.value);
                for(let index154=0; index154 < array155.length; index154++) {
                    let key = array155[index154];
                    {
                        evt[key] = this.value[key];
                        if (key === "startDate"){
                            evt["startDate"] = startDate;
                        }
                        if (key === "endDate"){
                            const ostartDate: Date = <Date>this.value["startDate"];
                            const oendDate: Date = <Date>this.value["endDate"];
                            const diff: number = oendDate.getTime() - ostartDate.getTime();
                            const endDate: Date = new Date(startDate.getTime() + diff);
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
        public getValue(): Object {
            return this.value;
        }
    }
    MonthViewEvent["__class"] = "com.spoonconsulting.calendar.MonthViewEvent";
    MonthViewEvent["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.calendar.ViewEvent"];



    export namespace MonthViewEvent {

        export class MonthViewEvent$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const de: DragEvent = <DragEvent>evt;
                de.dataTransfer.setData("text/plain", "move");
                const el: HTMLElement = <HTMLElement>evt.target;
                setTimeout((((el) => {
                    return () => {
                        el.parentElement.classList.add("slds-hide");
                    }
                })(el)), 0);
                com.spoonconsulting.calendar.WeekViewDndManager.dragging = <com.spoonconsulting.calendar.MonthViewEvent><any>source.getParent();
                com.spoonconsulting.calendar.WeekViewDndManager.resizing = null;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewEvent$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewEvent$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const de: DragEvent = <DragEvent>evt;
                de.dataTransfer.setData("text/plain", "move");
                const el: HTMLElement = <HTMLElement>evt.target;
                setTimeout((((el) => {
                    return () => {
                        el.parentElement.classList.remove("slds-hide");
                    }
                })(el)), 0);
                com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewEvent$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewEvent$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const wv: com.spoonconsulting.calendar.MonthView = <any>(this.__parent.getAncestorWithClass("MonthView"));
                const ev: com.spoonconsulting.calendar.MonthViewEvent = <any>(source.getAncestorWithClass<any>("spn-month-view-event"));
                wv.removeCalEvent(ev);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewEvent$2["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.calendar {
    export class Util {
        public static DAYS: string[]; public static DAYS_$LI$(): string[] { if (Util.DAYS == null) { Util.DAYS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; }  return Util.DAYS; }

        static LONG_MONTHS: string[]; public static LONG_MONTHS_$LI$(): string[] { if (Util.LONG_MONTHS == null) { Util.LONG_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; }  return Util.LONG_MONTHS; }

        public static SHORT_MONTHS: string[]; public static SHORT_MONTHS_$LI$(): string[] { if (Util.SHORT_MONTHS == null) { Util.SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; }  return Util.SHORT_MONTHS; }

        public static SHORT_DAYS: string[]; public static SHORT_DAYS_$LI$(): string[] { if (Util.SHORT_DAYS == null) { Util.SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; }  return Util.SHORT_DAYS; }

        static LONG_DAYS: string[]; public static LONG_DAYS_$LI$(): string[] { if (Util.LONG_DAYS == null) { Util.LONG_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; }  return Util.LONG_DAYS; }

        public static MIN_HOUR: number = 6;

        public static MAX_HOUR: number = 21;

        public static ROW_HEIGHT_PX: number = 28;

        public static COLOR_DISPO: string = "#cfebfe";

        public static COLOR_ABS: string = "#425c5a";

        public static getSemaineType(): Object {
            const s: string = "{\r\n  \"config\": {\r\n    \"Lundi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"12:00\",\r\n          \"to\": \"14:00\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Mardi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"11:30\",\r\n          \"to\": \"12:30\",\r\n          \"quantity\": \"4\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Mercredi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"09:00\",\r\n          \"to\": \"10:00\",\r\n          \"quantity\": \"4\"\r\n        },\r\n        {\r\n          \"from\": \"12:00\",\r\n          \"to\": \"14:30\",\r\n          \"quantity\": \"3\"\r\n        },\r\n        {\r\n          \"from\": \"12:30\",\r\n          \"to\": \"13:30\",\r\n          \"quantity\": \"3\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Jeudi\": {\r\n      \"dispo\": [],\r\n      \"abs\": [\r\n        {\r\n          \"from\": \"10:00\",\r\n          \"to\": \"11:00\",\r\n          \"quantity\": 1\r\n        }\r\n      ]\r\n    },\r\n    \"Vendredi\": {\r\n      \"dispo\": [\r\n        {\r\n          \"from\": \"15:30\",\r\n          \"to\": \"17:00\",\r\n          \"quantity\": \"4\"\r\n        },\r\n        {\r\n          \"from\": \"10:30\",\r\n          \"to\": \"14:00\"\r\n        }\r\n      ],\r\n      \"abs\": []\r\n    },\r\n    \"Samedi\": {\r\n      \"dispo\": [],\r\n      \"abs\": []\r\n    }\r\n  },\r\n  \"until\": \"2020-12-27T00:00:00.000Z\"\r\n}";
            const obj: Object = <Object>JSON.parse(s);
            return obj;
        }

        public static getDaysInMonth(date: Date): number {
            if (date.getMonth() === 11){
                return 31;
            } else {
                const tmp: Date = Util.addDays(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 0, 0, 0, 0), -1);
                return tmp.getDate();
            }
        }

        public static getFirstDateOfMonth(date: Date): Date {
            return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
        }

        public static getLastDateOfMonth(date: Date): Date {
            if (date.getMonth() === 11){
                return new Date(date.getFullYear(), date.getMonth(), 31, 0, 0, 0, 0);
            } else {
                const tmp: Date = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0, 0);
                return Util.addDays(tmp, -1);
            }
        }

        public static to2num(val: number): string {
            if (val < 10){
                return "0" + val;
            } else {
                return val + "";
            }
        }

        public static getTime(hour: number, minute: number): string {
            return Util.to2num(hour) + ":" + Util.to2num(minute);
        }

        public static getHour(time: string): number {
            return /* parseInt */parseInt(time.split(":")[0]);
        }

        public static getMinute(time: string): number {
            return /* parseInt */parseInt(time.split(":")[1]);
        }

        public static countRows(startTime: string, endTime: string): number {
            const fromHr: number = Util.getHour(startTime);
            const toHr: number = Util.getHour(endTime);
            const fromMin: number = Util.getMinute(startTime);
            const toMin: number = Util.getMinute(endTime);
            let whole: number = ((toHr - fromHr) * 2) + 1;
            if (fromMin === 30){
                whole = whole - 1;
            }
            if (toMin === 30){
                whole = whole + 1;
            }
            return whole;
        }

        public static countStartRowPosition(startTime: string): number {
            const hr: number = Util.getHour(startTime);
            const minute: number = Util.getMinute(startTime);
            let startRow: number = (hr - Util.MIN_HOUR) * 2 + 1;
            if (minute === 30){
                startRow = startRow + 1;
            }
            const top: number = (startRow * Util.ROW_HEIGHT_PX) + 1;
            return top;
        }

        public static formatDate(dt: Date, format: string): string {
            const dd: string = Util.formatNum(dt.getDate());
            const MM: string = Util.formatNum(dt.getMonth());
            const hh: string = Util.formatNum(dt.getHours());
            const mm: string = Util.formatNum(dt.getMinutes());
            const ss: string = Util.formatNum(dt.getSeconds());
            const EE: string = Util.SHORT_DAYS_$LI$()[(<number>dt.getDay()|0)];
            const EEEE: string = Util.LONG_DAYS_$LI$()[(<number>dt.getDay()|0)];
            const yyyy: string = dt.getFullYear() + "";
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

        public static replace(text: string, s: string, __with: string): string {
            return /* replace */text.split(s).join(__with);
        }

        public static formatNum(d: number): string {
            return d < 10 ? "0" + d : d + "";
        }

        public static countStartColPosition(day: string, gutter: number, colWidth: number): number {
            let index: number = 0;
            for(let index156=0; index156 < Util.DAYS_$LI$().length; index156++) {
                let s = Util.DAYS_$LI$()[index156];
                {
                    if (s === day){
                        break;
                    }
                    index++;
                }
            }
            return (colWidth * index) + gutter;
        }

        public static addWeeks(dt: Date, weeks: number): Date {
            return Util.addDays(dt, weeks * 7);
        }

        public static addDays(dt: Date, days: number): Date {
            return Util.addHour(dt, days * 24);
        }

        public static addHour(dt: Date, hrs: number): Date {
            return Util.addMinutes(dt, hrs * 60);
        }

        public static addMinutes(dt: Date, minutes: number): Date {
            return Util.addSeconds(dt, minutes * 60);
        }

        public static addSeconds(dt: Date, secs: number): Date {
            return Util.addMiliseconds(dt, secs * 1000);
        }

        public static addMiliseconds(dt: Date, ms: number): Date {
            return new Date(dt.getTime() + ms);
        }

        public static isSameDate(dt1: Date, dt2: Date): boolean {
            return (dt1.getDate() === dt2.getDate()) && (dt1.getMonth() === dt2.getMonth()) && (dt1.getFullYear() === dt2.getFullYear());
        }
    }
    Util["__class"] = "com.spoonconsulting.calendar.Util";

}
namespace com.spoonconsulting.calendar {
    export interface ViewEvent extends api.Renderable {
        getNewEvent(date: Date): Object;

        setValue(value: Object);

        getValue(): Object;

        getStartDate(): Date;

        getEndDate(): Date;
    }
}
namespace com.spoonconsulting.calendar {
    export enum WeekDay {
        SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
    }

    /** @ignore */
    export class WeekDay_$WRAPPER {
        constructor(protected _$ordinal: number, protected _$name: string, shortFR, shortEN, longFR, longEN) {
            if (this.shortFR === undefined) { this.shortFR = null; }
            if (this.shortEN === undefined) { this.shortEN = null; }
            if (this.longFR === undefined) { this.longFR = null; }
            if (this.longEN === undefined) { this.longEN = null; }
            this.shortFR = shortFR;
            this.shortEN = shortEN;
            this.longFR = longFR;
            this.longEN = longEN;
        }

        /*private*/ shortFR;

        /*private*/ shortEN;

        /*private*/ longFR;

        /*private*/ longEN;

        public getShortFR(): string {
            return this.shortFR;
        }

        public getShortEN(): string {
            return this.shortEN;
        }

        public getLongFR(): string {
            return this.longFR;
        }

        public getLongEN(): string {
            return this.longEN;
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    WeekDay["__class"] = "com.spoonconsulting.calendar.WeekDay";
    WeekDay["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

    WeekDay["_$wrappers"] = {0: new WeekDay_$WRAPPER(0, "SUNDAY", "Dim", "Dimanche", "Sun", "Sunday"), 1: new WeekDay_$WRAPPER(1, "MONDAY", "Lun", "Lundi", "Mon", "Monday"), 2: new WeekDay_$WRAPPER(2, "TUESDAY", "Mar", "Mardi", "Tue", "Tuesday"), 3: new WeekDay_$WRAPPER(3, "WEDNESDAY", "Mer", "Mercredi", "Wed", "Wednesday"), 4: new WeekDay_$WRAPPER(4, "THURSDAY", "Jeu", "Jeudi", "Thurs", "Thursday"), 5: new WeekDay_$WRAPPER(5, "FRIDAY", "Ven", "Vendredi", "Fri", "Friday"), 6: new WeekDay_$WRAPPER(6, "SATURDAY", "Sam", "Samedi", "Sat", "Saturday")};

}
namespace com.spoonconsulting.calendar {
    export class WeekView extends JSContainer {
        /*private*/ events: Array<Object>;

        /*private*/ startDate: Date;

        /*private*/ days: number;

        /*private*/ startHour: number;

        /*private*/ endHour: number;

        public static CELL_HEIGHT: number = 22;

        /*private*/ header: com.spoonconsulting.calendar.Box;

        /*private*/ headerLeftGutter: com.spoonconsulting.calendar.Box;

        /*private*/ headerRightBody: com.spoonconsulting.calendar.Box;

        /*private*/ body: com.spoonconsulting.calendar.Box;

        /*private*/ bodyLeftGutter: com.spoonconsulting.calendar.Box;

        /*private*/ bodyRightBody: com.spoonconsulting.calendar.WeekViewBody;

        public cellDecorator: (p1: com.spoonconsulting.calendar.WeekViewCell) => void;

        public eventDecorator: (p1: com.spoonconsulting.calendar.WeekViewEvent) => void;

        public constructor(name: string) {
            super(name, "div");
            this.events = <any>(new Array<Object>());
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
            if (this.cellDecorator === undefined) { this.cellDecorator = null; }
            if (this.eventDecorator === undefined) { this.eventDecorator = null; }
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

        public refresh() {
            this.reset();
        }

        public reset() {
            this.fillAll();
        }

        fillAll() {
            this.fillLeftGutter();
            this.fillRightBody();
        }

        /*private*/ formatDate(date: Date): string {
            const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const day: number = date.getDay();
            const iDate: number = date.getDate();
            const month: number = date.getMonth() + 1;
            const sDate: string = iDate < 10 ? "0" + iDate : iDate + "";
            const sMonth: string = month < 10 ? "0" + month : month + "";
            return days[(<number>day|0)] + " " + sDate + "/" + sMonth;
        }

        fillLeftGutter() {
            this.headerLeftGutter.clearChildren();
            this.headerLeftGutter.setRendered(false);
            const hgut: JSContainer = new JSContainer("div");
            hgut.addClass("slds-col slds-size_1-of-1");
            hgut.addClass("spn-header-left-gutter-cell");
            this.bodyLeftGutter.clearChildren();
            this.bodyLeftGutter.setRendered(false);
            for(let i: number = this.startHour; i <= this.endHour; i++) {{
                const gut: com.spoonconsulting.calendar.Box = new com.spoonconsulting.calendar.Box("gut", 1, 1);
                gut.addClass("spn-body-left-gutter-cell");
                this.bodyLeftGutter.addChild(gut);
                const fullHr: com.spoonconsulting.calendar.Col = new com.spoonconsulting.calendar.Col("fullHr", 1, 1);
                fullHr.addClass("brd-btm");
                fullHr.setStyle("height", WeekView.CELL_HEIGHT + "px");
                fullHr.setHtml(i + ":00");
                gut.addChild(fullHr);
                const halfHr: com.spoonconsulting.calendar.Col = new com.spoonconsulting.calendar.Col("halfHr", 1, 1);
                halfHr.addClass("brd-btm");
                halfHr.setStyle("height", WeekView.CELL_HEIGHT + "px");
                gut.addChild(halfHr);
            };}
        }

        public decorateCell(cell: com.spoonconsulting.calendar.WeekViewCell) {
            if (this.cellDecorator != null){
                (target => (typeof target === 'function') ? target(cell) : (<any>target).apply(cell))(this.cellDecorator);
            }
        }

        public decorateCalEvent(calEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            if (this.eventDecorator != null){
                (target => (typeof target === 'function') ? target(calEvt) : (<any>target).apply(calEvt))(this.eventDecorator);
            }
        }

        public moveDays(amount: number) {
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
            for(let d: number = 0; d < this.days; d++) {{
                const aDay: number = 1000 * 60 * 60 * 24 * d;
                const dt: Date = new Date(this.startDate.getTime() + aDay);
                const headerRightBodyCell: com.spoonconsulting.calendar.Col = new com.spoonconsulting.calendar.Col("div", 1, this.days);
                headerRightBodyCell.addClass("spn-header-right-body-cell brd-right");
                headerRightBodyCell.setHtml(this.formatDate(dt));
                this.headerRightBody.addChild(headerRightBodyCell.setStyle("height", WeekView.CELL_HEIGHT + "px"));
            };}
            let row: number = 0;
            for(let h: number = this.startHour; h <= this.endHour; h++) {{
                let col: number = 0;
                for(let d: number = 0; d < this.days; d++) {{
                    const aDay: number = 1000 * 60 * 60 * 24 * d;
                    const dt: Date = new Date(this.startDate.getTime() + aDay);
                    const bodyRightBodyCell: com.spoonconsulting.calendar.WeekViewDateCell = new com.spoonconsulting.calendar.WeekViewDateCell(dt, h, this.days, row, col);
                    this.bodyRightBody.addChild(bodyRightBodyCell);
                    col = col + 1;
                };}
                row = row + 1;
            };}
            for(let index157=0; index157 < this.events.length; index157++) {
                let evt = this.events[index157];
                {
                    this.addCalEvent$jsweet_lang_Object$boolean(evt, false);
                }
            }
        }

        public getDays(): number {
            return this.days;
        }

        public setDays(days: number) {
            this.days = days;
            this.getStartDate();
        }

        public getStartHour(): number {
            return this.startHour;
        }

        public setStartHour(startHour: number) {
            this.startHour = startHour;
            this.getStartDate();
        }

        public getEndHour(): number {
            return this.endHour;
        }

        public setEndHour(endHour: number) {
            this.endHour = endHour;
        }

        public setStartDate(date: Date) {
            this.startDate = date;
            this.getStartDate();
        }

        public getEndDate(): Date {
            this.getStartDate();
            let endDate: Date = com.spoonconsulting.calendar.Util.addDays(this.startDate, this.days - 1);
            endDate = com.spoonconsulting.calendar.Util.addHour(endDate, this.endHour);
            endDate = com.spoonconsulting.calendar.Util.addMinutes(endDate, 59);
            return endDate;
        }

        public getStartDate(): Date {
            this.startDate.setHours(0, 0, 0, 0);
            const day: number = this.startDate.getDay();
            if (day > 0){
                const toRemove: number = 1000 * 60 * 60 * 24 * (day - 1);
                this.startDate = new Date(this.startDate.getTime() - toRemove);
            } else {
                const toRemove: number = 1000 * 60 * 60 * 24 * 6;
                this.startDate = new Date(this.startDate.getTime() - toRemove);
            }
            this.startDate.setHours(this.startHour);
            this.startDate.setMinutes(0);
            return this.startDate;
        }

        public isInRange(date: Date): boolean {
            const startDate: Date = this.getStartDate();
            const endDate: Date = this.getEndDate();
            if (date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime()){
                return true;
            }
            return false;
        }

        public setTimeRange(startHour: number, endHour: number) {
            this.startHour = startHour;
            this.endHour = endHour;
        }

        public removeEvent(value: Object) {
            const tmp: Array<Object> = <any>(new Array<Object>());
            const index: number = this.events.indexOf(value);
            let i: number = 0;
            for(let index158=0; index158 < this.events.length; index158++) {
                let tm = this.events[index158];
                {
                    if (index !== i){
                        tmp.push(tm);
                    }
                    i++;
                }
            }
            this.events = tmp;
        }

        public removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent) {
            const value: Object = uiCalEvt.getValue();
            this.removeEvent(value);
            {
                let array160 = this.bodyRightBody.getCells();
                for(let index159=0; index159 < array160.length; index159++) {
                    let r = array160[index159];
                    {
                        r.removeCalEvent(uiCalEvt);
                    }
                }
            }
            this.adjustEventWidth();
        }

        public adjustEventWidth() {
            const multiHold: Array<com.spoonconsulting.calendar.WeekViewCell> = <any>(new Array<com.spoonconsulting.calendar.WeekViewCell>());
            {
                let array162 = this.bodyRightBody.getCells();
                for(let index161=0; index161 < array162.length; index161++) {
                    let dcell = array162[index161];
                    {
                        {
                            let array164 = dcell.getCells();
                            for(let index163=0; index163 < array164.length; index163++) {
                                let cell = array164[index163];
                                {
                                    const holding: Array<com.spoonconsulting.calendar.ViewEvent> = cell.getHolding();
                                    const size: number = holding.length;
                                    if (size > 0){
                                        multiHold.push(cell);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const sorted: com.spoonconsulting.calendar.WeekViewCell[] = multiHold.sort((a, b) => {
                return (b.getHolding().length - a.getHolding().length);
            });
            const done: Object = <Object>new Object();
            for(let index165=0; index165 < sorted.length; index165++) {
                let cell = sorted[index165];
                {
                    const hds: Array<com.spoonconsulting.calendar.ViewEvent> = cell.getHolding();
                    const size: number = hds.length;
                    console.info("size::" + size);
                    for(let index166=0; index166 < hds.length; index166++) {
                        let ev = hds[index166];
                        {
                            if (!done.hasOwnProperty(ev.getId())){
                                done[ev.getId()] = ev;
                                if (size === 1){
                                    ev.setStyle("width", "90%");
                                } else {
                                    ev.setStyle("width", (100 / size) + "%");
                                }
                                ev.setStyle("left", (90 / size) * hds.indexOf(ev) + "%");
                            }
                        }
                    }
                }
            }
        }

        public addCalEvent$jsweet_lang_Object(evt: Object) {
            this.addCalEvent$jsweet_lang_Object$boolean(evt, true);
        }

        public addCalEvent$jsweet_lang_Object$boolean(evt: Object, push: boolean) {
            if (push){
                this.events.push(evt);
            }
            const wk: com.spoonconsulting.calendar.WeekViewEvent = new com.spoonconsulting.calendar.WeekViewEvent("");
            wk.setValue(evt);
            const startDate: Date = wk.getStartDate();
            const endDate: Date = wk.getEndDate();
            if (this.isInRange(startDate)){
                const cell: com.spoonconsulting.calendar.WeekViewDateCell = this.getDateCell(startDate);
                cell.addCalEvent(wk);
                const startHr: number = startDate.getHours();
                const endHr: number = endDate.getHours();
                const endMin: number = endDate.getMinutes();
                let counter: number = 0;
                for(let i: number = startHr; i < endHr; i++) {{
                    counter++;
                    const tmpDate: Date = com.spoonconsulting.calendar.Util.addHour(startDate, counter);
                    const hcell: com.spoonconsulting.calendar.WeekViewDateCell = this.getDateCell(tmpDate);
                    hcell.holdHr(wk);
                    if (i < endHr - 1){
                        hcell.holdHalfHr(wk);
                    } else {
                        if (endMin > 0){
                            hcell.holdHalfHr(wk);
                        }
                    }
                };}
                this.adjustEventWidth();
            }
        }

        public addCalEvent(evt?: any, push?: any) {
            if (((evt != null && evt instanceof <any>Object) || evt === null) && ((typeof push === 'boolean') || push === null)) {
                return <any>this.addCalEvent$jsweet_lang_Object$boolean(evt, push);
            } else if (((evt != null && evt instanceof <any>Object) || evt === null) && push === undefined) {
                return <any>this.addCalEvent$jsweet_lang_Object(evt);
            } else throw new Error('invalid overload');
        }

        public unHoldEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.bodyRightBody.unholdEvent(uiCalEvt);
        }

        public adjustHolding(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.unHoldEvent(uiCalEvt);
            const cells: Array<com.spoonconsulting.calendar.WeekViewCell> = this.getCellsForDateRange(uiCalEvt.getStartDate(), uiCalEvt.getEndDate());
            for(let index167=0; index167 < cells.length; index167++) {
                let cell = cells[index167];
                {
                    cell.hold(uiCalEvt);
                }
            }
        }

        public moveCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent, newEvt: Object) {
            this.removeCalEvent(uiCalEvt);
            this.addCalEvent$jsweet_lang_Object(newEvt);
        }

        public getCellsForDateRange(startDate: Date, endDate: Date): Array<com.spoonconsulting.calendar.WeekViewCell> {
            const result: Array<com.spoonconsulting.calendar.WeekViewCell> = <any>(new Array<com.spoonconsulting.calendar.WeekViewCell>());
            const startHr: number = startDate.getHours();
            const startMins: number = startDate.getMinutes();
            const endHr: number = endDate.getHours();
            const endMins: number = endDate.getMinutes();
            for(let i: number = startHr; i <= endHr; i++) {{
                const tmp: Date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), i, 0);
                const cell: com.spoonconsulting.calendar.WeekViewDateCell = this.getDateCell(tmp);
                if (i === startHr && startMins === 0){
                    result.push(cell.getCellHr());
                    result.push(cell.getCellHalfHr());
                } else if (i === startHr && startMins > 0){
                    result.push(cell.getCellHalfHr());
                } else if (i === endHr && endMins > 0){
                    result.push(cell.getCellHr());
                    result.push(cell.getCellHalfHr());
                } else if (i === endHr && endMins === 0){
                    result.push(cell.getCellHr());
                } else {
                    result.push(cell.getCellHr());
                    result.push(cell.getCellHalfHr());
                }
            };}
            return result;
        }

        public getDateCell(date: Date): com.spoonconsulting.calendar.WeekViewDateCell {
            const hr: number = date.getHours();
            {
                let array169 = this.bodyRightBody.getCells();
                for(let index168=0; index168 < array169.length; index168++) {
                    let cell = array169[index168];
                    {
                        if (com.spoonconsulting.calendar.Util.isSameDate(cell.getDate(), date)){
                            if (cell.getHour() === hr)return cell;
                        }
                    }
                }
            }
            return null;
        }
    }
    WeekView["__class"] = "com.spoonconsulting.calendar.WeekView";
    WeekView["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class WeekViewDndManager {
        public static dragging: com.spoonconsulting.calendar.ViewEvent = null;

        public static resizing: com.spoonconsulting.calendar.WeekViewEvent = null;
    }
    WeekViewDndManager["__class"] = "com.spoonconsulting.calendar.WeekViewDndManager";

}
namespace com.spoonconsulting.calendar {
    export class WeekViewEvent extends JSContainer implements com.spoonconsulting.calendar.ViewEvent, api.Renderer<WeekViewEvent> {
        /*private*/ value: Object;

        /*private*/ header: JSContainer;

        /*private*/ body: JSContainer;

        /*private*/ footer: JSContainer;

        /*private*/ title: JSContainer;

        /*private*/ time: JSContainer;

        /*private*/ description: JSContainer;

        /*private*/ resizer: JSContainer;

        /*private*/ close: JSContainer;

        /*private*/ heldBy: Array<com.spoonconsulting.calendar.WeekViewCell>;

        startY: number;

        startHeight: number;

        newHeight: number;

        resizing: boolean;

        p: HTMLElement;

        doDrag: EventListener;

        stopDrag: EventListener;

        public constructor(name: string) {
            super(name, "div");
            if (this.value === undefined) { this.value = null; }
            this.header = new JSContainer("header", "div");
            this.body = new JSContainer("body", "div");
            this.footer = new JSContainer("footer", "div");
            this.title = new JSContainer("title", "p");
            this.time = new JSContainer("time", "span");
            this.description = new JSContainer("description", "p");
            this.resizer = new JSContainer("resizer", "div");
            this.close = new JSContainer("close", "div");
            this.heldBy = <any>(new Array<com.spoonconsulting.calendar.WeekViewCell>());
            if (this.startY === undefined) { this.startY = 0; }
            if (this.startHeight === undefined) { this.startHeight = 0; }
            if (this.newHeight === undefined) { this.newHeight = 0; }
            this.resizing = false;
            this.p = null;
            this.doDrag = (e) => {
                this.p.classList.add("spn-resizing");
                this.resizing = true;
                this.p.style.height = (this.startHeight + (<MouseEvent>e).clientY - this.startY) + "px";
                this.newHeight = (this.startHeight + (<MouseEvent>e).clientY - this.startY);
            };
            this.stopDrag = (e) => {
                if (this.resizing){
                    this.resizing = false;
                    const ce: CustomEvent = this.beforeResize();
                    const cancel: boolean = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
                    if (cancel){
                        this.cancelUpdate();
                    } else {
                        this.updateEndDate();
                    }
                    this.p.classList.remove("spn-resizing");
                    document.documentElement.removeEventListener("mousemove", <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(this.doDrag)), false);
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

        public reset() {
            const title: string = <string>this.value["title"];
            const description: string = <string>this.value["description"];
            const startDate: Date = <Date>this.value["startDate"];
            const endDate: Date = <Date>this.value["endDate"];
            this.title.setHtml(title);
            this.description.setHtml(description);
            this.time.setHtml(this.formatDate(startDate) + " - " + this.formatDate(endDate));
            const startHr: number = startDate.getHours();
            const startMin: number = startDate.getMinutes();
            const endHr: number = endDate.getHours();
            const endMin: number = endDate.getMinutes();
            let diffHr: number = (endHr - startHr) * 2;
            if (startMin > 0){
                diffHr = diffHr - 1;
            }
            if (endMin > 0){
                diffHr = diffHr + 1;
            }
            this.setStyle("height", diffHr * com.spoonconsulting.calendar.WeekView.CELL_HEIGHT + "px");
        }

        public getGhost(): JSContainer {
            const g: JSContainer = new JSContainer("div");
            g.setStyle("border", "dotted 1px red");
            g.setStyle("height", this.getNative().style.height);
            g.setStyle("width", this.getNative().offsetWidth + "px");
            return g;
        }

        public getStartDate(): Date {
            return <Date>this.value["startDate"];
        }

        public getEndDate(): Date {
            return <Date>this.value["endDate"];
        }

        public getEventDurationMS(): number {
            const startDate: Date = this.getStartDate();
            const endDate: Date = this.getEndDate();
            return (endDate.getTime() - startDate.getTime());
        }

        public isHeldBy(cell: com.spoonconsulting.calendar.WeekViewCell): boolean {
            for(let index170=0; index170 < this.heldBy.length; index170++) {
                let c = this.heldBy[index170];
                {
                    if (c.getId() === cell.getId()){
                        return true;
                    }
                }
            }
            return false;
        }

        public addHeldBy(cell: com.spoonconsulting.calendar.WeekViewCell) {
            if (!this.isHeldBy(cell)){
                this.heldBy.push(cell);
            }
        }

        formatDate(dt: Date): string {
            const hr: number = dt.getHours();
            const mins: number = dt.getMinutes();
            return (hr < 10 ? "0" + hr : hr + "") + ":" + (mins < 10 ? "0" + mins : mins);
        }

        public setValue(value: Object) {
            this.setName(<string>value["title"]);
            this.value = value;
            this.reset();
        }

        public getValue(): Object {
            return this.value;
        }

        public removeFromCell() {
            const cell: com.spoonconsulting.calendar.WeekViewCell = <any>(this.getAncestorWithClass<any>("spn-week-view-cell"));
            cell.removeCalEvent(this);
            this.heldBy = <any>(new Array<com.spoonconsulting.calendar.WeekViewCell>());
        }

        public getNewEvent(startDate: Date): Object {
            const evt: Object = <Object>new Object();
            {
                let array172 = Object.keys(this.value);
                for(let index171=0; index171 < array172.length; index171++) {
                    let key = array172[index171];
                    {
                        evt[key] = this.value[key];
                        if (key === "startDate"){
                            evt["startDate"] = startDate;
                        }
                        if (key === "endDate"){
                            const ostartDate: Date = <Date>this.value["startDate"];
                            const oendDate: Date = <Date>this.value["endDate"];
                            const diff: number = oendDate.getTime() - ostartDate.getTime();
                            const endDate: Date = new Date(startDate.getTime() + diff);
                            evt["endDate"] = endDate;
                        }
                    }
                }
            }
            return evt;
        }

        public cancelUpdate() {
            this.setStyle("height", this.getStyle("height"));
        }

        public beforeResize(): CustomEvent {
            const evt: CustomEvent = new CustomEvent("beforeresize");
            evt["value"] = this.value;
            evt["calEvent"] = this;
            const wj: com.spoonconsulting.calendar.WeekView = <any>(this.getAncestorWithClass<any>("WeekView"));
            wj.fireListener("beforeresize", evt);
            return evt;
        }

        public updateEndDate() {
            const wj: com.spoonconsulting.calendar.WeekView = <any>(this.getAncestorWithClass<any>("WeekView"));
            const remainder: number = this.newHeight % com.spoonconsulting.calendar.WeekView.CELL_HEIGHT;
            let segments: number = (this.newHeight - remainder) / com.spoonconsulting.calendar.WeekView.CELL_HEIGHT;
            if (remainder > 0){
                segments = segments + 1;
            }
            const ms: number = 30 * 60 * 1000 * segments;
            const endDate: Date = new Date(this.getStartDate().getTime() + ms);
            this.value["endDate"] = endDate;
            this.setStyle("height", segments * com.spoonconsulting.calendar.WeekView.CELL_HEIGHT + "px");
            this.getNative().style.height = this.getStyle("height");
            this.time.setHtml(this.formatDate(this.getStartDate()) + " - " + this.formatDate(this.getEndDate()));
            wj.adjustHolding(this);
            wj.adjustEventWidth();
            const evt: CustomEvent = new CustomEvent("afterresize");
            evt["calEvent"] = this;
            evt["value"] = this.value;
            wj.fireListener("afterresize", evt);
        }

        /**
         * 
         * @param {com.spoonconsulting.calendar.WeekViewEvent} renderable
         * @param {HTMLElement} parent
         */
        public doRender(renderable: WeekViewEvent, parent: HTMLElement) {
            const wv: com.spoonconsulting.calendar.WeekView = <any>(this.getAncestorWithClass<any>("WeekView"));
            wv.decorateCalEvent(renderable);
        }
    }
    WeekViewEvent["__class"] = "com.spoonconsulting.calendar.WeekViewEvent";
    WeekViewEvent["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.calendar.ViewEvent","framework.components.api.Renderer"];



    export namespace WeekViewEvent {

        export class WeekViewEvent$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const de: DragEvent = <DragEvent>evt;
                de.dataTransfer.setData("text/plain", "move");
                const el: HTMLElement = <HTMLElement>evt.target;
                setTimeout((((el) => {
                    return () => {
                        el.parentElement.classList.add("slds-hide");
                    }
                })(el)), 0);
                com.spoonconsulting.calendar.WeekViewDndManager.dragging = <com.spoonconsulting.calendar.WeekViewEvent><any>source.getParent();
                com.spoonconsulting.calendar.WeekViewDndManager.resizing = null;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewEvent$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewEvent$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const de: DragEvent = <DragEvent>evt;
                de.dataTransfer.setData("text/plain", "move");
                const el: HTMLElement = <HTMLElement>evt.target;
                setTimeout((((el) => {
                    return () => {
                        el.parentElement.classList.remove("slds-hide");
                    }
                })(el)), 0);
                com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewEvent$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewEvent$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const me: MouseEvent = <MouseEvent>evt;
                this.__parent.startY = me.clientY;
                this.__parent.p = this.__parent.getNative();
                this.__parent.startHeight = parseInt(this.__parent.p.style.height, 10);
                this.__parent.resizer.getNative().addEventListener("mousedown", (e) => {
                    document.documentElement.addEventListener("mousemove", <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(this.__parent.doDrag)), false);
                    document.documentElement.addEventListener("mouseup", <any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(this.__parent.stopDrag)), false);
                    return true;
                }, false);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewEvent$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewEvent$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const wv: com.spoonconsulting.calendar.WeekView = <any>(this.__parent.getAncestorWithClass("WeekView"));
                const uical: com.spoonconsulting.calendar.WeekViewEvent = <any>(source.getAncestorWithClass<any>("spn-week-view-event"));
                const beforedelete: CustomEvent = new CustomEvent("beforedelete");
                beforedelete["calEvent"] = uical;
                beforedelete["value"] = this.__parent.value;
                wv.fireListener("beforedelete", beforedelete);
                const cancel: boolean = beforedelete.defaultPrevented || beforedelete.cancelBubble || !beforedelete.returnValue;
                if (!cancel){
                    wv.removeCalEvent(uical);
                    const __delete: CustomEvent = new CustomEvent("delete");
                    __delete["value"] = this.__parent.value;
                    __delete["calEvent"] = uical;
                    wv.fireListener("delete", __delete);
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewEvent$3["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.calendar {
    export class MonthViewBody extends com.spoonconsulting.calendar.Box {
        public constructor(name: string) {
            super(name, 1, 1);
            this.addClass("spn-month-view-body");
        }

        public getCells(): Array<com.spoonconsulting.calendar.MonthViewCell> {
            const result: Array<any> = this.getChildren();
            return result;
        }
    }
    MonthViewBody["__class"] = "com.spoonconsulting.calendar.MonthViewBody";
    MonthViewBody["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class MonthViewCell extends com.spoonconsulting.calendar.Box {
        /*private*/ date: Date;

        /*private*/ header: com.spoonconsulting.calendar.Box;

        /*private*/ body: com.spoonconsulting.calendar.Box;

        public constructor(name: string, of: number) {
            super(name, 1, of);
            if (this.date === undefined) { this.date = null; }
            this.header = new com.spoonconsulting.calendar.Box("header", 1, 1);
            this.body = new com.spoonconsulting.calendar.Box("body", 1, 1);
            this.addClass("spn-month-view-cell");
            this.addChild(this.header);
            this.addChild(this.body);
            this.header.setStyle("height", ((com.spoonconsulting.calendar.MonthView.CELL_HEIGHT / 6|0)) + "px");
            this.body.setStyle("height", ((com.spoonconsulting.calendar.MonthView.CELL_HEIGHT * 5 / 6|0)) + "px");
            this.body.setStyle("overflow-y", "auto");
            this.addClass("brd-btm");
            this.addClass("brd-right");
            this.addEventListener(new MonthViewCell.MonthViewCell$0(this), "dblclick");
            this.addEventListener(new MonthViewCell.MonthViewCell$1(this), "dragenter");
            this.addEventListener(new MonthViewCell.MonthViewCell$2(this), "dragover");
            this.addEventListener(new MonthViewCell.MonthViewCell$3(this), "dragleave");
            this.addEventListener(new MonthViewCell.MonthViewCell$4(this), "drop");
        }

        public setDate(date: Date) {
            this.date = date;
            this.header.setHtml(date.getDate() + "");
        }

        public isSameDate(dt: Date): boolean {
            if (dt.getFullYear() === this.date.getFullYear()){
                if (dt.getMonth() === this.date.getMonth()){
                    if (dt.getDate() === this.date.getDate()){
                        return true;
                    }
                }
            }
            return false;
        }

        public addCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent) {
            this.body.addChild(uiCalEvent);
        }

        public getDate(): Date {
            return this.date;
        }

        public removeCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent) {
            this.body.removeChild(uiCalEvent);
        }
    }
    MonthViewCell["__class"] = "com.spoonconsulting.calendar.MonthViewCell";
    MonthViewCell["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace MonthViewCell {

        export class MonthViewCell$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const top: number = source.getNative().offsetTop;
                const left: number = source.getNative().offsetLeft;
                console.log("{" + left + "," + top + "}");
                const shrs: string = prompt("Number of hours:");
                if (shrs != null){
                    const ce: Object = <Object>new Object();
                    ce["title"] = "New Event";
                    ce["description"] = "Arbitrary event added";
                    const startDate: Date = new Date(this.__parent.date.getFullYear(), this.__parent.date.getMonth(), this.__parent.date.getDate(), parseFloat(shrs), 30);
                    const endDate: Date = com.spoonconsulting.calendar.Util.addHour(startDate, 4);
                    ce["startDate"] = startDate;
                    ce["endDate"] = endDate;
                    const wj: com.spoonconsulting.calendar.MonthView = <any>(source.getAncestorWithClass<any>("spn-month-view"));
                    wj.addCalEvent(ce);
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewCell$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewCell$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                    evt.preventDefault();
                    source.addClass("drag-over");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewCell$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewCell$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                    evt.preventDefault();
                    source.addClass("drag-over");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewCell$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewCell$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                    evt.preventDefault();
                    source.removeClass("drag-over");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewCell$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class MonthViewCell$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                    evt.preventDefault();
                    source.removeClass("drag-over");
                    (<HTMLElement>evt.target).classList.remove("drag-over");
                    const dragging: com.spoonconsulting.calendar.ViewEvent = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
                    if (dragging != null){
                        const srcStartDate: Date = dragging.getStartDate();
                        const startDate: Date = new Date(this.__parent.date.getFullYear(), this.__parent.date.getMonth(), this.__parent.date.getDate(), srcStartDate.getHours(), srcStartDate.getMinutes());
                        const newEvt: Object = dragging.getNewEvent(startDate);
                        const wek: com.spoonconsulting.calendar.MonthView = <any>(source.getAncestorWithClass<any>("spn-month-view"));
                        wek.moveCalEvent(dragging, newEvt);
                        com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        MonthViewCell$4["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.calendar {
    export class WeekViewBody extends com.spoonconsulting.calendar.Box {
        public constructor(name: string) {
            super(name, 11, 12);
            this.addClass("spn-body-right-body");
        }

        public getCells(): Array<com.spoonconsulting.calendar.WeekViewDateCell> {
            const result: Array<any> = this.getChildren();
            return result;
        }

        public unholdEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            {
                let array174 = this.getCells();
                for(let index173=0; index173 < array174.length; index173++) {
                    let dc = array174[index173];
                    {
                        {
                            let array176 = dc.getCells();
                            for(let index175=0; index175 < array176.length; index175++) {
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
    WeekViewBody["__class"] = "com.spoonconsulting.calendar.WeekViewBody";
    WeekViewBody["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class WeekViewDateCell extends com.spoonconsulting.calendar.Box {
        /*private*/ date: Date;

        /*private*/ hour: number;

        /*private*/ cellHr: com.spoonconsulting.calendar.WeekViewCell;

        /*private*/ cellHalfHr: com.spoonconsulting.calendar.WeekViewCell;

        public constructor(date: Date, hr: number, days: number, row: number, col: number) {
            super(com.spoonconsulting.calendar.Util.formatDate(date, "dd"), 1, days);
            if (this.date === undefined) { this.date = null; }
            if (this.hour === undefined) { this.hour = null; }
            if (this.cellHr === undefined) { this.cellHr = null; }
            if (this.cellHalfHr === undefined) { this.cellHalfHr = null; }
            this.date = date;
            this.hour = hr;
            this.addClass("spn-body-right-body-cell");
            this.cellHr = new com.spoonconsulting.calendar.WeekViewCell(hr, 0, date, row, col);
            this.cellHalfHr = new com.spoonconsulting.calendar.WeekViewCell(hr, 30, date, row++, col);
            this.addChild(this.cellHr.addClass("brd-btm brd-right")).addChild(this.cellHalfHr.addClass("brd-btm brd-right"));
        }

        public addCalEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            const dt: Date = uiCalEvt.getStartDate();
            const mins: number = dt.getMinutes();
            if (mins > 0){
                this.cellHalfHr.addCalEvent(uiCalEvt);
            } else {
                this.cellHr.addCalEvent(uiCalEvt);
            }
        }

        public getCells(): Array<com.spoonconsulting.calendar.WeekViewCell> {
            const result: Array<any> = this.getChildren();
            return result;
        }

        public removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent) {
            this.cellHalfHr.removeCalEvent(uiCalEvt);
            this.cellHr.removeCalEvent(uiCalEvt);
        }

        public getDate(): Date {
            return this.date;
        }

        public getHour(): number {
            return this.hour;
        }

        public holdHr(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.cellHr.hold(uiCalEvt);
        }

        public holdHalfHr(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.cellHalfHr.hold(uiCalEvt);
        }

        public unhold(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.cellHr.unhold(uiCalEvt);
            this.cellHalfHr.unhold(uiCalEvt);
        }

        public getCellHr(): com.spoonconsulting.calendar.WeekViewCell {
            return this.cellHr;
        }

        public getCellHalfHr(): com.spoonconsulting.calendar.WeekViewCell {
            return this.cellHalfHr;
        }
    }
    WeekViewDateCell["__class"] = "com.spoonconsulting.calendar.WeekViewDateCell";
    WeekViewDateCell["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.calendar {
    export class WeekViewCell extends com.spoonconsulting.calendar.Col implements api.Renderer<WeekViewCell> {
        /*private*/ hour: number;

        /*private*/ min: number;

        /*private*/ date: Date;

        /*private*/ holding: Array<com.spoonconsulting.calendar.ViewEvent>;

        /*private*/ row: number;

        /*private*/ col: number;

        /*private*/ disabled: boolean;

        public constructor(hour: number, min: number, date: Date, row: number, col: number) {
            super(hour + "-" + min, 1, 1);
            if (this.hour === undefined) { this.hour = 0; }
            if (this.min === undefined) { this.min = 0; }
            if (this.date === undefined) { this.date = null; }
            this.holding = <any>(new Array<com.spoonconsulting.calendar.ViewEvent>());
            if (this.row === undefined) { this.row = 0; }
            if (this.col === undefined) { this.col = 0; }
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

        public addCalEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            this.addChild(uiCalEvt);
            this.hold(uiCalEvt);
        }

        public removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent) {
            this.removeChild(uiCalEvt);
            this.unhold(uiCalEvt);
        }

        /*private*/ fireEvent(type: string): CustomEvent {
            const ev: CustomEvent = new CustomEvent(type);
            ev.initEvent(type, true, true);
            ev["startDate"] = this.getStartDate();
            ev["cell"] = this;
            ev["calEvent"] = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
            const wj: com.spoonconsulting.calendar.WeekView = <any>(this.getAncestorWithClass<any>("spn-week-view"));
            wj.fireListener(type, ev);
            return ev;
        }

        public getHour(): number {
            return this.hour;
        }

        public getMin(): number {
            return this.min;
        }

        public getDate(): Date {
            return this.date;
        }

        public getStartDate(): Date {
            return new Date(this.date.getTime() + this.hour * 60 * 60000 + this.min * 60000);
        }

        public hold(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent) {
            if (!this.isHolding(uiCalEvt)){
                this.holding.push(uiCalEvt);
            }
            uiCalEvt.addHeldBy(this);
        }

        public unhold(uiCalEvt: com.spoonconsulting.calendar.ViewEvent) {
            const tmp: Array<com.spoonconsulting.calendar.ViewEvent> = <any>(new Array<com.spoonconsulting.calendar.ViewEvent>());
            for(let index177=0; index177 < this.holding.length; index177++) {
                let ev = this.holding[index177];
                {
                    if (ev.getId() !== uiCalEvt.getId()){
                        tmp.push(ev);
                    }
                }
            }
            this.holding = tmp;
        }

        public isHolding(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): boolean {
            for(let index178=0; index178 < this.holding.length; index178++) {
                let ev = this.holding[index178];
                {
                    if (ev.getId() === uiCalEvt.getId()){
                        return true;
                    }
                }
            }
            return false;
        }

        public getHolding(): Array<com.spoonconsulting.calendar.ViewEvent> {
            return this.holding;
        }

        public getRow(): number {
            return this.row;
        }

        public getCol(): number {
            return this.col;
        }

        /**
         * 
         * @param {com.spoonconsulting.calendar.WeekViewCell} renderable
         * @param {HTMLElement} parent
         */
        public doRender(renderable: WeekViewCell, parent: HTMLElement) {
            const wv: com.spoonconsulting.calendar.WeekView = <any>(this.getAncestorWithClass<any>("WeekView"));
            wv.decorateCell(renderable);
        }

        public isDisabled(): boolean {
            return this.disabled;
        }

        public setDisabled(disabled: boolean) {
            if (disabled){
                this.addClass("is-disabled");
            } else {
                this.removeClass("is-disabled");
            }
            this.disabled = disabled;
        }
    }
    WeekViewCell["__class"] = "com.spoonconsulting.calendar.WeekViewCell";
    WeekViewCell["__interfaces"] = ["framework.components.api.Renderable","framework.components.api.Renderer"];



    export namespace WeekViewCell {

        export class WeekViewCell$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled)this.__parent.fireEvent("dblclickcell");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewCell$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled)this.__parent.fireEvent("click");
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewCell$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled){
                    if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                        evt.preventDefault();
                        (<HTMLElement>evt.target).classList.add("drag-over");
                        this.__parent.fireEvent("dragentercell");
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewCell$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled){
                    if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                        evt.preventDefault();
                        (<HTMLElement>evt.target).classList.add("drag-over");
                        this.__parent.fireEvent("dragovercell");
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewCell$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled){
                    if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                        evt.preventDefault();
                        (<HTMLElement>evt.target).classList.remove("drag-over");
                        this.__parent.fireEvent("dragleavecell");
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$4["__interfaces"] = ["framework.components.api.EventListener"];



        export class WeekViewCell$5 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.__parent.disabled){
                    if (com.spoonconsulting.calendar.WeekViewDndManager.dragging != null){
                        evt.preventDefault();
                        (<HTMLElement>evt.target).classList.remove("drag-over");
                        const dragging: com.spoonconsulting.calendar.ViewEvent = com.spoonconsulting.calendar.WeekViewDndManager.dragging;
                        if (dragging != null){
                            const ce: CustomEvent = this.__parent.fireEvent("beforedropcell");
                            const cancel: boolean = ce.defaultPrevented || ce.cancelBubble || !ce.returnValue;
                            if (!cancel){
                                const startDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.hour, this.min);
                                const newEvt: Object = dragging.getNewEvent(startDate);
                                dragging.setValue(newEvt);
                                const wek: com.spoonconsulting.calendar.WeekView = <any>(source.getAncestorWithClass<any>("spn-week-view"));
                                wek.moveCalEvent(dragging, newEvt);
                                this.__parent.fireEvent("dropcell");
                                com.spoonconsulting.calendar.WeekViewDndManager.dragging = null;
                            }
                        }
                    }
                }
            }

            constructor(__parent: any, private date: any, private hour: any, private min: any) {
                this.__parent = __parent;
            }
        }
        WeekViewCell$5["__interfaces"] = ["framework.components.api.EventListener"];


    }

}


com.spoonconsulting.calendar.Util.LONG_DAYS_$LI$();

com.spoonconsulting.calendar.Util.SHORT_DAYS_$LI$();

com.spoonconsulting.calendar.Util.SHORT_MONTHS_$LI$();

com.spoonconsulting.calendar.Util.LONG_MONTHS_$LI$();

com.spoonconsulting.calendar.Util.DAYS_$LI$();

com.spoonconsulting.calendar.MonthView.DAYS_$LI$();

com.spoonconsulting.calendar.Boot.main(null);
