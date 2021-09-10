import * as tags from "./ref/html/tags.json";
import * as properties from "./ref/css/properties.json";
import {ObjectContainer} from "samara";

const sys = require("samara");

export class Generator{
    generateSCFunctions():void{
        let add:string[] = [];
        let close:string[] = [];
        let open:string[] = [];
        for(let tag of tags.tags){
            if(tag.closed){
                close.push("close" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                close.push("return this.closeTagUnsafe(\"" + tag.name + "\");");
                close.push("}");
                open.push("open" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                open.push("return this.openTagUnsafe(\"" + tag.name + "\");");
                open.push("}");
            }else{
                add.push("add" + sys.capitalizeFirstLetter(tag.name) + "():HTMLElement{");
                add.push("return this.addTagUnsafe(\"" + tag.name + "\");");
                add.push("}");
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
    generateTagFunctions(){
        let globalAtts:string[] = [];
        let localAtts:string[] = [];
        let localAttsNames:string[] = [];
        let props:string[] = [];
        for(let att of tags.attributes_global){
            localAttsNames.push(att.name);
            globalAtts.push("addAttribute" + sys.capitalizeFirstLetter(att.name.replace("-*", "") + "(value:string):void{"));
            globalAtts.push("this.addAttribute(\"" + att.name + "\", value);");
            globalAtts.push("}");
        }
        for(let str of globalAtts){
            console.log(str);
        }
        for(let tag of tags.tags){
            for(let att of tag.attributes){
                let alreadyExists:Boolean = false;
                for(let str of localAttsNames){
                    if(att.name === str){
                        alreadyExists = true;
                    }
                }
                if(!alreadyExists){
                    localAttsNames.push(att.name);
                    let name:string = sys.capitalizeFirstLetter(att.name);
                    while(name.indexOf("-") > -1){
                        let left:string = name.substr(0, name.indexOf("-"));
                        let right:string = name.substr(name.indexOf("-") + 1, name.length);
                        name = left + sys.capitalizeFirstLetter(right);
                    }
                    localAtts.push("addAttribute" + name + "(value:string):void{");
                    localAtts.push("this.addAttribute(\"" + att.name + "\", value);");
                    localAtts.push("}");
                }
            }
        }
        for(let str of localAtts){
            console.log(str);
        }
        for(let prop of properties.properties){
            let name:string = prop.name.replace("@", "");
            name = sys.capitalizeFirstLetter(name);
            while(name.indexOf("-") > -1){
                let left:string = name.substr(0, name.indexOf("-"));
                let right:string = name.substr(name.indexOf("-") + 1, name.length);
                name = left + sys.capitalizeFirstLetter(right);
            }
            props.push("addStyle" + name + "(value:string):void{");

            props.push("if(this.validateStyleValue(\"" + prop.name + "\", value)){")
            props.push("this.addStyle(\"" + prop.name + "\", value);");
            props.push("}");

            props.push("}");
        }
        for(let str of props){
            console.log(str);
        }
    }

}