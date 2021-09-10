//Imports
import {HTMLElement} from "./html_element";
import {ObjectContainer} from "samara";
import {isClosedTag, isTag, validatePage} from "./html_validation";
import * as sys from "samara";
//import * as tags from "./ref/html/tags.json";

//Classes
export class HTMLSourceCode{
    //Declarations
    private _ids:number = 0;
    private _sc:HTMLElement[];

    //Constructor
    constructor(){
        this.sc = [];
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

    private addElement(element:HTMLElement):HTMLElement{
        this.sc.push(element);
        return element;
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
        tag.addAttributeID(id);
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

    private addTagUnsafe(tag:string):HTMLElement{
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

    getElement(id:number):HTMLElement{
        for(let element of this._sc){
            if(element.id === id){
                return element;
            }
        }
        return undefined;
    }

    getHTML():string{
        let html:string = "";
        let errors:ObjectContainer = validatePage(this.sc);
        if(errors.getLength() > 0){
            for(let error of errors.objects){
                html += "ERROR: " + error.object + "!\r\n";
            }
        }
        //Generate format String
        let lvl:number = 0;
        for(let element of this._sc){
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
        element.addAttribute("class", value);
        return element;
    }

    openTagWithID(tag:string, value:string):HTMLElement{
        let element:HTMLElement = this.openTag(tag);
        element.addAttribute("id", value);
        return element;
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

    //Generated Methods
    addArea():HTMLElement{
        return this.addTagUnsafe("area");
    }

    addBase():HTMLElement{
        return this.addTagUnsafe("base");
    }

    addBr():HTMLElement{
        return this.addTagUnsafe("br");
    }

    addCol():HTMLElement{
        return this.addTagUnsafe("col");
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

    addSource():HTMLElement{
        return this.addTagUnsafe("source");
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

    closeH2():HTMLElement{
        return this.closeTagUnsafe("h2");
    }

    closeH3():HTMLElement{
        return this.closeTagUnsafe("h3");
    }

    closeH4():HTMLElement{
        return this.closeTagUnsafe("h4");
    }

    closeH5():HTMLElement{
        return this.closeTagUnsafe("h5");
    }

    closeH6():HTMLElement{
        return this.closeTagUnsafe("h6");
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

    closeRuby():HTMLElement{
        return this.closeTagUnsafe("ruby");
    }

    closeRt():HTMLElement{
        return this.closeTagUnsafe("rt");
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

    openH2():HTMLElement{
        return this.openTagUnsafe("h2");
    }

    openH3():HTMLElement{
        return this.openTagUnsafe("h3");
    }

    openH4():HTMLElement{
        return this.openTagUnsafe("h4");
    }

    openH5():HTMLElement{
        return this.openTagUnsafe("h5");
    }

    openH6():HTMLElement{
        return this.openTagUnsafe("h6");
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

    openRuby():HTMLElement{
        return this.openTagUnsafe("ruby");
    }

    openRt():HTMLElement{
        return this.openTagUnsafe("rt");
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