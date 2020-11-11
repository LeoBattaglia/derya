"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
//Functions
function parse(str) {
    str = removeAll(str, "\t");
    str = replaceAll(str, "\r\n", " ");
    str = replaceAll(str, "  ", " ");
    str = str.trim();
    var temp;
    var sc = [];
    while (str.length > 0) {
        if (str.indexOf("/*") == 0 && str.indexOf("*/") > 0) {
            //temp = str.substring("/*".length, str.indexOf("*/")).trim();
            //console.log("COMMENT: " + temp);
            //sc.push(temp);
            str = str.substring(str.indexOf("*/") + 2, str.length).trim();
        }
        else if (str.indexOf("@charset") == 0) {
            temp = str.substring(0, str.indexOf(";") + 1).trim();
            //console.log("CHARSET: " + temp);
            sc.push(temp);
            str = str.substring(str.indexOf(";") + 1, str.length).trim();
        }
        else if (str.indexOf("@import") == 0) {
            temp = str.substring(0, str.indexOf(";") + 1).trim();
            //console.log("IMPORT: " + temp);
            sc.push(temp);
            str = str.substring(str.indexOf(";") + 1, str.length).trim();
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
            temp = str.substring(0, pos).trim();
            //console.log("BRACES: " + temp);
            sc.push(temp);
            str = str.substring(pos, str.length).trim();
        }
        else {
            console.log("ERROR Unknown String: " + str);
        }
    }
    return sc;
}
exports.parse = parse;
function removeAll(str, search) {
    while (str.indexOf(search) > -1) {
        str = str.replace(search, "");
    }
    return str;
}
function replaceAll(str, search, replace) {
    while (str.indexOf(search) > -1) {
        str = str.replace(search, replace);
    }
    return str;
}
//# sourceMappingURL=functions.js.map