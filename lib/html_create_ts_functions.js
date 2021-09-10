"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const tags = require("./ref/html/tags.json");
const properties = require("./ref/css/properties.json");
const sys = require("samara");
class Generator {
    generateSCFunctions() {
        let add = [];
        let close = [];
        let open = [];
        for (let tag of tags.tags) {
            if (tag.closed) {
                close.push("close" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                close.push("return this.closeTagUnsafe(\"" + tag.name + "\");");
                close.push("}");
                open.push("open" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                open.push("return this.openTagUnsafe(\"" + tag.name + "\");");
                open.push("}");
            }
            else {
                add.push("add" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                add.push("return this.addTagUnsafe(\"" + tag.name + "\");");
                add.push("}");
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
    generateTagFunctions() {
        let globalAtts = [];
        let localAtts = [];
        let localAttsNames = [];
        let props = [];
        for (let att of tags.attributes_global) {
            localAttsNames.push(att.name);
            globalAtts.push("addAttribute" + sys.capitalizeFirstLetter(att.name.replace("-*", "") + "(value:string):void{"));
            globalAtts.push("this.addAttribute(\"" + att.name + "\", value);");
            globalAtts.push("}");
        }
        for (let str of globalAtts) {
            console.log(str);
        }
        for (let tag of tags.tags) {
            for (let att of tag.attributes) {
                let alreadyExists = false;
                for (let str of localAttsNames) {
                    if (att.name === str) {
                        alreadyExists = true;
                    }
                }
                if (!alreadyExists) {
                    localAttsNames.push(att.name);
                    let name = sys.capitalizeFirstLetter(att.name);
                    while (name.indexOf("-") > -1) {
                        let left = name.substr(0, name.indexOf("-"));
                        let right = name.substr(name.indexOf("-") + 1, name.length);
                        name = left + sys.capitalizeFirstLetter(right);
                    }
                    localAtts.push("addAttribute" + name + "(value:string):void{");
                    localAtts.push("this.addAttribute(\"" + att.name + "\", value);");
                    localAtts.push("}");
                }
            }
        }
        for (let str of localAtts) {
            console.log(str);
        }
        for (let prop of properties.properties) {
            let name = prop.name.replace("@", "");
            name = sys.capitalizeFirstLetter(name);
            while (name.indexOf("-") > -1) {
                let left = name.substr(0, name.indexOf("-"));
                let right = name.substr(name.indexOf("-") + 1, name.length);
                name = left + sys.capitalizeFirstLetter(right);
            }
            props.push("addStyle" + name + "(value:string):void{");
            props.push("if(this.validateStyleValue(\"" + prop.name + "\", value)){");
            props.push("this.addStyle(\"" + prop.name + "\", value);");
            props.push("}");
            props.push("}");
        }
        for (let str of props) {
            console.log(str);
        }
    }
}
exports.Generator = Generator;
//# sourceMappingURL=html_create_ts_functions.js.map