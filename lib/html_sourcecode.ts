//Imports
import {HTMLElement} from "./html_element";
import {ObjectContainer} from "samara";
import {isClosedTag, isTag, validatePage} from "./html_validation";
import * as sys from "samara";
import * as tags from "./ref/html/tags.json";

//Classes
export class HTMLSourceCode{
    //Declarations
    private _ids:number = 0;
    private _sc:HTMLElement[];

    //Constructor
    constructor(){
        this.sc = [];
    }

    //Methods
    addBR():HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), "br", true, false));
    }

    addCharset(charset:string):HTMLElement{
        let tag:HTMLElement = new HTMLElement(this.getNewID(), "meta", true, false);
        if(!sys.isNull(charset)){
            tag.addAttribute("charset", charset.toUpperCase());
            return this.addElement(tag);
        }
        return undefined;
    }

    addComment(comment:string):HTMLElement{
        if(!sys.isNull(comment)){
            return this.addContent("<!-- " + comment + " -->")
        }
        return undefined;
    }

    addContent(content:string):HTMLElement{
        content = sys.removeTags(content);
        if(!sys.isNull(content)){
            return this.addElement(new HTMLElement(this.getNewID(), content, false, undefined));
        }
        return undefined;
    }

    addDoctype():HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), "!DOCTYPE html", true, false));
    }

    private addElement(element:HTMLElement):HTMLElement{
        this.sc.push(element);
        return element;
    }

    addMeta(name:string, content:string):HTMLElement{
        let tag:HTMLElement = new HTMLElement(this.getNewID(), "meta", true, false);
        if(!sys.isNull(name) && !sys.isNull(content)){
            tag.addAttribute("name", name.toLowerCase());
            tag.addAttribute("content", content);
            return this.addElement(tag);
        }
        return undefined;
    }

    addSourceCode(sc:HTMLSourceCode):void{
        for(let element of sc.sc){
            this.sc.push(element);
        }
    }

    addTag(tag:string):HTMLElement{
        if(isTag(tag.toLowerCase())){
            return this.addTagUnsafe(tag);
        }
        return undefined;
    }

    private addTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }

    closeTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.closeTagUnsafe(tag);
        }
        return undefined;
    }

    closeTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, true));
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
        let errors:ObjectContainer = validatePage(this.sc);
        if(errors.getLength() > 0){
            for(let error of errors.objects){
                html += "ERROR: " + error.object + "!\r\n";
            }
        }
        //Generate format String
        let lvl:number = 0;
        for(let element of this._sc){
            if(element.tag && isClosedTag(element.content) && element.closed){
                lvl--;
            }
            let tabs:string = "";
            for(let i=0; i<lvl; i++){
                tabs += "\t";
            }
            html += tabs + element.getContent() + "\r\n";
            if(element.tag && isClosedTag(element.content) && !element.closed){
                lvl++;
            }
        }
        return html;
    }

    private getNewID():number{
        return this.ids++;
    }

    openTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.openTagUnsafe(tag);
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }

    //Get-Methods
    get ids():number{
        return this._ids;
    }

    get sc():HTMLElement[]{
        return this._sc;
    }

    //Set-Methods
    set ids(value:number){
        this._ids = value;
    }

    set sc(values:HTMLElement[]){
        this._sc = values;
    }
}