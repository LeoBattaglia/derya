"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagEnd = exports.getTag = void 0;
//Constants
var html = require("./ref/html/tags.json");
//Functions
function getTag(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name.toLowerCase() === name.toLowerCase()) {
            if (tag.name.toLowerCase() === "doctype") {
                return "<!DOCTYPE html>";
            }
            else {
                return "<" + tag.name + ">";
            }
        }
    }
    return undefined;
}
exports.getTag = getTag;
function getTagEnd(name) {
    for (var _i = 0, _a = html.tags; _i < _a.length; _i++) {
        var tag = _a[_i];
        if (tag.name.toLowerCase() === name.toLowerCase()) {
            if (tag.end === "/") {
                return "</" + tag.name + ">";
            }
            else {
                return tag.end;
            }
        }
    }
    return undefined;
}
exports.getTagEnd = getTagEnd;
//# sourceMappingURL=html.js.map