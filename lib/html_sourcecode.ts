//Imports
import {HTMLContent} from "./html_content";
import {HTMLTag} from "./html_tag";
import {HTMLTagParameter} from "./html_tag_parameter";
import * as tags from "./ref/html/tags.json";

//Classes
export class HTMLSourceCode{
    //Declarations
    _ids:number = 0;
    _sc:any[];

    //Constructor
    constructor(){
        this.sc = [];
    }

    //Methods
    addTag(tag:HTMLTag):HTMLTag{
        this.sc.push(tag);
        return tag;
    }

    addDoctype():HTMLTag{
        let tag:HTMLTag = new HTMLTag(this.getID(), "!DOCTYPE html", false);
        return this.addTag(tag);
    }

    addText(content:string):HTMLContent{
        let con = new HTMLContent(this.getID(), content);
        this.sc.push(con);
        return con;
    }

    closeHTML():HTMLTag{
        return this.closeTag("html");
    }

    private closeTag(tag:string):HTMLTag{
        return this.addTag(new HTMLTag(this.getID(), tag, true));
    }

    closeTagChecked(tag:string):HTMLTag{
        if(this.isClosedTag(tag)){
            return this.addTag(new HTMLTag(this.getID(), tag, false));
        }
        return undefined;
    }

    getID():number{
        return this.ids++;
    }

    getTag(id:number):HTMLTag{
        for(let element of this._sc){
            if(element.id === id){
                return element;
            }
        }
        return undefined;
    }

    isClosedTag(tag:string):Boolean{
        for(let element of tags.tags){
            if(element.name === tag && element.end === "/"){
                return true;
            }
        }
        return false;
    }

    isTag(tag:string):Boolean{
        for(let element of tags.tags){
            if(element.name === tag){
                return true;
            }
        }
        return false;
    }

    openHTML():HTMLTag{
        return this.openTag("html");
    }

    private openTag(tag:string):HTMLTag{
        return this.addTag(new HTMLTag(this.getID(), tag, false));
    }

    openTagChecked(tag:string):HTMLTag{
        if(this.isTag(tag)){
            return this.addTag(new HTMLTag(this.getID(), tag, false));
        }
        return undefined;
    }

    //Get-Methods
    get ids():number{
        return this._ids;
    }

    get sc():any[]{
        return this._sc;
    }

    //Set-Methods
    set ids(value:number){
        this._ids = value;
    }

    set sc(values:any[]){
        this._sc = values;
    }
}