//Imports
import {HTMLElement} from "./html_element";
import {HTMLSourceCode} from "./html_sourcecode";

//Declarations
const sc = new HTMLSourceCode();

//Functions
export function createDiv():HTMLElement{
    return sc.openTagUnsafe("div");
}