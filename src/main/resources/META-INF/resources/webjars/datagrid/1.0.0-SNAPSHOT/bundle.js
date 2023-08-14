/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var sp;
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class AdvancedDateSearch extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.body = new JSContainer("div");
                if (this.column === undefined) {
                    this.column = null;
                }
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
                const and = new Object();
                and["value"] = "and";
                and["label"] = "And";
                const or = new Object();
                or["value"] = "or";
                or["label"] = "Or";
                const andOrOpts = (new Array());
                andOrOpts.push(and);
                andOrOpts.push(or);
                this.andOr.setOptions(andOrOpts);
                this.andOr.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_HIDDEN);
                const layout = new com.spoonconsulting.lightning.Layout("layout", "div").setMultipleRows(true);
                const top = new com.spoonconsulting.lightning.LayoutItem("top", "div").setSize(12);
                const middle = new com.spoonconsulting.lightning.LayoutItem("middle", "div").setSize(12);
                const bottom = new com.spoonconsulting.lightning.LayoutItem("bottom", "div").setSize(12);
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
            getFilter() {
                const result = new Object();
                if (this.criteria1.getCriteria(result)) {
                    if (this.criteria2.getCriteria(result)) {
                        const sandOr = this.andOr.getValue()[0];
                        result["andOr"] = sandOr;
                    }
                }
                return result;
            }
            getFieldName() {
                return this.column["fieldName"];
            }
            getObjectType() {
                return this.objectType;
            }
            refresh(col, objectType) {
                const sfType = col["sfType"];
                if (sfType === "DATETIME") {
                    this.criteria1.setTime(true);
                    this.criteria2.setTime(true);
                }
                else {
                    this.criteria1.setTime(false);
                    this.criteria2.setTime(false);
                }
                if (col.hasOwnProperty("custom") && col["custom"] != null) {
                    const cu = col["custom"];
                    const sAndor = cu["andOr"];
                    const arandor = (new Array());
                    arandor.push(sAndor);
                    this.andOr.setValue(arandor);
                    this.criteria1.setValue(cu);
                    this.criteria2.setValue(cu);
                }
                else {
                    const arandor = (new Array());
                    arandor.push("and");
                    this.andOr.setValue(arandor);
                    this.criteria1.setValue(null);
                    this.criteria2.setValue(null);
                }
                this.column = col;
                this.objectType = objectType;
                const label = col["label"];
                this.plabel.setHtml(label);
            }
        }
        datagrid.AdvancedDateSearch = AdvancedDateSearch;
        AdvancedDateSearch["__class"] = "sp.datagrid.AdvancedDateSearch";
        AdvancedDateSearch["__interfaces"] = ["framework.components.api.Renderable"];
        (function (AdvancedDateSearch) {
            class DateCriteria extends com.spoonconsulting.lightning.Layout {
                constructor(__parent, name) {
                    super(name, "div");
                    this.__parent = __parent;
                    this.operators = new input.JSSelect("operators");
                    this.fromDate = new input.JSDateInput("from");
                    this.toDate = new input.JSDateInput("to");
                    this.item2 = new com.spoonconsulting.lightning.LayoutItem("2", "div").setSize(4);
                    this.time = false;
                    this.setMultipleRows(true);
                    const item0 = new com.spoonconsulting.lightning.LayoutItem("0", "div").setSize(4);
                    const item1 = new com.spoonconsulting.lightning.LayoutItem("1", "div").setSize(4);
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
                setValue(cu) {
                    if (cu != null) {
                        const oper = cu["operator" + this.getName()];
                        this.operators.setValue(oper);
                        const vals = cu["value" + this.getName()];
                        const sfrom = vals[0].split("T")[0];
                        this.fromDate.getElement().value = sfrom;
                        if (oper === "between") {
                            this.item2.setStyle("display", null);
                            const sto = vals[1].split("T")[0];
                            this.toDate.getElement().value = sto;
                        }
                        else {
                            this.item2.setStyle("display", "none");
                        }
                    }
                    else {
                        this.operators.setValue("=");
                        this.item2.setStyle("display", "none");
                    }
                }
                setTime(b) {
                    this.time = b;
                    if (b) {
                        this.fromDate.setAttribute("type", "date");
                        this.toDate.setAttribute("type", "date");
                    }
                    else {
                        this.fromDate.setAttribute("type", "date");
                        this.toDate.setAttribute("type", "date");
                    }
                }
                checkValidity() {
                    const elem = this.fromDate.getElement();
                    if (!elem.checkValidity()) {
                        const val = elem["reportValidity"];
                        val.call(elem);
                        return false;
                    }
                    const oper = this.operators.getValue();
                    if (oper === "between") {
                        const elto = this.toDate.getElement();
                        if (!elto.checkValidity()) {
                            const val = elto["reportValidity"];
                            val.call(elem);
                            return false;
                        }
                    }
                    return true;
                }
                getCriteria(result) {
                    if (this.checkValidity()) {
                        const oper = this.operators.getValue();
                        let dfrom = this.fromDate.getElement().value;
                        if (this.time) {
                            dfrom = dfrom + "T00:00:00.000+00:00";
                        }
                        const suffix = this.getName();
                        result["operator" + suffix] = oper;
                        const val = (new Array());
                        if (oper !== "between") {
                            val.push(dfrom);
                        }
                        else {
                            const elto = this.toDate.getElement();
                            let dto = elto.value;
                            if (this.time) {
                                dto = dto + "T23:59:00.000+00:00";
                            }
                            val.push(dfrom, dto);
                        }
                        result["value" + suffix] = val;
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            AdvancedDateSearch.DateCriteria = DateCriteria;
            DateCriteria["__class"] = "sp.datagrid.AdvancedDateSearch.DateCriteria";
            DateCriteria["__interfaces"] = ["framework.components.api.Renderable"];
            (function (DateCriteria) {
                class DateCriteria$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const value = this.__parent.operators.getValue();
                        if (value === "between") {
                            this.__parent.item2.setStyle("display", null);
                        }
                        else {
                            this.__parent.item2.setStyle("display", "none");
                        }
                    }
                }
                DateCriteria.DateCriteria$0 = DateCriteria$0;
                DateCriteria$0["__interfaces"] = ["framework.components.api.EventListener"];
            })(DateCriteria = AdvancedDateSearch.DateCriteria || (AdvancedDateSearch.DateCriteria = {}));
            class AdvancedDateSearch$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            AdvancedDateSearch.AdvancedDateSearch$0 = AdvancedDateSearch$0;
            AdvancedDateSearch$0["__interfaces"] = ["framework.components.api.EventListener"];
            class AdvancedDateSearch$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const hg = (this.__parent.getAncestorWithClass("HeavyGrid"));
                    const fi = this.__parent.getFilter();
                    if (fi.hasOwnProperty("andOr")) {
                        hg.saveCustomFilter(this.__parent.getFieldName(), this.__parent.getObjectType(), this.__parent.getFilter(), (a) => {
                            this.__parent.close();
                            this.__parent.getParent().render();
                            return null;
                        });
                    }
                }
            }
            AdvancedDateSearch.AdvancedDateSearch$1 = AdvancedDateSearch$1;
            AdvancedDateSearch$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(AdvancedDateSearch = datagrid.AdvancedDateSearch || (datagrid.AdvancedDateSearch = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
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
            constructor(name) {
                super(name);
                this.body = new JSContainer("div");
                if (this.column === undefined) {
                    this.column = null;
                }
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
                const layout = new com.spoonconsulting.lightning.Layout("layout", "div").setMultipleRows(true);
                const left = new com.spoonconsulting.lightning.LayoutItem("left", "div");
                left.setSize(4);
                const right = new com.spoonconsulting.lightning.LayoutItem("right", "div");
                right.setSize(8);
                layout.addChild(left);
                layout.addChild(right);
                left.addChild(this.operators);
                right.addChild(this.values);
                left.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
                right.setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_SMALL);
                this.body.addChild(layout);
                const and = new Object();
                and["value"] = "and";
                and["label"] = "And";
                const or = new Object();
                or["value"] = "or";
                or["label"] = "Or";
                const andOrOpts = (new Array());
                andOrOpts.push(and);
                andOrOpts.push(or);
                this.andOr.setOptions(andOrOpts);
                this.andOr.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_HIDDEN);
                const layoutAndOr = new com.spoonconsulting.lightning.Layout("landord", "div").setMultipleRows(true);
                layoutAndOr.addChild(new com.spoonconsulting.lightning.LayoutItem("item", "div").setSize(12).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.HORIZONTAL_SMALL).addChild(this.andOr));
                this.body.addChild(layoutAndOr);
                const layout2 = new com.spoonconsulting.lightning.Layout("layout2", "div").setMultipleRows(true);
                const left2 = new com.spoonconsulting.lightning.LayoutItem("left2", "div");
                left2.setSize(4);
                const right2 = new com.spoonconsulting.lightning.LayoutItem("right2", "div");
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
            getFilter() {
                const val1 = this.values.getValue();
                const oper1 = this.operators.getValue();
                const val2 = this.values2.getValue();
                const oper2 = this.operators2.getValue();
                const sandOr = this.andOr.getValue()[0];
                const result = new Object();
                result["value1"] = val1;
                result["value2"] = val2;
                result["operator1"] = oper1;
                result["operator2"] = oper2;
                result["andOr"] = sandOr;
                return result;
            }
            getFieldName() {
                return this.column["fieldName"];
            }
            getObjectType() {
                return this.objectType;
            }
            refresh(col, objectType) {
                this.operators.setOptions((new Array()));
                this.operators2.setOptions((new Array()));
                this.operators.setRendered(false);
                this.operators2.setRendered(false);
                const sfType = col["sfType"];
                if (sfType === "CURRENCY" || sfType === "DOUBLE" || sfType === "INTEGER" || sfType === "PERCENT") {
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
                }
                else {
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
                if (col.hasOwnProperty("custom") && col["custom"] != null) {
                    const cu = col["custom"];
                    const val1 = cu["value1"];
                    const val2 = cu["value2"];
                    const ope1 = cu["operator1"];
                    const ope2 = cu["operator2"];
                    const sAndor = cu["andOr"];
                    this.values.setValue(val1);
                    this.values2.setValue(val2);
                    this.operators.setValue(ope1);
                    this.operators2.setValue(ope2);
                    const arandor = (new Array());
                    arandor.push(sAndor);
                    this.andOr.setValue(arandor);
                }
                else {
                    this.values.setValue("");
                    this.values2.setValue("");
                    this.operators.setValue("=");
                    this.operators2.setValue("=");
                    const arandor = (new Array());
                    arandor.push("and");
                    this.andOr.setValue(arandor);
                }
                this.column = col;
                this.objectType = objectType;
                const label = col["label"];
                this.plabel.setHtml(label);
            }
        }
        datagrid.AdvancedSearch = AdvancedSearch;
        AdvancedSearch["__class"] = "sp.datagrid.AdvancedSearch";
        AdvancedSearch["__interfaces"] = ["framework.components.api.Renderable"];
        (function (AdvancedSearch) {
            class AdvancedSearch$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            AdvancedSearch.AdvancedSearch$0 = AdvancedSearch$0;
            AdvancedSearch$0["__interfaces"] = ["framework.components.api.EventListener"];
            class AdvancedSearch$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const hg = (this.__parent.getAncestorWithClass("HeavyGrid"));
                    hg.saveCustomFilter(this.__parent.getFieldName(), this.__parent.getObjectType(), this.__parent.getFilter(), (a) => {
                        this.__parent.close();
                        this.__parent.getParent().render();
                        return null;
                    });
                }
            }
            AdvancedSearch.AdvancedSearch$1 = AdvancedSearch$1;
            AdvancedSearch$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(AdvancedSearch = datagrid.AdvancedSearch || (datagrid.AdvancedSearch = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ApexHomePageService {
            constructor() {
            }
            static container_$LI$() { if (ApexHomePageService.container == null) {
                ApexHomePageService.container = new Object();
            } return ApexHomePageService.container; }
            /**
             *
             * @param {string} objectType
             * @return {Promise}
             */
            getFilters(objectType) {
                const fn = ApexHomePageService.container_$LI$()["getFilters"];
                const params = new Object();
                params["objectType"] = objectType;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} objectType
             * @return {Promise}
             */
            getRecordTypes(objectType) {
                const fn = ApexHomePageService.container_$LI$()["getRecordTypes"];
                const params = new Object();
                params["objectType"] = objectType;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} objectType
             * @param {string} label
             * @return {Promise}
             */
            createNewFilter(objectType, label) {
                const fn = ApexHomePageService.container_$LI$()["createNewFilter"];
                const params = new Object();
                params["objectType"] = objectType;
                params["label"] = label;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} IdToDelete
             * @return {Promise}
             */
            deleteFilter(IdToDelete) {
                const fn = ApexHomePageService.container_$LI$()["deleteFilter"];
                const params = new Object();
                params["IdToDelete"] = IdToDelete;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} IdToRename
             * @param {string} label
             */
            renameFilter(IdToRename, label) {
                const fn = ApexHomePageService.container_$LI$()["renameFilter"];
                const params = new Object();
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
            cloneFilter(IdToClone, label) {
                const fn = ApexHomePageService.container_$LI$()["cloneFilter"];
                const params = new Object();
                params["IdToClone"] = IdToClone;
                params["label"] = label;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} filter
             * @param {string} filterId
             * @return {Promise}
             */
            updateFilter(filter, filterId) {
                const fn = ApexHomePageService.container_$LI$()["updateFilter"];
                const params = new Object();
                params["filter"] = filter;
                params["filterId"] = filterId;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} objectType
             * @return {Promise}
             */
            getDefaultFilter(objectType) {
                const fn = ApexHomePageService.container_$LI$()["getDefaultFilter"];
                const params = new Object();
                params["objectType"] = objectType;
                const pr = fn.call(fn, params);
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
            getCases(page, filter, objectType, filterId) {
                const fn = ApexHomePageService.container_$LI$()["getCases"];
                const params = new Object();
                params["page"] = page;
                params["filter"] = filter;
                params["objectType"] = objectType;
                params["filterId"] = filterId;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @return {Promise}
             */
            getCustomerPortalUsers() {
                const fn = ApexHomePageService.container_$LI$()["getCustomerPortalUsers"];
                const params = new Object();
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @return {Promise}
             */
            getQueues() {
                const fn = ApexHomePageService.container_$LI$()["getQueues"];
                const params = new Object();
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} txt
             * @return {Promise}
             */
            getUsers(txt) {
                const fn = ApexHomePageService.container_$LI$()["getUsers"];
                const params = new Object();
                params["txt"] = txt;
                const pr = fn.call(fn, params);
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
            getFieldValues(fieldName, txt, page, objectType, filterId) {
                const fn = ApexHomePageService.container_$LI$()["getFieldValues"];
                const params = new Object();
                params["fieldName"] = fieldName;
                params["txt"] = txt;
                params["page"] = page;
                params["objectType"] = objectType;
                params["filterId"] = filterId;
                const pr = fn.call(fn, params);
                return pr;
            }
            getFieldDateTimeTree(fieldName, objectType) {
                const fn = ApexHomePageService.container_$LI$()["getFieldDateTimeTree"];
                const params = new Object();
                params["fieldName"] = fieldName;
                params["objectType"] = objectType;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
<<<<<<< HEAD
=======
             * @return {Promise}
             */
            getBranches() {
                const fn = ApexHomePageService.container_$LI$()["getBranches"];
                const pr = fn.call(fn);
                return pr;
            }
            /**
             *
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
             * @param {string} ownerId
             * @param {string[]} caseIds
             * @return {Promise}
             */
            changeOwner(ownerId, caseIds) {
                const fn = ApexHomePageService.container_$LI$()["changeOwner"];
                const params = new Object();
                params["ownerId"] = ownerId;
                params["caseIds"] = caseIds;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} filterId
             * @param {string} objectType
             * @return {Promise}
             */
            pinFilter(filterId, objectType) {
                const fn = ApexHomePageService.container_$LI$()["pinFilter"];
                const params = new Object();
                params["filterId"] = filterId;
                params["objectType"] = objectType;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string} status
             * @param {string[]} caseIds
             * @return {Promise}
             */
            closeCases(status, caseIds) {
                const fn = ApexHomePageService.container_$LI$()["closeCases"];
                const params = new Object();
                params["status"] = status;
                params["caseIds"] = caseIds;
                const pr = fn.call(fn, params);
                return pr;
            }
            /**
             *
             * @param {string[]} caseIds
             * @return {Promise}
             */
            mergeCases(caseIds) {
                const fn = ApexHomePageService.container_$LI$()["mergeCases"];
                const params = new Object();
                params["caseIds"] = caseIds;
                const pr = fn.call(fn, params);
                return pr;
            }
        }
        datagrid.ApexHomePageService = ApexHomePageService;
        ApexHomePageService["__class"] = "sp.datagrid.ApexHomePageService";
        ApexHomePageService["__interfaces"] = ["sp.datagrid.HompPageService"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class App {
            static main(args) {
                eval("window.sp = sp;");
            }
        }
        datagrid.App = App;
        App["__class"] = "sp.datagrid.App";
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class AppHeader extends com.spoonconsulting.lightning.Layout {
<<<<<<< HEAD
            constructor(name, grid) {
=======
            constructor(name, grid, dry) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                super(name, "div");
                this.actChangeOwner = new com.spoonconsulting.lightning.Button("changeOwner").setLabel("Change Owner").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.actNew = new com.spoonconsulting.lightning.Button("new").setLabel("New Case").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.actNewTask = new com.spoonconsulting.lightning.Button("new").setLabel("New Task").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.actMerge = new com.spoonconsulting.lightning.Button("merge").setLabel("Merge Cases").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.modalChangeOwner = new sp.datagrid.ModalChangeOwner("changeOwner");
                this.modalMergeCase = new sp.datagrid.ModalMergeCases("mergeCases");
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
                if (this.grid_ === undefined) {
                    this.grid_ = null;
                }
                this.setMultipleRows(true);
                this.grid_ = grid;
<<<<<<< HEAD
                const topLeft = new com.spoonconsulting.lightning.LayoutItem("topLeft", "div").setSize(4).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
                const topRight = new com.spoonconsulting.lightning.LayoutItem("topRight", "div").setSize(8).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
=======
                const topLeft = new com.spoonconsulting.lightning.LayoutItem("topLeft", "div").setSize(5).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
                const topRight = new com.spoonconsulting.lightning.LayoutItem("topRight", "div").setSize(7).setPadding(com.spoonconsulting.lightning.enums.LayoutItemPadding.AROUND_MEDIUM);
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                this.addChild(topLeft).addChild(topRight);
                const actGroup = new com.spoonconsulting.lightning.ButtonGroup("actions");
                topRight.addChild(actGroup).setStyle("text-align", "right");
                actGroup.addButton(this.actNew).addButton(this.actChangeOwner).addButton(this.actMerge);
<<<<<<< HEAD
=======
                const la = new JSContainer("h3");
                la.setStyle("font-weight", "bold").setStyle("font-size", "14px");
                topLeft.addChild(la);
                if (!dry) {
                    sp.datagrid.Util.getService().getBranches().then(((la, topLeft) => {
                        return (r) => {
                            if (r != null) {
                                const s = r.replace(new RegExp(";", 'g'), ", ");
                                if ( /* contains */(r.indexOf(";") != -1))
                                    la.setHtml("My branches are: " + s);
                                else
                                    la.setHtml("My branch is: " + s);
                                topLeft.setRendered(false);
                                topLeft.render();
                            }
                        };
                    })(la, topLeft));
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
        datagrid.AppHeader = AppHeader;
        AppHeader["__class"] = "sp.datagrid.AppHeader";
        AppHeader["__interfaces"] = ["framework.components.api.Renderable"];
        (function (AppHeader) {
            class AppHeader$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const selected = this.__parent.grid_.getSelectedIds();
                    if (selected.length > 0) {
                        const gris = (this.__parent.getAncestorWithClass("Grids"));
                        this.__parent.modalMergeCase.refresh(gris);
                        this.__parent.modalMergeCase.open();
                    }
                    else {
                        alert("Please select one or more cases from the table below");
                    }
                }
            }
            AppHeader.AppHeader$0 = AppHeader$0;
            AppHeader$0["__interfaces"] = ["framework.components.api.EventListener"];
            class AppHeader$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const gri = (source.getAncestorWithClass("Grids"));
                    evt["objectType"] = "Case";
                    gri.fireListener("createNew", evt);
                }
            }
            AppHeader.AppHeader$1 = AppHeader$1;
            AppHeader$1["__interfaces"] = ["framework.components.api.EventListener"];
            class AppHeader$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const gri = (source.getAncestorWithClass("Grids"));
                    evt["objectType"] = "Task";
                    gri.fireListener("createNew", evt);
                }
            }
            AppHeader.AppHeader$2 = AppHeader$2;
            AppHeader$2["__interfaces"] = ["framework.components.api.EventListener"];
            class AppHeader$3 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const selected = this.__parent.grid_.getSelectedIds();
                    if (selected.length > 0) {
                        this.__parent.modalChangeOwner.refresh(this.__parent.grid_);
                        this.__parent.modalChangeOwner.open();
                    }
                    else {
                        alert("Please select one or more cases from the table below");
                    }
                }
            }
            AppHeader.AppHeader$3 = AppHeader$3;
            AppHeader$3["__interfaces"] = ["framework.components.api.EventListener"];
        })(AppHeader = datagrid.AppHeader || (datagrid.AppHeader = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DataCell extends JSContainer {
            constructor(name, txt) {
                super(name, "td");
                if (this.value === undefined) {
                    this.value = null;
                }
                this.div = new JSContainer("div");
                this.setAttribute("role", "gridcell");
                this.div.setAttribute("title", txt).addClass("slds-truncate").setHtml(txt);
                this.addChild(this.div);
                this.value = txt;
            }
            setText(txt) {
                this.div.setAttribute("title", txt).setHtml(txt);
            }
            setAlign(dir) {
                this.removeClass("slds-text-align_right");
                this.removeClass("slds-text-align_center");
                if (dir === "right") {
                    this.addClass("slds-text-align_right");
                }
                else if (dir === "center") {
                    this.addClass("slds-text-align_center");
                }
            }
            getValue() {
                return this.value;
            }
        }
        datagrid.DataCell = DataCell;
        DataCell["__class"] = "sp.datagrid.DataCell";
        DataCell["__interfaces"] = ["framework.components.api.Renderable"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DataGrid extends JSContainer {
            constructor(name, type) {
                super(name, "table");
                this.columns = (new Array());
                this.data = (new Array());
                this.header = new JSContainer("head", "thead");
                this.body = new JSContainer("body", "tbody");
                this.__orderBy = "CaseNumber";
                this.orderByDir = "ASC";
                this.tableHeaders = (new Array());
<<<<<<< HEAD
                this.pageSize = 10;
=======
                this.pageSize = 20;
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                this.currentPage = 0;
                this.lastPage = false;
                this.filters = new Object();
                if (this.type === undefined) {
                    this.type = null;
                }
                this.loading = false;
                this.type = type;
                this.addClass("DataGrid");
                this.addClass("slds-table").addClass("slds-table_bordered").addClass("slds-table_fixed-layout");
                this.setStyle("position", "relative");
                this.addChild(this.header);
                this.addChild(this.body);
                document.addEventListener("click", (e) => {
                    const dps = document.querySelectorAll(".slds-dropdown");
                    const triggers = document.querySelectorAll(".slds-dropdown-trigger");
                    let istrigger = false;
                    let bypass = false;
                    for (let index121 = 0; index121 < triggers.length; index121++) {
                        let trigger = triggers[index121];
                        {
                            const elem = trigger;
                            if (elem.classList.contains("except")) {
                                bypass = true;
                                break;
                            }
                            if (trigger.contains(e.target)) {
                                istrigger = true;
                                break;
                            }
                        }
                    }
<<<<<<< HEAD
                    if (!istrigger && !bypass) {
                        dps.forEach((n) => {
                            if (!n.contains(e.target)) {
                                const el = n;
                                el.style.display = "none";
                            }
                        });
=======
                    try {
                        if (!istrigger && !bypass) {
                            dps.forEach((n) => {
                                if (!n.contains(e.target)) {
                                    const el = n;
                                    el.style.display = "none";
                                }
                            });
                        }
                    }
                    catch (ee) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    }
                });
                this.addEventListener(new DataGrid.DataGrid$0(this), "sorting");
                this.addEventListener(new DataGrid.DataGrid$1(this), "filterIncludes");
            }
            refreshList() {
                this.currentPage = 0;
                this.lastPage = false;
                const gr = (this.getAncestorWithClass("HeavyGrid"));
                gr.doRefreshList();
            }
            setFilters(filters) {
                this.filters = filters;
                this.columns = (new Array());
                {
                    let array123 = Object.keys(filters);
                    for (let index122 = 0; index122 < array123.length; index122++) {
                        let fieldName = array123[index122];
                        {
                            const col = filters[fieldName];
                            this.columns.push(col);
                        }
                    }
                }
                this.sortColumns();
                this.setColumns(this.columns);
            }
            setCustomFilter(field, fil) {
                const f = this.filters[field];
                f["custom"] = fil;
                this.columns = (new Array());
                {
                    let array125 = Object.keys(this.filters);
                    for (let index124 = 0; index124 < array125.length; index124++) {
                        let fieldName = array125[index124];
                        {
                            const col = this.filters[fieldName];
                            this.columns.push(col);
                        }
                    }
                }
                this.sortColumns();
            }
            sortColumns() {
                const objs = this.columns.sort((a, b) => {
                    const pos1 = a["position"];
                    const pos2 = b["position"];
                    const res = ((o1, o2) => { if (o1 && o1.compareTo) {
                        return o1.compareTo(o2);
                    }
                    else {
                        return o1 < o2 ? -1 : o2 < o1 ? 1 : 0;
                    } })(pos1, pos2);
                    return /* doubleValue */ res;
                });
                this.columns = (new Array());
                for (let index126 = 0; index126 < objs.length; index126++) {
                    let obj = objs[index126];
                    {
                        this.columns.push(obj);
                    }
                }
            }
            getColumns() {
                return this.columns;
            }
            getSelectedIds() {
                const ids = (new Array());
                {
                    let array128 = this.getRows();
                    for (let index127 = 0; index127 < array128.length; index127++) {
                        let row = array128[index127];
                        {
                            if (row.isSelected()) {
                                ids.push(row.getData()["Id"]);
                            }
                        }
                    }
                }
                return ids;
            }
            showColumns(cols) {
                {
                    let array130 = Object.keys(this.filters);
                    for (let index129 = 0; index129 < array130.length; index129++) {
                        let fieldName = array130[index129];
                        {
                            const index = cols.indexOf(fieldName);
                            const filter = this.filters[fieldName];
                            if (index < 0) {
                                filter["hidden"] = true;
                            }
                            else {
                                filter["hidden"] = false;
                            }
                            filter["position"] = index;
                        }
                    }
                }
                for (let index131 = 0; index131 < this.columns.length; index131++) {
                    let col = this.columns[index131];
                    {
                        const name = col["fieldName"];
                        let filter = this.filters[name];
                        if (filter == null) {
                            filter = new Object();
                            this.filters[name] = filter;
                        }
                        col["position"] = filter["position"];
                        if (cols.indexOf(name) < 0) {
                            col["hidden"] = true;
                            filter["hidden"] = true;
                        }
                        else {
                            col["hidden"] = false;
                            filter["hidden"] = false;
                        }
                    }
                }
                this.sortColumns();
                this.setColumns(this.columns);
                this.refreshList();
            }
            getFilters() {
                return this.filters;
            }
            setColumns(cols) {
                this.columns = cols;
                this.tableHeaders = (new Array());
                this.header.clearChildren();
                this.header.setRendered(false);
                const hrow = new JSContainer("tr");
                this.header.addChild(hrow);
                hrow.addClass("slds-line-height_reset");
                const num = new JSContainer("th").setStyle("width", "42px");
                num.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
                num.setHtml("&nbsp;");
                hrow.addChild(num);
                const select = new JSContainer("th").setStyle("width", "30px");
                select.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
                select.addChild(this.createHeaderSelect());
                hrow.addChild(select);
                const length = cols.length;
                let index = 0;
                for (let index132 = 0; index132 < cols.length; index132++) {
                    let col = cols[index132];
                    {
                        const hidden = col["hidden"];
<<<<<<< HEAD
                        if (hidden == null || !hidden) {
=======
                        const display = col["display"];
                        if ((hidden == null || !hidden) && (display == null || display)) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            const width = col["width"];
                            let hasQuery = false;
                            if (col.hasOwnProperty("includes")) {
                                const incl = col["includes"];
                                if (incl.length > 0) {
                                    hasQuery = true;
                                }
                            }
                            if (col.hasOwnProperty("custom")) {
                                hasQuery = true;
                            }
                            const uicol = this.createStringHead(col);
                            hrow.addChild(uicol);
                            index++;
                            if (index >= length - 3) {
                                uicol.setMenuAlignment(com.spoonconsulting.lightning.enums.MenuAlignment.RIGHT);
                            }
                            if (width != null) {
                                uicol.setStyle("width", width + "rem");
                            }
                            if (hasQuery) {
                                uicol.addClass("hasquery");
                            }
                            else {
                                uicol.removeClass("hasquery");
                            }
                        }
                    }
                }
                const act = new JSContainer("th").setStyle("width", "32px");
                act.setStyle("padding", "0").setStyle("position", "sticky").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
                act.setHtml("&nbsp;");
                hrow.addChild(act);
            }
            setColumnWidth(name, width) {
                let filter = this.filters[name];
                if (filter == null) {
                    filter = new Object();
                    this.filters[name] = filter;
                }
                filter["width"] = width;
            }
            /*private*/ createStringHead(col) {
                const name = col["fieldName"];
                const h = new sp.datagrid.DataGridHeader(name, col, this.type);
                if (name === "CaseNumber")
                    h.setOrderByDir("ASC");
                else
                    h.setOrderByDir("none");
                this.tableHeaders.push(h);
                return h;
            }
            setData(data) {
                this.data = data;
                this.body.clearChildren();
                this.body.setRendered(false);
                this.currentPage = 0;
                this.lastPage = false;
                this.addPage();
                delete this.getParent().getListeners()["scroll"];
                this.infiniteTable();
            }
            refresh() {
                for (let index133 = 0; index133 < this.tableHeaders.length; index133++) {
                    let header = this.tableHeaders[index133];
                    {
                        header.refresh();
                    }
                }
            }
            getBody() {
                return this.body;
            }
            addPage() {
                const start = this.currentPage * this.pageSize;
                let end = start + this.pageSize;
                if (this.data.length < end) {
                    end = this.data.length;
                }
                for (let i = start; i < end; i++) {
                    {
                        const row = new sp.datagrid.DataRow("", this.type);
                        const line = this.data[i];
                        row.setData(line, this.columns);
                        this.body.addChild(row);
                    }
                    ;
                }
            }
            retrievePage() {
                if (!this.lastPage) {
                    const page = parseInt(this.getCurrentPage() + "");
                    const hg = (this.getAncestorWithClass("HeavyGrid"));
                    const filterId = hg.getFilterId();
                    this.loading = true;
                    sp.datagrid.Util.getService().getCases(page, JSON.stringify(this.filters), this.type, filterId).then((result) => {
                        this.addNewPage(result);
                        this.loading = false;
                    });
                }
            }
            addNewPage(data) {
                if (data.length > 0) {
                    for (let index134 = 0; index134 < data.length; index134++) {
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
                if (data.length < 10) {
=======
                if (data.length < 20) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    this.lastPage = true;
                }
            }
            getCurrentPage() {
                return this.currentPage;
            }
            infiniteTable() {
                if (!this.getParent().hasListenerOfType("scroll")) {
                    this.getParent().addEventListener(new DataGrid.DataGrid$2(this), "scroll");
                }
            }
            getRows() {
                const rows = this.body.getChildren();
                return rows;
            }
            /*private*/ createHeaderSelect() {
                const div = new JSContainer("div");
                div.addClass("slds-th__action slds-th__action_form");
                const checkbox = new com.spoonconsulting.lightning.CheckBox("cb");
                checkbox.addEventListener(new DataGrid.DataGrid$3(this, checkbox), "change");
                div.addChild(checkbox);
                return div;
            }
            getOrderBy() {
                return this.__orderBy;
            }
            getOrderByDir() {
                return this.orderByDir;
            }
            setOrderBy(orderBy) {
                this.__orderBy = orderBy;
            }
            setOrderByDir(orderByDir) {
                this.orderByDir = orderByDir;
            }
            orderBy(name, dir) {
                for (let index135 = 0; index135 < this.tableHeaders.length; index135++) {
                    let he = this.tableHeaders[index135];
                    {
                        if (he.getName() === name) {
                            he.setOrderByDir(dir);
                        }
                        else {
                            he.setOrderByDir("none");
                        }
                    }
                }
                this.__orderBy = name;
                this.orderByDir = dir;
                const evt = new CustomEvent("orderby");
                evt["orderBy"] = name;
                evt["orderByDir"] = dir;
                this.fireListener("orderby", evt);
            }
        }
        datagrid.DataGrid = DataGrid;
        DataGrid["__class"] = "sp.datagrid.DataGrid";
        DataGrid["__interfaces"] = ["framework.components.api.Renderable"];
        (function (DataGrid) {
            class DataGrid$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const fieldName = evt["fieldName"];
                    const sortDir = evt["sortDir"];
                    const onOff = evt["onOff"];
                    let filter = this.__parent.filters[fieldName];
                    if (filter == null) {
                        filter = new Object();
                        this.__parent.filters[fieldName] = filter;
                    }
                    if (onOff === "on") {
                        filter["sorting"] = sortDir;
                    }
                    else {
                        delete filter["sorting"];
                    }
                    this.__parent.filters[fieldName] = filter;
                    this.__parent.refreshList();
                }
            }
            DataGrid.DataGrid$0 = DataGrid$0;
            DataGrid$0["__interfaces"] = ["framework.components.api.EventListener"];
            class DataGrid$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const fieldName = evt["fieldName"];
                    const inclopts = evt["options"];
                    const includes = (new Array());
                    for (let index136 = 0; index136 < inclopts.length; index136++) {
                        let o = inclopts[index136];
                        {
                            includes.push(o["value"]);
                        }
                    }
                    let filter = this.__parent.filters[fieldName];
                    if (filter == null) {
                        filter = new Object();
                        this.__parent.filters[fieldName] = filter;
                    }
                    filter["includes"] = includes;
                    if (evt["clearFilter"]) {
                        delete filter["custom"];
                    }
                    this.__parent.filters[fieldName] = filter;
                    this.__parent.refreshList();
                }
            }
            DataGrid.DataGrid$1 = DataGrid$1;
            DataGrid$1["__interfaces"] = ["framework.components.api.EventListener"];
            class DataGrid$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const div = source.getElement();
                    for (let index137 = 0; index137 < this.__parent.tableHeaders.length; index137++) {
                        let he = this.__parent.tableHeaders[index137];
                        {
                            he.getAction().positionDropdown(evt);
                        }
                    }
                    if (!this.__parent.loading && !this.__parent.lastPage) {
                        if ((div.scrollTop + div.clientHeight + 20) > div.scrollHeight) {
                            this.__parent.currentPage++;
                            console.info("currentPage:" + this.__parent.currentPage);
                            this.__parent.retrievePage();
                        }
                    }
                }
            }
            DataGrid.DataGrid$2 = DataGrid$2;
            DataGrid$2["__interfaces"] = ["framework.components.api.EventListener"];
            class DataGrid$3 {
                constructor(__parent, checkbox) {
                    this.checkbox = checkbox;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const selected = this.checkbox.getValue();
                    {
                        let array139 = this.__parent.getRows();
                        for (let index138 = 0; index138 < array139.length; index138++) {
                            let row = array139[index138];
                            {
                                row.setSelected(selected);
                            }
                        }
                    }
                }
            }
            DataGrid.DataGrid$3 = DataGrid$3;
            DataGrid$3["__interfaces"] = ["framework.components.api.EventListener"];
        })(DataGrid = datagrid.DataGrid || (datagrid.DataGrid = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DataGridHeader extends JSContainer {
            constructor(name, col, objectType) {
                super(name, "th");
                this.column = null;
                this.action = null;
                this.orderByDir = "none";
                this.addClass("DataGridHeader");
                this.setStyle("width", "5rem");
                this.column = col;
                const label = col["label"];
                this.setStyle("padding", "0").setStyle("top", "0").setStyle("z-index", "10").setStyle("border-bottom", "solid 1px silver");
                this.addClass("slds-has-button-menu slds-is-sortable");
                const a = new JSContainer(name, "a");
                this.addChild(a);
                a.addClass("slds-th__action slds-text-link_reset");
                a.setAttribute("href", "javascript:void(0);");
                const div = new JSContainer(name, "div");
                div.addClass("slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate");
                a.addChild(div);
                const span = new JSContainer("label", "span").addClass("slds-truncate").setHtml(label).setAttribute("title", label);
                div.addChild(span);
                this.action = new sp.datagrid.HeaderAction("action", col, objectType);
                this.addChild(this.action);
                a.addEventListener(new DataGridHeader.DataGridHeader$0(this, name), "click");
            }
            getColumn() {
                return this.column;
            }
            setHasQuery() {
                let hasQuery = false;
                if (this.column.hasOwnProperty("includes")) {
                    const incl = this.column["includes"];
                    if (incl.length > 0) {
                        hasQuery = true;
                    }
                }
                if (this.column.hasOwnProperty("custom")) {
                    hasQuery = true;
                }
                if (hasQuery) {
                    this.addClass("hasquery");
                }
                else {
                    this.removeClass("hasquery");
                }
                this.render();
            }
            setOrderByDir(dir) {
                this.orderByDir = dir;
            }
            getAction() {
                return this.action;
            }
            setMenuAlignment(alignment) {
                this.action.setMenuAlignment(alignment);
            }
            setWidth(width) {
                this.setStyle("width", width + "rem");
                this.column["width"] = width;
            }
            refresh() {
                this.action.refresh();
                this.setHasQuery();
            }
        }
        datagrid.DataGridHeader = DataGridHeader;
        DataGridHeader["__class"] = "sp.datagrid.DataGridHeader";
        DataGridHeader["__interfaces"] = ["framework.components.api.Renderable"];
        (function (DataGridHeader) {
            class DataGridHeader$0 {
                constructor(__parent, name) {
                    this.name = name;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const grid = (this.__parent.getAncestorWithClass("slds-table"));
                    if (this.__parent.orderByDir === "ASC") {
                        this.__parent.orderByDir = "DESC";
                    }
                    else {
                        this.__parent.orderByDir = "ASC";
                    }
                    grid.orderBy(this.name, this.__parent.orderByDir);
                }
            }
            DataGridHeader.DataGridHeader$0 = DataGridHeader$0;
            DataGridHeader$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(DataGridHeader = datagrid.DataGridHeader || (datagrid.DataGridHeader = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DataRow extends JSContainer {
            constructor(name, objectType) {
                super(name, "tr");
                this.data = null;
                this.columns = null;
                this.num = new sp.datagrid.DataCell("num", "");
                this.select = new sp.datagrid.BooleanDataCell("select", false);
                if (this.objectType === undefined) {
                    this.objectType = null;
                }
                this.objectType = objectType;
                this.addClass("slds-hint-parent");
            }
            setData(data, cols) {
                this.data = data;
                this.columns = cols;
                this.addChild(this.num);
                this.num.getChildren()[0].addClass("slds-row-number");
                this.addChild(this.select);
                for (let index140 = 0; index140 < cols.length; index140++) {
                    let col = cols[index140];
                    {
                        const name = col["fieldName"];
                        const type = col["type"];
                        const hidden = col["hidden"];
<<<<<<< HEAD
                        if (hidden == null || !hidden) {
=======
                        const display = col["display"];
                        if ((hidden == null || !hidden) && display == null || display) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            let val = sp.datagrid.Util.extractVal(data, name, type);
                            if (name === "CaseNumber") {
                                const cell = new sp.datagrid.ClickableDataCell(name, val, data["Id"]);
                                this.addChild(cell);
                            }
                            else if (name === "Subject") {
                                if (val === "" || val == null) {
                                    val = "---";
                                }
                                const cell = new sp.datagrid.ClickableDataCell(name, val, data["Id"]);
                                this.addChild(cell);
                            }
                            else if (type === "Boolean") {
                                const cell = new sp.datagrid.BooleanDataCell(name, val);
                                this.addChild(cell);
                            }
                            else if (type === "DateTime") {
                                const cell = new sp.datagrid.DateDataCell(name, val);
                                this.addChild(cell);
                            }
                            else if ( /* contains */(name.indexOf(".") != -1)) {
                                const path = name.split(".");
                                const top = data[path[0]];
                                if (top != null) {
                                    if (top.hasOwnProperty("attributes")) {
                                        const url = top["attributes"]["url"];
                                        const pathss = url.split("/");
                                        const id = pathss[pathss.length - 1];
                                        const cell = new sp.datagrid.ClickableDataCell(name, val, id);
                                        this.addChild(cell);
                                    }
                                    else {
                                        const id = top["Id"];
                                        const cell = new sp.datagrid.ClickableDataCell(name, val, id);
                                        this.addChild(cell);
                                    }
                                }
                                else {
                                    const cell = new sp.datagrid.DataCell(name, val);
                                    this.addChild(cell);
                                }
                            }
                            else {
                                const cell = new sp.datagrid.DataCell(name, val);
                                this.addChild(cell);
                            }
                        }
                    }
                }
                const actions = new JSContainer("td");
                const menu = new com.spoonconsulting.lightning.ButtonMenu("menu", "div");
                menu.addEventListener(new DataRow.DataRow$0(this, data), "select");
                const edit = new com.spoonconsulting.lightning.MenuItem("edit");
                edit.setLabel("Edit").refresh();
                menu.getDropdown().addItem(edit);
                if (this.objectType === "Case") {
                    const __delete = new com.spoonconsulting.lightning.MenuItem("close");
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
            search(txt) {
                if (txt == null || txt.trim().length <= 0) {
                    this.setStyle("display", null);
                    return true;
                }
                const ltxt = txt.toLowerCase();
                for (let index141 = 0; index141 < this.columns.length; index141++) {
                    let col = this.columns[index141];
                    {
                        const type = col["type"];
                        const fieldName = col["fieldName"];
                        if (type === "String") {
                            const val = sp.datagrid.Util.extractVal(this.data, fieldName, type);
                            if (val != null && val.trim().length > 0) {
                                if ( /* contains */(val.toLowerCase().indexOf(ltxt) != -1)) {
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
            setSelected(b) {
                this.select.setValue(b);
            }
            isSelected() {
                return this.select.getValue();
            }
            getData() {
                return this.data;
            }
            setNum(num) {
                this.num.setText(num.toString());
            }
        }
        datagrid.DataRow = DataRow;
        DataRow["__class"] = "sp.datagrid.DataRow";
        DataRow["__interfaces"] = ["framework.components.api.Renderable"];
        (function (DataRow) {
            class DataRow$0 {
                constructor(__parent, data) {
                    this.data = data;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const name = source.getName();
                    console.info(name);
                    const src = evt["source"];
                    if (src.getName() === "edit") {
                        evt["recordId"] = this.data["Id"];
                        const gr = (this.__parent.getAncestorWithClass("HeavyGrid"));
                        gr.editRecord(evt);
                    }
                    else if (src.getName() === "close") {
                        const gr = (this.__parent.getAncestorWithClass("HeavyGrid"));
                        gr.closeCase(this.data["Id"]);
                    }
                }
            }
            DataRow.DataRow$0 = DataRow$0;
            DataRow$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(DataRow = datagrid.DataRow || (datagrid.DataRow = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DateSearch extends JSContainer {
            constructor(name) {
                super(name, "div");
            }
        }
        datagrid.DateSearch = DateSearch;
        DateSearch["__class"] = "sp.datagrid.DateSearch";
        DateSearch["__interfaces"] = ["framework.components.api.Renderable"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DateTimeTree extends Object {
            constructor() {
                super();
                this.years = (new Array());
            }
            create(prot) {
                const tree = new DateTimeTree();
                {
                    let array143 = prot["years"];
                    for (let index142 = 0; index142 < array143.length; index142++) {
                        let year = array143[index142];
                        {
                            const yn = new DateTimeTree.YearNode(this).create(year);
                            tree.years.push(yn);
                        }
                    }
                }
                return tree;
            }
            getItems() {
                const items = (new Array());
                for (let index144 = 0; index144 < this.years.length; index144++) {
                    let year = this.years[index144];
                    {
                        items.push(year.getItem());
                    }
                }
                return items;
            }
            getYear(year) {
                for (let index145 = 0; index145 < this.years.length; index145++) {
                    let child = this.years[index145];
                    {
                        if (child.year === year)
                            return child;
                    }
                }
                const result = new DateTimeTree.YearNode(this);
                result.year = year;
                this.years.push(result);
                return result;
            }
            addDate(dt) {
                const year = dt.getFullYear();
                const month = dt.getMonth() + 1;
                const day = dt.getDate();
                this.getYear(year).getMonth(month).getDay(day);
            }
        }
        datagrid.DateTimeTree = DateTimeTree;
        DateTimeTree["__class"] = "sp.datagrid.DateTimeTree";
        (function (DateTimeTree) {
            class YearNode extends Object {
                constructor(__parent) {
                    super();
                    this.__parent = __parent;
                    if (this.year === undefined) {
                        this.year = null;
                    }
                    this.children = (new Array());
                }
                create(prot) {
                    const result = new DateTimeTree.YearNode(this.__parent);
                    result.year = prot["year"];
                    {
                        let array147 = prot["children"];
                        for (let index146 = 0; index146 < array147.length; index146++) {
                            let child = array147[index146];
                            {
                                const dn = new DateTimeTree.MonthNode(this.__parent).create(child);
                                result.children.push(dn);
                            }
                        }
                    }
                    return result;
                }
                getItem() {
                    const item = new Object();
                    item["name"] = this.year + "";
                    item["label"] = this.year + "";
                    const items = (new Array());
                    item["items"] = items;
                    for (let index148 = 0; index148 < this.children.length; index148++) {
                        let child = this.children[index148];
                        {
                            const titem = child.getItem();
                            items.push(titem);
                        }
                    }
                    return item;
                }
                getMonth(month) {
                    for (let index149 = 0; index149 < this.children.length; index149++) {
                        let child = this.children[index149];
                        {
                            if (child.month === month) {
                                return child;
                            }
                        }
                    }
                    const result = new DateTimeTree.MonthNode(this.__parent);
                    result.month = month;
                    this.children.push(result);
                    return result;
                }
            }
            DateTimeTree.YearNode = YearNode;
            YearNode["__class"] = "sp.datagrid.DateTimeTree.YearNode";
            class MonthNode extends Object {
                constructor(__parent) {
                    super();
                    this.__parent = __parent;
                    if (this.month === undefined) {
                        this.month = null;
                    }
                    this.children = (new Array());
                }
                create(prot) {
                    const result = new DateTimeTree.MonthNode(this.__parent);
                    result.month = prot["month"];
                    {
                        let array151 = prot["children"];
                        for (let index150 = 0; index150 < array151.length; index150++) {
                            let child = array151[index150];
                            {
                                const dn = new DateTimeTree.DateNode(this.__parent);
                                dn.day = child["day"];
                                result.children.push(dn);
                            }
                        }
                    }
                    return result;
                }
                getItem() {
                    const item = new Object();
                    item["name"] = this.month + "";
                    item["label"] = this.month + "";
                    const items = (new Array());
                    item["items"] = items;
                    for (let index152 = 0; index152 < this.children.length; index152++) {
                        let child = this.children[index152];
                        {
                            const titem = new Object();
                            titem["name"] = child.day + "";
                            titem["label"] = child.day + "";
                            items.push(titem);
                        }
                    }
                    return item;
                }
                getDay(day) {
                    for (let index153 = 0; index153 < this.children.length; index153++) {
                        let child = this.children[index153];
                        {
                            if (child.day === day) {
                                return child;
                            }
                        }
                    }
                    const result = new DateTimeTree.DateNode(this.__parent);
                    result.day = day;
                    this.children.push(result);
                    return result;
                }
            }
            DateTimeTree.MonthNode = MonthNode;
            MonthNode["__class"] = "sp.datagrid.DateTimeTree.MonthNode";
            class DateNode {
                constructor(__parent) {
                    this.__parent = __parent;
                    if (this.day === undefined) {
                        this.day = null;
                    }
                }
            }
            DateTimeTree.DateNode = DateNode;
            DateNode["__class"] = "sp.datagrid.DateTimeTree.DateNode";
        })(DateTimeTree = datagrid.DateTimeTree || (datagrid.DateTimeTree = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class Filter {
            constructor() {
                if (this.name === undefined) {
                    this.name = null;
                }
                if (this.sortDir === undefined) {
                    this.sortDir = null;
                }
                if (this.advValue1 === undefined) {
                    this.advValue1 = null;
                }
                if (this.advValue2 === undefined) {
                    this.advValue2 = null;
                }
                if (this.advOperator === undefined) {
                    this.advOperator = null;
                }
                this.values = (new Array());
            }
        }
        datagrid.Filter = Filter;
        Filter["__class"] = "sp.datagrid.Filter";
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class GridControls extends com.spoonconsulting.lightning.Layout {
<<<<<<< HEAD
            constructor(name, grid) {
=======
            constructor(name, grid, dry, objectType) {
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
                const left = new com.spoonconsulting.lightning.LayoutItem("left", "div").setSize(10);
                left.addChild(this.tableInfo);
                const itemBtns = new com.spoonconsulting.lightning.LayoutItem("itemBtns", "div").setSize(2);
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
                const mnew = new com.spoonconsulting.lightning.MenuItem("new").setLabel("New").refresh();
                const clone = new com.spoonconsulting.lightning.MenuItem("clone").setLabel("Clone").refresh();
                const rename = new com.spoonconsulting.lightning.MenuItem("rename").setLabel("Rename").refresh();
                const fields = new com.spoonconsulting.lightning.MenuItem("fieldSelector").setLabel("Select Fields to Display").refresh();
                const mdelete = new com.spoonconsulting.lightning.MenuItem("delete").setLabel("Delete").refresh();
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
                let onlyfs = false;
                if (objectType === "Case-1" || objectType === "Case-2" || objectType === "Case-3") {
                    onlyfs = true;
                }
                if (objectType === "Task" && dry) {
                    onlyfs = true;
                }
                const fields = new com.spoonconsulting.lightning.MenuItem("fieldSelector").setLabel("Select Fields to Display").refresh();
                if (!onlyfs) {
                    const mnew = new com.spoonconsulting.lightning.MenuItem("new").setLabel("New").refresh();
                    const clone = new com.spoonconsulting.lightning.MenuItem("clone").setLabel("Clone").refresh();
                    const rename = new com.spoonconsulting.lightning.MenuItem("rename").setLabel("Rename").refresh();
                    this.controls.getDropdown().addItem(mnew);
                    this.controls.getDropdown().addItem(clone);
                    this.controls.getDropdown().addItem(rename);
                }
                this.controls.getDropdown().addItem(fields);
                if (!onlyfs) {
                    const mdelete = new com.spoonconsulting.lightning.MenuItem("delete").setLabel("Delete").refresh();
                    this.controls.getDropdown().addItem(mdelete);
                }
                if (!onlyfs) {
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
            setColumns(columns) {
                this.modalFieldSelector.setColumns(columns);
            }
            setTableInfo(icon, title, subtitle) {
                this.tableInfo.setInfo(icon, title, subtitle);
            }
            setFilterLabel(label) {
                this.tableInfo.setFilterLabel(label);
                this.modalRenameList.setCurrentLabel(label);
                this.modalCloneList.setClonedLabel(label);
            }
            setPinned(b) {
                this.tableInfo.setPinned(b);
            }
        }
        datagrid.GridControls = GridControls;
        GridControls["__class"] = "sp.datagrid.GridControls";
        GridControls["__interfaces"] = ["framework.components.api.Renderable"];
        (function (GridControls) {
            class GridControls$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const grid = (this.__parent.getAncestorWithClass("HeavyGrid"));
                    grid.doRefreshList();
                }
            }
            GridControls.GridControls$0 = GridControls$0;
            GridControls$0["__interfaces"] = ["framework.components.api.EventListener"];
            class GridControls$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const name = source.getName();
                    console.info(name);
                    const src = evt["source"];
                    if (src.getName() === "new") {
                        this.__parent.modalNewList.open();
                    }
                    else if (src.getName() === "delete") {
                        this.__parent.modalDeleteList.open();
                    }
                    else if (src.getName() === "clone") {
                        this.__parent.modalCloneList.open();
                    }
                    else if (src.getName() === "rename") {
                        this.__parent.modalRenameList.open();
                    }
                    else if (src.getName() === "fieldSelector") {
                        this.__parent.modalFieldSelector.open();
                    }
                }
            }
            GridControls.GridControls$1 = GridControls$1;
            GridControls$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(GridControls = datagrid.GridControls || (datagrid.GridControls = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class GridFilter {
        }
        datagrid.GridFilter = GridFilter;
        GridFilter["__class"] = "sp.datagrid.GridFilter";
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class Grids extends com.spoonconsulting.lightning.Layout {
            constructor(name) {
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
                let casedry = false;
                if (name !== "dss" && name !== "ds" && name !== "dsss") {
                    casedry = true;
                }
                let casetype = "Case";
                let tasktype = "Task";
                if (name === "ds") {
                    casetype = "Case-1";
                }
                else if (name === "ds-1") {
                    casetype = "Case-2";
                }
                else if (name === "ds-2") {
                    casetype = "Case-3";
                }
                else if (name === "dsss") {
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
                const head = new com.spoonconsulting.lightning.LayoutItem("head", "div");
                this.addChild(head);
<<<<<<< HEAD
                head.addChild(new sp.datagrid.AppHeader("appHeader", this.casesGrid.getGrid()));
                const top = new com.spoonconsulting.lightning.LayoutItem("top", "div");
                top.setSize(12);
                const bottom = new com.spoonconsulting.lightning.LayoutItem("bottom", "div");
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
                const top = new com.spoonconsulting.lightning.LayoutItem("top", "div");
                top.setSize(12);
                top.addChild(this.casesGrid);
                this.addChild(top);
                this.casesGrid.setAttribute("type", "Case");
                this.setMultipleRows(true);
                sp.datagrid.Util.getService().getDefaultFilter(casetype).then((r) => {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    this.casesGrid.setFilters$jsweet_lang_Object(r);
                    const filterId = r["Id"];
                    sp.datagrid.Util.getService().getCases(0, r["Filters__c"], "Case", filterId).then((cases) => {
                        this.casesGrid.setData(cases);
                        this.casesGrid.setRendered(false);
                        this.casesGrid.render();
                    });
                });
<<<<<<< HEAD
                sp.datagrid.Util.getService().getDefaultFilter("Task").then((r) => {
                    this.tasks.setFilters$jsweet_lang_Object(r);
                    const filterId = r["Id"];
                    sp.datagrid.Util.getService().getCases(0, r["Filters__c"], "Task", filterId).then((cases) => {
                        this.tasks.setData(cases);
                        this.tasks.setRendered(false);
                        this.tasks.render();
                    });
                });
=======
                if (name === "ds-2" || name === "dss" || name === "dsss") {
                    const bottom = new com.spoonconsulting.lightning.LayoutItem("bottom", "div");
                    bottom.setSize(12);
                    this.addChild(bottom);
                    bottom.setStyle("margin-top", "1rem");
                    bottom.addChild(this.tasks);
                    this.tasks.setGridInfo("https://ceva--uat.sandbox.lightning.force.com/img/icon/t4v35/standard/task_120.png", "", "Tasks");
                    this.tasks.setAttribute("type", "Task");
                    sp.datagrid.Util.getService().getDefaultFilter("Task").then((r) => {
                        this.tasks.setFilters$jsweet_lang_Object(r);
                        const filterId = r["Id"];
                        sp.datagrid.Util.getService().getCases(0, r["Filters__c"], "Task", filterId).then((cases) => {
                            this.tasks.setData(cases);
                            this.tasks.setRendered(false);
                            this.tasks.render();
                        });
                    });
                }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            }
            getCasesGrid() {
                return this.casesGrid;
            }
            setCases(cases, columns) {
                this.casesGrid.setColumns(columns);
                this.casesGrid.setData(cases);
            }
            setTasks(data, columns) {
                this.tasks.setColumns(columns);
                this.tasks.setData(data);
            }
            callGetCases(params) {
            }
            setGetCases(fn) {
            }
            showSpinner(b) {
                if (b) {
                    if (!this.bd.hasClass("slds-backdrop_open"))
                        this.bd.addClass("slds-backdrop_open");
                }
                else {
                    this.bd.removeClass("slds-backdrop_open");
                }
                this.bd.setStyle("display", b ? null : "none");
            }
        }
        datagrid.Grids = Grids;
        Grids["__class"] = "sp.datagrid.Grids";
        Grids["__interfaces"] = ["framework.components.api.Renderable"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class HeaderAction extends com.spoonconsulting.lightning.ButtonMenu {
            constructor(name, col, objectType) {
                super(name, "span");
                if (this.txtSearch === undefined) {
                    this.txtSearch = null;
                }
<<<<<<< HEAD
                if (this.objectType === undefined) {
                    this.objectType = null;
                }
=======
                if (this.column === undefined) {
                    this.column = null;
                }
                if (this.objectType === undefined) {
                    this.objectType = null;
                }
                this.column = col;
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                this.objectType = objectType;
                const type = col["type"];
                this.getButton().addClass("slds-button_icon-x-small");
                this.getButton().removeClass("slds-button_icon-border-filled");
                this.addClass("slds-th__action-button ");
                this.getButton().getIcon().addClass("slds-button__icon_hint slds-button__icon_small");
                this.setSticky(true);
                this.getDropdown().addClass("my-dp").setAttribute("relatedId", this.getButton().getId());
                const sortAsc = new com.spoonconsulting.lightning.MenuItem("sortAsc");
                sortAsc.setLabel("Sort A to Z");
                sortAsc.refresh();
                this.getDropdown().addItem(sortAsc);
                const sortDesc = new com.spoonconsulting.lightning.MenuItem("sortDesc");
                sortDesc.setLabel("Sort Z to A");
                sortDesc.refresh();
                this.getDropdown().addItem(sortDesc);
                this.getDropdown().addMenuDivider();
                if (col.hasOwnProperty("sorting")) {
                    const sort = col["sorting"];
                    if (sort === "ASC") {
                        sortAsc.setChecked(true);
                        sortAsc.refresh();
                    }
                    else {
                        sortDesc.setChecked(true);
                        sortDesc.refresh();
                    }
                }
                const fname = col["fieldName"];
<<<<<<< HEAD
                if (fname !== "Branch_Code__c") {
                    if (type !== "Boolean") {
                        const customFilter = new com.spoonconsulting.lightning.MenuItem("customFilter");
                        customFilter.setLabel("Custom Filter");
                        customFilter.refresh();
                        this.getDropdown().addItem(customFilter);
                        this.getDropdown().addMenuDivider();
                    }
=======
                if (type !== "Boolean") {
                    const customFilter = new com.spoonconsulting.lightning.MenuItem("customFilter");
                    customFilter.setLabel("Custom Filter");
                    customFilter.refresh();
                    this.getDropdown().addItem(customFilter);
                    this.getDropdown().addMenuDivider();
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                }
                const mWidth = new com.spoonconsulting.lightning.MenuItem("width");
                mWidth.setChecked(false);
                const wlabel = new JSContainer("span").setHtml("Column width: 5rem");
                mWidth.getChildren()[0].addChild(wlabel);
                mWidth.getChildren()[0].setStyle("width", "100%");
                const slider = new JSContainer("slider", "input");
                slider.setAttribute("type", "range");
                slider.setAttribute("min", "2");
                slider.setAttribute("max", "30");
                slider.setAttribute("value", "5");
                if (col.hasOwnProperty("width")) {
                    const width = col["width"];
                    if (width != null) {
                        slider.setAttribute("value", width + "");
                        wlabel.setHtml("Column width: " + width + "rem");
                    }
                }
                mWidth.getChildren()[0].addChild(slider);
                slider.setStyle("width", "100%").setStyle("display", "block");
                slider.addEventListener(new HeaderAction.HeaderAction$0(this, wlabel), "change");
                this.getDropdown().addItem(mWidth);
<<<<<<< HEAD
                if (fname !== "Branch_Code__c") {
                    this.getDropdown().addMenuDivider();
                    this.getDropdown().setStyle("min-width", "250px");
                    if (type === "String") {
                        const metadata = col["metadata"];
                        this.txtSearch = new sp.datagrid.TextSearch("textSearch_" + fname, objectType, col);
                        this.txtSearch.setData(metadata);
                        const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
                        msearch.setChecked(false);
                        msearch.setPrefixIconName(null);
                        msearch.setIconName(null);
                        msearch.refresh();
                        msearch.getChildren()[0].addChild(this.txtSearch);
                        msearch.getChildren()[0].setStyle("width", "100%");
                        this.getDropdown().addItem(msearch);
                    }
                    else if (type === "Boolean") {
                        const metadata = (new Array());
                        const tr = new Object();
                        tr["label"] = "TRUE";
                        tr["value"] = "TRUE";
                        metadata.push(tr);
                        const fl = new Object();
                        fl["label"] = "FALSE";
                        fl["value"] = "FALSE";
                        metadata.push(fl);
                        this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                        this.txtSearch.setData(metadata);
                        const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
                        msearch.setChecked(false);
                        msearch.setPrefixIconName(null);
                        msearch.setIconName(null);
                        msearch.refresh();
                        msearch.getChildren()[0].addChild(this.txtSearch);
                        msearch.getChildren()[0].setStyle("width", "100%");
                        this.getDropdown().addItem(msearch);
                    }
                    else if (type === "DateTime") {
                        this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                        this.txtSearch.setDateOptions();
                        const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
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
                if (type === "String") {
                    const metadata = col["metadata"];
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch_" + fname, objectType, col);
                    this.txtSearch.setData(metadata);
                    const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
                    msearch.setChecked(false);
                    msearch.setPrefixIconName(null);
                    msearch.setIconName(null);
                    msearch.refresh();
                    msearch.getChildren()[0].addChild(this.txtSearch);
                    msearch.getChildren()[0].setStyle("width", "100%");
                    this.getDropdown().addItem(msearch);
                }
                else if (type === "Boolean") {
                    const metadata = (new Array());
                    const tr = new Object();
                    tr["label"] = "TRUE";
                    tr["value"] = "TRUE";
                    metadata.push(tr);
                    const fl = new Object();
                    fl["label"] = "FALSE";
                    fl["value"] = "FALSE";
                    metadata.push(fl);
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                    this.txtSearch.setData(metadata);
                    const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
                    msearch.setChecked(false);
                    msearch.setPrefixIconName(null);
                    msearch.setIconName(null);
                    msearch.refresh();
                    msearch.getChildren()[0].addChild(this.txtSearch);
                    msearch.getChildren()[0].setStyle("width", "100%");
                    this.getDropdown().addItem(msearch);
                }
                else if (type === "DateTime") {
                    this.txtSearch = new sp.datagrid.TextSearch("textSearch", objectType, col);
                    this.txtSearch.setDateOptions();
                    const msearch = new com.spoonconsulting.lightning.MenuItem("textSearch");
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
                const btnCtn = new com.spoonconsulting.lightning.MenuItem("btnCtn");
                btnCtn.setChecked(false);
                btnCtn.setPrefixIconName(null);
                btnCtn.setIconName(null);
                btnCtn.refresh();
                const ok = new com.spoonconsulting.lightning.Button("ok");
                ok.setLabel("Ok");
                ok.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                ok.setStyle("margin-right", "0.5rem");
                ok.addEventListener(new HeaderAction.HeaderAction$2(this, fname), "click");
                const cancel = new com.spoonconsulting.lightning.Button("cancel");
                cancel.setLabel("Cancel");
                cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                cancel.addEventListener(new HeaderAction.HeaderAction$3(this), "click");
                const clear = new com.spoonconsulting.lightning.Button("clear");
<<<<<<< HEAD
                if (fname !== "Branch_Code__c") {
                    clear.setLabel("Clear filters");
                    clear.addEventListener(new HeaderAction.HeaderAction$4(this, fname), "click");
                    clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
                }
                btnCtn.getChildren()[0].addChild(cancel);
                if (fname !== "Branch_Code__c") {
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
                if (type !== "DateTime") {
                    this.getButton().addEventListener(new HeaderAction.HeaderAction$5(this), "click");
                }
                if (type === "DateTime") {
                    this.getButton().addEventListener(new HeaderAction.HeaderAction$6(this), "click");
                }
            }
            displaceDropdown() {
                const drop = this.getDropdown().getElement();
<<<<<<< HEAD
                try {
                    let cls = ".scroller_" + this.objectType;
                    cls = "c-grids";
                    document.querySelectorAll(cls).item(0).appendChild(drop);
                }
                catch (e) {
                    document.body.appendChild(drop);
                }
            }
            positionDropdown(evt) {
                const drop = this.getDropdown().getElement();
                const btn = this.getButton().getElement();
                const rect = btn.getBoundingClientRect();
                const top = rect.top + window.screenTop;
                const left = rect.left + window.screenLeft;
                drop.style.top = (top - 126 + window.scrollY) + "px";
                drop.style.left = (left + 4) + "px";
                if (this.objectType === "Task") {
                    try {
                    }
                    catch (e) {
                    }
                }
=======
                drop.style.position = "fixed";
            }
            positionDropdown(evt) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            }
            setDropdownPosition(evt) {
                this.displaceDropdown();
                this.positionDropdown(evt);
            }
            refresh() {
                super.refresh();
                setTimeout((() => {
                    try {
                        this.setDropdownPosition(null);
                        const drop = this.getDropdown().getElement();
                        drop.style.display = "none";
                    }
                    catch (e) {
                        console.error(e);
                        console.error(e.message, e);
                    }
                }), 2000);
            }
        }
        datagrid.HeaderAction = HeaderAction;
        HeaderAction["__class"] = "sp.datagrid.HeaderAction";
        HeaderAction["__interfaces"] = ["framework.components.api.Renderable"];
        (function (HeaderAction) {
            class HeaderAction$0 {
                constructor(__parent, wlabel) {
                    this.wlabel = wlabel;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const value = source.getElement().value;
                    const header = (source.getAncestorWithClass("DataGridHeader"));
                    header.setWidth(/* parseDouble */ parseFloat(value));
                    this.wlabel.setHtml("Column width: " + value + "rem");
                }
            }
            HeaderAction.HeaderAction$0 = HeaderAction$0;
            HeaderAction$0["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$1 {
                constructor(__parent, col, fname) {
                    this.col = col;
                    this.fname = fname;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const name = source.getName();
                    console.info(name);
                    const src = evt["source"];
                    if (src == null) {
                        return;
                    }
                    if (src.getName() === "customFilter") {
                        const grid = (this.__parent.getAncestorWithClass("HeavyGrid"));
                        grid.customFilter(this.col);
                        this.__parent.close();
                    }
                    else if (src.getName() === "sortAsc") {
                        src.setChecked(!src.isChecked());
                        src.refresh();
                        evt["fieldName"] = this.fname;
                        evt["sortDir"] = "ASC";
                        if (src.isChecked()) {
                            evt["onOff"] = "on";
                            const desc = this.__parent.getMenuItem("sortDesc");
                            if (desc.isChecked()) {
                                desc.setChecked(false);
                                desc.refresh();
                            }
                        }
                        else {
                            evt["onOff"] = "off";
                        }
                        this.__parent.close();
                        const dg = (this.__parent.getAncestorWithClass("DataGrid"));
                        dg.fireListener("sorting", evt);
                    }
                    else if (src.getName() === "sortDesc") {
                        src.setChecked(!src.isChecked());
                        src.refresh();
                        evt["fieldName"] = this.fname;
                        evt["sortDir"] = "DESC";
                        if (src.isChecked()) {
                            evt["onOff"] = "on";
                            const asc = this.__parent.getMenuItem("sortAsc");
                            if (asc.isChecked()) {
                                asc.setChecked(false);
                                asc.refresh();
                            }
                        }
                        else {
                            evt["onOff"] = "off";
                        }
                        this.__parent.close();
                        const dg = (this.__parent.getAncestorWithClass("DataGrid"));
                        dg.fireListener("sorting", evt);
                    }
                }
            }
            HeaderAction.HeaderAction$1 = HeaderAction$1;
            HeaderAction$1["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$2 {
                constructor(__parent, fname) {
                    this.fname = fname;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                    if (this.__parent.txtSearch != null) {
                        const options = this.__parent.txtSearch.getSelectedOptions();
                        evt["options"] = options;
                        evt["fieldName"] = this.fname;
                        const dg = (this.__parent.getAncestorWithClass("DataGrid"));
                        dg.fireListener("filterIncludes", evt);
                    }
                }
            }
            HeaderAction.HeaderAction$2 = HeaderAction$2;
            HeaderAction$2["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$3 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            HeaderAction.HeaderAction$3 = HeaderAction$3;
            HeaderAction$3["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$4 {
                constructor(__parent, fname) {
                    this.fname = fname;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                    if (this.__parent.txtSearch != null) {
                        const options = (new Array());
                        evt["options"] = options;
                        evt["fieldName"] = this.fname;
                        evt["clearFilter"] = true;
                        this.__parent.txtSearch.setSelectedOptions((new Array()));
                        const dg = (this.__parent.getAncestorWithClass("DataGrid"));
                        dg.fireListener("filterIncludes", evt);
                    }
                    else {
                        const options = (new Array());
                        evt["options"] = options;
                        evt["fieldName"] = this.fname;
                        evt["clearFilter"] = true;
                        const dg = (this.__parent.getAncestorWithClass("DataGrid"));
                        dg.fireListener("filterIncludes", evt);
                    }
                }
            }
            HeaderAction.HeaderAction$4 = HeaderAction$4;
            HeaderAction$4["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$5 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    if (this.__parent.txtSearch != null) {
                        this.__parent.txtSearch.doRemoteSearch(true);
                    }
                    this.__parent.setDropdownPosition(evt);
                }
            }
            HeaderAction.HeaderAction$5 = HeaderAction$5;
            HeaderAction$5["__interfaces"] = ["framework.components.api.EventListener"];
            class HeaderAction$6 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.setDropdownPosition(evt);
                }
            }
            HeaderAction.HeaderAction$6 = HeaderAction$6;
            HeaderAction$6["__interfaces"] = ["framework.components.api.EventListener"];
        })(HeaderAction = datagrid.HeaderAction || (datagrid.HeaderAction = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class HeavyGrid extends JSContainer {
<<<<<<< HEAD
            constructor(name, type) {
=======
            constructor(name, type, dry) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                super(name, "div");
                this.grid = null;
                this.columns = (new Array());
                this.controls = null;
                if (this.sfFilters === undefined) {
                    this.sfFilters = null;
                }
                this.modalListFilters = null;
                this.search = new sp.datagrid.AdvancedSearch("search");
                this.dateSearch = new sp.datagrid.AdvancedDateSearch("search");
                this.modalCloseCase = new sp.datagrid.ModalCloseCase("closeCases");
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
                if (this.type === undefined) {
                    this.type = null;
                }
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
                const lgrid = new com.spoonconsulting.lightning.Layout("lgrid", "div");
                const lgridItem = new com.spoonconsulting.lightning.LayoutItem("lgridItem", "div");
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
                    const gri = a;
                    const orderBy = b["orderBy"];
                    const orderByDir = b["orderByDir"];
                    console.info("gri.getOrderBy():" + gri.getOrderBy());
                    console.info("gri.getOrderByDir():" + gri.getOrderByDir());
                    console.info("orderBy:" + orderBy);
                    console.info("orderByDir:" + orderByDir);
                    return null;
                });
                this.addEventListener(new HeavyGrid.HeavyGrid$0(this), "remoteSearch");
                this.addEventListener(new HeavyGrid.HeavyGrid$1(this), "clearQuery");
            }
            closeCase(selectedId) {
                this.modalCloseCase.open();
                this.modalCloseCase.refresh(this.grid, selectedId, this.type);
            }
<<<<<<< HEAD
=======
            getLeft(colName) {
                const o = this.grid.getFilters();
                const lst = (new Array());
                {
                    let array155 = Object.keys(o);
                    for (let index154 = 0; index154 < array155.length; index154++) {
                        let fieldName = array155[index154];
                        {
                            lst.push(o[fieldName]);
                        }
                    }
                }
                const res = lst.sort((a, b) => {
                    const pos1 = a["position"];
                    const pos2 = b["position"];
                    return parseFloat(/* compareTo */ ((o1, o2) => { if (o1 && o1.compareTo) {
                        return o1.compareTo(o2);
                    }
                    else {
                        return o1 < o2 ? -1 : o2 < o1 ? 1 : 0;
                    } })(pos1, pos2) + "");
                });
                let total = 0;
                for (let index156 = 0; index156 < res.length; index156++) {
                    let filter = res[index156];
                    {
                        let widht = 5;
                        if (filter.hasOwnProperty("width") && filter["width"] != null) {
                            widht = filter["width"];
                        }
                        total = total + widht;
                        const fieldName = filter["fieldName"];
                        if (fieldName === colName) {
                            break;
                        }
                    }
                }
                return total;
            }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            pinCurrent() {
                const filterId = this.sfFilters["Id"];
                sp.datagrid.Util.getService().pinFilter(filterId, this.type).then((result) => {
                    this.sfFilters["Is_Default__c"] = true;
                }).catch((e) => {
                    const b = e["body"];
                    const pe = b["pageErrors"];
                    if (pe != null && pe.length > 0) {
                        alert(pe[0]["message"]);
                    }
                    const fe = b["fieldErrors"];
                    if (fe != null && Object.keys(fe).length > 0) {
                        let feMsg = "";
                        {
<<<<<<< HEAD
                            let array155 = Object.keys(fe);
                            for (let index154 = 0; index154 < array155.length; index154++) {
                                let key = array155[index154];
=======
                            let array158 = Object.keys(fe);
                            for (let index157 = 0; index157 < array158.length; index157++) {
                                let key = array158[index157];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                                {
                                    const f = fe[key];
                                    if (f != null && f.length > 0) {
                                        feMsg = feMsg + "\n" + f[0]["message"];
                                    }
                                }
                            }
                        }
                        if (feMsg != null) {
                            alert(feMsg);
                        }
                    }
                });
            }
            editRecord(evt) {
                const grids = (this.getAncestorWithClass("Grids"));
                evt["objectType"] = this.type;
                grids.fireListener("editRecord", evt);
            }
            getType() {
                return this.type;
            }
            openListFilters() {
                this.modalListFilters.open();
                this.modalListFilters.refresh();
            }
            setFilters$jsweet_lang_Object(filters) {
                this.sfFilters = filters;
                const label = filters["Label__c"];
                const sFilters = filters["Filters__c"];
                const pinned = filters["Is_Default__c"];
                const oFilters = JSON.parse(sFilters);
                this.setFilters$jsweet_lang_Object$java_lang_String(oFilters, label);
                this.controls.setPinned(pinned);
            }
            setFilters$jsweet_lang_Object$java_lang_String(filters, label) {
                this.grid.setFilters(filters);
                this.columns = this.grid.getColumns();
                this.controls.setColumns(this.columns);
                this.controls.setFilterLabel(label);
            }
            setFilters(filters, label) {
                if (((filters != null && filters instanceof Object) || filters === null) && ((typeof label === 'string') || label === null)) {
                    return this.setFilters$jsweet_lang_Object$java_lang_String(filters, label);
                }
                else if (((filters != null && filters instanceof Object) || filters === null) && label === undefined) {
                    return this.setFilters$jsweet_lang_Object(filters);
                }
                else
                    throw new Error('invalid overload');
            }
            getFilterId() {
                return this.sfFilters["Id"];
            }
            doRefreshList(callback = null) {
                try {
                    const of = this.grid.getFilters();
                    if (of != null && Object.keys(of).length > 0) {
                        this.sfFilters["Filters__c"] = JSON.stringify(of);
                    }
                    const sFilters = this.sfFilters["Filters__c"];
                    const grids = (this.getAncestorWithClass("Grids"));
                    grids.showSpinner(true);
                    const filterId = this.sfFilters["Id"];
                    sp.datagrid.Util.getService().getCases(0, sFilters, this.type, filterId).then(((grids) => {
                        return (result) => {
                            this.setRendered(false);
                            this.setData(result);
                            grids.showSpinner(false);
                            grids.render();
                            this.refresh();
                            if (callback != null) {
                                (target => (typeof target === 'function') ? target(result) : target.apply(result))(callback);
                            }
                        };
                    })(grids));
                }
                catch (e) {
                    console.error(e.message, e);
                }
            }
            clearQuery(fieldName) {
                const sFilters = this.sfFilters["Filters__c"];
                const oFilters = JSON.parse(sFilters);
                const ffilter = oFilters[fieldName];
                ffilter["includes"] = new Array();
                delete ffilter["custom"];
                oFilters[fieldName] = ffilter;
                this.sfFilters["Filters__c"] = JSON.stringify(oFilters);
                this.setFilters$jsweet_lang_Object(this.sfFilters);
                this.doRefreshList();
            }
            saveCustomFilter(fieldName, objectType, result, callback) {
                this.grid.setCustomFilter(fieldName, result);
                this.doRefreshList((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['apply'] ? funcInst['apply'] : funcInst).call(funcInst, arg0); })(callback)));
            }
            customFilter(col) {
                const type = col["type"];
                if (type === "DateTime") {
                    this.dateSearch.refresh(col, type);
                    this.dateSearch.open();
                }
                else {
                    this.search.refresh(col, this.type);
                    this.search.open();
                }
            }
            showSpinner(b) {
                const grids = (this.getAncestorWithClass("Grids"));
                grids.showSpinner(b);
            }
            refresh() {
                this.grid.refresh();
            }
            cloneList(label) {
                this.showSpinner(true);
                sp.datagrid.Util.getService().cloneFilter(this.sfFilters["Id"], label).then((result) => {
                    this.setFilters$jsweet_lang_Object(result);
                    this.doRefreshList();
                });
            }
            deleteList() {
                this.showSpinner(true);
                sp.datagrid.Util.getService().deleteFilter(this.sfFilters["Id"]).then((result) => {
                    this.setFilters$jsweet_lang_Object(result);
                    this.doRefreshList();
                });
            }
            addList(label) {
                this.showSpinner(true);
                sp.datagrid.Util.getService().createNewFilter(this.type, label).then((result) => {
                    this.setFilters$jsweet_lang_Object(result);
                    this.doRefreshList();
                });
            }
            renameList(label) {
                this.sfFilters["Label__c"] = label;
                this.controls.setFilterLabel(label);
                sp.datagrid.Util.getService().renameFilter(this.sfFilters["Id"], label);
            }
            setColumns(cols) {
                this.columns = cols;
                this.grid.setColumns(this.columns);
                this.controls.setColumns(this.columns);
            }
            setData(data) {
                this.grid.setData(data);
            }
            setGridInfo(icon, title, subtitle) {
                this.controls.setTableInfo(icon, title, subtitle);
            }
            refreshList() {
                this.grid.refreshList();
            }
            getGrid() {
                return this.grid;
            }
        }
        datagrid.HeavyGrid = HeavyGrid;
        HeavyGrid["__class"] = "sp.datagrid.HeavyGrid";
        HeavyGrid["__interfaces"] = ["framework.components.api.Renderable"];
        (function (HeavyGrid) {
            class HeavyGrid$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const grids = (this.__parent.getAncestorWithClass("Grids"));
                    evt["Grid"] = this.__parent.getName();
                    grids.fireListener("remoteSearch", evt);
                }
            }
            HeavyGrid.HeavyGrid$0 = HeavyGrid$0;
            HeavyGrid$0["__interfaces"] = ["framework.components.api.EventListener"];
            class HeavyGrid$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const fieldName = evt["fieldName"];
                    this.__parent.clearQuery(fieldName);
                }
            }
            HeavyGrid.HeavyGrid$1 = HeavyGrid$1;
            HeavyGrid$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(HeavyGrid = datagrid.HeavyGrid || (datagrid.HeavyGrid = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class MockHomePageService {
            /**
             *
             * @param {string} objectType
             * @return {Promise}
             */
            getFilters(objectType) {
                const filter = window["samplefilter"];
                const filter1 = window["samplefilter1"];
                const result = (new Array());
                result.push(filter);
                result.push(filter1);
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            getRecordTypes(objectType) {
                const result = window["recordtypes"];
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            /**
             *
             * @param {string} ownerId
             * @param {string[]} caseIds
             * @return {Promise}
             */
            changeOwner(ownerId, caseIds) {
                const buc = (t, u) => {
                    (target => (typeof target === 'function') ? target("Success") : target.accept("Success"))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
            }
            /**
             *
             * @param {string} status
             * @param {string[]} caseIds
             * @return {Promise}
             */
            closeCases(status, caseIds) {
                const buc = (t, u) => {
                    (target => (typeof target === 'function') ? target("Success") : target.accept("Success"))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
            }
            /**
             *
             * @param {string[]} caseIds
             * @return {Promise}
             */
            mergeCases(caseIds) {
                const buc = (t, u) => {
                    (target => (typeof target === 'function') ? target("Success") : target.accept("Success"))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
            }
            /**
             *
             * @param {string} filterId
             * @param {string} objectType
             * @return {Promise}
             */
            pinFilter(filterId, objectType) {
                const buc = (t, u) => {
                    (target => (typeof target === 'function') ? target("Success") : target.accept("Success"))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
            }
            /**
             *
             * @param {string} objectType
             * @param {string} label
             * @return {Promise}
             */
            createNewFilter(objectType, label) {
                const filter = window["samplefilter"];
                const buc = (t, u) => {
                    (target => (typeof target === 'function') ? target(filter) : target.accept(filter))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(buc))));
            }
            /**
             *
             * @param {string} IdToDelete
             * @return {Promise}
             */
            deleteFilter(IdToDelete) {
                return this.createNewFilter(null, null);
            }
            /**
             *
             * @param {string} IdToRename
             * @param {string} label
             */
            renameFilter(IdToRename, label) {
            }
            /**
             *
             * @param {string} IdToClone
             * @param {string} label
             * @return {Promise}
             */
            cloneFilter(IdToClone, label) {
                return this.createNewFilter(IdToClone, label);
            }
            /**
             *
             * @param {string} filter
             * @param {string} filterId
             * @return {Promise}
             */
            updateFilter(filter, filterId) {
                return this.createNewFilter(filter, filterId);
            }
            /**
             *
             * @param {string} objectType
             * @return {Promise}
             */
            getDefaultFilter(objectType) {
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
            getCases(page, filter, objectType, filterId) {
                const result = window["cases"];
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            /**
             *
             * @return {Promise}
             */
            getCustomerPortalUsers() {
                const result = window["portalusers"];
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            /**
             *
             * @return {Promise}
             */
            getQueues() {
                const result = window["queues"];
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            /**
             *
             * @param {string} txt
             * @return {Promise}
             */
            getUsers(txt) {
                const results = window["users"];
                const result = (new Array());
<<<<<<< HEAD
                for (let index156 = 0; index156 < results.length; index156++) {
                    let res = results[index156];
=======
                for (let index159 = 0; index159 < results.length; index159++) {
                    let res = results[index159];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        if (txt != null && txt.length > 0) {
                            if ( /* contains */(res["label"].toLowerCase().indexOf(txt.toLowerCase()) != -1)) {
                                if (result.length < 5)
                                    result.push(res);
                            }
                        }
                        else {
                            if (result.length < 5)
                                result.push(res);
                        }
                    }
                }
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
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
            getFieldValues(fieldName, txt, page, objectType, filterId) {
                const result = window["cases"];
<<<<<<< HEAD
                for (let index157 = 0; index157 < result.length; index157++) {
                    let o = result[index157];
=======
                for (let index160 = 0; index160 < result.length; index160++) {
                    let o = result[index160];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        o["value"] = o[fieldName];
                        o["label"] = o[fieldName];
                    }
                }
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
            getFieldDateTimeTree(fieldName, objectType) {
                const dt = new Date();
                const result = new sp.datagrid.DateTimeTree();
                result.addDate(dt);
                for (let i = 0; i < 20; i++) {
                    {
                        const tmp = new Date(dt.getTime() + i * 20000 * 60 * 60);
                        result.addDate(tmp);
                    }
                    ;
                }
                const consu = (t, u) => {
                    (target => (typeof target === 'function') ? target(result) : target.accept(result))(t);
                };
                return (new Promise((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0, arg1) => (funcInst['accept'] ? funcInst['accept'] : funcInst).call(funcInst, arg0, arg1); })(consu))));
            }
<<<<<<< HEAD
=======
            /**
             *
             * @return {Promise}
             */
            getBranches() {
                return null;
            }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
            constructor() {
            }
        }
        datagrid.MockHomePageService = MockHomePageService;
        MockHomePageService["__class"] = "sp.datagrid.MockHomePageService";
        MockHomePageService["__interfaces"] = ["sp.datagrid.HompPageService"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalChangeOwner extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
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
                const lowerText = new JSContainer("lowerText", "div").setHtml("<div class=\"uiOutputRichText\"><div><span class=\"desc\">The new owner</span> will also become the owner of these records related to <span class=\"desc\"></span> that are owned by <span class=\"desc\">the current record owner</span>.</div></div><ul role=\"group\" style=\"list-style-type:circle;margin-left: 2rem;line-height: 1.9rem;margin-top: 1rem;\"><li>Notes and attachments</li><li>Open activities</li></ul><div class=\"clearall\"></div>");
                lowerText.addClass("slds-m-top_large");
                this.getContent().addChild(lowerText);
                this.getFooter().addChild(this.cancel).addChild(this.save);
                this.cancel.addEventListener(new ModalChangeOwner.ModalChangeOwner$3(this), "click");
                this.save.addEventListener(new ModalChangeOwner.ModalChangeOwner$4(this), "click");
            }
            doSave() {
                const val = this.input.getValue();
                sp.datagrid.Util.getService().changeOwner(val, this.caseIds).then((result) => {
                    const hgrid = (this.grid_.getAncestorWithClass("HeavyGrid"));
                    hgrid.doRefreshList((res) => {
                        this.close();
                        const gris = (this.getAncestorWithClass("Grids"));
                        gris.setRendered(false);
                        gris.render();
                        return null;
                    });
                }).catch((e) => {
                    const b = e["body"];
                    const pe = b["pageErrors"];
                    alert(pe[0]["message"]);
                    this.close();
                    const gris = (this.getAncestorWithClass("Grids"));
                    gris.setRendered(false);
                    gris.render();
                });
            }
            addItem(name, label, iconName) {
                const item = new com.spoonconsulting.lightning.MenuItem(name);
                item.setLabel(label);
                item.setPrefixIconName(iconName);
                item.setChecked(false);
                item.addClass("menu-item").addClass(name);
                this.ownerType.addItem(item);
            }
            refresh(grid) {
                this.caseIds = grid.getSelectedIds();
                this.grid_ = grid;
                sp.datagrid.Util.getService().getUsers(null).then((result) => {
                    this.input.setOptions(result);
                    this.input.render();
                });
            }
        }
        datagrid.ModalChangeOwner = ModalChangeOwner;
        ModalChangeOwner["__class"] = "sp.datagrid.ModalChangeOwner";
        ModalChangeOwner["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalChangeOwner) {
            class ModalChangeOwner$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.input.getCombo().setExpand(false);
                    this.__parent.input.setValue(null);
                }
            }
            ModalChangeOwner.ModalChangeOwner$0 = ModalChangeOwner$0;
            ModalChangeOwner$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalChangeOwner$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const name = source.getName();
                    console.info(name);
                    const src = evt["source"];
                    if (this.__parent.type === src.getName()) {
                        return;
                    }
                    this.__parent.type = src.getName();
                    if (src.getName() === "users") {
                        this.__parent.ownerType.getButton().setPrefixIconName("standard:avatar");
                        this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
                        if (this.__parent.users == null) {
                            sp.datagrid.Util.getService().getUsers(null).then((result) => {
                                this.__parent.input.setOptions(result);
                                this.__parent.input.setRendered(false);
                                this.__parent.users = result;
                                this.__parent.input.render();
                            });
                        }
                        else {
                            this.__parent.input.setOptions(this.__parent.users);
                            this.__parent.input.setRendered(false);
                            this.__parent.input.render();
                        }
                    }
                    else if (src.getName() === "portalUser") {
                        this.__parent.ownerType.getButton().setPrefixIconName("standard:customer_portal_users");
                        this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#65CAE4");
                        if (this.__parent.customerPortalUsers == null) {
                            sp.datagrid.Util.getService().getCustomerPortalUsers().then((result) => {
                                this.__parent.input.setOptions(result);
                                this.__parent.input.setRendered(false);
                                this.__parent.customerPortalUsers = result;
                                this.__parent.input.render();
                            });
                        }
                        else {
                            this.__parent.input.setOptions(this.__parent.customerPortalUsers);
                            this.__parent.input.setRendered(false);
                            this.__parent.input.render();
                        }
                    }
                    else if (src.getName() === "queues") {
                        this.__parent.ownerType.getButton().setPrefixIconName("standard:orders");
                        this.__parent.ownerType.getButton().getPrefixIcon().setStyle("background", "#769ED9");
                        if (this.__parent.queues == null) {
                            sp.datagrid.Util.getService().getQueues().then((result) => {
                                this.__parent.input.setOptions(result);
                                this.__parent.input.setRendered(false);
                                this.__parent.queues = result;
                                this.__parent.input.render();
                            });
                        }
                        else {
                            this.__parent.input.setOptions(this.__parent.queues);
                            this.__parent.input.setRendered(false);
                            this.__parent.input.render();
                        }
                    }
                }
            }
            ModalChangeOwner.ModalChangeOwner$1 = ModalChangeOwner$1;
            ModalChangeOwner$1["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalChangeOwner$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    if (this.__parent.type === "users") {
                        const txt = this.__parent.input.getCombo().getInput().getValue();
                        if (txt.length % 3 === 0) {
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
            }
            ModalChangeOwner.ModalChangeOwner$2 = ModalChangeOwner$2;
            ModalChangeOwner$2["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalChangeOwner$3 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalChangeOwner.ModalChangeOwner$3 = ModalChangeOwner$3;
            ModalChangeOwner$3["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalChangeOwner$4 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.doSave();
                }
            }
            ModalChangeOwner.ModalChangeOwner$4 = ModalChangeOwner$4;
            ModalChangeOwner$4["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalChangeOwner = datagrid.ModalChangeOwner || (datagrid.ModalChangeOwner = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalCloneList extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.newListName = new com.spoonconsulting.lightning.Input("newList");
                this.setTitle("Clone List View");
                this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
                this.newListName.setLabel("Name of new list view:");
                this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
                this.getContent().addChild(this.newListName);
                this.getContent().setStyle("padding", "0.5rem");
                const saveNewList = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                const cancelNewList = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.getFooter().addChild(cancelNewList).addChild(saveNewList);
                saveNewList.addEventListener(new ModalCloneList.ModalCloneList$0(this), "click");
                cancelNewList.addEventListener(new ModalCloneList.ModalCloneList$1(this), "click");
            }
            setClonedLabel(label) {
                this.newListName.setValue(label + " Copy");
            }
        }
        datagrid.ModalCloneList = ModalCloneList;
        ModalCloneList["__class"] = "sp.datagrid.ModalCloneList";
        ModalCloneList["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalCloneList) {
            class ModalCloneList$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const label = this.__parent.newListName.getValue();
                    if (label != null && label.trim().length > 0) {
                        const grid = (source.getAncestorWithClass("HeavyGrid"));
                        grid.cloneList(label);
                        this.__parent.close();
                    }
                }
            }
            ModalCloneList.ModalCloneList$0 = ModalCloneList$0;
            ModalCloneList$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalCloneList$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalCloneList.ModalCloneList$1 = ModalCloneList$1;
            ModalCloneList$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalCloneList = datagrid.ModalCloneList || (datagrid.ModalCloneList = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalCloseCase extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.radio = new com.spoonconsulting.lightning.RadioGroup("status");
                this.label = new JSContainer("label").setStyle("font-weight", "bold");
                this.selectedId = null;
                this.optCases = (new Array());
                this.optTasks = (new Array());
                this.setTitle("Close Case");
                const opts = (new Array());
                this.addOption("Closed-Resolved", this.optCases);
                this.addOption("Closed-No Action Needed", this.optCases);
                this.radio.setOptions(opts);
                this.radio.addClass("closecases");
                const val = (new Array());
                val.push("Closed-Resolved");
                this.radio.setValue(val);
                this.getContent().setStyle("padding", "1rem");
                this.getContent().addChild(this.label);
                this.getContent().addChild(this.radio);
                const close = new com.spoonconsulting.lightning.Button("close");
                close.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                close.setLabel("Close");
                close.addEventListener(new ModalCloseCase.ModalCloseCase$0(this), "click");
                const cancel = new com.spoonconsulting.lightning.Button("cancel");
                cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                cancel.setLabel("Cancel");
                cancel.addEventListener(new ModalCloseCase.ModalCloseCase$1(this), "click");
                this.getFooter().addChild(cancel);
                this.getFooter().addChild(close);
            }
            /*private*/ addOption(st, opts) {
                const opt2 = new Object();
                opt2["value"] = st;
                opt2["label"] = "Yes, Closed as : " + st;
                opts.push(opt2);
            }
            refresh(grid, selectedId, objectType) {
                this.selectedId = selectedId;
                if (objectType === "Case") {
                    this.radio.setOptions(this.optCases);
                }
                else {
                    this.radio.setOptions(this.optTasks);
                }
                this.setTitle("Close " + objectType);
                this.label.setHtml("Do you want to close this " + objectType + "?");
            }
        }
        datagrid.ModalCloseCase = ModalCloseCase;
        ModalCloseCase["__class"] = "sp.datagrid.ModalCloseCase";
        ModalCloseCase["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalCloseCase) {
            class ModalCloseCase$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const status = this.__parent.radio.getValue()[0];
                    const caseIds = (new Array());
                    caseIds.push(this.__parent.selectedId);
                    sp.datagrid.Util.getService().closeCases(status, caseIds).then((result) => {
                        const g = (source.getAncestorWithClass("Grids"));
                        g.getCasesGrid().doRefreshList((res) => {
                            this.__parent.close();
                            g.setRendered(false);
                            g.render();
                            return null;
                        });
                    }).catch((e) => {
                        const b = e["body"];
                        const pe = b["pageErrors"];
                        if (pe != null && pe.length > 0) {
                            alert(pe[0]["message"]);
                        }
                        const fe = b["fieldErrors"];
                        if (fe != null && Object.keys(fe).length > 0) {
                            let feMsg = "";
                            {
<<<<<<< HEAD
                                let array159 = Object.keys(fe);
                                for (let index158 = 0; index158 < array159.length; index158++) {
                                    let key = array159[index158];
=======
                                let array162 = Object.keys(fe);
                                for (let index161 = 0; index161 < array162.length; index161++) {
                                    let key = array162[index161];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                                    {
                                        const f = fe[key];
                                        if (f != null && f.length > 0) {
                                            feMsg = feMsg + "\n" + f[0]["message"];
                                        }
                                    }
                                }
                            }
                            if (feMsg != null) {
                                alert(feMsg);
                            }
                        }
                        this.__parent.close();
                        const gris = (this.__parent.getAncestorWithClass("Grids"));
                        gris.setRendered(false);
                        gris.render();
                    });
                }
            }
            ModalCloseCase.ModalCloseCase$0 = ModalCloseCase$0;
            ModalCloseCase$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalCloseCase$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalCloseCase.ModalCloseCase$1 = ModalCloseCase$1;
            ModalCloseCase$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalCloseCase = datagrid.ModalCloseCase || (datagrid.ModalCloseCase = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalDeleteList extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.setTitle("Delete List View");
                const labelDelete = new JSContainer("p").setHtml("Are you sure you want to delete this list view?");
                this.getContent().addChild(labelDelete).setStyle("padding", "1rem").setStyle("text-align", "center");
                const cancelDeleteList = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                const deleteDeleteList = new com.spoonconsulting.lightning.Button("delete").setLabel("Delete").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                this.getFooter().addChild(cancelDeleteList).addChild(deleteDeleteList);
                deleteDeleteList.addEventListener(new ModalDeleteList.ModalDeleteList$0(this), "click");
                cancelDeleteList.addEventListener(new ModalDeleteList.ModalDeleteList$1(this), "click");
            }
        }
        datagrid.ModalDeleteList = ModalDeleteList;
        ModalDeleteList["__class"] = "sp.datagrid.ModalDeleteList";
        ModalDeleteList["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalDeleteList) {
            class ModalDeleteList$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const grid = (source.getAncestorWithClass("HeavyGrid"));
                    grid.deleteList();
                    this.__parent.close();
                }
            }
            ModalDeleteList.ModalDeleteList$0 = ModalDeleteList$0;
            ModalDeleteList$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalDeleteList$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalDeleteList.ModalDeleteList$1 = ModalDeleteList$1;
            ModalDeleteList$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalDeleteList = datagrid.ModalDeleteList || (datagrid.ModalDeleteList = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalFieldSelector extends com.spoonconsulting.lightning.Modal {
            constructor(name, grid) {
                super(name);
                this.listBox = new com.spoonconsulting.lightning.DualListBox("listBox");
                this.options = (new Array());
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
            setColumns(cols) {
                const values = (new Array());
                this.options = (new Array());
                const precols = cols.sort((a, b) => {
                    const l1 = a["position"];
                    const l2 = b["position"];
                    return parseFloat(/* compareTo */ ((o1, o2) => { if (o1 && o1.compareTo) {
                        return o1.compareTo(o2);
                    }
                    else {
                        return o1 < o2 ? -1 : o2 < o1 ? 1 : 0;
                    } })(l1, l2) + "");
                });
<<<<<<< HEAD
                for (let index160 = 0; index160 < precols.length; index160++) {
                    let col = precols[index160];
=======
                for (let index163 = 0; index163 < precols.length; index163++) {
                    let col = precols[index163];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        const option = new Object();
                        option["value"] = col["fieldName"];
                        option["label"] = col["label"];
                        const hidden = col["hidden"];
<<<<<<< HEAD
                        if (hidden == null || !hidden) {
=======
                        const display = col["display"];
                        if ((hidden == null || !hidden)) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            values.push(col["fieldName"]);
                        }
                        this.options.push(option);
                    }
                }
                let sorted = this.options.sort((a, b) => {
                    const l1 = a["position"];
                    const l2 = b["position"];
                    return parseFloat(/* compareTo */ ((o1, o2) => { if (o1 && o1.compareTo) {
                        return o1.compareTo(o2);
                    }
                    else {
                        return o1 < o2 ? -1 : o2 < o1 ? 1 : 0;
                    } })(l1, l2) + "");
                });
                this.options = (new Array());
<<<<<<< HEAD
                for (let index161 = 0; index161 < sorted.length; index161++) {
                    let o = sorted[index161];
=======
                for (let index164 = 0; index164 < sorted.length; index164++) {
                    let o = sorted[index164];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        this.options.push(o);
                    }
                }
                this.listBox.setOptions(this.options);
                this.listBox.setValue(values);
                sorted = this.options.sort((a, b) => {
                    const l1 = a["label"];
                    const l2 = b["label"];
                    return parseFloat(/* compareTo */ l1.localeCompare(l2) + "");
                });
                this.options = (new Array());
<<<<<<< HEAD
                for (let index162 = 0; index162 < sorted.length; index162++) {
                    let o = sorted[index162];
=======
                for (let index165 = 0; index165 < sorted.length; index165++) {
                    let o = sorted[index165];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        this.options.push(o);
                    }
                }
                this.listBox.setOptions(this.options);
            }
        }
        datagrid.ModalFieldSelector = ModalFieldSelector;
        ModalFieldSelector["__class"] = "sp.datagrid.ModalFieldSelector";
        ModalFieldSelector["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalFieldSelector) {
            class ModalFieldSelector$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalFieldSelector.ModalFieldSelector$0 = ModalFieldSelector$0;
            ModalFieldSelector$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalFieldSelector$1 {
                constructor(__parent, grid) {
                    this.grid = grid;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const values = this.__parent.listBox.getValue();
                    this.grid.showColumns(values);
                    this.__parent.close();
                }
            }
            ModalFieldSelector.ModalFieldSelector$1 = ModalFieldSelector$1;
            ModalFieldSelector$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalFieldSelector = datagrid.ModalFieldSelector || (datagrid.ModalFieldSelector = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalListFilters extends com.spoonconsulting.lightning.Modal {
            constructor(name, type) {
                super(name);
                this.list = new JSContainer("lis", "ul");
                this.filters = (new Array());
                if (this.type_ === undefined) {
                    this.type_ = null;
                }
                this.type_ = type;
                this.setTitle("Filters");
                this.addClass("list-filters");
                this.getContent().setStyle("padding", "1rem").addChild(this.list);
                const close = new com.spoonconsulting.lightning.Button("close");
                close.setLabel("Close");
                this.getFooter().addChild(close);
                close.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                close.addEventListener(new ModalListFilters.ModalListFilters$0(this), "click");
            }
            addFilter(o) {
                const label = o["Label__c"];
                const li = new JSContainer(o["Id"] + "", "li");
                const a = new JSContainer("", "a").setAttribute("href", "javascript:void(0);").setHtml(label);
                li.addChild(a);
                this.list.addChild(li);
                a.addEventListener(new ModalListFilters.ModalListFilters$1(this, o), "click");
            }
            refresh() {
                sp.datagrid.Util.getService().getFilters(this.type_).then((result) => {
                    this.filters = result;
                    this.list.clearChildren();
                    this.list.setRendered(false);
<<<<<<< HEAD
                    for (let index163 = 0; index163 < this.filters.length; index163++) {
                        let o = this.filters[index163];
=======
                    for (let index166 = 0; index166 < this.filters.length; index166++) {
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
        datagrid.ModalListFilters = ModalListFilters;
        ModalListFilters["__class"] = "sp.datagrid.ModalListFilters";
        ModalListFilters["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalListFilters) {
            class ModalListFilters$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalListFilters.ModalListFilters$0 = ModalListFilters$0;
            ModalListFilters$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalListFilters$1 {
                constructor(__parent, o) {
                    this.o = o;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const grid = (source.getAncestorWithClass("HeavyGrid"));
                    grid.setFilters$jsweet_lang_Object(this.o);
                    grid.doRefreshList((r) => {
                        this.__parent.close();
                        this.__parent.getParent().render();
                        return null;
                    });
                }
            }
            ModalListFilters.ModalListFilters$1 = ModalListFilters$1;
            ModalListFilters$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalListFilters = datagrid.ModalListFilters || (datagrid.ModalListFilters = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalMergeCases extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                if (this.grid === undefined) {
                    this.grid = null;
                }
                this.h3 = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
                this.setTitle("Merge Cases");
                const h1 = new JSContainer("h3");
                h1.addClass("slds-text-heading--large slds-text-align--center slds-p-bottom--small setupFlowHeader");
                this.getContent().addClass("slds-p-around--x-large");
                this.getContent().addChild(h1);
                h1.setHtml("Confirm merge");
                const h2 = new JSContainer("span").addClass("slds-text-body--regular slds-text-align--center setupFlowTagline");
                h2.setHtml("We\'re ready to merge these records");
                this.h3.setHtml("You are about to merge 2 cases. You can\'t undo a merge");
                this.getContent().addChild(h2).addChild(this.h3);
                const merge = new com.spoonconsulting.lightning.Button("merge");
                merge.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                merge.setLabel("Merge Cases");
                merge.addEventListener(new ModalMergeCases.ModalMergeCases$0(this), "click");
                const cancel = new com.spoonconsulting.lightning.Button("cancel");
                cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                cancel.setLabel("Cancel");
                cancel.addEventListener(new ModalMergeCases.ModalMergeCases$1(this), "click");
                this.getFooter().addChild(cancel).addChild(merge);
            }
            refresh(grids) {
                this.grid = grids;
                const caseIds = grids.getCasesGrid().getGrid().getSelectedIds();
                this.h3.setHtml("You are about to merge " + caseIds.length + " cases. You can\'t undo a merge");
            }
        }
        datagrid.ModalMergeCases = ModalMergeCases;
        ModalMergeCases["__class"] = "sp.datagrid.ModalMergeCases";
        ModalMergeCases["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalMergeCases) {
            class ModalMergeCases$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const caseIds = this.__parent.grid.getCasesGrid().getGrid().getSelectedIds();
                    sp.datagrid.Util.getService().mergeCases(caseIds).then((result) => {
                        if (result + "" === "nopermission") {
                            alert("You do not have the right to merge cases");
                            this.__parent.close();
                        }
                        else if (result + "" === "merged") {
                            alert("You cannot merge already merged cases");
                            this.__parent.close();
                        }
<<<<<<< HEAD
=======
                        else if (result + "" === "not-email") {
                            alert("Only cases with origin Email and CEVA can be merged");
                            this.__parent.close();
                        }
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        this.__parent.grid.getCasesGrid().doRefreshList((res) => {
                            this.__parent.close();
                            this.__parent.grid.setRendered(false);
                            this.__parent.grid.render();
                            return null;
                        });
                    }).catch((e) => {
                        const b = e["body"];
                        const pe = b["pageErrors"];
                        alert(pe[0]["message"]);
                        this.__parent.close();
                        this.__parent.grid.setRendered(false);
                        this.__parent.grid.render();
                    });
                }
            }
            ModalMergeCases.ModalMergeCases$0 = ModalMergeCases$0;
            ModalMergeCases$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalMergeCases$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalMergeCases.ModalMergeCases$1 = ModalMergeCases$1;
            ModalMergeCases$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalMergeCases = datagrid.ModalMergeCases || (datagrid.ModalMergeCases = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalNewList extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.newListName = new com.spoonconsulting.lightning.Input("newList");
                this.setTitle("New List View");
                this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
                this.newListName.setLabel("Name of new list view:");
                this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
                this.getContent().addChild(this.newListName);
                this.getContent().setStyle("padding", "0.5rem");
                const saveNewList = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                const cancelNewList = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.getFooter().addChild(cancelNewList).addChild(saveNewList);
                saveNewList.addEventListener(new ModalNewList.ModalNewList$0(this), "click");
                cancelNewList.addEventListener(new ModalNewList.ModalNewList$1(this), "click");
            }
        }
        datagrid.ModalNewList = ModalNewList;
        ModalNewList["__class"] = "sp.datagrid.ModalNewList";
        ModalNewList["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalNewList) {
            class ModalNewList$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const label = this.__parent.newListName.getValue();
                    if (label != null && label.trim().length > 0) {
                        const grid = (source.getAncestorWithClass("HeavyGrid"));
                        grid.addList(label);
                        this.__parent.close();
                    }
                }
            }
            ModalNewList.ModalNewList$0 = ModalNewList$0;
            ModalNewList$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalNewList$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalNewList.ModalNewList$1 = ModalNewList$1;
            ModalNewList$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalNewList = datagrid.ModalNewList || (datagrid.ModalNewList = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalRecordType extends com.spoonconsulting.lightning.Modal {
            constructor(name, objectType) {
                super(name);
                this.recs = new com.spoonconsulting.lightning.RadioGroup("recs");
                this.addClass("modal-recordtype");
                this.setTitle("New " + objectType);
                this.getContent().setStyle("padding", "2rem");
                this.getContent().addChild(this.recs);
                this.recs.setLabel("Choose a Record Type:");
                sp.datagrid.Util.getService().getRecordTypes(objectType).then((result) => {
                    const options = (new Array());
<<<<<<< HEAD
                    for (let index164 = 0; index164 < result.length; index164++) {
                        let o = result[index164];
=======
                    for (let index167 = 0; index167 < result.length; index167++) {
                        let o = result[index167];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            const opt = new Object();
                            opt["value"] = o["Id"];
                            opt["label"] = o["Name"];
                            options.push(opt);
                        }
                    }
                    const val = (new Array());
                    val.push(options[0]["value"]);
                    this.recs.setOptions(options);
                    this.recs.setValue(val);
                    this.recs.setRendered(false);
                    this.recs.render();
                }).catch((e) => {
                });
                const cancel = new com.spoonconsulting.lightning.Button("cancel");
                cancel.setLabel("Cancel");
                cancel.addEventListener(new ModalRecordType.ModalRecordType$0(this), "click");
                const next = new com.spoonconsulting.lightning.Button("next");
                next.setLabel("Next");
                next.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                next.addEventListener(new ModalRecordType.ModalRecordType$1(this, objectType), "click");
                this.getFooter().addChild(cancel).addChild(next);
                this.getContent().addClass("closecases");
            }
        }
        datagrid.ModalRecordType = ModalRecordType;
        ModalRecordType["__class"] = "sp.datagrid.ModalRecordType";
        ModalRecordType["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalRecordType) {
            class ModalRecordType$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalRecordType.ModalRecordType$0 = ModalRecordType$0;
            ModalRecordType$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalRecordType$1 {
                constructor(__parent, objectType) {
                    this.objectType = objectType;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const gris = (source.getAncestorWithClass("Grids"));
                    evt["objectType"] = this.objectType;
                    evt["recordTypeId"] = this.__parent.recs.getValue()[0];
                    gris.fireListener("createNew", evt);
                    this.__parent.close();
                }
            }
            ModalRecordType.ModalRecordType$1 = ModalRecordType$1;
            ModalRecordType$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalRecordType = datagrid.ModalRecordType || (datagrid.ModalRecordType = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ModalRenameList extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                this.newListName = new com.spoonconsulting.lightning.Input("newList");
                this.setTitle("Rename List View");
                this.newListName.setType(com.spoonconsulting.lightning.enums.InputType.TEXT);
                this.newListName.setLabel("New Name of list view:");
                this.newListName.setVariant(com.spoonconsulting.lightning.enums.Variants.FormElementVariant.LABEL_STACKED);
                this.getContent().addChild(this.newListName);
                this.getContent().setStyle("padding", "0.5rem");
                const saveNewList = new com.spoonconsulting.lightning.Button("save").setLabel("Save").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                const cancelNewList = new com.spoonconsulting.lightning.Button("cancel").setLabel("Cancel").setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                this.getFooter().addChild(cancelNewList).addChild(saveNewList);
                saveNewList.addEventListener(new ModalRenameList.ModalRenameList$0(this), "click");
                cancelNewList.addEventListener(new ModalRenameList.ModalRenameList$1(this), "click");
            }
            setCurrentLabel(label) {
                this.newListName.setValue(label);
            }
        }
        datagrid.ModalRenameList = ModalRenameList;
        ModalRenameList["__class"] = "sp.datagrid.ModalRenameList";
        ModalRenameList["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalRenameList) {
            class ModalRenameList$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const label = this.__parent.newListName.getValue();
                    if (label != null && label.trim().length > 0) {
                        const grid = (source.getAncestorWithClass("HeavyGrid"));
                        grid.renameList(label);
                        this.__parent.close();
                    }
                }
            }
            ModalRenameList.ModalRenameList$0 = ModalRenameList$0;
            ModalRenameList$0["__interfaces"] = ["framework.components.api.EventListener"];
            class ModalRenameList$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.close();
                }
            }
            ModalRenameList.ModalRenameList$1 = ModalRenameList$1;
            ModalRenameList$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalRenameList = datagrid.ModalRenameList || (datagrid.ModalRenameList = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class TableTitle extends JSContainer {
<<<<<<< HEAD
            constructor(name) {
=======
            constructor(name, dry) {
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                super(name, "div");
                this.icon = new JSContainer("img");
                this.subtitle = new JSContainer("span").addClass("slds-var-p-right_x-small");
                this.title = new JSContainer("title", "span");
                this.menu = new com.spoonconsulting.lightning.ButtonMenu("menu", "div");
                this.pin = new com.spoonconsulting.lightning.ButtonIcon("", "utility:pin");
                this.addClass("slds-media").addClass("slds-no-space").addClass("slds-grow");
                const iconctn = new JSContainer("div").addClass("slds-avatar").addClass("slds-m-right_small").setStyle("margin-top", "6px");
                this.addChild(iconctn);
<<<<<<< HEAD
                this.icon.setAttribute("src", "https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png");
=======
                this.icon.setAttribute("src", "https://ceva--uat.sandbox.lightning.force.com/img/icon/t4v35/standard/case_120.png");
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                iconctn.addChild(this.icon).setStyle("background", "#F2CF5B");
                const middle = new JSContainer("middle", "div");
                middle.addClass("slds-media__body").addClass("slds-align-middle");
                this.addChild(middle);
                middle.addChild(this.subtitle.setHtml("Cases"));
                const body = new JSContainer("div").addClass("slds-grid slds-media__body");
                middle.addChild(body);
                const btn = body.addChild("", "div", "slds-button");
                btn.addClass("slds-button--reset").addClass(" slds-type-focus").addClass("slds-truncate").addClass("slds-page-header__title").addClass("slds-text-color--default");
                const headerName = btn.addChild("", "div").addClass("slds-page-header__name");
                headerName.addChild("", "div").addChild("", "h1").addChild(this.title);
                this.title.addClass("slds-page-header__title").addClass("slds-truncate").addClass("slds-p-right--xx-small");
<<<<<<< HEAD
                const switcher = new JSContainer("div").addClass("slds-page-header__name-switcher");
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
                if (!dry) {
                    const switcher = new JSContainer("div").addClass("slds-page-header__name-switcher");
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
            doOpenListFilters(source) {
                const grid = (source.getAncestorWithClass("HeavyGrid"));
                grid.openListFilters();
            }
            setInfo(icon, title, subtitle) {
                this.icon.setAttribute("src", icon);
                this.title.setHtml(title);
                this.subtitle.setHtml(subtitle);
                this.icon.getParent().setStyle("background", "#4BC076");
            }
            setFilterLabel(label) {
                this.title.setHtml(label);
            }
            setPinned(b) {
                this.pin.setIconName(b ? "utility:pinned" : "utility:pin");
            }
        }
        datagrid.TableTitle = TableTitle;
        TableTitle["__class"] = "sp.datagrid.TableTitle";
        TableTitle["__interfaces"] = ["framework.components.api.Renderable"];
        (function (TableTitle) {
            class TableTitle$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    if (this.__parent.pin.getIconName() === "utility:pin") {
                        const gr = (source.getAncestorWithClass("HeavyGrid"));
                        gr.pinCurrent();
                        this.__parent.pin.setIconName("utility:pinned");
                    }
                    else {
                        alert("Pin another list");
                    }
                }
            }
            TableTitle.TableTitle$0 = TableTitle$0;
            TableTitle$0["__interfaces"] = ["framework.components.api.EventListener"];
            class TableTitle$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.doOpenListFilters(source);
                }
            }
            TableTitle.TableTitle$1 = TableTitle$1;
            TableTitle$1["__interfaces"] = ["framework.components.api.EventListener"];
            class TableTitle$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    this.__parent.doOpenListFilters(source);
                }
            }
            TableTitle.TableTitle$2 = TableTitle$2;
            TableTitle$2["__interfaces"] = ["framework.components.api.EventListener"];
        })(TableTitle = datagrid.TableTitle || (datagrid.TableTitle = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class TextSearch extends JSContainer {
            constructor(name, objectType, col) {
                super(name, "div");
                this.input = new input.JSTextInput("txt");
                this.list = new JSContainer("list", "ul");
                this.cached = false;
                if (this.objectType === undefined) {
                    this.objectType = null;
                }
                if (this.column === undefined) {
                    this.column = null;
                }
                this.searching = false;
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("3");
                this.timeoutHandle = -1;
                this.column = col;
                this.bd.setStyle("display", "none");
                this.objectType = objectType;
                this.addClass("slds-card").setStyle("padding", "0.5rem");
                this.addChild(this.input.addClass("slds-input").setStyle("width", "100%"));
                const wrap = new JSContainer("div");
                wrap.setStyle("position", "relative");
                this.addChild(wrap);
                wrap.addChild(this.bd);
                wrap.addChild(this.list);
                this.list.addClass("txt-search-options");
                this.list.setStyle("height", "150px").setStyle("overflow", "hidden auto").setStyle("border", "solid 1px silver").setStyle("margin", "0.25rem").setStyle("padding", "0.25rem").setStyle("border-radius", "5px");
                this.input.addEventListener(new TextSearch.TextSearch$0(this), "keyup");
            }
            setDateOptions() {
                const opts = (new Array());
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
            static addOpt(value, label, opts) {
                const opt = new Object();
                opt["value"] = value;
                opt["label"] = label;
                opts.push(opt);
            }
            setSelectedOptions(sels) {
                {
<<<<<<< HEAD
                    let array166 = this.getItems();
                    for (let index165 = 0; index165 < array166.length; index165++) {
                        let item = array166[index165];
=======
                    let array169 = this.getItems();
                    for (let index168 = 0; index168 < array169.length; index168++) {
                        let item = array169[index168];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            const val = item.getValue();
                            if (sels.indexOf(val) >= 0) {
                                item.setSelected(true);
                            }
                            else {
                                item.setSelected(false);
                            }
                        }
                    }
                }
            }
            requireRefresh() {
                const type = this.column["type"];
                const sfType = this.column["sfType"];
                if (type === "Boolean") {
                    return false;
                }
                if (sfType === "PICKLIST" || sfType === "PICKLIST" || sfType === "MULTIPICKLIST" || sfType === "DATE" || sfType === "DATETIME") {
                    return false;
                }
                return true;
            }
            isPicklist() {
                const sfType = this.column["sfType"];
                if (sfType === "PICKLIST" || sfType === "PICKLIST" || sfType === "MULTIPICKLIST") {
                    return true;
                }
                return false;
            }
            doRemoteSearch(force) {
                const type = this.column["type"];
                const sfType = this.column["sfType"];
                if (sfType === "DATE" || sfType === "DATETIME") {
                    return;
                }
                if (type === "Boolean") {
                    if (this.column.hasOwnProperty("includes")) {
                        const incl = this.column["includes"];
                        this.setSelectedOptions(incl);
                    }
                }
                if (!this.cached && type !== "Boolean") {
                    const fieldName = this.getName().split("textSearch_").join("");
                    let txt = this.input.getValue();
                    const picklist = this.isPicklist();
                    if (txt != null && txt.trim().length > 0 || picklist || force) {
                        txt = /* replace */ txt.split("*").join("%");
                        const page = 0;
                        if (force) {
                            txt = "%";
                        }
                        const va = txt;
                        clearTimeout(this.timeoutHandle);
                        this.timeoutHandle = -1;
                        const hg = (this.getAncestorWithClass("HeavyGrid"));
                        const filterId = hg.getFilterId();
                        this.timeoutHandle = setTimeout((((filterId, fieldName, va, page) => {
                            return () => {
                                this.searching = true;
                                this.list.setStyle("opacity", "0.4").setStyle("background", "silver").render();
                                sp.datagrid.Util.getService().getFieldValues(fieldName, va, page, this.objectType, filterId).then((result) => {
                                    this.searching = false;
                                    if (!this.requireRefresh()) {
                                        this.cached = true;
                                    }
                                    this.list.setStyle("opacity", null).setStyle("background", null);
                                    this.setRendered(false);
                                    this.setData(result);
                                    if (this.column.hasOwnProperty("includes")) {
                                        const incl = this.column["includes"];
                                        this.setSelectedOptions(incl);
                                    }
                                    this.render();
                                    const el = this.input.getElement();
                                    el.focus();
                                    el.setSelectionRange(el.value.length, el.value.length);
                                }).catch((e) => {
                                    this.searching = false;
                                });
                            };
                        })(filterId, fieldName, va, page)), picklist || force ? 100 : 3000);
                    }
                }
            }
            setTree(tree) {
                this.list.clearChildren();
                const selall = new JSContainer("li");
                selall.addChild(tree);
                this.list.addChild(selall);
            }
            setData(data) {
                if (data != null) {
                    const selected = this.getSelectedOptions();
                    this.list.clearChildren();
                    const selall = new JSContainer("li");
                    selall.addChild(new com.spoonconsulting.lightning.CheckBox("cl").addEventListener(new TextSearch.TextSearch$1(this), "change")).addChild(new JSContainer("span").setStyle("font-weight", "bold").addClass("slds-truncate").setHtml("Select All"));
                    this.list.addChild(selall);
                    const used = (new Array());
<<<<<<< HEAD
                    for (let index167 = 0; index167 < data.length; index167++) {
                        let line = data[index167];
=======
                    for (let index170 = 0; index170 < data.length; index170++) {
                        let line = data[index170];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            const item = this.getListItem(line);
                            const selItem = TextSearch.getInSelected(line, selected);
                            if (selItem != null) {
                                item.setSelected(true);
                                used.push(line);
                            }
                            this.list.addChild(item);
                        }
                    }
                    if (used.length < selected.length) {
<<<<<<< HEAD
                        for (let index168 = 0; index168 < selected.length; index168++) {
                            let sel = selected[index168];
=======
                        for (let index171 = 0; index171 < selected.length; index171++) {
                            let sel = selected[index171];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            {
                                const ins = TextSearch.getInSelected(sel, used);
                                if (ins == null) {
                                    const item = this.getListItem(sel);
                                    item.setSelected(true);
                                    this.list.addChildAt(0, item);
                                }
                            }
                        }
                    }
                }
            }
            static getInSelected(line, selected) {
<<<<<<< HEAD
                for (let index169 = 0; index169 < selected.length; index169++) {
                    let sel = selected[index169];
=======
                for (let index172 = 0; index172 < selected.length; index172++) {
                    let sel = selected[index172];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        if (sel["value"] === line["value"]) {
                            return line;
                        }
                    }
                }
                return null;
            }
            getItems() {
                const items = this.list.getChildren();
                let result = (new Array());
                if (items.length > 1) {
                    const slic = items.slice(1);
                    result = new (__Function.prototype.bind.apply(Array, [null].concat(slic)));
                }
                return result;
            }
            getListItem(line) {
                const item = new TextSearch.ListItem(this, "", line);
                return item;
            }
            getSelectedOptions() {
                const result = (new Array());
                {
<<<<<<< HEAD
                    let array171 = this.getItems();
                    for (let index170 = 0; index170 < array171.length; index170++) {
                        let item = array171[index170];
=======
                    let array174 = this.getItems();
                    for (let index173 = 0; index173 < array174.length; index173++) {
                        let item = array174[index173];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                        {
                            if (item.isSelected()) {
                                result.push(item.getData());
                            }
                        }
                    }
                }
                return result;
            }
        }
        datagrid.TextSearch = TextSearch;
        TextSearch["__class"] = "sp.datagrid.TextSearch";
        TextSearch["__interfaces"] = ["framework.components.api.Renderable"];
        (function (TextSearch) {
            class ListItem extends JSContainer {
                constructor(__parent, name, data) {
                    super(name, "li");
                    this.__parent = __parent;
                    this.cb = new com.spoonconsulting.lightning.CheckBox("cb");
                    this.label = new JSContainer("label", "span");
                    this.data = null;
                    this.addClass("slds-truncate");
                    this.data = data;
                    this.addChild(this.cb);
                    this.addChild(this.label);
                    const value = data["label"];
                    this.setAttribute("title", value);
                    this.label.setHtml(value);
                }
                getValue() {
                    return this.data["value"];
                }
                isVisible() {
                    return this.getStyle("display") !== "none";
                }
                isSelected() {
                    if (this.isVisible() && this.cb.getValue()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                setSelected(b) {
                    this.cb.setValue(b);
                }
                getData() {
                    return this.data;
                }
            }
            TextSearch.ListItem = ListItem;
            ListItem["__class"] = "sp.datagrid.TextSearch.ListItem";
            ListItem["__interfaces"] = ["framework.components.api.Renderable"];
            class TextSearch$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const val = this.__parent.input.getValue();
                    this.__parent.input.setValue(val);
                    if (!this.__parent.requireRefresh()) {
                        const items = this.__parent.getItems();
<<<<<<< HEAD
                        for (let index172 = 0; index172 < items.length; index172++) {
                            let item = items[index172];
=======
                        for (let index175 = 0; index175 < items.length; index175++) {
                            let item = items[index175];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            {
                                if (val == null || val.trim() === "") {
                                    item.setStyle("display", null);
                                }
                                else {
                                    const v = item.getData()["label"];
                                    if ( /* contains */(v.toLowerCase().indexOf(val.toLowerCase()) != -1)) {
                                        item.setStyle("display", null);
                                    }
                                    else {
                                        item.setStyle("display", "none");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        if (!this.__parent.searching)
                            this.__parent.doRemoteSearch(false);
                    }
                }
            }
            TextSearch.TextSearch$0 = TextSearch$0;
            TextSearch$0["__interfaces"] = ["framework.components.api.EventListener"];
            class TextSearch$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    {
<<<<<<< HEAD
                        let array174 = this.__parent.getItems();
                        for (let index173 = 0; index173 < array174.length; index173++) {
                            let item = array174[index173];
=======
                        let array177 = this.__parent.getItems();
                        for (let index176 = 0; index176 < array177.length; index176++) {
                            let item = array177[index176];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            {
                                if (item.isVisible())
                                    item.cb.setValue(source.getValue());
                                else
                                    item.cb.setValue(false);
                            }
                        }
                    }
                }
            }
            TextSearch.TextSearch$1 = TextSearch$1;
            TextSearch$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(TextSearch = datagrid.TextSearch || (datagrid.TextSearch = {}));
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class Util {
            static getService() {
                if ( /* contains */(window.location.href.indexOf("localhost") != -1))
                    return new sp.datagrid.MockHomePageService();
                return new sp.datagrid.ApexHomePageService();
            }
            static preprocessData(cols, data) {
                console.info(data);
<<<<<<< HEAD
                for (let index175 = 0; index175 < data.length; index175++) {
                    let dat = data[index175];
                    {
                        for (let index176 = 0; index176 < cols.length; index176++) {
                            let col = cols[index176];
=======
                for (let index178 = 0; index178 < data.length; index178++) {
                    let dat = data[index178];
                    {
                        for (let index179 = 0; index179 < cols.length; index179++) {
                            let col = cols[index179];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                            {
                                const type = col["type"];
                                const name = col["fieldName"];
                                if (type === "String") {
                                    if ( /* contains */(name.indexOf(".") != -1)) {
                                        const parts = name.split(".");
                                        const top = dat[parts[0]];
                                        if (top != null) {
                                            const met = new Object();
                                            const label = top[parts[1]];
                                            const value = top["Id"];
                                            if (value != null && label != null) {
                                                met["value"] = value;
                                                met["label"] = label;
                                                let meta = col["metadata"];
                                                if (meta == null) {
                                                    meta = (new Array());
                                                    col["metadata"] = meta;
                                                }
                                                if (meta.indexOf(met) < 0) {
                                                    meta.push(met);
                                                }
                                            }
                                        }
                                    }
                                    else if (name === "CaseNumber") {
                                        const value = dat["Id"];
                                        const label = dat[name];
                                        const met = new Object();
                                        met["value"] = value;
                                        met["label"] = label;
                                        let meta = col["metadata"];
                                        if (meta == null) {
                                            meta = (new Array());
                                            col["metadata"] = meta;
                                        }
                                        if (meta.indexOf(met) < 0) {
                                            meta.push(met);
                                        }
                                    }
                                    else {
                                        const value = dat[name];
                                        let meta = col["metadata"];
                                        if (meta == null) {
                                            meta = (new Array());
                                            col["metadata"] = meta;
                                        }
                                        if (value != null) {
                                            const met = new Object();
                                            met["value"] = value;
                                            met["label"] = value;
                                            if (meta.indexOf(met) < 0) {
                                                meta.push(met);
                                            }
                                        }
                                    }
                                }
                                else if (type === "Boolean") {
                                    let metadata = col["metadata"];
                                    if (metadata == null) {
                                        metadata = (new Array());
                                        const tr = new Object();
                                        tr["label"] = "TRUE";
                                        tr["value"] = "TRUE";
                                        metadata.push(tr);
                                        const fl = new Object();
                                        fl["label"] = "FALSE";
                                        fl["value"] = "FALSE";
                                        metadata.push(fl);
                                        col["metadata"] = metadata;
                                    }
                                }
                                else if (type === "DateTime") {
                                    let metadata = col["metadata"];
                                    if (metadata == null) {
                                        metadata = (new Array());
                                        col["metadata"] = metadata;
                                    }
                                    const dt = new Date(dat[name]);
                                    const year = dt.getFullYear();
                                    const oyear = Util.getYear(metadata, year);
                                    const months = oyear["children"];
                                    const month = dt.getMonth();
                                    const omonth = Util.getMonth(months, month);
                                    const dates = omonth["children"];
                                    const date = dt.getDate();
                                    if (dates.indexOf(date) < 0) {
                                        dates.push(date);
                                        omonth["children"] = dates;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            static getMonth(months, month) {
<<<<<<< HEAD
                for (let index177 = 0; index177 < months.length; index177++) {
                    let m = months[index177];
=======
                for (let index180 = 0; index180 < months.length; index180++) {
                    let m = months[index180];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        const va = m["value"];
                        if (va === month) {
                            return m;
                        }
                    }
                }
                const m = new Object();
                m["value"] = month;
                m["children"] = new Array();
                months.push(m);
                return m;
            }
            static getYear(met, year) {
<<<<<<< HEAD
                for (let index178 = 0; index178 < met.length; index178++) {
                    let o = met[index178];
=======
                for (let index181 = 0; index181 < met.length; index181++) {
                    let o = met[index181];
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
                    {
                        const val = o["value"];
                        if (val === year) {
                            return o;
                        }
                    }
                }
                const y = new Object();
                y["value"] = year;
                const children = (new Array());
                y["children"] = children;
                met.push(y);
                return y;
            }
            static extractVal(data, name, type) {
                let raw = null;
                if ( /* contains */(name.indexOf(".") != -1)) {
                    const path = name.split(".");
                    const top = data[path[0]];
                    if (top != null) {
                        raw = top[path[1]];
                    }
                }
                else {
                    raw = data[name];
                }
                if (type === "Boolean") {
                    if (raw == null || !raw) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else if (type === "DateTime") {
                    if (raw == null) {
                        return null;
                    }
                    else {
                        return new Date(raw.toString());
                    }
                }
                else {
                    return raw;
                }
            }
        }
        datagrid.Util = Util;
        Util["__class"] = "sp.datagrid.Util";
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class BooleanDataCell extends sp.datagrid.DataCell {
            constructor(name, value) {
                super(name, "");
                this.cb = new com.spoonconsulting.lightning.CheckBox(this.getName());
                this.clearChildren();
                this.addChild(this.cb);
                this.cb.setValue(value);
                this.setAlign("center");
                this.value = value;
            }
            setValue(b) {
                this.cb.setValue(b);
            }
            getValue() {
                return this.cb.getValue();
            }
        }
        datagrid.BooleanDataCell = BooleanDataCell;
        BooleanDataCell["__class"] = "sp.datagrid.BooleanDataCell";
        BooleanDataCell["__interfaces"] = ["framework.components.api.Renderable"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class ClickableDataCell extends sp.datagrid.DataCell {
            constructor(name, txt, Id) {
                super(name, txt);
                this.div.setHtml("");
                const a = new JSContainer("a");
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
        datagrid.ClickableDataCell = ClickableDataCell;
        ClickableDataCell["__class"] = "sp.datagrid.ClickableDataCell";
        ClickableDataCell["__interfaces"] = ["framework.components.api.Renderable"];
<<<<<<< HEAD
=======
        (function (ClickableDataCell) {
            class ClickableDataCell$0 {
                constructor(__parent, Id) {
                    this.Id = Id;
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["recordId"] = this.Id;
                    evt["objectType"] = "Task";
                    const grids = (source.getAncestorWithClass("Grids"));
                    grids.fireListener("viewRecord", evt);
                }
            }
            ClickableDataCell.ClickableDataCell$0 = ClickableDataCell$0;
            ClickableDataCell$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(ClickableDataCell = datagrid.ClickableDataCell || (datagrid.ClickableDataCell = {}));
>>>>>>> 2f3131d154b2489b7e7ca0093a3e64b148c805cf
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
(function (sp) {
    var datagrid;
    (function (datagrid) {
        class DateDataCell extends sp.datagrid.DataCell {
            constructor(name, date) {
                super(name, "");
                this.value = date;
                this.setText(this.formatDate(date));
            }
            /*private*/ formatDate(dt) {
                const ft = new Intl.DateTimeFormat();
                return ft.format(dt);
            }
            getValue() {
                return this.value;
            }
        }
        datagrid.DateDataCell = DateDataCell;
        DateDataCell["__class"] = "sp.datagrid.DateDataCell";
        DateDataCell["__interfaces"] = ["framework.components.api.Renderable"];
    })(datagrid = sp.datagrid || (sp.datagrid = {}));
})(sp || (sp = {}));
var __Function = Function;
sp.datagrid.ApexHomePageService.container_$LI$();
sp.datagrid.App.main(null);
