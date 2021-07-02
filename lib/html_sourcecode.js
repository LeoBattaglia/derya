"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
var html_content_1 = require("./html_content");
var html_tag_1 = require("./html_tag");
var tags = require("./ref/html/tags.json");
//Classes
var HTMLSourceCode = /** @class */ (function () {
    //Constructor
    function HTMLSourceCode() {
        //Declarations
        this._ids = 0;
        this.sc = [];
    }
    //Methods
    HTMLSourceCode.prototype.addTag = function (tag) {
        this.sc.push(tag);
        return tag;
    };
    HTMLSourceCode.prototype.addDoctype = function () {
        var tag = new html_tag_1.HTMLTag(this.getID(), "!DOCTYPE html", false);
        return this.addTag(tag);
    };
    HTMLSourceCode.prototype.addText = function (content) {
        var con = new html_content_1.HTMLContent(this.getID(), content);
        this.sc.push(con);
        return con;
    };
    HTMLSourceCode.prototype.closeHTML = function () {
        return this.closeTag("html");
    };
    HTMLSourceCode.prototype.closeTag = function (tag) {
        return this.addTag(new html_tag_1.HTMLTag(this.getID(), tag, true));
    };
    HTMLSourceCode.prototype.closeTagChecked = function (tag) {
        if (this.isClosedTag(tag)) {
            return this.addTag(new html_tag_1.HTMLTag(this.getID(), tag, false));
        }
        return undefined;
    };
    HTMLSourceCode.prototype.getID = function () {
        return this.ids++;
    };
    HTMLSourceCode.prototype.getTag = function (id) {
        for (var _i = 0, _a = this._sc; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.id === id) {
                return element;
            }
        }
        return undefined;
    };
    HTMLSourceCode.prototype.isClosedTag = function (tag) {
        for (var _i = 0, _a = tags.tags; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.name === tag && element.end === "/") {
                return true;
            }
        }
        return false;
    };
    HTMLSourceCode.prototype.isTag = function (tag) {
        for (var _i = 0, _a = tags.tags; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.name === tag) {
                return true;
            }
        }
        return false;
    };
    HTMLSourceCode.prototype.openHTML = function () {
        return this.openTag("html");
    };
    HTMLSourceCode.prototype.openTag = function (tag) {
        return this.addTag(new html_tag_1.HTMLTag(this.getID(), tag, false));
    };
    HTMLSourceCode.prototype.openTagChecked = function (tag) {
        if (this.isTag(tag)) {
            return this.addTag(new html_tag_1.HTMLTag(this.getID(), tag, false));
        }
        return undefined;
    };
    Object.defineProperty(HTMLSourceCode.prototype, "ids", {
        //Get-Methods
        get: function () {
            return this._ids;
        },
        //Set-Methods
        set: function (value) {
            this._ids = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLSourceCode.prototype, "sc", {
        get: function () {
            return this._sc;
        },
        set: function (values) {
            this._sc = values;
        },
        enumerable: false,
        configurable: true
    });
    return HTMLSourceCode;
}());
exports.HTMLSourceCode = HTMLSourceCode;
//# sourceMappingURL=html_sourcecode.js.map