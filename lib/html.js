"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTag = exports.getName = exports.getEnd = exports.getEmptyPage = exports.sourcecode = void 0;
//Constants
var html = require("./json/html.json");
exports.sourcecode = require("./sourcecode");
//Functions
function getEmptyPage() {
    var sc = new exports.sourcecode.SourceCode();
    sc.add(html.getTag("doctype"));
    sc.add(html.getTag("title"));
    sc.add(html.getEnd("title"));
    return sc.src;
}
exports.getEmptyPage = getEmptyPage;
function getEnd(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name === name) {
            return tag.end;
        }
    }
    return undefined;
}
exports.getEnd = getEnd;
function getName(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name === name) {
            return tag.name;
        }
    }
    return undefined;
}
exports.getName = getName;
function getTag(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name === name) {
            return tag.tag;
        }
    }
    return undefined;
}
exports.getTag = getTag;
//# sourceMappingURL=html.js.map