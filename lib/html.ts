//Constants
const html = require("./json/html.json");
export const sourcecode = require("./sourcecode");

//Functions
export function getEmptyPage():string{
    let sc = new sourcecode.SourceCode();
    sc.add(html.getTag("doctype"));
    sc.add(html.getTag("title"));
    sc.add(html.getEnd("title"));


    return sc.src;
}

export function getEnd(name:string):string{
    for(let tag of html.tags){
        if(tag.name === name){
            return tag.end;
        }
    }
    return undefined;
}

export function getName(name:string):string{
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
            return tag.tag;
        }
    }
    return undefined;
}