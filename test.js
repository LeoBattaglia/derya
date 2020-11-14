"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var fs = require("fs");
var parser = new index_1.CSSParser();
fs.readFile("./test2.css", function (err, data) {
    if (err) {
        console.log("ERROR IN READ");
    }
    console.log("Start...");
    parser.parse(data.toString());
    var elements = parser.getElements();
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var element = elements_1[_i];
        printElement(element, false);
    }
});
function printElement(element, sub) {
    var ss = "";
    if (sub) {
        ss = "SUB-";
    }
    for (var _i = 0, _a = element.getSelectors(); _i < _a.length; _i++) {
        var s = _a[_i];
        console.log(ss + "SELECTORS: " + s);
    }
    for (var _b = 0, _c = element.getAttributes(); _b < _c.length; _b++) {
        var a = _c[_b];
        console.log(ss + "ATTRIBUTE: " + a.attribute + ": " + a.value);
    }
    for (var _d = 0, _e = element.getSubElements(); _d < _e.length; _d++) {
        var e = _e[_d];
        printElement(e, true);
    }
    console.log("-----------------------------------------------------");
}
//# sourceMappingURL=test.js.map