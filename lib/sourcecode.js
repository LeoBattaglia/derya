"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceCode = void 0;
//Classes
var SourceCode = /** @class */ (function () {
    //Constructor
    function SourceCode() {
        this.src = "";
    }
    //Functions
    SourceCode.prototype.add = function (value) {
        this.src += value + "\n";
    };
    Object.defineProperty(SourceCode.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
        },
        enumerable: false,
        configurable: true
    });
    return SourceCode;
}());
exports.SourceCode = SourceCode;
//# sourceMappingURL=sourcecode.js.map