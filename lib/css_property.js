"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSProperty = void 0;
//Classes
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
//# sourceMappingURL=css_property.js.map