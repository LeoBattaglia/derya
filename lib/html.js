"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagName = exports.getTagEnd = exports.getTag = exports.sourcecode = void 0;
//Constants
var html = require("./json/html.json");
exports.sourcecode = require("./sourcecode");
//Functions
function getTag(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        console.log("FFF: " + tag.name + " || " + name);
        if (tag.name === name) {
            return "<" + tag.tag + ">";
        }
    }
    return undefined;
}
exports.getTag = getTag;
function getTagEnd(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name === name) {
            return "<" + tag.end + ">";
        }
    }
    return undefined;
}
exports.getTagEnd = getTagEnd;
function getTagName(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name === name) {
            return tag.name;
        }
    }
    return undefined;
}
exports.getTagName = getTagName;
//# sourceMappingURL=html.js.map