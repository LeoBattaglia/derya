//Import
import * as events from "./ref/html_event_attributes.json";
import * as globals from "./ref/html_global_attributes.json";
import {HTMLTagAttribute} from "./html_tag_attribute";
import * as sys from "samara";
import * as tags from "./ref/html_tags.json";
import * as properties from "./ref/css_properties.json";

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
        if(this.validateAttribute(name)){
            this.addAttributeUnsafe(name, value);
        }
    }

    addAttributeUnsafe(name:string, value:string):void{
        if(this.tag && !this.closed && !sys.isNull(name)){
            this.attributes.push(new HTMLTagAttribute(name, value));
        }
    }

    addStyle(name:string, value:string):void{
        if(this.validateStyle(name)){
            this.addStyleUnsafe(name, value);
        }
    }

    addStyleUnsafe(name:string, value:string):void{
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

    /*addStyleGap(value:string):void{
        this.addStyle("gap", value);
    }*/

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

    validateAttribute(name:string):Boolean{
        for(let att of events.attributes){
            if(att.name === name){
                return true;
            }
        }
        for(let att of globals.attributes){
            if(att.name === name){
                return true;
            }
        }
        for(let tag of tags.tags){
            for(let att of tag.attributes){
                if(att.name === name){
                    return true;
                }
            }
        }
        return false;
    }

    validateStyle(name:string):Boolean{
        for(let prop of properties.properties){
            if(prop.name === name){
                return true;
            }
        }
        return false;
    }

    validateStyleValue(name:string, value:string):Boolean{
        for(let prop of properties.properties){
            if(prop.name === name){
                for(let val of prop.values){
                    if(val.indexOf("#") < 0 && val.indexOf("@") < 0){
                        if(val === value){
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

    //Generated-Methods
	addAttributeDownload(value:string):void{
		this.addAttributeUnsafe("download", value);
	}
	addAttributeHref(value:string):void{
		this.addAttributeUnsafe("href", value);
	}
	addAttributeHreflang(value:string):void{
		this.addAttributeUnsafe("hreflang", value);
	}
	addAttributeMedia(value:string):void{
		this.addAttributeUnsafe("media", value);
	}
	addAttributePing(value:string):void{
		this.addAttributeUnsafe("ping", value);
	}
	addAttributeReferrerpolicy(value:string):void{
		this.addAttributeUnsafe("referrerpolicy", value);
	}
	addAttributeRel(value:string):void{
		this.addAttributeUnsafe("rel", value);
	}
	addAttributeTarget(value:string):void{
		this.addAttributeUnsafe("target", value);
	}
	addAttributeType(value:string):void{
		this.addAttributeUnsafe("type", value);
	}
	addAttributeAlt(value:string):void{
		this.addAttributeUnsafe("alt", value);
	}
	addAttributeCoords(value:string):void{
		this.addAttributeUnsafe("coords", value);
	}
	addAttributeShape(value:string):void{
		this.addAttributeUnsafe("shape", value);
	}
	addAttributeAutoplay(value:string):void{
		this.addAttributeUnsafe("autoplay", value);
	}
	addAttributeControls(value:string):void{
		this.addAttributeUnsafe("controls", value);
	}
	addAttributeLoop(value:string):void{
		this.addAttributeUnsafe("loop", value);
	}
	addAttributeMuted(value:string):void{
		this.addAttributeUnsafe("muted", value);
	}
	addAttributePreload(value:string):void{
		this.addAttributeUnsafe("preload", value);
	}
	addAttributeSrc(value:string):void{
		this.addAttributeUnsafe("src", value);
	}
	addAttributeDir(value:string):void{
		this.addAttributeUnsafe("dir", value);
	}
	addAttributeCite(value:string):void{
		this.addAttributeUnsafe("cite", value);
	}
	addAttributeAutofocus(value:string):void{
		this.addAttributeUnsafe("autofocus", value);
	}
	addAttributeDisabled(value:string):void{
		this.addAttributeUnsafe("disabled", value);
	}
	addAttributeForm(value:string):void{
		this.addAttributeUnsafe("form", value);
	}
	addAttributeFormaction(value:string):void{
		this.addAttributeUnsafe("formaction", value);
	}
	addAttributeFormenctype(value:string):void{
		this.addAttributeUnsafe("formenctype", value);
	}
	addAttributeFormmethod(value:string):void{
		this.addAttributeUnsafe("formmethod", value);
	}
	addAttributeFormnovalidate(value:string):void{
		this.addAttributeUnsafe("formnovalidate", value);
	}
	addAttributeFormtarget(value:string):void{
		this.addAttributeUnsafe("formtarget", value);
	}
	addAttributeName(value:string):void{
		this.addAttributeUnsafe("name", value);
	}
	addAttributeValue(value:string):void{
		this.addAttributeUnsafe("value", value);
	}
	addAttributeHeight(value:string):void{
		this.addAttributeUnsafe("height", value);
	}
	addAttributeWidth(value:string):void{
		this.addAttributeUnsafe("width", value);
	}
	addAttributeSpan(value:string):void{
		this.addAttributeUnsafe("span", value);
	}
	addAttributeDatetime(value:string):void{
		this.addAttributeUnsafe("datetime", value);
	}
	addAttributeOpen(value:string):void{
		this.addAttributeUnsafe("open", value);
	}
	addAttributeAcceptCharset(value:string):void{
		this.addAttributeUnsafe("accept-charset", value);
	}
	addAttributeAction(value:string):void{
		this.addAttributeUnsafe("action", value);
	}
	addAttributeAutocomplete(value:string):void{
		this.addAttributeUnsafe("autocomplete", value);
	}
	addAttributeEnctype(value:string):void{
		this.addAttributeUnsafe("enctype", value);
	}
	addAttributeMethod(value:string):void{
		this.addAttributeUnsafe("method", value);
	}
	addAttributeNovalidate(value:string):void{
		this.addAttributeUnsafe("novalidate", value);
	}
	addAttributeXmlns(value:string):void{
		this.addAttributeUnsafe("xmlns", value);
	}
	addAttributeSandbox(value:string):void{
		this.addAttributeUnsafe("sandbox", value);
	}
	addAttributeSrcdoc(value:string):void{
		this.addAttributeUnsafe("srcdoc", value);
	}
	addAttributeIsmap(value:string):void{
		this.addAttributeUnsafe("ismap", value);
	}
	addAttributeLoading(value:string):void{
		this.addAttributeUnsafe("loading", value);
	}
	addAttributeLongdesc(value:string):void{
		this.addAttributeUnsafe("longdesc", value);
	}
	addAttributeUsemap(value:string):void{
		this.addAttributeUnsafe("usemap", value);
	}
	addAttributeAccept(value:string):void{
		this.addAttributeUnsafe("accept", value);
	}
	addAttributeChecked(value:string):void{
		this.addAttributeUnsafe("checked", value);
	}
	addAttributeDirname(value:string):void{
		this.addAttributeUnsafe("dirname", value);
	}
	addAttributeList(value:string):void{
		this.addAttributeUnsafe("list", value);
	}
	addAttributeMax(value:string):void{
		this.addAttributeUnsafe("max", value);
	}
	addAttributeMaxlength(value:string):void{
		this.addAttributeUnsafe("maxlength", value);
	}
	addAttributeMin(value:string):void{
		this.addAttributeUnsafe("min", value);
	}
	addAttributeMinlength(value:string):void{
		this.addAttributeUnsafe("minlength", value);
	}
	addAttributeMultiple(value:string):void{
		this.addAttributeUnsafe("multiple", value);
	}
	addAttributePattern(value:string):void{
		this.addAttributeUnsafe("pattern", value);
	}
	addAttributePlaceholder(value:string):void{
		this.addAttributeUnsafe("placeholder", value);
	}
	addAttributeReadonly(value:string):void{
		this.addAttributeUnsafe("readonly", value);
	}
	addAttributeRequired(value:string):void{
		this.addAttributeUnsafe("required", value);
	}
	addAttributeSize(value:string):void{
		this.addAttributeUnsafe("size", value);
	}
	addAttributeStep(value:string):void{
		this.addAttributeUnsafe("step", value);
	}
	addAttributeFor(value:string):void{
		this.addAttributeUnsafe("for", value);
	}
	addAttributeSizes(value:string):void{
		this.addAttributeUnsafe("sizes", value);
	}
	addAttributeCharset(value:string):void{
		this.addAttributeUnsafe("charset", value);
	}
	addAttributeContent(value:string):void{
		this.addAttributeUnsafe("content", value);
	}
	addAttributeHttpEquiv(value:string):void{
		this.addAttributeUnsafe("http-equiv", value);
	}
	addAttributeHigh(value:string):void{
		this.addAttributeUnsafe("high", value);
	}
	addAttributeLow(value:string):void{
		this.addAttributeUnsafe("low", value);
	}
	addAttributeOptimum(value:string):void{
		this.addAttributeUnsafe("optimum", value);
	}
	addAttributeData(value:string):void{
		this.addAttributeUnsafe("data", value);
	}
	addAttributeReversed(value:string):void{
		this.addAttributeUnsafe("reversed", value);
	}
	addAttributeStart(value:string):void{
		this.addAttributeUnsafe("start", value);
	}
	addAttributeLabel(value:string):void{
		this.addAttributeUnsafe("label", value);
	}
	addAttributeSelected(value:string):void{
		this.addAttributeUnsafe("selected", value);
	}
	addAttributeAsync(value:string):void{
		this.addAttributeUnsafe("async", value);
	}
	addAttributeCrossorigin(value:string):void{
		this.addAttributeUnsafe("crossorigin", value);
	}
	addAttributeDefer(value:string):void{
		this.addAttributeUnsafe("defer", value);
	}
	addAttributeIntegrity(value:string):void{
		this.addAttributeUnsafe("integrity", value);
	}
	addAttributeSrcset(value:string):void{
		this.addAttributeUnsafe("srcset", value);
	}
	addAttributeColspan(value:string):void{
		this.addAttributeUnsafe("colspan", value);
	}
	addAttributeHeaders(value:string):void{
		this.addAttributeUnsafe("headers", value);
	}
	addAttributeRowspan(value:string):void{
		this.addAttributeUnsafe("rowspan", value);
	}
	addAttributeCols(value:string):void{
		this.addAttributeUnsafe("cols", value);
	}
	addAttributeRows(value:string):void{
		this.addAttributeUnsafe("rows", value);
	}
	addAttributeWrap(value:string):void{
		this.addAttributeUnsafe("wrap", value);
	}
	addAttributeAbbr(value:string):void{
		this.addAttributeUnsafe("abbr", value);
	}
	addAttributeScope(value:string):void{
		this.addAttributeUnsafe("scope", value);
	}
	addAttributeOnafterprint(value:string):void{
		this.addAttributeUnsafe("onafterprint", value);
	}
	addAttributeOnbeforeprint(value:string):void{
		this.addAttributeUnsafe("onbeforeprint", value);
	}
	addAttributeOnbeforeunload(value:string):void{
		this.addAttributeUnsafe("onbeforeunload", value);
	}
	addAttributeOnerror(value:string):void{
		this.addAttributeUnsafe("onerror", value);
	}
	addAttributeOnhashchange(value:string):void{
		this.addAttributeUnsafe("onhashchange", value);
	}
	addAttributeOnload(value:string):void{
		this.addAttributeUnsafe("onload", value);
	}
	addAttributeOnmessage(value:string):void{
		this.addAttributeUnsafe("onmessage", value);
	}
	addAttributeOnoffline(value:string):void{
		this.addAttributeUnsafe("onoffline", value);
	}
	addAttributeOnonline(value:string):void{
		this.addAttributeUnsafe("ononline", value);
	}
	addAttributeOnpagehide(value:string):void{
		this.addAttributeUnsafe("onpagehide", value);
	}
	addAttributeOnpageshow(value:string):void{
		this.addAttributeUnsafe("onpageshow", value);
	}
	addAttributeOnpopstate(value:string):void{
		this.addAttributeUnsafe("onpopstate", value);
	}
	addAttributeOnresize(value:string):void{
		this.addAttributeUnsafe("onresize", value);
	}
	addAttributeOnstorage(value:string):void{
		this.addAttributeUnsafe("onstorage", value);
	}
	addAttributeOnunload(value:string):void{
		this.addAttributeUnsafe("onunload", value);
	}
	addAttributeOnblur(value:string):void{
		this.addAttributeUnsafe("onblur", value);
	}
	addAttributeOnchange(value:string):void{
		this.addAttributeUnsafe("onchange", value);
	}
	addAttributeOncontextmenu(value:string):void{
		this.addAttributeUnsafe("oncontextmenu", value);
	}
	addAttributeOnfocus(value:string):void{
		this.addAttributeUnsafe("onfocus", value);
	}
	addAttributeOninput(value:string):void{
		this.addAttributeUnsafe("oninput", value);
	}
	addAttributeOninvalid(value:string):void{
		this.addAttributeUnsafe("oninvalid", value);
	}
	addAttributeOnreset(value:string):void{
		this.addAttributeUnsafe("onreset", value);
	}
	addAttributeOnsearch(value:string):void{
		this.addAttributeUnsafe("onsearch", value);
	}
	addAttributeOnselect(value:string):void{
		this.addAttributeUnsafe("onselect", value);
	}
	addAttributeOnsubmit(value:string):void{
		this.addAttributeUnsafe("onsubmit", value);
	}
	addAttributeOnkeydown(value:string):void{
		this.addAttributeUnsafe("onkeydown", value);
	}
	addAttributeOnkeypress(value:string):void{
		this.addAttributeUnsafe("onkeypress", value);
	}
	addAttributeOnkeyup(value:string):void{
		this.addAttributeUnsafe("onkeyup", value);
	}
	addAttributeOnclick(value:string):void{
		this.addAttributeUnsafe("onclick", value);
	}
	addAttributeOndblclick(value:string):void{
		this.addAttributeUnsafe("ondblclick", value);
	}
	addAttributeOnmousedown(value:string):void{
		this.addAttributeUnsafe("onmousedown", value);
	}
	addAttributeOnmousemove(value:string):void{
		this.addAttributeUnsafe("onmousemove", value);
	}
	addAttributeOnmouseout(value:string):void{
		this.addAttributeUnsafe("onmouseout", value);
	}
	addAttributeOnmouseover(value:string):void{
		this.addAttributeUnsafe("onmouseover", value);
	}
	addAttributeOnmouseup(value:string):void{
		this.addAttributeUnsafe("onmouseup", value);
	}
	addAttributeOnmousewheel(value:string):void{
		this.addAttributeUnsafe("onmousewheel", value);
	}
	addAttributeOnwheel(value:string):void{
		this.addAttributeUnsafe("onwheel", value);
	}
	addAttributeOndrag(value:string):void{
		this.addAttributeUnsafe("ondrag", value);
	}
	addAttributeOndragend(value:string):void{
		this.addAttributeUnsafe("ondragend", value);
	}
	addAttributeOndragenter(value:string):void{
		this.addAttributeUnsafe("ondragenter", value);
	}
	addAttributeOndragleave(value:string):void{
		this.addAttributeUnsafe("ondragleave", value);
	}
	addAttributeOndragover(value:string):void{
		this.addAttributeUnsafe("ondragover", value);
	}
	addAttributeOndragstart(value:string):void{
		this.addAttributeUnsafe("ondragstart", value);
	}
	addAttributeOndrop(value:string):void{
		this.addAttributeUnsafe("ondrop", value);
	}
	addAttributeOnscroll(value:string):void{
		this.addAttributeUnsafe("onscroll", value);
	}
	addAttributeOncopy(value:string):void{
		this.addAttributeUnsafe("oncopy", value);
	}
	addAttributeOncut(value:string):void{
		this.addAttributeUnsafe("oncut", value);
	}
	addAttributeOnpaste(value:string):void{
		this.addAttributeUnsafe("onpaste", value);
	}
	addAttributeOnabort(value:string):void{
		this.addAttributeUnsafe("onabort", value);
	}
	addAttributeOncanplay(value:string):void{
		this.addAttributeUnsafe("oncanplay", value);
	}
	addAttributeOncanplaythrough(value:string):void{
		this.addAttributeUnsafe("oncanplaythrough", value);
	}
	addAttributeOncuechange(value:string):void{
		this.addAttributeUnsafe("oncuechange", value);
	}
	addAttributeOndurationchange(value:string):void{
		this.addAttributeUnsafe("ondurationchange", value);
	}
	addAttributeOnemptied(value:string):void{
		this.addAttributeUnsafe("onemptied", value);
	}
	addAttributeOnended(value:string):void{
		this.addAttributeUnsafe("onended", value);
	}
	addAttributeOnloadeddata(value:string):void{
		this.addAttributeUnsafe("onloadeddata", value);
	}
	addAttributeOnloadedmetadata(value:string):void{
		this.addAttributeUnsafe("onloadedmetadata", value);
	}
	addAttributeOnloadstart(value:string):void{
		this.addAttributeUnsafe("onloadstart", value);
	}
	addAttributeOnpause(value:string):void{
		this.addAttributeUnsafe("onpause", value);
	}
	addAttributeOnplay(value:string):void{
		this.addAttributeUnsafe("onplay", value);
	}
	addAttributeOnplaying(value:string):void{
		this.addAttributeUnsafe("onplaying", value);
	}
	addAttributeOnprogress(value:string):void{
		this.addAttributeUnsafe("onprogress", value);
	}
	addAttributeOnratechange(value:string):void{
		this.addAttributeUnsafe("onratechange", value);
	}
	addAttributeOnseeked(value:string):void{
		this.addAttributeUnsafe("onseeked", value);
	}
	addAttributeOnseeking(value:string):void{
		this.addAttributeUnsafe("onseeking", value);
	}
	addAttributeOnstalled(value:string):void{
		this.addAttributeUnsafe("onstalled", value);
	}
	addAttributeOnsuspend(value:string):void{
		this.addAttributeUnsafe("onsuspend", value);
	}
	addAttributeOntimeupdate(value:string):void{
		this.addAttributeUnsafe("ontimeupdate", value);
	}
	addAttributeOnvolumechange(value:string):void{
		this.addAttributeUnsafe("onvolumechange", value);
	}
	addAttributeOnwaiting(value:string):void{
		this.addAttributeUnsafe("onwaiting", value);
	}
	addAttributeOntoggle(value:string):void{
		this.addAttributeUnsafe("ontoggle", value);
	}
	addAttributeAccesskey(value:string):void{
		this.addAttributeUnsafe("accesskey", value);
	}
	addAttributeClass(value:string):void{
		this.addAttributeUnsafe("class", value);
	}
	addAttributeContenteditable(value:string):void{
		this.addAttributeUnsafe("contenteditable", value);
	}
	addAttributeDraggable(value:string):void{
		this.addAttributeUnsafe("draggable", value);
	}
	addAttributeHidden(value:string):void{
		this.addAttributeUnsafe("hidden", value);
	}
	addAttributeId(value:string):void{
		this.addAttributeUnsafe("id", value);
	}
	addAttributeLang(value:string):void{
		this.addAttributeUnsafe("lang", value);
	}
	addAttributeSpellcheck(value:string):void{
		this.addAttributeUnsafe("spellcheck", value);
	}
	addAttributeStyle(value:string):void{
		this.addAttributeUnsafe("style", value);
	}
	addAttributeTabindex(value:string):void{
		this.addAttributeUnsafe("tabindex", value);
	}
	addAttributeTitle(value:string):void{
		this.addAttributeUnsafe("title", value);
	}
	addAttributeTranslate(value:string):void{
		this.addAttributeUnsafe("translate", value);
	}

	addStyleAlignContent(value:string):void{
		if(this.validateStyleValue("align-content", value)){
			this.addStyleUnsafe("align-content", value);
		}
	}
	addStyleAlignItems(value:string):void{
		if(this.validateStyleValue("align-items", value)){
			this.addStyleUnsafe("align-items", value);
		}
	}
	addStyleAlignSelf(value:string):void{
		if(this.validateStyleValue("align-self", value)){
			this.addStyleUnsafe("align-self", value);
		}
	}
	addStyleAll(value:string):void{
		if(this.validateStyleValue("all", value)){
			this.addStyleUnsafe("all", value);
		}
	}
	addStyleAnimation(value:string):void{
		if(this.validateStyleValue("animation", value)){
			this.addStyleUnsafe("animation", value);
		}
	}
	addStyleAnimationDelay(value:string):void{
		if(this.validateStyleValue("animation-delay", value)){
			this.addStyleUnsafe("animation-delay", value);
		}
	}
	addStyleAnimationDirection(value:string):void{
		if(this.validateStyleValue("animation-direction", value)){
			this.addStyleUnsafe("animation-direction", value);
		}
	}
	addStyleAnimationDuration(value:string):void{
		if(this.validateStyleValue("animation-duration", value)){
			this.addStyleUnsafe("animation-duration", value);
		}
	}
	addStyleAnimationFillMode(value:string):void{
		if(this.validateStyleValue("animation-fill-mode", value)){
			this.addStyleUnsafe("animation-fill-mode", value);
		}
	}
	addStyleAnimationIterationCount(value:string):void{
		if(this.validateStyleValue("animation-iteration-count", value)){
			this.addStyleUnsafe("animation-iteration-count", value);
		}
	}
	addStyleAnimationName(value:string):void{
		if(this.validateStyleValue("animation-name", value)){
			this.addStyleUnsafe("animation-name", value);
		}
	}
	addStyleAnimationPlayState(value:string):void{
		if(this.validateStyleValue("animation-play-state", value)){
			this.addStyleUnsafe("animation-play-state", value);
		}
	}
	addStyleAnimationTimingFunction(value:string):void{
		if(this.validateStyleValue("animation-timing-function", value)){
			this.addStyleUnsafe("animation-timing-function", value);
		}
	}
	addStyleBackfaceVisibility(value:string):void{
		if(this.validateStyleValue("backface-visibility", value)){
			this.addStyleUnsafe("backface-visibility", value);
		}
	}
	addStyleBackground(value:string):void{
		if(this.validateStyleValue("background", value)){
			this.addStyleUnsafe("background", value);
		}
	}
	addStyleBackgroundAttachment(value:string):void{
		if(this.validateStyleValue("background-attachment", value)){
			this.addStyleUnsafe("background-attachment", value);
		}
	}
	addStyleBackgroundBlendMode(value:string):void{
		if(this.validateStyleValue("background-blend-mode", value)){
			this.addStyleUnsafe("background-blend-mode", value);
		}
	}
	addStyleBackgroundClip(value:string):void{
		if(this.validateStyleValue("background-clip", value)){
			this.addStyleUnsafe("background-clip", value);
		}
	}
	addStyleBackgroundColor(value:string):void{
		if(this.validateStyleValue("background-color", value)){
			this.addStyleUnsafe("background-color", value);
		}
	}
	addStyleBackgroundImage(value:string):void{
		if(this.validateStyleValue("background-image", value)){
			this.addStyleUnsafe("background-image", value);
		}
	}
	addStyleBackgroundOrigin(value:string):void{
		if(this.validateStyleValue("background-origin", value)){
			this.addStyleUnsafe("background-origin", value);
		}
	}
	addStyleBackgroundPosition(value:string):void{
		if(this.validateStyleValue("background-position", value)){
			this.addStyleUnsafe("background-position", value);
		}
	}
	addStyleBackgroundRepeat(value:string):void{
		if(this.validateStyleValue("background-repeat", value)){
			this.addStyleUnsafe("background-repeat", value);
		}
	}
	addStyleBackgroundSize(value:string):void{
		if(this.validateStyleValue("background-size", value)){
			this.addStyleUnsafe("background-size", value);
		}
	}
	addStyleBorder(value:string):void{
		if(this.validateStyleValue("border", value)){
			this.addStyleUnsafe("border", value);
		}
	}
	addStyleBorderBottom(value:string):void{
		if(this.validateStyleValue("border-bottom", value)){
			this.addStyleUnsafe("border-bottom", value);
		}
	}
	addStyleBorderBottomColor(value:string):void{
		if(this.validateStyleValue("border-bottom-color", value)){
			this.addStyleUnsafe("border-bottom-color", value);
		}
	}
	addStyleBorderBottomLeftRadius(value:string):void{
		if(this.validateStyleValue("border-bottom-left-radius", value)){
			this.addStyleUnsafe("border-bottom-left-radius", value);
		}
	}
	addStyleBorderBottomRightRadius(value:string):void{
		if(this.validateStyleValue("border-bottom-right-radius", value)){
			this.addStyleUnsafe("border-bottom-right-radius", value);
		}
	}
	addStyleBorderBottomStyle(value:string):void{
		if(this.validateStyleValue("border-bottom-style", value)){
			this.addStyleUnsafe("border-bottom-style", value);
		}
	}
	addStyleBorderBottomWidth(value:string):void{
		if(this.validateStyleValue("border-bottom-width", value)){
			this.addStyleUnsafe("border-bottom-width", value);
		}
	}
	addStyleBorderCollapse(value:string):void{
		if(this.validateStyleValue("border-collapse", value)){
			this.addStyleUnsafe("border-collapse", value);
		}
	}
	addStyleBorderColor(value:string):void{
		if(this.validateStyleValue("border-color", value)){
			this.addStyleUnsafe("border-color", value);
		}
	}
	addStyleBorderImage(value:string):void{
		if(this.validateStyleValue("border-image", value)){
			this.addStyleUnsafe("border-image", value);
		}
	}
	addStyleBorderImageOutset(value:string):void{
		if(this.validateStyleValue("border-image-outset", value)){
			this.addStyleUnsafe("border-image-outset", value);
		}
	}
	addStyleBorderImageRepeat(value:string):void{
		if(this.validateStyleValue("border-image-repeat", value)){
			this.addStyleUnsafe("border-image-repeat", value);
		}
	}
	addStyleBorderImageSlice(value:string):void{
		if(this.validateStyleValue("border-image-slice", value)){
			this.addStyleUnsafe("border-image-slice", value);
		}
	}
	addStyleBorderImageSource(value:string):void{
		if(this.validateStyleValue("border-image-source", value)){
			this.addStyleUnsafe("border-image-source", value);
		}
	}
	addStyleBorderImageWidth(value:string):void{
		if(this.validateStyleValue("border-image-width", value)){
			this.addStyleUnsafe("border-image-width", value);
		}
	}
	addStyleBorderLeft(value:string):void{
		if(this.validateStyleValue("border-left", value)){
			this.addStyleUnsafe("border-left", value);
		}
	}
	addStyleBorderLeftColor(value:string):void{
		if(this.validateStyleValue("border-left-color", value)){
			this.addStyleUnsafe("border-left-color", value);
		}
	}
	addStyleBorderLeftStyle(value:string):void{
		if(this.validateStyleValue("border-left-style", value)){
			this.addStyleUnsafe("border-left-style", value);
		}
	}
	addStyleBorderLeftWidth(value:string):void{
		if(this.validateStyleValue("border-left-width", value)){
			this.addStyleUnsafe("border-left-width", value);
		}
	}
	addStyleBorderRadius(value:string):void{
		if(this.validateStyleValue("border-radius", value)){
			this.addStyleUnsafe("border-radius", value);
		}
	}
	addStyleBorderRight(value:string):void{
		if(this.validateStyleValue("border-right", value)){
			this.addStyleUnsafe("border-right", value);
		}
	}
	addStyleBorderRightColor(value:string):void{
		if(this.validateStyleValue("border-right-color", value)){
			this.addStyleUnsafe("border-right-color", value);
		}
	}
	addStyleBorderRightStyle(value:string):void{
		if(this.validateStyleValue("border-right-style", value)){
			this.addStyleUnsafe("border-right-style", value);
		}
	}
	addStyleBorderRightWidth(value:string):void{
		if(this.validateStyleValue("border-right-width", value)){
			this.addStyleUnsafe("border-right-width", value);
		}
	}
	addStyleBorderSpacing(value:string):void{
		if(this.validateStyleValue("border-spacing", value)){
			this.addStyleUnsafe("border-spacing", value);
		}
	}
	addStyleBorderStyle(value:string):void{
		if(this.validateStyleValue("border-style", value)){
			this.addStyleUnsafe("border-style", value);
		}
	}
	addStyleBorderTop(value:string):void{
		if(this.validateStyleValue("border-top", value)){
			this.addStyleUnsafe("border-top", value);
		}
	}
	addStyleBorderTopColor(value:string):void{
		if(this.validateStyleValue("border-top-color", value)){
			this.addStyleUnsafe("border-top-color", value);
		}
	}
	addStyleBorderTopLeftRadius(value:string):void{
		if(this.validateStyleValue("border-top-left-radius", value)){
			this.addStyleUnsafe("border-top-left-radius", value);
		}
	}
	addStyleBorderTopRightRadius(value:string):void{
		if(this.validateStyleValue("border-top-right-radius", value)){
			this.addStyleUnsafe("border-top-right-radius", value);
		}
	}
	addStyleBorderTopStyle(value:string):void{
		if(this.validateStyleValue("border-top-style", value)){
			this.addStyleUnsafe("border-top-style", value);
		}
	}
	addStyleBorderTopWidth(value:string):void{
		if(this.validateStyleValue("border-top-width", value)){
			this.addStyleUnsafe("border-top-width", value);
		}
	}
	addStyleBorderWidth(value:string):void{
		if(this.validateStyleValue("border-width", value)){
			this.addStyleUnsafe("border-width", value);
		}
	}
	addStyleBottom(value:string):void{
		if(this.validateStyleValue("bottom", value)){
			this.addStyleUnsafe("bottom", value);
		}
	}
	addStyleBoxDecorationBreak(value:string):void{
		if(this.validateStyleValue("box-decoration-break", value)){
			this.addStyleUnsafe("box-decoration-break", value);
		}
	}
	addStyleBoxShadow(value:string):void{
		if(this.validateStyleValue("box-shadow", value)){
			this.addStyleUnsafe("box-shadow", value);
		}
	}
	addStyleBoxSizing(value:string):void{
		if(this.validateStyleValue("box-sizing", value)){
			this.addStyleUnsafe("box-sizing", value);
		}
	}
	addStyleBreakAfter(value:string):void{
		if(this.validateStyleValue("break-after", value)){
			this.addStyleUnsafe("break-after", value);
		}
	}
	addStyleBreakBefore(value:string):void{
		if(this.validateStyleValue("break-before", value)){
			this.addStyleUnsafe("break-before", value);
		}
	}
	addStyleBreakInside(value:string):void{
		if(this.validateStyleValue("break-inside", value)){
			this.addStyleUnsafe("break-inside", value);
		}
	}
	addStyleCaptionSide(value:string):void{
		if(this.validateStyleValue("caption-side", value)){
			this.addStyleUnsafe("caption-side", value);
		}
	}
	addStyleCaretColor(value:string):void{
		if(this.validateStyleValue("caret-color", value)){
			this.addStyleUnsafe("caret-color", value);
		}
	}
	addStyleCharset(value:string):void{
		if(this.validateStyleValue("@charset", value)){
			this.addStyleUnsafe("@charset", value);
		}
	}
	addStyleClear(value:string):void{
		if(this.validateStyleValue("clear", value)){
			this.addStyleUnsafe("clear", value);
		}
	}
	addStyleClip(value:string):void{
		if(this.validateStyleValue("clip", value)){
			this.addStyleUnsafe("clip", value);
		}
	}
	addStyleColor(value:string):void{
		if(this.validateStyleValue("color", value)){
			this.addStyleUnsafe("color", value);
		}
	}
	addStyleColumnCount(value:string):void{
		if(this.validateStyleValue("column-count", value)){
			this.addStyleUnsafe("column-count", value);
		}
	}
	addStyleColumnFill(value:string):void{
		if(this.validateStyleValue("column-fill", value)){
			this.addStyleUnsafe("column-fill", value);
		}
	}
	addStyleColumnGap(value:string):void{
		if(this.validateStyleValue("column-gap", value)){
			this.addStyleUnsafe("column-gap", value);
		}
	}
	addStyleColumnRule(value:string):void{
		if(this.validateStyleValue("column-rule", value)){
			this.addStyleUnsafe("column-rule", value);
		}
	}
	addStyleColumnRuleColor(value:string):void{
		if(this.validateStyleValue("column-rule-color", value)){
			this.addStyleUnsafe("column-rule-color", value);
		}
	}
	addStyleColumnRuleStyle(value:string):void{
		if(this.validateStyleValue("column-rule-style", value)){
			this.addStyleUnsafe("column-rule-style", value);
		}
	}
	addStyleColumnRuleWidth(value:string):void{
		if(this.validateStyleValue("column-rule-width", value)){
			this.addStyleUnsafe("column-rule-width", value);
		}
	}
	addStyleColumnSpan(value:string):void{
		if(this.validateStyleValue("column-span", value)){
			this.addStyleUnsafe("column-span", value);
		}
	}
	addStyleColumnWidth(value:string):void{
		if(this.validateStyleValue("column-width", value)){
			this.addStyleUnsafe("column-width", value);
		}
	}
	addStyleColumns(value:string):void{
		if(this.validateStyleValue("columns", value)){
			this.addStyleUnsafe("columns", value);
		}
	}
	addStyleContent(value:string):void{
		if(this.validateStyleValue("content", value)){
			this.addStyleUnsafe("content", value);
		}
	}
	addStyleCounterIncrement(value:string):void{
		if(this.validateStyleValue("counter-increment", value)){
			this.addStyleUnsafe("counter-increment", value);
		}
	}
	addStyleCounterReset(value:string):void{
		if(this.validateStyleValue("counter-reset", value)){
			this.addStyleUnsafe("counter-reset", value);
		}
	}
	addStyleCursor(value:string):void{
		if(this.validateStyleValue("cursor", value)){
			this.addStyleUnsafe("cursor", value);
		}
	}
	addStyleDirection(value:string):void{
		if(this.validateStyleValue("direction", value)){
			this.addStyleUnsafe("direction", value);
		}
	}
	addStyleDisplay(value:string):void{
		if(this.validateStyleValue("display", value)){
			this.addStyleUnsafe("display", value);
		}
	}
	addStyleEmptyCells(value:string):void{
		if(this.validateStyleValue("empty-cells", value)){
			this.addStyleUnsafe("empty-cells", value);
		}
	}
	addStyleFilter(value:string):void{
		if(this.validateStyleValue("filter", value)){
			this.addStyleUnsafe("filter", value);
		}
	}
	addStyleFlex(value:string):void{
		if(this.validateStyleValue("flex", value)){
			this.addStyleUnsafe("flex", value);
		}
	}
	addStyleFlexBasis(value:string):void{
		if(this.validateStyleValue("flex-basis", value)){
			this.addStyleUnsafe("flex-basis", value);
		}
	}
	addStyleFlexDirection(value:string):void{
		if(this.validateStyleValue("flex-direction", value)){
			this.addStyleUnsafe("flex-direction", value);
		}
	}
	addStyleFlexFlow(value:string):void{
		if(this.validateStyleValue("flex-flow", value)){
			this.addStyleUnsafe("flex-flow", value);
		}
	}
	addStyleFlexGrow(value:string):void{
		if(this.validateStyleValue("flex-grow", value)){
			this.addStyleUnsafe("flex-grow", value);
		}
	}
	addStyleFlexShrink(value:string):void{
		if(this.validateStyleValue("flex-shrink", value)){
			this.addStyleUnsafe("flex-shrink", value);
		}
	}
	addStyleFlexWrap(value:string):void{
		if(this.validateStyleValue("flex-wrap", value)){
			this.addStyleUnsafe("flex-wrap", value);
		}
	}
	addStyleFloat(value:string):void{
		if(this.validateStyleValue("float", value)){
			this.addStyleUnsafe("float", value);
		}
	}
	addStyleFont(value:string):void{
		if(this.validateStyleValue("font", value)){
			this.addStyleUnsafe("font", value);
		}
	}
	addStyleFontFace(value:string):void{
		if(this.validateStyleValue("@font-face", value)){
			this.addStyleUnsafe("@font-face", value);
		}
	}
	addStyleFontFamily(value:string):void{
		if(this.validateStyleValue("font-family", value)){
			this.addStyleUnsafe("font-family", value);
		}
	}
	addStyleFontFeatureSettings(value:string):void{
		if(this.validateStyleValue("font-feature-settings", value)){
			this.addStyleUnsafe("font-feature-settings", value);
		}
	}
	addStyleFontKerning(value:string):void{
		if(this.validateStyleValue("font-kerning", value)){
			this.addStyleUnsafe("font-kerning", value);
		}
	}
	addStyleFontSize(value:string):void{
		if(this.validateStyleValue("font-size", value)){
			this.addStyleUnsafe("font-size", value);
		}
	}
	addStyleFontSizeAdjust(value:string):void{
		if(this.validateStyleValue("font-size-adjust", value)){
			this.addStyleUnsafe("font-size-adjust", value);
		}
	}
	addStyleFontStretch(value:string):void{
		if(this.validateStyleValue("font-stretch", value)){
			this.addStyleUnsafe("font-stretch", value);
		}
	}
	addStyleFontStyle(value:string):void{
		if(this.validateStyleValue("font-style", value)){
			this.addStyleUnsafe("font-style", value);
		}
	}
	addStyleFontVariant(value:string):void{
		if(this.validateStyleValue("font-variant", value)){
			this.addStyleUnsafe("font-variant", value);
		}
	}
	addStyleFontVariantCaps(value:string):void{
		if(this.validateStyleValue("font-variant-caps", value)){
			this.addStyleUnsafe("font-variant-caps", value);
		}
	}
	addStyleFontWeight(value:string):void{
		if(this.validateStyleValue("font-weight", value)){
			this.addStyleUnsafe("font-weight", value);
		}
	}
	addStyleGap(value:string):void{
		if(this.validateStyleValue("gap", value)){
			this.addStyleUnsafe("gap", value);
		}
	}
	addStyleGrid(value:string):void{
		if(this.validateStyleValue("grid", value)){
			this.addStyleUnsafe("grid", value);
		}
	}
	addStyleGridArea(value:string):void{
		if(this.validateStyleValue("grid-area", value)){
			this.addStyleUnsafe("grid-area", value);
		}
	}
	addStyleGridAutoColumns(value:string):void{
		if(this.validateStyleValue("grid-auto-columns", value)){
			this.addStyleUnsafe("grid-auto-columns", value);
		}
	}
	addStyleGridAutoFlow(value:string):void{
		if(this.validateStyleValue("grid-auto-flow", value)){
			this.addStyleUnsafe("grid-auto-flow", value);
		}
	}
	addStyleGridAutoRows(value:string):void{
		if(this.validateStyleValue("grid-auto-rows", value)){
			this.addStyleUnsafe("grid-auto-rows", value);
		}
	}
	addStyleGridColumn(value:string):void{
		if(this.validateStyleValue("grid-column", value)){
			this.addStyleUnsafe("grid-column", value);
		}
	}
	addStyleGridColumnEnd(value:string):void{
		if(this.validateStyleValue("grid-column-end", value)){
			this.addStyleUnsafe("grid-column-end", value);
		}
	}
	addStyleGridColumnGap(value:string):void{
		if(this.validateStyleValue("grid-column-gap", value)){
			this.addStyleUnsafe("grid-column-gap", value);
		}
	}
	addStyleGridColumnStart(value:string):void{
		if(this.validateStyleValue("grid-column-start", value)){
			this.addStyleUnsafe("grid-column-start", value);
		}
	}
	addStyleGridGap(value:string):void{
		if(this.validateStyleValue("grid-gap", value)){
			this.addStyleUnsafe("grid-gap", value);
		}
	}
	addStyleGridRow(value:string):void{
		if(this.validateStyleValue("grid-row", value)){
			this.addStyleUnsafe("grid-row", value);
		}
	}
	addStyleGridRowEnd(value:string):void{
		if(this.validateStyleValue("grid-row-end", value)){
			this.addStyleUnsafe("grid-row-end", value);
		}
	}
	addStyleGridRowGap(value:string):void{
		if(this.validateStyleValue("grid-row-gap", value)){
			this.addStyleUnsafe("grid-row-gap", value);
		}
	}
	addStyleGridRowStart(value:string):void{
		if(this.validateStyleValue("grid-row-start", value)){
			this.addStyleUnsafe("grid-row-start", value);
		}
	}
	addStyleGridTemplate(value:string):void{
		if(this.validateStyleValue("grid-template", value)){
			this.addStyleUnsafe("grid-template", value);
		}
	}
	addStyleGridTemplateAreas(value:string):void{
		if(this.validateStyleValue("grid-template-areas", value)){
			this.addStyleUnsafe("grid-template-areas", value);
		}
	}
	addStyleGridTemplateColumns(value:string):void{
		if(this.validateStyleValue("grid-template-columns", value)){
			this.addStyleUnsafe("grid-template-columns", value);
		}
	}
	addStyleGridTemplateRows(value:string):void{
		if(this.validateStyleValue("grid-template-rows", value)){
			this.addStyleUnsafe("grid-template-rows", value);
		}
	}
	addStyleHangingPunctuation(value:string):void{
		if(this.validateStyleValue("hanging-punctuation", value)){
			this.addStyleUnsafe("hanging-punctuation", value);
		}
	}
	addStyleHeight(value:string):void{
		if(this.validateStyleValue("height", value)){
			this.addStyleUnsafe("height", value);
		}
	}
	addStyleHyphens(value:string):void{
		if(this.validateStyleValue("hyphens", value)){
			this.addStyleUnsafe("hyphens", value);
		}
	}
	addStyleImageRendering(value:string):void{
		if(this.validateStyleValue("image-rendering", value)){
			this.addStyleUnsafe("image-rendering", value);
		}
	}
	addStyleImport(value:string):void{
		if(this.validateStyleValue("@import", value)){
			this.addStyleUnsafe("@import", value);
		}
	}
	addStyleIsolation(value:string):void{
		if(this.validateStyleValue("isolation", value)){
			this.addStyleUnsafe("isolation", value);
		}
	}
	addStyleJustifyContent(value:string):void{
		if(this.validateStyleValue("justify-content", value)){
			this.addStyleUnsafe("justify-content", value);
		}
	}
	addStyleKeyframes(value:string):void{
		if(this.validateStyleValue("@keyframes", value)){
			this.addStyleUnsafe("@keyframes", value);
		}
	}
	addStyleLeft(value:string):void{
		if(this.validateStyleValue("left", value)){
			this.addStyleUnsafe("left", value);
		}
	}
	addStyleLetterSpacing(value:string):void{
		if(this.validateStyleValue("letter-spacing", value)){
			this.addStyleUnsafe("letter-spacing", value);
		}
	}
	addStyleLineHeight(value:string):void{
		if(this.validateStyleValue("line-height", value)){
			this.addStyleUnsafe("line-height", value);
		}
	}
	addStyleListStyle(value:string):void{
		if(this.validateStyleValue("list-style", value)){
			this.addStyleUnsafe("list-style", value);
		}
	}
	addStyleListStyleImage(value:string):void{
		if(this.validateStyleValue("list-style-image", value)){
			this.addStyleUnsafe("list-style-image", value);
		}
	}
	addStyleListStylePosition(value:string):void{
		if(this.validateStyleValue("list-style-position", value)){
			this.addStyleUnsafe("list-style-position", value);
		}
	}
	addStyleListStyleType(value:string):void{
		if(this.validateStyleValue("list-style-type", value)){
			this.addStyleUnsafe("list-style-type", value);
		}
	}
	addStyleMargin(value:string):void{
		if(this.validateStyleValue("margin", value)){
			this.addStyleUnsafe("margin", value);
		}
	}
	addStyleMarginBottom(value:string):void{
		if(this.validateStyleValue("margin-bottom", value)){
			this.addStyleUnsafe("margin-bottom", value);
		}
	}
	addStyleMarginLeft(value:string):void{
		if(this.validateStyleValue("margin-left", value)){
			this.addStyleUnsafe("margin-left", value);
		}
	}
	addStyleMarginRight(value:string):void{
		if(this.validateStyleValue("margin-right", value)){
			this.addStyleUnsafe("margin-right", value);
		}
	}
	addStyleMarginTop(value:string):void{
		if(this.validateStyleValue("margin-top", value)){
			this.addStyleUnsafe("margin-top", value);
		}
	}
	addStyleMaskImage(value:string):void{
		if(this.validateStyleValue("mask-image", value)){
			this.addStyleUnsafe("mask-image", value);
		}
	}
	addStyleMaskOrigin(value:string):void{
		if(this.validateStyleValue("mask-origin", value)){
			this.addStyleUnsafe("mask-origin", value);
		}
	}
	addStyleMaskPosition(value:string):void{
		if(this.validateStyleValue("mask-position", value)){
			this.addStyleUnsafe("mask-position", value);
		}
	}
	addStyleMaskRepeat(value:string):void{
		if(this.validateStyleValue("mask-repeat", value)){
			this.addStyleUnsafe("mask-repeat", value);
		}
	}
	addStyleMaskSize(value:string):void{
		if(this.validateStyleValue("mask-size", value)){
			this.addStyleUnsafe("mask-size", value);
		}
	}
	addStyleMaxHeight(value:string):void{
		if(this.validateStyleValue("max-height", value)){
			this.addStyleUnsafe("max-height", value);
		}
	}
	addStyleMaxWidth(value:string):void{
		if(this.validateStyleValue("max-width", value)){
			this.addStyleUnsafe("max-width", value);
		}
	}
	addStyleMedia(value:string):void{
		if(this.validateStyleValue("@media", value)){
			this.addStyleUnsafe("@media", value);
		}
	}
	addStyleMinHeight(value:string):void{
		if(this.validateStyleValue("min-height", value)){
			this.addStyleUnsafe("min-height", value);
		}
	}
	addStyleMinWidth(value:string):void{
		if(this.validateStyleValue("min-width", value)){
			this.addStyleUnsafe("min-width", value);
		}
	}
	addStyleMixBlendMode(value:string):void{
		if(this.validateStyleValue("mix-blend-mode", value)){
			this.addStyleUnsafe("mix-blend-mode", value);
		}
	}
	addStyleObjectFit(value:string):void{
		if(this.validateStyleValue("object-fit", value)){
			this.addStyleUnsafe("object-fit", value);
		}
	}
	addStyleObjectPosition(value:string):void{
		if(this.validateStyleValue("object-position", value)){
			this.addStyleUnsafe("object-position", value);
		}
	}
	addStyleOpacity(value:string):void{
		if(this.validateStyleValue("opacity", value)){
			this.addStyleUnsafe("opacity", value);
		}
	}
	addStyleOrder(value:string):void{
		if(this.validateStyleValue("order", value)){
			this.addStyleUnsafe("order", value);
		}
	}
	addStyleOrphans(value:string):void{
		if(this.validateStyleValue("orphans", value)){
			this.addStyleUnsafe("orphans", value);
		}
	}
	addStyleOutline(value:string):void{
		if(this.validateStyleValue("outline", value)){
			this.addStyleUnsafe("outline", value);
		}
	}
	addStyleOutlineColor(value:string):void{
		if(this.validateStyleValue("outline-color", value)){
			this.addStyleUnsafe("outline-color", value);
		}
	}
	addStyleOutlineOffset(value:string):void{
		if(this.validateStyleValue("outline-offset", value)){
			this.addStyleUnsafe("outline-offset", value);
		}
	}
	addStyleOutlineStyle(value:string):void{
		if(this.validateStyleValue("outline-style", value)){
			this.addStyleUnsafe("outline-style", value);
		}
	}
	addStyleOutlineWidth(value:string):void{
		if(this.validateStyleValue("outline-width", value)){
			this.addStyleUnsafe("outline-width", value);
		}
	}
	addStyleOverflow(value:string):void{
		if(this.validateStyleValue("overflow", value)){
			this.addStyleUnsafe("overflow", value);
		}
	}
	addStyleOverflowWrap(value:string):void{
		if(this.validateStyleValue("overflow-wrap", value)){
			this.addStyleUnsafe("overflow-wrap", value);
		}
	}
	addStyleOverflowX(value:string):void{
		if(this.validateStyleValue("overflow-x", value)){
			this.addStyleUnsafe("overflow-x", value);
		}
	}
	addStyleOverflowY(value:string):void{
		if(this.validateStyleValue("overflow-y", value)){
			this.addStyleUnsafe("overflow-y", value);
		}
	}
	addStylePadding(value:string):void{
		if(this.validateStyleValue("padding", value)){
			this.addStyleUnsafe("padding", value);
		}
	}
	addStylePaddingBottom(value:string):void{
		if(this.validateStyleValue("padding-bottom", value)){
			this.addStyleUnsafe("padding-bottom", value);
		}
	}
	addStylePaddingLeft(value:string):void{
		if(this.validateStyleValue("padding-left", value)){
			this.addStyleUnsafe("padding-left", value);
		}
	}
	addStylePaddingRight(value:string):void{
		if(this.validateStyleValue("padding-right", value)){
			this.addStyleUnsafe("padding-right", value);
		}
	}
	addStylePaddingTop(value:string):void{
		if(this.validateStyleValue("padding-top", value)){
			this.addStyleUnsafe("padding-top", value);
		}
	}
	addStylePageBreakAfter(value:string):void{
		if(this.validateStyleValue("page-break-after", value)){
			this.addStyleUnsafe("page-break-after", value);
		}
	}
	addStylePageBreakBefore(value:string):void{
		if(this.validateStyleValue("page-break-before", value)){
			this.addStyleUnsafe("page-break-before", value);
		}
	}
	addStylePageBreakInside(value:string):void{
		if(this.validateStyleValue("page-break-inside", value)){
			this.addStyleUnsafe("page-break-inside", value);
		}
	}
	addStylePerspective(value:string):void{
		if(this.validateStyleValue("perspective", value)){
			this.addStyleUnsafe("perspective", value);
		}
	}
	addStylePerspectiveOrigin(value:string):void{
		if(this.validateStyleValue("perspective-origin", value)){
			this.addStyleUnsafe("perspective-origin", value);
		}
	}
	addStylePointerEvents(value:string):void{
		if(this.validateStyleValue("pointer-events", value)){
			this.addStyleUnsafe("pointer-events", value);
		}
	}
	addStylePosition(value:string):void{
		if(this.validateStyleValue("position", value)){
			this.addStyleUnsafe("position", value);
		}
	}
	addStyleQuotes(value:string):void{
		if(this.validateStyleValue("quotes", value)){
			this.addStyleUnsafe("quotes", value);
		}
	}
	addStyleResize(value:string):void{
		if(this.validateStyleValue("resize", value)){
			this.addStyleUnsafe("resize", value);
		}
	}
	addStyleRight(value:string):void{
		if(this.validateStyleValue("right", value)){
			this.addStyleUnsafe("right", value);
		}
	}
	addStyleRowGap(value:string):void{
		if(this.validateStyleValue("row-gap", value)){
			this.addStyleUnsafe("row-gap", value);
		}
	}
	addStyleScrollBehavior(value:string):void{
		if(this.validateStyleValue("scroll-behavior", value)){
			this.addStyleUnsafe("scroll-behavior", value);
		}
	}
	addStyleTabSize(value:string):void{
		if(this.validateStyleValue("tab-size", value)){
			this.addStyleUnsafe("tab-size", value);
		}
	}
	addStyleTableLayout(value:string):void{
		if(this.validateStyleValue("table-layout", value)){
			this.addStyleUnsafe("table-layout", value);
		}
	}
	addStyleTextAlign(value:string):void{
		if(this.validateStyleValue("text-align", value)){
			this.addStyleUnsafe("text-align", value);
		}
	}
	addStyleTextAlignLast(value:string):void{
		if(this.validateStyleValue("text-align-last", value)){
			this.addStyleUnsafe("text-align-last", value);
		}
	}
	addStyleTextDecoration(value:string):void{
		if(this.validateStyleValue("text-decoration", value)){
			this.addStyleUnsafe("text-decoration", value);
		}
	}
	addStyleTextDecorationColor(value:string):void{
		if(this.validateStyleValue("text-decoration-color", value)){
			this.addStyleUnsafe("text-decoration-color", value);
		}
	}
	addStyleTextDecorationLine(value:string):void{
		if(this.validateStyleValue("text-decoration-line", value)){
			this.addStyleUnsafe("text-decoration-line", value);
		}
	}
	addStyleTextDecorationStyle(value:string):void{
		if(this.validateStyleValue("text-decoration-style", value)){
			this.addStyleUnsafe("text-decoration-style", value);
		}
	}
	addStyleTextIndent(value:string):void{
		if(this.validateStyleValue("text-indent", value)){
			this.addStyleUnsafe("text-indent", value);
		}
	}
	addStyleTextJustify(value:string):void{
		if(this.validateStyleValue("text-justify", value)){
			this.addStyleUnsafe("text-justify", value);
		}
	}
	addStyleTextOverflow(value:string):void{
		if(this.validateStyleValue("text-overflow", value)){
			this.addStyleUnsafe("text-overflow", value);
		}
	}
	addStyleTextShadow(value:string):void{
		if(this.validateStyleValue("text-shadow", value)){
			this.addStyleUnsafe("text-shadow", value);
		}
	}
	addStyleTextTransform(value:string):void{
		if(this.validateStyleValue("text-transform", value)){
			this.addStyleUnsafe("text-transform", value);
		}
	}
	addStyleTop(value:string):void{
		if(this.validateStyleValue("top", value)){
			this.addStyleUnsafe("top", value);
		}
	}
	addStyleTransform(value:string):void{
		if(this.validateStyleValue("transform", value)){
			this.addStyleUnsafe("transform", value);
		}
	}
	addStyleTransformOrigin(value:string):void{
		if(this.validateStyleValue("transform-origin", value)){
			this.addStyleUnsafe("transform-origin", value);
		}
	}
	addStyleTransformStyle(value:string):void{
		if(this.validateStyleValue("transform-style", value)){
			this.addStyleUnsafe("transform-style", value);
		}
	}
	addStyleTransition(value:string):void{
		if(this.validateStyleValue("transition", value)){
			this.addStyleUnsafe("transition", value);
		}
	}
	addStyleTransitionDelay(value:string):void{
		if(this.validateStyleValue("transition-delay", value)){
			this.addStyleUnsafe("transition-delay", value);
		}
	}
	addStyleTransitionDuration(value:string):void{
		if(this.validateStyleValue("transition-duration", value)){
			this.addStyleUnsafe("transition-duration", value);
		}
	}
	addStyleTransitionProperty(value:string):void{
		if(this.validateStyleValue("transition-property", value)){
			this.addStyleUnsafe("transition-property", value);
		}
	}
	addStyleTransitionTimingFunction(value:string):void{
		if(this.validateStyleValue("transition-timing-function", value)){
			this.addStyleUnsafe("transition-timing-function", value);
		}
	}
	addStyleUnicodeBidi(value:string):void{
		if(this.validateStyleValue("unicode-bidi", value)){
			this.addStyleUnsafe("unicode-bidi", value);
		}
	}
	addStyleUserSelect(value:string):void{
		if(this.validateStyleValue("user-select", value)){
			this.addStyleUnsafe("user-select", value);
		}
	}
	addStyleVerticalAlign(value:string):void{
		if(this.validateStyleValue("vertical-align", value)){
			this.addStyleUnsafe("vertical-align", value);
		}
	}
	addStyleVisibility(value:string):void{
		if(this.validateStyleValue("visibility", value)){
			this.addStyleUnsafe("visibility", value);
		}
	}
	addStyleWhiteSpace(value:string):void{
		if(this.validateStyleValue("white-space", value)){
			this.addStyleUnsafe("white-space", value);
		}
	}
	addStyleWidows(value:string):void{
		if(this.validateStyleValue("widows", value)){
			this.addStyleUnsafe("widows", value);
		}
	}
	addStyleWidth(value:string):void{
		if(this.validateStyleValue("width", value)){
			this.addStyleUnsafe("width", value);
		}
	}
	addStyleWordBreak(value:string):void{
		if(this.validateStyleValue("word-break", value)){
			this.addStyleUnsafe("word-break", value);
		}
	}
	addStyleWordSpacing(value:string):void{
		if(this.validateStyleValue("word-spacing", value)){
			this.addStyleUnsafe("word-spacing", value);
		}
	}
	addStyleWordWrap(value:string):void{
		if(this.validateStyleValue("word-wrap", value)){
			this.addStyleUnsafe("word-wrap", value);
		}
	}
	addStyleWritingMode(value:string):void{
		if(this.validateStyleValue("writing-mode", value)){
			this.addStyleUnsafe("writing-mode", value);
		}
	}
	addStyleZIndex(value:string):void{
		if(this.validateStyleValue("z-index", value)){
			this.addStyleUnsafe("z-index", value);
		}
	}
	addStyleFontFeatureValues(value:string):void{
		if(this.validateStyleValue("@font-feature-values", value)){
			this.addStyleUnsafe("@font-feature-values", value);
		}
	}
	addStyleFontLanguageOverride(value:string):void{
		if(this.validateStyleValue("font-language-override", value)){
			this.addStyleUnsafe("font-language-override", value);
		}
	}
	addStyleFontSynthesis(value:string):void{
		if(this.validateStyleValue("font-synthesis", value)){
			this.addStyleUnsafe("font-synthesis", value);
		}
	}
	addStyleFontVariantAlternates(value:string):void{
		if(this.validateStyleValue("font-variant-alternates", value)){
			this.addStyleUnsafe("font-variant-alternates", value);
		}
	}
	addStyleFontVariantEastAsian(value:string):void{
		if(this.validateStyleValue("font-variant-east-asian", value)){
			this.addStyleUnsafe("font-variant-east-asian", value);
		}
	}
	addStyleFontVariantLigatures(value:string):void{
		if(this.validateStyleValue("font-variant-ligatures", value)){
			this.addStyleUnsafe("font-variant-ligatures", value);
		}
	}
	addStyleFontVariantNumeric(value:string):void{
		if(this.validateStyleValue("font-variant-numeric", value)){
			this.addStyleUnsafe("font-variant-numeric", value);
		}
	}
	addStyleFontVariantPosition(value:string):void{
		if(this.validateStyleValue("font-variant-position", value)){
			this.addStyleUnsafe("font-variant-position", value);
		}
	}
	addStyleLineBreak(value:string):void{
		if(this.validateStyleValue("line-break", value)){
			this.addStyleUnsafe("line-break", value);
		}
	}
	addStyleMask(value:string):void{
		if(this.validateStyleValue("mask", value)){
			this.addStyleUnsafe("mask", value);
		}
	}
	addStyleMaskClip(value:string):void{
		if(this.validateStyleValue("mask-clip", value)){
			this.addStyleUnsafe("mask-clip", value);
		}
	}
	addStyleMaskComposite(value:string):void{
		if(this.validateStyleValue("mask-composite", value)){
			this.addStyleUnsafe("mask-composite", value);
		}
	}
	addStyleMaskMode(value:string):void{
		if(this.validateStyleValue("mask-mode", value)){
			this.addStyleUnsafe("mask-mode", value);
		}
	}
	addStyleMaskType(value:string):void{
		if(this.validateStyleValue("mask-type", value)){
			this.addStyleUnsafe("mask-type", value);
		}
	}
	addStyleTextCombineUpright(value:string):void{
		if(this.validateStyleValue("text-combine-upright", value)){
			this.addStyleUnsafe("text-combine-upright", value);
		}
	}
	addStyleTextOrientation(value:string):void{
		if(this.validateStyleValue("text-orientation", value)){
			this.addStyleUnsafe("text-orientation", value);
		}
	}
	addStyleTextUnderlinePosition(value:string):void{
		if(this.validateStyleValue("text-underline-position", value)){
			this.addStyleUnsafe("text-underline-position", value);
		}
	}
}