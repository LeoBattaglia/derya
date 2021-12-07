"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTagAttribute = void 0;
//Imports
const sys = require("samara");
//Class
class HTMLTagAttribute {
    //Constructor
    constructor(name, value) {
        this.name = name;
        if (!sys.isNull(value)) {
            this.value = value;
        }
    }
    //Get-Methods
    get name() {
        return this._name;
    }
    get value() {
        if (sys.isNull(this._value)) {
            return undefined;
        }
        else {
            return this._value;
        }
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