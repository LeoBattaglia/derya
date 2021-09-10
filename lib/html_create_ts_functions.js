"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const tags = require("./ref/html/tags.json");
const sys = require("samara");
class Generator {
    generate() {
        let add = [];
        let close = [];
        let open = [];
        for (let tag of tags.tags) {
            if (tag.closed) {
                close.push("close" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                close.push("return this.closeTagUnsafe(\"" + tag.name + "\");");
                close.push("}");
                close.push("");
                open.push("open" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                open.push("return this.openTagUnsafe(\"" + tag.name + "\");");
                open.push("}");
                open.push("");
            }
            else {
                add.push("add" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                add.push("return this.addTagUnsafe(\"" + tag.name + "\");");
                add.push("}");
                add.push("");
            }
        }
        for (let str of add) {
            console.log(str);
        }
        for (let str of close) {
            console.log(str);
        }
        for (let str of open) {
            console.log(str);
        }
    }
}
exports.Generator = Generator;
//# sourceMappingURL=html_create_ts_functions.js.map