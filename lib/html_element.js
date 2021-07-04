"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElement = void 0;
//Import
var html_tag_parameter_1 = require("./html_tag_parameter");
var sys = require("samara");
//Class
var HTMLElement = /** @class */ (function () {
    //Constructor
    function HTMLElement(id, content, tag, closed) {
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.paras = [];
        this.tag = tag;
    }
    //Methods
    HTMLElement.prototype.addPara = function (name, value) {
        if (this.tag && !this.closed && !sys.isNull(name)) {
            this.paras.push(new html_tag_parameter_1.HTMLTagParameter(name, value));
        }
    };
    HTMLElement.prototype.getContent = function () {
        if (!this.tag) {
            return this.content;
        }
        else {
            if (this.closed) {
                return "</" + this.content + ">";
            }
            else {
                var tag = this.content;
                for (var _i = 0, _a = this.paras; _i < _a.length; _i++) {
                    var para = _a[_i];
                    if (sys.isNull(para.value)) {
                        tag += " " + para.name;
                    }
                    else {
                        tag += " " + para.name + "=\"" + para.value + "\"";
                    }
                }
                return "<" + tag + ">";
            }
        }
    };
    Object.defineProperty(HTMLElement.prototype, "closed", {
        //Get-Methods
        get: function () {
            return this._closed;
        },
        //Set-Methods
        set: function (value) {
            this._closed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "paras", {
        get: function () {
            return this._paras;
        },
        set: function (paras) {
            if (!this.closed) {
                this._paras = paras;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLElement.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    return HTMLElement;
}());
exports.HTMLElement = HTMLElement;
//# sourceMappingURL=html_element.js.map