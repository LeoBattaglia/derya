import * as sys from "samara";

//Classes
export class CSSAttribute{
    attribute:string;
    value:string;

    constructor(attribute:string, value:string){
        this.attribute = attribute;
        this.value = value;
    }

    getAttribute():string{
        return this.attribute;
    }

    getValue():string{
        return this.value;
    }
}

export class CSSElement{
    attributes:CSSAttribute[];
    selectors:string[];
    subElements:CSSElement[];

    constructor(selectors:string[], attributes:CSSAttribute[], subElements:CSSElement[]){
        this.attributes = attributes;
        this.selectors = selectors;
        this.subElements = subElements;
    }

    getAttributes():CSSAttribute[]{
        return this.attributes;
    }

    getSelectors():string[]{
        return this.selectors;
    }

    getSubElements(){
        return this.subElements;
    }
}

//Functions
function optimizeFile(str:string):string{
    str = sys.removeAll(str, "\t");
    str = sys.replaceAll(str, "\r\n", " ");
    str = sys.replaceAll(str, "{ ", "{");
    str = sys.replaceAll(str, " }", "}");
    str = sys.replaceAll(str, "( ", "(");
    str = sys.replaceAll(str, " )", ")");
    str = sys.replaceAll(str, "[ ", "[");
    str = sys.replaceAll(str, " ]", "]");
    str = sys.replaceAll(str, "  ", " ");
    return  str.trim();
}

export function parse(str:string):CSSElement[]{
    str = optimizeFile(str);
    let sc:CSSElement[] = [];
    while(str.length > 0){
        if(str.indexOf("/*") == 0 && str.indexOf("*/") > 0){
            let object = parseComment(str);
            sc.push(object.element);
            str = object.str;
        }else if(str.indexOf("@charset") == 0){
            let object = parseCharset(str);
            sc.push(object.element);
            str = object.str;
        }else if(str.indexOf("@import") == 0){
            let object = parseImport(str);
            sc.push(object.element);
            str = object.str;
        }else if(str.indexOf("{") > 0 && str.indexOf("}") > str.indexOf("{")){
            let char:string = null;
            let level:number = 0;
            let pos:number = 0;
            while(char !== "}" || level > 0){
                char = str.substring(pos, pos + 1);
                if(char === "{"){
                    level++;
                }
                if(char === "}"){
                    level--;
                }
                pos++;
            }
            let element:CSSElement = parseElement(str.substring(0, pos).trim());
            if(element.getSelectors().length > 0 && (element.getAttributes().length > 0 || element.getSubElements().length > 0)){
                sc.push(element);
            }
            str = str.substring(pos, str.length).trim();
        }else{
            console.log("ERROR Unknown String: " + str);
        }
    }
    return sc;
}

function parseAttributes(str:string):CSSAttribute[]{
    let attributes:CSSAttribute[] = [];
    if(str.indexOf(";") < 0){
        let att:string[] = str.split(":");
        attributes = [new CSSAttribute(att[0].trim(), att[1].trim())];
    }else{
        let split:string[] = str.split(";");
        attributes = [];
        for(let s of split){
            if(!sys.isNull(s)){
                let att:string[] = s.split(":");
                attributes.push(new CSSAttribute(att[0].trim(), att[1].trim()));
            }
        }
    }
    return attributes;
}

function parseCharset(str:string){
    let content = str.substring("@charset".length, str.indexOf(";") + 1).trim();
    let attribute = new CSSAttribute("@charset",  content);
    let el = new CSSElement(["@charset"], [attribute], []);
    str = str.substring(str.indexOf(";") + 1, str.length).trim();
    return {
        element: el,
        str: str
    };
}

function parseComment(str:string){
    let content:string = str.substring("/*".length, str.indexOf("*/")).trim();
    let attribute = new CSSAttribute("COMMENT",  content);
    let el = new CSSElement(["COMMENT"], [attribute], []);
    str = str.substring(str.indexOf("*/") + 2, str.length).trim();
    return {
        element: el,
        str: str
    };
}

function parseElement(str:string):CSSElement{
    let selector = str.substring(0, str.indexOf("{")).trim();
    let selectors:string[] = parseSelectors(selector);
    str = str.substring(str.indexOf("{") + 1, str.length - 1).trim();
    let attributes:CSSAttribute[] = [];
    let subElements:CSSElement[] = [];
    if(str.indexOf("{") < 0){
        attributes = parseAttributes(str);
    }else{
        let split:string[] = str.split("}");
        for(let s of split){
            s = s.trim();
            if(!sys.isNull(s)){
                s += "}";
                let ele:CSSElement = parseElement(s);
                subElements.push(ele);
            }
        }
    }
    return new CSSElement(selectors, attributes, subElements);
}

function parseImport(str:string){
    let content = str.substring("@import".length, str.indexOf(";") + 1).trim();
    let attribute = new CSSAttribute("@import",  content);
    let el = new CSSElement(["@import"], [attribute], []);
    str = str.substring(str.indexOf(";") + 1, str.length).trim();
    return {
        element: el,
        str: str
    };
}

function parseSelectors(str:string):string[]{
    let selectors:string[] = [];
    if(str.indexOf(",") < 0){
        selectors = [str];
    }else{
        let sel:string[] = str.split(",");
        selectors = [];
        for(let s of sel){
            s = s.trim();
            if(!sys.isNull(s)){
                selectors.push(s);
            }
        }
    }
    return selectors;
}