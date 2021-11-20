//Imports
import {HTMLElement} from "./html_element";
import {HTMLSourceCode} from "./html_sourcecode";
import {isClosedTag, isTag, validatePage} from "./html_validation";
import {ObjectContainer} from "samara/index";

//Class
export class HTMLSourceCodeFunctions{
    //Declarations
    private _ids:number = 0;
    private _sc:HTMLElement[];

    //Constructor
    constructor(){
        this.sc = [];
    }

    //Methods
    addElement(element:HTMLElement):HTMLElement{
        this.sc.push(element);
        return element;
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

    getNewID():number{
        return this.ids++;
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
        return this.openTagUnsafe("area");
    }

    addBase():HTMLElement{
        return this.openTagUnsafe("base");
    }

    addBr():HTMLElement{
        return this.openTagUnsafe("br");
    }

    addCol():HTMLElement{
        return this.openTagUnsafe("col");
    }

    addEmbed():HTMLElement{
        return this.openTagUnsafe("embed");
    }

    addHr():HTMLElement{
        return this.openTagUnsafe("hr");
    }

    addImg():HTMLElement{
        return this.openTagUnsafe("img");
    }

    addInput():HTMLElement{
        return this.openTagUnsafe("input");
    }

    addLink():HTMLElement{
        return this.openTagUnsafe("link");
    }

    addMeta():HTMLElement{
        return this.openTagUnsafe("meta");
    }

    addParam():HTMLElement{
        return this.openTagUnsafe("param");
    }

    addSource():HTMLElement{
        return this.openTagUnsafe("source");
    }

    addTrack():HTMLElement{
        return this.openTagUnsafe("track");
    }

    addWbr():HTMLElement{
        return this.openTagUnsafe("wbr");
    }

    closeA():HTMLElement{
        return this.openTagUnsafe("a");
    }

    closeAbbr():HTMLElement{
        return this.openTagUnsafe("abbr");
    }

    closeAddress():HTMLElement{
        return this.openTagUnsafe("address");
    }

    closeArticle():HTMLElement{
        return this.openTagUnsafe("article");
    }

    closeAside():HTMLElement{
        return this.openTagUnsafe("aside");
    }

    closeAudio():HTMLElement{
        return this.openTagUnsafe("audio");
    }

    closeB():HTMLElement{
        return this.openTagUnsafe("b");
    }

    closeBdi():HTMLElement{
        return this.openTagUnsafe("bdi");
    }

    closeBdo():HTMLElement{
        return this.openTagUnsafe("bdo");
    }

    closeBlockquote():HTMLElement{
        return this.openTagUnsafe("blockquote");
    }

    closeBody():HTMLElement{
        return this.openTagUnsafe("body");
    }

    closeButton():HTMLElement{
        return this.openTagUnsafe("button");
    }

    closeCanvas():HTMLElement{
        return this.openTagUnsafe("canvas");
    }

    closeCaption():HTMLElement{
        return this.openTagUnsafe("caption");
    }

    closeCite():HTMLElement{
        return this.openTagUnsafe("cite");
    }

    closeCode():HTMLElement{
        return this.openTagUnsafe("code");
    }

    closeColgroup():HTMLElement{
        return this.openTagUnsafe("colgroup");
    }

    closeData():HTMLElement{
        return this.openTagUnsafe("data");
    }

    closeDatalist():HTMLElement{
        return this.openTagUnsafe("datalist");
    }

    closeDd():HTMLElement{
        return this.openTagUnsafe("dd");
    }

    closeDel():HTMLElement{
        return this.openTagUnsafe("del");
    }

    closeDetails():HTMLElement{
        return this.openTagUnsafe("details");
    }

    closeDfn():HTMLElement{
        return this.openTagUnsafe("dfn");
    }

    closeDialog():HTMLElement{
        return this.openTagUnsafe("dialog");
    }

    closeDiv():HTMLElement{
        return this.openTagUnsafe("div");
    }

    closeDl():HTMLElement{
        return this.openTagUnsafe("dl");
    }

    closeDt():HTMLElement{
        return this.openTagUnsafe("dt");
    }

    closeEm():HTMLElement{
        return this.openTagUnsafe("em");
    }

    closeFieldset():HTMLElement{
        return this.openTagUnsafe("fieldset");
    }

    closeFigcaption():HTMLElement{
        return this.openTagUnsafe("figcaption");
    }

    closeFigure():HTMLElement{
        return this.openTagUnsafe("figure");
    }

    closeFooter():HTMLElement{
        return this.openTagUnsafe("footer");
    }

    closeForm():HTMLElement{
        return this.openTagUnsafe("form");
    }

    closeH1():HTMLElement{
        return this.openTagUnsafe("h1");
    }

    closeHead():HTMLElement{
        return this.openTagUnsafe("head");
    }

    closeHeader():HTMLElement{
        return this.openTagUnsafe("header");
    }

    closeHtml():HTMLElement{
        return this.openTagUnsafe("html");
    }

    closeI():HTMLElement{
        return this.openTagUnsafe("i");
    }

    closeIframe():HTMLElement{
        return this.openTagUnsafe("iframe");
    }

    closeIns():HTMLElement{
        return this.openTagUnsafe("ins");
    }

    closeKbd():HTMLElement{
        return this.openTagUnsafe("kbd");
    }

    closeLabel():HTMLElement{
        return this.openTagUnsafe("label");
    }

    closeLegend():HTMLElement{
        return this.openTagUnsafe("legend");
    }

    closeLi():HTMLElement{
        return this.openTagUnsafe("li");
    }

    closeMain():HTMLElement{
        return this.openTagUnsafe("main");
    }

    closeMap():HTMLElement{
        return this.openTagUnsafe("map");
    }

    closeMark():HTMLElement{
        return this.openTagUnsafe("mark");
    }

    closeMeter():HTMLElement{
        return this.openTagUnsafe("meter");
    }

    closeNav():HTMLElement{
        return this.openTagUnsafe("nav");
    }

    closeNoscript():HTMLElement{
        return this.openTagUnsafe("noscript");
    }

    closeObject():HTMLElement{
        return this.openTagUnsafe("object");
    }

    closeOl():HTMLElement{
        return this.openTagUnsafe("ol");
    }

    closeOptgroup():HTMLElement{
        return this.openTagUnsafe("optgroup");
    }

    closeOption():HTMLElement{
        return this.openTagUnsafe("option");
    }

    closeOutput():HTMLElement{
        return this.openTagUnsafe("output");
    }

    closeP():HTMLElement{
        return this.openTagUnsafe("p");
    }

    closePicture():HTMLElement{
        return this.openTagUnsafe("picture");
    }

    closePre():HTMLElement{
        return this.openTagUnsafe("pre");
    }

    closeProgress():HTMLElement{
        return this.openTagUnsafe("progress");
    }

    closeQ():HTMLElement{
        return this.openTagUnsafe("q");
    }

    closeRp():HTMLElement{
        return this.openTagUnsafe("rp");
    }

    closeRt():HTMLElement{
        return this.openTagUnsafe("rt");
    }

    closeRuby():HTMLElement{
        return this.openTagUnsafe("ruby");
    }

    closeS():HTMLElement{
        return this.openTagUnsafe("s");
    }

    closeSamp():HTMLElement{
        return this.openTagUnsafe("samp");
    }

    closeScript():HTMLElement{
        return this.openTagUnsafe("script");
    }

    closeSection():HTMLElement{
        return this.openTagUnsafe("section");
    }

    closeSelect():HTMLElement{
        return this.openTagUnsafe("select");
    }

    closeSmall():HTMLElement{
        return this.openTagUnsafe("small");
    }

    closeSpan():HTMLElement{
        return this.openTagUnsafe("span");
    }

    closeStrong():HTMLElement{
        return this.openTagUnsafe("strong");
    }

    closeStyle():HTMLElement{
        return this.openTagUnsafe("style");
    }

    closeSub():HTMLElement{
        return this.openTagUnsafe("sub");
    }

    closeSummary():HTMLElement{
        return this.openTagUnsafe("summary");
    }

    closeSup():HTMLElement{
        return this.openTagUnsafe("sup");
    }

    closeSvg():HTMLElement{
        return this.openTagUnsafe("svg");
    }

    closeTable():HTMLElement{
        return this.openTagUnsafe("table");
    }

    closeTbody():HTMLElement{
        return this.openTagUnsafe("tbody");
    }

    closeTd():HTMLElement{
        return this.openTagUnsafe("td");
    }

    closeTemplate():HTMLElement{
        return this.openTagUnsafe("template");
    }

    closeTextarea():HTMLElement{
        return this.openTagUnsafe("textarea");
    }

    closeTfoot():HTMLElement{
        return this.openTagUnsafe("tfoot");
    }

    closeTh():HTMLElement{
        return this.openTagUnsafe("th");
    }

    closeThead():HTMLElement{
        return this.openTagUnsafe("thead");
    }

    closeTime():HTMLElement{
        return this.openTagUnsafe("time");
    }

    closeTitle():HTMLElement{
        return this.openTagUnsafe("title");
    }

    closeTr():HTMLElement{
        return this.openTagUnsafe("tr");
    }

    closeU():HTMLElement{
        return this.openTagUnsafe("u");
    }

    closeUl():HTMLElement{
        return this.openTagUnsafe("ul");
    }

    closeVar():HTMLElement{
        return this.openTagUnsafe("var");
    }

    closeVideo():HTMLElement{
        return this.openTagUnsafe("video");
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