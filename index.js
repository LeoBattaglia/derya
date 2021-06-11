"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coder = exports.sourcecode = void 0;
//Constants
var html = require("./lib/html");
exports.sourcecode = require("./lib/sourcecode");
//Classes
var Coder = /** @class */ (function () {
    //Constructor
    function Coder(mode) {
        this.mode_css = 1;
        this.mode_html = 2;
        this.mode_json = 3;
        this.mode_svg = 4;
        this.mode_xml = 5;
        this.mode = mode;
    }
    //Methods
    Coder.prototype.getEmptyPage = function () {
        return html.getEmptyPage();
    };
    Coder.prototype.getNewSourceCode = function () {
        return new exports.sourcecode.SourceCode();
    };
    Coder.prototype.getTag = function (name) {
        switch (this.mode) {
            case this.mode_html:
                return html.getTag(name);
        }
        return undefined;
    };
    return Coder;
}());
exports.Coder = Coder;
//# sourceMappingURL=index.js.map