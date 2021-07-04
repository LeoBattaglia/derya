"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSourceCode = void 0;
//Imports
var html_element_1 = require("./html_element");
var sys = require("samara");
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
    HTMLSourceCode.prototype.addBR = function () {
        return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), "br", true, false));
    };
    HTMLSourceCode.prototype.addComment = function (comment) {
        if (!sys.isNull(comment)) {
            return this.addContent("<!-- " + comment + " -->");
        }
        return undefined;
    };
    HTMLSourceCode.prototype.addContent = function (content) {
        if (!sys.isNull(content)) {
            var con = new html_element_1.HTMLElement(this.getNewID(), content, false, undefined);
            this.sc.push(con);
            return con;
        }
        return undefined;
    };
    HTMLSourceCode.prototype.addDoctype = function () {
        return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), "!DOCTYPE html", true, false));
    };
    HTMLSourceCode.prototype.addMeta = function (name, content) {
        var tag = new html_element_1.HTMLElement(this.getNewID(), "meta", true, false);
        if (!sys.isNull(name) && !sys.isNull(content)) {
            tag.addPara("name", name);
            tag.addPara("content", content);
        }
        return this.addTagUnsafe(tag);
    };
    HTMLSourceCode.prototype.addSourceCode = function (sc) {
        for (var _i = 0, _a = sc.sc; _i < _a.length; _i++) {
            var element = _a[_i];
            this.sc.push(element);
        }
    };
    HTMLSourceCode.prototype.addTag = function (str) {
        if (this.isTag(str)) {
            return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), str, true, false));
        }
        return undefined;
    };
    HTMLSourceCode.prototype.addTagUnsafe = function (tag) {
        this.sc.push(tag);
        return tag;
    };
    HTMLSourceCode.prototype.closeTag = function (tag) {
        if (this.isClosedTag(tag)) {
            return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), tag, true, true));
        }
        return undefined;
    };
    HTMLSourceCode.prototype.closeTagUnsafe = function (tag) {
        return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), tag, true, true));
    };
    HTMLSourceCode.prototype.getElement = function (id) {
        for (var _i = 0, _a = this._sc; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.id === id) {
                return element;
            }
        }
        return undefined;
    };
    HTMLSourceCode.prototype.getHTML = function () {
        var html = "";
        for (var _i = 0, _a = this.sc; _i < _a.length; _i++) {
            var element = _a[_i];
            html += element.getContent();
        }
        return html;
    };
    HTMLSourceCode.prototype.getNewID = function () {
        return this.ids++;
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
    HTMLSourceCode.prototype.openTag = function (tag) {
        if (this.isTag(tag)) {
            return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), tag, true, false));
        }
        return undefined;
    };
    HTMLSourceCode.prototype.openTagUnsafe = function (tag) {
        return this.addTagUnsafe(new html_element_1.HTMLElement(this.getNewID(), tag, true, false));
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