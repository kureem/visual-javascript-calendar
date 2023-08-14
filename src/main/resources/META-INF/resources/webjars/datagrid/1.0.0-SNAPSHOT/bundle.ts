/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace sp.datagrid {
    export class AdvancedDateSearch extends com.spoonconsulting.lightning.Modal {
        /*private*/ body: JSContainer;

        /*private*/ column: Object;

        /*private*/ andOr: com.spoonconsulting.lightning.RadioGroup;

        /*private*/ plabel: JSContainer;

        /*private*/ ok: com.spoonconsulting.lightning.Button;

        /*private*/ cancel: com.spoonconsulting.lightning.Button;

        /*private*/ objectType: string;

        /*private*/ criteria1: AdvancedDateSearch.DateCriteria;

        /*private*/ criteria2: AdvancedDateSearch.DateCriteria;

        public constructor(name: string) {
            super(name);
            this.body = new JSContainer("div");
            if (this.column === undefined) { this.column = null; }
            this.andOr = new com.spoonconsulting.lightning.RadioGroup("andOr");
            this.plabel = new JSContainer("p");
            this.ok = new com.spoonconsulting.lightning.Button("ok").setLabel("Ok").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.cancel = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel");
            this.objectType = "Case";
            this.criteria1 = new AdvancedDateSearch.DateCriteria(this, "1");
            this.criteria2 = new AdvancedDateSearch.DateCriteria(this, "2");
            this.setTitle("Custom Filter");
            this.setSize(com.spoonconsulting.lightning.enums.ModalSize.SMALL);
            this.body.addChild(new JSContainer("p").setHtml("Show rows where:").setStyle("padding", "0.5rem 1rem"));
            this.body.addChild(this.plabel);
            this.getContent().addChild(this.body);
            this.getContent().setStyle("padding", "1rem");
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
            const layout: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("layout", "div").setMultipleRows(true);
            const top: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("top", "div").setSize(12);
            const middle: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("middle", "div").setSize(12);
            const bottom: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("bottom", "div").setSize(12);
            layout.addChild(top).addChild(middle).addChild(bottom);
            top.addChild(this.criteria1);
            middle.addChild(this.andOr);
            bottom.addChild(this.criteria2);
            this.getContent().addChild(layout);
            this.cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.getFooter().addChild(this.cancel).addChild(this.ok);
            this.cancel.addEventListener(new AdvancedDateSearch.AdvancedDateSearch$0(this), "click");
            this.ok.addEventListener(new AdvancedDateSearch.AdvancedDateSearch$1(this), "click");
        }

        public getFilter(): Object {
            const result: Object = <Object>new Object();
            if (this.criteria1.getCriteria(result)){
                if (this.criteria2.getCriteria(result)){
                    const sandOr: string = this.andOr.getValue()[0];
                    result["andOr"] = sandOr;
                }
            }
            return result;
        }

        public getFieldName(): string {
            return <string>this.column["fieldName"];
        }

        public getObjectType(): string {
            return this.objectType;
        }

        public refresh(col: Object, objectType: string) {
            const sfType: string = <string>col["sfType"];
            if (sfType === "DATETIME"){
                this.criteria1.setTime(true);
                this.criteria2.setTime(true);
            } else {
                this.criteria1.setTime(false);
                this.criteria2.setTime(false);
            }
            if (col.hasOwnProperty("custom") && col["custom"] != null){
                const cu: Object = <Object>col["custom"];
                const sAndor: string = <string>cu["andOr"];
                const arandor: Array<string> = <any>(new Array<string>());
                arandor.push(sAndor);
                this.andOr.setValue(arandor);
                this.criteria1.setValue(cu);
                this.criteria2.setValue(cu);
            } else {
                const arandor: Array<string> = <any>(new Array<string>());
                arandor.push("and");
                this.andOr.setValue(arandor);
                this.criteria1.setValue(null);
                this.criteria2.setValue(null);
            }
            this.column = col;
            this.objectType = objectType;
            const label: string = <string>col["label"];
            this.plabel.setHtml(label);
        }
    }
    AdvancedDateSearch["__class"] = "sp.datagrid.AdvancedDateSearch";
    AdvancedDateSearch["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace AdvancedDateSearch {

        export class DateCriteria extends com.spoonconsulting.lightning.Layout {
            public __parent: any;
            operators: input.JSSelect;

            fromDate: input.JSDateInput;

            toDate: input.JSDateInput;

            item2: com.spoonconsulting.lightning.LayoutItem;

            time: boolean;

            public constructor(__parent: any, name: string) {
                super(name, "div");
                this.__parent = __parent;
                this.operators = new input.JSSelect("operators");
                this.fromDate = new input.JSDateInput("from");
                this.toDate = new input.JSDateInput("to");
                this.item2 = new com.spoonconsulting.lightning.LayoutItem("2", "div").setSize(4);
                this.time = false;
                this.setMultipleRows(true);
                const item0: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("0", "div").setSize(4);
                const item1: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("1", "div").setSize(4);
                this.fromDate.setRequired(true);
                this.toDate.setRequired(true);
                item0.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL).addChild(this.operators.addClass("slds-input"));
                item1.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL).addChild(this.fromDate.addClass("slds-input"));
                this.item2.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL).addChild(this.toDate.addClass("slds-input"));
                this.addChild(item0).addChild(item1).addChild(this.item2);
                this.operators.addOption("equals", "=");
                this.operators.addOption("not equal", "!=");
                this.operators.addOption("greater", ">");
                this.operators.addOption("greater or equal", ">=");
                this.operators.addOption("less", "<");
                this.operators.addOption("less or equal", "<=");
                this.operators.addOption("between", "between");
                this.operators.setValue("=");
                this.operators.addEventListener(new DateCriteria.DateCriteria$0(this), "change");
            }

            public setValue(cu: Object) {
                if (cu != null){
                    const oper: string = <string>cu["operator" + this.getName()];
                    this.operators.setValue(oper);
                    const vals: Array<string> = <Array<string>>cu["value" + this.getName()];
                    const sfrom: string = vals[0].split("T")[0];
                    (<HTMLInputElement>this.fromDate.getElement()).value = sfrom;
                    if (oper === "between"){
                        this.item2.setStyle("display", null);
                        const sto: string = vals[1].split("T")[0];
                        (<HTMLInputElement>this.toDate.getElement()).value = sto;
                    } else {
                        this.item2.setStyle("display", "none");
                    }
                } else {
                    this.operators.setValue("=");
                    this.item2.setStyle("display", "none");
                }
            }

            public setTime(b: boolean) {
                this.time = b;
                if (b){
                    this.fromDate.setAttribute("type", "date");
                    this.toDate.setAttribute("type", "date");
                } else {
                    this.fromDate.setAttribute("type", "date");
                    this.toDate.setAttribute("type", "date");
                }
            }

            checkValidity(): boolean {
                const elem: HTMLInputElement = (<HTMLInputElement>this.fromDate.getElement());
                if (!elem.checkValidity()){
                    const val: Function = <Function>elem["reportValidity"];
                    val.call(elem);
                    return false;
                }
                const oper: string = <string>this.operators.getValue();
                if (oper === "between"){
                    const elto: HTMLInputElement = (<HTMLInputElement>this.toDate.getElement());
                    if (!elto.checkValidity()){
                        const val: Function = <Function>elto["reportValidity"];
                        val.call(elem);
                        return false;
                    }
                }
                return true;
            }

            public getCriteria(result: Object): boolean {
                if (this.checkValidity()){
                    const oper: string = <string>this.operators.getValue();
                    let dfrom: string = (<HTMLInputElement>this.fromDate.getElement()).value;
                    if (this.time){
                        dfrom = dfrom + "T00:00:00.000+00:00";
                    }
                    const suffix: string = this.getName();
                    result["operator" + suffix] = oper;
                    const val: Array<string> = <any>(new Array<string>());
                    if (oper !== "between"){
                        val.push(dfrom);
                    } else {
                        const elto: HTMLInputElement = (<HTMLInputElement>this.toDate.getElement());
                        let dto: string = elto.value;
                        if (this.time){
                            dto = dto + "T23:59:00.000+00:00";
                        }
                        val.push(dfrom, dto);
                    }
                    result["value" + suffix] = val;
                    return true;
                } else {
                    return false;
                }
            }
        }
        DateCriteria["__class"] = "sp.datagrid.AdvancedDateSearch.DateCriteria";
        DateCriteria["__interfaces"] = ["framework.components.api.Renderable"];



        export namespace DateCriteria {

            export class DateCriteria$0 implements api.EventListener {
                public __parent: any;
                /**
                 * 
                 * @param {*} source
                 * @param {Event} evt
                 */
                public performAction(source: api.Renderable, evt: Event) {
                    const value: string = <string>this.__parent.operators.getValue();
                    if (value === "between"){
                        this.__parent.item2.setStyle("display", null);
                    } else {
                        this.__parent.item2.setStyle("display", "none");
                    }
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            DateCriteria$0["__interfaces"] = ["framework.components.api.EventListener"];


        }


        export class AdvancedDateSearch$0 implements api.EventListener {
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
        AdvancedDateSearch$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class AdvancedDateSearch$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const hg: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                const fi: Object = this.__parent.getFilter();
                if (fi.hasOwnProperty("andOr")){
                    hg.saveCustomFilter(this.__parent.getFieldName(), this.__parent.getObjectType(), this.__parent.getFilter(), (a) => {
                        this.__parent.close();
                        this.__parent.getParent().render();
                        return null;
                    });
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AdvancedDateSearch$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
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
            this.operators.addOption("starts with", "starts");
            this.operators.addOption("ends with", "ends");
            this.operators.addClass("slds-input");
            this.operators2.addOption("equals", "=");
            this.operators2.addOption("greater", ">");
            this.operators2.addOption("greater or equal", ">=");
            this.operators2.addOption("less", "<");
            this.operators2.addOption("less or equal", "<=");
            this.operators2.addOption("contains", "contains");
            this.operators2.addOption("starts with", "starts");
            this.operators2.addOption("ends with", "ends");
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
            this.getFooter().addChild(this.cancel).addChild(this.ok);
            this.cancel.addEventListener(new AdvancedSearch.AdvancedSearch$0(this), "click");
            this.ok.addEventListener(new AdvancedSearch.AdvancedSearch$1(this), "click");
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
            const sfType: string = <string>col["sfType"];
            if (sfType === "CURRENCY" || sfType === "DOUBLE" || sfType === "INTEGER" || sfType === "PERCENT"){
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
                this.operators.addOption("starts with", "starts");
                this.operators.addOption("ends with", "ends");
                this.operators2.addOption("equals", "=");
                this.operators2.addOption("not equal", "!=");
                this.operators2.addOption("contains", "contains");
                this.operators2.addOption("starts with", "starts");
                this.operators2.addOption("ends with", "ends");
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
    AdvancedSearch["__class"] = "sp.datagrid.AdvancedSearch";
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
                const hg: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                hg.saveCustomFilter(this.__parent.getFieldName(), this.__parent.getObjectType(), this.__parent.getFilter(), (a) => {
                    this.__parent.close();
                    this.__parent.getParent().render();
                    return null;
                });
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AdvancedSearch$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ApexHomePageService implements sp.datagrid.HompPageService {
        public static container: Object; public static container_$LI$(): Object { if (ApexHomePageService.container == null) { ApexHomePageService.container = <Object>new Object(); }  return ApexHomePageService.container; }

        /**
         * 
         * @param {string} objectType
         * @return {Promise}
         */
        public getFilters(objectType: string): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getFilters"];
            const params: Object = <Object>new Object();
            params["objectType"] = objectType;
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} objectType
         * @return {Promise}
         */
        public getRecordTypes(objectType: string): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getRecordTypes"];
            const params: Object = <Object>new Object();
            params["objectType"] = objectType;
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} objectType
         * @param {string} label
         * @return {Promise}
         */
        public createNewFilter(objectType: string, label: string): Promise<Object> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["createNewFilter"];
            const params: Object = <Object>new Object();
            params["objectType"] = objectType;
            params["label"] = label;
            const pr: Promise<Object> = <Promise<Object>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} IdToDelete
         * @return {Promise}
         */
        public deleteFilter(IdToDelete: string): Promise<Object> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["deleteFilter"];
            const params: Object = <Object>new Object();
            params["IdToDelete"] = IdToDelete;
            const pr: Promise<Object> = <Promise<Object>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} IdToRename
         * @param {string} label
         */
        public renameFilter(IdToRename: string, label: string) {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["renameFilter"];
            const params: Object = <Object>new Object();
            params["IdToRename"] = IdToRename;
            params["label"] = label;
            fn.call(fn, params);
        }

        /**
         * 
         * @param {string} IdToClone
         * @param {string} label
         * @return {Promise}
         */
        public cloneFilter(IdToClone: string, label: string): Promise<Object> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["cloneFilter"];
            const params: Object = <Object>new Object();
            params["IdToClone"] = IdToClone;
            params["label"] = label;
            const pr: Promise<Object> = <Promise<Object>>fn.call(fn, params);
            return pr;
        }

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

        /**
         * 
         * @param {number} page
         * @param {string} filter
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        public getCases(page: number, filter: string, objectType: string, filterId: string): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getCases"];
            const params: Object = <Object>new Object();
            params["page"] = page;
            params["filter"] = filter;
            params["objectType"] = objectType;
            params["filterId"] = filterId;
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @return {Promise}
         */
        public getCustomerPortalUsers(): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getCustomerPortalUsers"];
            const params: Object = <Object>new Object();
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @return {Promise}
         */
        public getQueues(): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getQueues"];
            const params: Object = <Object>new Object();
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} txt
         * @return {Promise}
         */
        public getUsers(txt: string): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getUsers"];
            const params: Object = <Object>new Object();
            params["txt"] = txt;
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} fieldName
         * @param {string} txt
         * @param {number} page
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        public getFieldValues(fieldName: string, txt: string, page: number, objectType: string, filterId: string): Promise<Array<Object>> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getFieldValues"];
            const params: Object = <Object>new Object();
            params["fieldName"] = fieldName;
            params["txt"] = txt;
            params["page"] = page;
            params["objectType"] = objectType;
            params["filterId"] = filterId;
            const pr: Promise<Array<Object>> = <Promise<Array<Object>>>fn.call(fn, params);
            return pr;
        }

        public getFieldDateTimeTree(fieldName: string, objectType: string): Promise<sp.datagrid.DateTimeTree> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getFieldDateTimeTree"];
            const params: Object = <Object>new Object();
            params["fieldName"] = fieldName;
            params["objectType"] = objectType;
            const pr: Promise<sp.datagrid.DateTimeTree> = <Promise<sp.datagrid.DateTimeTree>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
<<<<<<< HEAD
=======
         * @return {Promise}
         */
        public getBranches(): Promise<string> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["getBranches"];
            const pr: Promise<string> = <Promise<string>>fn.call(fn);
            return pr;
        }

        /**
         * 
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
         * @param {string} ownerId
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public changeOwner(ownerId: string, caseIds: Array<string>): Promise<string> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["changeOwner"];
            const params: Object = <Object>new Object();
            params["ownerId"] = ownerId;
            params["caseIds"] = caseIds;
            const pr: Promise<string> = <Promise<string>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} filterId
         * @param {string} objectType
         * @return {Promise}
         */
        public pinFilter(filterId: string, objectType: string): Promise<string> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["pinFilter"];
            const params: Object = <Object>new Object();
            params["filterId"] = filterId;
            params["objectType"] = objectType;
            const pr: Promise<string> = <Promise<string>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string} status
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public closeCases(status: string, caseIds: Array<string>): Promise<string> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["closeCases"];
            const params: Object = <Object>new Object();
            params["status"] = status;
            params["caseIds"] = caseIds;
            const pr: Promise<string> = <Promise<string>>fn.call(fn, params);
            return pr;
        }

        /**
         * 
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public mergeCases(caseIds: Array<string>): Promise<string> {
            const fn: Function = <Function>ApexHomePageService.container_$LI$()["mergeCases"];
            const params: Object = <Object>new Object();
            params["caseIds"] = caseIds;
            const pr: Promise<string> = <Promise<string>>fn.call(fn, params);
            return pr;
        }

        constructor() {
        }
    }
    ApexHomePageService["__class"] = "sp.datagrid.ApexHomePageService";
    ApexHomePageService["__interfaces"] = ["sp.datagrid.HompPageService"];


}
namespace sp.datagrid {
    export class App {
        public static main(args: string[]) {
            eval("window.sp = sp;");
        }
    }
    App["__class"] = "sp.datagrid.App";

}
namespace sp.datagrid {
    export class AppHeader extends com.spoonconsulting.lightning.Layout {
        /*private*/ actChangeOwner: com.spoonconsulting.lightning.Button;

        /*private*/ actNew: com.spoonconsulting.lightning.Button;

        /*private*/ actNewTask: com.spoonconsulting.lightning.Button;

        /*private*/ actMerge: com.spoonconsulting.lightning.Button;

        /*private*/ modalChangeOwner: sp.datagrid.ModalChangeOwner;

        /*private*/ modalMergeCase: sp.datagrid.ModalMergeCases;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ grid_: sp.datagrid.DataGrid;

<<<<<<< HEAD
        public constructor(name: string, grid: sp.datagrid.DataGrid) {
=======
        public constructor(name: string, grid: sp.datagrid.DataGrid, dry: boolean) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            super(name, "div");
            this.actChangeOwner = new com.spoonconsulting.lightning.Button("changeOwner").setLabel("Change Owner").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.actNew = new com.spoonconsulting.lightning.Button("new").setLabel("New Case").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.actNewTask = new com.spoonconsulting.lightning.Button("new").setLabel("New Task").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.actMerge = new com.spoonconsulting.lightning.Button("merge").setLabel("Merge Cases").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.modalChangeOwner = new sp.datagrid.ModalChangeOwner("changeOwner");
            this.modalMergeCase = new sp.datagrid.ModalMergeCases("mergeCases");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            if (this.grid_ === undefined) { this.grid_ = null; }
            this.setMultipleRows(true);
            this.grid_ = grid;
<<<<<<< HEAD
            const topLeft: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("topLeft", "div").setSize(4).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
            const topRight: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("topRight", "div").setSize(8).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
=======
            const topLeft: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("topLeft", "div").setSize(5).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
            const topRight: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("topRight", "div").setSize(7).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.addChild(topLeft).addChild(topRight);
            const actGroup: com.spoonconsulting.lightning.ButtonGroup = new com.spoonconsulting.lightning.ButtonGroup("actions");
            topRight.addChild(actGroup).setStyle("text-align", "right");
            actGroup.addButton(this.actNew).addButton(this.actChangeOwner).addButton(this.actMerge);
<<<<<<< HEAD
=======
            const la: JSContainer = new JSContainer("h3");
            la.setStyle("font-weight", "bold").setStyle("font-size", "14px");
            topLeft.addChild(la);
            if (!dry){
                sp.datagrid.Util.getService().getBranches().then(((la,topLeft) => {
                    return (r) => {
                        if (r != null){
                            const s: string = /* replaceAll */r.replace(new RegExp(";", 'g'),", ");
                            if (/* contains */(r.indexOf(";") != -1))la.setHtml("My branches are: " + s); else la.setHtml("My branch is: " + s);
                            topLeft.setRendered(false);
                            topLeft.render();
                        }
                    }
                })(la,topLeft));
            }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.actMerge.addEventListener(new AppHeader.AppHeader$0(this), "click");
            this.actNew.addEventListener(new AppHeader.AppHeader$1(this), "click");
            this.actNewTask.addEventListener(new AppHeader.AppHeader$2(this), "click");
            this.actChangeOwner.addEventListener(new AppHeader.AppHeader$3(this), "click");
            this.addChild(this.modalChangeOwner);
            this.modalChangeOwner.setBackdrop(this.bd);
            this.addChild(this.modalMergeCase);
            this.modalMergeCase.setBackdrop(this.bd);
            this.addChild(this.bd);
        }
    }
    AppHeader["__class"] = "sp.datagrid.AppHeader";
    AppHeader["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace AppHeader {

        export class AppHeader$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const selected: Array<string> = this.__parent.grid_.getSelectedIds();
                if (selected.length > 0){
                    const gris: sp.datagrid.Grids = <any>(this.__parent.getAncestorWithClass("Grids"));
                    this.__parent.modalMergeCase.refresh(gris);
                    this.__parent.modalMergeCase.open();
                } else {
                    alert("Please select one or more cases from the table below");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AppHeader$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class AppHeader$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const gri: sp.datagrid.Grids = <any>(source.getAncestorWithClass<any>("Grids"));
                evt["objectType"] = "Case";
                gri.fireListener("createNew", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AppHeader$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class AppHeader$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const gri: sp.datagrid.Grids = <any>(source.getAncestorWithClass<any>("Grids"));
                evt["objectType"] = "Task";
                gri.fireListener("createNew", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AppHeader$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class AppHeader$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const selected: Array<string> = this.__parent.grid_.getSelectedIds();
                if (selected.length > 0){
                    this.__parent.modalChangeOwner.refresh(this.__parent.grid_);
                    this.__parent.modalChangeOwner.open();
                } else {
                    alert("Please select one or more cases from the table below");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AppHeader$3["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class DataCell extends JSContainer {
        value: any;

        div: JSContainer;

        public constructor(name: string, txt: string) {
            super(name, "td");
            if (this.value === undefined) { this.value = null; }
            this.div = new JSContainer("div");
            this.setAttribute("role", "gridcell");
            this.div.setAttribute("title", txt).addClass("slds-truncate").setHtml(txt);
            this.addChild(this.div);
            this.value = txt;
        }

        public setText(txt: string) {
            this.div.setAttribute("title", txt).setHtml(txt);
        }

        public setAlign(dir: string) {
            this.removeClass("slds-text-align_right");
            this.removeClass("slds-text-align_center");
            if (dir === "right"){
                this.addClass("slds-text-align_right");
            } else if (dir === "center"){
                this.addClass("slds-text-align_center");
            }
        }

        public getValue(): any {
            return this.value;
        }
    }
    DataCell["__class"] = "sp.datagrid.DataCell";
    DataCell["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace sp.datagrid {
    export class DataGrid extends JSContainer {
        /*private*/ columns: Array<Object>;

        /*private*/ data: Array<Object>;

        /*private*/ header: JSContainer;

        /*private*/ body: JSContainer;

        /*private*/ __orderBy: string;

        /*private*/ orderByDir: string;

        /*private*/ tableHeaders: Array<sp.datagrid.DataGridHeader>;

        /*private*/ pageSize: number;

        /*private*/ currentPage: number;

        /*private*/ lastPage: boolean;

        /*private*/ filters: Object;

        /*private*/ type: string;

        /*private*/ loading: boolean;

        public constructor(name: string, type: string) {
            super(name, "table");
            this.columns = <any>(new Array<Object>());
            this.data = <any>(new Array<Object>());
            this.header = new JSContainer("head", "thead");
            this.body = new JSContainer("body", "tbody");
            this.__orderBy = "CaseNumber";
            this.orderByDir = "ASC";
            this.tableHeaders = <any>(new Array<sp.datagrid.DataGridHeader>());
<<<<<<< HEAD
            this.pageSize = 10;
=======
            this.pageSize = 20;
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.currentPage = 0;
            this.lastPage = false;
            this.filters = <Object>new Object();
            if (this.type === undefined) { this.type = null; }
            this.loading = false;
            this.type = type;
            this.addClass("DataGrid");
            this.addClass("slds-table").addClass("slds-table_bordered").addClass("slds-table_fixed-layout");
            this.setStyle("position", "relative");
            this.addChild(this.header);
            this.addChild(this.body);
            document.addEventListener("click", (e) => {
                const dps: NodeList = document.querySelectorAll(".slds-dropdown");
                const triggers: NodeList = document.querySelectorAll(".slds-dropdown-trigger");
                let istrigger: boolean = false;
                let bypass: boolean = false;
                for(let index121=0; index121 < triggers.length; index121++) {
                    let trigger = triggers[index121];
                    {
                        const elem: HTMLElement = <HTMLElement>trigger;
                        if (elem.classList.contains("except")){
                            bypass = true;
                            break;
                        }
                        if (trigger.contains(<Node>e.target)){
                            istrigger = true;
                            break;
                        }
                    }
                }
<<<<<<< HEAD
                if (!istrigger && !bypass){
                    dps.forEach((n) => {
                        if (!n.contains(<Node>e.target)){
                            const el: HTMLElement = <HTMLElement>n;
                            el.style.display = "none";
                        }
                    });
=======
                try {
                    if (!istrigger && !bypass){
                        dps.forEach((n) => {
                            if (!n.contains(<Node>e.target)){
                                const el: HTMLElement = <HTMLElement>n;
                                el.style.display = "none";
                            }
                        });
                    }
                } catch(ee) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                }
            });
            this.addEventListener(new DataGrid.DataGrid$0(this), "sorting");
            this.addEventListener(new DataGrid.DataGrid$1(this), "filterIncludes");
        }

        public refreshList() {
            this.currentPage = 0;
            this.lastPage = false;
            const gr: sp.datagrid.HeavyGrid = <any>(this.getAncestorWithClass<any>("HeavyGrid"));
            gr.doRefreshList();
        }

        public setFilters(filters: Object) {
            this.filters = filters;
            this.columns = <any>(new Array<Object>());
            {
                let array123 = Object.keys(filters);
                for(let index122=0; index122 < array123.length; index122++) {
                    let fieldName = array123[index122];
                    {
                        const col: Object = <Object>filters[fieldName];
                        this.columns.push(col);
                    }
                }
            }
            this.sortColumns();
            this.setColumns(this.columns);
        }

        public setCustomFilter(field: string, fil: Object) {
            const f: Object = <Object>this.filters[field];
            f["custom"] = fil;
            this.columns = <any>(new Array<Object>());
            {
                let array125 = Object.keys(this.filters);
                for(let index124=0; index124 < array125.length; index124++) {
                    let fieldName = array125[index124];
                    {
                        const col: Object = <Object>this.filters[fieldName];
                        this.columns.push(col);
                    }
                }
            }
            this.sortColumns();
        }

        public sortColumns() {
            const objs: Object[] = this.columns.sort((a, b) => {
                const pos1: number = <number>a["position"];
                const pos2: number = <number>b["position"];
                const res: number = /* compareTo */(<any>((o1: any, o2: any) => { if (o1 && o1.compareTo) { return o1.compareTo(o2); } else { return o1 < o2 ? -1 : o2 < o1 ? 1 : 0; } })(pos1,pos2));
                return /* doubleValue */res;
            });
            this.columns = <any>(new Array<Object>());
            for(let index126=0; index126 < objs.length; index126++) {
                let obj = objs[index126];
                {
                    this.columns.push(obj);
                }
            }
        }

        public getColumns(): Array<Object> {
            return this.columns;
        }

        public getSelectedIds(): Array<string> {
            const ids: Array<string> = <any>(new Array<string>());
            {
                let array128 = this.getRows();
                for(let index127=0; index127 < array128.length; index127++) {
                    let row = array128[index127];
                    {
                        if (row.isSelected()){
                            ids.push(<string>row.getData()["Id"]);
                        }
                    }
                }
            }
            return ids;
        }

        public showColumns(cols: Array<string>) {
            {
                let array130 = Object.keys(this.filters);
                for(let index129=0; index129 < array130.length; index129++) {
                    let fieldName = array130[index129];
                    {
                        const index: number = cols.indexOf(fieldName);
                        const filter: Object = <Object>this.filters[fieldName];
                        if (index < 0){
                            filter["hidden"] = true;
                        } else {
                            filter["hidden"] = false;
                        }
                        filter["position"] = index;
                    }
                }
            }
            for(let index131=0; index131 < this.columns.length; index131++) {
                let col = this.columns[index131];
                {
                    const name: string = <string>col["fieldName"];
                    let filter: Object = <Object>this.filters[name];
                    if (filter == null){
                        filter = <Object>new Object();
                        this.filters[name] = filter;
                    }
                    col["position"] = filter["position"];
                    if (cols.indexOf(name) < 0){
                        col["hidden"] = true;
                        filter["hidden"] = true;
                    } else {
                        col["hidden"] = false;
                        filter["hidden"] = false;
                    }
                }
            }
            this.sortColumns();
            this.setColumns(this.columns);
            this.refreshList();
        }

        public getFilters(): Object {
            return this.filters;
        }

        public setColumns(cols: Array<Object>) {
            this.columns = cols;
            this.tableHeaders = <any>(new Array<sp.datagrid.DataGridHeader>());
            this.header.clearChildren();
            this.header.setRendered(false);
            const hrow: JSContainer = new JSContainer("tr");
            this.header.addChild(hrow);
            hrow.addClass("slds-line-height_reset");
            const num: JSContainer = new JSContainer("th").setStyle("width", "42px");
            num.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
            num.setHtml("&nbsp;");
            hrow.addChild(num);
            const select: JSContainer = new JSContainer("th").setStyle("width", "30px");
            select.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
            select.addChild(this.createHeaderSelect());
            hrow.addChild(select);
            const length: number = cols.length;
            let index: number = 0;
            for(let index132=0; index132 < cols.length; index132++) {
                let col = cols[index132];
                {
                    const hidden: boolean = <boolean>col["hidden"];
<<<<<<< HEAD
                    if (hidden == null || !hidden){
=======
                    const display: boolean = <boolean>col["display"];
                    if ((hidden == null || !hidden) && (display == null || display)){
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        const width: number = <number>col["width"];
                        let hasQuery: boolean = false;
                        if (col.hasOwnProperty("includes")){
                            const incl: Array<string> = <Array<string>>col["includes"];
                            if (incl.length > 0){
                                hasQuery = true;
                            }
                        }
                        if (col.hasOwnProperty("custom")){
                            hasQuery = true;
                        }
                        const uicol: sp.datagrid.DataGridHeader = this.createStringHead(col);
                        hrow.addChild(uicol);
                        index++;
                        if (index >= length - 3){
                            uicol.setMenuAlignment(com.spoonconsulting.lightning.enums.MenuAlignment.RIGHT);
                        }
                        if (width != null){
                            uicol.setStyle("width", width + "rem");
                        }
                        if (hasQuery){
                            uicol.addClass("hasquery");
                        } else {
                            uicol.removeClass("hasquery");
                        }
                    }
                }
            }
            const act: JSContainer = new JSContainer("th").setStyle("width", "32px");
            act.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
            act.setHtml("&nbsp;");
            hrow.addChild(act);
        }

        public setColumnWidth(name: string, width: number) {
            let filter: Object = <Object>this.filters[name];
            if (filter == null){
                filter = <Object>new Object();
                this.filters[name] = filter;
            }
            filter["width"] = width;
        }

        /*private*/ createStringHead(col: Object): sp.datagrid.DataGridHeader {
            const name: string = <string>col["fieldName"];
            const h: sp.datagrid.DataGridHeader = new sp.datagrid.DataGridHeader(name, col, this.type);
            if (name === "CaseNumber")h.setOrderByDir("ASC"); else h.setOrderByDir("none");
            this.tableHeaders.push(h);
            return h;
        }

        public setData(data: Array<Object>) {
            this.data = data;
            this.body.clearChildren();
            this.body.setRendered(false);
            this.currentPage = 0;
            this.lastPage = false;
            this.addPage();
            delete this.getParent().getListeners()["scroll"];
            this.infiniteTable();
        }

        public refresh() {
            for(let index133=0; index133 < this.tableHeaders.length; index133++) {
                let header = this.tableHeaders[index133];
                {
                    header.refresh();
                }
            }
        }

        public getBody(): JSContainer {
            return this.body;
        }

        public addPage() {
            const start: number = this.currentPage * this.pageSize;
            let end: number = start + this.pageSize;
            if (this.data.length < end){
                end = this.data.length;
            }
            for(let i: number = start; i < end; i++) {{
                const row: sp.datagrid.DataRow = new sp.datagrid.DataRow("", this.type);
                const line: Object = this.data[i];
                row.setData(line, this.columns);
                this.body.addChild(row);
            };}
        }

        public retrievePage() {
            if (!this.lastPage){
                const page: number = /* parseInt */parseInt(this.getCurrentPage() + "");
                const hg: sp.datagrid.HeavyGrid = <any>(this.getAncestorWithClass<any>("HeavyGrid"));
                const filterId: string = hg.getFilterId();
                this.loading = true;
                sp.datagrid.Util.getService().getCases(page, JSON.stringify(this.filters), this.type, filterId).then((result) => {
                    this.addNewPage(result);
                    this.loading = false;
                });
            }
        }

        public addNewPage(data: Array<Object>) {
            if (data.length > 0){
                for(let index134=0; index134 < data.length; index134++) {
                    let o = data[index134];
                    {
                        this.data.push(o);
                    }
                }
                this.addPage();
                this.body.setRendered(false);
                this.body.render();
            }
<<<<<<< HEAD
            if (data.length < 10){
=======
            if (data.length < 20){
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                this.lastPage = true;
            }
        }

        public getCurrentPage(): number {
            return this.currentPage;
        }

        public infiniteTable() {
            if (!this.getParent().hasListenerOfType("scroll")){
                this.getParent().addEventListener(new DataGrid.DataGrid$2(this), "scroll");
            }
        }

        public getRows(): Array<sp.datagrid.DataRow> {
            const rows: Array<any> = this.body.getChildren();
            return rows;
        }

        /*private*/ createHeaderSelect(): JSContainer {
            const div: JSContainer = new JSContainer("div");
            div.addClass("slds-th__action slds-th__action_form");
            const checkbox: com.spoonconsulting.lightning.CheckBox = new com.spoonconsulting.lightning.CheckBox("cb");
            checkbox.addEventListener(new DataGrid.DataGrid$3(this, checkbox), "change");
            div.addChild(checkbox);
            return div;
        }

        public getOrderBy(): string {
            return this.__orderBy;
        }

        public getOrderByDir(): string {
            return this.orderByDir;
        }

        public setOrderBy(orderBy: string) {
            this.__orderBy = orderBy;
        }

        public setOrderByDir(orderByDir: string) {
            this.orderByDir = orderByDir;
        }

        public orderBy(name: string, dir: string) {
            for(let index135=0; index135 < this.tableHeaders.length; index135++) {
                let he = this.tableHeaders[index135];
                {
                    if (he.getName() === name){
                        he.setOrderByDir(dir);
                    } else {
                        he.setOrderByDir("none");
                    }
                }
            }
            this.__orderBy = name;
            this.orderByDir = dir;
            const evt: CustomEvent = new CustomEvent("orderby");
            evt["orderBy"] = name;
            evt["orderByDir"] = dir;
            this.fireListener("orderby", evt);
        }
    }
    DataGrid["__class"] = "sp.datagrid.DataGrid";
    DataGrid["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace DataGrid {

        export class DataGrid$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const fieldName: string = <string>evt["fieldName"];
                const sortDir: string = <string>evt["sortDir"];
                const onOff: string = <string>evt["onOff"];
                let filter: Object = <Object>this.__parent.filters[fieldName];
                if (filter == null){
                    filter = <Object>new Object();
                    this.__parent.filters[fieldName] = filter;
                }
                if (onOff === "on"){
                    filter["sorting"] = sortDir;
                } else {
                    delete filter["sorting"];
                }
                this.__parent.filters[fieldName] = filter;
                this.__parent.refreshList();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DataGrid$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class DataGrid$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const fieldName: string = <string>evt["fieldName"];
                const inclopts: Array<Object> = <Array<Object>>evt["options"];
                const includes: Array<string> = <any>(new Array<string>());
                for(let index136=0; index136 < inclopts.length; index136++) {
                    let o = inclopts[index136];
                    {
                        includes.push(<string>o["value"]);
                    }
                }
                let filter: Object = <Object>this.__parent.filters[fieldName];
                if (filter == null){
                    filter = <Object>new Object();
                    this.__parent.filters[fieldName] = filter;
                }
                filter["includes"] = includes;
                if (<boolean>evt["clearFilter"]){
                    delete filter["custom"];
                }
                this.__parent.filters[fieldName] = filter;
                this.__parent.refreshList();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DataGrid$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class DataGrid$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const div: HTMLElement = source.getElement();
                for(let index137=0; index137 < this.__parent.tableHeaders.length; index137++) {
                    let he = this.__parent.tableHeaders[index137];
                    {
                        he.getAction().positionDropdown(evt);
                    }
                }
                if (!this.__parent.loading && !this.__parent.lastPage){
                    if ((div.scrollTop + div.clientHeight + 20) > div.scrollHeight){
                        this.__parent.currentPage++;
                        console.info("currentPage:" + this.__parent.currentPage);
                        this.__parent.retrievePage();
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        DataGrid$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class DataGrid$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const selected: boolean = this.checkbox.getValue();
                {
                    let array139 = this.__parent.getRows();
                    for(let index138=0; index138 < array139.length; index138++) {
                        let row = array139[index138];
                        {
                            row.setSelected(selected);
                        }
                    }
                }
            }

            constructor(__parent: any, private checkbox: any) {
                this.__parent = __parent;
            }
        }
        DataGrid$3["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class DataGridHeader extends JSContainer {
        /*private*/ column: Object;

        /*private*/ action: sp.datagrid.HeaderAction;

        /*private*/ orderByDir: string;

        public constructor(name: string, col: Object, objectType: string) {
            super(name, "th");
            this.column = null;
            this.action = null;
            this.orderByDir = "none";
            this.addClass("DataGridHeader");
            this.setStyle("width", "5rem");
            this.column = col;
            const label: string = <string>col["label"];
            this.setStyle("padding", "0").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
            this.addClass("slds-has-button-menu slds-is-sortable");
            const a: JSContainer = new JSContainer(name, "a");
            this.addChild(a);
            a.addClass("slds-th__action slds-text-link_reset");
            a.setAttribute("href", "javascript:void(0);");
            const div: JSContainer = new JSContainer(name, "div");
            div.addClass("slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate");
            a.addChild(div);
            const span: JSContainer = new JSContainer("label", "span").addClass("slds-truncate").setHtml(label).setAttribute("title", label);
            div.addChild(span);
            this.action = new sp.datagrid.HeaderAction("action", col, objectType);
            this.addChild(this.action);
            a.addEventListener(new DataGridHeader.DataGridHeader$0(this, name), "click");
        }

        public getColumn(): Object {
            return this.column;
        }

        public setHasQuery() {
            let hasQuery: boolean = false;
            if (this.column.hasOwnProperty("includes")){
                const incl: Array<string> = <Array<string>>this.column["includes"];
                if (incl.length > 0){
                    hasQuery = true;
                }
            }
            if (this.column.hasOwnProperty("custom")){
                hasQuery = true;
            }
            if (hasQuery){
                this.addClass("hasquery");
            } else {
                this.removeClass("hasquery");
            }
            this.render();
        }

        public setOrderByDir(dir: string) {
            this.orderByDir = dir;
        }

        public getAction(): sp.datagrid.HeaderAction {
            return this.action;
        }

        public setMenuAlignment(alignment: com.spoonconsulting.lightning.enums.MenuAlignment) {
            this.action.setMenuAlignment(alignment);
        }

        public setWidth(width: number) {
            this.setStyle("width", width + "rem");
            this.column["width"] = width;
        }

        public refresh() {
            this.action.refresh();
            this.setHasQuery();
        }
    }
    DataGridHeader["__class"] = "sp.datagrid.DataGridHeader";
    DataGridHeader["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace DataGridHeader {

        export class DataGridHeader$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const grid: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("slds-table"));
                if (this.__parent.orderByDir === "ASC"){
                    this.__parent.orderByDir = "DESC";
                } else {
                    this.__parent.orderByDir = "ASC";
                }
                grid.orderBy(this.name, this.__parent.orderByDir);
            }

            constructor(__parent: any, private name: any) {
                this.__parent = __parent;
            }
        }
        DataGridHeader$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class DataRow extends JSContainer {
        /*private*/ data: Object;

        /*private*/ columns: Array<Object>;

        /*private*/ num: sp.datagrid.DataCell;

        /*private*/ select: sp.datagrid.BooleanDataCell;

        objectType: string;

        public constructor(name: string, objectType: string) {
            super(name, "tr");
            this.data = null;
            this.columns = null;
            this.num = new sp.datagrid.DataCell("num", "");
            this.select = new sp.datagrid.BooleanDataCell("select", false);
            if (this.objectType === undefined) { this.objectType = null; }
            this.objectType = objectType;
            this.addClass("slds-hint-parent");
        }

        public setData(data: Object, cols: Array<Object>) {
            this.data = data;
            this.columns = cols;
            this.addChild(this.num);
            this.num.getChildren()[0].addClass("slds-row-number");
            this.addChild(this.select);
            for(let index140=0; index140 < cols.length; index140++) {
                let col = cols[index140];
                {
                    const name: string = <string>col["fieldName"];
                    const type: string = <string>col["type"];
                    const hidden: boolean = <boolean>col["hidden"];
<<<<<<< HEAD
                    if (hidden == null || !hidden){
=======
                    const display: boolean = <boolean>col["display"];
                    if ((hidden == null || !hidden) && display == null || display){
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        let val: any = sp.datagrid.Util.extractVal(data, name, type);
                        if (name === "CaseNumber"){
                            const cell: sp.datagrid.ClickableDataCell = new sp.datagrid.ClickableDataCell(name, <string>val, <string>data["Id"]);
                            this.addChild(cell);
                        } else if (name === "Subject"){
                            if (val === "" || val == null){
                                val = "---";
                            }
                            const cell: sp.datagrid.ClickableDataCell = new sp.datagrid.ClickableDataCell(name, <string>val, <string>data["Id"]);
                            this.addChild(cell);
                        } else if (type === "Boolean"){
                            const cell: sp.datagrid.BooleanDataCell = new sp.datagrid.BooleanDataCell(name, <boolean>val);
                            this.addChild(cell);
                        } else if (type === "DateTime"){
                            const cell: sp.datagrid.DateDataCell = new sp.datagrid.DateDataCell(name, <Date>val);
                            this.addChild(cell);
                        } else if (/* contains */(name.indexOf(".") != -1)){
                            const path: string[] = name.split(".");
                            const top: Object = <Object>data[path[0]];
                            if (top != null){
                                if (top.hasOwnProperty("attributes")){
                                    const url: string = <string>(<Object>top["attributes"])["url"];
                                    const pathss: string[] = url.split("/");
                                    const id: string = pathss[pathss.length - 1];
                                    const cell: sp.datagrid.ClickableDataCell = new sp.datagrid.ClickableDataCell(name, <string>val, id);
                                    this.addChild(cell);
                                } else {
                                    const id: string = <string>top["Id"];
                                    const cell: sp.datagrid.ClickableDataCell = new sp.datagrid.ClickableDataCell(name, <string>val, id);
                                    this.addChild(cell);
                                }
                            } else {
                                const cell: sp.datagrid.DataCell = new sp.datagrid.DataCell(name, <string>val);
                                this.addChild(cell);
                            }
                        } else {
                            const cell: sp.datagrid.DataCell = new sp.datagrid.DataCell(name, <string>val);
                            this.addChild(cell);
                        }
                    }
                }
            }
            const actions: JSContainer = new JSContainer("td");
            const menu: com.spoonconsulting.lightning.ButtonMenu = new com.spoonconsulting.lightning.ButtonMenu("menu", "div");
            menu.addEventListener(new DataRow.DataRow$0(this, data), "select");
            const edit: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("edit");
            edit.setLabel("Edit").refresh();
            menu.getDropdown().addItem(edit);
            if (this.objectType === "Case"){
                const __delete: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("close");
                __delete.setLabel("Close").refresh();
                menu.getDropdown().addItem(__delete);
            }
            actions.addChild(menu);
            menu.setMenuAlignment(com.spoonconsulting.lightning.enums.MenuAlignment.RIGHT);
            menu.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BARE);
            menu.setButtonSize(com.spoonconsulting.lightning.enums.Size.EXTRA_SMALL);
            this.addChild(actions);
            this.data = data;
        }

        public search(txt: string): boolean {
            if (txt == null || txt.trim().length <= 0){
                this.setStyle("display", null);
                return true;
            }
            const ltxt: string = txt.toLowerCase();
            for(let index141=0; index141 < this.columns.length; index141++) {
                let col = this.columns[index141];
                {
                    const type: string = <string>col["type"];
                    const fieldName: string = <string>col["fieldName"];
                    if (type === "String"){
                        const val: string = <string>sp.datagrid.Util.extractVal(this.data, fieldName, type);
                        if (val != null && val.trim().length > 0){
                            if (/* contains */(val.toLowerCase().indexOf(ltxt) != -1)){
                                this.setStyle("display", null);
                                return true;
                            }
                        }
                    }
                }
            }
            this.setStyle("display", "none");
            return false;
        }

        public setSelected(b: boolean) {
            this.select.setValue(b);
        }

        public isSelected(): boolean {
            return this.select.getValue();
        }

        public getData(): Object {
            return this.data;
        }

        public setNum(num: number) {
            this.num.setText(num.toString());
        }
    }
    DataRow["__class"] = "sp.datagrid.DataRow";
    DataRow["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace DataRow {

        export class DataRow$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const name: string = source.getName();
                console.info(name);
                const src: com.spoonconsulting.lightning.MenuItem = <com.spoonconsulting.lightning.MenuItem>evt["source"];
                if (src.getName() === "edit"){
                    evt["recordId"] = this.data["Id"];
                    const gr: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                    gr.editRecord(evt);
                } else if (src.getName() === "close"){
                    const gr: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                    gr.closeCase(<string>this.data["Id"]);
                }
            }

            constructor(__parent: any, private data: any) {
                this.__parent = __parent;
            }
        }
        DataRow$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class DateSearch extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
        }
    }
    DateSearch["__class"] = "sp.datagrid.DateSearch";
    DateSearch["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace sp.datagrid {
    export class DateTimeTree extends Object {
        public years: Array<DateTimeTree.YearNode>;

        public create(prot: Object): DateTimeTree {
            const tree: DateTimeTree = new DateTimeTree();
            {
                let array143 = <Array<Object>>prot["years"];
                for(let index142=0; index142 < array143.length; index142++) {
                    let year = array143[index142];
                    {
                        const yn: DateTimeTree.YearNode = new DateTimeTree.YearNode(this).create(year);
                        tree.years.push(yn);
                    }
                }
            }
            return tree;
        }

        public getItems(): Array<Object> {
            const items: Array<Object> = <any>(new Array<Object>());
            for(let index144=0; index144 < this.years.length; index144++) {
                let year = this.years[index144];
                {
                    items.push(year.getItem());
                }
            }
            return items;
        }

        public getYear(year: number): DateTimeTree.YearNode {
            for(let index145=0; index145 < this.years.length; index145++) {
                let child = this.years[index145];
                {
                    if (child.year === year)return child;
                }
            }
            const result: DateTimeTree.YearNode = new DateTimeTree.YearNode(this);
            result.year = year;
            this.years.push(result);
            return result;
        }

        public addDate(dt: Date) {
            const year: number = dt.getFullYear();
            const month: number = dt.getMonth() + 1;
            const day: number = dt.getDate();
            this.getYear(year).getMonth(month).getDay(day);
        }

        constructor() {
            super();
            this.years = <any>(new Array<DateTimeTree.YearNode>());
        }
    }
    DateTimeTree["__class"] = "sp.datagrid.DateTimeTree";


    export namespace DateTimeTree {

        export class YearNode extends Object {
            public __parent: any;
            public year: number;

            public children: Array<DateTimeTree.MonthNode>;

            public create(prot: Object): DateTimeTree.YearNode {
                const result: DateTimeTree.YearNode = new DateTimeTree.YearNode(this.__parent);
                result.year = <number>prot["year"];
                {
                    let array147 = <Array<Object>>prot["children"];
                    for(let index146=0; index146 < array147.length; index146++) {
                        let child = array147[index146];
                        {
                            const dn: DateTimeTree.MonthNode = new DateTimeTree.MonthNode(this.__parent).create(child);
                            result.children.push(dn);
                        }
                    }
                }
                return result;
            }

            public getItem(): Object {
                const item: Object = <Object>new Object();
                item["name"] = this.year + "";
                item["label"] = this.year + "";
                const items: Array<Object> = <any>(new Array<Object>());
                item["items"] = items;
                for(let index148=0; index148 < this.children.length; index148++) {
                    let child = this.children[index148];
                    {
                        const titem: Object = child.getItem();
                        items.push(titem);
                    }
                }
                return item;
            }

            public getMonth(month: number): DateTimeTree.MonthNode {
                for(let index149=0; index149 < this.children.length; index149++) {
                    let child = this.children[index149];
                    {
                        if (child.month === month){
                            return child;
                        }
                    }
                }
                const result: DateTimeTree.MonthNode = new DateTimeTree.MonthNode(this.__parent);
                result.month = month;
                this.children.push(result);
                return result;
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
                if (this.year === undefined) { this.year = null; }
                this.children = <any>(new Array<DateTimeTree.MonthNode>());
            }
        }
        YearNode["__class"] = "sp.datagrid.DateTimeTree.YearNode";


        export class MonthNode extends Object {
            public __parent: any;
            public month: number;

            public children: Array<DateTimeTree.DateNode>;

            public create(prot: Object): DateTimeTree.MonthNode {
                const result: DateTimeTree.MonthNode = new DateTimeTree.MonthNode(this.__parent);
                result.month = <number>prot["month"];
                {
                    let array151 = <Array<Object>>prot["children"];
                    for(let index150=0; index150 < array151.length; index150++) {
                        let child = array151[index150];
                        {
                            const dn: DateTimeTree.DateNode = new DateTimeTree.DateNode(this.__parent);
                            dn.day = <number>child["day"];
                            result.children.push(dn);
                        }
                    }
                }
                return result;
            }

            public getItem(): Object {
                const item: Object = <Object>new Object();
                item["name"] = this.month + "";
                item["label"] = this.month + "";
                const items: Array<Object> = <any>(new Array<Object>());
                item["items"] = items;
                for(let index152=0; index152 < this.children.length; index152++) {
                    let child = this.children[index152];
                    {
                        const titem: Object = <Object>new Object();
                        titem["name"] = child.day + "";
                        titem["label"] = child.day + "";
                        items.push(titem);
                    }
                }
                return item;
            }

            public getDay(day: number): DateTimeTree.DateNode {
                for(let index153=0; index153 < this.children.length; index153++) {
                    let child = this.children[index153];
                    {
                        if (child.day === day){
                            return child;
                        }
                    }
                }
                const result: DateTimeTree.DateNode = new DateTimeTree.DateNode(this.__parent);
                result.day = day;
                this.children.push(result);
                return result;
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
                if (this.month === undefined) { this.month = null; }
                this.children = <any>(new Array<DateTimeTree.DateNode>());
            }
        }
        MonthNode["__class"] = "sp.datagrid.DateTimeTree.MonthNode";


        export class DateNode {
            public __parent: any;
            public day: number;

            constructor(__parent: any) {
                this.__parent = __parent;
                if (this.day === undefined) { this.day = null; }
            }
        }
        DateNode["__class"] = "sp.datagrid.DateTimeTree.DateNode";

    }

}
namespace sp.datagrid {
    export class Filter {
        public name: string;

        public sortDir: string;

        public advValue1: string;

        public advValue2: string;

        public advOperator: string;

        public values: Array<string>;

        constructor() {
            if (this.name === undefined) { this.name = null; }
            if (this.sortDir === undefined) { this.sortDir = null; }
            if (this.advValue1 === undefined) { this.advValue1 = null; }
            if (this.advValue2 === undefined) { this.advValue2 = null; }
            if (this.advOperator === undefined) { this.advOperator = null; }
            this.values = <any>(new Array<string>());
        }
    }
    Filter["__class"] = "sp.datagrid.Filter";

}
namespace sp.datagrid {
    export class GridControls extends com.spoonconsulting.lightning.Layout {
        /*private*/ controls: com.spoonconsulting.lightning.ButtonMenu;

        /*private*/ __refresh: com.spoonconsulting.lightning.ButtonIcon;

        /*private*/ modalDeleteList: sp.datagrid.ModalDeleteList;

        /*private*/ modalNewList: sp.datagrid.ModalNewList;

        /*private*/ modalCloneList: sp.datagrid.ModalCloneList;

        /*private*/ modalRenameList: sp.datagrid.ModalRenameList;

        /*private*/ modalFieldSelector: sp.datagrid.ModalFieldSelector;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ tableInfo: sp.datagrid.TableTitle;

<<<<<<< HEAD
        public constructor(name: string, grid: sp.datagrid.DataGrid) {
=======
        public constructor(name: string, grid: sp.datagrid.DataGrid, dry: boolean, objectType: string) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            super(name, "div");
            this.controls = new com.spoonconsulting.lightning.ButtonMenu("controls", "div");
            this.__refresh = new com.spoonconsulting.lightning.ButtonIcon("refresh", "utility:refresh");
            this.modalDeleteList = new sp.datagrid.ModalDeleteList("deleteList");
            this.modalNewList = new sp.datagrid.ModalNewList("newList");
            this.modalCloneList = new sp.datagrid.ModalCloneList("cloneList");
            this.modalRenameList = new sp.datagrid.ModalRenameList("renameList");
            this.modalFieldSelector = null;
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
<<<<<<< HEAD
            this.tableInfo = new sp.datagrid.TableTitle("tableInfo");
=======
            this.tableInfo = null;
            this.tableInfo = new sp.datagrid.TableTitle("tableInfo", dry);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.modalFieldSelector = new sp.datagrid.ModalFieldSelector("fieldSelector", grid);
            const left: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("left", "div").setSize(10);
            left.addChild(this.tableInfo);
            const itemBtns: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("itemBtns", "div").setSize(2);
            itemBtns.setStyle("text-align", "right");
            this.addChild(left).addChild(itemBtns);
            this.setMultipleRows(true);
            this.setStyle("padding", "0.5rem");
            itemBtns.addClass("btn-container");
            this.controls.getButton().setPrefixIconName("utility:settings");
            this.controls.setMenuAlignment(com.spoonconsulting.lightning.enums.MenuAlignment.RIGHT);
            itemBtns.addChild(this.controls);
<<<<<<< HEAD
            itemBtns.addChild(this.__refresh.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BORDER_FILLED));
            const mnew: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("new").setLabel("New").refresh();
            const clone: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("clone").setLabel("Clone").refresh();
            const rename: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("rename").setLabel("Rename").refresh();
            const fields: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("fieldSelector").setLabel("Select Fields to Display").refresh();
            const mdelete: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("delete").setLabel("Delete").refresh();
            this.controls.getDropdown().addItem(mnew).addItem(clone).addItem(rename).addItem(fields).addItem(mdelete);
            this.addChild(this.modalNewList);
            this.modalNewList.setBackdrop(this.bd);
            this.addChild(this.modalDeleteList);
            this.modalDeleteList.setBackdrop(this.bd);
            this.addChild(this.modalCloneList);
            this.modalCloneList.setBackdrop(this.bd);
            this.addChild(this.modalRenameList);
            this.modalRenameList.setBackdrop(this.bd);
            this.addChild(this.modalFieldSelector);
            this.modalFieldSelector.setBackdrop(this.bd);
=======
            let onlyfs: boolean = false;
            if (objectType === "Case-1" || objectType === "Case-2" || objectType === "Case-3"){
                onlyfs = true;
            }
            if (objectType === "Task" && dry){
                onlyfs = true;
            }
            const fields: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("fieldSelector").setLabel("Select Fields to Display").refresh();
            if (!onlyfs){
                const mnew: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("new").setLabel("New").refresh();
                const clone: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("clone").setLabel("Clone").refresh();
                const rename: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("rename").setLabel("Rename").refresh();
                this.controls.getDropdown().addItem(mnew);
                this.controls.getDropdown().addItem(clone);
                this.controls.getDropdown().addItem(rename);
            }
            this.controls.getDropdown().addItem(fields);
            if (!onlyfs){
                const mdelete: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("delete").setLabel("Delete").refresh();
                this.controls.getDropdown().addItem(mdelete);
            }
            if (!onlyfs){
                this.addChild(this.modalNewList);
                this.modalNewList.setBackdrop(this.bd);
                this.addChild(this.modalDeleteList);
                this.modalDeleteList.setBackdrop(this.bd);
                this.addChild(this.modalCloneList);
                this.modalCloneList.setBackdrop(this.bd);
                this.addChild(this.modalRenameList);
                this.modalRenameList.setBackdrop(this.bd);
            }
            this.addChild(this.modalFieldSelector);
            this.modalFieldSelector.setBackdrop(this.bd);
            itemBtns.addChild(this.__refresh.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BORDER_FILLED));
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.addChild(this.bd);
            this.__refresh.addEventListener(new GridControls.GridControls$0(this), "click");
            this.controls.addEventListener(new GridControls.GridControls$1(this), "select");
            this.controls.setStyle("margin-left", "0.5rem");
            this.__refresh.setStyle("margin-left", "0.25rem");
        }

        public setColumns(columns: Array<Object>) {
            this.modalFieldSelector.setColumns(columns);
        }

        public setTableInfo(icon: string, title: string, subtitle: string) {
            this.tableInfo.setInfo(icon, title, subtitle);
        }

        public setFilterLabel(label: string) {
            this.tableInfo.setFilterLabel(label);
            this.modalRenameList.setCurrentLabel(label);
            this.modalCloneList.setClonedLabel(label);
        }

        public setPinned(b: boolean) {
            this.tableInfo.setPinned(b);
        }
    }
    GridControls["__class"] = "sp.datagrid.GridControls";
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
                const grid: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                grid.doRefreshList();
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
                const name: string = source.getName();
                console.info(name);
                const src: com.spoonconsulting.lightning.MenuItem = <com.spoonconsulting.lightning.MenuItem>evt["source"];
                if (src.getName() === "new"){
                    this.__parent.modalNewList.open();
                } else if (src.getName() === "delete"){
                    this.__parent.modalDeleteList.open();
                } else if (src.getName() === "clone"){
                    this.__parent.modalCloneList.open();
                } else if (src.getName() === "rename"){
                    this.__parent.modalRenameList.open();
                } else if (src.getName() === "fieldSelector"){
                    this.__parent.modalFieldSelector.open();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        GridControls$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class GridFilter {    }
    GridFilter["__class"] = "sp.datagrid.GridFilter";

}
namespace sp.datagrid {
    export class Grids extends com.spoonconsulting.lightning.Layout {
        /*private*/ casesGrid: sp.datagrid.HeavyGrid;

        /*private*/ tasks: sp.datagrid.HeavyGrid;

        /*private*/ spinner: com.spoonconsulting.lightning.Spinner;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        public constructor(name: string) {
            super(name, "div");
<<<<<<< HEAD
            this.casesGrid = new sp.datagrid.HeavyGrid("cases", "Case");
            this.tasks = new sp.datagrid.HeavyGrid("tasks", "Task");
            this.spinner = new com.spoonconsulting.lightning.Spinner("spinner");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
=======
            this.casesGrid = null;
            this.tasks = null;
            this.spinner = new com.spoonconsulting.lightning.Spinner("spinner");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            let casedry: boolean = false;
            if (name !== "dss" && name !== "ds" && name !== "dsss"){
                casedry = true;
            }
            let casetype: string = "Case";
            let tasktype: string = "Task";
            if (name === "ds"){
                casetype = "Case-1";
            } else if (name === "ds-1"){
                casetype = "Case-2";
            } else if (name === "ds-2"){
                casetype = "Case-3";
            } else if (name === "dsss"){
                casetype = "Case-4";
                tasktype = "Task-4";
            }
            this.casesGrid = new sp.datagrid.HeavyGrid("cases", casetype, casedry);
            this.tasks = new sp.datagrid.HeavyGrid("tasks", tasktype, casedry);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.addChild(this.bd.addChild(this.spinner));
            this.bd.setStyle("display", "none");
            this.addClass("slds-card");
            this.addClass("Grids");
            this.addClass("sticky-grid");
            const head: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("head", "div");
            this.addChild(head);
<<<<<<< HEAD
            head.addChild(new sp.datagrid.AppHeader("appHeader", this.casesGrid.getGrid()));
            const top: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("top", "div");
            top.setSize(12);
            const bottom: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("bottom", "div");
            bottom.setSize(12);
            this.setMultipleRows(true);
            this.addChild(top).addChild(bottom);
            bottom.setStyle("margin-top", "1rem");
            top.addChild(this.casesGrid);
            bottom.addChild(this.tasks);
            this.tasks.setGridInfo("https://ceva--sit.my.salesforce.com/img/icon/t4v35/standard/task_120.png", "", "Tasks");
            this.casesGrid.setAttribute("type", "Case");
            this.tasks.setAttribute("type", "Task");
            sp.datagrid.Util.getService().getDefaultFilter("Case").then((r) => {
=======
            head.addChild(new sp.datagrid.AppHeader("appHeader", this.casesGrid.getGrid(), casedry));
            const top: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("top", "div");
            top.setSize(12);
            top.addChild(this.casesGrid);
            this.addChild(top);
            this.casesGrid.setAttribute("type", "Case");
            this.setMultipleRows(true);
            sp.datagrid.Util.getService().getDefaultFilter(casetype).then((r) => {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                this.casesGrid.setFilters$jsweet_lang_Object(r);
                const filterId: string = <string>r["Id"];
                sp.datagrid.Util.getService().getCases(0, <string>r["Filters__c"], "Case", filterId).then((cases) => {
                    this.casesGrid.setData(cases);
                    this.casesGrid.setRendered(false);
                    this.casesGrid.render();
                });
            });
<<<<<<< HEAD
            sp.datagrid.Util.getService().getDefaultFilter("Task").then((r) => {
                this.tasks.setFilters$jsweet_lang_Object(r);
                const filterId: string = <string>r["Id"];
                sp.datagrid.Util.getService().getCases(0, <string>r["Filters__c"], "Task", filterId).then((cases) => {
                    this.tasks.setData(cases);
                    this.tasks.setRendered(false);
                    this.tasks.render();
                });
            });
=======
            if (name === "ds-2" || name === "dss" || name === "dsss"){
                const bottom: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("bottom", "div");
                bottom.setSize(12);
                this.addChild(bottom);
                bottom.setStyle("margin-top", "1rem");
                bottom.addChild(this.tasks);
                this.tasks.setGridInfo("https://ceva--uat.sandbox.lightning.force.com/img/icon/t4v35/standard/task_120.png", "", "Tasks");
                this.tasks.setAttribute("type", "Task");
                sp.datagrid.Util.getService().getDefaultFilter("Task").then((r) => {
                    this.tasks.setFilters$jsweet_lang_Object(r);
                    const filterId: string = <string>r["Id"];
                    sp.datagrid.Util.getService().getCases(0, <string>r["Filters__c"], "Task", filterId).then((cases) => {
                        this.tasks.setData(cases);
                        this.tasks.setRendered(false);
                        this.tasks.render();
                    });
                });
            }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        }

        public getCasesGrid(): sp.datagrid.HeavyGrid {
            return this.casesGrid;
        }

        public setCases(cases: Array<Object>, columns: Array<Object>) {
            this.casesGrid.setColumns(columns);
            this.casesGrid.setData(cases);
        }

        public setTasks(data: Array<Object>, columns: Array<Object>) {
            this.tasks.setColumns(columns);
            this.tasks.setData(data);
        }

        public callGetCases(params: Object) {
        }

        public setGetCases(fn: Function) {
        }

        public showSpinner(b: boolean) {
            if (b){
                if (!this.bd.hasClass("slds-backdrop_open"))this.bd.addClass("slds-backdrop_open");
            } else {
                this.bd.removeClass("slds-backdrop_open");
            }
            this.bd.setStyle("display", b ? null : "none");
        }
    }
    Grids["__class"] = "sp.datagrid.Grids";
    Grids["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace sp.datagrid {
    export class HeaderAction extends com.spoonconsulting.lightning.ButtonMenu {
        /*private*/ txtSearch: sp.datagrid.TextSearch;

<<<<<<< HEAD
=======
        /*private*/ column: Object;

>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        /*private*/ objectType: string;

        public constructor(name: string, col: Object, objectType: string) {
            super(name, "span");
            if (this.txtSearch === undefined) { this.txtSearch = null; }
<<<<<<< HEAD
            if (this.objectType === undefined) { this.objectType = null; }
=======
            if (this.column === undefined) { this.column = null; }
            if (this.objectType === undefined) { this.objectType = null; }
            this.column = col;
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.objectType = objectType;
            const type: string = <string>col["type"];
            this.getButton().addClass("slds-button_icon-x-small");
            this.getButton().removeClass("slds-button_icon-border-filled");
            this.addClass("slds-th__action-button ");
            this.getButton().getIcon().addClass("slds-button__icon_hint slds-button__icon_small");
            this.setSticky(true);
            this.getDropdown().addClass("my-dp").setAttribute("relatedId", this.getButton().getId());
            const sortAsc: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("sortAsc");
            sortAsc.setLabel("Sort A to Z");
            sortAsc.refresh();
            this.getDropdown().addItem(sortAsc);
            const sortDesc: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("sortDesc");
            sortDesc.setLabel("Sort Z to A");
            sortDesc.refresh();
            this.getDropdown().addItem(sortDesc);
            this.getDropdown().addMenuDivider();
            if (col.hasOwnProperty("sorting")){
                const sort: string = <string>col["sorting"];
                if (sort === "ASC"){
                    sortAsc.setChecked(true);
                    sortAsc.refresh();
                } else {
                    sortDesc.setChecked(true);
                    sortDesc.refresh();
                }
            }
            const fname: string = <string>col["fieldName"];
<<<<<<< HEAD
            if (fname !== "Branch_Code__c"){
                if (type !== "Boolean"){
                    const customFilter: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("customFilter");
                    customFilter.setLabel("Custom Filter");
                    customFilter.refresh();
                    this.getDropdown().addItem(customFilter);
                    this.getDropdown().addMenuDivider();
                }
=======
            if (type !== "Boolean"){
                const customFilter: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("customFilter");
                customFilter.setLabel("Custom Filter");
                customFilter.refresh();
                this.getDropdown().addItem(customFilter);
                this.getDropdown().addMenuDivider();
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            }
            const mWidth: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("width");
            mWidth.setChecked(false);
            const wlabel: JSContainer = new JSContainer("span").setHtml("Column width: 5rem");
            mWidth.getChildren()[0].addChild(wlabel);
            mWidth.getChildren()[0].setStyle("width", "100%");
            const slider: JSContainer = new JSContainer("slider", "input");
            slider.setAttribute("type", "range");
            slider.setAttribute("min", "2");
            slider.setAttribute("max", "30");
            slider.setAttribute("value", "5");
            if (col.hasOwnProperty("width")){
                const width: number = <number>col["width"];
                if (width != null){
                    slider.setAttribute("value", width + "");
                    wlabel.setHtml("Column width: " + width + "rem");
                }
            }
            mWidth.getChildren()[0].addChild(slider);
            slider.setStyle("width", "100%").setStyle("display", "block");
            slider.addEventListener(new HeaderAction.HeaderAction$0(this, wlabel), "change");
            this.getDropdown().addItem(mWidth);
<<<<<<< HEAD
            if (fname !== "Branch_Code__c"){
                this.getDropdown().addMenuDivider();
                this.getDropdown().setStyle("min-width", "250px");
                if (type === "String"){
                    const metadata: Array<Object> = <Array<Object>>col["metadata"];
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch_" + fname, objectType, col);
                    this.txtSearch.setData(metadata);
                    const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                    msearch.setChecked(false);
                    msearch.setPrefixIconName(null);
                    msearch.setIconName(null);
                    msearch.refresh();
                    msearch.getChildren()[0].addChild(this.txtSearch);
                    msearch.getChildren()[0].setStyle("width", "100%");
                    this.getDropdown().addItem(msearch);
                } else if (type === "Boolean"){
                    const metadata: Array<Object> = <any>(new Array<Object>());
                    const tr: Object = <Object>new Object();
                    tr["label"] = "TRUE";
                    tr["value"] = "TRUE";
                    metadata.push(tr);
                    const fl: Object = <Object>new Object();
                    fl["label"] = "FALSE";
                    fl["value"] = "FALSE";
                    metadata.push(fl);
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                    this.txtSearch.setData(metadata);
                    const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                    msearch.setChecked(false);
                    msearch.setPrefixIconName(null);
                    msearch.setIconName(null);
                    msearch.refresh();
                    msearch.getChildren()[0].addChild(this.txtSearch);
                    msearch.getChildren()[0].setStyle("width", "100%");
                    this.getDropdown().addItem(msearch);
                } else if (type === "DateTime"){
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                    this.txtSearch.setDateOptions();
                    const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                    msearch.setChecked(false);
                    msearch.setPrefixIconName(null);
                    msearch.setIconName(null);
                    msearch.refresh();
                    msearch.getChildren()[0].addChild(this.txtSearch);
                    msearch.getChildren()[0].setStyle("width", "100%");
                    this.getDropdown().addItem(msearch);
                }
=======
            this.getDropdown().addMenuDivider();
            this.getDropdown().setStyle("min-width", "250px");
            if (type === "String"){
                const metadata: Array<Object> = <Array<Object>>col["metadata"];
                this.txtSearch = new sp.datagrid.TextSearch("textSearch_" + fname, objectType, col);
                this.txtSearch.setData(metadata);
                const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                msearch.setChecked(false);
                msearch.setPrefixIconName(null);
                msearch.setIconName(null);
                msearch.refresh();
                msearch.getChildren()[0].addChild(this.txtSearch);
                msearch.getChildren()[0].setStyle("width", "100%");
                this.getDropdown().addItem(msearch);
            } else if (type === "Boolean"){
                const metadata: Array<Object> = <any>(new Array<Object>());
                const tr: Object = <Object>new Object();
                tr["label"] = "TRUE";
                tr["value"] = "TRUE";
                metadata.push(tr);
                const fl: Object = <Object>new Object();
                fl["label"] = "FALSE";
                fl["value"] = "FALSE";
                metadata.push(fl);
                this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                this.txtSearch.setData(metadata);
                const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                msearch.setChecked(false);
                msearch.setPrefixIconName(null);
                msearch.setIconName(null);
                msearch.refresh();
                msearch.getChildren()[0].addChild(this.txtSearch);
                msearch.getChildren()[0].setStyle("width", "100%");
                this.getDropdown().addItem(msearch);
            } else if (type === "DateTime"){
                this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                this.txtSearch.setDateOptions();
                const msearch: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("textSearch");
                msearch.setChecked(false);
                msearch.setPrefixIconName(null);
                msearch.setIconName(null);
                msearch.refresh();
                msearch.getChildren()[0].addChild(this.txtSearch);
                msearch.getChildren()[0].setStyle("width", "100%");
                this.getDropdown().addItem(msearch);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            }
            this.addEventListener(new HeaderAction.HeaderAction$1(this, col, fname), "select");
            const btnCtn: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem("btnCtn");
            btnCtn.setChecked(false);
            btnCtn.setPrefixIconName(null);
            btnCtn.setIconName(null);
            btnCtn.refresh();
            const ok: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("ok");
            ok.setLabel("Ok");
            ok.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            ok.setStyle("margin-right", "0.5rem");
            ok.addEventListener(new HeaderAction.HeaderAction$2(this, fname), "click");
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setLabel("Cancel");
            cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            cancel.addEventListener(new HeaderAction.HeaderAction$3(this), "click");
            const clear: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("clear");
<<<<<<< HEAD
            if (fname !== "Branch_Code__c"){
                clear.setLabel("Clear filters");
                clear.addEventListener(new HeaderAction.HeaderAction$4(this, fname), "click");
                clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
            }
            btnCtn.getChildren()[0].addChild(cancel);
            if (fname !== "Branch_Code__c"){
                btnCtn.getChildren()[0].addChild(clear);
            }
=======
            clear.setLabel("Clear filters");
            clear.addEventListener(new HeaderAction.HeaderAction$4(this, fname), "click");
            clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
            btnCtn.getChildren()[0].addChild(cancel);
            btnCtn.getChildren()[0].addChild(clear);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            btnCtn.getChildren()[0].addChild(ok);
            btnCtn.getChildren()[0].setStyle("width", "100%").setStyle("text-align", "right");
            this.getDropdown().addMenuDivider();
            this.getDropdown().addItem(btnCtn);
            this.refresh();
            if (type !== "DateTime"){
                this.getButton().addEventListener(new HeaderAction.HeaderAction$5(this), "click");
            }
            if (type === "DateTime"){
                this.getButton().addEventListener(new HeaderAction.HeaderAction$6(this), "click");
            }
        }

        public displaceDropdown() {
            const drop: HTMLElement = this.getDropdown().getElement();
<<<<<<< HEAD
            try {
                let cls: string = ".scroller_" + this.objectType;
                cls = "c-grids";
                document.querySelectorAll(cls).item(0).appendChild(drop);
            } catch(e) {
                document.body.appendChild(drop);
            }
        }

        public positionDropdown(evt: Event) {
            const drop: HTMLElement = this.getDropdown().getElement();
            const btn: HTMLElement = this.getButton().getElement();
            const rect: ClientRect = btn.getBoundingClientRect();
            const top: number = rect.top + window.screenTop;
            const left: number = rect.left + window.screenLeft;
            drop.style.top = (top - 126 + window.scrollY) + "px";
            drop.style.left = (left + 4) + "px";
            if (this.objectType === "Task"){
                try {
                } catch(e) {
                }
            }
=======
            drop.style.position = "fixed";
        }

        public positionDropdown(evt: Event) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        }

        public setDropdownPosition(evt: Event) {
            this.displaceDropdown();
            this.positionDropdown(evt);
        }

        public refresh() {
            super.refresh();
            setTimeout((() => {
                try {
                    this.setDropdownPosition(null);
                    const drop: HTMLElement = this.getDropdown().getElement();
                    drop.style.display = "none";
                } catch(e) {
                    console.error(e);
                    console.error(e.message, e);
                }
            }), 2000);
        }
    }
    HeaderAction["__class"] = "sp.datagrid.HeaderAction";
    HeaderAction["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace HeaderAction {

        export class HeaderAction$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const value: string = (<HTMLInputElement>source.getElement()).value;
                const header: sp.datagrid.DataGridHeader = <any>(source.getAncestorWithClass<any>("DataGridHeader"));
                header.setWidth(/* parseDouble */parseFloat(value));
                this.wlabel.setHtml("Column width: " + value + "rem");
            }

            constructor(__parent: any, private wlabel: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const name: string = source.getName();
                console.info(name);
                const src: com.spoonconsulting.lightning.MenuItem = <com.spoonconsulting.lightning.MenuItem>evt["source"];
                if (src == null){
                    return;
                }
                if (src.getName() === "customFilter"){
                    const grid: sp.datagrid.HeavyGrid = <any>(this.__parent.getAncestorWithClass("HeavyGrid"));
                    grid.customFilter(this.col);
                    this.__parent.close();
                } else if (src.getName() === "sortAsc"){
                    src.setChecked(!src.isChecked());
                    src.refresh();
                    evt["fieldName"] = this.fname;
                    evt["sortDir"] = "ASC";
                    if (src.isChecked()){
                        evt["onOff"] = "on";
                        const desc: com.spoonconsulting.lightning.MenuItem = this.__parent.getMenuItem("sortDesc");
                        if (desc.isChecked()){
                            desc.setChecked(false);
                            desc.refresh();
                        }
                    } else {
                        evt["onOff"] = "off";
                    }
                    this.__parent.close();
                    const dg: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("DataGrid"));
                    dg.fireListener("sorting", evt);
                } else if (src.getName() === "sortDesc"){
                    src.setChecked(!src.isChecked());
                    src.refresh();
                    evt["fieldName"] = this.fname;
                    evt["sortDir"] = "DESC";
                    if (src.isChecked()){
                        evt["onOff"] = "on";
                        const asc: com.spoonconsulting.lightning.MenuItem = this.__parent.getMenuItem("sortAsc");
                        if (asc.isChecked()){
                            asc.setChecked(false);
                            asc.refresh();
                        }
                    } else {
                        evt["onOff"] = "off";
                    }
                    this.__parent.close();
                    const dg: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("DataGrid"));
                    dg.fireListener("sorting", evt);
                }
            }

            constructor(__parent: any, private col: any, private fname: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.close();
                if (this.__parent.txtSearch != null){
                    const options: Array<Object> = this.__parent.txtSearch.getSelectedOptions();
                    evt["options"] = options;
                    evt["fieldName"] = this.fname;
                    const dg: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("DataGrid"));
                    dg.fireListener("filterIncludes", evt);
                }
            }

            constructor(__parent: any, private fname: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$3 implements api.EventListener {
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
        HeaderAction$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.close();
                if (this.__parent.txtSearch != null){
                    const options: Array<Object> = <any>(new Array<Object>());
                    evt["options"] = options;
                    evt["fieldName"] = this.fname;
                    evt["clearFilter"] = true;
                    this.__parent.txtSearch.setSelectedOptions(<any>(new Array<string>()));
                    const dg: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("DataGrid"));
                    dg.fireListener("filterIncludes", evt);
                } else {
                    const options: Array<Object> = <any>(new Array<Object>());
                    evt["options"] = options;
                    evt["fieldName"] = this.fname;
                    evt["clearFilter"] = true;
                    const dg: sp.datagrid.DataGrid = <any>(this.__parent.getAncestorWithClass("DataGrid"));
                    dg.fireListener("filterIncludes", evt);
                }
            }

            constructor(__parent: any, private fname: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$4["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$5 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (this.__parent.txtSearch != null){
                    this.__parent.txtSearch.doRemoteSearch(true);
                }
                this.__parent.setDropdownPosition(evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$5["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeaderAction$6 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.setDropdownPosition(evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        HeaderAction$6["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class HeavyGrid extends JSContainer {
        /*private*/ grid: sp.datagrid.DataGrid;

        /*private*/ columns: Array<Object>;

        /*private*/ controls: sp.datagrid.GridControls;

        /*private*/ sfFilters: Object;

        /*private*/ modalListFilters: sp.datagrid.ModalListFilters;

        /*private*/ search: sp.datagrid.AdvancedSearch;

        /*private*/ dateSearch: sp.datagrid.AdvancedDateSearch;

        /*private*/ modalCloseCase: sp.datagrid.ModalCloseCase;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ type: string;

<<<<<<< HEAD
        public constructor(name: string, type: string) {
=======
        public constructor(name: string, type: string, dry: boolean) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            super(name, "div");
            this.grid = null;
            this.columns = <any>(new Array<Object>());
            this.controls = null;
            if (this.sfFilters === undefined) { this.sfFilters = null; }
            this.modalListFilters = null;
            this.search = new sp.datagrid.AdvancedSearch("search");
            this.dateSearch = new sp.datagrid.AdvancedDateSearch("search");
            this.modalCloseCase = new sp.datagrid.ModalCloseCase("closeCases");
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            if (this.type === undefined) { this.type = null; }
            this.type = type;
            this.grid = new sp.datagrid.DataGrid("grid", type);
<<<<<<< HEAD
            this.controls = new sp.datagrid.GridControls("ctrs", this.grid);
=======
            this.controls = new sp.datagrid.GridControls("ctrs", this.grid, dry, type);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.modalListFilters = new sp.datagrid.ModalListFilters("listFilters", type);
            this.addClass("HeavyGrid");
            this.modalListFilters.setBackdrop(this.bd);
            this.modalCloseCase.setBackdrop(this.bd);
            this.search.setBackdrop(this.bd);
            this.dateSearch.setBackdrop(this.bd);
            this.addChild(this.dateSearch);
            this.addChild(this.modalListFilters);
            this.addChild(this.modalCloseCase);
            this.addChild(this.search);
            this.addChild(this.bd);
            this.addChild(this.controls);
            const lgrid: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("lgrid", "div");
            const lgridItem: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("lgridItem", "div");
            lgridItem.setSize(12);
            lgridItem.setStyle("position", "relative");
            lgrid.setMultipleRows(true);
            lgridItem.addChild(this.grid);
            lgridItem.addClass("scroller_" + type);
            lgrid.addChild(lgridItem);
<<<<<<< HEAD
            lgridItem.setStyle("height", "260px").setStyle("overflow", "auto");
=======
            lgridItem.setStyle("height", "560px").setStyle("overflow", "auto");
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.addChild(lgrid);
            this.grid.setColumns(this.columns);
            this.grid.on("orderby", (a, b) => {
                const gri: sp.datagrid.DataGrid = <sp.datagrid.DataGrid><any>a;
                const orderBy: string = <string>b["orderBy"];
                const orderByDir: string = <string>b["orderByDir"];
                console.info("gri.getOrderBy():" + gri.getOrderBy());
                console.info("gri.getOrderByDir():" + gri.getOrderByDir());
                console.info("orderBy:" + orderBy);
                console.info("orderByDir:" + orderByDir);
                return null;
            });
            this.addEventListener(new HeavyGrid.HeavyGrid$0(this), "remoteSearch");
            this.addEventListener(new HeavyGrid.HeavyGrid$1(this), "clearQuery");
        }

        public closeCase(selectedId: string) {
            this.modalCloseCase.open();
            this.modalCloseCase.refresh(this.grid, selectedId, this.type);
        }

<<<<<<< HEAD
=======
        public getLeft(colName: string): number {
            const o: Object = this.grid.getFilters();
            const lst: Array<Object> = <any>(new Array<Object>());
            {
                let array155 = Object.keys(o);
                for(let index154=0; index154 < array155.length; index154++) {
                    let fieldName = array155[index154];
                    {
                        lst.push(<Object>o[fieldName]);
                    }
                }
            }
            const res: Object[] = lst.sort((a, b) => {
                const pos1: number = <number>a["position"];
                const pos2: number = <number>b["position"];
                return parseFloat(/* compareTo */(<any>((o1: any, o2: any) => { if (o1 && o1.compareTo) { return o1.compareTo(o2); } else { return o1 < o2 ? -1 : o2 < o1 ? 1 : 0; } })(pos1,pos2)) + "");
            });
            let total: number = 0;
            for(let index156=0; index156 < res.length; index156++) {
                let filter = res[index156];
                {
                    let widht: number = 5;
                    if (filter.hasOwnProperty("width") && filter["width"] != null){
                        widht = <number>filter["width"];
                    }
                    total = total + widht;
                    const fieldName: string = <string>filter["fieldName"];
                    if (fieldName === colName){
                        break;
                    }
                }
            }
            return total;
        }

>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        public pinCurrent() {
            const filterId: string = <string>this.sfFilters["Id"];
            sp.datagrid.Util.getService().pinFilter(filterId, this.type).then((result) => {
                this.sfFilters["Is_Default__c"] = true;
            }).catch((e) => {
                const b: Object = <Object>(<Object>e)["body"];
                const pe: Array<Object> = <Array<Object>>b["pageErrors"];
                if (pe != null && pe.length > 0){
                    alert(pe[0]["message"]);
                }
                const fe: Object = <Object>b["fieldErrors"];
                if (fe != null && Object.keys(fe).length > 0){
                    let feMsg: string = "";
                    {
<<<<<<< HEAD
                        let array155 = Object.keys(fe);
                        for(let index154=0; index154 < array155.length; index154++) {
                            let key = array155[index154];
=======
                        let array158 = Object.keys(fe);
                        for(let index157=0; index157 < array158.length; index157++) {
                            let key = array158[index157];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            {
                                const f: Array<Object> = <Array<Object>>fe[key];
                                if (f != null && f.length > 0){
                                    feMsg = feMsg + "\n" + f[0]["message"];
                                }
                            }
                        }
                    }
                    if (feMsg != null){
                        alert(feMsg);
                    }
                }
            });
        }

        public editRecord(evt: Event) {
            const grids: sp.datagrid.Grids = <any>(this.getAncestorWithClass<any>("Grids"));
            evt["objectType"] = this.type;
            grids.fireListener("editRecord", evt);
        }

        public getType(): string {
            return this.type;
        }

        public openListFilters() {
            this.modalListFilters.open();
            this.modalListFilters.refresh();
        }

        public setFilters$jsweet_lang_Object(filters: Object) {
            this.sfFilters = filters;
            const label: string = <string>filters["Label__c"];
            const sFilters: string = <string>filters["Filters__c"];
            const pinned: boolean = <boolean>filters["Is_Default__c"];
            const oFilters: Object = <Object>JSON.parse(sFilters);
            this.setFilters$jsweet_lang_Object$java_lang_String(oFilters, label);
            this.controls.setPinned(pinned);
        }

        public setFilters$jsweet_lang_Object$java_lang_String(filters: Object, label: string) {
            this.grid.setFilters(filters);
            this.columns = this.grid.getColumns();
            this.controls.setColumns(this.columns);
            this.controls.setFilterLabel(label);
        }

        public setFilters(filters?: any, label?: any) {
            if (((filters != null && filters instanceof <any>Object) || filters === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.setFilters$jsweet_lang_Object$java_lang_String(filters, label);
            } else if (((filters != null && filters instanceof <any>Object) || filters === null) && label === undefined) {
                return <any>this.setFilters$jsweet_lang_Object(filters);
            } else throw new Error('invalid overload');
        }

        public getFilterId(): string {
            return <string>this.sfFilters["Id"];
        }

        public doRefreshList(callback: (p1: Array<Object>) => void = null) {
            try {
                const of: Object = this.grid.getFilters();
                if (of != null && Object.keys(of).length > 0){
                    this.sfFilters["Filters__c"] = JSON.stringify(of);
                }
                const sFilters: string = <string>this.sfFilters["Filters__c"];
                const grids: sp.datagrid.Grids = <any>(this.getAncestorWithClass<any>("Grids"));
                grids.showSpinner(true);
                const filterId: string = <string>this.sfFilters["Id"];
                sp.datagrid.Util.getService().getCases(0, sFilters, this.type, filterId).then(((grids) => {
                    return (result) => {
                        this.setRendered(false);
                        this.setData(result);
                        grids.showSpinner(false);
                        grids.render();
                        this.refresh();
                        if (callback != null){
                            (target => (typeof target === 'function') ? target(result) : (<any>target).apply(result))(callback);
                        }
                    }
                })(grids));
            } catch(e) {
                console.error(e.message, e);
            }
        }

        public clearQuery(fieldName: string) {
            const sFilters: string = <string>this.sfFilters["Filters__c"];
            const oFilters: Object = <Object>JSON.parse(sFilters);
            const ffilter: Object = <Object>oFilters[fieldName];
            ffilter["includes"] = new Array<string>();
            delete ffilter["custom"];
            oFilters[fieldName] = ffilter;
            this.sfFilters["Filters__c"] = JSON.stringify(oFilters);
            this.setFilters$jsweet_lang_Object(this.sfFilters);
            this.doRefreshList();
        }

        public saveCustomFilter(fieldName: string, objectType: string, result: Object, callback: (p1: Array<Object>) => void) {
            this.grid.setCustomFilter(fieldName, result);
            this.doRefreshList(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0) =>  (funcInst['apply'] ? funcInst['apply'] : funcInst) .call(funcInst, arg0)})(callback)));
        }

        public customFilter(col: Object) {
            const type: string = <string>col["type"];
            if (type === "DateTime"){
                this.dateSearch.refresh(col, type);
                this.dateSearch.open();
            } else {
                this.search.refresh(col, this.type);
                this.search.open();
            }
        }

        public showSpinner(b: boolean) {
            const grids: sp.datagrid.Grids = <any>(this.getAncestorWithClass<any>("Grids"));
            grids.showSpinner(b);
        }

        public refresh() {
            this.grid.refresh();
        }

        public cloneList(label: string) {
            this.showSpinner(true);
            sp.datagrid.Util.getService().cloneFilter(<string>this.sfFilters["Id"], label).then((result) => {
                this.setFilters$jsweet_lang_Object(result);
                this.doRefreshList();
            });
        }

        public deleteList() {
            this.showSpinner(true);
            sp.datagrid.Util.getService().deleteFilter(<string>this.sfFilters["Id"]).then((result) => {
                this.setFilters$jsweet_lang_Object(result);
                this.doRefreshList();
            });
        }

        public addList(label: string) {
            this.showSpinner(true);
            sp.datagrid.Util.getService().createNewFilter(this.type, label).then((result) => {
                this.setFilters$jsweet_lang_Object(result);
                this.doRefreshList();
            });
        }

        public renameList(label: string) {
            this.sfFilters["Label__c"] = label;
            this.controls.setFilterLabel(label);
            sp.datagrid.Util.getService().renameFilter(<string>this.sfFilters["Id"], label);
        }

        public setColumns(cols: Array<Object>) {
            this.columns = cols;
            this.grid.setColumns(this.columns);
            this.controls.setColumns(this.columns);
        }

        public setData(data: Array<Object>) {
            this.grid.setData(data);
        }

        public setGridInfo(icon: string, title: string, subtitle: string) {
            this.controls.setTableInfo(icon, title, subtitle);
        }

        public refreshList() {
            this.grid.refreshList();
        }

        public getGrid(): sp.datagrid.DataGrid {
            return this.grid;
        }
    }
    HeavyGrid["__class"] = "sp.datagrid.HeavyGrid";
    HeavyGrid["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace HeavyGrid {

        export class HeavyGrid$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const grids: sp.datagrid.Grids = <any>(this.__parent.getAncestorWithClass("Grids"));
                evt["Grid"] = this.__parent.getName();
                grids.fireListener("remoteSearch", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        HeavyGrid$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class HeavyGrid$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const fieldName: string = <string>evt["fieldName"];
                this.__parent.clearQuery(fieldName);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        HeavyGrid$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export interface HompPageService {
        getFilters(objectType: string): Promise<Array<Object>>;

        getRecordTypes(objectType: string): Promise<Array<Object>>;

        createNewFilter(objectType: string, label: string): Promise<Object>;

        deleteFilter(IdToDelete: string): Promise<Object>;

        renameFilter(IdToRename: string, label: string);

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
<<<<<<< HEAD
    }
}
namespace sp.datagrid {
=======

        getBranches(): Promise<string>;
    }
}
namespace sp.datagrid {
    export interface IGrids extends api.Renderable {    }
}
namespace sp.datagrid {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
    export class MockHomePageService implements sp.datagrid.HompPageService {
        /**
         * 
         * @param {string} objectType
         * @return {Promise}
         */
        public getFilters(objectType: string): Promise<Array<Object>> {
            const filter: Object = <Object>window["samplefilter"];
            const filter1: Object = <Object>window["samplefilter1"];
            const result: Array<Object> = <any>(new Array<Object>());
            result.push(filter);
            result.push(filter1);
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        public getRecordTypes(objectType: string): Promise<Array<Object>> {
            const result: Array<Object> = <Array<Object>>window["recordtypes"];
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        /**
         * 
         * @param {string} ownerId
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public changeOwner(ownerId: string, caseIds: Array<string>): Promise<string> {
            const buc: (p1: (p1: string) => void, p2: (p1: Object) => void) => void = (t: (p1: string) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target("Success") : (<any>target).accept("Success"))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
        }

        /**
         * 
         * @param {string} status
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public closeCases(status: string, caseIds: Array<string>): Promise<string> {
            const buc: (p1: (p1: string) => void, p2: (p1: Object) => void) => void = (t: (p1: string) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target("Success") : (<any>target).accept("Success"))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
        }

        /**
         * 
         * @param {string[]} caseIds
         * @return {Promise}
         */
        public mergeCases(caseIds: Array<string>): Promise<string> {
            const buc: (p1: (p1: string) => void, p2: (p1: Object) => void) => void = (t: (p1: string) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target("Success") : (<any>target).accept("Success"))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
        }

        /**
         * 
         * @param {string} filterId
         * @param {string} objectType
         * @return {Promise}
         */
        public pinFilter(filterId: string, objectType: string): Promise<string> {
            const buc: (p1: (p1: string) => void, p2: (p1: Object) => void) => void = (t: (p1: string) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target("Success") : (<any>target).accept("Success"))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
        }

        /**
         * 
         * @param {string} objectType
         * @param {string} label
         * @return {Promise}
         */
        public createNewFilter(objectType: string, label: string): Promise<Object> {
            const filter: Object = <Object>window["samplefilter"];
            const buc: (p1: (p1: Object) => void, p2: (p1: Object) => void) => void = (t: (p1: Object) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(filter) : (<any>target).accept(filter))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(buc))));
        }

        /**
         * 
         * @param {string} IdToDelete
         * @return {Promise}
         */
        public deleteFilter(IdToDelete: string): Promise<Object> {
            return this.createNewFilter(null, null);
        }

        /**
         * 
         * @param {string} IdToRename
         * @param {string} label
         */
        public renameFilter(IdToRename: string, label: string) {
        }

        /**
         * 
         * @param {string} IdToClone
         * @param {string} label
         * @return {Promise}
         */
        public cloneFilter(IdToClone: string, label: string): Promise<Object> {
            return this.createNewFilter(IdToClone, label);
        }

        /**
         * 
         * @param {string} filter
         * @param {string} filterId
         * @return {Promise}
         */
        public updateFilter(filter: string, filterId: string): Promise<Object> {
            return this.createNewFilter(filter, filterId);
        }

        /**
         * 
         * @param {string} objectType
         * @return {Promise}
         */
        public getDefaultFilter(objectType: string): Promise<Object> {
            return this.createNewFilter(objectType, objectType);
        }

        /**
         * 
         * @param {number} page
         * @param {string} filter
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        public getCases(page: number, filter: string, objectType: string, filterId: string): Promise<Array<Object>> {
            const result: Array<Object> = <Array<Object>>window["cases"];
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        /**
         * 
         * @return {Promise}
         */
        public getCustomerPortalUsers(): Promise<Array<Object>> {
            const result: Array<Object> = <Array<Object>>window["portalusers"];
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        /**
         * 
         * @return {Promise}
         */
        public getQueues(): Promise<Array<Object>> {
            const result: Array<Object> = <Array<Object>>window["queues"];
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        /**
         * 
         * @param {string} txt
         * @return {Promise}
         */
        public getUsers(txt: string): Promise<Array<Object>> {
            const results: Array<Object> = <Array<Object>>window["users"];
            const result: Array<Object> = <any>(new Array<Object>());
<<<<<<< HEAD
            for(let index156=0; index156 < results.length; index156++) {
                let res = results[index156];
=======
            for(let index159=0; index159 < results.length; index159++) {
                let res = results[index159];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    if (txt != null && txt.length > 0){
                        if (/* contains */((<string>res["label"]).toLowerCase().indexOf(txt.toLowerCase()) != -1)){
                            if (result.length < 5)result.push(res);
                        }
                    } else {
                        if (result.length < 5)result.push(res);
                    }
                }
            }
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        /**
         * 
         * @param {string} fieldName
         * @param {string} txt
         * @param {number} page
         * @param {string} objectType
         * @param {string} filterId
         * @return {Promise}
         */
        public getFieldValues(fieldName: string, txt: string, page: number, objectType: string, filterId: string): Promise<Array<Object>> {
            const result: Array<Object> = <Array<Object>>window["cases"];
<<<<<<< HEAD
            for(let index157=0; index157 < result.length; index157++) {
                let o = result[index157];
=======
            for(let index160=0; index160 < result.length; index160++) {
                let o = result[index160];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    o["value"] = o[fieldName];
                    o["label"] = o[fieldName];
                }
            }
            const consu: (p1: (p1: Array<Object>) => void, p2: (p1: Object) => void) => void = (t: (p1: Array<Object>) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

        public getFieldDateTimeTree(fieldName: string, objectType: string): Promise<sp.datagrid.DateTimeTree> {
            const dt: Date = new Date();
            const result: sp.datagrid.DateTimeTree = new sp.datagrid.DateTimeTree();
            result.addDate(dt);
            for(let i: number = 0; i < 20; i++) {{
                const tmp: Date = new Date(dt.getTime() + i * 20000 * 60 * 60);
                result.addDate(tmp);
            };}
            const consu: (p1: (p1: sp.datagrid.DateTimeTree) => void, p2: (p1: Object) => void) => void = (t: (p1: sp.datagrid.DateTimeTree) => void, u: (p1: Object) => void) => {
                (target => (typeof target === 'function') ? target(result) : (<any>target).accept(result))(t);
            };
            return <any>(new Promise(<any>(((funcInst: any) => { if (typeof funcInst == 'function') { return funcInst } return (arg0, arg1) =>  (funcInst['accept'] ? funcInst['accept'] : funcInst) .call(funcInst, arg0, arg1)})(consu))));
        }

<<<<<<< HEAD
=======
        /**
         * 
         * @return {Promise}
         */
        public getBranches(): Promise<string> {
            return null;
        }

>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        constructor() {
        }
    }
    MockHomePageService["__class"] = "sp.datagrid.MockHomePageService";
    MockHomePageService["__interfaces"] = ["sp.datagrid.HompPageService"];


}
namespace sp.datagrid {
    export class ModalChangeOwner extends com.spoonconsulting.lightning.Modal {
        /*private*/ ownerType: com.spoonconsulting.lightning.ButtonMenu;

        /*private*/ input: com.spoonconsulting.lightning.ComboBox;

        /*private*/ sendNotif: com.spoonconsulting.lightning.CheckBox;

        /*private*/ save: com.spoonconsulting.lightning.Button;

        /*private*/ cancel: com.spoonconsulting.lightning.Button;

        /*private*/ type: string;

        /*private*/ users: Array<Object>;

        /*private*/ customerPortalUsers: Array<Object>;

        /*private*/ queues: Array<Object>;

        /*private*/ caseIds: Array<string>;

        /*private*/ grid_: sp.datagrid.DataGrid;

        public constructor(name: string) {
            super(name);
            this.ownerType = new com.spoonconsulting.lightning.ButtonMenu("ownerType", "span");
            this.input = new com.spoonconsulting.lightning.ComboBox("input");
            this.sendNotif = new com.spoonconsulting.lightning.CheckBox("sendNotif");
            this.save = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.cancel = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.type = "users";
            this.users = null;
            this.customerPortalUsers = null;
            this.queues = null;
            this.caseIds = null;
            this.grid_ = null;
            this.setTitle("Change Owner");
            this.addItem("users", "Users", "standard:avatar");
            this.addItem("portalUser", "Customer Portal Users", "standard:customer_portal_users");
            this.addItem("queues", "Queues", "standard:orders");
            this.input.getCombo().getChildren()[0].addClass("except");
            this.ownerType.getButton().addClass("bt");
            this.ownerType.getButton().getPrefixIcon().addClass("pref");
            this.ownerType.getButton().getIcon().addClass("suf");
            this.ownerType.setStyle("position", "absolute").setStyle("z-index", "5");
            this.ownerType.getButton().setPrefixIconName("standard:avatar");
            this.ownerType.getButton().addEventListener(new ModalChangeOwner.ModalChangeOwner$0(this), "click");
            this.ownerType.addEventListener(new ModalChangeOwner.ModalChangeOwner$1(this), "select");
            this.input.getCombo().getInput().addEventListener(new ModalChangeOwner.ModalChangeOwner$2(this), "keyup");
            this.input.getCombo().getInput().setStyle("padding-left", "3.2rem").setStyle("font-size", "0.75rem").setStyle("color", "#3e3e3c");
            this.input.getCombo().getInputIcon().setIconName("utility:search").setStyle("margin", "-9px 6px");
            this.input.setStrict(false);
            this.input.getControlCtn().addChildAt(0, this.ownerType);
            this.input.setLabel("Choose an owner:");
            this.getContent().addChild(this.input);
            this.getContent().setStyle("padding", "2rem").setStyle("height", "310px");
            this.getContent().addChild(this.sendNotif);
            this.sendNotif.setLabel("Send notification email");
            this.sendNotif.addClass("slds-m-top_large");
            const lowerText: JSContainer = new JSContainer("lowerText", "div").setHtml("<div class=\"uiOutputRichText\"><div><span class=\"desc\">The new owner</span> will also become the owner of these records related to <span class=\"desc\"></span> that are owned by <span class=\"desc\">the current record owner</span>.</div></div><ul role=\"group\" style=\"list-style-type:circle;margin-left: 2rem;line-height: 1.9rem;margin-top: 1rem;\"><li>Notes and attachments</li><li>Open activities</li></ul><div class=\"clearall\"></div>");
            lowerText.addClass("slds-m-top_large");
            this.getContent().addChild(lowerText);
            this.getFooter().addChild(this.cancel).addChild(this.save);
            this.cancel.addEventListener(new ModalChangeOwner.ModalChangeOwner$3(this), "click");
            this.save.addEventListener(new ModalChangeOwner.ModalChangeOwner$4(this), "click");
        }

        public doSave() {
            const val: string = this.input.getValue();
            sp.datagrid.Util.getService().changeOwner(val, this.caseIds).then((result) => {
                const hgrid: sp.datagrid.HeavyGrid = <any>(this.grid_.getAncestorWithClass<any>("HeavyGrid"));
                hgrid.doRefreshList((res) => {
                    this.close();
                    const gris: sp.datagrid.Grids = <any>(this.getAncestorWithClass<any>("Grids"));
                    gris.setRendered(false);
                    gris.render();
                    return null;
                });
            }).catch((e) => {
                const b: Object = <Object>(<Object>e)["body"];
                const pe: Array<Object> = <Array<Object>>b["pageErrors"];
                alert(pe[0]["message"]);
                this.close();
                const gris: sp.datagrid.Grids = <any>(this.getAncestorWithClass<any>("Grids"));
                gris.setRendered(false);
                gris.render();
            });
        }

        public addItem(name: string, label: string, iconName: string) {
            const item: com.spoonconsulting.lightning.MenuItem = new com.spoonconsulting.lightning.MenuItem(name);
            item.setLabel(label);
            item.setPrefixIconName(iconName);
            item.setChecked(false);
            item.addClass("menu-item").addClass(name);
            this.ownerType.addItem(item);
        }

        public refresh(grid: sp.datagrid.DataGrid) {
            this.caseIds = grid.getSelectedIds();
            this.grid_ = grid;
            sp.datagrid.Util.getService().getUsers(null).then((result) => {
                this.input.setOptions(result);
                this.input.render();
            });
        }
    }
    ModalChangeOwner["__class"] = "sp.datagrid.ModalChangeOwner";
    ModalChangeOwner["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalChangeOwner {

        export class ModalChangeOwner$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.input.getCombo().setExpand(false);
                this.__parent.input.setValue(null);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalChangeOwner$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalChangeOwner$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const name: string = source.getName();
                console.info(name);
                const src: com.spoonconsulting.lightning.MenuItem = <com.spoonconsulting.lightning.MenuItem>evt["source"];
                if (this.__parent.type === src.getName()){
                    return;
                }
                this.__parent.type = src.getName();
                if (src.getName() === "users"){
                    this.__parent.ownerType.getButton().setPrefixIconName("standard:avatar");
                    this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
                    if (this.__parent.users == null){
                        sp.datagrid.Util.getService().getUsers(null).then((result) => {
                            this.__parent.input.setOptions(result);
                            this.__parent.input.setRendered(false);
                            this.__parent.users = result;
                            this.__parent.input.render();
                        });
                    } else {
                        this.__parent.input.setOptions(this.__parent.users);
                        this.__parent.input.setRendered(false);
                        this.__parent.input.render();
                    }
                } else if (src.getName() === "portalUser"){
                    this.__parent.ownerType.getButton().setPrefixIconName("standard:customer_portal_users");
                    this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
                    if (this.__parent.customerPortalUsers == null){
                        sp.datagrid.Util.getService().getCustomerPortalUsers().then((result) => {
                            this.__parent.input.setOptions(result);
                            this.__parent.input.setRendered(false);
                            this.__parent.customerPortalUsers = result;
                            this.__parent.input.render();
                        });
                    } else {
                        this.__parent.input.setOptions(this.__parent.customerPortalUsers);
                        this.__parent.input.setRendered(false);
                        this.__parent.input.render();
                    }
                } else if (src.getName() === "queues"){
                    this.__parent.ownerType.getButton().setPrefixIconName("standard:orders");
                    this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#769ED9");
                    if (this.__parent.queues == null){
                        sp.datagrid.Util.getService().getQueues().then((result) => {
                            this.__parent.input.setOptions(result);
                            this.__parent.input.setRendered(false);
                            this.__parent.queues = result;
                            this.__parent.input.render();
                        });
                    } else {
                        this.__parent.input.setOptions(this.__parent.queues);
                        this.__parent.input.setRendered(false);
                        this.__parent.input.render();
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalChangeOwner$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalChangeOwner$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (this.__parent.type === "users"){
                    const txt: string = this.__parent.input.getCombo().getInput().getValue();
                    if (txt.length % 3 === 0){
                        sp.datagrid.Util.getService().getUsers(txt).then((result) => {
                            this.__parent.users = result;
                            this.__parent.input.setOptions(result);
                            this.__parent.input.getCombo().setExpand(true);
                            this.__parent.input.getCombo().getDropdown().setRendered(false);
                            this.__parent.input.getCombo().render();
                        });
                    }
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalChangeOwner$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalChangeOwner$3 implements api.EventListener {
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
        ModalChangeOwner$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalChangeOwner$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.doSave();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalChangeOwner$4["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalCloneList extends com.spoonconsulting.lightning.Modal {
        newListName: com.spoonconsulting.lightning.Input;

        public constructor(name: string) {
            super(name);
            this.newListName = new com.spoonconsulting.lightning.Input("newList");
            this.setTitle("Clone List View");
            this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
            this.newListName.setLabel("Name of new list view:");
            this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
            this.getContent().addChild(this.newListName);
            this.getContent().setStyle("padding", "0.5rem");
            const saveNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            const cancelNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.getFooter().addChild(cancelNewList).addChild(saveNewList);
            saveNewList.addEventListener(new ModalCloneList.ModalCloneList$0(this), "click");
            cancelNewList.addEventListener(new ModalCloneList.ModalCloneList$1(this), "click");
        }

        public setClonedLabel(label: string) {
            this.newListName.setValue(label + " Copy");
        }
    }
    ModalCloneList["__class"] = "sp.datagrid.ModalCloneList";
    ModalCloneList["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalCloneList {

        export class ModalCloneList$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const label: string = <string>this.__parent.newListName.getValue();
                if (label != null && label.trim().length > 0){
                    const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                    grid.cloneList(label);
                    this.__parent.close();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalCloneList$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalCloneList$1 implements api.EventListener {
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
        ModalCloneList$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalCloseCase extends com.spoonconsulting.lightning.Modal {
        radio: com.spoonconsulting.lightning.RadioGroup;

        /*private*/ label: JSContainer;

        /*private*/ selectedId: string;

        /*private*/ optCases: Array<Object>;

        /*private*/ optTasks: Array<Object>;

        public constructor(name: string) {
            super(name);
            this.radio = new com.spoonconsulting.lightning.RadioGroup("status");
            this.label = new JSContainer("label").setStyle("font-weight", "bold");
            this.selectedId = null;
            this.optCases = <any>(new Array<Object>());
            this.optTasks = <any>(new Array<Object>());
            this.setTitle("Close Case");
            const opts: Array<Object> = <any>(new Array<Object>());
            this.addOption("Closed-Resolved", this.optCases);
            this.addOption("Closed-No Action Needed", this.optCases);
            this.radio.setOptions(opts);
            this.radio.addClass("closecases");
            const val: Array<string> = <any>(new Array<string>());
            val.push("Closed-Resolved");
            this.radio.setValue(val);
            this.getContent().setStyle("padding", "1rem");
            this.getContent().addChild(this.label);
            this.getContent().addChild(this.radio);
            const close: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("close");
            close.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            close.setLabel("Close");
            close.addEventListener(new ModalCloseCase.ModalCloseCase$0(this), "click");
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            cancel.setLabel("Cancel");
            cancel.addEventListener(new ModalCloseCase.ModalCloseCase$1(this), "click");
            this.getFooter().addChild(cancel);
            this.getFooter().addChild(close);
        }

        /*private*/ addOption(st: string, opts: Array<Object>) {
            const opt2: Object = <Object>new Object();
            opt2["value"] = st;
            opt2["label"] = "Yes, Closed as : " + st;
            opts.push(opt2);
        }

        public refresh(grid: sp.datagrid.DataGrid, selectedId: string, objectType: string) {
            this.selectedId = selectedId;
            if (objectType === "Case"){
                this.radio.setOptions(this.optCases);
            } else {
                this.radio.setOptions(this.optTasks);
            }
            this.setTitle("Close " + objectType);
            this.label.setHtml("Do you want to close this " + objectType + "?");
        }
    }
    ModalCloseCase["__class"] = "sp.datagrid.ModalCloseCase";
    ModalCloseCase["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalCloseCase {

        export class ModalCloseCase$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const status: string = this.__parent.radio.getValue()[0];
                const caseIds: Array<string> = <any>(new Array<string>());
                caseIds.push(this.__parent.selectedId);
                sp.datagrid.Util.getService().closeCases(status, caseIds).then((result) => {
                    const g: sp.datagrid.Grids = <any>(source.getAncestorWithClass<any>("Grids"));
                    g.getCasesGrid().doRefreshList((res) => {
                        this.__parent.close();
                        g.setRendered(false);
                        g.render();
                        return null;
                    });
                }).catch((e) => {
                    const b: Object = <Object>(<Object>e)["body"];
                    const pe: Array<Object> = <Array<Object>>b["pageErrors"];
                    if (pe != null && pe.length > 0){
                        alert(pe[0]["message"]);
                    }
                    const fe: Object = <Object>b["fieldErrors"];
                    if (fe != null && Object.keys(fe).length > 0){
                        let feMsg: string = "";
                        {
<<<<<<< HEAD
                            let array159 = Object.keys(fe);
                            for(let index158=0; index158 < array159.length; index158++) {
                                let key = array159[index158];
=======
                            let array162 = Object.keys(fe);
                            for(let index161=0; index161 < array162.length; index161++) {
                                let key = array162[index161];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                                {
                                    const f: Array<Object> = <Array<Object>>fe[key];
                                    if (f != null && f.length > 0){
                                        feMsg = feMsg + "\n" + f[0]["message"];
                                    }
                                }
                            }
                        }
                        if (feMsg != null){
                            alert(feMsg);
                        }
                    }
                    this.__parent.close();
                    const gris: sp.datagrid.Grids = <any>(this.__parent.getAncestorWithClass("Grids"));
                    gris.setRendered(false);
                    gris.render();
                });
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalCloseCase$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalCloseCase$1 implements api.EventListener {
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
        ModalCloseCase$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalDeleteList extends com.spoonconsulting.lightning.Modal {
        public constructor(name: string) {
            super(name);
            this.setTitle("Delete List View");
            const labelDelete: JSContainer = new JSContainer("p").setHtml("Are you sure you want to delete this list view?");
            this.getContent().addChild(labelDelete).setStyle("padding", "1rem").setStyle("text-align", "center");
            const cancelDeleteList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            const deleteDeleteList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("delete").setLabel("Delete").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.getFooter().addChild(cancelDeleteList).addChild(deleteDeleteList);
            deleteDeleteList.addEventListener(new ModalDeleteList.ModalDeleteList$0(this), "click");
            cancelDeleteList.addEventListener(new ModalDeleteList.ModalDeleteList$1(this), "click");
        }
    }
    ModalDeleteList["__class"] = "sp.datagrid.ModalDeleteList";
    ModalDeleteList["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalDeleteList {

        export class ModalDeleteList$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                grid.deleteList();
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalDeleteList$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalDeleteList$1 implements api.EventListener {
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
        ModalDeleteList$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalFieldSelector extends com.spoonconsulting.lightning.Modal {
        /*private*/ listBox: com.spoonconsulting.lightning.DualListBox;

        /*private*/ options: Array<Object>;

        /*private*/ save: com.spoonconsulting.lightning.Button;

        /*private*/ cancel: com.spoonconsulting.lightning.Button;

        public constructor(name: string, grid: sp.datagrid.DataGrid) {
            super(name);
            this.listBox = new com.spoonconsulting.lightning.DualListBox("listBox");
            this.options = <any>(new Array<Object>());
            this.save = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            this.cancel = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.setTitle("Select Fields to display");
            this.listBox.setLabel("Select fields to display");
            this.listBox.setSourceLabel("Available Fields");
            this.listBox.setSelectedLabel("Visible Fields");
            this.listBox.setAddButtonLabel("Move selection to Visible Fields");
            this.listBox.setRemoveButtonLabel("Move selection to Available Fields");
            this.listBox.setUpButtonLabel("Move selection up");
            this.listBox.setDownButtonLabel("Move selection down");
            this.listBox.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_HIDDEN);
            this.getContent().addChild(this.listBox).setStyle("padding", "1rem 2.5rem").setStyle("height", "300px");
            this.getFooter().addChild(this.cancel).addChild(this.save);
            this.cancel.addEventListener(new ModalFieldSelector.ModalFieldSelector$0(this), "click");
            this.save.addEventListener(new ModalFieldSelector.ModalFieldSelector$1(this, grid), "click");
        }

        public setColumns(cols: Array<Object>) {
            const values: Array<string> = <any>(new Array<string>());
            this.options = <any>(new Array<Object>());
            const precols: Object[] = cols.sort((a, b) => {
                const l1: number = <number>a["position"];
                const l2: number = <number>b["position"];
                return parseFloat(/* compareTo */(<any>((o1: any, o2: any) => { if (o1 && o1.compareTo) { return o1.compareTo(o2); } else { return o1 < o2 ? -1 : o2 < o1 ? 1 : 0; } })(l1,l2)) + "");
            });
<<<<<<< HEAD
            for(let index160=0; index160 < precols.length; index160++) {
                let col = precols[index160];
=======
            for(let index163=0; index163 < precols.length; index163++) {
                let col = precols[index163];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    const option: Object = <Object>new Object();
                    option["value"] = <string>col["fieldName"];
                    option["label"] = <string>col["label"];
                    const hidden: boolean = <boolean>col["hidden"];
<<<<<<< HEAD
                    if (hidden == null || !hidden){
=======
                    const display: boolean = <boolean>col["display"];
                    if ((hidden == null || !hidden)){
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        values.push(<string>col["fieldName"]);
                    }
                    this.options.push(option);
                }
            }
            let sorted: Object[] = this.options.sort((a, b) => {
                const l1: number = <number>a["position"];
                const l2: number = <number>b["position"];
                return parseFloat(/* compareTo */(<any>((o1: any, o2: any) => { if (o1 && o1.compareTo) { return o1.compareTo(o2); } else { return o1 < o2 ? -1 : o2 < o1 ? 1 : 0; } })(l1,l2)) + "");
            });
            this.options = <any>(new Array<Object>());
<<<<<<< HEAD
            for(let index161=0; index161 < sorted.length; index161++) {
                let o = sorted[index161];
=======
            for(let index164=0; index164 < sorted.length; index164++) {
                let o = sorted[index164];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    this.options.push(o);
                }
            }
            this.listBox.setOptions(this.options);
            this.listBox.setValue(values);
            sorted = this.options.sort((a, b) => {
                const l1: string = <string>a["label"];
                const l2: string = <string>b["label"];
                return parseFloat(/* compareTo */l1.localeCompare(l2) + "");
            });
            this.options = <any>(new Array<Object>());
<<<<<<< HEAD
            for(let index162=0; index162 < sorted.length; index162++) {
                let o = sorted[index162];
=======
            for(let index165=0; index165 < sorted.length; index165++) {
                let o = sorted[index165];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    this.options.push(o);
                }
            }
            this.listBox.setOptions(this.options);
        }
    }
    ModalFieldSelector["__class"] = "sp.datagrid.ModalFieldSelector";
    ModalFieldSelector["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalFieldSelector {

        export class ModalFieldSelector$0 implements api.EventListener {
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
        ModalFieldSelector$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalFieldSelector$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const values: Array<string> = this.__parent.listBox.getValue();
                this.grid.showColumns(values);
                this.__parent.close();
            }

            constructor(__parent: any, private grid: any) {
                this.__parent = __parent;
            }
        }
        ModalFieldSelector$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalListFilters extends com.spoonconsulting.lightning.Modal {
        /*private*/ list: JSContainer;

        /*private*/ filters: Array<Object>;

        /*private*/ type_: string;

        public constructor(name: string, type: string) {
            super(name);
            this.list = new JSContainer("lis", "ul");
            this.filters = <any>(new Array<Object>());
            if (this.type_ === undefined) { this.type_ = null; }
            this.type_ = type;
            this.setTitle("Filters");
            this.addClass("list-filters");
            this.getContent().setStyle("padding", "1rem").addChild(this.list);
            const close: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("close");
            close.setLabel("Close");
            this.getFooter().addChild(close);
            close.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            close.addEventListener(new ModalListFilters.ModalListFilters$0(this), "click");
        }

        public addFilter(o: Object) {
            const label: string = <string>o["Label__c"];
            const li: JSContainer = new JSContainer(o["Id"] + "", "li");
            const a: JSContainer = new JSContainer("", "a").setAttribute("href", "javascript:void(0);").setHtml(label);
            li.addChild(a);
            this.list.addChild(li);
            a.addEventListener(new ModalListFilters.ModalListFilters$1(this, o), "click");
        }

        public refresh() {
            sp.datagrid.Util.getService().getFilters(this.type_).then((result) => {
                this.filters = result;
                this.list.clearChildren();
                this.list.setRendered(false);
<<<<<<< HEAD
                for(let index163=0; index163 < this.filters.length; index163++) {
                    let o = this.filters[index163];
=======
                for(let index166=0; index166 < this.filters.length; index166++) {
                    let o = this.filters[index166];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        this.addFilter(o);
                    }
                }
                this.render();
            });
        }
    }
    ModalListFilters["__class"] = "sp.datagrid.ModalListFilters";
    ModalListFilters["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalListFilters {

        export class ModalListFilters$0 implements api.EventListener {
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
        ModalListFilters$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalListFilters$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                grid.setFilters$jsweet_lang_Object(this.o);
                grid.doRefreshList((r) => {
                    this.__parent.close();
                    this.__parent.getParent().render();
                    return null;
                });
            }

            constructor(__parent: any, private o: any) {
                this.__parent = __parent;
            }
        }
        ModalListFilters$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalMergeCases extends com.spoonconsulting.lightning.Modal {
        /*private*/ grid: sp.datagrid.Grids;

        h3: JSContainer;

        public constructor(name: string) {
            super(name);
            if (this.grid === undefined) { this.grid = null; }
            this.h3 = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
            this.setTitle("Merge Cases");
            const h1: JSContainer = new JSContainer("h3");
            h1.addClass("slds-text-heading--large slds-text-align--center slds-p-bottom--small setupFlowHeader");
            this.getContent().addClass("slds-p-around--x-large");
            this.getContent().addChild(h1);
            h1.setHtml("Confirm merge");
            const h2: JSContainer = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
            h2.setHtml("We\'re ready to merge these records");
            this.h3.setHtml("You are about to merge 2 cases. You can\'t undo a merge");
            this.getContent().addChild(h2).addChild(this.h3);
            const merge: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("merge");
            merge.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            merge.setLabel("Merge Cases");
            merge.addEventListener(new ModalMergeCases.ModalMergeCases$0(this), "click");
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            cancel.setLabel("Cancel");
            cancel.addEventListener(new ModalMergeCases.ModalMergeCases$1(this), "click");
            this.getFooter().addChild(cancel).addChild(merge);
        }

        public refresh(grids: sp.datagrid.Grids) {
            this.grid = grids;
            const caseIds: Array<string> = grids.getCasesGrid().getGrid().getSelectedIds();
            this.h3.setHtml("You are about to merge " + caseIds.length + " cases. You can\'t undo a merge");
        }
    }
    ModalMergeCases["__class"] = "sp.datagrid.ModalMergeCases";
    ModalMergeCases["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalMergeCases {

        export class ModalMergeCases$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const caseIds: Array<string> = this.__parent.grid.getCasesGrid().getGrid().getSelectedIds();
                sp.datagrid.Util.getService().mergeCases(caseIds).then((result) => {
                    if (result + "" === "nopermission"){
                        alert("You do not have the right to merge cases");
                        this.__parent.close();
                    } else if (result + "" === "merged"){
                        alert("You cannot merge already merged cases");
                        this.__parent.close();
<<<<<<< HEAD
=======
                    } else if (result + "" === "not-email"){
                        alert("Only cases with origin Email and CEVA can be merged");
                        this.__parent.close();
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    }
                    this.__parent.grid.getCasesGrid().doRefreshList((res) => {
                        this.__parent.close();
                        this.__parent.grid.setRendered(false);
                        this.__parent.grid.render();
                        return null;
                    });
                }).catch((e) => {
                    const b: Object = <Object>(<Object>e)["body"];
                    const pe: Array<Object> = <Array<Object>>b["pageErrors"];
                    alert(pe[0]["message"]);
                    this.__parent.close();
                    this.__parent.grid.setRendered(false);
                    this.__parent.grid.render();
                });
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalMergeCases$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalMergeCases$1 implements api.EventListener {
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
        ModalMergeCases$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalNewList extends com.spoonconsulting.lightning.Modal {
        /*private*/ newListName: com.spoonconsulting.lightning.Input;

        public constructor(name: string) {
            super(name);
            this.newListName = new com.spoonconsulting.lightning.Input("newList");
            this.setTitle("New List View");
            this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
            this.newListName.setLabel("Name of new list view:");
            this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
            this.getContent().addChild(this.newListName);
            this.getContent().setStyle("padding", "0.5rem");
            const saveNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            const cancelNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.getFooter().addChild(cancelNewList).addChild(saveNewList);
            saveNewList.addEventListener(new ModalNewList.ModalNewList$0(this), "click");
            cancelNewList.addEventListener(new ModalNewList.ModalNewList$1(this), "click");
        }
    }
    ModalNewList["__class"] = "sp.datagrid.ModalNewList";
    ModalNewList["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalNewList {

        export class ModalNewList$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const label: string = <string>this.__parent.newListName.getValue();
                if (label != null && label.trim().length > 0){
                    const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                    grid.addList(label);
                    this.__parent.close();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalNewList$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalNewList$1 implements api.EventListener {
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
        ModalNewList$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalRecordType extends com.spoonconsulting.lightning.Modal {
        /*private*/ recs: com.spoonconsulting.lightning.RadioGroup;

        public constructor(name: string, objectType: string) {
            super(name);
            this.recs = new com.spoonconsulting.lightning.RadioGroup("recs");
            this.addClass("modal-recordtype");
            this.setTitle("New " + objectType);
            this.getContent().setStyle("padding", "2rem");
            this.getContent().addChild(this.recs);
            this.recs.setLabel("Choose a Record Type:");
            sp.datagrid.Util.getService().getRecordTypes(objectType).then((result) => {
                const options: Array<Object> = <any>(new Array<Object>());
<<<<<<< HEAD
                for(let index164=0; index164 < result.length; index164++) {
                    let o = result[index164];
=======
                for(let index167=0; index167 < result.length; index167++) {
                    let o = result[index167];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        const opt: Object = <Object>new Object();
                        opt["value"] = <string>o["Id"];
                        opt["label"] = <string>o["Name"];
                        options.push(opt);
                    }
                }
                const val: Array<string> = <any>(new Array<string>());
                val.push(<string>options[0]["value"]);
                this.recs.setOptions(options);
                this.recs.setValue(val);
                this.recs.setRendered(false);
                this.recs.render();
            }).catch((e) => {
            });
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setLabel("Cancel");
            cancel.addEventListener(new ModalRecordType.ModalRecordType$0(this), "click");
            const next: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("next");
            next.setLabel("Next");
            next.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            next.addEventListener(new ModalRecordType.ModalRecordType$1(this, objectType), "click");
            this.getFooter().addChild(cancel).addChild(next);
            this.getContent().addClass("closecases");
        }
    }
    ModalRecordType["__class"] = "sp.datagrid.ModalRecordType";
    ModalRecordType["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalRecordType {

        export class ModalRecordType$0 implements api.EventListener {
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
        ModalRecordType$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalRecordType$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const gris: sp.datagrid.Grids = <any>(source.getAncestorWithClass<any>("Grids"));
                evt["objectType"] = this.objectType;
                evt["recordTypeId"] = this.__parent.recs.getValue()[0];
                gris.fireListener("createNew", evt);
                this.__parent.close();
            }

            constructor(__parent: any, private objectType: any) {
                this.__parent = __parent;
            }
        }
        ModalRecordType$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class ModalRenameList extends com.spoonconsulting.lightning.Modal {
        newListName: com.spoonconsulting.lightning.Input;

        public constructor(name: string) {
            super(name);
            this.newListName = new com.spoonconsulting.lightning.Input("newList");
            this.setTitle("Rename List View");
            this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
            this.newListName.setLabel("New Name of list view:");
            this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
            this.getContent().addChild(this.newListName);
            this.getContent().setStyle("padding", "0.5rem");
            const saveNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
            const cancelNewList: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
            this.getFooter().addChild(cancelNewList).addChild(saveNewList);
            saveNewList.addEventListener(new ModalRenameList.ModalRenameList$0(this), "click");
            cancelNewList.addEventListener(new ModalRenameList.ModalRenameList$1(this), "click");
        }

        public setCurrentLabel(label: string) {
            this.newListName.setValue(label);
        }
    }
    ModalRenameList["__class"] = "sp.datagrid.ModalRenameList";
    ModalRenameList["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ModalRenameList {

        export class ModalRenameList$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const label: string = <string>this.__parent.newListName.getValue();
                if (label != null && label.trim().length > 0){
                    const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                    grid.renameList(label);
                    this.__parent.close();
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ModalRenameList$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class ModalRenameList$1 implements api.EventListener {
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
        ModalRenameList$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {}
namespace sp.datagrid {
    export class TableTitle extends JSContainer {
        /*private*/ icon: JSContainer;

        /*private*/ subtitle: JSContainer;

        /*private*/ title: JSContainer;

        /*private*/ menu: com.spoonconsulting.lightning.ButtonMenu;

        /*private*/ pin: com.spoonconsulting.lightning.ButtonIcon;

<<<<<<< HEAD
        public constructor(name: string) {
=======
        public constructor(name: string, dry: boolean) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            super(name, "div");
            this.icon = new JSContainer("img");
            this.subtitle = new JSContainer("span").addClass("slds-var-p-right_x-small");
            this.title = new JSContainer("title", "span");
            this.menu = new com.spoonconsulting.lightning.ButtonMenu("menu", "div");
            this.pin = new com.spoonconsulting.lightning.ButtonIcon("", "utility:pin");
            this.addClass("slds-media").addClass("slds-no-space").addClass("slds-grow");
            const iconctn: JSContainer = new JSContainer("div").addClass("slds-avatar").addClass("slds-m-right_small").setStyle("margin-top", "6px");
            this.addChild(iconctn);
<<<<<<< HEAD
            this.icon.setAttribute("src", "https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png");
=======
            this.icon.setAttribute("src", "https://ceva--uat.sandbox.lightning.force.com/img/icon/t4v35/standard/case_120.png");
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
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
<<<<<<< HEAD
            const switcher: JSContainer = new JSContainer("div").addClass("slds-page-header__name-switcher");
            switcher.addChild(this.menu);
            this.menu.getButton().addClass("slds-button--reset").addClass("slds-m-top_xxx-small").addClass("slds-p-right_xxx-small");
            this.menu.setButtonSize(com.spoonconsulting.lightning.enums.Size.EXTRA_SMALL);
            this.menu.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BARE);
            headerName.addChild(switcher);
            switcher.addChild(this.pin);
            this.pin.setTitle("Pin this list");
            this.pin.addEventListener(new TableTitle.TableTitle$0(this), "click");
            this.pin.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BARE);
            this.title.addEventListener(new TableTitle.TableTitle$1(this), "click");
            this.menu.addEventListener(new TableTitle.TableTitle$2(this), "click");
=======
            if (!dry){
                const switcher: JSContainer = new JSContainer("div").addClass("slds-page-header__name-switcher");
                switcher.addChild(this.menu);
                this.menu.getButton().addClass("slds-button--reset").addClass("slds-m-top_xxx-small").addClass("slds-p-right_xxx-small");
                this.menu.setButtonSize(com.spoonconsulting.lightning.enums.Size.EXTRA_SMALL);
                this.menu.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BARE);
                headerName.addChild(switcher);
                switcher.addChild(this.pin);
                this.pin.setTitle("Pin this list");
                this.pin.addEventListener(new TableTitle.TableTitle$0(this), "click");
                this.pin.setVariant(com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant.BARE);
                this.title.addEventListener(new TableTitle.TableTitle$1(this), "click");
                this.menu.addEventListener(new TableTitle.TableTitle$2(this), "click");
            }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
        }

        public doOpenListFilters(source: api.Renderable) {
            const grid: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
            grid.openListFilters();
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

        public setPinned(b: boolean) {
            this.pin.setIconName(b ? "utility:pinned" : "utility:pin");
        }
    }
    TableTitle["__class"] = "sp.datagrid.TableTitle";
    TableTitle["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace TableTitle {

        export class TableTitle$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (this.__parent.pin.getIconName() === "utility:pin"){
                    const gr: sp.datagrid.HeavyGrid = <any>(source.getAncestorWithClass<any>("HeavyGrid"));
                    gr.pinCurrent();
                    this.__parent.pin.setIconName("utility:pinned");
                } else {
                    alert("Pin another list");
                }
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        TableTitle$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class TableTitle$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.doOpenListFilters(source);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        TableTitle$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class TableTitle$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.doOpenListFilters(source);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        TableTitle$2["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace sp.datagrid {
    export class TextSearch extends JSContainer {
        /*private*/ input: input.JSTextInput;

        /*private*/ list: JSContainer;

        /*private*/ cached: boolean;

        /*private*/ objectType: string;

        /*private*/ column: Object;

        /*private*/ searching: boolean;

        /*private*/ bd: com.spoonconsulting.lightning.Modal.BackDrop;

        /*private*/ timeoutHandle: number;

        public constructor(name: string, objectType: string, col: Object) {
            super(name, "div");
            this.input = new input.JSTextInput("txt");
            this.list = new JSContainer("list", "ul");
            this.cached = false;
            if (this.objectType === undefined) { this.objectType = null; }
            if (this.column === undefined) { this.column = null; }
            this.searching = false;
            this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("3");
            this.timeoutHandle = -1;
            this.column = col;
            this.bd.setStyle("display", "none");
            this.objectType = objectType;
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
            TextSearch.addOpt("3-days", "Since last 3 days", opts);
            TextSearch.addOpt("7-days", "Since last week", opts);
            TextSearch.addOpt("14-days", "Since last fortnight", opts);
            TextSearch.addOpt("31-days", "Since last month", opts);
            TextSearch.addOpt("90-days", "Since last 3 months", opts);
            TextSearch.addOpt("-90-days", "Up to next 3 months", opts);
            TextSearch.addOpt("-31-days", "Up to next month", opts);
            TextSearch.addOpt("-14-days", "Up to next fortnight", opts);
            TextSearch.addOpt("-7-days", "Up to next week", opts);
            TextSearch.addOpt("-3-days", "Up to next 3 days", opts);
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
<<<<<<< HEAD
                let array166 = this.getItems();
                for(let index165=0; index165 < array166.length; index165++) {
                    let item = array166[index165];
=======
                let array169 = this.getItems();
                for(let index168=0; index168 < array169.length; index168++) {
                    let item = array169[index168];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
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

        requireRefresh(): boolean {
            const type: string = <string>this.column["type"];
            const sfType: string = <string>this.column["sfType"];
            if (type === "Boolean"){
                return false;
            }
            if (sfType === "PICKLIST" || sfType === "PICKLIST" || sfType === "MULTIPICKLIST" || sfType === "DATE" || sfType === "DATETIME"){
                return false;
            }
            return true;
        }

        isPicklist(): boolean {
            const sfType: string = <string>this.column["sfType"];
            if (sfType === "PICKLIST" || sfType === "PICKLIST" || sfType === "MULTIPICKLIST"){
                return true;
            }
            return false;
        }

        public doRemoteSearch(force: boolean) {
            const type: string = <string>this.column["type"];
            const sfType: string = <string>this.column["sfType"];
            if (sfType === "DATE" || sfType === "DATETIME"){
                return;
            }
            if (type === "Boolean"){
                if (this.column.hasOwnProperty("includes")){
                    const incl: Array<string> = <Array<string>>this.column["includes"];
                    this.setSelectedOptions(incl);
                }
            }
            if (!this.cached && type !== "Boolean"){
                const fieldName: string = /* replace */this.getName().split("textSearch_").join("");
                let txt: string = this.input.getValue();
                const picklist: boolean = this.isPicklist();
                if (txt != null && txt.trim().length > 0 || picklist || force){
                    txt = /* replace */txt.split("*").join("%");
                    const page: number = 0;
                    if (force){
                        txt = "%";
                    }
                    const va: string = txt;
                    clearTimeout(this.timeoutHandle);
                    this.timeoutHandle = -1;
                    const hg: sp.datagrid.HeavyGrid = <any>(this.getAncestorWithClass<any>("HeavyGrid"));
                    const filterId: string = hg.getFilterId();
                    this.timeoutHandle = setTimeout((((filterId,fieldName,va,page) => {
                        return () => {
                            this.searching = true;
                            this.list.setStyle("opacity", "0.4").setStyle("background", "silver").render();
                            sp.datagrid.Util.getService().getFieldValues(fieldName, va, page, this.objectType, filterId).then((result) => {
                                this.searching = false;
                                if (!this.requireRefresh()){
                                    this.cached = true;
                                }
                                this.list.setStyle("opacity", null).setStyle("background", null);
                                this.setRendered(false);
                                this.setData(result);
                                if (this.column.hasOwnProperty("includes")){
                                    const incl: Array<string> = <Array<string>>this.column["includes"];
                                    this.setSelectedOptions(incl);
                                }
                                this.render();
                                const el: HTMLInputElement = <HTMLInputElement>this.input.getElement();
                                el.focus();
                                el.setSelectionRange(el.value.length, el.value.length);
                            }).catch((e) => {
                                this.searching = false;
                            });
                        }
                    })(filterId,fieldName,va,page)), picklist || force ? 100 : 3000);
                }
            }
        }

        public setTree(tree: com.spoonconsulting.lightning.Tree) {
            this.list.clearChildren();
            const selall: JSContainer = new JSContainer("li");
            selall.addChild(tree);
            this.list.addChild(selall);
        }

        public setData(data: Array<Object>) {
            if (data != null){
                const selected: Array<Object> = this.getSelectedOptions();
                this.list.clearChildren();
                const selall: JSContainer = new JSContainer("li");
                selall.addChild(new com.spoonconsulting.lightning.CheckBox("cl").addEventListener(new TextSearch.TextSearch$1(this), "change")).addChild(new JSContainer("span").setStyle("font-weight", "bold").addClass("slds-truncate").setHtml("Select All"));
                this.list.addChild(selall);
                const used: Array<Object> = <any>(new Array<Object>());
<<<<<<< HEAD
                for(let index167=0; index167 < data.length; index167++) {
                    let line = data[index167];
=======
                for(let index170=0; index170 < data.length; index170++) {
                    let line = data[index170];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        const item: TextSearch.ListItem = this.getListItem(line);
                        const selItem: Object = TextSearch.getInSelected(line, selected);
                        if (selItem != null){
                            item.setSelected(true);
                            used.push(line);
                        }
                        this.list.addChild(item);
                    }
                }
                if (used.length < selected.length){
<<<<<<< HEAD
                    for(let index168=0; index168 < selected.length; index168++) {
                        let sel = selected[index168];
=======
                    for(let index171=0; index171 < selected.length; index171++) {
                        let sel = selected[index171];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            const ins: Object = TextSearch.getInSelected(sel, used);
                            if (ins == null){
                                const item: TextSearch.ListItem = this.getListItem(sel);
                                item.setSelected(true);
                                this.list.addChildAt(0, item);
                            }
                        }
                    }
                }
            }
        }

        static getInSelected(line: Object, selected: Array<Object>): Object {
<<<<<<< HEAD
            for(let index169=0; index169 < selected.length; index169++) {
                let sel = selected[index169];
=======
            for(let index172=0; index172 < selected.length; index172++) {
                let sel = selected[index172];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
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
<<<<<<< HEAD
                let array171 = this.getItems();
                for(let index170=0; index170 < array171.length; index170++) {
                    let item = array171[index170];
=======
                let array174 = this.getItems();
                for(let index173=0; index173 < array174.length; index173++) {
                    let item = array174[index173];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        if (item.isSelected()){
                            result.push(item.getData());
                        }
                    }
                }
            }
            return result;
        }
    }
    TextSearch["__class"] = "sp.datagrid.TextSearch";
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
        ListItem["__class"] = "sp.datagrid.TextSearch.ListItem";
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
                if (!this.__parent.requireRefresh()){
                    const items: Array<TextSearch.ListItem> = this.__parent.getItems();
<<<<<<< HEAD
                    for(let index172=0; index172 < items.length; index172++) {
                        let item = items[index172];
=======
                    for(let index175=0; index175 < items.length; index175++) {
                        let item = items[index175];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
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
                } else {
                    if (!this.__parent.searching)this.__parent.doRemoteSearch(false);
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
<<<<<<< HEAD
                    let array174 = this.__parent.getItems();
                    for(let index173=0; index173 < array174.length; index173++) {
                        let item = array174[index173];
=======
                    let array177 = this.__parent.getItems();
                    for(let index176=0; index176 < array177.length; index176++) {
                        let item = array177[index176];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
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
namespace sp.datagrid {
    export class Util {
        public static getService(): sp.datagrid.HompPageService {
            if (/* contains */(window.location.href.indexOf("localhost") != -1))return new sp.datagrid.MockHomePageService();
            return new sp.datagrid.ApexHomePageService();
        }

        public static preprocessData(cols: Array<Object>, data: Array<Object>) {
            console.info(data);
<<<<<<< HEAD
            for(let index175=0; index175 < data.length; index175++) {
                let dat = data[index175];
                {
                    for(let index176=0; index176 < cols.length; index176++) {
                        let col = cols[index176];
=======
            for(let index178=0; index178 < data.length; index178++) {
                let dat = data[index178];
                {
                    for(let index179=0; index179 < cols.length; index179++) {
                        let col = cols[index179];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            const type: string = <string>col["type"];
                            const name: string = <string>col["fieldName"];
                            if (type === "String"){
                                if (/* contains */(name.indexOf(".") != -1)){
                                    const parts: string[] = name.split(".");
                                    const top: Object = <Object>dat[parts[0]];
                                    if (top != null){
                                        const met: Object = <Object>new Object();
                                        const label: string = <string>top[parts[1]];
                                        const value: string = <string>top["Id"];
                                        if (value != null && label != null){
                                            met["value"] = value;
                                            met["label"] = label;
                                            let meta: Array<Object> = <Array<Object>>col["metadata"];
                                            if (meta == null){
                                                meta = <any>(new Array<Object>());
                                                col["metadata"] = meta;
                                            }
                                            if (meta.indexOf(met) < 0){
                                                meta.push(met);
                                            }
                                        }
                                    }
                                } else if (name === "CaseNumber"){
                                    const value: string = <string>dat["Id"];
                                    const label: string = <string>dat[name];
                                    const met: Object = <Object>new Object();
                                    met["value"] = value;
                                    met["label"] = label;
                                    let meta: Array<Object> = <Array<Object>>col["metadata"];
                                    if (meta == null){
                                        meta = <any>(new Array<Object>());
                                        col["metadata"] = meta;
                                    }
                                    if (meta.indexOf(met) < 0){
                                        meta.push(met);
                                    }
                                } else {
                                    const value: string = <string>dat[name];
                                    let meta: Array<Object> = <Array<Object>>col["metadata"];
                                    if (meta == null){
                                        meta = <any>(new Array<Object>());
                                        col["metadata"] = meta;
                                    }
                                    if (value != null){
                                        const met: Object = <Object>new Object();
                                        met["value"] = value;
                                        met["label"] = value;
                                        if (meta.indexOf(met) < 0){
                                            meta.push(met);
                                        }
                                    }
                                }
                            } else if (type === "Boolean"){
                                let metadata: Array<Object> = <Array<Object>>col["metadata"];
                                if (metadata == null){
                                    metadata = <any>(new Array<Object>());
                                    const tr: Object = <Object>new Object();
                                    tr["label"] = "TRUE";
                                    tr["value"] = "TRUE";
                                    metadata.push(tr);
                                    const fl: Object = <Object>new Object();
                                    fl["label"] = "FALSE";
                                    fl["value"] = "FALSE";
                                    metadata.push(fl);
                                    col["metadata"] = metadata;
                                }
                            } else if (type === "DateTime"){
                                let metadata: Array<Object> = <Array<Object>>col["metadata"];
                                if (metadata == null){
                                    metadata = <any>(new Array<Object>());
                                    col["metadata"] = metadata;
                                }
                                const dt: Date = new Date(<string>dat[name]);
                                const year: number = dt.getFullYear();
                                const oyear: Object = Util.getYear(metadata, year);
                                const months: Array<Object> = <Array<Object>>oyear["children"];
                                const month: number = dt.getMonth();
                                const omonth: Object = Util.getMonth(months, month);
                                const dates: Array<number> = <Array<number>>omonth["children"];
                                const date: number = dt.getDate();
                                if (dates.indexOf(date) < 0){
                                    dates.push(date);
                                    omonth["children"] = dates;
                                }
                            }
                        }
                    }
                }
            }
        }

        public static getMonth(months: Array<Object>, month: number): Object {
<<<<<<< HEAD
            for(let index177=0; index177 < months.length; index177++) {
                let m = months[index177];
=======
            for(let index180=0; index180 < months.length; index180++) {
                let m = months[index180];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    const va: number = <number>m["value"];
                    if (va === month){
                        return m;
                    }
                }
            }
            const m: Object = <Object>new Object();
            m["value"] = month;
            m["children"] = new Array<number>();
            months.push(m);
            return m;
        }

        public static getYear(met: Array<Object>, year: number): Object {
<<<<<<< HEAD
            for(let index178=0; index178 < met.length; index178++) {
                let o = met[index178];
=======
            for(let index181=0; index181 < met.length; index181++) {
                let o = met[index181];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                {
                    const val: number = <number>o["value"];
                    if (val === year){
                        return o;
                    }
                }
            }
            const y: Object = <Object>new Object();
            y["value"] = year;
            const children: Array<Object> = <any>(new Array<Object>());
            y["children"] = children;
            met.push(y);
            return y;
        }

        public static extractVal(data: Object, name: string, type: string): any {
            let raw: any = null;
            if (/* contains */(name.indexOf(".") != -1)){
                const path: string[] = name.split(".");
                const top: Object = <Object>data[path[0]];
                if (top != null){
                    raw = top[path[1]];
                }
            } else {
                raw = data[name];
            }
            if (type === "Boolean"){
                if (raw == null || !<boolean>raw){
                    return false;
                } else {
                    return true;
                }
            } else if (type === "DateTime"){
                if (raw == null){
                    return null;
                } else {
                    return new Date(raw.toString());
                }
            } else {
                return raw;
            }
        }
    }
    Util["__class"] = "sp.datagrid.Util";

}
namespace sp.datagrid {
    export class BooleanDataCell extends sp.datagrid.DataCell {
        /*private*/ cb: com.spoonconsulting.lightning.CheckBox;

        public constructor(name: string, value: boolean) {
            super(name, "");
            this.cb = new com.spoonconsulting.lightning.CheckBox(this.getName());
            this.clearChildren();
            this.addChild(this.cb);
            this.cb.setValue(value);
            this.setAlign("center");
            this.value = value;
        }

        public setValue(b: boolean) {
            this.cb.setValue(b);
        }

        public getValue(): boolean {
            return this.cb.getValue();
        }
    }
    BooleanDataCell["__class"] = "sp.datagrid.BooleanDataCell";
    BooleanDataCell["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace sp.datagrid {
    export class ClickableDataCell extends sp.datagrid.DataCell {
        public constructor(name: string, txt: string, Id: string) {
            super(name, txt);
            this.div.setHtml("");
            const a: JSContainer = new JSContainer("a");
            a.setHtml(txt);
<<<<<<< HEAD
            a.setAttribute("href", "/" + Id);
            a.setAttribute("target", "_blank");
=======
            a.addEventListener(new ClickableDataCell.ClickableDataCell$0(this, Id), "click");
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            this.div.addChild(a);
        }
    }
    ClickableDataCell["__class"] = "sp.datagrid.ClickableDataCell";
    ClickableDataCell["__interfaces"] = ["framework.components.api.Renderable"];


<<<<<<< HEAD
=======

    export namespace ClickableDataCell {

        export class ClickableDataCell$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                evt["recordId"] = this.Id;
                evt["objectType"] = "Task";
                const grids: sp.datagrid.Grids = <any>(source.getAncestorWithClass<any>("Grids"));
                grids.fireListener("viewRecord", evt);
            }

            constructor(__parent: any, private Id: any) {
                this.__parent = __parent;
            }
        }
        ClickableDataCell$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
}
namespace sp.datagrid {
    export class DateDataCell extends sp.datagrid.DataCell {
        public constructor(name: string, date: Date) {
            super(name, "");
            this.value = date;
            this.setText(this.formatDate(date));
        }

        /*private*/ formatDate(dt: Date): string {
            const ft: Intl.DateTimeFormat = new Intl.DateTimeFormat();
            return ft.format(dt);
        }

        public getValue(): Date {
            return <Date>this.value;
        }
    }
    DateDataCell["__class"] = "sp.datagrid.DateDataCell";
    DateDataCell["__interfaces"] = ["framework.components.api.Renderable"];


}

var __Function = Function;

sp.datagrid.ApexHomePageService.container_$LI$();

sp.datagrid.App.main(null);
