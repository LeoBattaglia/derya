"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
const html_element_1 = require("./html_element");
const html_validation_1 = require("./html_validation");
const sys = require("samara");
//import * as tags from "./ref/html/tags.json";
//Classes
class HTMLSourceCode {
    //Constructor
    constructor() {
        //Declarations
        this._ids = 0;
        this.sc = [];
    }
    //Methods
    addCharset(charset) {
        let tag = new html_element_1.HTMLElement(this.getNewID(), "meta", true, false);
        if (!sys.isNull(charset)) {
            tag.addAttribute("charset", charset.toUpperCase());
            return this.addElement(tag);
        }
        return undefined;
    }
    addComment(comment) {
        if (!sys.isNull(comment)) {
            return this.addContent("<!-- " + comment + " -->");
        }
        return undefined;
    }
    addContent(content) {
        content = sys.removeTags(content);
        if (!sys.isNull(content)) {
            return this.addElement(new html_element_1.HTMLElement(this.getNewID(), content, false, undefined));
        }
        return undefined;
    }
    addDoctype() {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), "!DOCTYPE html", true, false));
    }
    addElement(element) {
        this.sc.push(element);
        return element;
    }
    addFontFace(family, url) {
        return this.addContent("@font-face{font-family: \"" + family + "\"; src: url(\"/" + url + "\");}");
    }
    addImgDefault(src, alt) {
        let tag = this.addTag("img");
        tag.addAttributeSrc(src);
        tag.addAttributeAlt(alt);
        return tag;
    }
    addMetaDefault(name, content) {
        let tag = new html_element_1.HTMLElement(this.getNewID(), "meta", true, false);
        if (!sys.isNull(name) && !sys.isNull(content)) {
            tag.addAttributeName(name.toLowerCase());
            tag.addAttributeContent(content);
            return this.addElement(tag);
        }
        return undefined;
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
    addTitle(value) {
        this.openTitle();
        this.addContent(value);
        this.closeTitle();
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
        for (let element of this._sc) {
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
        for (let element of this._sc) {
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
    openBodyDefault() {
        let tag = this.openTagUnsafe("body");
        tag.addStyleSizes("100%", "100%");
        tag.addStyleMarginPadding("0em", "0em");
        return tag;
    }
    openDivWithID(value) {
        let element = this.openDiv();
        element.addAttribute("id", value);
        return element;
    }
    openHTMLDefault() {
        let tag = this.openTagUnsafe("html");
        tag.addStyleSizes("100%", "100%");
        return tag;
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
    openTagWithClass(tag, value) {
        let element = this.openTag(tag);
        element.addAttribute("class", value);
        return element;
    }
    openTagWithID(tag, value) {
        let element = this.openTag(tag);
        element.addAttribute("id", value);
        return element;
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
    //Generated Methods
    addArea() {
        return this.addTagUnsafe("area");
    }
    addBase() {
        return this.addTagUnsafe("base");
    }
    addBr() {
        return this.addTagUnsafe("br");
    }
    addCol() {
        return this.addTagUnsafe("col");
    }
    addEmbed() {
        return this.addTagUnsafe("embed");
    }
    addHr() {
        return this.addTagUnsafe("hr");
    }
    addImg() {
        return this.addTagUnsafe("img");
    }
    addInput() {
        return this.addTagUnsafe("input");
    }
    addLink() {
        return this.addTagUnsafe("link");
    }
    addMeta() {
        return this.addTagUnsafe("meta");
    }
    addParam() {
        return this.addTagUnsafe("param");
    }
    addSource() {
        return this.addTagUnsafe("source");
    }
    addTrack() {
        return this.addTagUnsafe("track");
    }
    addWbr() {
        return this.addTagUnsafe("wbr");
    }
    closeA() {
        return this.closeTagUnsafe("a");
    }
    closeAbbr() {
        return this.closeTagUnsafe("abbr");
    }
    closeAddress() {
        return this.closeTagUnsafe("address");
    }
    closeArticle() {
        return this.closeTagUnsafe("article");
    }
    closeAside() {
        return this.closeTagUnsafe("aside");
    }
    closeAudio() {
        return this.closeTagUnsafe("audio");
    }
    closeB() {
        return this.closeTagUnsafe("b");
    }
    closeBdi() {
        return this.closeTagUnsafe("bdi");
    }
    closeBdo() {
        return this.closeTagUnsafe("bdo");
    }
    closeBlockquote() {
        return this.closeTagUnsafe("blockquote");
    }
    closeBody() {
        return this.closeTagUnsafe("body");
    }
    closeButton() {
        return this.closeTagUnsafe("button");
    }
    closeCanvas() {
        return this.closeTagUnsafe("canvas");
    }
    closeCaption() {
        return this.closeTagUnsafe("caption");
    }
    closeCite() {
        return this.closeTagUnsafe("cite");
    }
    closeCode() {
        return this.closeTagUnsafe("code");
    }
    closeColgroup() {
        return this.closeTagUnsafe("colgroup");
    }
    closeData() {
        return this.closeTagUnsafe("data");
    }
    closeDatalist() {
        return this.closeTagUnsafe("datalist");
    }
    closeDd() {
        return this.closeTagUnsafe("dd");
    }
    closeDel() {
        return this.closeTagUnsafe("del");
    }
    closeDetails() {
        return this.closeTagUnsafe("details");
    }
    closeDfn() {
        return this.closeTagUnsafe("dfn");
    }
    closeDialog() {
        return this.closeTagUnsafe("dialog");
    }
    closeDiv() {
        return this.closeTagUnsafe("div");
    }
    closeDl() {
        return this.closeTagUnsafe("dl");
    }
    closeDt() {
        return this.closeTagUnsafe("dt");
    }
    closeEm() {
        return this.closeTagUnsafe("em");
    }
    closeFieldset() {
        return this.closeTagUnsafe("fieldset");
    }
    closeFigcaption() {
        return this.closeTagUnsafe("figcaption");
    }
    closeFigure() {
        return this.closeTagUnsafe("figure");
    }
    closeFooter() {
        return this.closeTagUnsafe("footer");
    }
    closeForm() {
        return this.closeTagUnsafe("form");
    }
    closeH1() {
        return this.closeTagUnsafe("h1");
    }
    closeH2() {
        return this.closeTagUnsafe("h2");
    }
    closeH3() {
        return this.closeTagUnsafe("h3");
    }
    closeH4() {
        return this.closeTagUnsafe("h4");
    }
    closeH5() {
        return this.closeTagUnsafe("h5");
    }
    closeH6() {
        return this.closeTagUnsafe("h6");
    }
    closeHead() {
        return this.closeTagUnsafe("head");
    }
    closeHeader() {
        return this.closeTagUnsafe("header");
    }
    closeHtml() {
        return this.closeTagUnsafe("html");
    }
    closeI() {
        return this.closeTagUnsafe("i");
    }
    closeIframe() {
        return this.closeTagUnsafe("iframe");
    }
    closeIns() {
        return this.closeTagUnsafe("ins");
    }
    closeKbd() {
        return this.closeTagUnsafe("kbd");
    }
    closeLabel() {
        return this.closeTagUnsafe("label");
    }
    closeLegend() {
        return this.closeTagUnsafe("legend");
    }
    closeLi() {
        return this.closeTagUnsafe("li");
    }
    closeMain() {
        return this.closeTagUnsafe("main");
    }
    closeMap() {
        return this.closeTagUnsafe("map");
    }
    closeMark() {
        return this.closeTagUnsafe("mark");
    }
    closeMeter() {
        return this.closeTagUnsafe("meter");
    }
    closeNav() {
        return this.closeTagUnsafe("nav");
    }
    closeNoscript() {
        return this.closeTagUnsafe("noscript");
    }
    closeObject() {
        return this.closeTagUnsafe("object");
    }
    closeOl() {
        return this.closeTagUnsafe("ol");
    }
    closeOptgroup() {
        return this.closeTagUnsafe("optgroup");
    }
    closeOption() {
        return this.closeTagUnsafe("option");
    }
    closeOutput() {
        return this.closeTagUnsafe("output");
    }
    closeP() {
        return this.closeTagUnsafe("p");
    }
    closePicture() {
        return this.closeTagUnsafe("picture");
    }
    closePre() {
        return this.closeTagUnsafe("pre");
    }
    closeProgress() {
        return this.closeTagUnsafe("progress");
    }
    closeQ() {
        return this.closeTagUnsafe("q");
    }
    closeRp() {
        return this.closeTagUnsafe("rp");
    }
    closeRuby() {
        return this.closeTagUnsafe("ruby");
    }
    closeRt() {
        return this.closeTagUnsafe("rt");
    }
    closeSamp() {
        return this.closeTagUnsafe("samp");
    }
    closeScript() {
        return this.closeTagUnsafe("script");
    }
    closeSection() {
        return this.closeTagUnsafe("section");
    }
    closeSelect() {
        return this.closeTagUnsafe("select");
    }
    closeSmall() {
        return this.closeTagUnsafe("small");
    }
    closeSpan() {
        return this.closeTagUnsafe("span");
    }
    closeStrong() {
        return this.closeTagUnsafe("strong");
    }
    closeStyle() {
        return this.closeTagUnsafe("style");
    }
    closeSub() {
        return this.closeTagUnsafe("sub");
    }
    closeSummary() {
        return this.closeTagUnsafe("summary");
    }
    closeSup() {
        return this.closeTagUnsafe("sup");
    }
    closeSvg() {
        return this.closeTagUnsafe("svg");
    }
    closeTable() {
        return this.closeTagUnsafe("table");
    }
    closeTbody() {
        return this.closeTagUnsafe("tbody");
    }
    closeTd() {
        return this.closeTagUnsafe("td");
    }
    closeTemplate() {
        return this.closeTagUnsafe("template");
    }
    closeTextarea() {
        return this.closeTagUnsafe("textarea");
    }
    closeTfoot() {
        return this.closeTagUnsafe("tfoot");
    }
    closeTh() {
        return this.closeTagUnsafe("th");
    }
    closeThead() {
        return this.closeTagUnsafe("thead");
    }
    closeTime() {
        return this.closeTagUnsafe("time");
    }
    closeTitle() {
        return this.closeTagUnsafe("title");
    }
    closeTr() {
        return this.closeTagUnsafe("tr");
    }
    closeU() {
        return this.closeTagUnsafe("u");
    }
    closeUl() {
        return this.closeTagUnsafe("ul");
    }
    closeVar() {
        return this.closeTagUnsafe("var");
    }
    closeVideo() {
        return this.closeTagUnsafe("video");
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
    openH2() {
        return this.openTagUnsafe("h2");
    }
    openH3() {
        return this.openTagUnsafe("h3");
    }
    openH4() {
        return this.openTagUnsafe("h4");
    }
    openH5() {
        return this.openTagUnsafe("h5");
    }
    openH6() {
        return this.openTagUnsafe("h6");
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
    openRuby() {
        return this.openTagUnsafe("ruby");
    }
    openRt() {
        return this.openTagUnsafe("rt");
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
exports.HTMLSourceCode = HTMLSourceCode;
//# sourceMappingURL=html_sourcecode.js.map