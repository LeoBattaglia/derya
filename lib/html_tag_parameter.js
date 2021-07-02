"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTagParameter = void 0;
//Class
var HTMLTagParameter = /** @class */ (function () {
    //Constructor
    function HTMLTagParameter(name, value) {
        this.name = name;
        this.value = value;
    }
    Object.defineProperty(HTMLTagParameter.prototype, "name", {
        //Get-Methods
        get: function () {
            return this._name;
        },
        //Set-Methods
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTagParameter.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: false,
        configurable: true
    });
    return HTMLTagParameter;
}());
exports.HTMLTagParameter = HTMLTagParameter;
//# sourceMappingURL=html_tag_parameter.js.map