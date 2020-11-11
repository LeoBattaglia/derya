//Imports
import * as func from "./lib/functions";

//Class
export class Parser{
    parse(str:string):string[]{
        return func.parse(str);
    }
}