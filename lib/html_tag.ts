//Import
import {HTMLTagParameter} from "./html_tag_parameter";
import * as sys from "samara"

//Class
export class HTMLTag{
    //Declarations
    _closed:Boolean;
    _id:number;
    _name:string;
    _paras:HTMLTagParameter[];

    //Constructor
    constructor(id:number, name:string, closed:Boolean){
        this.closed = closed;
        this.id = id;
        this.name = name;
        this.paras = [];
    }

    //Methods
    addPara(name:string, value:string):void{
        if(!this.closed && !sys.isNull(name)){
            this.paras.push(new HTMLTagParameter(name, value));
        }
    }

    getTag(){
        let tag:string = this.name;
        if(this._closed){
            tag = "/" + tag;
        }else{
            for(let para of this.paras){
                if(sys.isNull(para.value)){
                    tag += " " + para.name;
                }else{
                    tag += " " + para.name + "=\"" + para.value + "\"";
                }
            }
        }
        return "<" + tag + ">"
    }

    //Get-Methods
    get closed():Boolean{
        return this._closed;
    }

    get id():number{
        return this._id;
    }

    get name():string{
        return this._name;
    }

    get paras():HTMLTagParameter[]{
        return this._paras;
    }

    //Set-Methods
    set closed(value:Boolean){
        this._closed = value;
    }

    set id(value:number){
        this._id = value;
    }

    set name(value:string){
        this._name = value;
    }

    set paras(paras:HTMLTagParameter[]){
        if(!this.closed){
            this._paras = paras;
        }
    }
}