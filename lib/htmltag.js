"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTag = void 0;
//Classes
var HTMLTag = /** @class */ (function () {
    //Constructor
    function HTMLTag(tag) {
        this.tag = tag;
    }
    //Functions
    HTMLTag.prototype.addParameter = function (name, value) {
        var pos = this._tag.indexOf(">");
        if (pos > 0) {
            this.tag = this.tag.replace(">", " " + name + "=\"" + value + "\">");
        }
    };
    Object.defineProperty(HTMLTag.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    return HTMLTag;
}());
exports.HTMLTag = HTMLTag;
//# sourceMappingURL=htmltag.js.map