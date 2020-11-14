"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.CSSElement = exports.CSSAttribute = void 0;
var sys = require("samara");
//Classes
var CSSAttribute = /** @class */ (function () {
    function CSSAttribute(attribute, value) {
        this.attribute = attribute;
        this.value = value;
    }
    CSSAttribute.prototype.getAttribute = function () {
        return this.attribute;
    };
    CSSAttribute.prototype.getValue = function () {
        return this.value;
    };
    return CSSAttribute;
}());
exports.CSSAttribute = CSSAttribute;
var CSSElement = /** @class */ (function () {
    function CSSElement(selectors, attributes, subElements) {
        this.attributes = attributes;
        this.selectors = selectors;
        this.subElements = subElements;
    }
    CSSElement.prototype.getAttributes = function () {
        return this.attributes;
    };
    CSSElement.prototype.getSelectors = function () {
        return this.selectors;
    };
    CSSElement.prototype.getSubElements = function () {
        return this.subElements;
    };
    return CSSElement;
}());
exports.CSSElement = CSSElement;
//Functions
function optimizeFile(str) {
    str = sys.removeAll(str, "\t");
    str = sys.replaceAll(str, "\r\n", " ");
    str = sys.replaceAll(str, "{ ", "{");
    str = sys.replaceAll(str, " }", "}");
    str = sys.replaceAll(str, "( ", "(");
    str = sys.replaceAll(str, " )", ")");
    str = sys.replaceAll(str, "[ ", "[");
    str = sys.replaceAll(str, " ]", "]");
    str = sys.replaceAll(str, "  ", " ");
    return str.trim();
}
function parse(str) {
    str = optimizeFile(str);
    var sc = [];
    while (str.length > 0) {
        if (str.indexOf("/*") == 0 && str.indexOf("*/") > 0) {
            var object = parseComment(str);
            sc.push(object.element);
            str = object.str;
        }
        else if (str.indexOf("@charset") == 0) {
            var object = parseCharset(str);
            sc.push(object.element);
            str = object.str;
        }
        else if (str.indexOf("@import") == 0) {
            var object = parseImport(str);
            sc.push(object.element);
            str = object.str;
        }
        else if (str.indexOf("{") > 0 && str.indexOf("}") > str.indexOf("{")) {
            var char = null;
            var level = 0;
            var pos = 0;
            while (char !== "}" || level > 0) {
                char = str.substring(pos, pos + 1);
                if (char === "{") {
                    level++;
                }
                if (char === "}") {
                    level--;
                }
                pos++;
            }
            var element = parseElement(str.substring(0, pos).trim());
            if (element.getSelectors().length > 0 && (element.getAttributes().length > 0 || element.getSubElements().length > 0)) {
                sc.push(element);
            }
            str = str.substring(pos, str.length).trim();
        }
        else {
            console.log("ERROR Unknown String: " + str);
        }
    }
    return sc;
}
exports.parse = parse;
function parseAttributes(str) {
    var attributes = [];
    if (str.indexOf(";") < 0) {
        var att = str.split(":");
        attributes = [new CSSAttribute(att[0].trim(), att[1].trim())];
    }
    else {
        var split = str.split(";");
        attributes = [];
        for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
            var s = split_1[_i];
            if (!sys.isNull(s)) {
                var att = s.split(":");
                attributes.push(new CSSAttribute(att[0].trim(), att[1].trim()));
            }
        }
    }
    return attributes;
}
function parseCharset(str) {
    var content = str.substring("@charset".length, str.indexOf(";") + 1).trim();
    var attribute = new CSSAttribute("@charset", content);
    var el = new CSSElement(["@charset"], [attribute], []);
    str = str.substring(str.indexOf(";") + 1, str.length).trim();
    return {
        element: el,
        str: str
    };
}
function parseComment(str) {
    var content = str.substring("/*".length, str.indexOf("*/")).trim();
    var attribute = new CSSAttribute("COMMENT", content);
    var el = new CSSElement(["COMMENT"], [attribute], []);
    str = str.substring(str.indexOf("*/") + 2, str.length).trim();
    return {
        element: el,
        str: str
    };
}
function parseElement(str) {
    var selector = str.substring(0, str.indexOf("{")).trim();
    var selectors = parseSelectors(selector);
    str = str.substring(str.indexOf("{") + 1, str.length - 1).trim();
    var attributes = [];
    var subElements = [];
    if (str.indexOf("{") < 0) {
        attributes = parseAttributes(str);
    }
    else {
        var split = str.split("}");
        for (var _i = 0, split_2 = split; _i < split_2.length; _i++) {
            var s = split_2[_i];
            s = s.trim();
            if (!sys.isNull(s)) {
                s += "}";
                var ele = parseElement(s);
                subElements.push(ele);
            }
        }
    }
    return new CSSElement(selectors, attributes, subElements);
}
function parseImport(str) {
    var content = str.substring("@import".length, str.indexOf(";") + 1).trim();
    var attribute = new CSSAttribute("@import", content);
    var el = new CSSElement(["@import"], [attribute], []);
    str = str.substring(str.indexOf(";") + 1, str.length).trim();
    return {
        element: el,
        str: str
    };
}
function parseSelectors(str) {
    var selectors = [];
    if (str.indexOf(",") < 0) {
        selectors = [str];
    }
    else {
        var sel = str.split(",");
        selectors = [];
        for (var _i = 0, sel_1 = sel; _i < sel_1.length; _i++) {
            var s = sel_1[_i];
            s = s.trim();
            if (!sys.isNull(s)) {
                selectors.push(s);
            }
        }
    }
    return selectors;
}
//# sourceMappingURL=functions.js.map