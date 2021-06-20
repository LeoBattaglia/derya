//Imports & Constants
export {HTMLTag as HTMLTag} from "./lib/htmltag";
export {SourceCode as SourceCode} from "./lib/sourcecode";
import {SourceCode} from "./lib/sourcecode";
const html = require("./lib/html");

//Functions
export function getModeCSS(){
    return 1;
}
export function getModeHTML(){
    return 2;
}
export function getModeJSON(){
    return 3;
}
export function getModeSVG(){
    return 4;
}
export function getModeXML(){
    return 5;
}

//Classes
export class Coder{
    //Declarations
    mode:number;

    //Constructor
    constructor(mode:number){
        this.mode = mode;
    }

    //Methods
    getNewSourceCode():SourceCode{
        return new SourceCode();
    }
    getTag(name:string):string{
        switch(this.mode){
            case getModeHTML():
                return html.getTag(name);
        }
        return undefined;
    }
    getTagEnd(name:string):string{
        switch(this.mode){
            case getModeHTML():
                return html.getTagEnd(name);
        }
        return undefined;
    }
}