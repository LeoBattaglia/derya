"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSParser = exports.CSSElement = exports.CSSAttribute = void 0;
//Imports
var func = require("./lib/functions");
//Exports
var functions_1 = require("./lib/functions");
Object.defineProperty(exports, "CSSAttribute", { enumerable: true, get: function () { return functions_1.CSSAttribute; } });
Object.defineProperty(exports, "CSSElement", { enumerable: true, get: function () { return functions_1.CSSElement; } });
//Class
var CSSParser = /** @class */ (function () {
    function CSSParser() {
    }
    CSSParser.prototype.getElements = function () {
        return this.elements;
    };
    CSSParser.prototype.parse = function (str) {
        this.elements = func.parse(str);
    };
    return CSSParser;
}());
exports.CSSParser = CSSParser;
//# sourceMappingURL=index.js.map