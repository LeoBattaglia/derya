"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coder = exports.getModeXML = exports.getModeSVG = exports.getModeJSON = exports.getModeHTML = exports.getModeCSS = exports.SourceCode = void 0;
//Imports & Constants
var sourcecode_1 = require("./lib/sourcecode");
Object.defineProperty(exports, "SourceCode", { enumerable: true, get: function () { return sourcecode_1.SourceCode; } });
var sourcecode_2 = require("./lib/sourcecode");
var html = require("./lib/html");
//Functions
function getModeCSS() {
    return 1;
}
exports.getModeCSS = getModeCSS;
function getModeHTML() {
    return 2;
}
exports.getModeHTML = getModeHTML;
function getModeJSON() {
    return 3;
}
exports.getModeJSON = getModeJSON;
function getModeSVG() {
    return 4;
}
exports.getModeSVG = getModeSVG;
function getModeXML() {
    return 5;
}
exports.getModeXML = getModeXML;
//Classes
var Coder = /** @class */ (function () {
    //Constructor
    function Coder(mode) {
        this.mode = mode;
    }
    //Methods
    Coder.prototype.getNewSourceCode = function () {
        return new sourcecode_2.SourceCode();
    };
    Coder.prototype.getTag = function (name) {
        switch (this.mode) {
            case getModeHTML():
                return html.getTag(name);
        }
        return undefined;
    };
    Coder.prototype.getTagEnd = function (name) {
        switch (this.mode) {
            case getModeHTML():
                return html.getTagEnd(name);
        }
        return undefined;
    };
    return Coder;
}());
exports.Coder = Coder;
//# sourceMappingURL=index.js.map