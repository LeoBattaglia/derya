"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLTag = void 0;
//Import
var html_tag_parameter_1 = require("./html_tag_parameter");
var sys = require("samara");
//Class
var HTMLTag = /** @class */ (function () {
    //Constructor
    function HTMLTag(id, name, closed) {
        this.closed = closed;
        this.id = id;
        this.name = name;
        this.paras = [];
    }
    //Methods
    HTMLTag.prototype.addPara = function (name, value) {
        if (!this.closed && !sys.isNull(name)) {
            this.paras.push(new html_tag_parameter_1.HTMLTagParameter(name, value));
        }
    };
    HTMLTag.prototype.getTag = function () {
        var tag = this.name;
        if (this._closed) {
            tag = "/" + tag;
        }
        else {
            for (var _i = 0, _a = this.paras; _i < _a.length; _i++) {
                var para = _a[_i];
                if (sys.isNull(para.value)) {
                    tag += " " + para.name;
                }
                else {
                    tag += " " + para.name + "=\"" + para.value + "\"";
                }
            }
        }
        return "<" + tag + ">";
    };
    Object.defineProperty(HTMLTag.prototype, "closed", {
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
    Object.defineProperty(HTMLTag.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTag.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLTag.prototype, "paras", {
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
    return HTMLTag;
}());
exports.HTMLTag = HTMLTag;
//# sourceMappingURL=html_tag.js.map