declare namespace sp.datagrid {
    class AdvancedDateSearch extends com.spoonconsulting.lightning.Modal {
        body: JSContainer;
        column: Object;
        andOr: com.spoonconsulting.lightning.RadioGroup;
        plabel: JSContainer;
        ok: com.spoonconsulting.lightning.Button;
        cancel: com.spoonconsulting.lightning.Button;
        objectType: string;
        criteria1: AdvancedDateSearch.DateCriteria;
        criteria2: AdvancedDateSearch.DateCriteria;
        constructor(name: string);
        getFilter(): Object;
        getFieldName(): string;
        getObjectType(): string;
        refresh(col: Object, objectType: string): void;
    }
    namespace AdvancedDateSearch {
        class DateCriteria extends com.spoonconsulting.lightning.Layout {
            __parent: any;
            operators: input.JSSelect;
            fromDate: input.JSDateInput;
            toDate: input.JSDateInput;
            item2: com.spoonconsulting.lightning.LayoutItem;
            time: boolean;
            constructor(__parent: any, name: string);
            setValue(cu: Object): void;
            setTime(b: boolean): void;
            checkValidity(): boolean;
            getCriteria(result: Object): boolean;
        }
        namespace DateCriteria {
            class DateCriteria$0 implements api.EventListener {
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
        class AdvancedDateSearch$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AdvancedDateSearch$1 implements api.EventListener {
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
declare namespace sp.datagrid {
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
    }
}
declare namespace sp.datagrid {
    class ApexHomePageService implements sp.datagrid.HompPageService {
        static container: Object;
        static container_$LI$(): Object;
        /**
         *
         * @param {string} objectType
         * @return {Promise}
         */
        getFilters(objectType: string): Promise<Array<Object>>;
        /**
         *
         * @param {string} objectType
         * @return {Promise}
         */
        getRecordTypes(objectType: string): Promise<Array<Object>>;
        /**
         *
         * @param {string} objectType
         * @param {string} label
         * @return {Promise}
         */
        createNewFilter(objectType: string, label: string): Promise<Object>;
        /**
         *
         * @param {string} IdToDelete
         * @return {Promise}
         */
        deleteFilter(IdToDelete: string): Promise<Object>;
        /**
         *
         * @param {string} IdToRename
         * @param {string} label
         */
        renameFilter(IdToRename: string, label: string): void;
        /**
         *
         * @param {string} IdToClone
         * @param {string} label
         * @return {Promise}
         */
        cloneFilter(IdToClone: string, label: string): Promise<Object>;
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
        /**
         *
         * @param {number} page
         * @param {string} filter
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        getCases(page: number, filter: string, objectType: string, filterId: string): Promise<Array<Object>>;
        /**
         *
         * @return {Promise}
         */
        getCustomerPortalUsers(): Promise<Array<Object>>;
        /**
         *
         * @return {Promise}
         */
        getQueues(): Promise<Array<Object>>;
        /**
         *
         * @param {string} txt
         * @return {Promise}
         */
        getUsers(txt: string): Promise<Array<Object>>;
        /**
         *
         * @param {string} fieldName
         * @param {string} txt
         * @param {number} page
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        getFieldValues(fieldName: string, txt: string, page: number, objectType: string, filterId: string): Promise<Array<Object>>;
        getFieldDateTimeTree(fieldName: string, objectType: string): Promise<sp.datagrid.DateTimeTree>;
        /**
         *
         * @return {Promise}
         */
        getBranches(): Promise<string>;
        /**
         *
         * @param {string} ownerId
         * @param {string[]} caseIds
         * @return {Promise}
         */
        changeOwner(ownerId: string, caseIds: Array<string>): Promise<string>;
        /**
         *
         * @param {string} filterId
         * @param {string} objectType
         * @return {Promise}
         */
        pinFilter(filterId: string, objectType: string): Promise<string>;
        /**
         *
         * @param {string} status
         * @param {string[]} caseIds
         * @return {Promise}
         */
        closeCases(status: string, caseIds: Array<string>): Promise<string>;
        /**
         *
         * @param {string[]} caseIds
         * @return {Promise}
         */
        mergeCases(caseIds: Array<string>): Promise<string>;
        constructor();
    }
}
declare namespace sp.datagrid {
    class App {
        static main(args: string[]): void;
    }
}
declare namespace sp.datagrid {
    class AppHeader extends com.spoonconsulting.lightning.Layout {
        actChangeOwner: com.spoonconsulting.lightning.Button;
        actNew: com.spoonconsulting.lightning.Button;
        actNewTask: com.spoonconsulting.lightning.Button;
        actMerge: com.spoonconsulting.lightning.Button;
        modalChangeOwner: sp.datagrid.ModalChangeOwner;
        modalMergeCase: sp.datagrid.ModalMergeCases;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        grid_: sp.datagrid.DataGrid;
        constructor(name: string, grid: sp.datagrid.DataGrid, dry: boolean);
    }
    namespace AppHeader {
        class AppHeader$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AppHeader$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AppHeader$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class AppHeader$3 implements api.EventListener {
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
declare namespace sp.datagrid {
    class DataCell extends JSContainer {
        value: any;
        div: JSContainer;
        constructor(name: string, txt: string);
        setText(txt: string): void;
        setAlign(dir: string): void;
        getValue(): any;
    }
}
declare namespace sp.datagrid {
    class DataGrid extends JSContainer {
        columns: Array<Object>;
        data: Array<Object>;
        header: JSContainer;
        body: JSContainer;
        __orderBy: string;
        orderByDir: string;
        tableHeaders: Array<sp.datagrid.DataGridHeader>;
        pageSize: number;
        currentPage: number;
        lastPage: boolean;
        filters: Object;
        type: string;
        loading: boolean;
        constructor(name: string, type: string);
        refreshList(): void;
        setFilters(filters: Object): void;
        setCustomFilter(field: string, fil: Object): void;
        sortColumns(): void;
        getColumns(): Array<Object>;
        getSelectedIds(): Array<string>;
        showColumns(cols: Array<string>): void;
        getFilters(): Object;
        setColumns(cols: Array<Object>): void;
        setColumnWidth(name: string, width: number): void;
        createStringHead(col: Object): sp.datagrid.DataGridHeader;
        setData(data: Array<Object>): void;
        refresh(): void;
        getBody(): JSContainer;
        addPage(): void;
        retrievePage(): void;
        addNewPage(data: Array<Object>): void;
        getCurrentPage(): number;
        infiniteTable(): void;
        getRows(): Array<sp.datagrid.DataRow>;
        createHeaderSelect(): JSContainer;
        getOrderBy(): string;
        getOrderByDir(): string;
        setOrderBy(orderBy: string): void;
        setOrderByDir(orderByDir: string): void;
        orderBy(name: string, dir: string): void;
    }
    namespace DataGrid {
        class DataGrid$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class DataGrid$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class DataGrid$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class DataGrid$3 implements api.EventListener {
            private checkbox;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, checkbox: any);
        }
    }
}
declare namespace sp.datagrid {
    class DataGridHeader extends JSContainer {
        column: Object;
        action: sp.datagrid.HeaderAction;
        orderByDir: string;
        constructor(name: string, col: Object, objectType: string);
        getColumn(): Object;
        setHasQuery(): void;
        setOrderByDir(dir: string): void;
        getAction(): sp.datagrid.HeaderAction;
        setMenuAlignment(alignment: com.spoonconsulting.lightning.enums.MenuAlignment): void;
        setWidth(width: number): void;
        refresh(): void;
    }
    namespace DataGridHeader {
        class DataGridHeader$0 implements api.EventListener {
            private name;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, name: any);
        }
    }
}
declare namespace sp.datagrid {
    class DataRow extends JSContainer {
        data: Object;
        columns: Array<Object>;
        num: sp.datagrid.DataCell;
        select: sp.datagrid.BooleanDataCell;
        objectType: string;
        constructor(name: string, objectType: string);
        setData(data: Object, cols: Array<Object>): void;
        search(txt: string): boolean;
        setSelected(b: boolean): void;
        isSelected(): boolean;
        getData(): Object;
        setNum(num: number): void;
    }
    namespace DataRow {
        class DataRow$0 implements api.EventListener {
            private data;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, data: any);
        }
    }
}
declare namespace sp.datagrid {
    class DateSearch extends JSContainer {
        constructor(name: string);
    }
}
declare namespace sp.datagrid {
    class DateTimeTree extends Object {
        years: Array<DateTimeTree.YearNode>;
        create(prot: Object): DateTimeTree;
        getItems(): Array<Object>;
        getYear(year: number): DateTimeTree.YearNode;
        addDate(dt: Date): void;
        constructor();
    }
    namespace DateTimeTree {
        class YearNode extends Object {
            __parent: any;
            year: number;
            children: Array<DateTimeTree.MonthNode>;
            create(prot: Object): DateTimeTree.YearNode;
            getItem(): Object;
            getMonth(month: number): DateTimeTree.MonthNode;
            constructor(__parent: any);
        }
        class MonthNode extends Object {
            __parent: any;
            month: number;
            children: Array<DateTimeTree.DateNode>;
            create(prot: Object): DateTimeTree.MonthNode;
            getItem(): Object;
            getDay(day: number): DateTimeTree.DateNode;
            constructor(__parent: any);
        }
        class DateNode {
            __parent: any;
            day: number;
            constructor(__parent: any);
        }
    }
}
declare namespace sp.datagrid {
    class Filter {
        name: string;
        sortDir: string;
        advValue1: string;
        advValue2: string;
        advOperator: string;
        values: Array<string>;
        constructor();
    }
}
declare namespace sp.datagrid {
    class GridControls extends com.spoonconsulting.lightning.Layout {
        controls: com.spoonconsulting.lightning.ButtonMenu;
        __refresh: com.spoonconsulting.lightning.ButtonIcon;
        modalDeleteList: sp.datagrid.ModalDeleteList;
        modalNewList: sp.datagrid.ModalNewList;
        modalCloneList: sp.datagrid.ModalCloneList;
        modalRenameList: sp.datagrid.ModalRenameList;
        modalFieldSelector: sp.datagrid.ModalFieldSelector;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        tableInfo: sp.datagrid.TableTitle;
        constructor(name: string, grid: sp.datagrid.DataGrid, dry: boolean, objectType: string);
        setColumns(columns: Array<Object>): void;
        setTableInfo(icon: string, title: string, subtitle: string): void;
        setFilterLabel(label: string): void;
        setPinned(b: boolean): void;
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
declare namespace sp.datagrid {
    class GridFilter {
    }
}
declare namespace sp.datagrid {
    class Grids extends com.spoonconsulting.lightning.Layout {
        casesGrid: sp.datagrid.HeavyGrid;
        tasks: sp.datagrid.HeavyGrid;
        spinner: com.spoonconsulting.lightning.Spinner;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        constructor(name: string);
        getCasesGrid(): sp.datagrid.HeavyGrid;
        setCases(cases: Array<Object>, columns: Array<Object>): void;
        setTasks(data: Array<Object>, columns: Array<Object>): void;
        callGetCases(params: Object): void;
        setGetCases(fn: Function): void;
        showSpinner(b: boolean): void;
    }
}
declare namespace sp.datagrid {
    class HeaderAction extends com.spoonconsulting.lightning.ButtonMenu {
        txtSearch: sp.datagrid.TextSearch;
        column: Object;
        objectType: string;
        constructor(name: string, col: Object, objectType: string);
        displaceDropdown(): void;
        positionDropdown(evt: Event): void;
        setDropdownPosition(evt: Event): void;
        refresh(): void;
    }
    namespace HeaderAction {
        class HeaderAction$0 implements api.EventListener {
            private wlabel;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, wlabel: any);
        }
        class HeaderAction$1 implements api.EventListener {
            private col;
            private fname;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, col: any, fname: any);
        }
        class HeaderAction$2 implements api.EventListener {
            private fname;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, fname: any);
        }
        class HeaderAction$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class HeaderAction$4 implements api.EventListener {
            private fname;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, fname: any);
        }
        class HeaderAction$5 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class HeaderAction$6 implements api.EventListener {
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
declare namespace sp.datagrid {
    class HeavyGrid extends JSContainer {
        grid: sp.datagrid.DataGrid;
        columns: Array<Object>;
        controls: sp.datagrid.GridControls;
        sfFilters: Object;
        modalListFilters: sp.datagrid.ModalListFilters;
        search: sp.datagrid.AdvancedSearch;
        dateSearch: sp.datagrid.AdvancedDateSearch;
        modalCloseCase: sp.datagrid.ModalCloseCase;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        type: string;
        constructor(name: string, type: string, dry: boolean);
        closeCase(selectedId: string): void;
        getLeft(colName: string): number;
        pinCurrent(): void;
        editRecord(evt: Event): void;
        getType(): string;
        openListFilters(): void;
        setFilters$jsweet_lang_Object(filters: Object): void;
        setFilters$jsweet_lang_Object$java_lang_String(filters: Object, label: string): void;
        setFilters(filters?: any, label?: any): any;
        getFilterId(): string;
        doRefreshList(callback?: (p1: Array<Object>) => void): void;
        clearQuery(fieldName: string): void;
        saveCustomFilter(fieldName: string, objectType: string, result: Object, callback: (p1: Array<Object>) => void): void;
        customFilter(col: Object): void;
        showSpinner(b: boolean): void;
        refresh(): void;
        cloneList(label: string): void;
        deleteList(): void;
        addList(label: string): void;
        renameList(label: string): void;
        setColumns(cols: Array<Object>): void;
        setData(data: Array<Object>): void;
        setGridInfo(icon: string, title: string, subtitle: string): void;
        refreshList(): void;
        getGrid(): sp.datagrid.DataGrid;
    }
    namespace HeavyGrid {
        class HeavyGrid$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class HeavyGrid$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    interface HompPageService {
        getFilters(objectType: string): Promise<Array<Object>>;
        getRecordTypes(objectType: string): Promise<Array<Object>>;
        createNewFilter(objectType: string, label: string): Promise<Object>;
        deleteFilter(IdToDelete: string): Promise<Object>;
        renameFilter(IdToRename: string, label: string): any;
        cloneFilter(IdToClone: string, label: string): Promise<Object>;
        updateFilter(filter: string, filterId: string): Promise<Object>;
        getDefaultFilter(objectType: string): Promise<Object>;
        getCases(page: number, filter: string, objectType: string, filterId: string): Promise<Array<Object>>;
        getCustomerPortalUsers(): Promise<Array<Object>>;
        getQueues(): Promise<Array<Object>>;
        getUsers(txt: string): Promise<Array<Object>>;
        getFieldValues(fieldName: string, txt: string, page: number, objectType: string, filterId: string): Promise<Array<Object>>;
        changeOwner(ownerId: string, caseIds: Array<string>): Promise<string>;
        closeCases(status: string, caseIds: Array<string>): Promise<string>;
        mergeCases(caseIds: Array<string>): Promise<string>;
        pinFilter(filterId: string, objectType: string): Promise<string>;
        getBranches(): Promise<string>;
    }
}
declare namespace sp.datagrid {
    interface IGrids extends api.Renderable {
    }
}
declare namespace sp.datagrid {
    class MockHomePageService implements sp.datagrid.HompPageService {
        /**
         *
         * @param {string} objectType
         * @return {Promise}
         */
        getFilters(objectType: string): Promise<Array<Object>>;
        getRecordTypes(objectType: string): Promise<Array<Object>>;
        /**
         *
         * @param {string} ownerId
         * @param {string[]} caseIds
         * @return {Promise}
         */
        changeOwner(ownerId: string, caseIds: Array<string>): Promise<string>;
        /**
         *
         * @param {string} status
         * @param {string[]} caseIds
         * @return {Promise}
         */
        closeCases(status: string, caseIds: Array<string>): Promise<string>;
        /**
         *
         * @param {string[]} caseIds
         * @return {Promise}
         */
        mergeCases(caseIds: Array<string>): Promise<string>;
        /**
         *
         * @param {string} filterId
         * @param {string} objectType
         * @return {Promise}
         */
        pinFilter(filterId: string, objectType: string): Promise<string>;
        /**
         *
         * @param {string} objectType
         * @param {string} label
         * @return {Promise}
         */
        createNewFilter(objectType: string, label: string): Promise<Object>;
        /**
         *
         * @param {string} IdToDelete
         * @return {Promise}
         */
        deleteFilter(IdToDelete: string): Promise<Object>;
        /**
         *
         * @param {string} IdToRename
         * @param {string} label
         */
        renameFilter(IdToRename: string, label: string): void;
        /**
         *
         * @param {string} IdToClone
         * @param {string} label
         * @return {Promise}
         */
        cloneFilter(IdToClone: string, label: string): Promise<Object>;
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
        /**
         *
         * @param {number} page
         * @param {string} filter
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        getCases(page: number, filter: string, objectType: string, filterId: string): Promise<Array<Object>>;
        /**
         *
         * @return {Promise}
         */
        getCustomerPortalUsers(): Promise<Array<Object>>;
        /**
         *
         * @return {Promise}
         */
        getQueues(): Promise<Array<Object>>;
        /**
         *
         * @param {string} txt
         * @return {Promise}
         */
        getUsers(txt: string): Promise<Array<Object>>;
        /**
         *
         * @param {string} fieldName
         * @param {string} txt
         * @param {number} page
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        getFieldValues(fieldName: string, txt: string, page: number, objectType: string, filterId: string): Promise<Array<Object>>;
        getFieldDateTimeTree(fieldName: string, objectType: string): Promise<sp.datagrid.DateTimeTree>;
        /**
         *
         * @return {Promise}
         */
        getBranches(): Promise<string>;
        constructor();
    }
}
declare namespace sp.datagrid {
    class ModalChangeOwner extends com.spoonconsulting.lightning.Modal {
        ownerType: com.spoonconsulting.lightning.ButtonMenu;
        input: com.spoonconsulting.lightning.ComboBox;
        sendNotif: com.spoonconsulting.lightning.CheckBox;
        save: com.spoonconsulting.lightning.Button;
        cancel: com.spoonconsulting.lightning.Button;
        type: string;
        users: Array<Object>;
        customerPortalUsers: Array<Object>;
        queues: Array<Object>;
        caseIds: Array<string>;
        grid_: sp.datagrid.DataGrid;
        constructor(name: string);
        doSave(): void;
        addItem(name: string, label: string, iconName: string): void;
        refresh(grid: sp.datagrid.DataGrid): void;
    }
    namespace ModalChangeOwner {
        class ModalChangeOwner$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalChangeOwner$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalChangeOwner$2 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalChangeOwner$3 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalChangeOwner$4 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalCloneList extends com.spoonconsulting.lightning.Modal {
        newListName: com.spoonconsulting.lightning.Input;
        constructor(name: string);
        setClonedLabel(label: string): void;
    }
    namespace ModalCloneList {
        class ModalCloneList$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalCloneList$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalCloseCase extends com.spoonconsulting.lightning.Modal {
        radio: com.spoonconsulting.lightning.RadioGroup;
        label: JSContainer;
        selectedId: string;
        optCases: Array<Object>;
        optTasks: Array<Object>;
        constructor(name: string);
        addOption(st: string, opts: Array<Object>): void;
        refresh(grid: sp.datagrid.DataGrid, selectedId: string, objectType: string): void;
    }
    namespace ModalCloseCase {
        class ModalCloseCase$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalCloseCase$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalDeleteList extends com.spoonconsulting.lightning.Modal {
        constructor(name: string);
    }
    namespace ModalDeleteList {
        class ModalDeleteList$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalDeleteList$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalFieldSelector extends com.spoonconsulting.lightning.Modal {
        listBox: com.spoonconsulting.lightning.DualListBox;
        options: Array<Object>;
        save: com.spoonconsulting.lightning.Button;
        cancel: com.spoonconsulting.lightning.Button;
        constructor(name: string, grid: sp.datagrid.DataGrid);
        setColumns(cols: Array<Object>): void;
    }
    namespace ModalFieldSelector {
        class ModalFieldSelector$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalFieldSelector$1 implements api.EventListener {
            private grid;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, grid: any);
        }
    }
}
declare namespace sp.datagrid {
    class ModalListFilters extends com.spoonconsulting.lightning.Modal {
        list: JSContainer;
        filters: Array<Object>;
        type_: string;
        constructor(name: string, type: string);
        addFilter(o: Object): void;
        refresh(): void;
    }
    namespace ModalListFilters {
        class ModalListFilters$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalListFilters$1 implements api.EventListener {
            private o;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, o: any);
        }
    }
}
declare namespace sp.datagrid {
    class ModalMergeCases extends com.spoonconsulting.lightning.Modal {
        grid: sp.datagrid.Grids;
        h3: JSContainer;
        constructor(name: string);
        refresh(grids: sp.datagrid.Grids): void;
    }
    namespace ModalMergeCases {
        class ModalMergeCases$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalMergeCases$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalNewList extends com.spoonconsulting.lightning.Modal {
        newListName: com.spoonconsulting.lightning.Input;
        constructor(name: string);
    }
    namespace ModalNewList {
        class ModalNewList$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalNewList$1 implements api.EventListener {
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
declare namespace sp.datagrid {
    class ModalRecordType extends com.spoonconsulting.lightning.Modal {
        recs: com.spoonconsulting.lightning.RadioGroup;
        constructor(name: string, objectType: string);
    }
    namespace ModalRecordType {
        class ModalRecordType$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalRecordType$1 implements api.EventListener {
            private objectType;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, objectType: any);
        }
    }
}
declare namespace sp.datagrid {
    class ModalRenameList extends com.spoonconsulting.lightning.Modal {
        newListName: com.spoonconsulting.lightning.Input;
        constructor(name: string);
        setCurrentLabel(label: string): void;
    }
    namespace ModalRenameList {
        class ModalRenameList$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class ModalRenameList$1 implements api.EventListener {
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
declare namespace sp.datagrid { }
declare namespace sp.datagrid {
    class TableTitle extends JSContainer {
        icon: JSContainer;
        subtitle: JSContainer;
        title: JSContainer;
        menu: com.spoonconsulting.lightning.ButtonMenu;
        pin: com.spoonconsulting.lightning.ButtonIcon;
        constructor(name: string, dry: boolean);
        doOpenListFilters(source: api.Renderable): void;
        setInfo(icon: string, title: string, subtitle: string): void;
        setFilterLabel(label: string): void;
        setPinned(b: boolean): void;
    }
    namespace TableTitle {
        class TableTitle$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class TableTitle$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class TableTitle$2 implements api.EventListener {
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
declare namespace sp.datagrid {
    class TextSearch extends JSContainer {
        input: input.JSTextInput;
        list: JSContainer;
        cached: boolean;
        objectType: string;
        column: Object;
        searching: boolean;
        bd: com.spoonconsulting.lightning.Modal.BackDrop;
        timeoutHandle: number;
        constructor(name: string, objectType: string, col: Object);
        setDateOptions(): void;
        static addOpt(value: string, label: string, opts: Array<Object>): void;
        setSelectedOptions(sels: Array<string>): void;
        requireRefresh(): boolean;
        isPicklist(): boolean;
        doRemoteSearch(force: boolean): void;
        setTree(tree: com.spoonconsulting.lightning.Tree): void;
        setData(data: Array<Object>): void;
        static getInSelected(line: Object, selected: Array<Object>): Object;
        getItems(): Array<TextSearch.ListItem>;
        getListItem(line: Object): TextSearch.ListItem;
        getSelectedOptions(): Array<Object>;
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
declare namespace sp.datagrid {
    class Util {
        static getService(): sp.datagrid.HompPageService;
        static preprocessData(cols: Array<Object>, data: Array<Object>): void;
        static getMonth(months: Array<Object>, month: number): Object;
        static getYear(met: Array<Object>, year: number): Object;
        static extractVal(data: Object, name: string, type: string): any;
    }
}
declare namespace sp.datagrid {
    class BooleanDataCell extends sp.datagrid.DataCell {
        cb: com.spoonconsulting.lightning.CheckBox;
        constructor(name: string, value: boolean);
        setValue(b: boolean): void;
        getValue(): boolean;
    }
}
declare namespace sp.datagrid {
    class ClickableDataCell extends sp.datagrid.DataCell {
        constructor(name: string, txt: string, Id: string);
    }
    namespace ClickableDataCell {
        class ClickableDataCell$0 implements api.EventListener {
            private Id;
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any, Id: any);
        }
    }
}
declare namespace sp.datagrid {
    class DateDataCell extends sp.datagrid.DataCell {
        constructor(name: string, date: Date);
        formatDate(dt: Date): string;
        getValue(): Date;
    }
}
declare var __Function: FunctionConstructor;
