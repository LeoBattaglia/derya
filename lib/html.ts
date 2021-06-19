//Constants
const html = require("./json/html.json");
export const sourcecode = require("./sourcecode");

//Functions
export function getTag(name:string):string{
    for(let tag of html.tags){
        console.log("FFF: " + tag.name + " || " + name);
        if(tag.name === name){
            return "<" + tag.tag + ">";
        }
    }
    return undefined;
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