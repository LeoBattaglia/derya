"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
const html_element_1 = require("./html_element");
const html_validation_1 = require("./html_validation");
const sys = require("samara");
const tags = require("./ref/html/tags.json");
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
        if (this.isTag(tag.toLowerCase())) {
            return this.addTagUnsafe(tag);
        }
        return undefined;
    }
    addTagUnsafe(tag) {
        return this.addElement(new html_element_1.HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }
    closeTag(tag) {
        if (this.isClosedTag(tag.toLowerCase())) {
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
        let errors = html_validation_1.validatePage(this.sc);
        if (errors.getLength() > 0) {
            for (let error of errors.objects) {
                html += "ERROR: " + error.object + "!\r\n";
            }
        }
        else {
            //Generate format String
            let lvl = 0;
            for (let element of this._sc) {
                if (element.tag && this.isClosedTag(element.content) && element.closed) {
                    lvl--;
                }
                let tabs = "";
                for (let i = 0; i < lvl; i++) {
                    tabs += "\t";
                }
                html += tabs + element.getContent() + "\r\n";
                if (element.tag && this.isClosedTag(element.content) && !element.closed) {
                    lvl++;
                }
            }
        }
        return html;
    }
    getNewID() {
        return this.ids++;
    }
    isClosedTag(tag) {
        for (let element of tags.tags) {
            if (element.name === tag.toLowerCase() && element.closed) {
                return true;
            }
        }
        return false;
    }
    isTag(tag) {
        for (let element of tags.tags) {
            if (element.name === tag.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    openTag(tag) {
        if (this.isClosedTag(tag.toLowerCase())) {
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