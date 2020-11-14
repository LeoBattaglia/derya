//Imports
import * as func from "./lib/functions";

//Exports
export {CSSAttribute, CSSElement} from "./lib/functions";

//Class
export class CSSParser{
    elements:func.CSSElement[];

    getElements():func.CSSElement[]{
        return this.elements;
    }

    parse(str:string):void{
        this.elements = func.parse(str);
    }
}