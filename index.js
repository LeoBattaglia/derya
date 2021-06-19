"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mode = exports.Coder = exports.getModeXML = exports.getModeSVG = exports.getModeJSON = exports.getModeHTML = exports.getModeCSS = exports.sourcecode = void 0;
var html = require("./lib/html");
exports.sourcecode = require("./lib/sourcecode");
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
        return new exports.sourcecode.SourceCode();
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
    Coder.prototype.getTagName = function (name) {
        switch (this.mode) {
            case getModeHTML():
                return html.getTagName(name);
        }
        return undefined;
    };
    return Coder;
}());
exports.Coder = Coder;
var Mode = /** @class */ (function () {
    function Mode() {
    }
    return Mode;
}());
exports.Mode = Mode;
//# sourceMappingURL=index.js.map