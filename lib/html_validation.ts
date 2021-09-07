//Imports
import {HTMLSourceCode} from "./html_sourcecode";
import {ObjectContainer} from "samara";
import {HTMLElement} from "./html_element";
import * as tags from "./ref/html/tags.json";

//Constants
const id_default:number = -1;

//Declarations
let errors:ObjectContainer;
let sc:HTMLElement[];

//Methods
function containsTagOnPosition(pos:number, tag:string, closed:Boolean):Boolean{
    if(sc[pos].tag && sc[pos].closed === closed && sc[pos].content === tag){
        return true;
    }else{
        return false;
    }
}

function countTag(tag:string, closed:Boolean):number{
    let count:number = 0;
    for(let element of sc){
        if(element.tag && element.closed === closed && element.content === tag){
            count++;
        }
    }
    return count;
}

function getTagPosition(tag:string, closed:Boolean):number{
    let pos = 0;
    for(let element of sc){
        if(element.tag && element.closed === closed && element.content === tag){
            return pos;
        }
        pos++;
    }
    return -1;
}

export function isClosedTag(tag:string):Boolean{
    for(let element of tags.tags){
        if(element.name === tag.toLowerCase() && element.closed){
            return true;
        }
    }
    return false;
}

export function isTag(tag:string):Boolean{
    for(let element of tags.tags){
        if(element.name === tag.toLowerCase() || tag === "!DOCTYPE html"){
            return true;
        }
    }
    return false;
}

function validateBody(){
    countTag("body", false) < 1? errors.push(id_default, "Document does not contain Body-Tag") : undefined;
    countTag("body", false) > 1? errors.push(id_default, "Document contains more than one Body-Tag") : undefined;
    getTagPosition("body", false) < getTagPosition("head", true) + 1? errors.push(getTagPosition("body", false), "Body-Tag is on wrong Position") : undefined;
    countTag("body", true) < 1? errors.push(id_default, "Document does not contain Body-Closed-Tag") : undefined;
    countTag("body", true) > 1? errors.push(id_default, "Document contains more than one Body-Closed-Tag") : undefined;
    getTagPosition("body", true) < getTagPosition("body", false) + 1? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("body", true) > getTagPosition("html", true) + 1? errors.push(getTagPosition("body", true), "Body-Closed-Tag is on wrong Position") : undefined;
}

function validateCharset():void{

    //TODO: All

}

function validateContentLanguage():void{

    //TODO: All

}

function validateDoctype():void{
    countTag("!DOCTYPE html", true) > 0? errors.push(id_default, "Document contains closed Doctype") : undefined;
    countTag("!DOCTYPE html", false) < 1? errors.push(id_default, "Document does not contain Doctype") : undefined;
    countTag("!DOCTYPE html", false) > 1? errors.push(id_default, "Document contains more than one Doctype") : undefined;
    !containsTagOnPosition(0, "!DOCTYPE html", false)? errors.push(getTagPosition("!DOCTYPE html", true), "Doctype is on wrong Position") : undefined;
}

function validateHead():void{
    countTag("head", false) < 1? errors.push(id_default, "Document does not contain Head-Tag") : undefined;
    countTag("head", false) > 1? errors.push(id_default, "Document contains more than one Head-Tag") : undefined;
    getTagPosition("head", false) !== getTagPosition("html", false) + 1? errors.push(getTagPosition("head", false), "Head-Tag is on wrong Position") : undefined;
    countTag("head", true) < 1? errors.push(id_default, "Document does not contain Head-Closed-Tag") : undefined;
    countTag("head", true) > 1? errors.push(id_default, "Document contains more than one Head-Closed-Tag") : undefined;
    getTagPosition("head", true) < getTagPosition("head", false) + 1? errors.push(getTagPosition("head", true), "Head-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("head", true) > getTagPosition("html", true) + 1? errors.push(getTagPosition("head", true), "Head-Closed-Tag is on wrong Position") : undefined;
}

function validateHTML():void{
    countTag("html", false) < 1? errors.push(id_default, "Document does not contain HTML-Tag") : undefined;
    countTag("html", false) > 1? errors.push(id_default, "Document contains more than one HTML-Tag") : undefined;
    !containsTagOnPosition(1, "html", false)? errors.push(getTagPosition("html", false), "HTML-Tag is on wrong Position") : undefined;
    countTag("html", true) < 1? errors.push(id_default, "Document does not contain HTML-Closed-Tag") : undefined;
    countTag("html", true) > 1? errors.push(id_default, "Document contains more than one HTML-Closed-Tag") : undefined;
    !containsTagOnPosition(sc.length - 1, "html", true)? errors.push(getTagPosition("html", true), "HTML-Closed-Tag is on wrong Position") : undefined;
}

export function validatePage(src:HTMLElement[]):ObjectContainer{
    sc = src;
    errors = new ObjectContainer();
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

function validateTags():void{
    for(let element of sc){
        element.tag && !isTag(element.content)? errors.push(id_default, "Tag is not valid: " + element.content) : undefined;
    }
}

function validateTitle():void{
    countTag("title", false) < 1? errors.push(id_default, "Document does not contain Title-Tag") : undefined;
    countTag("title", false) > 1? errors.push(id_default, "Document contains more than one Title-Tag") : undefined;
    getTagPosition("title", false) !== getTagPosition("head", false) + 1? errors.push(getTagPosition("title", false), "Title-Tag is on wrong Position") : undefined;
    countTag("title", true) < 1? errors.push(id_default, "Document does not contain Title-Closed-Tag") : undefined;
    countTag("title", true) > 1? errors.push(id_default, "Document contains more than one Title-Closed-Tag") : undefined;
    getTagPosition("title", true) < getTagPosition("title", false) + 1? errors.push(getTagPosition("title", true), "Title-Closed-Tag is on wrong Position") : undefined;
    getTagPosition("title", true) > getTagPosition("head", true) + 1? errors.push(getTagPosition("title", true), "Title-Closed-Tag is on wrong Position") : undefined;
}

function validateViewport():void{

    //TODO: All

}