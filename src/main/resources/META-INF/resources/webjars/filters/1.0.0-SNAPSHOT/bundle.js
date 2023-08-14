/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var sp;
(function (sp) {
    var filters;
    (function (filters) {
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
                this.cancel.addEventListener(new AdvancedSearch.AdvancedSearch$0(this), "click");
                this.ok.addEventListener(new AdvancedSearch.AdvancedSearch$1(this), "click");
                const clear = new com.spoonconsulting.lightning.Button("clear");
                clear.setLabel("Clear Filters");
                clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
                clear.addEventListener(new AdvancedSearch.AdvancedSearch$2(this), "click");
                this.getFooter().addChild(this.cancel).addChild(this.ok).addChild(clear);
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
                const sfType = col["fieldName"];
                if (sfType === "ContentSize") {
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
        filters.AdvancedSearch = AdvancedSearch;
        AdvancedSearch["__class"] = "sp.filters.AdvancedSearch";
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
                    evt["fieldName"] = this.__parent.getFieldName();
                    evt["objectType"] = "ContentVersion";
                    evt["filter"] = this.__parent.getFilter();
                    this.__parent.fireListener("onapply", evt);
                    this.__parent.close();
                }
            }
            AdvancedSearch.AdvancedSearch$1 = AdvancedSearch$1;
            AdvancedSearch$1["__interfaces"] = ["framework.components.api.EventListener"];
            class AdvancedSearch$2 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    evt["fieldName"] = this.__parent.getFieldName();
                    evt["objectType"] = "ContentVersion";
                    evt["filter"] = null;
                    this.__parent.fireListener("onapply", evt);
                    this.__parent.close();
                }
            }
            AdvancedSearch.AdvancedSearch$2 = AdvancedSearch$2;
            AdvancedSearch$2["__interfaces"] = ["framework.components.api.EventListener"];
        })(AdvancedSearch = filters.AdvancedSearch || (filters.AdvancedSearch = {}));
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class ApexHomePageService {
            constructor() {
            }
            static container_$LI$() { if (ApexHomePageService.container == null) {
                ApexHomePageService.container = new Object();
            } return ApexHomePageService.container; }
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
        }
        filters.ApexHomePageService = ApexHomePageService;
        ApexHomePageService["__class"] = "sp.filters.ApexHomePageService";
        ApexHomePageService["__interfaces"] = ["sp.filters.HompPageService"];
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class GridControls extends com.spoonconsulting.lightning.Layout {
            constructor(name) {
                super(name, "div");
                this.__refresh = new com.spoonconsulting.lightning.ButtonIcon("refresh", "utility:refresh");
                this.clearFilters = new com.spoonconsulting.lightning.Button("clear");
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
                this.tableInfo = new sp.filters.TableTitle("tableInfo");
                const left = new com.spoonconsulting.lightning.LayoutItem("left", "div").setSize(10);
                left.addChild(this.tableInfo);
                const itemBtns = new com.spoonconsulting.lightning.LayoutItem("itemBtns", "div").setSize(2);
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
            setTableInfo(icon, title, subtitle) {
                this.tableInfo.setInfo(icon, title, subtitle);
            }
            setFilterLabel(label) {
                this.tableInfo.setFilterLabel(label);
            }
        }
        filters.GridControls = GridControls;
        GridControls["__class"] = "sp.filters.GridControls";
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
                    if (confirm("Do you really want to clear all the filters? The action cannot be un-done")) {
                        const header = (this.__parent.getAncestorWithClass("GridHeader"));
                        header.clearFilters();
                    }
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
                    const grid = (this.__parent.getAncestorWithClass("GridHeader"));
                    grid.doRefreshList$();
                }
            }
            GridControls.GridControls$1 = GridControls$1;
            GridControls$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(GridControls = filters.GridControls || (filters.GridControls = {}));
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters_1) {
        class GridHeader extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.controls = null;
                if (this.sfFilters === undefined) {
                    this.sfFilters = null;
                }
                if (this.filters === undefined) {
                    this.filters = null;
                }
                this.search = new sp.filters.AdvancedSearch("search");
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
                this.textSearch = new sp.filters.ModalTextSearch("textSearch");
                if (this.type === undefined) {
                    this.type = null;
                }
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
            getType() {
                return this.type;
            }
            customFilter(lst) {
                const sFilter = this.sfFilters["Filters__c"];
                const oFilters = JSON.parse(sFilter);
                const result = (new Array());
                for (let index121 = 0; index121 < lst.length; index121++) {
                    let o = lst[index121];
                    {
                        const incl = this.doIncl(o, oFilters);
                        if (incl) {
                            result.push(o);
                        }
                    }
                }
                return result;
            }
            doIncl(o, oFilters) {
                {
                    let array123 = Object.keys(oFilters);
                    for (let index122 = 0; index122 < array123.length; index122++) {
                        let key = array123[index122];
                        {
                            const oFilter = oFilters[key];
                            const custom = oFilter["custom"];
                            const b = this.doCustomFilter(custom, o, key);
                            if (!b) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
            doCustomFilter(filter, o, fieldName) {
                if (filter == null) {
                    return true;
                }
                const op1 = filter["operator1"];
                const val1 = filter["value1"];
                const op2 = filter["operator2"];
                const val2 = filter["value2"];
                const op = filter["andOr"];
                if (fieldName === "ContentSize") {
                    const sval = o[fieldName];
                    let val = 0.0;
                    if (sval != null && sval.length > 0) {
                        val = /* parseDouble */ parseFloat(/* replace */ sval.split("KB").join("").trim());
                    }
                    const incl1 = this.incl$java_lang_Double$java_lang_String$java_lang_String(val, op1, val1);
                    const incl2 = this.incl$java_lang_Double$java_lang_String$java_lang_String(val, op2, val2);
                    if (op === "and") {
                        return incl1 && incl2;
                    }
                    else {
                        return incl1 || incl2;
                    }
                }
                else {
                    let val = o[fieldName];
                    if (fieldName.toLowerCase() === "filelink") {
                        val = o["Title"];
                    }
                    if (fieldName === "OwnerLink") {
                        val = o["OwnerName"];
                    }
                    if (val == null) {
                        return false;
                    }
                    const incl1 = this.incl$java_lang_String$java_lang_String$java_lang_String(val, op1, val1);
                    const incl2 = this.incl$java_lang_String$java_lang_String$java_lang_String(val, op2, val2);
                    if (op === "and") {
                        return incl1 && incl2;
                    }
                    else {
                        return incl1 || incl2;
                    }
                }
            }
            incl$java_lang_Double$java_lang_String$java_lang_String(o, op, sval) {
                try {
                    const val = parseFloat(sval);
                    if (op === "=") {
                        return o === val;
                    }
                    else if (op === ">") {
                        return o > val;
                    }
                    else if (op === ">=") {
                        return o >= val;
                    }
                    else if (op === "<") {
                        return o < val;
                    }
                    else if (op === "<=") {
                        return o <= val;
                    }
                    else if (op === "!=") {
                        return o !== val;
                    }
                }
                catch (e) {
                    return true;
                }
                return false;
            }
            incl(o, op, sval) {
                if (((typeof o === 'number') || o === null) && ((typeof op === 'string') || op === null) && ((typeof sval === 'string') || sval === null)) {
                    return this.incl$java_lang_Double$java_lang_String$java_lang_String(o, op, sval);
                }
                else if (((typeof o === 'string') || o === null) && ((typeof op === 'string') || op === null) && ((typeof sval === 'string') || sval === null)) {
                    return this.incl$java_lang_String$java_lang_String$java_lang_String(o, op, sval);
                }
                else
                    throw new Error('invalid overload');
            }
            incl$java_lang_String$java_lang_String$java_lang_String(o, op, val) {
                if (op === "=") {
                    return o === val;
                }
                else if (op === "contains") {
                    return /* contains */ (o.toLowerCase().indexOf(val.toLowerCase()) != -1);
                }
                else if (op === "starts") {
                    return /* startsWith */ ((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(o.toLowerCase(), val.toLowerCase());
                }
                else if (op === "ends") {
                    return /* endsWith */ ((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(o.toLowerCase(), val.toLowerCase());
                }
                else if (op === "notcontains") {
                    return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "contains", val);
                }
                else if (op === "notstarts") {
                    return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "starts", val);
                }
                else if (op === "notends") {
                    return !this.incl$java_lang_String$java_lang_String$java_lang_String(o, "ends", val);
                }
                else if (op === "!=") {
                    return o.toLowerCase() !== val.toLowerCase();
                }
                return false;
            }
            openCustomFilter(fieldName) {
                let col = this.filters[fieldName];
                if (fieldName === "fileLink" && col == null) {
                    col = this.filters["FileLink"];
                }
                this.search.refresh(col, "ContentVersion");
                this.search.open();
                this.setRendered(false);
                this.render();
            }
            setWidths(widths) {
                this.filters["ContentModifiedDate"]["width"] = widths[0];
                this.filters["fileLink"]["width"] = widths[1];
                if (this.filters.hasOwnProperty("FileLink")) {
                    this.filters["FileLink"]["width"] = widths[1];
                }
                this.filters["FileExtension"]["width"] = widths[2];
                this.filters["ContentSize"]["width"] = widths[3];
                this.filters["OwnerLink"]["width"] = widths[4];
                this.sfFilters["Filters__c"] = JSON.stringify(this.filters);
                this.updateFilter();
            }
            setSort(sort) {
                const fieldName = sort["fieldName"];
                const direction = sort["sortDirection"];
                {
                    let array125 = Object.keys(this.filters);
                    for (let index124 = 0; index124 < array125.length; index124++) {
                        let key = array125[index124];
                        {
                            const filter = this.filters[key];
                            delete filter["sorting"];
                            if (key === fieldName) {
                                filter["sorting"] = direction;
                                if (fieldName.toLowerCase() === "filelink") {
                                    if (this.filters.hasOwnProperty("FileLink")) {
                                        const excep = this.filters["FileLink"];
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
            clearFilters() {
                {
                    let array127 = Object.keys(this.filters);
                    for (let index126 = 0; index126 < array127.length; index126++) {
                        let key = array127[index126];
                        {
                            const filter = this.filters[key];
                            delete filter["custom"];
                            delete filter["includes"];
                            this.filters[key] = filter;
                        }
                    }
                }
                this.sfFilters["Filters__c"] = JSON.stringify(this.filters);
                this.doRefreshList$();
            }
            openSimpleFilter(fieldName, fileData) {
                this.textSearch.open();
                console.info(fileData);
                let col = this.filters[fieldName];
                if (fieldName === "fileLink" && col == null) {
                    col = this.filters["FileLink"];
                }
                console.info(col);
                this.textSearch.setColumn(col);
                const includes = col["includes"];
                this.textSearch.setData(fileData, includes);
                if (includes != null) {
                    this.textSearch.setSelectedOptions(includes);
                }
                this.setRendered(false);
                this.render();
            }
            setFilters$jsweet_lang_Object(filters) {
                this.sfFilters = filters;
                const label = filters["Label__c"];
                const sFilters = filters["Filters__c"];
                const oFilters = JSON.parse(sFilters);
                this.setFilters$jsweet_lang_Object$java_lang_String(oFilters, label);
            }
            setFilters$jsweet_lang_Object$java_lang_String(filters, label) {
                this.filters = filters;
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
            doRefreshList$() {
                this.doRefreshList$java_util_function_Function((((funcInst) => { if (typeof funcInst == 'function') {
                    return funcInst;
                } return (arg0) => (funcInst['apply'] ? funcInst['apply'] : funcInst).call(funcInst, arg0); })(null)));
            }
            doRefreshList$java_util_function_Function(callback) {
                const refreshList = new CustomEvent("refreshList");
                refreshList["filters"] = this.filters;
                this.fireListener("refreshList", refreshList);
                this.setRendered(false);
                this.render();
                const sffiters = this.sfFilters["Filters__c"];
                sp.filters.Util.getService().updateFilter(sffiters, this.getFilterId());
            }
            doRefreshList(callback) {
                if (((typeof callback === 'function' && callback.length === 1) || callback === null)) {
                    return this.doRefreshList$java_util_function_Function(callback);
                }
                else if (callback === undefined) {
                    return this.doRefreshList$();
                }
                else
                    throw new Error('invalid overload');
            }
            updateFilter() {
                const sffiters = this.sfFilters["Filters__c"];
                sp.filters.Util.getService().updateFilter(sffiters, this.getFilterId());
            }
            getFilterId() {
                return this.sfFilters["Id"];
            }
        }
        filters_1.GridHeader = GridHeader;
        GridHeader["__class"] = "sp.filters.GridHeader";
        GridHeader["__interfaces"] = ["framework.components.api.Renderable"];
        (function (GridHeader) {
            class GridHeader$0 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const includes = evt["includes"];
                    const col = evt["column"];
                    const fieldName = col["fieldName"];
                    const filter = this.__parent.filters[fieldName];
                    filter["includes"] = includes;
                    this.__parent.filters[fieldName] = filter;
                    this.__parent.sfFilters["Filters__c"] = JSON.stringify(this.__parent.filters);
                    this.__parent.doRefreshList();
                }
            }
            GridHeader.GridHeader$0 = GridHeader$0;
            GridHeader$0["__interfaces"] = ["framework.components.api.EventListener"];
            class GridHeader$1 {
                constructor(__parent) {
                    this.__parent = __parent;
                }
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source, evt) {
                    const cfilter = evt["filter"];
                    const fieldName = evt["fieldName"];
                    const filter = this.__parent.filters[fieldName];
                    if (cfilter == null) {
                        delete filter["custom"];
                    }
                    else {
                        filter["custom"] = cfilter;
                    }
                    this.__parent.filters[fieldName] = filter;
                    this.__parent.sfFilters["Filters__c"] = JSON.stringify(this.__parent.filters);
                    this.__parent.doRefreshList();
                }
            }
            GridHeader.GridHeader$1 = GridHeader$1;
            GridHeader$1["__interfaces"] = ["framework.components.api.EventListener"];
        })(GridHeader = filters_1.GridHeader || (filters_1.GridHeader = {}));
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class ModalSimpleSearch {
        }
        filters.ModalSimpleSearch = ModalSimpleSearch;
        ModalSimpleSearch["__class"] = "sp.filters.ModalSimpleSearch";
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class ModalTextSearch extends com.spoonconsulting.lightning.Modal {
            constructor(name) {
                super(name);
                if (this.textSearch === undefined) {
                    this.textSearch = null;
                }
                this.textSearch = new sp.filters.TextSearch("txtsearch");
                this.getContent().addChild(this.textSearch);
                const cancel = new com.spoonconsulting.lightning.Button("cancel");
                cancel.setLabel("Cancel");
                cancel.addEventListener(new ModalTextSearch.ModalTextSearch$0(this), "click");
                cancel.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.NEUTRAL);
                const apply = new com.spoonconsulting.lightning.Button("apply");
                apply.setLabel("Apply Filter");
                apply.on("click", (e, d) => {
                    const options = this.textSearch.getSelectedOptions();
                    const includes = (new Array());
                    for (let index128 = 0; index128 < options.length; index128++) {
                        let opt = options[index128];
                        {
                            includes.push(opt["value"] + "");
                        }
                    }
                    const onapply = new CustomEvent("onapply");
                    onapply["column"] = this.textSearch.getColumn();
                    onapply["options"] = options;
                    onapply["includes"] = includes;
                    this.fireListener("onapply", onapply);
                    this.close();
                    return null;
                });
                apply.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.BRAND);
                const clear = new com.spoonconsulting.lightning.Button("clear");
                clear.setLabel("Clear Filters");
                clear.setVariant(com.spoonconsulting.lightning.enums.Variants.Variant.DESTRUCTIVE);
                clear.on("click", (e, v) => {
                    const onapply = new CustomEvent("onapply");
                    const options = (new Array());
                    const includes = (new Array());
                    onapply["column"] = this.textSearch.getColumn();
                    onapply["options"] = options;
                    onapply["includes"] = includes;
                    this.fireListener("onapply", onapply);
                    this.close();
                    return null;
                });
                this.getFooter().addChild(cancel).addChild(apply).addChild(clear);
            }
            setColumn(column) {
                this.textSearch.setColumn(column);
            }
            setData(data, includes) {
                const col = this.textSearch.getColumn();
                let fieldName = col["fieldName"];
                if (fieldName.toLowerCase() === "filelink") {
                    fieldName = "Title";
                }
                if (fieldName === "OwnerLink") {
                    fieldName = "OwnerName";
                }
                if (fieldName === "ContentModifiedDate") {
                    this.setDate();
                    return;
                }
                const current = (new Array());
                const ldata = (new Array());
                for (let index129 = 0; index129 < data.length; index129++) {
                    let line = data[index129];
                    {
                        const oval = line[fieldName];
                        let val = "";
                        if (oval != null) {
                            val = oval + "";
                        }
                        if (current.indexOf(val) < 0) {
                            const opt = new Object();
                            opt["value"] = val;
                            opt["label"] = val;
                            ldata.push(opt);
                            current.push(val);
                        }
                    }
                }
                const sorted = ldata.sort((a, b) => {
                    let sa = a["label"];
                    let sb = b["label"];
                    let indexa = -1;
                    let indexb = -1;
                    if (includes != null) {
                        indexa = includes.indexOf(sa);
                        indexb = includes.indexOf(sb);
                    }
                    if (indexa > indexb) {
                        return -1.0;
                    }
                    else if (indexb > indexa) {
                        return 1.0;
                    }
                    else {
                        sa = sa.toLowerCase();
                        sb = sb.toLowerCase();
                        const res = sa.localeCompare(sb);
                        return parseFloat(res + "");
                    }
                });
                const arrSorted = (new Array());
                for (let index130 = 0; index130 < sorted.length; index130++) {
                    let o = sorted[index130];
                    {
                        arrSorted.push(o);
                    }
                }
                this.textSearch.setData(arrSorted);
            }
            setSelectedOptions(opts) {
                this.textSearch.setSelectedOptions(opts);
            }
            setDate() {
                this.textSearch.setDateOptions();
            }
        }
        filters.ModalTextSearch = ModalTextSearch;
        ModalTextSearch["__class"] = "sp.filters.ModalTextSearch";
        ModalTextSearch["__interfaces"] = ["framework.components.api.Renderable"];
        (function (ModalTextSearch) {
            class ModalTextSearch$0 {
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
            ModalTextSearch.ModalTextSearch$0 = ModalTextSearch$0;
            ModalTextSearch$0["__interfaces"] = ["framework.components.api.EventListener"];
        })(ModalTextSearch = filters.ModalTextSearch || (filters.ModalTextSearch = {}));
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class TableTitle extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.icon = new JSContainer("img");
                this.subtitle = new JSContainer("span").addClass("slds-var-p-right_x-small");
                this.title = new JSContainer("title", "span");
                this.addClass("slds-media").addClass("slds-no-space").addClass("slds-grow");
                const iconctn = new JSContainer("div").addClass("slds-avatar").addClass("slds-m-right_small").setStyle("margin-top", "6px");
                this.addChild(iconctn);
                this.icon.setAttribute("src", "https://ceva--uat.my.salesforce.com/img/icon/t4v35/standard/case_120.png");
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
        }
        filters.TableTitle = TableTitle;
        TableTitle["__class"] = "sp.filters.TableTitle";
        TableTitle["__interfaces"] = ["framework.components.api.Renderable"];
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class TextSearch extends JSContainer {
            constructor(name) {
                super(name, "div");
                this.input = new input.JSTextInput("txt");
                this.list = new JSContainer("list", "ul");
                this.cached = false;
                this.objectType = "ContentVersion";
                if (this.column_ === undefined) {
                    this.column_ = null;
                }
                this.bd = new com.spoonconsulting.lightning.Modal.BackDrop("3");
                this.bd.setStyle("display", "none");
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
            static addOpt(value, label, opts) {
                const opt = new Object();
                opt["value"] = value;
                opt["label"] = label;
                opts.push(opt);
            }
            setSelectedOptions(sels) {
                {
                    let array132 = this.getItems();
                    for (let index131 = 0; index131 < array132.length; index131++) {
                        let item = array132[index131];
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
            setData(data) {
                if (data != null) {
                    this.list.clearChildren();
                    const selall = new JSContainer("li");
                    selall.addChild(new com.spoonconsulting.lightning.CheckBox("cl").addEventListener(new TextSearch.TextSearch$1(this), "change")).addChild(new JSContainer("span").setStyle("font-weight", "bold").addClass("slds-truncate").setHtml("Select All"));
                    this.list.addChild(selall);
                    for (let index133 = 0; index133 < data.length; index133++) {
                        let line = data[index133];
                        {
                            const item = this.getListItem(line);
                            this.list.addChild(item);
                        }
                    }
                }
            }
            setColumn(column) {
                this.column_ = column;
            }
            static getInSelected(line, selected) {
                for (let index134 = 0; index134 < selected.length; index134++) {
                    let sel = selected[index134];
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
                    let array136 = this.getItems();
                    for (let index135 = 0; index135 < array136.length; index135++) {
                        let item = array136[index135];
                        {
                            if (item.isSelected()) {
                                result.push(item.getData());
                            }
                        }
                    }
                }
                return result;
            }
            getColumn() {
                return this.column_;
            }
        }
        filters.TextSearch = TextSearch;
        TextSearch["__class"] = "sp.filters.TextSearch";
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
            ListItem["__class"] = "sp.filters.TextSearch.ListItem";
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
                    const items = this.__parent.getItems();
                    for (let index137 = 0; index137 < items.length; index137++) {
                        let item = items[index137];
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
                        let array139 = this.__parent.getItems();
                        for (let index138 = 0; index138 < array139.length; index138++) {
                            let item = array139[index138];
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
        })(TextSearch = filters.TextSearch || (filters.TextSearch = {}));
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
(function (sp) {
    var filters;
    (function (filters) {
        class Util {
            static getService() {
                return new sp.filters.ApexHomePageService();
            }
        }
        filters.Util = Util;
        Util["__class"] = "sp.filters.Util";
    })(filters = sp.filters || (sp.filters = {}));
})(sp || (sp = {}));
var __Function = Function;
sp.filters.ApexHomePageService.container_$LI$();
