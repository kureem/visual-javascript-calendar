/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace sp.filters {
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
    export class AdvancedSearch extends com.spoonconsulting.lightning.Modal {
        /*private*/ body: JSContainer;

        /*private*/ column: Object;

        /*private*/ operators: input.JSSelect;

        /*private*/ operators2: input.JSSelect;

        /*private*/ values: input.JSTextInput;

        /*private*/ values2: input.JSTextInput;

        /*private*/ andOr: com.spoonconsulting.lightning.RadioGroup;

        /*private*/ plabel: JSContainer;

        /*private*/ ok: com.spoonconsulting.lightning.Button;

        /*private*/ cancel: com.spoonconsulting.lightning.Button;

        /*private*/ objectType: string;

        public constructor(name: string) {
            super(name);
            this.body = new JSContainer("div");
            if (this.column === undefined) { this.column = null; }
            this.operators = new input.JSSelect("operators");
            this.operators2 = new input.JSSelect("operators2");
            this.values = new input.JSTextInput("values");
            this.values2 = new input.JSTextInput("values2");
            this.andOr = new com.spoonconsulting.lightning.RadioGroup("andOr");
            this.plabel = new JSContainer("p");
            this.ok = new com.spoonconsulting.lightning.Button("ok").setLabel("Ok").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.cancel = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel");
            this.objectType = "Case";
            this.setTitle("Custom Search");
            this.setSize(com.spoonconsulting.lightning.enums.ModalSize.SMALL);
            this.body.addChild(new JSContainer("p").setHtml("Show rows where:").setStyle("padding", "0.5rem 1rem"));
            this.body.addChild(this.plabel);
            this.operators.addOption("equals", "=");
            this.operators.addOption("greater", ">");
            this.operators.addOption("greater or equal", ">=");
            this.operators.addOption("less", "<");
            this.operators.addOption("less or equal", "<=");
            this.operators.addOption("contains", "contains");
            this.operators.addOption("not contain", "notcontains");
            this.operators.addOption("starts with", "starts");
            this.operators.addOption("not start with", "notstarts");
            this.operators.addOption("ends with", "ends");
            this.operators.addOption("not end with", "notends");
            this.operators.addClass("slds-input");
            this.operators2.addOption("equals", "=");
            this.operators2.addOption("greater", ">");
            this.operators2.addOption("greater or equal", ">=");
            this.operators2.addOption("less", "<");
            this.operators2.addOption("less or equal", "<=");
            this.operators2.addOption("contains", "contains");
            this.operators2.addOption("not contain", "notcontains");
            this.operators2.addOption("starts with", "starts");
            this.operators2.addOption("not start with", "notstarts");
            this.operators2.addOption("ends with", "ends");
            this.operators2.addOption("not end with", "notends");
            this.operators2.addClass("slds-input");
            this.values.addClass("slds-input");
            this.values2.addClass("slds-input");
            this.getContent().addChild(this.body);
            this.body.setStyle("padding", "1rem").setStyle("height", "225px");
            const layout: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("layout", "div").setMultipleRows(true);
            const left: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("left", "div");
            left.setSize(4);
            const right: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("right", "div");
            right.setSize(8);
            layout.addChild(left);
            layout.addChild(right);
            left.addChild(this.operators);
            right.addChild(this.values);
            left.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
            right.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
            this.body.addChild(layout);
            const and: Object = <Object>new Object();
            and["value"] = "and";
            and["label"] = "And";
            const or: Object = <Object>new Object();
            or["value"] = "or";
            or["label"] = "Or";
            const andOrOpts: Array<Object> = <any>(new Array<Object>());
            andOrOpts.push(and);
            andOrOpts.push(or);
            this.andOr.setOptions(andOrOpts);
            this.andOr.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_HIDDEN);
            const layoutAndOr: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("landord", "div").setMultipleRows(true);
            layoutAndOr.addChild(new com.spoonconsulting.lightning.LayoutItem("item", "div").setSize(12).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.HORIZONTAL_SMALL).addChild(this.andOr));
            this.body.addChild(layoutAndOr);
            const layout2: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("layout2", "div").setMultipleRows(true);
            const left2: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("left2", "div");
            left2.setSize(4);
            const right2: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("right2", "div");
            right2.setSize(8);
            layout2.addChild(left2);
            layout2.addChild(right2);
            left2.addChild(this.operators2);
            right2.addChild(this.values2);
            left2.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
            right2.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
            this.body.addChild(layout2);
            this.cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.cancel.addEventListener(new AdvancedSearch.AdvancedSearch$0(this), "click");
            this.ok.addEventListener(new AdvancedSearch.AdvancedSearch$1(this), "click");
            const clear: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("clear");
            clear.setLabel("Clear Filters");
            clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
            clear.addEventListener(new AdvancedSearch.AdvancedSearch$2(this), "click");
            this.getFooter().addChild(this.cancel).addChild(this.ok).addChild(clear);
        }

        public getFilter(): Object {
            const val1: string = this.values.getValue();
            const oper1: string = <string>this.operators.getValue();
            const val2: string = this.values2.getValue();
            const oper2: string = <string>this.operators2.getValue();
            const sandOr: string = this.andOr.getValue()[0];
            const result: Object = <Object>new Object();
            result["value1"] = val1;
            result["value2"] = val2;
            result["operator1"] = oper1;
            result["operator2"] = oper2;
            result["andOr"] = sandOr;
            return result;
        }

        public getFieldName(): string {
            return <string>this.column["fieldName"];
        }

        public getObjectType(): string {
            return this.objectType;
        }

        public refresh(col: Object, objectType: string) {
            this.operators.setOptions(<any>(new Array<Object>()));
            this.operators2.setOptions(<any>(new Array<Object>()));
            this.operators.setRendered(false);
            this.operators2.setRendered(false);
            const sfType: string = <string>col["fieldName"];
            if (sfType === "ContentSize"){
                this.operators.addOption("equals", "=");
                this.operators.addOption("not equal", "!=");
                this.operators.addOption("greater", ">");
                this.operators.addOption("greater or equal", ">=");
                this.operators.addOption("less", "<");
                this.operators.addOption("less or equal", "<=");
                this.operators2.addOption("equals", "=");
                this.operators2.addOption("not equal", "!=");
                this.operators2.addOption("greater", ">");
                this.operators2.addOption("greater or equal", ">=");
                this.operators2.addOption("less", "<");
                this.operators2.addOption("less or equal", "<=");
            } else {
                this.operators.addOption("equals", "=");
                this.operators.addOption("not equal", "!=");
                this.operators.addOption("contains", "contains");
                this.operators.addOption("not contain", "notcontains");
                this.operators.addOption("starts with", "starts");
                this.operators.addOption("not start with", "notstarts");
                this.operators.addOption("ends with", "ends");
                this.operators.addOption("not end with", "notends");
                this.operators2.addOption("equals", "=");
                this.operators2.addOption("not equal", "!=");
                this.operators2.addOption("contains", "contains");
                this.operators2.addOption("not contain", "notcontains");
                this.operators2.addOption("starts with", "starts");
                this.operators2.addOption("not start with", "notstarts");
                this.operators2.addOption("ends with", "ends");
                this.operators2.addOption("not end with", "notends");
            }
            if (col.hasOwnProperty("custom") && col["custom"] != null){
                const cu: Object = <Object>col["custom"];
                const val1: string = <string>cu["value1"];
                const val2: string = <string>cu["value2"];
                const ope1: string = <string>cu["operator1"];
                const ope2: string = <string>cu["operator2"];
                const sAndor: string = <string>cu["andOr"];
                this.values.setValue(val1);
                this.values2.setValue(val2);
                this.operators.setValue(ope1);
                this.operators2.setValue(ope2);
                const arandor: Array<string> = <any>(new Array<string>());
                arandor.push(sAndor);
                this.andOr.setValue(arandor);
            } else {
                this.values.setValue("");
                this.values2.setValue("");
                this.operators.setValue("=");
                this.operators2.setValue("=");
                const arandor: Array<string> = <any>(new Array<string>());
                arandor.push("and");
                this.andOr.setValue(arandor);
            }
            this.column = col;
            this.objectType = objectType;
            const label: string = <string>col["label"];
            this.plabel.setHtml(label);
        }
    }
    AdvancedSearch["__class"] = "sp.filters.AdvancedSearch";
    AdvancedSearch["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace AdvancedSearch {

        export class AdvancedSearch$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AdvancedSearch$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class AdvancedSearch$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["fieldName"] = this.__parent.getFieldName();
                evt["objectType"] = "ContentVersion";
                evt["filter"] = this.__parent.getFilter();
                this.__parent.fireListener("onapply", evt);
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AdvancedSearch$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class AdvancedSearch$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["fieldName"] = this.__parent.getFieldName();
                evt["objectType"] = "ContentVersion";
                evt["filter"] = null;
                this.__parent.fireListener("onapply", evt);
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AdvancedSearch$2["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.filters {
    export class ApexHomePageService implements sp.filters.HompPageService {
        public static container: Object; public static container_$LI$(): Object { if (ApexHomePageService.container == null) { ApexHomePageService.container = <Object>new Object(); }  return ApexHomePageService.container; }

        /**
         * 
         * @param {string} filter
         * @param {string} filterId
         * @return {Promise}
         */
        public updateFilter(filter: string, filterId: string): Promise<Object> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["updateFilter"];
            const params: Object = <Object>new Object();
            params["filter"] = filter;
            params["filterId"] = filterId;
            const pr: Promise<Object> = <Promise<Object>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} objectType
         * @return {Promise}
         */
        public getDefaultFilter(objectType: string): Promise<Object> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getDefaultFilter"];
            const params: Object = <Object>new Object();
            params["objectType"] = objectType;
            const pr: Promise<Object> = <Promise<Object>>fn.call(fn, params);
            return pr;
        }

        constructor() {
        }
    }
    ApexHomePageService["__class"] = "sp.filters.ApexHomePageService";
    ApexHomePageService["__interfaces"] = ["sp.filters.HompPageService"];


}
namespace sp.filters {
    export class GridControls extends com.spoonconsulting.lightning.Layout {
        /*private*/ __refresh: com.spoonconsulting.lightning.ButtonIcon;

        /*private*/ clearFilters: com.spoonconsulting.lightning.Button;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ tableInfo: sp.filters.TableTitle;

        public constructor(name: string) {
            super(name, "div");
            this.__refresh = new com.spoonconsulting.lightning.ButtonIcon("refresh", "utility:refresh");
            this.clearFilters = new com.spoonconsulting.lightning.Button("clear");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            this.tableInfo = new sp.filters.TableTitle("tableInfo");
            const left: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("left", "div").setSize(10);
            left.addChild(this.tableInfo);
            const itemBtns: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("itemBtns", "div").setSize(2);
            itemBtns.setStyle("text-align", "right");
            this.addChild(left).addChild(itemBtns);
            this.setMultipleRows(true);
            this.setStyle("padding", "0.5rem");
            itemBtns.addClass("btn-container");
            this.clearFilters.setLabel("Clear Filters");
            this.clearFilters.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.clearFilters.addEventListener(new GridControls.GridControls$0(this), "click");
            itemBtns.addChild(this.clearFilters);
            itemBtns.addChild(this.__refresh.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BORDER_FILLED));
            this.clearFilters.setStyle("margin-right", "8px");
            this.clearFilters.setStyle("position", "relative").setStyle("top", "2px");
            this.addChild(this.bd);
            this.__refresh.addEventListener(new GridControls.GridControls$1(this), "click");
            this.__refresh.setStyle("margin-left", "0.25rem");
        }

        public setTableInfo(icon: string, title: string, subtitle: string) {
            this.tableInfo.setInfo(icon, title, subtitle);
        }

        public setFilterLabel(label: string) {
            this.tableInfo.setFilterLabel(label);
        }
    }
    GridControls["__class"] = "sp.filters.GridControls";
    GridControls["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace GridControls {

        export class GridControls$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (confirm("Do you really want to clear all the filters? The action cannot be un-done")){
                    const header: sp.filters.GridHeader = <any>(this.__parent.getAncestorWithClass("GridHeader"));
                    header.clearFilters();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        GridControls$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class GridControls$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const grid: sp.filters.GridHeader = <any>(this.__parent.getAncestorWithClass("GridHeader"));
                grid.doRefreshList$();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        GridControls$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.filters {
    export class GridHeader extends JSContainer {
        /*private*/ controls: sp.filters.GridControls;

        /*private*/ sfFilters: Object;

        /*private*/ filters: Object;

        /*private*/ search: sp.filters.AdvancedSearch;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ textSearch: sp.filters.ModalTextSearch;

        /*private*/ type: string;

        public constructor(name: string) {
            super(name, "div");
            this.controls = null;
            if (this.sfFilters === undefined) { this.sfFilters = null; }
            if (this.filters === undefined) { this.filters = null; }
            this.search = new sp.filters.AdvancedSearch("search");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            this.textSearch = new sp.filters.ModalTextSearch("textSearch");
            if (this.type === undefined) { this.type = null; }
            this.addChild(this.textSearch);
            this.textSearch.setBackdrop(this.bd);
            this.addChild(this.bd);
            this.controls = new sp.filters.GridControls("controls");
            this.addChild(this.controls);
            this.addChild(this.search);
            this.addClass("GridHeader");
            this.type = "ContentVersion";
            this.search.setBackdrop(this.bd);
            sp.filters.Util.getService().getDefaultFilter("ContentVersion").then((r) => {
                this.setFilters$jsweet_lang_Object(r);
                setTimeout((() => {
                    this.doRefreshList$();
                }), 2000);
            });
            this.controls.setTableInfo("https://ceva--jun2022.sandbox.lightning.force.com/img/icon/t4v35/standard/custom_120.png", "", "Attachments");
            this.textSearch.addEventListener(new GridHeader.GridHeader$0(this), "onapply");
            this.search.addEventListener(new GridHeader.GridHeader$1(this), "onapply");
        }

        public getType(): string {
            return this.type;
        }

        public customFilter(lst: Array<Object>): Array<Object> {
            const sFilter: string = <string>this.sfFilters["Filters__c"];
            const oFilters: Object = <Object>JSON.parse(sFilter);
            const result: Array<Object> = <any>(new Array<Object>());
            for(let index121=0; index121 < lst.length; index121++) {
                let o = lst[index121];
                {
                    const incl: boolean = this.doIncl(o, oFilters);
                    if (incl){
                        result.push(o);
                    }
                }
            }
            return result;
        }

        public doIncl(o: Object, oFilters: Object): boolean {
            {
                let array123 = Object.keys(oFilters);
                for(let index122=0; index122 < array123.length; index122++) {
                    let key = array123[index122];
                    {
                        const oFilter: Object = <Object>oFilters[key];
                        const custom: Object = <Object>oFilter["custom"];
                        const b: boolean = this.doCustomFilter(custom, o, key);
                        if (!b){
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        public doCustomFilter(filter: Object, o: Object, fieldName: string): boolean {
            if (filter == null){
                return true;
            }
            const op1: string = <string>filter["operator1"];
            const val1: string = <string>filter["value1"];
            const op2: string = <string>filter["operator2"];
            const val2: string = <string>filter["value2"];
            const op: string = <string>filter["andOr"];
            if (fieldName === "ContentSize"){
                const sval: string = <string>o[fieldName];
                let val: number = 0.0;
                if (sval != null && sval.length > 0){
                    val = /* parseDouble */parseFloat(/* replace */sval.split("KB").join("").trim());
                }
                const incl1: boolean = this.incl$java_lang_Double$java_lang_String$java_lang_String(val, op1, val1);
                const incl2: boolean = this.incl$java_lang_Double$java_lang_String$java_lang_String(val, op2, val2);
                if (op === "and"){
                    return incl1 && incl2;
                } else {
                    return incl1 || incl2;
                }
            } else {
                let val: string = <string>o[fieldName];
                if (fieldName.toLowerCase() === "filelink"){
                    val = <string>o["Title"];
                }
                if (fieldName === "OwnerLink"){
                    val = <string>o["OwnerName"];
                }
                if (val == null){
                    return false;
                }
                const incl1: boolean = this.incl$java_lang_String$java_lang_String$java_lang_String(val, op1, val1);
                const incl2: boolean = this.incl$java_lang_String$java_lang_String$java_lang_String(val, op2, val2);
                if (op === "and"){
                    return incl1 && incl2;
                } else {
                    return incl1 || incl2;
                }
            }
        }

        public incl$java_lang_Double$java_lang_String$java_lang_String(o: number, op: string, sval: string): boolean {
            try {
                const val: number = parseFloat(sval);
                if (op === "="){
                    return o === val;
                } else if (op === ">"){
                    return o > val;
                } else if (op === ">="){
                    return o >= val;
                } else if (op === "<"){
                    return o < val;
                } else if (op === "<="){
                    return o <= val;
                } else if (op === "!="){
                    return o !== val;
                }
            } catch(e) {
                return true;
            }
            return false;
        }

        public incl(o?: any, op?: any, sval?: any): any {
            if (((typeof o === 'number') || o === null) && ((typeof op === 'string') || op === null) && ((typeof sval === 'string') || sval === null)) {
                return <any>this.incl$java_lang_Double$java_lang_String$java_lang_String(o, op, sval);
            } else if (((typeof o === 'string') || o === null) && ((typeof op === 'string') || op === null) && ((typeof sval === 'string') || sval === null)) {
                return <any>this.incl$java_lang_String$java_lang_String$java_lang_String(o, op, sval);
            } else throw new Error('invalid overload');
        }

        public incl$java_lang_String$java_lang_String$java_lang_String(o: string, op: string, val: string): boolean {
            if (op === "="){
                return o === val;
            } else if (op === "contains"){
                return /* contains */(o.toLowerCase().indexOf(val.toLowerCase()) != -1);
            } else if (op === "starts"){
                return /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(o.toLowerCase(), val.toLowerCase());
            } else if (op === "ends"){
                return /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(o.toLowerCase(), val.toLowerCase());
            } else if (op === "notcontains"){
                return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "contains", val);
            } else if (op === "notstarts"){
                return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "starts", val);
            } else if (op === "notends"){
                return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "ends", val);
            } else if (op === "!="){
                return o.toLowerCase() !== val.toLowerCase();
            }
            return false;
        }

        public openCustomFilter(fieldName: string) {
            let col: Object = <Object>this.filters[fieldName];
            if (fieldName === "fileLink" && col == null){
                col = <Object>this.filters["FileLink"];
            }
            this.search.refresh(col, "ContentVersion");
            this.search.open();
            this.setRendered(false);
            this.render();
        }

        public setWidths(widths: Array<number>) {
            (<Object>this.filters["ContentModifiedDate"])["width"] = widths[0];
            (<Object>this.filters["fileLink"])["width"] = widths[1];
            if (this.filters.hasOwnProperty("FileLink")){
                (<Object>this.filters["FileLink"])["width"] = widths[1];
            }
            (<Object>this.filters["FileExtension"])["width"] = widths[2];
            (<Object>this.filters["ContentSize"])["width"] = widths[3];
            (<Object>this.filters["OwnerLink"])["width"] = widths[4];
            this.sfFilters["Filters__c"] = JSON.stringify(this.filters);
            this.updateFilter();
        }

        public setSort(sort: Object) {
            const fieldName: string = <string>sort["fieldName"];
            const direction: string = <string>sort["sortDirection"];
            {
                let array125 = Object.keys(this.filters);
                for(let index124=0; index124 < array125.length; index124++) {
                    let key = array125[index124];
                    {
                        const filter: Object = <Object>this.filters[key];
                        delete filter["sorting"];
                        if (key === fieldName){
                            filter["sorting"] = direction;
                            if (fieldName.toLowerCase() === "filelink"){
                                if (this.filters.hasOwnProperty("FileLink")){
                                    const excep: Object = <Object>this.filters["FileLink"];
                                    excep["sorting"] = direction;
                                    this.filters["FileLink"] = excep;
                                }
                            }
                        }
                        this.filters[key] = filter;
                    }
                }
            }
            this.sfFilters["Filters__c"] = JSON.stringify(this.filters);
            this.doRefreshList$();
        }

        public clearFilters() {
            {
                let array127 = Object.keys(this.filters);
                for(let index126=0; index126 < array127.length; index126++) {
                    let key = array127[index126];
                    {
                        const filter: Object = <Object>this.filters[key];
                        delete filter["custom"];
                        delete filter["includes"];
                        this.filters[key] = filter;
                    }
                }
            }
            this.sfFilters["Filters__c"] = JSON.stringify(this.filters);
            this.doRefreshList$();
        }

        public openSimpleFilter(fieldName: string, fileData: Array<Object>) {
            this.textSearch.open();
            console.info(fileData);
            let col: Object = <Object>this.filters[fieldName];
            if (fieldName === "fileLink" && col == null){
                col = <Object>this.filters["FileLink"];
            }
            console.info(col);
            this.textSearch.setColumn(col);
            const includes: Array<string> = <Array<string>>col["includes"];
            this.textSearch.setData(fileData, includes);
            if (includes != null){
                this.textSearch.setSelectedOptions(includes);
            }
            this.setRendered(false);
            this.render();
        }

        public setFilters$jsweet_lang_Object(filters: Object) {
            this.sfFilters = filters;
            const label: string = <string>filters["Label__c"];
            const sFilters: string = <string>filters["Filters__c"];
            const oFilters: Object = <Object>JSON.parse(sFilters);
            this.setFilters$jsweet_lang_Object$java_lang_String(oFilters, label);
        }

        public setFilters$jsweet_lang_Object$java_lang_String(filters: Object, label: string) {
            this.filters = filters;
            this.controls.setFilterLabel(label);
        }

        public setFilters(filters?: any, label?: any) {
            if (((filters != null && filters instanceof <any>Object) || filters === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.setFilters$jsweet_lang_Object$java_lang_String(filters, label);
            } else if (((filters != null && filters instanceof <any>Object) || filters === null) && label === undefined) {
                return <any>this.setFilters$jsweet_lang_Object(filters);
            } else throw new Error('invalid overload');
        }

        public doRefreshList$() {
            this.doRefreshList$java_util_function_Function(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(null)));
        }

        public doRefreshList$java_util_function_Function(callback: (p1: Array<Object>) => void) {
            const refreshList: CustomEvent = new CustomEvent("refreshList");
            refreshList["filters"] = this.filters;
            this.fireListener("refreshList", refreshList);
            this.setRendered(false);
            this.render();
            const sffiters: string = <string>this.sfFilters["Filters__c"];
            sp.filters.Util.getService().updateFilter(sffiters, this.getFilterId());
        }

        public doRefreshList(callback?: any) {
            if (((typeof callback === 'function' && (<any>callback).length === 1) || callback === null)) {
                return <any>this.doRefreshList$java_util_function_Function(callback);
            } else if (callback === undefined) {
                return <any>this.doRefreshList$();
            } else throw new Error('invalid overload');
        }

        public updateFilter() {
            const sffiters: string = <string>this.sfFilters["Filters__c"];
            sp.filters.Util.getService().updateFilter(sffiters, this.getFilterId());
        }

        public getFilterId(): string {
            return <string>this.sfFilters["Id"];
        }
    }
    GridHeader["__class"] = "sp.filters.GridHeader";
    GridHeader["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace GridHeader {

        export class GridHeader$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const includes: Array<string> = <Array<string>>evt["includes"];
                const col: Object = <Object>evt["column"];
                const fieldName: string = <string>col["fieldName"];
                const filter: Object = <Object>this.__parent.filters[fieldName];
                filter["includes"] = includes;
                this.__parent.filters[fieldName] = filter;
                this.__parent.sfFilters["Filters__c"] = JSON.stringify(this.__parent.filters);
                this.__parent.doRefreshList();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        GridHeader$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class GridHeader$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const cfilter: Object = <Object>evt["filter"];
                const fieldName: string = <string>evt["fieldName"];
                const filter: Object = <Object>this.__parent.filters[fieldName];
                if (cfilter == null){
                    delete filter["custom"];
                } else {
                    filter["custom"] = cfilter;
                }
                this.__parent.filters[fieldName] = filter;
                this.__parent.sfFilters["Filters__c"] = JSON.stringify(this.__parent.filters);
                this.__parent.doRefreshList();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        GridHeader$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.filters {
    export interface HompPageService {
        updateFilter(filter: string, filterId: string): Promise<Object>;

        getDefaultFilter(objectType: string): Promise<Object>;
    }
}
namespace sp.filters {
    export class ModalSimpleSearch {    }
    ModalSimpleSearch["__class"] = "sp.filters.ModalSimpleSearch";

}
namespace sp.filters {
    export class ModalTextSearch extends com.spoonconsulting.lightning.Modal {
        /*private*/ textSearch: sp.filters.TextSearch;

        public constructor(name: string) {
            super(name);
            if (this.textSearch === undefined) { this.textSearch = null; }
            this.textSearch = new sp.filters.TextSearch("txtsearch");
            this.getContent().addChild(this.textSearch);
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setLabel("Cancel");
            cancel.addEventListener(new ModalTextSearch.ModalTextSearch$0(this), "click");
            cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            const apply: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("apply");
            apply.setLabel("Apply Filter");
            apply.on("click", (e, d) => {
                const options: Array<Object> = this.textSearch.getSelectedOptions();
                const includes: Array<string> = <any>(new Array<string>());
                for(let index128=0; index128 < options.length; index128++) {
                    let opt = options[index128];
                    {
                        includes.push(opt["value"] + "");
                    }
                }
                const onapply: CustomEvent = new CustomEvent("onapply");
                onapply["column"] = this.textSearch.getColumn();
                onapply["options"] = options;
                onapply["includes"] = includes;
                this.fireListener("onapply", onapply);
                this.close();
                return null;
            });
            apply.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            const clear: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("clear");
            clear.setLabel("Clear Filters");
            clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
            clear.on("click", (e, v) => {
                const onapply: CustomEvent = new CustomEvent("onapply");
                const options: Array<Object> = <any>(new Array<Object>());
                const includes: Array<string> = <any>(new Array<string>());
                onapply["column"] = this.textSearch.getColumn();
                onapply["options"] = options;
                onapply["includes"] = includes;
                this.fireListener("onapply", onapply);
                this.close();
                return null;
            });
            this.getFooter().addChild(cancel).addChild(apply).addChild(clear);
        }

        public setColumn(column: Object) {
            this.textSearch.setColumn(column);
        }

        public setData(data: Array<Object>, includes: Array<string>) {
            const col: Object = this.textSearch.getColumn();
            let fieldName: string = <string>col["fieldName"];
            if (fieldName.toLowerCase() === "filelink"){
                fieldName = "Title";
            }
            if (fieldName === "OwnerLink"){
                fieldName = "OwnerName";
            }
            if (fieldName === "ContentModifiedDate"){
                this.setDate();
                return;
            }
            const current: Array<string> = <any>(new Array<string>());
            const ldata: Array<Object> = <any>(new Array<Object>());
            for(let index129=0; index129 < data.length; index129++) {
                let line = data[index129];
                {
                    const oval: Object = <Object>line[fieldName];
                    let val: string = "";
                    if (oval != null){
                        val = oval + "";
                    }
                    if (current.indexOf(val) < 0){
                        const opt: Object = <Object>new Object();
                        opt["value"] = val;
                        opt["label"] = val;
                        ldata.push(opt);
                        current.push(val);
                    }
                }
            }
            const sorted: Object[] = ldata.sort((a, b) => {
                let sa: string = <string>a["label"];
                let sb: string = <string>b["label"];
                let indexa: number = -1;
                let indexb: number = -1;
                if (includes != null){
                    indexa = includes.indexOf(sa);
                    indexb = includes.indexOf(sb);
                }
                if (indexa > indexb){
                    return -1.0;
                } else if (indexb > indexa){
                    return 1.0;
                } else {
                    sa = sa.toLowerCase();
                    sb = sb.toLowerCase();
                    const res: number = /* compareTo */sa.localeCompare(sb);
                    return parseFloat(res + "");
                }
            });
            const arrSorted: Array<Object> = <any>(new Array<any>());
            for(let index130=0; index130 < sorted.length; index130++) {
                let o = sorted[index130];
                {
                    arrSorted.push(o);
                }
            }
            this.textSearch.setData(arrSorted);
        }

        public setSelectedOptions(opts: Array<string>) {
            this.textSearch.setSelectedOptions(opts);
        }

        public setDate() {
            this.textSearch.setDateOptions();
        }
    }
    ModalTextSearch["__class"] = "sp.filters.ModalTextSearch";
    ModalTextSearch["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalTextSearch {

        export class ModalTextSearch$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalTextSearch$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.filters {}
namespace sp.filters {
    export class TableTitle extends JSContainer {
        /*private*/ icon: JSContainer;

        /*private*/ subtitle: JSContainer;

        /*private*/ title: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.icon = new JSContainer("img");
            this.subtitle = new JSContainer("span").addClass("slds-var-p-right_x-small");
            this.title = new JSContainer("title", "span");
            this.addClass("slds-media").addClass("slds-no-space").addClass("slds-grow");
            const iconctn: JSContainer = new JSContainer("div").addClass("slds-avatar").addClass("slds-m-right_small").setStyle("margin-top", "6px");
            this.addChild(iconctn);
            this.icon.setAttribute("src", "https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png");
            iconctn.addChild(this.icon).setStyle("background", "#F2CF5B");
            const middle: JSContainer = new JSContainer("middle", "div");
            middle.addClass("slds-media__body").addClass("slds-align-middle");
            this.addChild(middle);
            middle.addChild(this.subtitle.setHtml("Cases"));
            const body: JSContainer = new JSContainer("div").addClass("slds-grid slds-media__body");
            middle.addChild(body);
            const btn: JSContainer = body.addChild("", "div", "slds-button");
            btn.addClass("slds-button--reset").addClass(" slds-type-focus").addClass("slds-truncate").addClass("slds-page-header__title").addClass("slds-text-color--default");
            const headerName: JSContainer = btn.addChild("", "div").addClass("slds-page-header__name");
            headerName.addChild("", "div").addChild("", "h1").addChild(this.title);
            this.title.addClass("slds-page-header__title").addClass("slds-truncate").addClass("slds-p-right--xx-small");
        }

        public setInfo(icon: string, title: string, subtitle: string) {
            this.icon.setAttribute("src", icon);
            this.title.setHtml(title);
            this.subtitle.setHtml(subtitle);
            this.icon.getParent().setStyle("background", "#4BC076");
        }

        public setFilterLabel(label: string) {
            this.title.setHtml(label);
        }
    }
    TableTitle["__class"] = "sp.filters.TableTitle";
    TableTitle["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace sp.filters {
    export class TextSearch extends JSContainer {
        /*private*/ input: input.JSTextInput;

        /*private*/ list: JSContainer;

        /*private*/ cached: boolean;

        /*private*/ objectType: string;

        /*private*/ column_: Object;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        public constructor(name: string) {
            super(name, "div");
            this.input = new input.JSTextInput("txt");
            this.list = new JSContainer("list", "ul");
            this.cached = false;
            this.objectType = "ContentVersion";
            if (this.column_ === undefined) { this.column_ = null; }
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("3");
            this.bd.setStyle("display", "none");
            this.addClass("slds-card").setStyle("padding", "0.5rem");
            this.addChild(this.input.addClass("slds-input").setStyle("width", "100%"));
            const wrap: JSContainer = new JSContainer("div");
            wrap.setStyle("position", "relative");
            this.addChild(wrap);
            wrap.addChild(this.bd);
            wrap.addChild(this.list);
            this.list.addClass("txt-search-options");
            this.list.setStyle("height", "150px").setStyle("overflow", "hidden auto").setStyle("border", "solid 1px silver").setStyle("margin", "0.25rem").setStyle("padding", "0.25rem").setStyle("border-radius", "5px");
            this.input.addEventListener(new TextSearch.TextSearch$0(this), "keyup");
        }

        public setDateOptions() {
            const opts: Array<Object> = <any>(new Array<Object>());
            TextSearch.addOpt("0-days", "Today and before", opts);
            TextSearch.addOpt("1-days", "Before last 1 day", opts);
            TextSearch.addOpt("2-days", "Before last 2 days", opts);
            TextSearch.addOpt("3-days", "Before last 3 days", opts);
            TextSearch.addOpt("7-days", "Before last week", opts);
            TextSearch.addOpt("14-days", "Before last fortnight", opts);
            TextSearch.addOpt("31-days", "Before last month", opts);
            TextSearch.addOpt("90-days", "Before last 3 months", opts);
            this.setData(opts);
        }

        static addOpt(value: string, label: string, opts: Array<Object>) {
            const opt: Object = <Object>new Object();
            opt["value"] = value;
            opt["label"] = label;
            opts.push(opt);
        }

        public setSelectedOptions(sels: Array<string>) {
            {
                let array132 = this.getItems();
                for(let index131=0; index131 < array132.length; index131++) {
                    let item = array132[index131];
                    {
                        const val: string = item.getValue();
                        if (sels.indexOf(val) >= 0){
                            item.setSelected(true);
                        } else {
                            item.setSelected(false);
                        }
                    }
                }
            }
        }

        public setData(data: Array<Object>) {
            if (data != null){
                this.list.clearChildren();
                const selall: JSContainer = new JSContainer("li");
                selall.addChild(new com.spoonconsulting.lightning.CheckBox("cl").addEventListener(new TextSearch.TextSearch$1(this), "change")).addChild(new JSContainer("span").setStyle("font-weight", "bold").addClass("slds-truncate").setHtml("Select All"));
                this.list.addChild(selall);
                for(let index133=0; index133 < data.length; index133++) {
                    let line = data[index133];
                    {
                        const item: TextSearch.ListItem = this.getListItem(line);
                        this.list.addChild(item);
                    }
                }
            }
        }

        public setColumn(column: Object) {
            this.column_ = column;
        }

        static getInSelected(line: Object, selected: Array<Object>): Object {
            for(let index134=0; index134 < selected.length; index134++) {
                let sel = selected[index134];
                {
                    if (sel["value"] === line["value"]){
                        return line;
                    }
                }
            }
            return null;
        }

        public getItems(): Array<TextSearch.ListItem> {
            const items: Array<any> = this.list.getChildren();
            let result: Array<any> = <any>(new Array<any>());
            if (items.length > 1){
                const slic: any[] = items.slice(1);
                result = <any>(<any>new (__Function.prototype.bind.apply(Array, [null].concat(<any[]>slic))));
            }
            return result;
        }

        getListItem(line: Object): TextSearch.ListItem {
            const item: TextSearch.ListItem = new TextSearch.ListItem(this, "", line);
            return item;
        }

        public getSelectedOptions(): Array<Object> {
            const result: Array<Object> = <any>(new Array<Object>());
            {
                let array136 = this.getItems();
                for(let index135=0; index135 < array136.length; index135++) {
                    let item = array136[index135];
                    {
                        if (item.isSelected()){
                            result.push(item.getData());
                        }
                    }
                }
            }
            return result;
        }

        public getColumn(): Object {
            return this.column_;
        }
    }
    TextSearch["__class"] = "sp.filters.TextSearch";
    TextSearch["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace TextSearch {

        export class ListItem extends JSContainer {
            public __parent: any;
            cb: com.spoonconsulting.lightning.CheckBox;

            label: JSContainer;

            data: Object;

            public constructor(__parent: any, name: string, data: Object) {
                super(name, "li");
                this.__parent = __parent;
                this.cb = new com.spoonconsulting.lightning.CheckBox("cb");
                this.label = new JSContainer("label", "span");
                this.data = null;
                this.addClass("slds-truncate");
                this.data = data;
                this.addChild(this.cb);
                this.addChild(this.label);
                const value: string = <string>data["label"];
                this.setAttribute("title", value);
                this.label.setHtml(value);
            }

            public getValue(): string {
                return <string>this.data["value"];
            }

            public isVisible(): boolean {
                return this.getStyle("display") !== "none";
            }

            public isSelected(): boolean {
                if (this.isVisible() && this.cb.getValue()){
                    return true;
                } else {
                    return false;
                }
            }

            public setSelected(b: boolean) {
                this.cb.setValue(b);
            }

            public getData(): Object {
                return this.data;
            }
        }
        ListItem["__class"] = "sp.filters.TextSearch.ListItem";
        ListItem["__interfaces"] = ["framework.components.api.Renderable"];



        export class TextSearch$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const val: string = this.__parent.input.getValue();
                this.__parent.input.setValue(val);
                const items: Array<TextSearch.ListItem> = this.__parent.getItems();
                for(let index137=0; index137 < items.length; index137++) {
                    let item = items[index137];
                    {
                        if (val == null || val.trim() === ""){
                            item.setStyle("display", null);
                        } else {
                            const v: string = <string>item.getData()["label"];
                            if (/* contains */(v.toLowerCase().indexOf(val.toLowerCase()) != -1)){
                                item.setStyle("display", null);
                            } else {
                                item.setStyle("display", "none");
                            }
                        }
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        TextSearch$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class TextSearch$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                {
                    let array139 = this.__parent.getItems();
                    for(let index138=0; index138 < array139.length; index138++) {
                        let item = array139[index138];
                        {
                            if (item.isVisible())item.cb.setValue((<com.spoonconsulting.lightning.CheckBox><any>source).getValue()); else item.cb.setValue(false);
                        }
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        TextSearch$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.filters {
    export class Util {
        public static getService(): sp.filters.HompPageService {
            return new sp.filters.ApexHomePageService();
        }
    }
    Util["__class"] = "sp.filters.Util";

}

var __Function = Function;

sp.filters.ApexHomePageService.container_$LI$();
