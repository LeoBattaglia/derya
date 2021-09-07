"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
const html_element_1 = require("./html_element");
const html_validation_1 = require("./html_validation");
const sys = require("samara");
//Classes
class HTMLSourceCode {
    //Constructor
    constructor() {
        //Declarations
        this._ids = 0;
        this.sc = [];
    }
    //Methods
    addBR() {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), "br", true, false));
    }
    addCharset(charset) {
        let tag = new html_element_1.HTMLElement(this.getNewID(), "meta", true, false);
        if (!sys.isNull(charset)) {
            tag.addAttribute("charset", charset.toUpperCase());
        }
        return this.addElement(tag);
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
    addMeta(name, content) {
        let tag = new html_element_1.HTMLElement(this.getNewID(), "meta", true, false);
        if (!sys.isNull(name) && !sys.isNull(content)) {
            tag.addAttribute("name", name.toLowerCase());
            tag.addAttribute("content", content);
        }
        return this.addElement(tag);
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
}
exports.HTMLSourceCode = HTMLSourceCode;
//# sourceMappingURL=html_sourcecode.js.map