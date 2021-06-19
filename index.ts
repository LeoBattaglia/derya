//Constants
import {SourceCode} from "./lib/sourcecode";

const html = require("./lib/html");
export const sourcecode = require("./lib/sourcecode");

//Classes
export class Coder{
    //Declarations
    mode:number;
    mode_css:number = 1;
    mode_html:number = 2;
    mode_json:number = 3;
    mode_svg:number = 4;
    mode_xml:number = 5;

    //Constructor
    constructor(mode:number){
        this.mode = mode;
    }

    //Methods
    getNewSourceCode():SourceCode{
        return new sourcecode.SourceCode();
    }
    getTag(name:string):string{
        switch(this.mode){
            case this.mode_html:
                return html.getTag(name);
        }
        return undefined;
    }
}