"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var fs = require("fs");
var parser = new index_1.Parser();
fs.readFile("./test.css", function (err, data) {
    console.log("Start...");
    var sc = parser.parse(data.toString());
    for (var _i = 0, sc_1 = sc; _i < sc_1.length; _i++) {
        var line = sc_1[_i];
        console.log("LINE: " + line);
    }
});
//# sourceMappingURL=test.js.map