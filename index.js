"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
//Imports
var func = require("./lib/functions");
//Class
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (str) {
        return func.parse(str);
    };
    return Parser;
}());
exports.Parser = Parser;
//# sourceMappingURL=index.js.map