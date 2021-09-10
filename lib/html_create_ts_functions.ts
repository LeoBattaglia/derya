import * as tags from "./ref/html/tags.json";
import {ObjectContainer} from "samara";

const sys = require("samara");

export class Generator{
    generate():void{
        let add:string[] = [];
        let close:string[] = [];
        let open:string[] = [];
        for(let tag of tags.tags){
            if(tag.closed){
                close.push("close" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                close.push("return this.closeTagUnsafe(\"" + tag.name + "\");");
                close.push("}");
                close.push("");
                open.push("open" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                open.push("return this.openTagUnsafe(\"" + tag.name + "\");");
                open.push("}");
                open.push("");
            }else{
                add.push("add" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                add.push("return this.addTagUnsafe(\"" + tag.name + "\");");
                add.push("}");
                add.push("");
            }
        }
        for(let str of add){
            console.log(str);
        }
        for(let str of close){
            console.log(str);
        }
        for(let str of open){
            console.log(str);
        }
    }
}