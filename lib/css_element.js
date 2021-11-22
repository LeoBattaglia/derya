"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSProperty = exports.CSSElement = void 0;
//Classes
class CSSElement {
    //Constructor
    constructor(id, selector) {
        this.id = id;
        this.properties = [];
        this.selector = selector;
    }
    //Methods
    addProperty(name, value) {
        this.properties.push(new CSSProperty(name, value));
    }
}
exports.CSSElement = CSSElement;
class CSSProperty {
    //Constructor
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    //Methods
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
}
exports.CSSProperty = CSSProperty;
//# sourceMappingURL=css_element.js.map