//Imports
import {HTMLContent} from "./html_content";
import {HTMLTag} from "./html_tag";
import {HTMLTagParameter} from "./html_tag_parameter";
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
    addComment(comment:string):HTMLContent{
        if(!sys.isNull(comment)){
            return this.addContent("<!-- " + comment + " -->")
        }
        return undefined;
    }

    addContent(content:string):HTMLContent{
        if(!sys.isNull(content)){
            let con = new HTMLContent(this.getNewID(), content);
            this.sc.push(con);
            return con;
        }
        return undefined;
    }

    addDoctype():HTMLTag{
        return this.addTagUnsafe(new HTMLTag(this.getNewID(), "!DOCTYPE html", false));
    }

    addMeta(name:string, content:string):HTMLTag{
        let tag:HTMLTag = new HTMLTag(this.getNewID(), "meta", false);
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

    addTag(str:string):HTMLTag{
        if(this.isTag(str)){
            return this.addTagUnsafe(new HTMLTag(this.getNewID(), str, false));
        }
        return undefined;
    }

    addTagUnsafe(tag:HTMLTag):HTMLTag{
        this.sc.push(tag);
        return tag;
    }

    closeTag(tag:string):HTMLTag{
        if(this.isClosedTag(tag)){
            return this.addTagUnsafe(new HTMLTag(this.getNewID(), tag, false));
        }
        return undefined;
    }

    closeTagUnsafe(tag:string):HTMLTag{
        return this.addTagUnsafe(new HTMLTag(this.getNewID(), tag, true));
    }

    private getNewID():number{
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

    private isClosedTag(tag:string):Boolean{
        for(let element of tags.tags){
            if(element.name === tag && element.end === "/"){
                return true;
            }
        }
        return false;
    }

    private isTag(tag:string):Boolean{
        for(let element of tags.tags){
            if(element.name === tag){
                return true;
            }
        }
        return false;
    }

    openTag(tag:string):HTMLTag{
        if(this.isTag(tag)){
            return this.addTagUnsafe(new HTMLTag(this.getNewID(), tag, false));
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLTag{
        return this.addTagUnsafe(new HTMLTag(this.getNewID(), tag, false));
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