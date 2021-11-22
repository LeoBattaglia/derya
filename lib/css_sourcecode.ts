//Imports
import {CSSElement} from "./css_element";
import {SourceObject} from "samara";

//Classes
export class CSSSourceCode{
    //Declarations
    private readonly elements:CSSElement[];
    private ids:number = 0;
    private readonly name:string;

    //Constructor
    constructor(name:string){
        this.name = name;
        this.elements = [];
    }

    //Methods
    addElement(element:CSSElement):void{
        this.elements.push(element);
    }

    addPropertyToElement(selector:string, property:string, value:string):void{
        let element = this.getElementBySelector(selector);
        if(element !== undefined){
            element.addProperty(property, value);
        }
    }

    getCSS():string{
        let sc:SourceObject = new SourceObject();
        for(let element of this.elements){
            sc.add(element.selector + "{", 0);
            for(let property of element.properties){
                sc.add(property.getName() + ": " + property.getValue() + ";", 1);
            }
            sc.add("}", 0);
        }
        return sc.getString();
    }

    getElement(id:number):CSSElement{
        for(let element of this.elements){
            if(element.id === id){
                return element;
            }
        }
        return undefined;
    }

    getElementBySelector(selector:string):CSSElement{
        for(let element of this.elements){
            if(element.selector === selector){
                return element;
            }
        }
        return undefined;
    }

    getName():string{
        return this.name;
    }

    private getNewID():number{
        return this.ids++;
    }

    new(selector:string):CSSElement{
        let element = new CSSElement(this.getNewID(), selector);
        this.addElement(element);
        return element;
    }
}