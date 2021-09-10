//Import
import {HTMLTagAttribute} from "./html_tag_attribute";
import * as sys from "samara"

//Class
export class HTMLElement{
    //Declarations
    private _attributes:HTMLTagAttribute[];
    private _closed:Boolean;
    private _content:string;
    private _id:number;
    private _styles:HTMLTagAttribute[];
    private _tag:Boolean;

    //Constructor
    constructor(id:number, content:string, tag:Boolean, closed:Boolean){
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.attributes = [];
        this.styles = [];
        this.tag = tag;
    }

    //Methods
    addAttribute(name:string, value:string):void{
        if(this.tag && !this.closed && !sys.isNull(name)){
            this.attributes.push(new HTMLTagAttribute(name, value));
        }
    }

    addAttributeAction(value:string):void{
        this.addAttribute("action", value);
    }

    addAttributeAlt(value:string):void{
        this.addAttribute("alt", value);
    }

    addAttributeContent(value:string):void{
        this.addAttribute("content", value);
    }

    addAttributeFor(value:string):void{
        this.addAttribute("for", value);
    }

    addAttributeID(value:string):void{
        this.addAttribute("id", value);
    }

    addAttributeName(value:string):void{
        this.addAttribute("name", value);
    }

    addAttributeSrc(value:string):void{
        this.addAttribute("src", value);
    }

    addAttributeType(value:string):void{
        this.addAttribute("type", value);
    }

    addStyle(name:string, value:string):void{
        if(!sys.isNull(name) && !sys.isNull(value)){
            this.styles.push(new HTMLTagAttribute(name, value));
        }
    }

    addStyleBackgroundColor(value:string):void{
        this.addStyle("background-color", value);
    }

    addStyleDisplay(value:string):void{
        this.addStyle("display", value);
    }

    addStyleDisplayFlex():void{
        this.addStyle("display", "flex");
    }

    addStyleDisplayFlexColumn():void{
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("column");
    }

    addStyleDisplayFlexRow():void{
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("row");
    }

    addStyleFlexDirection(value:string):void{
        this.addStyle("flex-direction", value);
    }

    addStyleHeight(height:string):void{
        this.addStyle("height", height);
    }

    addStyleMargin(margin:string):void{
        this.addStyle("margin", margin);
    }

    addStyleMarginPadding(margin:string, padding:string):void{
        this.addStyleMargin(margin);
        this.addStylePadding(padding);
    }

    addStylePadding(padding:string):void{
        this.addStyle("padding", padding);
    }

    addStyleSizes(width:string, height:string):void{
        this.addStyleWidth(width);
        this.addStyleHeight(height);
    }

    addStyleWidth(width:string):void{
        this.addStyle("width", width);
    }

    getContent():string{
        if(!this.tag){
            return this.content;
        }else{
            if(this.closed){
                return "</" + this.content + ">";
            }else{
                let tag:string = this.content;
                for(let attribute of this.attributes){
                    if(sys.isNull(attribute.value)){
                        tag += " " + attribute.name;
                    }else{
                        tag += " " + attribute.name + "=\"" + attribute.value + "\"";
                    }
                }
                if(this.styles.length > 0){
                    tag += " style=\"";
                    let cnt:number = 0;
                    let space:string = "";
                    for(let style of this.styles){
                        if(cnt > 0){
                            space = " ";
                        }
                        tag += space + style.name + ": " + style.value + ";";
                        cnt++;
                    }
                    tag += "\"";
                }
                return "<" + tag + ">";
            }
        }
    }

    //Get-Methods
    get attributes():HTMLTagAttribute[]{
        return this._attributes;
    }

    get closed():Boolean{
        return this._closed;
    }

    get content():string{
        return this._content;
    }

    get id():number{
        return this._id;
    }

    get styles():HTMLTagAttribute[]{
        return this._styles;
    }

    get tag():Boolean{
        return this._tag;
    }

    //Set-Methods
    set attributes(attributes:HTMLTagAttribute[]){
        if(!this.closed){
            this._attributes = attributes;
        }
    }

    set closed(value:Boolean){
        this._closed = value;
    }

    set content(value:string){
        this._content = value;
    }

    set id(value:number){
        this._id = value;
    }

    set styles(styles:HTMLTagAttribute[]){
        this._styles = styles;
    }

    set tag(value:Boolean){
        this._tag = value;
    }
}