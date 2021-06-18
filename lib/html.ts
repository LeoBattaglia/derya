//Constants
const html = require("./json/html.json");
export const sourcecode = require("./sourcecode");

//Functions
export function getEmptyPage():string{
    let sc = new sourcecode.SourceCode();
    sc.add(getTag("doctype"));
    sc.add(getTag("head"));
    sc.add(getTag("title"));
    sc.add(getTagEnd("title"));
    sc.add(getTagEnd("head"));


    return sc.src;
}

export function getTagEnd(name:string):string{
    for(let tag of html.tags){
        if(tag.name === name){
            return "<" + tag.end + ">";
        }
    }
    return undefined;
}

export function getTagName(name:string):string{
    for(let tag of html.tags){
        if(tag.name === name){
            return tag.name;
        }
    }
    return undefined;
}

export function getTag(name:string):string{
    for(let tag of html.tags){
        if(tag.name === name){
            return "<" + tag.tag + ">";
        }
    }
    return undefined;
}