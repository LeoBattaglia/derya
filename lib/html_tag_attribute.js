"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTagAttribute = void 0;
//Class
class HTMLTagAttribute {
    //Constructor
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
    //Get-Methods
    get name() {
        return this._name;
    }
    get value() {
        return this._value;
    }
    //Set-Methods
    set name(value) {
        this._name = value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.HTMLTagAttribute = HTMLTagAttribute;
//# sourceMappingURL=html_tag_attribute.js.map