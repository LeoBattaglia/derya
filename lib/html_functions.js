"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiv = void 0;
const html_sourcecode_1 = require("./html_sourcecode");
//Declarations
const sc = new html_sourcecode_1.HTMLSourceCode();
//Functions
function createDiv() {
    return sc.openTagUnsafe("div");
}
exports.createDiv = createDiv;
//# sourceMappingURL=html_functions.js.map