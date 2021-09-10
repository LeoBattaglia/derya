//Import
import {HTMLTagAttribute} from "./html_tag_attribute";
import * as sys from "samara";
import * as properties from "./ref/css/properties.json";

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

    addStyle(name:string, value:string):void{
        if(!sys.isNull(name) && !sys.isNull(value)){
            this.styles.push(new HTMLTagAttribute(name, value));
        }
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

    addStyleGap(value:string):void{
        this.addStyle("gap", value);
    }

    addStyleGaps(rowGap:string, columnGap:string):void{
        this.addStyleColumnGap(columnGap);
        this.addStyleRowGap(rowGap);
    }

    addStyleMarginPadding(margin:string, padding:string):void{
        this.addStyleMargin(margin);
        this.addStylePadding(padding);
    }

    addStyleSizes(width:string, height:string):void{
        this.addStyleWidth(width);
        this.addStyleHeight(height);
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

    validateStyleValue(name:string, value:string):Boolean{
        let property;
        for(let prop of properties.properties){
            if(prop.name === name){
                for(let val of prop.values){
                    if(val.value.indexOf("#") < 0){
                        if(val.value === value){
                            return true;
                        }
                    }else{

                        //TODO: Check-Functions


                        return true;
                    }
                }
            }
        }
        return false;
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

    //Generated Methods
    addAttributeAccesskey(value:string):void{
        this.addAttribute("accesskey", value);
    }

    addAttributeClass(value:string):void{
        this.addAttribute("class", value);
    }

    addAttributeContenteditable(value:string):void{
        this.addAttribute("contenteditable", value);
    }

    addAttributeData(value:string):void{
        this.addAttribute("data-*", value);
    }

    addAttributeDir(value:string):void{
        this.addAttribute("dir", value);
    }

    addAttributeDraggable(value:string):void{
        this.addAttribute("draggable", value);
    }

    addAttributeHidden(value:string):void{
        this.addAttribute("hidden", value);
    }

    addAttributeId(value:string):void{
        this.addAttribute("id", value);
    }

    addAttributeLang(value:string):void{
        this.addAttribute("lang", value);
    }

    addAttributeSpellcheck(value:string):void{
        this.addAttribute("spellcheck", value);
    }

    addAttributeStyle(value:string):void{
        this.addAttribute("style", value);
    }

    addAttributeTabindex(value:string):void{
        this.addAttribute("tabindex", value);
    }

    addAttributeTitle(value:string):void{
        this.addAttribute("title", value);
    }

    addAttributeTranslate(value:string):void{
        this.addAttribute("translate", value);
    }

    addAttributeDownload(value:string):void{
        this.addAttribute("download", value);
    }

    addAttributeHref(value:string):void{
        this.addAttribute("href", value);
    }

    addAttributeHreflang(value:string):void{
        this.addAttribute("hreflang", value);
    }

    addAttributeMedia(value:string):void{
        this.addAttribute("media", value);
    }

    addAttributePing(value:string):void{
        this.addAttribute("ping", value);
    }

    addAttributeReferrerpolicy(value:string):void{
        this.addAttribute("referrerpolicy", value);
    }

    addAttributeRel(value:string):void{
        this.addAttribute("rel", value);
    }

    addAttributeTarget(value:string):void{
        this.addAttribute("target", value);
    }

    addAttributeType(value:string):void{
        this.addAttribute("type", value);
    }

    addAttributeAlt(value:string):void{
        this.addAttribute("alt", value);
    }

    addAttributeCoords(value:string):void{
        this.addAttribute("coords", value);
    }

    addAttributeShape(value:string):void{
        this.addAttribute("shape", value);
    }

    addAttributeAutoplay(value:string):void{
        this.addAttribute("autoplay", value);
    }

    addAttributeControls(value:string):void{
        this.addAttribute("controls", value);
    }

    addAttributeLoop(value:string):void{
        this.addAttribute("loop", value);
    }

    addAttributeMuted(value:string):void{
        this.addAttribute("muted", value);
    }

    addAttributePreload(value:string):void{
        this.addAttribute("preload", value);
    }

    addAttributeSrc(value:string):void{
        this.addAttribute("src", value);
    }

    addAttributeCite(value:string):void{
        this.addAttribute("cite", value);
    }

    addAttributeAutofocus(value:string):void{
        this.addAttribute("autofocus", value);
    }

    addAttributeDisabled(value:string):void{
        this.addAttribute("disabled", value);
    }

    addAttributeForm(value:string):void{
        this.addAttribute("form", value);
    }

    addAttributeFormaction(value:string):void{
        this.addAttribute("formaction", value);
    }

    addAttributeFormenctype(value:string):void{
        this.addAttribute("formenctype", value);
    }

    addAttributeFormmethod(value:string):void{
        this.addAttribute("formmethod", value);
    }

    addAttributeFormnovalidate(value:string):void{
        this.addAttribute("formnovalidate", value);
    }

    addAttributeFormtarget(value:string):void{
        this.addAttribute("formtarget", value);
    }

    addAttributeName(value:string):void{
        this.addAttribute("name", value);
    }

    addAttributeValue(value:string):void{
        this.addAttribute("value", value);
    }

    addAttributeHeight(value:string):void{
        this.addAttribute("height", value);
    }

    addAttributeWidth(value:string):void{
        this.addAttribute("width", value);
    }

    addAttributeSpan(value:string):void{
        this.addAttribute("span", value);
    }

    addAttributeDatetime(value:string):void{
        this.addAttribute("datetime", value);
    }

    addAttributeOpen(value:string):void{
        this.addAttribute("open", value);
    }

    addAttributeAcceptCharset(value:string):void{
        this.addAttribute("accept-charset", value);
    }

    addAttributeActionCharset(value:string):void{
        this.addAttribute("action-charset", value);
    }

    addAttributeAutocomplete(value:string):void{
        this.addAttribute("autocomplete", value);
    }

    addAttributeEnctype(value:string):void{
        this.addAttribute("enctype", value);
    }

    addAttributeMethod(value:string):void{
        this.addAttribute("method", value);
    }

    addAttributeNovalidate(value:string):void{
        this.addAttribute("novalidate", value);
    }

    addAttributeCrossorigin(value:string):void{
        this.addAttribute("crossorigin", value);
    }

    addAttributeIsmap(value:string):void{
        this.addAttribute("ismap", value);
    }

    addAttributeLoading(value:string):void{
        this.addAttribute("loading", value);
    }

    addAttributeLongdesc(value:string):void{
        this.addAttribute("longdesc", value);
    }

    addAttributeSizes(value:string):void{
        this.addAttribute("sizes", value);
    }

    addAttributeSrcset(value:string):void{
        this.addAttribute("srcset", value);
    }

    addAttributeUsemap(value:string):void{
        this.addAttribute("usemap", value);
    }

    addAttributeAccept(value:string):void{
        this.addAttribute("accept", value);
    }

    addAttributeChecked(value:string):void{
        this.addAttribute("checked", value);
    }

    addAttributeDirname(value:string):void{
        this.addAttribute("dirname", value);
    }

    addAttributeList(value:string):void{
        this.addAttribute("list", value);
    }

    addAttributeMax(value:string):void{
        this.addAttribute("max", value);
    }

    addAttributeMaxlength(value:string):void{
        this.addAttribute("maxlength", value);
    }

    addAttributeMin(value:string):void{
        this.addAttribute("min", value);
    }

    addAttributeMinlength(value:string):void{
        this.addAttribute("minlength", value);
    }

    addAttributeMultiple(value:string):void{
        this.addAttribute("multiple", value);
    }

    addAttributePattern(value:string):void{
        this.addAttribute("pattern", value);
    }

    addAttributePlaceholder(value:string):void{
        this.addAttribute("placeholder", value);
    }

    addAttributeReadonly(value:string):void{
        this.addAttribute("readonly", value);
    }

    addAttributeRequired(value:string):void{
        this.addAttribute("required", value);
    }

    addAttributeSize(value:string):void{
        this.addAttribute("size", value);
    }

    addAttributeStep(value:string):void{
        this.addAttribute("step", value);
    }

    addAttributeFor(value:string):void{
        this.addAttribute("for", value);
    }

    addAttributeCharset(value:string):void{
        this.addAttribute("charset", value);
    }

    addAttributeContent(value:string):void{
        this.addAttribute("content", value);
    }

    addAttributeHttpEquiv(value:string):void{
        this.addAttribute("http-equiv", value);
    }

    addAttributeHigh(value:string):void{
        this.addAttribute("high", value);
    }

    addAttributeLow(value:string):void{
        this.addAttribute("low", value);
    }

    addAttributeOptimum(value:string):void{
        this.addAttribute("optimum", value);
    }

    addAttributeTypemustmatch(value:string):void{
        this.addAttribute("typemustmatch", value);
    }

    addAttributeReversed(value:string):void{
        this.addAttribute("reversed", value);
    }

    addAttributeStart(value:string):void{
        this.addAttribute("start", value);
    }

    addAttributeLabel(value:string):void{
        this.addAttribute("label", value);
    }

    addAttributeSelected(value:string):void{
        this.addAttribute("selected", value);
    }

    addAttributeAsync(value:string):void{
        this.addAttribute("async", value);
    }

    addAttributeDefer(value:string):void{
        this.addAttribute("defer", value);
    }

    addAttributeIntegrity(value:string):void{
        this.addAttribute("integrity", value);
    }

    addAttributeNomodule(value:string):void{
        this.addAttribute("nomodule", value);
    }

    addAttributeColspan(value:string):void{
        this.addAttribute("colspan", value);
    }

    addAttributeHeaders(value:string):void{
        this.addAttribute("headers", value);
    }

    addAttributeRowspan(value:string):void{
        this.addAttribute("rowspan", value);
    }

    addAttributeCols(value:string):void{
        this.addAttribute("cols", value);
    }

    addAttributeRows(value:string):void{
        this.addAttribute("rows", value);
    }

    addAttributeWrap(value:string):void{
        this.addAttribute("wrap", value);
    }

    addAttributeAbbr(value:string):void{
        this.addAttribute("abbr", value);
    }

    addAttributeScope(value:string):void{
        this.addAttribute("scope", value);
    }

    addAttributeDefault(value:string):void{
        this.addAttribute("default", value);
    }

    addAttributeKind(value:string):void{
        this.addAttribute("kind", value);
    }

    addAttributeSrclang(value:string):void{
        this.addAttribute("srclang", value);
    }

    addAttributePoster(value:string):void{
        this.addAttribute("poster", value);
    }

    addStyleAlignContent(value:string):void{
        if(this.validateStyleValue("align-content", value)){
            this.addStyle("align-content", value);
        }
    }

    addStyleAlignItems(value:string):void{
        if(this.validateStyleValue("align-items", value)){
            this.addStyle("align-items", value);
        }
    }

    addStyleAlignSelf(value:string):void{
        if(this.validateStyleValue("align-self", value)){
            this.addStyle("align-self", value);
        }
    }

    addStyleAll(value:string):void{
        if(this.validateStyleValue("all", value)){
            this.addStyle("all", value);
        }
    }

    addStyleAnimation(value:string):void{
        if(this.validateStyleValue("animation", value)){
            this.addStyle("animation", value);
        }
    }

    addStyleAnimationDelay(value:string):void{
        if(this.validateStyleValue("animation-delay", value)){
            this.addStyle("animation-delay", value);
        }
    }

    addStyleAnimationDirection(value:string):void{
        if(this.validateStyleValue("animation-direction", value)){
            this.addStyle("animation-direction", value);
        }
    }

    addStyleAnimationDuration(value:string):void{
        if(this.validateStyleValue("animation-duration", value)){
            this.addStyle("animation-duration", value);
        }
    }

    addStyleAnimationFillMode(value:string):void{
        if(this.validateStyleValue("animation-fill-mode", value)){
            this.addStyle("animation-fill-mode", value);
        }
    }

    addStyleAnimationIterationCount(value:string):void{
        if(this.validateStyleValue("animation-iteration-count", value)){
            this.addStyle("animation-iteration-count", value);
        }
    }

    addStyleAnimationName(value:string):void{
        if(this.validateStyleValue("animation-name", value)){
            this.addStyle("animation-name", value);
        }
    }

    addStyleAnimationPlayState(value:string):void{
        if(this.validateStyleValue("animation-play-state", value)){
            this.addStyle("animation-play-state", value);
        }
    }

    addStyleAnimationTimingFunction(value:string):void{
        if(this.validateStyleValue("animation-timing-function", value)){
            this.addStyle("animation-timing-function", value);
        }
    }

    addStyleBackfaceVisibility(value:string):void{
        if(this.validateStyleValue("backface-visibility", value)){
            this.addStyle("backface-visibility", value);
        }
    }

    addStyleBackground(value:string):void{
        if(this.validateStyleValue("background", value)){
            this.addStyle("background", value);
        }
    }

    addStyleBackgroundAttachment(value:string):void{
        if(this.validateStyleValue("background-attachment", value)){
            this.addStyle("background-attachment", value);
        }
    }

    addStyleBackgroundBlendMode(value:string):void{
        if(this.validateStyleValue("background-blend-mode", value)){
            this.addStyle("background-blend-mode", value);
        }
    }

    addStyleBackgroundClip(value:string):void{
        if(this.validateStyleValue("background-clip", value)){
            this.addStyle("background-clip", value);
        }
    }

    addStyleBackgroundColor(value:string):void{
        if(this.validateStyleValue("background-color", value)){
            this.addStyle("background-color", value);
        }
    }

    addStyleBackgroundImage(value:string):void{
        if(this.validateStyleValue("background-image", value)){
            this.addStyle("background-image", value);
        }
    }

    addStyleBackgroundOrigin(value:string):void{
        if(this.validateStyleValue("background-origin", value)){
            this.addStyle("background-origin", value);
        }
    }

    addStyleBackgroundPosition(value:string):void{
        if(this.validateStyleValue("background-position", value)){
            this.addStyle("background-position", value);
        }
    }

    addStyleBackgroundRepeat(value:string):void{
        if(this.validateStyleValue("background-repeat", value)){
            this.addStyle("background-repeat", value);
        }
    }

    addStyleBackgroundSize(value:string):void{
        if(this.validateStyleValue("background-size", value)){
            this.addStyle("background-size", value);
        }
    }

    addStyleBorder(value:string):void{
        if(this.validateStyleValue("border", value)){
            this.addStyle("border", value);
        }
    }

    addStyleBorderBottom(value:string):void{
        if(this.validateStyleValue("border-bottom", value)){
            this.addStyle("border-bottom", value);
        }
    }

    addStyleBorderBottomColor(value:string):void{
        if(this.validateStyleValue("border-bottom-color", value)){
            this.addStyle("border-bottom-color", value);
        }
    }

    addStyleBorderBottomLeftRadius(value:string):void{
        if(this.validateStyleValue("border-bottom-left-radius", value)){
            this.addStyle("border-bottom-left-radius", value);
        }
    }

    addStyleBorderBottomRightRadius(value:string):void{
        if(this.validateStyleValue("border-bottom-right-radius", value)){
            this.addStyle("border-bottom-right-radius", value);
        }
    }

    addStyleBorderBottomStyle(value:string):void{
        if(this.validateStyleValue("border-bottom-style", value)){
            this.addStyle("border-bottom-style", value);
        }
    }

    addStyleBorderBottomWidth(value:string):void{
        if(this.validateStyleValue("border-bottom-width", value)){
            this.addStyle("border-bottom-width", value);
        }
    }

    addStyleBorderCollapse(value:string):void{
        if(this.validateStyleValue("border-collapse", value)){
            this.addStyle("border-collapse", value);
        }
    }

    addStyleBorderColor(value:string):void{
        if(this.validateStyleValue("border-color", value)){
            this.addStyle("border-color", value);
        }
    }

    addStyleBorderImage(value:string):void{
        if(this.validateStyleValue("border-image", value)){
            this.addStyle("border-image", value);
        }
    }

    addStyleBorderImageOutset(value:string):void{
        if(this.validateStyleValue("border-image-outset", value)){
            this.addStyle("border-image-outset", value);
        }
    }

    addStyleBorderImageRepeat(value:string):void{
        if(this.validateStyleValue("border-image-repeat", value)){
            this.addStyle("border-image-repeat", value);
        }
    }

    addStyleBorderImageSlice(value:string):void{
        if(this.validateStyleValue("border-image-slice", value)){
            this.addStyle("border-image-slice", value);
        }
    }

    addStyleBorderImageSource(value:string):void{
        if(this.validateStyleValue("border-image-source", value)){
            this.addStyle("border-image-source", value);
        }
    }

    addStyleBorderImageWidth(value:string):void{
        if(this.validateStyleValue("border-image-width", value)){
            this.addStyle("border-image-width", value);
        }
    }

    addStyleBorderLeft(value:string):void{
        if(this.validateStyleValue("border-left", value)){
            this.addStyle("border-left", value);
        }
    }

    addStyleBorderLeftColor(value:string):void{
        if(this.validateStyleValue("border-left-color", value)){
            this.addStyle("border-left-color", value);
        }
    }

    addStyleBorderLeftStyle(value:string):void{
        if(this.validateStyleValue("border-left-style", value)){
            this.addStyle("border-left-style", value);
        }
    }

    addStyleBorderLeftWidth(value:string):void{
        if(this.validateStyleValue("border-left-width", value)){
            this.addStyle("border-left-width", value);
        }
    }

    addStyleBorderRadius(value:string):void{
        if(this.validateStyleValue("border-radius", value)){
            this.addStyle("border-radius", value);
        }
    }

    addStyleBorderRight(value:string):void{
        if(this.validateStyleValue("border-right", value)){
            this.addStyle("border-right", value);
        }
    }

    addStyleBorderRightColor(value:string):void{
        if(this.validateStyleValue("border-right-color", value)){
            this.addStyle("border-right-color", value);
        }
    }

    addStyleBorderRightStyle(value:string):void{
        if(this.validateStyleValue("border-right-style", value)){
            this.addStyle("border-right-style", value);
        }
    }

    addStyleBorderRightWidth(value:string):void{
        if(this.validateStyleValue("border-right-width", value)){
            this.addStyle("border-right-width", value);
        }
    }

    addStyleBorderSpacing(value:string):void{
        if(this.validateStyleValue("border-spacing", value)){
            this.addStyle("border-spacing", value);
        }
    }

    addStyleBorderStyle(value:string):void{
        if(this.validateStyleValue("border-style", value)){
            this.addStyle("border-style", value);
        }
    }

    addStyleBorderTop(value:string):void{
        if(this.validateStyleValue("border-top", value)){
            this.addStyle("border-top", value);
        }
    }

    addStyleBorderTopColor(value:string):void{
        if(this.validateStyleValue("border-top-color", value)){
            this.addStyle("border-top-color", value);
        }
    }

    addStyleBorderTopLeftRadius(value:string):void{
        if(this.validateStyleValue("border-top-left-radius", value)){
            this.addStyle("border-top-left-radius", value);
        }
    }

    addStyleBorderTopRightRadius(value:string):void{
        if(this.validateStyleValue("border-top-right-radius", value)){
            this.addStyle("border-top-right-radius", value);
        }
    }

    addStyleBorderTopStyle(value:string):void{
        if(this.validateStyleValue("border-top-style", value)){
            this.addStyle("border-top-style", value);
        }
    }

    addStyleBorderTopWidth(value:string):void{
        if(this.validateStyleValue("border-top-width", value)){
            this.addStyle("border-top-width", value);
        }
    }

    addStyleBottom(value:string):void{
        if(this.validateStyleValue("bottom", value)){
            this.addStyle("bottom", value);
        }
    }

    addStyleBoxDecorationBreak(value:string):void{
        if(this.validateStyleValue("box-decoration-break", value)){
            this.addStyle("box-decoration-break", value);
        }
    }

    addStyleBoxShadow(value:string):void{
        if(this.validateStyleValue("box-shadow", value)){
            this.addStyle("box-shadow", value);
        }
    }

    addStyleBoxSizing(value:string):void{
        if(this.validateStyleValue("box-sizing", value)){
            this.addStyle("box-sizing", value);
        }
    }

    addStyleBreakAfter(value:string):void{
        if(this.validateStyleValue("break-after", value)){
            this.addStyle("break-after", value);
        }
    }

    addStyleBreakBefore(value:string):void{
        if(this.validateStyleValue("break-before", value)){
            this.addStyle("break-before", value);
        }
    }

    addStyleBreakInside(value:string):void{
        if(this.validateStyleValue("break-inside", value)){
            this.addStyle("break-inside", value);
        }
    }

    addStyleCaptionSide(value:string):void{
        if(this.validateStyleValue("caption-side", value)){
            this.addStyle("caption-side", value);
        }
    }

    addStyleCaretColor(value:string):void{
        if(this.validateStyleValue("caret-color", value)){
            this.addStyle("caret-color", value);
        }
    }

    addStyleCharset(value:string):void{
        if(this.validateStyleValue("@charset", value)){
            this.addStyle("@charset", value);
        }
    }

    addStyleClear(value:string):void{
        if(this.validateStyleValue("clear", value)){
            this.addStyle("clear", value);
        }
    }

    addStyleClip(value:string):void{
        if(this.validateStyleValue("clip", value)){
            this.addStyle("clip", value);
        }
    }

    addStyleColor(value:string):void{
        if(this.validateStyleValue("color", value)){
            this.addStyle("color", value);
        }
    }

    addStyleColumnCount(value:string):void{
        if(this.validateStyleValue("column-count", value)){
            this.addStyle("column-count", value);
        }
    }

    addStyleColumnFill(value:string):void{
        if(this.validateStyleValue("column-fill", value)){
            this.addStyle("column-fill", value);
        }
    }

    addStyleColumnGap(value:string):void{
        if(this.validateStyleValue("column-gap", value)){
            this.addStyle("column-gap", value);
        }
    }

    addStyleColumnRule(value:string):void{
        if(this.validateStyleValue("column-rule", value)){
            this.addStyle("column-rule", value);
        }
    }

    addStyleColumnRuleColor(value:string):void{
        if(this.validateStyleValue("column-rule-color", value)){
            this.addStyle("column-rule-color", value);
        }
    }

    addStyleColumnRuleStyle(value:string):void{
        if(this.validateStyleValue("column-rule-style", value)){
            this.addStyle("column-rule-style", value);
        }
    }

    addStyleColumnRuleWidth(value:string):void{
        if(this.validateStyleValue("column-rule-width", value)){
            this.addStyle("column-rule-width", value);
        }
    }

    addStyleColumnSpan(value:string):void{
        if(this.validateStyleValue("column-span", value)){
            this.addStyle("column-span", value);
        }
    }

    addStyleColumnWidth(value:string):void{
        if(this.validateStyleValue("column-width", value)){
            this.addStyle("column-width", value);
        }
    }

    addStyleColumns(value:string):void{
        if(this.validateStyleValue("columns", value)){
            this.addStyle("columns", value);
        }
    }

    addStyleContent(value:string):void{
        if(this.validateStyleValue("content", value)){
            this.addStyle("content", value);
        }
    }

    addStyleCounterIncrement(value:string):void{
        if(this.validateStyleValue("counter-increment", value)){
            this.addStyle("counter-increment", value);
        }
    }

    addStyleCounterReset(value:string):void{
        if(this.validateStyleValue("counter-reset", value)){
            this.addStyle("counter-reset", value);
        }
    }

    addStyleCursor(value:string):void{
        if(this.validateStyleValue("cursor", value)){
            this.addStyle("cursor", value);
        }
    }

    addStyleDirection(value:string):void{
        if(this.validateStyleValue("direction", value)){
            this.addStyle("direction", value);
        }
    }

    addStyleDisplay(value:string):void{
        if(this.validateStyleValue("display", value)){
            this.addStyle("display", value);
        }
    }

    addStyleEmptyCells(value:string):void{
        if(this.validateStyleValue("empty-cells", value)){
            this.addStyle("empty-cells", value);
        }
    }

    addStyleFilter(value:string):void{
        if(this.validateStyleValue("filter", value)){
            this.addStyle("filter", value);
        }
    }

    addStyleFlex(value:string):void{
        if(this.validateStyleValue("flex", value)){
            this.addStyle("flex", value);
        }
    }

    addStyleFlexBasis(value:string):void{
        if(this.validateStyleValue("flex-basis", value)){
            this.addStyle("flex-basis", value);
        }
    }

    addStyleFlexDirection(value:string):void{
        if(this.validateStyleValue("flex-direction", value)){
            this.addStyle("flex-direction", value);
        }
    }

    addStyleFlexFlow(value:string):void{
        if(this.validateStyleValue("flex-flow", value)){
            this.addStyle("flex-flow", value);
        }
    }

    addStyleFlexGrow(value:string):void{
        if(this.validateStyleValue("flex-grow", value)){
            this.addStyle("flex-grow", value);
        }
    }

    addStyleFlexShrink(value:string):void{
        if(this.validateStyleValue("flex-shrink", value)){
            this.addStyle("flex-shrink", value);
        }
    }

    addStyleFlexWrap(value:string):void{
        if(this.validateStyleValue("flex-wrap", value)){
            this.addStyle("flex-wrap", value);
        }
    }

    addStyleFloat(value:string):void{
        if(this.validateStyleValue("float", value)){
            this.addStyle("float", value);
        }
    }

    addStyleFont(value:string):void{
        if(this.validateStyleValue("font", value)){
            this.addStyle("font", value);
        }
    }

    addStyleFontFace(value:string):void{
        if(this.validateStyleValue("@font-face", value)){
            this.addStyle("@font-face", value);
        }
    }

    addStyleFontFamily(value:string):void{
        if(this.validateStyleValue("font-family", value)){
            this.addStyle("font-family", value);
        }
    }

    addStyleFontFeatureSettings(value:string):void{
        if(this.validateStyleValue("font-feature-settings", value)){
            this.addStyle("font-feature-settings", value);
        }
    }

    addStyleFontKerning(value:string):void{
        if(this.validateStyleValue("font-kerning", value)){
            this.addStyle("font-kerning", value);
        }
    }

    addStyleFontSize(value:string):void{
        if(this.validateStyleValue("font-size", value)){
            this.addStyle("font-size", value);
        }
    }

    addStyleFontSizeAdjust(value:string):void{
        if(this.validateStyleValue("font-size-adjust", value)){
            this.addStyle("font-size-adjust", value);
        }
    }

    addStyleFontStretch(value:string):void{
        if(this.validateStyleValue("font-stretch", value)){
            this.addStyle("font-stretch", value);
        }
    }

    addStyleFontStyle(value:string):void{
        if(this.validateStyleValue("font-style", value)){
            this.addStyle("font-style", value);
        }
    }

    addStyleFontVariant(value:string):void{
        if(this.validateStyleValue("font-variant", value)){
            this.addStyle("font-variant", value);
        }
    }

    addStyleFontVariantCaps(value:string):void{
        if(this.validateStyleValue("font-variant-caps", value)){
            this.addStyle("font-variant-caps", value);
        }
    }

    addStyleFontWeight(value:string):void{
        if(this.validateStyleValue("font-weight", value)){
            this.addStyle("font-weight", value);
        }
    }

    addStyleGrid(value:string):void{
        if(this.validateStyleValue("grid", value)){
            this.addStyle("grid", value);
        }
    }

    addStyleGridArea(value:string):void{
        if(this.validateStyleValue("grid-area", value)){
            this.addStyle("grid-area", value);
        }
    }

    addStyleGridAutoColumns(value:string):void{
        if(this.validateStyleValue("grid-auto-columns", value)){
            this.addStyle("grid-auto-columns", value);
        }
    }

    addStyleGridAutoFlow(value:string):void{
        if(this.validateStyleValue("grid-auto-flow", value)){
            this.addStyle("grid-auto-flow", value);
        }
    }

    addStyleGridAutoRows(value:string):void{
        if(this.validateStyleValue("grid-auto-rows", value)){
            this.addStyle("grid-auto-rows", value);
        }
    }

    addStyleGridColumn(value:string):void{
        if(this.validateStyleValue("grid-column", value)){
            this.addStyle("grid-column", value);
        }
    }

    addStyleGridColumnEnd(value:string):void{
        if(this.validateStyleValue("grid-column-end", value)){
            this.addStyle("grid-column-end", value);
        }
    }

    addStyleGridColumnGap(value:string):void{
        if(this.validateStyleValue("grid-column-gap", value)){
            this.addStyle("grid-column-gap", value);
        }
    }

    addStyleGridColumnStart(value:string):void{
        if(this.validateStyleValue("grid-column-start", value)){
            this.addStyle("grid-column-start", value);
        }
    }

    addStyleGridGap(value:string):void{
        if(this.validateStyleValue("grid-gap", value)){
            this.addStyle("grid-gap", value);
        }
    }

    addStyleGridRow(value:string):void{
        if(this.validateStyleValue("grid-row", value)){
            this.addStyle("grid-row", value);
        }
    }

    addStyleGridRowEnd(value:string):void{
        if(this.validateStyleValue("grid-row-end", value)){
            this.addStyle("grid-row-end", value);
        }
    }

    addStyleGridRowGap(value:string):void{
        if(this.validateStyleValue("grid-row-gap", value)){
            this.addStyle("grid-row-gap", value);
        }
    }

    addStyleGridRowStart(value:string):void{
        if(this.validateStyleValue("grid-row-start", value)){
            this.addStyle("grid-row-start", value);
        }
    }

    addStyleGridTemplate(value:string):void{
        if(this.validateStyleValue("grid-template", value)){
            this.addStyle("grid-template", value);
        }
    }

    addStyleGridTemplateAreas(value:string):void{
        if(this.validateStyleValue("grid-template-areas", value)){
            this.addStyle("grid-template-areas", value);
        }
    }

    addStyleGridTemplateColumns(value:string):void{
        if(this.validateStyleValue("grid-template-columns", value)){
            this.addStyle("grid-template-columns", value);
        }
    }

    addStyleGridTemplateRows(value:string):void{
        if(this.validateStyleValue("grid-template-rows", value)){
            this.addStyle("grid-template-rows", value);
        }
    }

    addStyleHangingPunctuation(value:string):void{
        if(this.validateStyleValue("hanging-punctuation", value)){
            this.addStyle("hanging-punctuation", value);
        }
    }

    addStyleHeight(value:string):void{
        if(this.validateStyleValue("height", value)){
            this.addStyle("height", value);
        }
    }

    addStyleHyphens(value:string):void{
        if(this.validateStyleValue("hyphens", value)){
            this.addStyle("hyphens", value);
        }
    }

    addStyleImport(value:string):void{
        if(this.validateStyleValue("@import", value)){
            this.addStyle("@import", value);
        }
    }

    addStyleIsolation(value:string):void{
        if(this.validateStyleValue("isolation", value)){
            this.addStyle("isolation", value);
        }
    }

    addStyleJustifyContent(value:string):void{
        if(this.validateStyleValue("justify-content", value)){
            this.addStyle("justify-content", value);
        }
    }

    addStyleKeyframes(value:string):void{
        if(this.validateStyleValue("@keyframes", value)){
            this.addStyle("@keyframes", value);
        }
    }

    addStyleLeft(value:string):void{
        if(this.validateStyleValue("left", value)){
            this.addStyle("left", value);
        }
    }

    addStyleLetterSpacing(value:string):void{
        if(this.validateStyleValue("letter-spacing", value)){
            this.addStyle("letter-spacing", value);
        }
    }

    addStyleLineHeight(value:string):void{
        if(this.validateStyleValue("line-height", value)){
            this.addStyle("line-height", value);
        }
    }

    addStyleListStyle(value:string):void{
        if(this.validateStyleValue("list-style", value)){
            this.addStyle("list-style", value);
        }
    }

    addStyleListStyleImage(value:string):void{
        if(this.validateStyleValue("list-style-image", value)){
            this.addStyle("list-style-image", value);
        }
    }

    addStyleListStylePosition(value:string):void{
        if(this.validateStyleValue("list-style-position", value)){
            this.addStyle("list-style-position", value);
        }
    }

    addStyleListStyleType(value:string):void{
        if(this.validateStyleValue("list-style-type", value)){
            this.addStyle("list-style-type", value);
        }
    }

    addStyleMargin(value:string):void{
        if(this.validateStyleValue("margin", value)){
            this.addStyle("margin", value);
        }
    }

    addStyleMarginBottom(value:string):void{
        if(this.validateStyleValue("margin-bottom", value)){
            this.addStyle("margin-bottom", value);
        }
    }

    addStyleMarginLeft(value:string):void{
        if(this.validateStyleValue("margin-left", value)){
            this.addStyle("margin-left", value);
        }
    }

    addStyleMarginRight(value:string):void{
        if(this.validateStyleValue("margin-right", value)){
            this.addStyle("margin-right", value);
        }
    }

    addStyleMarginTop(value:string):void{
        if(this.validateStyleValue("margin-top", value)){
            this.addStyle("margin-top", value);
        }
    }

    addStyleMaxHeight(value:string):void{
        if(this.validateStyleValue("max-height", value)){
            this.addStyle("max-height", value);
        }
    }

    addStyleMaxWidth(value:string):void{
        if(this.validateStyleValue("max-width", value)){
            this.addStyle("max-width", value);
        }
    }

    addStyleMedia(value:string):void{
        if(this.validateStyleValue("@media", value)){
            this.addStyle("@media", value);
        }
    }

    addStyleMinHeight(value:string):void{
        if(this.validateStyleValue("min-height", value)){
            this.addStyle("min-height", value);
        }
    }

    addStyleMinWidth(value:string):void{
        if(this.validateStyleValue("min-width", value)){
            this.addStyle("min-width", value);
        }
    }

    addStyleMixBlendMode(value:string):void{
        if(this.validateStyleValue("mix-blend-mode", value)){
            this.addStyle("mix-blend-mode", value);
        }
    }

    addStyleObjectFit(value:string):void{
        if(this.validateStyleValue("object-fit", value)){
            this.addStyle("object-fit", value);
        }
    }

    addStyleObjectPosition(value:string):void{
        if(this.validateStyleValue("object-position", value)){
            this.addStyle("object-position", value);
        }
    }

    addStyleOpacity(value:string):void{
        if(this.validateStyleValue("opacity", value)){
            this.addStyle("opacity", value);
        }
    }

    addStyleOrder(value:string):void{
        if(this.validateStyleValue("order", value)){
            this.addStyle("order", value);
        }
    }

    addStyleOutline(value:string):void{
        if(this.validateStyleValue("outline", value)){
            this.addStyle("outline", value);
        }
    }

    addStyleOutlineColor(value:string):void{
        if(this.validateStyleValue("outline-color", value)){
            this.addStyle("outline-color", value);
        }
    }

    addStyleOutlineOffset(value:string):void{
        if(this.validateStyleValue("outline-offset", value)){
            this.addStyle("outline-offset", value);
        }
    }

    addStyleOutlineStyle(value:string):void{
        if(this.validateStyleValue("outline-style", value)){
            this.addStyle("outline-style", value);
        }
    }

    addStyleOutlineWidth(value:string):void{
        if(this.validateStyleValue("outline-width", value)){
            this.addStyle("outline-width", value);
        }
    }

    addStyleOverflow(value:string):void{
        if(this.validateStyleValue("overflow", value)){
            this.addStyle("overflow", value);
        }
    }

    addStyleOverflowX(value:string):void{
        if(this.validateStyleValue("overflow-x", value)){
            this.addStyle("overflow-x", value);
        }
    }

    addStyleOverflowY(value:string):void{
        if(this.validateStyleValue("overflow-y", value)){
            this.addStyle("overflow-y", value);
        }
    }

    addStylePadding(value:string):void{
        if(this.validateStyleValue("padding", value)){
            this.addStyle("padding", value);
        }
    }

    addStylePaddingBottom(value:string):void{
        if(this.validateStyleValue("padding-bottom", value)){
            this.addStyle("padding-bottom", value);
        }
    }

    addStylePaddingLeft(value:string):void{
        if(this.validateStyleValue("padding-left", value)){
            this.addStyle("padding-left", value);
        }
    }

    addStylePaddingRight(value:string):void{
        if(this.validateStyleValue("padding-right", value)){
            this.addStyle("padding-right", value);
        }
    }

    addStylePaddingTop(value:string):void{
        if(this.validateStyleValue("padding-top", value)){
            this.addStyle("padding-top", value);
        }
    }

    addStylePageBreakAfter(value:string):void{
        if(this.validateStyleValue("page-break-after", value)){
            this.addStyle("page-break-after", value);
        }
    }

    addStylePageBreakBefore(value:string):void{
        if(this.validateStyleValue("page-break-before", value)){
            this.addStyle("page-break-before", value);
        }
    }

    addStylePageBreakInside(value:string):void{
        if(this.validateStyleValue("page-break-inside", value)){
            this.addStyle("page-break-inside", value);
        }
    }

    addStylePerspective(value:string):void{
        if(this.validateStyleValue("perspective", value)){
            this.addStyle("perspective", value);
        }
    }

    addStylePerspectiveOrigin(value:string):void{
        if(this.validateStyleValue("perspective-origin", value)){
            this.addStyle("perspective-origin", value);
        }
    }

    addStylePointerEvents(value:string):void{
        if(this.validateStyleValue("pointer-events", value)){
            this.addStyle("pointer-events", value);
        }
    }

    addStylePosition(value:string):void{
        if(this.validateStyleValue("position", value)){
            this.addStyle("position", value);
        }
    }

    addStyleQuotes(value:string):void{
        if(this.validateStyleValue("quotes", value)){
            this.addStyle("quotes", value);
        }
    }

    addStyleResize(value:string):void{
        if(this.validateStyleValue("resize", value)){
            this.addStyle("resize", value);
        }
    }

    addStyleRight(value:string):void{
        if(this.validateStyleValue("right", value)){
            this.addStyle("right", value);
        }
    }

    addStyleRowGap(value:string):void{
        if(this.validateStyleValue("row-gap", value)){
            this.addStyle("row-gap", value);
        }
    }

    addStyleScrollBehavior(value:string):void{
        if(this.validateStyleValue("scroll-behavior", value)){
            this.addStyle("scroll-behavior", value);
        }
    }

    addStyleTabSize(value:string):void{
        if(this.validateStyleValue("tab-size", value)){
            this.addStyle("tab-size", value);
        }
    }

    addStyleTableLayout(value:string):void{
        if(this.validateStyleValue("table-layout", value)){
            this.addStyle("table-layout", value);
        }
    }

    addStyleTextAlign(value:string):void{
        if(this.validateStyleValue("text-align", value)){
            this.addStyle("text-align", value);
        }
    }

    addStyleTextAlignLast(value:string):void{
        if(this.validateStyleValue("text-align-last", value)){
            this.addStyle("text-align-last", value);
        }
    }

    addStyleTextDecoration(value:string):void{
        if(this.validateStyleValue("text-decoration", value)){
            this.addStyle("text-decoration", value);
        }
    }

    addStyleTextDecorationColor(value:string):void{
        if(this.validateStyleValue("text-decoration-color", value)){
            this.addStyle("text-decoration-color", value);
        }
    }

    addStyleTextDecorationLine(value:string):void{
        if(this.validateStyleValue("text-decoration-line", value)){
            this.addStyle("text-decoration-line", value);
        }
    }

    addStyleTextDecorationStyle(value:string):void{
        if(this.validateStyleValue("text-decoration-style", value)){
            this.addStyle("text-decoration-style", value);
        }
    }

    addStyleTextIndent(value:string):void{
        if(this.validateStyleValue("text-indent", value)){
            this.addStyle("text-indent", value);
        }
    }

    addStyleTextJustify(value:string):void{
        if(this.validateStyleValue("text-justify", value)){
            this.addStyle("text-justify", value);
        }
    }

    addStyleTextOverflow(value:string):void{
        if(this.validateStyleValue("text-overflow", value)){
            this.addStyle("text-overflow", value);
        }
    }

    addStyleTextShadow(value:string):void{
        if(this.validateStyleValue("text-shadow", value)){
            this.addStyle("text-shadow", value);
        }
    }

    addStyleTextTransform(value:string):void{
        if(this.validateStyleValue("text-transform", value)){
            this.addStyle("text-transform", value);
        }
    }

    addStyleTop(value:string):void{
        if(this.validateStyleValue("top", value)){
            this.addStyle("top", value);
        }
    }

    addStyleTransform(value:string):void{
        if(this.validateStyleValue("transform", value)){
            this.addStyle("transform", value);
        }
    }

    addStyleTransformOrigin(value:string):void{
        if(this.validateStyleValue("transform-origin", value)){
            this.addStyle("transform-origin", value);
        }
    }

    addStyleTransformStyle(value:string):void{
        if(this.validateStyleValue("transform-style", value)){
            this.addStyle("transform-style", value);
        }
    }

    addStyleTransition(value:string):void{
        if(this.validateStyleValue("transition", value)){
            this.addStyle("transition", value);
        }
    }

    addStyleTransitionDelay(value:string):void{
        if(this.validateStyleValue("transition-delay", value)){
            this.addStyle("transition-delay", value);
        }
    }

    addStyleTransitionDuration(value:string):void{
        if(this.validateStyleValue("transition-duration", value)){
            this.addStyle("transition-duration", value);
        }
    }

    addStyleTransitionProperty(value:string):void{
        if(this.validateStyleValue("transition-property", value)){
            this.addStyle("transition-property", value);
        }
    }

    addStyleTransitionTimingFunction(value:string):void{
        if(this.validateStyleValue("transition-timing-function", value)){
            this.addStyle("transition-timing-function", value);
        }
    }

    addStyleUnicodeBidi(value:string):void{
        if(this.validateStyleValue("unicode-bidi", value)){
            this.addStyle("unicode-bidi", value);
        }
    }

    addStyleUserSelect(value:string):void{
        if(this.validateStyleValue("user-select", value)){
            this.addStyle("user-select", value);
        }
    }

    addStyleVerticalAlign(value:string):void{
        if(this.validateStyleValue("vertical-align", value)){
            this.addStyle("vertical-align", value);
        }
    }

    addStyleVisibility(value:string):void{
        if(this.validateStyleValue("visibility", value)){
            this.addStyle("visibility", value);
        }
    }

    addStyleWhiteSpace(value:string):void{
        if(this.validateStyleValue("white-space", value)){
            this.addStyle("white-space", value);
        }
    }

    addStyleWidth(value:string):void{
        if(this.validateStyleValue("width", value)){
            this.addStyle("width", value);
        }
    }

    addStyleWordBreak(value:string):void{
        if(this.validateStyleValue("word-break", value)){
            this.addStyle("word-break", value);
        }
    }

    addStyleWordSpacing(value:string):void{
        if(this.validateStyleValue("word-spacing", value)){
            this.addStyle("word-spacing", value);
        }
    }

    addStyleWordWrap(value:string):void{
        if(this.validateStyleValue("word-wrap", value)){
            this.addStyle("word-wrap", value);
        }
    }

    addStyleWritingMode(value:string):void{
        if(this.validateStyleValue("writing-mode", value)){
            this.addStyle("writing-mode", value);
        }
    }

    addStyleZIndex(value:string):void{
        if(this.validateStyleValue("z-index", value)){
            this.addStyle("z-index", value);
        }
    }


}