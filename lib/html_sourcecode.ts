//Imports
import {HTMLElement} from "./html_element";
import {ObjectContainer} from "samara";
import {isClosedTag, isTag, validatePage} from "./html_validation";
import * as sys from "samara";
import * as tags from "./ref/html_tags.json";

//Classes
export class HTMLSourceCode{
    //Declarations
    private _ids:number = 0;
    private _sc:HTMLElement[];

    //Constructor
    constructor(sourceCode?:string){
        this.sc = [];
        if(!sys.isNull(sourceCode)){
            this.parse(sourceCode);
        }
    }

    //Methods
    addCharset(charset:string):HTMLElement{
        let tag:HTMLElement = new HTMLElement(this.getNewID(), "meta", true, false);
        if(!sys.isNull(charset)){
            tag.addAttributeCharset(charset.toUpperCase());
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
        content = sys.removeTags(content).trim();
        if(!sys.isNull(content)){
            return this.addElement(new HTMLElement(this.getNewID(), content, false, undefined));
        }
        return undefined;
    }

    addDoctype():HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), "!DOCTYPE html", true, false));
    }

    addElement(element:HTMLElement):HTMLElement{
        this.sc.push(element);
        return element;
    }

    addFontFace(family:string, url:string):HTMLElement{
        return this.addContent("@font-face{font-family: \"" + family + "\"; src: url(\"/" + url + "\");}")
    }

    addIcon(name:string, md:string[]):HTMLElement{
        let tag:HTMLElement = this.openSpan();
        if(md.length < 1){
            tag.addAttributeClass("material-icons");
        }else{
            let str:string = "material-icons";
            for(let i:number = 0; i < md.length; i++){
                str += " " + md[i];
            }
            tag.addAttributeClass(str);
        }
        tag = this.addContent(name);
        this.closeSpan();
        return tag;
    }

    addImgDefault(src:string, alt:string):HTMLElement{
        let tag:HTMLElement = this.addImg();
        tag.addAttributeSrc(src);
        tag.addAttributeAlt(alt);
        return tag;
    }

    addInputDefault(type:string, id:string, name:string){
        let tag:HTMLElement = this.addInput();
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

    addSourceCode(sc:HTMLSourceCode):void{
        for(let element of sc.sc){
            this.sc.push(element);
        }
    }

    addTag(tag:string):HTMLElement{
        if(isTag(tag.toLowerCase())){
            return this.addTagUnsafe(tag);
        }
        return undefined;
    }

    addTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }

    addTitle(value:string):void{
        this.openTitle()
        this.addContent(value)
        this.closeTitle();
    }

    closeTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.closeTagUnsafe(tag);
        }
        return undefined;
    }

    closeTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, true));
    }

    static containsTags(sourceCode:string):Boolean{
        if(sourceCode.indexOf("<") > -1 && sourceCode.indexOf(">") > sourceCode.indexOf("<")){
            return true;
        }else{
            return false;
        }
    }

    static extractComment(str:string):string{
        str = str.substring(4, str.length);
        str = sys.removeAll(str, "-->");
        if(str.indexOf(">") > -1){
            str = str.substring(0, str.indexOf(">"))
        }
        return str.trim();
    }

    getElement(id:number):HTMLElement{
        for(let element of this.sc){
            if(element.id === id){
                return element;
            }
        }
        return undefined;
    }

    getHTML(validate?:Boolean):string{
        let html:string = "";
        if(validate === true){
            let errors:ObjectContainer = validatePage(this.sc);
            if(errors.getLength() > 0){
                for(let error of errors.objects){
                    html += "ERROR: " + error.object + "!\r\n";
                }
            }
        }
        //Generate format String
        let lvl:number = 0;
        for(let element of this.sc){
            if(element.tag && isClosedTag(element.content) && element.closed){
                lvl--;
            }
            let tabs:string = "";
            for(let i = 0; i < lvl; i++){
                tabs += "\t";
            }
            html += tabs + element.getContent() + "\r\n";
            if(element.tag && isClosedTag(element.content) && !element.closed){
                lvl++;
            }
        }
        return html;
    }

    private getNewID():number{
        return this.ids++;
    }

    static getTag(name:string){
        if(name.indexOf("/") === 0){
            name = name.substring(name.indexOf("/") + 1, name.length);
        }
        if(name.indexOf(" ") > -1){
            name = name.substring(0, name.indexOf(" "));
        }
        //console.log("NAME: " + name)
        for(let tag of tags.tags){
            if(tag.name === name){
                return tag;
            }
        }
        return undefined;
    }

    static isComment(str:string):Boolean{
        if(str.indexOf("<!--") === 0 && str.indexOf("-->") > 3){
            return true;
        }else{
            return false;
        }
    }

    openBodyDefault():HTMLElement{
        let tag:HTMLElement = this.openBody();
        tag.addStyleSizes("100%", "100%");
        tag.addStyleMarginPadding("0em", "0em");
        return tag;
    }

    openDivWithClass(value:string):HTMLElement{
        let element:HTMLElement = this.openDiv();
        element.addAttributeClass(value);
        return element;
    }

    openDivWithID(value:string):HTMLElement{
        let element:HTMLElement = this.openDiv();
        element.addAttributeId(value);
        return element;
    }

    openHTMLDefault():HTMLElement{
        let tag:HTMLElement = this.openHtml();
        tag.addStyleSizes("100%", "100%");
        return tag;
    }

    openTag(tag:string):HTMLElement{
        if(isClosedTag(tag.toLowerCase())){
            return this.openTagUnsafe(tag);
        }
        return undefined;
    }

    openTagUnsafe(tag:string):HTMLElement{
        return this.addElement(new HTMLElement(this.getNewID(), tag.toLowerCase(), true, false));
    }

    openTagWithClass(tag:string, value:string):HTMLElement{
        let element:HTMLElement = this.openTag(tag);
        element.addAttributeClass(value);
        return element;
    }

    openTagWithID(tag:string, value:string):HTMLElement{
        let element:HTMLElement = this.openTag(tag);
        element.addAttributeId(value);
        return element;
    }

    parse(sourceCode:string):void{
        sourceCode = cleanSourceCode(sourceCode);
        while(HTMLSourceCode.containsTags(sourceCode)){
            let index1 = sourceCode.indexOf("<");
            if(index1 > 0){
                this.addContent(sourceCode.substring(0, index1).trim());
                sourceCode = sourceCode.substring(index1, sourceCode.length);
            }else{
                let index2 = sourceCode.indexOf(">") + 1;
                let tag = sourceCode.substring(0, index2);
                tag = sys.replaceAll(tag, "/>", ">");
                if(HTMLSourceCode.isComment(tag)){
                    this.addComment(HTMLSourceCode.extractComment(tag));
                }else{
                    if(tag.toLowerCase().indexOf("doctype") > -1){
                        this.addDoctype();
                    }else{
                        //console.log("TAG: " + tag);
                        let name:string = tag.substring(1, tag.length - 1);
                        //console.log("TAG-NAME: " + name);
                        let t = HTMLSourceCode.getTag(name);
                        if(t !== undefined){
                            if(t.closed){
                                if(name.indexOf("/") === 0){
                                    name = name.substring(name.indexOf("/") + 1, name.length);
                                    if(name.indexOf(" ") > -1){
                                        name = name.substring(0, name.indexOf(" "));
                                    }
                                    name = name.trim();
                                    //console.log("CLOSE: " + name);
                                    this.closeTagUnsafe(name);
                                }else{
                                    //console.log("OPEN: " + name);
                                    createElement(this.openTagUnsafe(name), getParas(name));
                                }
                            }else{
                                //console.log("ADD: " + name);
                                createElement(this.addTagUnsafe(name), getParas(name));
                            }
                        }
                    }
                }
                sourceCode = sourceCode.substring(index2, sourceCode.length);
            }
        }
        sourceCode = sourceCode.trim();
        if(sourceCode.length > 0){
            this.addContent(sourceCode);
        }
        //console.log("sourceCode: " + sourceCode);

        //SubFunctions
        function cleanSourceCode(sourceCode:string):string{
            sourceCode = sys.removeBreaksAndTabs(sourceCode);
            sourceCode = sys.removeDoubleSpaces(sourceCode);
            return sourceCode.trim();
        }

        function createElement(tag:HTMLElement, paras:string[]):HTMLElement{
            for(let p of paras){
                //console.log("PARA: " + p);
                if(p.indexOf("=") < 0){
                    tag.addAttribute(p);
                }else{
                    let split:string[] = p.split("=");
                    tag.addAttribute(split[0], split[1]);
                }
            }
            return tag;
        }

        function getParas(str:string):string[]{
            str = str.trim();
            let paras:string[] = [];
            if(str.indexOf(" ") > -1){
                paras = str.split(" ");
                paras.shift();
            }
            return paras;
        }
    }

    //Get-Methods
    get ids():number{
        return this._ids;
    }

    get sc():HTMLElement[]{
        return this._sc;
    }

    //Set-Methods
    set ids(value:number){
        this._ids = value;
    }

    set sc(values:HTMLElement[]){
        this._sc = values;
    }

    //Generated-Methods
	addArea():HTMLElement{
		return this.addTagUnsafe("area");
	}
	addBase():HTMLElement{
		return this.addTagUnsafe("base");
	}
	addEmbed():HTMLElement{
		return this.addTagUnsafe("embed");
	}
	addHr():HTMLElement{
		return this.addTagUnsafe("hr");
	}
	addImg():HTMLElement{
		return this.addTagUnsafe("img");
	}
	addInput():HTMLElement{
		return this.addTagUnsafe("input");
	}
	addLink():HTMLElement{
		return this.addTagUnsafe("link");
	}
	addMeta():HTMLElement{
		return this.addTagUnsafe("meta");
	}
	addParam():HTMLElement{
		return this.addTagUnsafe("param");
	}
	addTrack():HTMLElement{
		return this.addTagUnsafe("track");
	}
	addWbr():HTMLElement{
		return this.addTagUnsafe("wbr");
	}

	closeA():HTMLElement{
		return this.closeTagUnsafe("a");
	}
	closeAbbr():HTMLElement{
		return this.closeTagUnsafe("abbr");
	}
	closeAddress():HTMLElement{
		return this.closeTagUnsafe("address");
	}
	closeArticle():HTMLElement{
		return this.closeTagUnsafe("article");
	}
	closeAside():HTMLElement{
		return this.closeTagUnsafe("aside");
	}
	closeAudio():HTMLElement{
		return this.closeTagUnsafe("audio");
	}
	closeB():HTMLElement{
		return this.closeTagUnsafe("b");
	}
	closeBdi():HTMLElement{
		return this.closeTagUnsafe("bdi");
	}
	closeBdo():HTMLElement{
		return this.closeTagUnsafe("bdo");
	}
	closeBlockquote():HTMLElement{
		return this.closeTagUnsafe("blockquote");
	}
	closeBody():HTMLElement{
		return this.closeTagUnsafe("body");
	}
	closeBr():HTMLElement{
		return this.closeTagUnsafe("br");
	}
	closeButton():HTMLElement{
		return this.closeTagUnsafe("button");
	}
	closeCanvas():HTMLElement{
		return this.closeTagUnsafe("canvas");
	}
	closeCaption():HTMLElement{
		return this.closeTagUnsafe("caption");
	}
	closeCite():HTMLElement{
		return this.closeTagUnsafe("cite");
	}
	closeCode():HTMLElement{
		return this.closeTagUnsafe("code");
	}
	closeCol():HTMLElement{
		return this.closeTagUnsafe("col");
	}
	closeColgroup():HTMLElement{
		return this.closeTagUnsafe("colgroup");
	}
	closeData():HTMLElement{
		return this.closeTagUnsafe("data");
	}
	closeDatalist():HTMLElement{
		return this.closeTagUnsafe("datalist");
	}
	closeDd():HTMLElement{
		return this.closeTagUnsafe("dd");
	}
	closeDel():HTMLElement{
		return this.closeTagUnsafe("del");
	}
	closeDetails():HTMLElement{
		return this.closeTagUnsafe("details");
	}
	closeDfn():HTMLElement{
		return this.closeTagUnsafe("dfn");
	}
	closeDialog():HTMLElement{
		return this.closeTagUnsafe("dialog");
	}
	closeDiv():HTMLElement{
		return this.closeTagUnsafe("div");
	}
	closeDl():HTMLElement{
		return this.closeTagUnsafe("dl");
	}
	closeDt():HTMLElement{
		return this.closeTagUnsafe("dt");
	}
	closeEm():HTMLElement{
		return this.closeTagUnsafe("em");
	}
	closeFieldset():HTMLElement{
		return this.closeTagUnsafe("fieldset");
	}
	closeFigcaption():HTMLElement{
		return this.closeTagUnsafe("figcaption");
	}
	closeFigure():HTMLElement{
		return this.closeTagUnsafe("figure");
	}
	closeFooter():HTMLElement{
		return this.closeTagUnsafe("footer");
	}
	closeForm():HTMLElement{
		return this.closeTagUnsafe("form");
	}
	closeH1():HTMLElement{
		return this.closeTagUnsafe("h1");
	}
	closeHead():HTMLElement{
		return this.closeTagUnsafe("head");
	}
	closeHeader():HTMLElement{
		return this.closeTagUnsafe("header");
	}
	closeHtml():HTMLElement{
		return this.closeTagUnsafe("html");
	}
	closeI():HTMLElement{
		return this.closeTagUnsafe("i");
	}
	closeIframe():HTMLElement{
		return this.closeTagUnsafe("iframe");
	}
	closeIns():HTMLElement{
		return this.closeTagUnsafe("ins");
	}
	closeKbd():HTMLElement{
		return this.closeTagUnsafe("kbd");
	}
	closeLabel():HTMLElement{
		return this.closeTagUnsafe("label");
	}
	closeLegend():HTMLElement{
		return this.closeTagUnsafe("legend");
	}
	closeLi():HTMLElement{
		return this.closeTagUnsafe("li");
	}
	closeMain():HTMLElement{
		return this.closeTagUnsafe("main");
	}
	closeMap():HTMLElement{
		return this.closeTagUnsafe("map");
	}
	closeMark():HTMLElement{
		return this.closeTagUnsafe("mark");
	}
	closeMeter():HTMLElement{
		return this.closeTagUnsafe("meter");
	}
	closeNav():HTMLElement{
		return this.closeTagUnsafe("nav");
	}
	closeNoscript():HTMLElement{
		return this.closeTagUnsafe("noscript");
	}
	closeObject():HTMLElement{
		return this.closeTagUnsafe("object");
	}
	closeOl():HTMLElement{
		return this.closeTagUnsafe("ol");
	}
	closeOptgroup():HTMLElement{
		return this.closeTagUnsafe("optgroup");
	}
	closeOption():HTMLElement{
		return this.closeTagUnsafe("option");
	}
	closeOutput():HTMLElement{
		return this.closeTagUnsafe("output");
	}
	closeP():HTMLElement{
		return this.closeTagUnsafe("p");
	}
	closePicture():HTMLElement{
		return this.closeTagUnsafe("picture");
	}
	closePre():HTMLElement{
		return this.closeTagUnsafe("pre");
	}
	closeProgress():HTMLElement{
		return this.closeTagUnsafe("progress");
	}
	closeQ():HTMLElement{
		return this.closeTagUnsafe("q");
	}
	closeRp():HTMLElement{
		return this.closeTagUnsafe("rp");
	}
	closeRt():HTMLElement{
		return this.closeTagUnsafe("rt");
	}
	closeRuby():HTMLElement{
		return this.closeTagUnsafe("ruby");
	}
	closeS():HTMLElement{
		return this.closeTagUnsafe("s");
	}
	closeSamp():HTMLElement{
		return this.closeTagUnsafe("samp");
	}
	closeScript():HTMLElement{
		return this.closeTagUnsafe("script");
	}
	closeSection():HTMLElement{
		return this.closeTagUnsafe("section");
	}
	closeSelect():HTMLElement{
		return this.closeTagUnsafe("select");
	}
	closeSmall():HTMLElement{
		return this.closeTagUnsafe("small");
	}
	closeSource():HTMLElement{
		return this.closeTagUnsafe("source");
	}
	closeSpan():HTMLElement{
		return this.closeTagUnsafe("span");
	}
	closeStrong():HTMLElement{
		return this.closeTagUnsafe("strong");
	}
	closeStyle():HTMLElement{
		return this.closeTagUnsafe("style");
	}
	closeSub():HTMLElement{
		return this.closeTagUnsafe("sub");
	}
	closeSummary():HTMLElement{
		return this.closeTagUnsafe("summary");
	}
	closeSup():HTMLElement{
		return this.closeTagUnsafe("sup");
	}
	closeSvg():HTMLElement{
		return this.closeTagUnsafe("svg");
	}
	closeTable():HTMLElement{
		return this.closeTagUnsafe("table");
	}
	closeTbody():HTMLElement{
		return this.closeTagUnsafe("tbody");
	}
	closeTd():HTMLElement{
		return this.closeTagUnsafe("td");
	}
	closeTemplate():HTMLElement{
		return this.closeTagUnsafe("template");
	}
	closeTextarea():HTMLElement{
		return this.closeTagUnsafe("textarea");
	}
	closeTfoot():HTMLElement{
		return this.closeTagUnsafe("tfoot");
	}
	closeTh():HTMLElement{
		return this.closeTagUnsafe("th");
	}
	closeThead():HTMLElement{
		return this.closeTagUnsafe("thead");
	}
	closeTime():HTMLElement{
		return this.closeTagUnsafe("time");
	}
	closeTitle():HTMLElement{
		return this.closeTagUnsafe("title");
	}
	closeTr():HTMLElement{
		return this.closeTagUnsafe("tr");
	}
	closeU():HTMLElement{
		return this.closeTagUnsafe("u");
	}
	closeUl():HTMLElement{
		return this.closeTagUnsafe("ul");
	}
	closeVar():HTMLElement{
		return this.closeTagUnsafe("var");
	}
	closeVideo():HTMLElement{
		return this.closeTagUnsafe("video");
	}

	openA():HTMLElement{
		return this.openTagUnsafe("a");
	}
	openAbbr():HTMLElement{
		return this.openTagUnsafe("abbr");
	}
	openAddress():HTMLElement{
		return this.openTagUnsafe("address");
	}
	openArticle():HTMLElement{
		return this.openTagUnsafe("article");
	}
	openAside():HTMLElement{
		return this.openTagUnsafe("aside");
	}
	openAudio():HTMLElement{
		return this.openTagUnsafe("audio");
	}
	openB():HTMLElement{
		return this.openTagUnsafe("b");
	}
	openBdi():HTMLElement{
		return this.openTagUnsafe("bdi");
	}
	openBdo():HTMLElement{
		return this.openTagUnsafe("bdo");
	}
	openBlockquote():HTMLElement{
		return this.openTagUnsafe("blockquote");
	}
	openBody():HTMLElement{
		return this.openTagUnsafe("body");
	}
	openBr():HTMLElement{
		return this.openTagUnsafe("br");
	}
	openButton():HTMLElement{
		return this.openTagUnsafe("button");
	}
	openCanvas():HTMLElement{
		return this.openTagUnsafe("canvas");
	}
	openCaption():HTMLElement{
		return this.openTagUnsafe("caption");
	}
	openCite():HTMLElement{
		return this.openTagUnsafe("cite");
	}
	openCode():HTMLElement{
		return this.openTagUnsafe("code");
	}
	openCol():HTMLElement{
		return this.openTagUnsafe("col");
	}
	openColgroup():HTMLElement{
		return this.openTagUnsafe("colgroup");
	}
	openData():HTMLElement{
		return this.openTagUnsafe("data");
	}
	openDatalist():HTMLElement{
		return this.openTagUnsafe("datalist");
	}
	openDd():HTMLElement{
		return this.openTagUnsafe("dd");
	}
	openDel():HTMLElement{
		return this.openTagUnsafe("del");
	}
	openDetails():HTMLElement{
		return this.openTagUnsafe("details");
	}
	openDfn():HTMLElement{
		return this.openTagUnsafe("dfn");
	}
	openDialog():HTMLElement{
		return this.openTagUnsafe("dialog");
	}
	openDiv():HTMLElement{
		return this.openTagUnsafe("div");
	}
	openDl():HTMLElement{
		return this.openTagUnsafe("dl");
	}
	openDt():HTMLElement{
		return this.openTagUnsafe("dt");
	}
	openEm():HTMLElement{
		return this.openTagUnsafe("em");
	}
	openFieldset():HTMLElement{
		return this.openTagUnsafe("fieldset");
	}
	openFigcaption():HTMLElement{
		return this.openTagUnsafe("figcaption");
	}
	openFigure():HTMLElement{
		return this.openTagUnsafe("figure");
	}
	openFooter():HTMLElement{
		return this.openTagUnsafe("footer");
	}
	openForm():HTMLElement{
		return this.openTagUnsafe("form");
	}
	openH1():HTMLElement{
		return this.openTagUnsafe("h1");
	}
	openHead():HTMLElement{
		return this.openTagUnsafe("head");
	}
	openHeader():HTMLElement{
		return this.openTagUnsafe("header");
	}
	openHtml():HTMLElement{
		return this.openTagUnsafe("html");
	}
	openI():HTMLElement{
		return this.openTagUnsafe("i");
	}
	openIframe():HTMLElement{
		return this.openTagUnsafe("iframe");
	}
	openIns():HTMLElement{
		return this.openTagUnsafe("ins");
	}
	openKbd():HTMLElement{
		return this.openTagUnsafe("kbd");
	}
	openLabel():HTMLElement{
		return this.openTagUnsafe("label");
	}
	openLegend():HTMLElement{
		return this.openTagUnsafe("legend");
	}
	openLi():HTMLElement{
		return this.openTagUnsafe("li");
	}
	openMain():HTMLElement{
		return this.openTagUnsafe("main");
	}
	openMap():HTMLElement{
		return this.openTagUnsafe("map");
	}
	openMark():HTMLElement{
		return this.openTagUnsafe("mark");
	}
	openMeter():HTMLElement{
		return this.openTagUnsafe("meter");
	}
	openNav():HTMLElement{
		return this.openTagUnsafe("nav");
	}
	openNoscript():HTMLElement{
		return this.openTagUnsafe("noscript");
	}
	openObject():HTMLElement{
		return this.openTagUnsafe("object");
	}
	openOl():HTMLElement{
		return this.openTagUnsafe("ol");
	}
	openOptgroup():HTMLElement{
		return this.openTagUnsafe("optgroup");
	}
	openOption():HTMLElement{
		return this.openTagUnsafe("option");
	}
	openOutput():HTMLElement{
		return this.openTagUnsafe("output");
	}
	openP():HTMLElement{
		return this.openTagUnsafe("p");
	}
	openPicture():HTMLElement{
		return this.openTagUnsafe("picture");
	}
	openPre():HTMLElement{
		return this.openTagUnsafe("pre");
	}
	openProgress():HTMLElement{
		return this.openTagUnsafe("progress");
	}
	openQ():HTMLElement{
		return this.openTagUnsafe("q");
	}
	openRp():HTMLElement{
		return this.openTagUnsafe("rp");
	}
	openRt():HTMLElement{
		return this.openTagUnsafe("rt");
	}
	openRuby():HTMLElement{
		return this.openTagUnsafe("ruby");
	}
	openS():HTMLElement{
		return this.openTagUnsafe("s");
	}
	openSamp():HTMLElement{
		return this.openTagUnsafe("samp");
	}
	openScript():HTMLElement{
		return this.openTagUnsafe("script");
	}
	openSection():HTMLElement{
		return this.openTagUnsafe("section");
	}
	openSelect():HTMLElement{
		return this.openTagUnsafe("select");
	}
	openSmall():HTMLElement{
		return this.openTagUnsafe("small");
	}
	openSource():HTMLElement{
		return this.openTagUnsafe("source");
	}
	openSpan():HTMLElement{
		return this.openTagUnsafe("span");
	}
	openStrong():HTMLElement{
		return this.openTagUnsafe("strong");
	}
	openStyle():HTMLElement{
		return this.openTagUnsafe("style");
	}
	openSub():HTMLElement{
		return this.openTagUnsafe("sub");
	}
	openSummary():HTMLElement{
		return this.openTagUnsafe("summary");
	}
	openSup():HTMLElement{
		return this.openTagUnsafe("sup");
	}
	openSvg():HTMLElement{
		return this.openTagUnsafe("svg");
	}
	openTable():HTMLElement{
		return this.openTagUnsafe("table");
	}
	openTbody():HTMLElement{
		return this.openTagUnsafe("tbody");
	}
	openTd():HTMLElement{
		return this.openTagUnsafe("td");
	}
	openTemplate():HTMLElement{
		return this.openTagUnsafe("template");
	}
	openTextarea():HTMLElement{
		return this.openTagUnsafe("textarea");
	}
	openTfoot():HTMLElement{
		return this.openTagUnsafe("tfoot");
	}
	openTh():HTMLElement{
		return this.openTagUnsafe("th");
	}
	openThead():HTMLElement{
		return this.openTagUnsafe("thead");
	}
	openTime():HTMLElement{
		return this.openTagUnsafe("time");
	}
	openTitle():HTMLElement{
		return this.openTagUnsafe("title");
	}
	openTr():HTMLElement{
		return this.openTagUnsafe("tr");
	}
	openU():HTMLElement{
		return this.openTagUnsafe("u");
	}
	openUl():HTMLElement{
		return this.openTagUnsafe("ul");
	}
	openVar():HTMLElement{
		return this.openTagUnsafe("var");
	}
	openVideo():HTMLElement{
		return this.openTagUnsafe("video");
	}
}