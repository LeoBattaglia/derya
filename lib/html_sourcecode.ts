//Imports
import {HTMLElement} from "./html_element";
import {ObjectContainer} from "samara";
import {isClosedTag, isTag, validatePage} from "./html_validation";
import * as sys from "samara";
import {HTMLSourceCodeFunctions} from "./html_sourcecode_functions_gen";

//Classes
export class HTMLSourceCode extends HTMLSourceCodeFunctions{
    //Constructor
    constructor(){
        super();
    }

    //Methods
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

    addFontFace(family:string, url:string):HTMLElement{
        return this.addContent("@font-face{font-family: \"" + family + "\"; src: url(\"/" + url + "\");}")
    }

    addImgDefault(src:string, alt:string):HTMLElement{
        let tag:HTMLElement = this.addTagUnsafe("img");
        tag.addAttributeSrc(src);
        tag.addAttributeAlt(alt);
        return tag;
    }

    addInputDefault(type:string, id:string, name:string){
        let tag:HTMLElement = this.addTagUnsafe("input");
        tag.addAttributeType(type);
        tag.addAttributeId(id);
        tag.addAttributeName(name);
        return tag;
    }

    addMetaDefault(name:string, content:string):HTMLElement{
        let tag:HTMLElement = new HTMLElement(this.getNewID(), "meta", true, false);
        if(!sys.isNull(name) && !sys.isNull(content)){
            tag.addAttributeName(name.toLowerCase());
            tag.addAttributeContent(content);
            return this.addElement(tag);
        }
        return undefined;
    }

    addTitle(value:string):void{
        this.openTitle()
        this.addContent(value)
        this.closeTitle();
    }

    openBodyDefault():HTMLElement{
        let tag:HTMLElement = this.openTagUnsafe("body");
        tag.addStyleSizes("100%", "100%");
        tag.addStyleMarginPadding("0em", "0em");
        return tag;
    }

    openDivWithID(value:string):HTMLElement{
        let element:HTMLElement = this.openDiv();
        element.addAttribute("id", value);
        return element;
    }

    openHTMLDefault():HTMLElement{
        let tag:HTMLElement = this.openTagUnsafe("html");
        tag.addStyleSizes("100%", "100%");
        return tag;
    }

    /*openTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.openTagUnsafe(tag);
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }*/

    openTagWithClass(tag:string, value:string):HTMLElement{
        let element:HTMLElement = this.openTag(tag);
        element.addAttribute("class", value);
        return element;
    }

    openTagWithID(tag:string, value:string):HTMLElement{
        let element:HTMLElement = this.openTag(tag);
        element.addAttribute("id", value);
        return element;
    }
}