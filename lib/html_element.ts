//Import
import {HTMLTagAttribute} from "./html_tag_attribute";
import * as sys from "samara"

//Class
export class HTMLElement{
    //Declarations
    private _attributes:HTMLTagAttribute[];
    private _closed:Boolean;
    private _content:string;
    private _id:number;
    private _styles:HTMLTagAttribute[];
    private _tag:Boolean;

    //Constructor
    constructor(id:number, content:string, tag:Boolean, closed:Boolean){
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.attributes = [];
        this.styles = [];
        this.tag = tag;
    }

    //Methods
    addAttribute(name:string, value:string):void{
        if(this.tag && !this.closed && !sys.isNull(name)){
            this.attributes.push(new HTMLTagAttribute(name, value));
        }
    }

    addStyle(name:string, value:string):void{
        if(!sys.isNull(name) && !sys.isNull(value)){
            this.styles.push(new HTMLTagAttribute(name, value));
        }
    }

    getContent():string{
        if(!this.tag){
            return this.content;
        }else{
            if(this.closed){
                return  "</" + this.content + ">";
            }else{
                let tag:string = this.content;
                for(let attribute of this.attributes){
                    if(sys.isNull(attribute.value)){
                        tag += " " + attribute.name;
                    }else{
                        tag += " " + attribute.name + "=\"" + attribute.value + "\"";
                    }
                }
                if(this.styles.length > 0){
                    tag += " style=\"";
                    let cnt:number = 0;
                    let space:string = "";
                    for(let style of this.styles){
                        if(cnt > 0){
                            space = " ";
                        }
                        tag += space + style.name + ": " + style.value + ";";
                        cnt++;
                    }
                    tag += "\"";
                }
                return "<" + tag + ">";
            }
        }
    }

    //Get-Methods
    get attributes():HTMLTagAttribute[]{
        return this._attributes;
    }

    get closed():Boolean{
        return this._closed;
    }

    get content():string{
        return this._content;
    }

    get id():number{
        return this._id;
    }
    get styles():HTMLTagAttribute[]{
        return this._styles;
    }

    get tag():Boolean{
        return this._tag;
    }

    //Set-Methods
    set attributes(attributes:HTMLTagAttribute[]){
        if(!this.closed){
            this._attributes = attributes;
        }
    }

    set closed(value:Boolean){
        this._closed = value;
    }

    set content(value:string){
        this._content = value;
    }

    set id(value:number){
        this._id = value;
    }

    set styles(styles:HTMLTagAttribute[]){
        this._styles = styles;
    }

    set tag(value:Boolean){
        this._tag = value;
    }
}