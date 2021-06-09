"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coder = void 0;
var html = require("html");
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
    Coder.prototype.createEmptyPage = function () {
        return this.getTag("doctype");
    };
    Coder.prototype.getTag = function (name) {
        for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            if (tag.name === name) {
                return tag.tag;
            }
        }
        return undefined;
    };
    return Coder;
}());
exports.Coder = Coder;
//# sourceMappingURL=index.js.map