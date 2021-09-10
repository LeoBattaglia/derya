"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElement = void 0;
//Import
const html_tag_attribute_1 = require("./html_tag_attribute");
const sys = require("samara");
//Class
class HTMLElement {
    //Constructor
    constructor(id, content, tag, closed) {
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.attributes = [];
        this.styles = [];
        this.tag = tag;
    }
    //Methods
    addAttribute(name, value) {
        if (this.tag && !this.closed && !sys.isNull(name)) {
            this.attributes.push(new html_tag_attribute_1.HTMLTagAttribute(name, value));
        }
    }
    addAttributeAction(value) {
        this.addAttribute("action", value);
    }
    addAttributeAlt(value) {
        this.addAttribute("alt", value);
    }
    addAttributeContent(value) {
        this.addAttribute("content", value);
    }
    addAttributeFor(value) {
        this.addAttribute("for", value);
    }
    addAttributeID(value) {
        this.addAttribute("id", value);
    }
    addAttributeName(value) {
        this.addAttribute("name", value);
    }
    addAttributeSrc(value) {
        this.addAttribute("src", value);
    }
    addAttributeType(value) {
        this.addAttribute("type", value);
    }
    addStyle(name, value) {
        if (!sys.isNull(name) && !sys.isNull(value)) {
            this.styles.push(new html_tag_attribute_1.HTMLTagAttribute(name, value));
        }
    }
    addStyleBackgroundColor(value) {
        this.addStyle("background-color", value);
    }
    addStyleDisplay(value) {
        this.addStyle("display", value);
    }
    addStyleDisplayFlex() {
        this.addStyle("display", "flex");
    }
    addStyleDisplayFlexColumn() {
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("column");
    }
    addStyleDisplayFlexRow() {
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("row");
    }
    addStyleFlexDirection(value) {
        this.addStyle("flex-direction", value);
    }
    addStyleHeight(height) {
        this.addStyle("height", height);
    }
    addStyleMargin(margin) {
        this.addStyle("margin", margin);
    }
    addStyleMarginPadding(margin, padding) {
        this.addStyleMargin(margin);
        this.addStylePadding(padding);
    }
    addStylePadding(padding) {
        this.addStyle("padding", padding);
    }
    addStyleSizes(width, height) {
        this.addStyleWidth(width);
        this.addStyleHeight(height);
    }
    addStyleWidth(width) {
        this.addStyle("width", width);
    }
    getContent() {
        if (!this.tag) {
            return this.content;
        }
        else {
            if (this.closed) {
                return "</" + this.content + ">";
            }
            else {
                let tag = this.content;
                for (let attribute of this.attributes) {
                    if (sys.isNull(attribute.value)) {
                        tag += " " + attribute.name;
                    }
                    else {
                        tag += " " + attribute.name + "=\"" + attribute.value + "\"";
                    }
                }
                if (this.styles.length > 0) {
                    tag += " style=\"";
                    let cnt = 0;
                    let space = "";
                    for (let style of this.styles) {
                        if (cnt > 0) {
                            space = " ";
                        }
                        tag += space + style.name + ": " + style.value + ";";
                        cnt++;
                    }
                    tag += "\"";
                }
                return "<" + tag + ">";
            }
        }
    }
    //Get-Methods
    get attributes() {
        return this._attributes;
    }
    get closed() {
        return this._closed;
    }
    get content() {
        return this._content;
    }
    get id() {
        return this._id;
    }
    get styles() {
        return this._styles;
    }
    get tag() {
        return this._tag;
    }
    //Set-Methods
    set attributes(attributes) {
        if (!this.closed) {
            this._attributes = attributes;
        }
    }
    set closed(value) {
        this._closed = value;
    }
    set content(value) {
        this._content = value;
    }
    set id(value) {
        this._id = value;
    }
    set styles(styles) {
        this._styles = styles;
    }
    set tag(value) {
        this._tag = value;
    }
}
exports.HTMLElement = HTMLElement;
//# sourceMappingURL=html_element.js.map