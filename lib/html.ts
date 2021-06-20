//Constants
const html = require("./ref/html/tags.json");
export const sourcecode = require("./sourcecode");

//Functions
export function getTag(name:string):string{
    for(let tag of html.tags){
        if(tag.name.toLowerCase() === name.toLowerCase()){
            if(tag.name.toLowerCase() === "doctype"){
                return "<!DOCTYPE html>";
            }else{
                return "<" + tag.name + ">";
            }
        }
    }
    return undefined;
}

export function getTagEnd(name:string):string{
    for(let tag of html.tags){
        if(tag.name.toLowerCase() === name.toLowerCase()){
            if(tag.end === "/"){
                return "</" + tag.name + ">";
            }else{
                return tag.end;
            }
        }
    }
    return undefined;
}