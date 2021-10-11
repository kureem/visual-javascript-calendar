declare namespace com.spoonconsulting.calendar {
    class Boot {
        static main(args: string[]): void;
    }
}
declare namespace com.spoonconsulting.calendar {
    class Box extends JSContainer {
        constructor(name: string, size: number, of: number);
    }
}
declare namespace com.spoonconsulting.calendar {
    class Col extends JSContainer {
        constructor(name: string, size: number, of: number);
    }
}
declare namespace com.spoonconsulting.calendar {
    class MonthView extends JSContainer {
        startDate: Date;
        static CELL_HEIGHT: number;
        days: number;
        header: com.spoonconsulting.calendar.Box;
        body: com.spoonconsulting.calendar.MonthViewBody;
        static DAYS: string[];
        static DAYS_$LI$(): string[];
        constructor(name: string);
        getStartDate(): Date;
        setStartDate(startDate: Date): void;
        reset(): void;
        fillHeader(): void;
        fillBody(): void;
        addCalEvent(evt: Object): void;
        removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): void;
        moveCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent, newEvent: Object): void;
        getCell(dt: Date): com.spoonconsulting.calendar.MonthViewCell;
    }
}
declare namespace com.spoonconsulting.calendar {
    class MonthViewEvent extends JSContainer implements com.spoonconsulting.calendar.ViewEvent {
        value: Object;
        header: JSContainer;
        close: JSContainer;
        title: JSContainer;
        constructor(name: string);
        reset(): void;
        formatDate(dt: Date): string;
        setValue(value: Object): void;
        getStartDate(): Date;
        getEndDate(): Date;
        /**
         *
         * @param {Date} startDate
         * @return {Object}
         */
        getNewEvent(startDate: Date): Object;
        /**
         *
         * @return {Object}
         */
        getValue(): Object;
    }
    namespace MonthViewEvent {
        class MonthViewEvent$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewEvent$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewEvent$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.calendar {
    class Util {
        static DAYS: string[];
        static DAYS_$LI$(): string[];
        static SHORT_DAYS: string[];
        static SHORT_DAYS_$LI$(): string[];
        static LONG_DAYS: string[];
        static LONG_DAYS_$LI$(): string[];
        static MIN_HOUR: number;
        static MAX_HOUR: number;
        static ROW_HEIGHT_PX: number;
        static COLOR_DISPO: string;
        static COLOR_ABS: string;
        static getSemaineType(): Object;
        static getDaysInMonth(date: Date): number;
        static getFirstDateOfMonth(date: Date): Date;
        static getLastDateOfMonth(date: Date): Date;
        static to2num(val: number): string;
        static getTime(hour: number, minute: number): string;
        static getHour(time: string): number;
        static getMinute(time: string): number;
        static countRows(startTime: string, endTime: string): number;
        static countStartRowPosition(startTime: string): number;
        static formatDate(dt: Date, format: string): string;
        static replace(text: string, s: string, __with: string): string;
        static formatNum(d: number): string;
        static countStartColPosition(day: string, gutter: number, colWidth: number): number;
        static addWeeks(dt: Date, weeks: number): Date;
        static addDays(dt: Date, days: number): Date;
        static addHour(dt: Date, hrs: number): Date;
        static addMinutes(dt: Date, minutes: number): Date;
        static addSeconds(dt: Date, secs: number): Date;
        static addMiliseconds(dt: Date, ms: number): Date;
        static isSameDate(dt1: Date, dt2: Date): boolean;
    }
}
declare namespace com.spoonconsulting.calendar {
    interface ViewEvent extends api.Renderable {
        getNewEvent(date: Date): Object;
        setValue(value: Object): any;
        getValue(): Object;
        getStartDate(): Date;
        getEndDate(): Date;
    }
}
declare namespace com.spoonconsulting.calendar {
    enum WeekDay {
        SUNDAY = 0,
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6
    }
    /** @ignore */
    class WeekDay_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        constructor(_$ordinal: number, _$name: string, shortFR: any, shortEN: any, longFR: any, longEN: any);
        shortFR: any;
        shortEN: any;
        longFR: any;
        longEN: any;
        getShortFR(): string;
        getShortEN(): string;
        getLongFR(): string;
        getLongEN(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekView extends JSContainer {
        events: Array<Object>;
        startDate: Date;
        days: number;
        startHour: number;
        endHour: number;
        static CELL_HEIGHT: number;
        header: com.spoonconsulting.calendar.Box;
        headerLeftGutter: com.spoonconsulting.calendar.Box;
        headerRightBody: com.spoonconsulting.calendar.Box;
        body: com.spoonconsulting.calendar.Box;
        bodyLeftGutter: com.spoonconsulting.calendar.Box;
        bodyRightBody: com.spoonconsulting.calendar.WeekViewBody;
        cellDecorator: (p1: com.spoonconsulting.calendar.WeekViewCell) => void;
        eventDecorator: (p1: com.spoonconsulting.calendar.WeekViewEvent) => void;
        constructor(name: string);
        refresh(): void;
        reset(): void;
        fillAll(): void;
        formatDate(date: Date): string;
        fillLeftGutter(): void;
        decorateCell(cell: com.spoonconsulting.calendar.WeekViewCell): void;
        decorateCalEvent(calEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        moveDays(amount: number): void;
        fillRightBody(): void;
        getDays(): number;
        setDays(days: number): void;
        getStartHour(): number;
        setStartHour(startHour: number): void;
        getEndHour(): number;
        setEndHour(endHour: number): void;
        setStartDate(date: Date): void;
        getEndDate(): Date;
        getStartDate(): Date;
        isInRange(date: Date): boolean;
        setTimeRange(startHour: number, endHour: number): void;
        removeEvent(value: Object): void;
        removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): void;
        adjustEventWidth(): void;
        addCalEvent$jsweet_lang_Object(evt: Object): void;
        addCalEvent$jsweet_lang_Object$boolean(evt: Object, push: boolean): void;
        addCalEvent(evt?: any, push?: any): any;
        unHoldEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        adjustHolding(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        moveCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent, newEvt: Object): void;
        getCellsForDateRange(startDate: Date, endDate: Date): Array<com.spoonconsulting.calendar.WeekViewCell>;
        getDateCell(date: Date): com.spoonconsulting.calendar.WeekViewDateCell;
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekViewDndManager {
        static dragging: com.spoonconsulting.calendar.ViewEvent;
        static resizing: com.spoonconsulting.calendar.WeekViewEvent;
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekViewEvent extends JSContainer implements com.spoonconsulting.calendar.ViewEvent, api.Renderer<WeekViewEvent> {
        value: Object;
        header: JSContainer;
        body: JSContainer;
        footer: JSContainer;
        title: JSContainer;
        time: JSContainer;
        description: JSContainer;
        resizer: JSContainer;
        close: JSContainer;
        heldBy: Array<com.spoonconsulting.calendar.WeekViewCell>;
        startY: number;
        startHeight: number;
        newHeight: number;
        resizing: boolean;
        p: HTMLElement;
        doDrag: EventListener;
        stopDrag: EventListener;
        constructor(name: string);
        reset(): void;
        getGhost(): JSContainer;
        getStartDate(): Date;
        getEndDate(): Date;
        getEventDurationMS(): number;
        isHeldBy(cell: com.spoonconsulting.calendar.WeekViewCell): boolean;
        addHeldBy(cell: com.spoonconsulting.calendar.WeekViewCell): void;
        formatDate(dt: Date): string;
        setValue(value: Object): void;
        getValue(): Object;
        removeFromCell(): void;
        getNewEvent(startDate: Date): Object;
        cancelUpdate(): void;
        beforeResize(): CustomEvent;
        updateEndDate(): void;
        /**
         *
         * @param {com.spoonconsulting.calendar.WeekViewEvent} renderable
         * @param {HTMLElement} parent
         */
        doRender(renderable: WeekViewEvent, parent: HTMLElement): void;
    }
    namespace WeekViewEvent {
        class WeekViewEvent$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewEvent$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewEvent$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewEvent$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.calendar {
    class MonthViewBody extends com.spoonconsulting.calendar.Box {
        constructor(name: string);
        getCells(): Array<com.spoonconsulting.calendar.MonthViewCell>;
    }
}
declare namespace com.spoonconsulting.calendar {
    class MonthViewCell extends com.spoonconsulting.calendar.Box {
        date: Date;
        header: com.spoonconsulting.calendar.Box;
        body: com.spoonconsulting.calendar.Box;
        constructor(name: string, of: number);
        setDate(date: Date): void;
        isSameDate(dt: Date): boolean;
        addCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent): void;
        getDate(): Date;
        removeCalEvent(uiCalEvent: com.spoonconsulting.calendar.ViewEvent): void;
    }
    namespace MonthViewCell {
        class MonthViewCell$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewCell$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewCell$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewCell$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class MonthViewCell$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekViewBody extends com.spoonconsulting.calendar.Box {
        constructor(name: string);
        getCells(): Array<com.spoonconsulting.calendar.WeekViewDateCell>;
        unholdEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekViewDateCell extends com.spoonconsulting.calendar.Box {
        date: Date;
        hour: number;
        cellHr: com.spoonconsulting.calendar.WeekViewCell;
        cellHalfHr: com.spoonconsulting.calendar.WeekViewCell;
        constructor(date: Date, hr: number, days: number, row: number, col: number);
        addCalEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        getCells(): Array<com.spoonconsulting.calendar.WeekViewCell>;
        removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): void;
        getDate(): Date;
        getHour(): number;
        holdHr(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        holdHalfHr(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        unhold(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        getCellHr(): com.spoonconsulting.calendar.WeekViewCell;
        getCellHalfHr(): com.spoonconsulting.calendar.WeekViewCell;
    }
}
declare namespace com.spoonconsulting.calendar {
    class WeekViewCell extends com.spoonconsulting.calendar.Col implements api.Renderer<WeekViewCell> {
        hour: number;
        min: number;
        date: Date;
        holding: Array<com.spoonconsulting.calendar.ViewEvent>;
        row: number;
        col: number;
        disabled: boolean;
        constructor(hour: number, min: number, date: Date, row: number, col: number);
        addCalEvent(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        removeCalEvent(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): void;
        fireEvent(type: string): CustomEvent;
        getHour(): number;
        getMin(): number;
        getDate(): Date;
        getStartDate(): Date;
        hold(uiCalEvt: com.spoonconsulting.calendar.WeekViewEvent): void;
        unhold(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): void;
        isHolding(uiCalEvt: com.spoonconsulting.calendar.ViewEvent): boolean;
        getHolding(): Array<com.spoonconsulting.calendar.ViewEvent>;
        getRow(): number;
        getCol(): number;
        /**
         *
         * @param {com.spoonconsulting.calendar.WeekViewCell} renderable
         * @param {HTMLElement} parent
         */
        doRender(renderable: WeekViewCell, parent: HTMLElement): void;
        isDisabled(): boolean;
        setDisabled(disabled: boolean): void;
    }
    namespace WeekViewCell {
        class WeekViewCell$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewCell$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewCell$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewCell$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewCell$4 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class WeekViewCell$5 implements api.EventListener {
            private date;
            private hour;
            private min;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, date: any, hour: any, min: any);
        }
    }
}
