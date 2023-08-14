declare namespace sp.filters {
    /**
     * {@snippet :
     * public static void main(String... args) {
     * System.out.println("Hello, World!");
     * }
     * }
     * @author Kureem Rossaye<br>
     * <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
     * @param {string} name
     * @class
     * @extends com.spoonconsulting.lightning.Modal
     */
    class AdvancedSearch extends com.spoonconsulting.lightning.Modal {
        body: JSContainer;
        column: Object;
        operators: input.JSSelect;
        operators2: input.JSSelect;
        values: input.JSTextInput;
        values2: input.JSTextInput;
        andOr: com.spoonconsulting.lightning.RadioGroup;
        plabel: JSContainer;
        ok: com.spoonconsulting.lightning.Button;
        cancel: com.spoonconsulting.lightning.Button;
        objectType: string;
        constructor(name: string);
        getFilter(): Object;
        getFieldName(): string;
        getObjectType(): string;
        refresh(col: Object, objectType: string): void;
    }
    namespace AdvancedSearch {
        class AdvancedSearch$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AdvancedSearch$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AdvancedSearch$2 implements api.EventListener {
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
declare namespace sp.filters {
    class ApexHomePageService implements sp.filters.HompPageService {
        static container: Object;
        static container_$LI$(): Object;
        /**
         *
         * @param {string} filter
         * @param {string} filterId
         * @return {Promise}
         */
        updateFilter(filter: string, filterId: string): Promise<Object>;
        /**
         *
         * @param {string} objectType
         * @return {Promise}
         */
        getDefaultFilter(objectType: string): Promise<Object>;
        constructor();
    }
}
declare namespace sp.filters {
    class GridControls extends com.spoonconsulting.lightning.Layout {
        __refresh: com.spoonconsulting.lightning.ButtonIcon;
        clearFilters: com.spoonconsulting.lightning.Button;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        tableInfo: sp.filters.TableTitle;
        constructor(name: string);
        setTableInfo(icon: string, title: string, subtitle: string): void;
        setFilterLabel(label: string): void;
    }
    namespace GridControls {
        class GridControls$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class GridControls$1 implements api.EventListener {
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
declare namespace sp.filters {
    class GridHeader extends JSContainer {
        controls: sp.filters.GridControls;
        sfFilters: Object;
        filters: Object;
        search: sp.filters.AdvancedSearch;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        textSearch: sp.filters.ModalTextSearch;
        type: string;
        constructor(name: string);
        getType(): string;
        customFilter(lst: Array<Object>): Array<Object>;
        doIncl(o: Object, oFilters: Object): boolean;
        doCustomFilter(filter: Object, o: Object, fieldName: string): boolean;
        incl$java_lang_Double$java_lang_String$java_lang_String(o: number, op: string, sval: string): boolean;
        incl(o?: any, op?: any, sval?: any): any;
        incl$java_lang_String$java_lang_String$java_lang_String(o: string, op: string, val: string): boolean;
        openCustomFilter(fieldName: string): void;
        setWidths(widths: Array<number>): void;
        setSort(sort: Object): void;
        clearFilters(): void;
        openSimpleFilter(fieldName: string, fileData: Array<Object>): void;
        setFilters$jsweet_lang_Object(filters: Object): void;
        setFilters$jsweet_lang_Object$java_lang_String(filters: Object, label: string): void;
        setFilters(filters?: any, label?: any): any;
        doRefreshList$(): void;
        doRefreshList$java_util_function_Function(callback: (p1: Array<Object>) => void): void;
        doRefreshList(callback?: any): any;
        updateFilter(): void;
        getFilterId(): string;
    }
    namespace GridHeader {
        class GridHeader$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class GridHeader$1 implements api.EventListener {
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
declare namespace sp.filters {
    interface HompPageService {
        updateFilter(filter: string, filterId: string): Promise<Object>;
        getDefaultFilter(objectType: string): Promise<Object>;
    }
}
declare namespace sp.filters {
    class ModalSimpleSearch {
    }
}
declare namespace sp.filters {
    class ModalTextSearch extends com.spoonconsulting.lightning.Modal {
        textSearch: sp.filters.TextSearch;
        constructor(name: string);
        setColumn(column: Object): void;
        setData(data: Array<Object>, includes: Array<string>): void;
        setSelectedOptions(opts: Array<string>): void;
        setDate(): void;
    }
    namespace ModalTextSearch {
        class ModalTextSearch$0 implements api.EventListener {
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
declare namespace sp.filters { }
declare namespace sp.filters {
    class TableTitle extends JSContainer {
        icon: JSContainer;
        subtitle: JSContainer;
        title: JSContainer;
        constructor(name: string);
        setInfo(icon: string, title: string, subtitle: string): void;
        setFilterLabel(label: string): void;
    }
}
declare namespace sp.filters {
    class TextSearch extends JSContainer {
        input: input.JSTextInput;
        list: JSContainer;
        cached: boolean;
        objectType: string;
        column_: Object;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        constructor(name: string);
        setDateOptions(): void;
        static addOpt(value: string, label: string, opts: Array<Object>): void;
        setSelectedOptions(sels: Array<string>): void;
        setData(data: Array<Object>): void;
        setColumn(column: Object): void;
        static getInSelected(line: Object, selected: Array<Object>): Object;
        getItems(): Array<TextSearch.ListItem>;
        getListItem(line: Object): TextSearch.ListItem;
        getSelectedOptions(): Array<Object>;
        getColumn(): Object;
    }
    namespace TextSearch {
        class ListItem extends JSContainer {
            __parent: any;
            cb: com.spoonconsulting.lightning.CheckBox;
            label: JSContainer;
            data: Object;
            constructor(__parent: any, name: string, data: Object);
            getValue(): string;
            isVisible(): boolean;
            isSelected(): boolean;
            setSelected(b: boolean): void;
            getData(): Object;
        }
        class TextSearch$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class TextSearch$1 implements api.EventListener {
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
declare namespace sp.filters {
    class Util {
        static getService(): sp.filters.HompPageService;
    }
}
declare var __Function: FunctionConstructor;
