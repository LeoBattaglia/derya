//Constants
const html = require("./json/html.json");
export const sourcecode = require("./sourcecode");

//Functions
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