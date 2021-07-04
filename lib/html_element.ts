//Import
import {HTMLTagParameter} from "./html_tag_parameter";
import * as sys from "samara"

//Class
export class HTMLElement{
    //Declarations
    private _closed:Boolean;
    private _content:string;
    private _id:number;
    private _paras:HTMLTagParameter[];
    private _tag:Boolean;

    //Constructor
    constructor(id:number, content:string, tag:Boolean, closed:Boolean){
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.paras = [];
        this.tag = tag;
    }

    //Methods
    addPara(name:string, value:string):void{
        if(this.tag && !this.closed && !sys.isNull(name)){
            this.paras.push(new HTMLTagParameter(name, value));
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
                for(let para of this.paras){
                    if(sys.isNull(para.value)){
                        tag += " " + para.name;
                    }else{
                        tag += " " + para.name + "=\"" + para.value + "\"";
                    }
                }
                return "<" + tag + ">";
            }
        }
    }

    //Get-Methods
    get closed():Boolean{
        return this._closed;
    }

    get content():string{
        return this._content;
    }

    get id():number{
        return this._id;
    }

    get paras():HTMLTagParameter[]{
        return this._paras;
    }

    get tag():Boolean{
        return this._tag;
    }

    //Set-Methods
    set closed(value:Boolean){
        this._closed = value;
    }

    set content(value:string){
        this._content = value;
    }

    set id(value:number){
        this._id = value;
    }

    set paras(paras:HTMLTagParameter[]){
        if(!this.closed){
            this._paras = paras;
        }
    }

    set tag(value:Boolean){
        this._tag = value;
    }
}