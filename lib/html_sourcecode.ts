//Imports
import {HTMLElement} from "./html_element";
import * as sys from "samara";
import * as tags from "./ref/html/tags.json";

//Classes
export class HTMLSourceCode{
    //Declarations
    private _ids:number = 0;
    private _sc:any[];

    //Constructor
    constructor(){
        this.sc = [];
    }

    //Methods
    addBR():HTMLElement{
        return this.addTagUnsafe(new HTMLElement(this.getNewID(), "br", true, false));
    }

    addComment(comment:string):HTMLElement{
        if(!sys.isNull(comment)){
            return this.addContent("<!-- " + comment + " -->")
        }
        return undefined;
    }

    addContent(content:string):HTMLElement{
        if(!sys.isNull(content)){
            let con = new HTMLElement(this.getNewID(), content, false, undefined);
            this.sc.push(con);
            return con;
        }
        return undefined;
    }

    addDoctype():HTMLElement{
        return this.addTagUnsafe(new HTMLElement(this.getNewID(), "!DOCTYPE html", true, false));
    }

    addMeta(name:string, content:string):HTMLElement{
        let tag:HTMLElement = new HTMLElement(this.getNewID(), "meta", true, false);
        if(!sys.isNull(name) && !sys.isNull(content)){
            tag.addPara("name", name);
            tag.addPara("content", content);
        }
        return this.addTagUnsafe(tag);
    }

    addSourceCode(sc:HTMLSourceCode):void{
        for(let element of sc.sc){
            this.sc.push(element);
        }
    }

    addTag(str:string):HTMLElement{
        if(this.isTag(str)){
            return this.addTagUnsafe(new HTMLElement(this.getNewID(), str, true, false));
        }
        return undefined;
    }

    addTagUnsafe(tag:HTMLElement):HTMLElement{
        this.sc.push(tag);
        return tag;
    }

    closeTag(tag:string):HTMLElement{
        if(this.isClosedTag(tag)){
            return this.addTagUnsafe(new HTMLElement(this.getNewID(), tag, true, true));
        }
        return undefined;
    }

    closeTagUnsafe(tag:string):HTMLElement{
        return this.addTagUnsafe(new HTMLElement(this.getNewID(), tag, true, true));
    }

    getElement(id:number):HTMLElement{
        for(let element of this._sc){
            if(element.id === id){
                return element;
            }
        }
        return undefined;
    }

    getHTML():string{
        let html:string = "";
        for(let element of this.sc){
            html += element.getContent();
        }
        return html;
    }

    private getNewID():number{
        return this.ids++;
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

    openTag(tag:string):HTMLElement{
        if(this.isTag(tag)){
            return this.addTagUnsafe(new HTMLElement(this.getNewID(), tag, true, false));
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLElement{
        return this.addTagUnsafe(new HTMLElement(this.getNewID(), tag, true, false));
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