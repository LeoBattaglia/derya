"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
const html_element_1 = require("./html_element");
const sys = require("samara");
const html_sourcecode_functions_gen_1 = require("./html_sourcecode_functions_gen");
//Classes
class HTMLSourceCode extends html_sourcecode_functions_gen_1.HTMLSourceCodeFunctions {
    //Constructor
    constructor() {
        super();
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
    addFontFace(family, url) {
        return this.addContent("@font-face{font-family: \"" + family + "\"; src: url(\"/" + url + "\");}");
    }
    addImgDefault(src, alt) {
        let tag = this.addTagUnsafe("img");
        tag.addAttributeSrc(src);
        tag.addAttributeAlt(alt);
        return tag;
    }
    addInputDefault(type, id, name) {
        let tag = this.addTagUnsafe("input");
        tag.addAttributeType(type);
        tag.addAttributeId(id);
        tag.addAttributeName(name);
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
    addTitle(value) {
        this.openTitle();
        this.addContent(value);
        this.closeTitle();
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
    /*openTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.openTagUnsafe(tag);
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }*/
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
}
exports.HTMLSourceCode = HTMLSourceCode;
//# sourceMappingURL=html_sourcecode.js.map