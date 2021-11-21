//Imports
import {Grabber, TableValues} from "./grabber";
import * as sys from "samara";
import * as uniques from "./ref/html_tags_unique.json";
import {exists} from "fs";

//Constants
const generatedMethods:string = "//Generated-Methods";
const url_css_functions:string = "https://www.w3schools.com/cssref/css_functions.asp";
const url_css_properties:string = "https://www.w3schools.com/cssref/default.asp";
const url_css_selectors:string = "https://www.w3schools.com/cssref/css_selectors.asp";
const url_html_event_atts:string = "https://www.w3schools.com/TAGS/ref_eventattributes.asp";
const url_html_global_atts:string = "https://www.w3schools.com/TAGS/ref_standardattributes.asp";
const url_html_tags:string = "https://www.w3schools.com/TAGS/default.ASP";

//Classes
export class Generator{
    //Declarations

    //Constructor
    constructor(){
    }

    //Methods
    async createCSSFunctions(){
        console.log("createCSSFunctions");
        let grabber:Grabber = new Grabber(url_css_functions);
        await grabber.read();
        let tableValues:TableValues = grabber.getTable("<h2>CSS Functions</h2>");
        let values:string[] = [];
        for(let row of tableValues.rows){
            //console.log("ROW0: " + row[0]);
            let value:string = row[0];
            value = sys.removeTags(value).trim().toLowerCase();
            //console.log("VALUE: " + value);
            values.push(value);
        }
        this.saveCSSFunctions(values);
    }

    async createCSSProperties(){
        console.log("createCSSProperties");
        let grabber:Grabber = new Grabber(url_css_properties);
        await grabber.read();
        let char:string = "A";
        let count:number = 0;
        let emptyProperties:string[] = [];
        let properties:CSSProperty[] = [];
        while(count < 26){
            //console.log("CHAR: " + char);
            if(grabber.sc.indexOf("<h2>" + char + "</h2>") > -1){
                //console.log("CHAR: " + char);
                let tableValues:TableValues = grabber.getTable("<h2>" + char + "</h2>");
                for(let row of tableValues.rows){
                    //console.log("ROW: " + row[0]);
                    if(row[0].indexOf("href") > -1){
                        let url:string = "https://www.w3schools.com/cssref/" + this.extractHREF(row[0]);
                        //console.log("URL: " + url);
                        let grabber:Grabber = new Grabber(url);
                        await grabber.read();
                        let name = extractName(grabber.sc);
                        //console.log("NAME: " + name);
                        let tableValues:TableValues = grabber.getTable("<h2>Property Values</h2>");
                        let subValues:string[] = [];
                        for(let attValues of tableValues.rows){
                            let value:string = attValues[0];
                            if(value.indexOf("<") > -1){
                                //console.log("TTT: " + value);
                                if(value.indexOf("<br>") < 0){
                                    value = "#" + sys.removeTags(value).trim().toLowerCase();
                                    subValues.push(value);
                                }else{
                                    let split:string[] = value.split("<br>");
                                    for(let value of split){
                                        value = value.trim().toLowerCase()
                                        if(!sys.isNull(value)){
                                            if(value.indexOf("<") > -1){
                                                value = "#" + sys.removeTags(value).trim().toLowerCase();
                                                subValues.push(value);
                                            }else{
                                                subValues.push(value.trim().toLowerCase());
                                            }
                                        }
                                    }
                                }
                            }else{
                                subValues.push(value.trim().toLowerCase());
                            }
                        }
                        //console.log("VALUE: " + subValues);
                        properties.push(new CSSProperty(name, subValues));
                    }else{
                        emptyProperties.push(row[0]);
                    }
                }
            }
            char = nextChar(char);
            count++;
        }
        this.saveCSSProperties(properties, emptyProperties);
        //console.log("PROPERTIES: " + properties);

        //SubFunctions
        function extractName(str:string):string{
            str = str.substring(str.indexOf("<h1>"), str.length);
            str = str.substring(str.indexOf("<span"), str.length);
            str = str.substring(str.indexOf(">") + 1, str.length);
            str = str.substring(0, str.indexOf("</span>"));
            return str.trim().toLowerCase();
        }

        function nextChar(char:string):string{
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    async createCSSSelectors(){
        console.log("createCSSSelectors");
        let grabber:Grabber = new Grabber(url_css_selectors);
        await grabber.read();
        let tableValues:TableValues = grabber.getTable("<h2>CSS Selectors</h2>");
        let values:string[] = [];
        for(let row of tableValues.rows){
            //console.log("ROW0: " + row[0]);
            let value:string = row[0];
            value = sys.removeTags(value).trim().toLowerCase();
            //console.log("VALUE: " + value);
            values.push(value);
        }
        this.saveCSSSelectors(values);
    }

    async createHTMLEventAttributes(){
        console.log("createHTMLEventAttributes");
        let grabber:Grabber = new Grabber(url_html_event_atts);
        await grabber.read();
        let events_window:string[] = extractEvents("<h2>Window Event Attributes</h2>");
        let events_form:string[] = extractEvents("<h2>Form Events</h2>");
        let events_keyboard:string[] = extractEvents("<h2>Keyboard Events</h2>");
        let events_mouse:string[] = extractEvents("<h2>Mouse Events</h2>");
        let events_drag:string[] = extractEvents("<h2>Drag Events</h2>");
        let events_clipboard:string[] = extractEvents("<h2>Clipboard Events</h2>");
        let events_media:string[] = extractEvents("<h2>Media Events</h2>");
        let events_misc:string[] = extractEvents("<h2>Misc Events</h2>");
        this.saveHTMLEventAttributes(events_window, events_form, events_keyboard, events_mouse, events_drag,
                                     events_clipboard, events_media, events_misc);

        //SubFunctions
        function extractEvents(search:string):string[]{
            let tableValues:TableValues = grabber.getTable(search);
            let events:string[] = [];
            for(let row of tableValues.rows){
                let event:string = row[0];
                if(event.indexOf("<") > -1){
                    event = event.substring(event.indexOf(">") + 1, event.length);
                    event = event.substring(0, event.indexOf("<"));
                }
                event = event.trim().toLowerCase();
                events.push(event);
            }
            return events;
        }
    }

    async createHTMLGlobalAttributes(){
        console.log("createHTMLGlobalAttributes");
        let grabber:Grabber = new Grabber(url_html_global_atts);
        await grabber.read();
        let tableValues:TableValues = grabber.getTable("<h2>HTML Global Attributes</h2>");
        let values:HTMLAttribute[] = [];
        for(let row of tableValues.rows){
            let url:string = "https://www.w3schools.com/TAGS/" + this.extractHREF(row[0]);
            let grabber:Grabber = new Grabber(url);
            await grabber.read();
            let name = extractName(grabber.sc);
            let tableValues:TableValues = grabber.getTable("<h2>Attribute Values</h2>");
            let subValues:string[] = [];
            for(let attValues of tableValues.rows){
                let attValue:string = attValues[0].toLowerCase();
                if(attValue.indexOf("<") > -1){
                    attValue = "#" + sys.removeTags(attValue);
                }
                subValues.push(attValue);
            }
            values.push(new HTMLAttribute(name, subValues));
        }
        this.saveHTMLGlobalAttributes(values);

        //SubFunctions
        function extractName(str:string):string{
            str = str.substring(str.indexOf("<h1>"), str.length);
            str = str.substring(str.indexOf("<span"), str.length);
            str = str.substring(str.indexOf(">") + 1, str.length);
            str = str.substring(0, str.indexOf("</span>"));
            return str.trim().toLowerCase();
        }
    }

    async createHTMLTags(){
        console.log("createHTMLTags");
        let grabber:Grabber = new Grabber(url_html_tags);
        await grabber.read();
        let tableValues:TableValues = grabber.getTable("<h2>HTML Tags Ordered Alphabetically</h2>");
        let values:HTMLTag[] = [];
        for(let row of tableValues.rows){
            if(row[1].indexOf("Not supported in HTML5.") < 0){
                let url:string = "https://www.w3schools.com/TAGS/" + this.extractHREF(row[0]);
                //console.log("URL: " + url);
                if(!this.isForbiddenURL(url)){
                    let grabber:Grabber = new Grabber(url);
                    await grabber.read();
                    let name:string = extractName(grabber.sc);
                    //console.log("Name: " + name);
                    let closed:Boolean = isClosed(grabber.sc, name);
                    //console.log("Closed: " + closed);
                    let events:Boolean = supportsEvents(grabber.sc, name);
                    //console.log("Events: " + events);
                    let globals:Boolean = supportsGlobals(grabber.sc, name);
                    //console.log("Globals: " + globals);
                    let unique:Boolean = isUnique(name);
                    //console.log("Unique: " + unique);
                    let tag:HTMLTag = new HTMLTag(name, closed, events, globals, unique);
                    let tableValues:TableValues = grabber.getTable("<h2>Attributes</h2>");
                    for(let tableValue of tableValues.rows){
                        //console.log("ATTS: " + tableValue[0] + " || " + tableValue[1]);
                        let attname:string = tableValue[0];
                        attname = attname.substring(attname.indexOf(">") + 1, attname.length);
                        attname = attname.substring(0, attname.indexOf("<")).trim().toLowerCase();
                        //console.log("Attname: " + attname);
                        let split:string[] = tableValue[1].split("<br>");
                        let vals:string[] = [];
                        for(let val of split){
                            if(!sys.isNull(val)){
                                val = val.trim().toLowerCase();
                                if(val.indexOf("<") > -1){
                                    val = "#" + sys.removeTags(val);
                                }
                                //console.log("Attval: " + val);
                                vals.push(val);
                            }
                        }
                        tag.addAttribute(new HTMLAttribute(attname, vals));
                    }
                    values.push(tag);
                }
            }
        }
        this.saveHTMLTags(values);

        //SubFunctions
        function extractName(sc:string):string{
            sc = sc.substring(sc.indexOf("<h1>"), sc.length);
            sc = sc.substring(sc.indexOf("&lt;") + 4, sc.length);
            sc = sc.substring(0, sc.indexOf("&gt;"));
            sc = sys.removeAll(sc, "!")
            return sc.trim().toLowerCase();
        }

        function isClosed(sc:string, name:string):Boolean{
            if(sc.indexOf("/" + name) > -1){
                return true;
            }else{
                return false;
            }
        }

        function isUnique(name:string):Boolean{
            for(let tag of uniques.tags){
                if(tag === name){
                    return true;
                }
            }
            return false;
        }

        function supportsEvents(sc:string, name:string):Boolean{
            if(sc.indexOf("<a href=\"ref_eventattributes.asp\">Event Attributes in HTML</a>") > -1){
                return true;
            }else{
                return false;
            }
        }

        function supportsGlobals(sc:string, name:string):Boolean{
            if(sc.indexOf("<a href=\"ref_standardattributes.asp\">Global Attributes in HTML</a>") > -1){
                return true;
            }else{
                return false;
            }
        }
    }

    extractHREF(str:string):string{
        if(str.indexOf("href=\"") > -1){
            str = str.substring(str.indexOf("href=\"") + 6, str.length);
            str = str.substring(0, str.indexOf("\""));
        }
        return str;
    }

    generateSourcecode(){
        console.log("generateSourcecode");
        let adds:string[] = [];
        let closes:string[] = [];
        let opens:string[] = [];
        let atts:string[] = [];
        let styles:string[] = [];
        let json = JSON.parse(sys.readFile("./lib/ref/html_tags.json"));
        for(let tag of json.tags){
            //console.log("TAG: " + tag.name);
            if(tag.closed){
                closes.push(tag.name);
                opens.push(tag.name);
            }else{
                adds.push(tag.name);
            }
            for(let att of tag.attributes){
                if(!exists(atts, att.name)){
                    //console.log("X1: " + att.name);
                    atts.push(att.name);
                }
            }
        }
        json = JSON.parse(sys.readFile("./lib/ref/html_event_attributes.json"));
        for(let att of json.attributes){
            if(!exists(atts, att.name)){
                //console.log("X2: " + att.name);
                atts.push(att.name);
            }
        }
        json = JSON.parse(sys.readFile("./lib/ref/html_global_attributes.json"));
        for(let att of json.attributes){
            if(!exists(atts, att.name)){
                //console.log("X3: " + att.name);
                atts.push(att.name);
            }
        }
        json = JSON.parse(sys.readFile("./lib/ref/css_properties.json"));
        for(let prop of json.properties){
            styles.push(prop.name);
        }
        for(let prop of json.emptyProperties){
            styles.push(prop);
        }
        //Tags
        let sc_add:sys.SourceObject = new sys.SourceObject();
        for(let data of adds){
            if(data !== "doctype"){
                sc_add.add("add" + createName(data) + "():HTMLElement{", 1);
                sc_add.add("return this.addTagUnsafe(\"" + data + "\");", 2);
                sc_add.add("}", 1);
            }
        }
        let sc_close:sys.SourceObject = new sys.SourceObject();
        for(let data of closes){
            sc_close.add("close" + createName(data) + "():HTMLElement{", 1);
            sc_close.add("return this.closeTagUnsafe(\"" + data + "\");", 2);
            sc_close.add("}", 1);
        }
        let sc_open:sys.SourceObject = new sys.SourceObject();
        for(let data of opens){
            sc_open.add("open" + createName(data) + "():HTMLElement{", 1);
            sc_open.add("return this.openTagUnsafe(\"" + data + "\");", 2);
            sc_open.add("}", 1);
        }
        let sc_ts:string = sys.readFile("./lib/html_sourcecode.ts");
        sc_ts = sc_ts.substring(0, sc_ts.indexOf(generatedMethods) + generatedMethods.length);
        sc_ts += "\n" + sc_add.getString();
        sc_ts += "\n" + sc_close.getString();
        sc_ts += "\n" + sc_open.getString();
        sc_ts += "}";
        sys.writeFile("./lib/html_sourcecode.ts", sc_ts);
        //Attributes & Styles
        let sc_att:sys.SourceObject = new sys.SourceObject();
        for(let data of atts){
            sc_att.add("addAttribute" + createName(data) + "(value:string):void{", 1);
            sc_att.add("this.addAttribute(\"" + data + "\", value);", 2);
            sc_att.add("}", 1);
        }
        let sc_style:sys.SourceObject = new sys.SourceObject();
        for(let data of styles){
            sc_style.add("addStyle" + createName(data) + "(value:string):void{", 1);
            sc_style.add("if(this.validateStyleValue(\"" + data + "\", value)){", 2);
            sc_style.add("this.addStyle(\"" + data + "\", value);", 3);
            sc_style.add("}", 2);
            sc_style.add("}", 1);
        }
        sc_ts = sys.readFile("./lib/html_element.ts");
        sc_ts = sc_ts.substring(0, sc_ts.indexOf(generatedMethods) + generatedMethods.length);
        sc_ts += "\n" + sc_att.getString();
        sc_ts += "\n" + sc_style.getString();
        sc_ts += "}";
        sys.writeFile("./lib/html_element.ts", sc_ts);


        //SubFunctions
        function createName(str:string):string{
            str = sys.removeAll(str, "@");
            //str = sys.removeAll(str, "*");
            if(str.indexOf("-") < 0){
                str = sys.capitalizeFirstLetter(str);
            }else{
                let parts:string[] = str.split("-");
                str = "";
                for(let part of parts){
                    str += sys.capitalizeFirstLetter(part);
                }
            }
            return str;
        }

        function exists(atts:string[], att:string):Boolean{
            if(att.indexOf("*") > -1){
                return true;
            }
            if(sys.isNull(att)){
                return true;
            }
            for(let a of atts){
                //console.log("EXISTS: " + att + " || " + a);
                if(a === att){
                    //console.log("EXISTS TRUE: " + att);
                    return true;
                }
            }
            return false;
        }
    }

    isForbiddenURL(url:string):Boolean{
        let forbidden:string[] = [];
        forbidden.push("https://www.w3schools.com/TAGS/tag_comment.asp");
        for(let f of forbidden){
            if(f === url){
                return true;
            }
        }
        return false;
    }

    saveCSSFunctions(functions:string[]):void{
        console.log("saveCSSFunctions");
        let json = new sys.JSONObject();
        json.addName("functions");
        json.openArray();
        for(let i:number = 0; i < functions.length; i++){
            json.add("\"" + functions[i] + "\"");
            i < functions.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        sys.writeFile("./lib/ref/css_functions.json", json.getString());
    }

    saveCSSProperties(properties:any[], emptyProperties:string[]):void{
        //console.log("saveCSSProperties");
        console.log("TEST: " + properties.length + "/" + emptyProperties.length);
        let json = new sys.JSONObject();
        json.addName("properties");
        json.openArray();
        for(let i:number = 0; i < properties.length; i++){
            json.openObject();
            json.addValue("name", properties[i].name, true, true);
            json.addName("values");
            json.openArray();
            let subValues = properties[i].values;
            for(let o:number = 0; o < subValues.length; o++){
                json.add("\"" + subValues[o] + "\"");
                o < subValues.length - 1 ? json.addComma() : {};
            }
            json.closeArray();
            json.closeObject();
            i < properties.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        json.addComma();
        json.addName("emptyProperties");
        json.openArray();
        for(let i:number = 0; i < emptyProperties.length; i++){
            json.add("\"" + emptyProperties[i] + "\"");
            i < emptyProperties.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        sys.writeFile("./lib/ref/css_properties.json", json.getString());
    }

    saveCSSSelectors(selectors:string[]):void{
        console.log("saveCSSSelectors");
        let json = new sys.JSONObject();
        json.addName("selectors");
        json.openArray();
        for(let i:number = 0; i < selectors.length; i++){
            json.add("\"" + selectors[i] + "\"");
            i < selectors.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        sys.writeFile("./lib/ref/css_selectors.json", json.getString());
    }

    saveHTMLEventAttributes(window:string[], form:string[], keyboard:string[], mouse:string[], drag:string[],
                            clipboard:string[], media:string[], misc:string[]):void{
        console.log("saveHTMLEventAttributes");
        let json = new sys.JSONObject();
        json.addName("attributes");
        json.openArray();
        json.add(get("window", window));
        json.add(get("form", form));
        json.add(get("keyboard", keyboard));
        json.add(get("mouse", mouse));
        json.add(get("drag", drag));
        json.add(get("clipboard", clipboard));
        json.add(get("media", media));
        json.add(get("misc", misc));
        json.closeArray();
        let str = json.getString();
        str = sys.replaceAll(str, "},]", "}]");
        sys.writeFile("./lib/ref/html_event_attributes.json", str);

        //SubFunctions
        function get(type:string, data:string[]):string{
            let json = new sys.JSONObject();
            for(let i:number = 0; i < data.length; i++){
                json.openObject();
                json.addValue("name", data[i], true, true);
                json.addValue("type", type, true, false);
                json.closeObject();
                json.addComma()
                //i < data.length - 1 ? json.addComma() : {};
            }
            let str = json.getString();
            return str.substring(1, str.length - 1);
        }
    }

    saveHTMLGlobalAttributes(values:HTMLAttribute[]):void{
        console.log("saveHTMLGlobalAttributes");
        let json = new sys.JSONObject();
        json.addName("attributes");
        json.openArray();
        for(let i:number = 0; i < values.length; i++){
            json.openObject();
            json.addValue("name", values[i].name, true, true);
            json.addName("types");
            json.openArray();
            let subValues = values[i].values;
            for(let o:number = 0; o < subValues.length; o++){
                json.add("\"" + subValues[o] + "\"");
                o < subValues.length - 1 ? json.addComma() : {};
            }
            json.closeArray();
            json.closeObject();
            i < values.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        sys.writeFile("./lib/ref/html_global_attributes.json", json.getString());
    }

    saveHTMLTags(values:HTMLTag[]):void{
        console.log("saveHTMLTags");
        let json = new sys.JSONObject();
        json.addName("tags");
        json.openArray();
        for(let i:number = 0; i < values.length; i++){
            json.openObject();
            json.addValue("name", values[i].name, true, true);
            json.addValue("closed", values[i].closed.toString(), false, true);
            json.addValue("events", values[i].events.toString(), false, true);
            json.addValue("globals", values[i].globals.toString(), false, true);
            json.addValue("unique", values[i].unique.toString(), false, true);
            json.addName("attributes");
            json.openArray();
            let subValues = values[i].attributes;
            for(let o:number = 0; o < subValues.length; o++){
                json.openObject();
                json.addValue("name", subValues[o].name, true, true);
                json.addName("types");
                json.openArray();
                let subSubValues = subValues[o].values;
                for(let u:number = 0; u < subSubValues.length; u++){
                    json.add("\"" + subSubValues[u] + "\"");
                    u < subSubValues.length - 1 ? json.addComma() : {};
                }
                json.closeArray();
                json.closeObject();
                o < subValues.length - 1 ? json.addComma() : {};
            }
            json.closeArray();
            json.closeObject();
            i < values.length - 1 ? json.addComma() : {};
        }
        json.closeArray();
        sys.writeFile("./lib/ref/html_tags.json", json.getString());
    }

    async start(download:Boolean){
        console.log("Start Generator");
        if(download){
            console.log("Start Downloads");
            await this.createHTMLGlobalAttributes();
            await this.createHTMLTags();
            await this.createHTMLEventAttributes();
            await this.createCSSProperties();
            await this.createCSSSelectors();
            await this.createCSSFunctions();
        }
        console.log("Start Sourcecode-Generation");
        this.generateSourcecode();

        //TODO: All

    }
}

//Internal Classes
class CSSProperty{
    name:string;
    values:string[];

    //Constructor
    constructor(name:string, values:string[]){
        this.name = name;
        this.values = values;
    }
}

class HTMLAttribute{
    //Declarations
    name:string;
    values:string[];

    //Constructor
    constructor(name:string, values:string[]){
        this.name = name;
        this.values = values;
    }
}

class HTMLTag{
    //Declarations
    attributes:HTMLAttribute[];
    closed:Boolean;
    events:Boolean;
    globals:Boolean;
    name:string;
    unique:Boolean;

    //Constructor
    constructor(name:string, closed:Boolean, events:Boolean, globals:Boolean, unique:Boolean){
        this.name = name;
        this.closed = closed;
        this.events = events;
        this.globals = globals;
        this.unique = unique;
        this.attributes = []
    }

    //Methods
    addAttribute(attribute:HTMLAttribute):void{
        this.attributes.push(attribute);
    }
}

