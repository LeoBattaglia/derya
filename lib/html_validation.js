"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePage = void 0;
const samara_1 = require("samara");
//Constants
const id_default = -1;
//Declarations
let errors;
let sc;
//Methods
function containsTagOnPosition(pos, tag, closed) {
    if (sc[pos].tag && sc[pos].closed === closed && sc[pos].content === tag) {
        return true;
    }
    else {
        return false;
    }
}
function countTag(tag, closed) {
    let count = 0;
    for (let element of sc) {
        if (element.tag && element.closed === closed && element.content === tag) {
            count++;
        }
    }
    return count;
}
function getTagPosition(tag, closed) {
    let pos = 0;
    for (let element of sc) {
        if (element.tag && element.closed === closed && element.content === tag) {
            return pos;
        }
        pos++;
    }
    return -1;
}
function validateBody() {
    countTag("body", false) < 1 ? errors.push(id_default, "Document does not contain Body-Tag") : undefined;
    countTag("body", false) > 1 ? errors.push(id_default, "Document contains more than one Body-Tag") : undefined;
    getTagPosition("body", false) < getTagPosition("head", true) + 1 ? errors.push(getTagPosition("body", false), "Body-Tag is on wrong Position") : undefined;
    countTag("body", true) < 1 ? errors.push(id_default, "Document does not contain Body-Closed-Tag") : undefined;
    countTag("body", true) > 1 ? errors.push(id_default, "Document contains more than one Body-Closed-Tag") : undefined;
    getTagPosition("body", true) < getTagPosition("body", false) + 1 ? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("body", true) > getTagPosition("html", true) + 1 ? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
}
function validateDoctype() {
    countTag("!DOCTYPE html", true) > 0 ? errors.push(id_default, "Document contains closed Doctype") : undefined;
    countTag("!DOCTYPE html", false) < 1 ? errors.push(id_default, "Document does not contain Doctype") : undefined;
    countTag("!DOCTYPE html", false) > 1 ? errors.push(id_default, "Document contains more than one Doctype") : undefined;
    !containsTagOnPosition(0, "!DOCTYPE html", false) ? errors.push(getTagPosition("!DOCTYPE html", true), "Doctype is on wrong Position") : undefined;
}
function validateHead() {
    countTag("head", false) < 1 ? errors.push(id_default, "Document does not contain Head-Tag") : undefined;
    countTag("head", false) > 1 ? errors.push(id_default, "Document contains more than one Head-Tag") : undefined;
    getTagPosition("head", false) !== getTagPosition("html", false) + 1 ? errors.push(getTagPosition("head", false), "Head-Tag is on wrong Position") : undefined;
    countTag("head", true) < 1 ? errors.push(id_default, "Document does not contain Head-Closed-Tag") : undefined;
    countTag("head", true) > 1 ? errors.push(id_default, "Document contains more than one Head-Closed-Tag") : undefined;
    getTagPosition("head", true) < getTagPosition("head", false) + 1 ? errors.push(getTagPosition("head", true), "Head-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("head", true) > getTagPosition("html", true) + 1 ? errors.push(getTagPosition("head", true), "Head-Closed-Tag is on wrong Position") : undefined;
}
function validateHTML() {
    countTag("html", false) < 1 ? errors.push(id_default, "Document does not contain HTML-Tag") : undefined;
    countTag("html", false) > 1 ? errors.push(id_default, "Document contains more than one HTML-Tag") : undefined;
    !containsTagOnPosition(1, "html", false) ? errors.push(getTagPosition("html", false), "HTML-Tag is on wrong Position") : undefined;
    countTag("html", true) < 1 ? errors.push(id_default, "Document does not contain HTML-Closed-Tag") : undefined;
    countTag("html", true) > 1 ? errors.push(id_default, "Document contains more than one HTML-Closed-Tag") : undefined;
    !containsTagOnPosition(sc.length - 1, "html", true) ? errors.push(getTagPosition("html", true), "HTML-Closed-Tag is on wrong Position") : undefined;
}
function validatePage(src) {
    sc = src;
    errors = new samara_1.ObjectContainer();
    validateDoctype();
    validateHTML();
    validateHead();
    validateBody();
    //Title
    //Charset
    //ContentLanguage
    //Viewport
    validateTags();
    return errors;
}
exports.validatePage = validatePage;
function validateTags() {
    //TODO: All
}
//# sourceMappingURL=html_validation.js.map