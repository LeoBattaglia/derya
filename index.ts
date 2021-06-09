const html = require("html");

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
    createEmptyPage():string{
        return this.getTag("doctype");
    }
    getTag(name:string):string{
        for(let tag of html.tags){
            if(tag.name === name){
                return tag.tag;
            }
        }
        return undefined;
    }
}