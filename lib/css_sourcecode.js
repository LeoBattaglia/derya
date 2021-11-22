"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSSourceCode = void 0;
//Imports
const css_element_1 = require("./css_element");
const samara_1 = require("samara");
//Classes
class CSSSourceCode {
    //Constructor
    constructor(name) {
        this.ids = 0;
        this.name = name;
        this.elements = [];
    }
    //Methods
    addElement(element) {
        this.elements.push(element);
    }
    getCSS() {
        let sc = new samara_1.SourceObject();
        for (let element of this.elements) {
            sc.add(element.selector + "{", 0);
            for (let property of element.properties) {
                sc.add(property.getName() + ": " + property.getValue() + ";", 1);
            }
            sc.add("}", 0);
        }
        return sc.getString();
    }
    getElement(id) {
        for (let element of this.elements) {
            if (element.id === id) {
                return element;
            }
        }
        return undefined;
    }
    getName() {
        return this.name;
    }
    getNewID() {
        return this.ids++;
    }
    new(selector) {
        let element = new css_element_1.CSSElement(this.getNewID(), selector);
        this.addElement(element);
        return element;
    }
}
exports.CSSSourceCode = CSSSourceCode;
//# sourceMappingURL=css_sourcecode.js.map