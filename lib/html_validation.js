"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePage = exports.isTag = exports.isClosedTag = void 0;
const samara_1 = require("samara");
const tags = require("./ref/html/tags.json");
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
function isClosedTag(tag) {
    for (let element of tags.tags) {
        if (element.name === tag.toLowerCase() && element.closed) {
            return true;
        }
    }
    return false;
}
exports.isClosedTag = isClosedTag;
function isTag(tag) {
    for (let element of tags.tags) {
        if (element.name === tag.toLowerCase() || tag === "!DOCTYPE html") {
            return true;
        }
    }
    return false;
}
exports.isTag = isTag;
function validateBody() {
    countTag("body", false) < 1 ? errors.push(id_default, "Document does not contain Body-Tag") : undefined;
    countTag("body", false) > 1 ? errors.push(id_default, "Document contains more than one Body-Tag") : undefined;
    getTagPosition("body", false) < getTagPosition("head", true) + 1 ? errors.push(getTagPosition("body", false), "Body-Tag is on wrong Position") : undefined;
    countTag("body", true) < 1 ? errors.push(id_default, "Document does not contain Body-Closed-Tag") : undefined;
    countTag("body", true) > 1 ? errors.push(id_default, "Document contains more than one Body-Closed-Tag") : undefined;
    getTagPosition("body", true) < getTagPosition("body", false) + 1 ? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("body", true) > getTagPosition("html", true) + 1 ? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
}
function validateCharset() {
    //TODO: All
}
function validateContentLanguage() {
    //TODO: All
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
    validateTitle();
    validateBody();
    validateCharset();
    validateContentLanguage();
    validateViewport();
    validateTags();
    return errors;
}
exports.validatePage = validatePage;
function validateTags() {
    for (let element of sc) {
        element.tag && !isTag(element.content) ? errors.push(id_default, "Tag is not valid: " + element.content) : undefined;
    }
}
function validateTitle() {
    countTag("title", false) < 1 ? errors.push(id_default, "Document does not contain Title-Tag") : undefined;
    countTag("title", false) > 1 ? errors.push(id_default, "Document contains more than one Title-Tag") : undefined;
    getTagPosition("title", false) !== getTagPosition("head", false) + 1 ? errors.push(getTagPosition("title", false), "Title-Tag is on wrong Position") : undefined;
    countTag("title", true) < 1 ? errors.push(id_default, "Document does not contain Title-Closed-Tag") : undefined;
    countTag("title", true) > 1 ? errors.push(id_default, "Document contains more than one Title-Closed-Tag") : undefined;
    getTagPosition("title", true) < getTagPosition("title", false) + 1 ? errors.push(getTagPosition("title", true), "Title-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("title", true) > getTagPosition("head", true) + 1 ? errors.push(getTagPosition("title", true), "Title-Closed-Tag is on wrong Position") : undefined;
}
function validateViewport() {
    //TODO: All
}
//# sourceMappingURL=html_validation.js.map