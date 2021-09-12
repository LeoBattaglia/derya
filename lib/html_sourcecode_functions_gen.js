"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCodeFunctions = void 0;
//Imports
const html_element_1 = require("./html_element");
const html_validation_1 = require("./html_validation");
//Class
class HTMLSourceCodeFunctions {
    //Constructor
    constructor() {
        //Declarations
        this._ids = 0;
        this.sc = [];
    }
    //Methods
    addElement(element) {
        this.sc.push(element);
        return element;
    }
    addSourceCode(sc) {
        for (let element of sc.sc) {
            this.sc.push(element);
        }
    }
    addTag(tag) {
        if ((0, html_validation_1.isTag)(tag.toLowerCase())) {
            return this.addTagUnsafe(tag);
        }
        return undefined;
    }
    addTagUnsafe(tag) {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }
    closeTag(tag) {
        if ((0, html_validation_1.isClosedTag)(tag.toLowerCase())) {
            return this.closeTagUnsafe(tag);
        }
        return undefined;
    }
    closeTagUnsafe(tag) {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), tag.toLowerCase(), true, true));
    }
    getElement(id) {
        for (let element of this.sc) {
            if (element.id === id) {
                return element;
            }
        }
        return undefined;
    }
    getHTML() {
        let html = "";
        let errors = (0, html_validation_1.validatePage)(this.sc);
        if (errors.getLength() > 0) {
            for (let error of errors.objects) {
                html += "ERROR: " + error.object + "!\r\n";
            }
        }
        //Generate format String
        let lvl = 0;
        for (let element of this.sc) {
            if (element.tag && (0, html_validation_1.isClosedTag)(element.content) && element.closed) {
                lvl--;
            }
            let tabs = "";
            for (let i = 0; i < lvl; i++) {
                tabs += "\t";
            }
            html += tabs + element.getContent() + "\r\n";
            if (element.tag && (0, html_validation_1.isClosedTag)(element.content) && !element.closed) {
                lvl++;
            }
        }
        return html;
    }
    getNewID() {
        return this.ids++;
    }
    openTag(tag) {
        if ((0, html_validation_1.isClosedTag)(tag.toLowerCase())) {
            return this.openTagUnsafe(tag);
        }
        return undefined;
    }
    openTagUnsafe(tag) {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }
    //Get-Methods
    get ids() {
        return this._ids;
    }
    get sc() {
        return this._sc;
    }
    //Set-Methods
    set ids(value) {
        this._ids = value;
    }
    set sc(values) {
        this._sc = values;
    }
    //Generated-Methods
    addArea() {
        return this.openTagUnsafe("area");
    }
    addBase() {
        return this.openTagUnsafe("base");
    }
    addBr() {
        return this.openTagUnsafe("br");
    }
    addCol() {
        return this.openTagUnsafe("col");
    }
    addEmbed() {
        return this.openTagUnsafe("embed");
    }
    addHr() {
        return this.openTagUnsafe("hr");
    }
    addImg() {
        return this.openTagUnsafe("img");
    }
    addInput() {
        return this.openTagUnsafe("input");
    }
    addLink() {
        return this.openTagUnsafe("link");
    }
    addMeta() {
        return this.openTagUnsafe("meta");
    }
    addParam() {
        return this.openTagUnsafe("param");
    }
    addSource() {
        return this.openTagUnsafe("source");
    }
    addTrack() {
        return this.openTagUnsafe("track");
    }
    addWbr() {
        return this.openTagUnsafe("wbr");
    }
    closeA() {
        return this.openTagUnsafe("a");
    }
    closeAbbr() {
        return this.openTagUnsafe("abbr");
    }
    closeAddress() {
        return this.openTagUnsafe("address");
    }
    closeArticle() {
        return this.openTagUnsafe("article");
    }
    closeAside() {
        return this.openTagUnsafe("aside");
    }
    closeAudio() {
        return this.openTagUnsafe("audio");
    }
    closeB() {
        return this.openTagUnsafe("b");
    }
    closeBdi() {
        return this.openTagUnsafe("bdi");
    }
    closeBdo() {
        return this.openTagUnsafe("bdo");
    }
    closeBlockquote() {
        return this.openTagUnsafe("blockquote");
    }
    closeBody() {
        return this.openTagUnsafe("body");
    }
    closeButton() {
        return this.openTagUnsafe("button");
    }
    closeCanvas() {
        return this.openTagUnsafe("canvas");
    }
    closeCaption() {
        return this.openTagUnsafe("caption");
    }
    closeCite() {
        return this.openTagUnsafe("cite");
    }
    closeCode() {
        return this.openTagUnsafe("code");
    }
    closeColgroup() {
        return this.openTagUnsafe("colgroup");
    }
    closeData() {
        return this.openTagUnsafe("data");
    }
    closeDatalist() {
        return this.openTagUnsafe("datalist");
    }
    closeDd() {
        return this.openTagUnsafe("dd");
    }
    closeDel() {
        return this.openTagUnsafe("del");
    }
    closeDetails() {
        return this.openTagUnsafe("details");
    }
    closeDfn() {
        return this.openTagUnsafe("dfn");
    }
    closeDialog() {
        return this.openTagUnsafe("dialog");
    }
    closeDiv() {
        return this.openTagUnsafe("div");
    }
    closeDl() {
        return this.openTagUnsafe("dl");
    }
    closeDt() {
        return this.openTagUnsafe("dt");
    }
    closeEm() {
        return this.openTagUnsafe("em");
    }
    closeFieldset() {
        return this.openTagUnsafe("fieldset");
    }
    closeFigcaption() {
        return this.openTagUnsafe("figcaption");
    }
    closeFigure() {
        return this.openTagUnsafe("figure");
    }
    closeFooter() {
        return this.openTagUnsafe("footer");
    }
    closeForm() {
        return this.openTagUnsafe("form");
    }
    closeH1() {
        return this.openTagUnsafe("h1");
    }
    closeHead() {
        return this.openTagUnsafe("head");
    }
    closeHeader() {
        return this.openTagUnsafe("header");
    }
    closeHtml() {
        return this.openTagUnsafe("html");
    }
    closeI() {
        return this.openTagUnsafe("i");
    }
    closeIframe() {
        return this.openTagUnsafe("iframe");
    }
    closeIns() {
        return this.openTagUnsafe("ins");
    }
    closeKbd() {
        return this.openTagUnsafe("kbd");
    }
    closeLabel() {
        return this.openTagUnsafe("label");
    }
    closeLegend() {
        return this.openTagUnsafe("legend");
    }
    closeLi() {
        return this.openTagUnsafe("li");
    }
    closeMain() {
        return this.openTagUnsafe("main");
    }
    closeMap() {
        return this.openTagUnsafe("map");
    }
    closeMark() {
        return this.openTagUnsafe("mark");
    }
    closeMeter() {
        return this.openTagUnsafe("meter");
    }
    closeNav() {
        return this.openTagUnsafe("nav");
    }
    closeNoscript() {
        return this.openTagUnsafe("noscript");
    }
    closeObject() {
        return this.openTagUnsafe("object");
    }
    closeOl() {
        return this.openTagUnsafe("ol");
    }
    closeOptgroup() {
        return this.openTagUnsafe("optgroup");
    }
    closeOption() {
        return this.openTagUnsafe("option");
    }
    closeOutput() {
        return this.openTagUnsafe("output");
    }
    closeP() {
        return this.openTagUnsafe("p");
    }
    closePicture() {
        return this.openTagUnsafe("picture");
    }
    closePre() {
        return this.openTagUnsafe("pre");
    }
    closeProgress() {
        return this.openTagUnsafe("progress");
    }
    closeQ() {
        return this.openTagUnsafe("q");
    }
    closeRp() {
        return this.openTagUnsafe("rp");
    }
    closeRt() {
        return this.openTagUnsafe("rt");
    }
    closeRuby() {
        return this.openTagUnsafe("ruby");
    }
    closeS() {
        return this.openTagUnsafe("s");
    }
    closeSamp() {
        return this.openTagUnsafe("samp");
    }
    closeScript() {
        return this.openTagUnsafe("script");
    }
    closeSection() {
        return this.openTagUnsafe("section");
    }
    closeSelect() {
        return this.openTagUnsafe("select");
    }
    closeSmall() {
        return this.openTagUnsafe("small");
    }
    closeSpan() {
        return this.openTagUnsafe("span");
    }
    closeStrong() {
        return this.openTagUnsafe("strong");
    }
    closeStyle() {
        return this.openTagUnsafe("style");
    }
    closeSub() {
        return this.openTagUnsafe("sub");
    }
    closeSummary() {
        return this.openTagUnsafe("summary");
    }
    closeSup() {
        return this.openTagUnsafe("sup");
    }
    closeSvg() {
        return this.openTagUnsafe("svg");
    }
    closeTable() {
        return this.openTagUnsafe("table");
    }
    closeTbody() {
        return this.openTagUnsafe("tbody");
    }
    closeTd() {
        return this.openTagUnsafe("td");
    }
    closeTemplate() {
        return this.openTagUnsafe("template");
    }
    closeTextarea() {
        return this.openTagUnsafe("textarea");
    }
    closeTfoot() {
        return this.openTagUnsafe("tfoot");
    }
    closeTh() {
        return this.openTagUnsafe("th");
    }
    closeThead() {
        return this.openTagUnsafe("thead");
    }
    closeTime() {
        return this.openTagUnsafe("time");
    }
    closeTitle() {
        return this.openTagUnsafe("title");
    }
    closeTr() {
        return this.openTagUnsafe("tr");
    }
    closeU() {
        return this.openTagUnsafe("u");
    }
    closeUl() {
        return this.openTagUnsafe("ul");
    }
    closeVar() {
        return this.openTagUnsafe("var");
    }
    closeVideo() {
        return this.openTagUnsafe("video");
    }
    openA() {
        return this.openTagUnsafe("a");
    }
    openAbbr() {
        return this.openTagUnsafe("abbr");
    }
    openAddress() {
        return this.openTagUnsafe("address");
    }
    openArticle() {
        return this.openTagUnsafe("article");
    }
    openAside() {
        return this.openTagUnsafe("aside");
    }
    openAudio() {
        return this.openTagUnsafe("audio");
    }
    openB() {
        return this.openTagUnsafe("b");
    }
    openBdi() {
        return this.openTagUnsafe("bdi");
    }
    openBdo() {
        return this.openTagUnsafe("bdo");
    }
    openBlockquote() {
        return this.openTagUnsafe("blockquote");
    }
    openBody() {
        return this.openTagUnsafe("body");
    }
    openButton() {
        return this.openTagUnsafe("button");
    }
    openCanvas() {
        return this.openTagUnsafe("canvas");
    }
    openCaption() {
        return this.openTagUnsafe("caption");
    }
    openCite() {
        return this.openTagUnsafe("cite");
    }
    openCode() {
        return this.openTagUnsafe("code");
    }
    openColgroup() {
        return this.openTagUnsafe("colgroup");
    }
    openData() {
        return this.openTagUnsafe("data");
    }
    openDatalist() {
        return this.openTagUnsafe("datalist");
    }
    openDd() {
        return this.openTagUnsafe("dd");
    }
    openDel() {
        return this.openTagUnsafe("del");
    }
    openDetails() {
        return this.openTagUnsafe("details");
    }
    openDfn() {
        return this.openTagUnsafe("dfn");
    }
    openDialog() {
        return this.openTagUnsafe("dialog");
    }
    openDiv() {
        return this.openTagUnsafe("div");
    }
    openDl() {
        return this.openTagUnsafe("dl");
    }
    openDt() {
        return this.openTagUnsafe("dt");
    }
    openEm() {
        return this.openTagUnsafe("em");
    }
    openFieldset() {
        return this.openTagUnsafe("fieldset");
    }
    openFigcaption() {
        return this.openTagUnsafe("figcaption");
    }
    openFigure() {
        return this.openTagUnsafe("figure");
    }
    openFooter() {
        return this.openTagUnsafe("footer");
    }
    openForm() {
        return this.openTagUnsafe("form");
    }
    openH1() {
        return this.openTagUnsafe("h1");
    }
    openHead() {
        return this.openTagUnsafe("head");
    }
    openHeader() {
        return this.openTagUnsafe("header");
    }
    openHtml() {
        return this.openTagUnsafe("html");
    }
    openI() {
        return this.openTagUnsafe("i");
    }
    openIframe() {
        return this.openTagUnsafe("iframe");
    }
    openIns() {
        return this.openTagUnsafe("ins");
    }
    openKbd() {
        return this.openTagUnsafe("kbd");
    }
    openLabel() {
        return this.openTagUnsafe("label");
    }
    openLegend() {
        return this.openTagUnsafe("legend");
    }
    openLi() {
        return this.openTagUnsafe("li");
    }
    openMain() {
        return this.openTagUnsafe("main");
    }
    openMap() {
        return this.openTagUnsafe("map");
    }
    openMark() {
        return this.openTagUnsafe("mark");
    }
    openMeter() {
        return this.openTagUnsafe("meter");
    }
    openNav() {
        return this.openTagUnsafe("nav");
    }
    openNoscript() {
        return this.openTagUnsafe("noscript");
    }
    openObject() {
        return this.openTagUnsafe("object");
    }
    openOl() {
        return this.openTagUnsafe("ol");
    }
    openOptgroup() {
        return this.openTagUnsafe("optgroup");
    }
    openOption() {
        return this.openTagUnsafe("option");
    }
    openOutput() {
        return this.openTagUnsafe("output");
    }
    openP() {
        return this.openTagUnsafe("p");
    }
    openPicture() {
        return this.openTagUnsafe("picture");
    }
    openPre() {
        return this.openTagUnsafe("pre");
    }
    openProgress() {
        return this.openTagUnsafe("progress");
    }
    openQ() {
        return this.openTagUnsafe("q");
    }
    openRp() {
        return this.openTagUnsafe("rp");
    }
    openRt() {
        return this.openTagUnsafe("rt");
    }
    openRuby() {
        return this.openTagUnsafe("ruby");
    }
    openS() {
        return this.openTagUnsafe("s");
    }
    openSamp() {
        return this.openTagUnsafe("samp");
    }
    openScript() {
        return this.openTagUnsafe("script");
    }
    openSection() {
        return this.openTagUnsafe("section");
    }
    openSelect() {
        return this.openTagUnsafe("select");
    }
    openSmall() {
        return this.openTagUnsafe("small");
    }
    openSpan() {
        return this.openTagUnsafe("span");
    }
    openStrong() {
        return this.openTagUnsafe("strong");
    }
    openStyle() {
        return this.openTagUnsafe("style");
    }
    openSub() {
        return this.openTagUnsafe("sub");
    }
    openSummary() {
        return this.openTagUnsafe("summary");
    }
    openSup() {
        return this.openTagUnsafe("sup");
    }
    openSvg() {
        return this.openTagUnsafe("svg");
    }
    openTable() {
        return this.openTagUnsafe("table");
    }
    openTbody() {
        return this.openTagUnsafe("tbody");
    }
    openTd() {
        return this.openTagUnsafe("td");
    }
    openTemplate() {
        return this.openTagUnsafe("template");
    }
    openTextarea() {
        return this.openTagUnsafe("textarea");
    }
    openTfoot() {
        return this.openTagUnsafe("tfoot");
    }
    openTh() {
        return this.openTagUnsafe("th");
    }
    openThead() {
        return this.openTagUnsafe("thead");
    }
    openTime() {
        return this.openTagUnsafe("time");
    }
    openTitle() {
        return this.openTagUnsafe("title");
    }
    openTr() {
        return this.openTagUnsafe("tr");
    }
    openU() {
        return this.openTagUnsafe("u");
    }
    openUl() {
        return this.openTagUnsafe("ul");
    }
    openVar() {
        return this.openTagUnsafe("var");
    }
    openVideo() {
        return this.openTagUnsafe("video");
    }
}
exports.HTMLSourceCodeFunctions = HTMLSourceCodeFunctions;
//# sourceMappingURL=html_sourcecode_functions_gen.js.map