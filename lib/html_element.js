"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElement = void 0;
//Import
const events = require("./ref/html_event_attributes.json");
const globals = require("./ref/html_global_attributes.json");
const html_tag_attribute_1 = require("./html_tag_attribute");
const sys = require("samara");
const tags = require("./ref/html_tags.json");
const properties = require("./ref/css_properties.json");
//Class
class HTMLElement {
    //Constructor
    constructor(id, content, tag, closed) {
        this.closed = closed;
        this.content = content;
        this.id = id;
        this.attributes = [];
        this.styles = [];
        this.tag = tag;
    }
    //Methods
    addAttribute(name, value) {
        if (this.validateAttribute(name)) {
            this.addAttributeUnsafe(name, value);
        }
    }
    addAttributeUnsafe(name, value) {
        if (this.tag && !this.closed && !sys.isNull(name)) {
            this.attributes.push(new html_tag_attribute_1.HTMLTagAttribute(name, value));
        }
    }
    addStyle(name, value) {
        if (this.validateStyle(name)) {
            this.addStyleUnsafe(name, value);
        }
    }
    addStyleUnsafe(name, value) {
        if (!sys.isNull(name) && !sys.isNull(value)) {
            this.styles.push(new html_tag_attribute_1.HTMLTagAttribute(name, value));
        }
    }
    addStyleDisplayFlex() {
        this.addStyle("display", "flex");
    }
    addStyleDisplayFlexColumn() {
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("column");
    }
    addStyleDisplayFlexRow() {
        this.addStyleDisplayFlex();
        this.addStyleFlexDirection("row");
    }
    /*addStyleGap(value:string):void{
        this.addStyle("gap", value);
    }*/
    addStyleGaps(rowGap, columnGap) {
        this.addStyleColumnGap(columnGap);
        this.addStyleRowGap(rowGap);
    }
    addStyleMarginPadding(margin, padding) {
        this.addStyleMargin(margin);
        this.addStylePadding(padding);
    }
    addStyleSizes(width, height) {
        this.addStyleWidth(width);
        this.addStyleHeight(height);
    }
    getContent() {
        if (!this.tag) {
            return this.content;
        }
        else {
            if (this.closed) {
                return "</" + this.content + ">";
            }
            else {
                let tag = this.content;
                for (let attribute of this.attributes) {
                    if (sys.isNull(attribute.value)) {
                        tag += " " + attribute.name;
                    }
                    else {
                        tag += " " + attribute.name + "=\"" + attribute.value + "\"";
                    }
                }
                if (this.styles.length > 0) {
                    tag += " style=\"";
                    let cnt = 0;
                    let space = "";
                    for (let style of this.styles) {
                        if (cnt > 0) {
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
    validateAttribute(name) {
        for (let att of events.attributes) {
            if (att.name === name) {
                return true;
            }
        }
        for (let att of globals.attributes) {
            if (att.name === name) {
                return true;
            }
        }
        for (let tag of tags.tags) {
            for (let att of tag.attributes) {
                if (att.name === name) {
                    return true;
                }
            }
        }
        return false;
    }
    validateStyle(name) {
        for (let prop of properties.properties) {
            if (prop.name === name) {
                return true;
            }
        }
        return false;
    }
    validateStyleValue(name, value) {
        for (let prop of properties.properties) {
            if (prop.name === name) {
                for (let val of prop.values) {
                    if (val.indexOf("#") < 0 && val.indexOf("@") < 0) {
                        if (val === value) {
                            return true;
                        }
                    }
                    else {
                        //TODO: Check-Functions
                        return true;
                    }
                }
            }
        }
        return false;
    }
    //Get-Methods
    get attributes() {
        return this._attributes;
    }
    get closed() {
        return this._closed;
    }
    get content() {
        return this._content;
    }
    get id() {
        return this._id;
    }
    get styles() {
        return this._styles;
    }
    get tag() {
        return this._tag;
    }
    //Set-Methods
    set attributes(attributes) {
        if (!this.closed) {
            this._attributes = attributes;
        }
    }
    set closed(value) {
        this._closed = value;
    }
    set content(value) {
        this._content = value;
    }
    set id(value) {
        this._id = value;
    }
    set styles(styles) {
        this._styles = styles;
    }
    set tag(value) {
        this._tag = value;
    }
    //Generated-Methods
    addAttributeDownload(value) {
        this.addAttributeUnsafe("download", value);
    }
    addAttributeHref(value) {
        this.addAttributeUnsafe("href", value);
    }
    addAttributeHreflang(value) {
        this.addAttributeUnsafe("hreflang", value);
    }
    addAttributeMedia(value) {
        this.addAttributeUnsafe("media", value);
    }
    addAttributePing(value) {
        this.addAttributeUnsafe("ping", value);
    }
    addAttributeReferrerpolicy(value) {
        this.addAttributeUnsafe("referrerpolicy", value);
    }
    addAttributeRel(value) {
        this.addAttributeUnsafe("rel", value);
    }
    addAttributeTarget(value) {
        this.addAttributeUnsafe("target", value);
    }
    addAttributeType(value) {
        this.addAttributeUnsafe("type", value);
    }
    addAttributeAlt(value) {
        this.addAttributeUnsafe("alt", value);
    }
    addAttributeCoords(value) {
        this.addAttributeUnsafe("coords", value);
    }
    addAttributeShape(value) {
        this.addAttributeUnsafe("shape", value);
    }
    addAttributeAutoplay(value) {
        this.addAttributeUnsafe("autoplay", value);
    }
    addAttributeControls(value) {
        this.addAttributeUnsafe("controls", value);
    }
    addAttributeLoop(value) {
        this.addAttributeUnsafe("loop", value);
    }
    addAttributeMuted(value) {
        this.addAttributeUnsafe("muted", value);
    }
    addAttributePreload(value) {
        this.addAttributeUnsafe("preload", value);
    }
    addAttributeSrc(value) {
        this.addAttributeUnsafe("src", value);
    }
    addAttributeDir(value) {
        this.addAttributeUnsafe("dir", value);
    }
    addAttributeCite(value) {
        this.addAttributeUnsafe("cite", value);
    }
    addAttributeAutofocus(value) {
        this.addAttributeUnsafe("autofocus", value);
    }
    addAttributeDisabled(value) {
        this.addAttributeUnsafe("disabled", value);
    }
    addAttributeForm(value) {
        this.addAttributeUnsafe("form", value);
    }
    addAttributeFormaction(value) {
        this.addAttributeUnsafe("formaction", value);
    }
    addAttributeFormenctype(value) {
        this.addAttributeUnsafe("formenctype", value);
    }
    addAttributeFormmethod(value) {
        this.addAttributeUnsafe("formmethod", value);
    }
    addAttributeFormnovalidate(value) {
        this.addAttributeUnsafe("formnovalidate", value);
    }
    addAttributeFormtarget(value) {
        this.addAttributeUnsafe("formtarget", value);
    }
    addAttributeName(value) {
        this.addAttributeUnsafe("name", value);
    }
    addAttributeValue(value) {
        this.addAttributeUnsafe("value", value);
    }
    addAttributeHeight(value) {
        this.addAttributeUnsafe("height", value);
    }
    addAttributeWidth(value) {
        this.addAttributeUnsafe("width", value);
    }
    addAttributeSpan(value) {
        this.addAttributeUnsafe("span", value);
    }
    addAttributeDatetime(value) {
        this.addAttributeUnsafe("datetime", value);
    }
    addAttributeOpen(value) {
        this.addAttributeUnsafe("open", value);
    }
    addAttributeAcceptCharset(value) {
        this.addAttributeUnsafe("accept-charset", value);
    }
    addAttributeAction(value) {
        this.addAttributeUnsafe("action", value);
    }
    addAttributeAutocomplete(value) {
        this.addAttributeUnsafe("autocomplete", value);
    }
    addAttributeEnctype(value) {
        this.addAttributeUnsafe("enctype", value);
    }
    addAttributeMethod(value) {
        this.addAttributeUnsafe("method", value);
    }
    addAttributeNovalidate(value) {
        this.addAttributeUnsafe("novalidate", value);
    }
    addAttributeXmlns(value) {
        this.addAttributeUnsafe("xmlns", value);
    }
    addAttributeSandbox(value) {
        this.addAttributeUnsafe("sandbox", value);
    }
    addAttributeSrcdoc(value) {
        this.addAttributeUnsafe("srcdoc", value);
    }
    addAttributeIsmap(value) {
        this.addAttributeUnsafe("ismap", value);
    }
    addAttributeLoading(value) {
        this.addAttributeUnsafe("loading", value);
    }
    addAttributeLongdesc(value) {
        this.addAttributeUnsafe("longdesc", value);
    }
    addAttributeUsemap(value) {
        this.addAttributeUnsafe("usemap", value);
    }
    addAttributeAccept(value) {
        this.addAttributeUnsafe("accept", value);
    }
    addAttributeChecked(value) {
        this.addAttributeUnsafe("checked", value);
    }
    addAttributeDirname(value) {
        this.addAttributeUnsafe("dirname", value);
    }
    addAttributeList(value) {
        this.addAttributeUnsafe("list", value);
    }
    addAttributeMax(value) {
        this.addAttributeUnsafe("max", value);
    }
    addAttributeMaxlength(value) {
        this.addAttributeUnsafe("maxlength", value);
    }
    addAttributeMin(value) {
        this.addAttributeUnsafe("min", value);
    }
    addAttributeMinlength(value) {
        this.addAttributeUnsafe("minlength", value);
    }
    addAttributeMultiple(value) {
        this.addAttributeUnsafe("multiple", value);
    }
    addAttributePattern(value) {
        this.addAttributeUnsafe("pattern", value);
    }
    addAttributePlaceholder(value) {
        this.addAttributeUnsafe("placeholder", value);
    }
    addAttributeReadonly(value) {
        this.addAttributeUnsafe("readonly", value);
    }
    addAttributeRequired(value) {
        this.addAttributeUnsafe("required", value);
    }
    addAttributeSize(value) {
        this.addAttributeUnsafe("size", value);
    }
    addAttributeStep(value) {
        this.addAttributeUnsafe("step", value);
    }
    addAttributeFor(value) {
        this.addAttributeUnsafe("for", value);
    }
    addAttributeSizes(value) {
        this.addAttributeUnsafe("sizes", value);
    }
    addAttributeCharset(value) {
        this.addAttributeUnsafe("charset", value);
    }
    addAttributeContent(value) {
        this.addAttributeUnsafe("content", value);
    }
    addAttributeHttpEquiv(value) {
        this.addAttributeUnsafe("http-equiv", value);
    }
    addAttributeHigh(value) {
        this.addAttributeUnsafe("high", value);
    }
    addAttributeLow(value) {
        this.addAttributeUnsafe("low", value);
    }
    addAttributeOptimum(value) {
        this.addAttributeUnsafe("optimum", value);
    }
    addAttributeData(value) {
        this.addAttributeUnsafe("data", value);
    }
    addAttributeReversed(value) {
        this.addAttributeUnsafe("reversed", value);
    }
    addAttributeStart(value) {
        this.addAttributeUnsafe("start", value);
    }
    addAttributeLabel(value) {
        this.addAttributeUnsafe("label", value);
    }
    addAttributeSelected(value) {
        this.addAttributeUnsafe("selected", value);
    }
    addAttributeAsync(value) {
        this.addAttributeUnsafe("async", value);
    }
    addAttributeCrossorigin(value) {
        this.addAttributeUnsafe("crossorigin", value);
    }
    addAttributeDefer(value) {
        this.addAttributeUnsafe("defer", value);
    }
    addAttributeIntegrity(value) {
        this.addAttributeUnsafe("integrity", value);
    }
    addAttributeSrcset(value) {
        this.addAttributeUnsafe("srcset", value);
    }
    addAttributeColspan(value) {
        this.addAttributeUnsafe("colspan", value);
    }
    addAttributeHeaders(value) {
        this.addAttributeUnsafe("headers", value);
    }
    addAttributeRowspan(value) {
        this.addAttributeUnsafe("rowspan", value);
    }
    addAttributeCols(value) {
        this.addAttributeUnsafe("cols", value);
    }
    addAttributeRows(value) {
        this.addAttributeUnsafe("rows", value);
    }
    addAttributeWrap(value) {
        this.addAttributeUnsafe("wrap", value);
    }
    addAttributeAbbr(value) {
        this.addAttributeUnsafe("abbr", value);
    }
    addAttributeScope(value) {
        this.addAttributeUnsafe("scope", value);
    }
    addAttributeOnafterprint(value) {
        this.addAttributeUnsafe("onafterprint", value);
    }
    addAttributeOnbeforeprint(value) {
        this.addAttributeUnsafe("onbeforeprint", value);
    }
    addAttributeOnbeforeunload(value) {
        this.addAttributeUnsafe("onbeforeunload", value);
    }
    addAttributeOnerror(value) {
        this.addAttributeUnsafe("onerror", value);
    }
    addAttributeOnhashchange(value) {
        this.addAttributeUnsafe("onhashchange", value);
    }
    addAttributeOnload(value) {
        this.addAttributeUnsafe("onload", value);
    }
    addAttributeOnmessage(value) {
        this.addAttributeUnsafe("onmessage", value);
    }
    addAttributeOnoffline(value) {
        this.addAttributeUnsafe("onoffline", value);
    }
    addAttributeOnonline(value) {
        this.addAttributeUnsafe("ononline", value);
    }
    addAttributeOnpagehide(value) {
        this.addAttributeUnsafe("onpagehide", value);
    }
    addAttributeOnpageshow(value) {
        this.addAttributeUnsafe("onpageshow", value);
    }
    addAttributeOnpopstate(value) {
        this.addAttributeUnsafe("onpopstate", value);
    }
    addAttributeOnresize(value) {
        this.addAttributeUnsafe("onresize", value);
    }
    addAttributeOnstorage(value) {
        this.addAttributeUnsafe("onstorage", value);
    }
    addAttributeOnunload(value) {
        this.addAttributeUnsafe("onunload", value);
    }
    addAttributeOnblur(value) {
        this.addAttributeUnsafe("onblur", value);
    }
    addAttributeOnchange(value) {
        this.addAttributeUnsafe("onchange", value);
    }
    addAttributeOncontextmenu(value) {
        this.addAttributeUnsafe("oncontextmenu", value);
    }
    addAttributeOnfocus(value) {
        this.addAttributeUnsafe("onfocus", value);
    }
    addAttributeOninput(value) {
        this.addAttributeUnsafe("oninput", value);
    }
    addAttributeOninvalid(value) {
        this.addAttributeUnsafe("oninvalid", value);
    }
    addAttributeOnreset(value) {
        this.addAttributeUnsafe("onreset", value);
    }
    addAttributeOnsearch(value) {
        this.addAttributeUnsafe("onsearch", value);
    }
    addAttributeOnselect(value) {
        this.addAttributeUnsafe("onselect", value);
    }
    addAttributeOnsubmit(value) {
        this.addAttributeUnsafe("onsubmit", value);
    }
    addAttributeOnkeydown(value) {
        this.addAttributeUnsafe("onkeydown", value);
    }
    addAttributeOnkeypress(value) {
        this.addAttributeUnsafe("onkeypress", value);
    }
    addAttributeOnkeyup(value) {
        this.addAttributeUnsafe("onkeyup", value);
    }
    addAttributeOnclick(value) {
        this.addAttributeUnsafe("onclick", value);
    }
    addAttributeOndblclick(value) {
        this.addAttributeUnsafe("ondblclick", value);
    }
    addAttributeOnmousedown(value) {
        this.addAttributeUnsafe("onmousedown", value);
    }
    addAttributeOnmousemove(value) {
        this.addAttributeUnsafe("onmousemove", value);
    }
    addAttributeOnmouseout(value) {
        this.addAttributeUnsafe("onmouseout", value);
    }
    addAttributeOnmouseover(value) {
        this.addAttributeUnsafe("onmouseover", value);
    }
    addAttributeOnmouseup(value) {
        this.addAttributeUnsafe("onmouseup", value);
    }
    addAttributeOnmousewheel(value) {
        this.addAttributeUnsafe("onmousewheel", value);
    }
    addAttributeOnwheel(value) {
        this.addAttributeUnsafe("onwheel", value);
    }
    addAttributeOndrag(value) {
        this.addAttributeUnsafe("ondrag", value);
    }
    addAttributeOndragend(value) {
        this.addAttributeUnsafe("ondragend", value);
    }
    addAttributeOndragenter(value) {
        this.addAttributeUnsafe("ondragenter", value);
    }
    addAttributeOndragleave(value) {
        this.addAttributeUnsafe("ondragleave", value);
    }
    addAttributeOndragover(value) {
        this.addAttributeUnsafe("ondragover", value);
    }
    addAttributeOndragstart(value) {
        this.addAttributeUnsafe("ondragstart", value);
    }
    addAttributeOndrop(value) {
        this.addAttributeUnsafe("ondrop", value);
    }
    addAttributeOnscroll(value) {
        this.addAttributeUnsafe("onscroll", value);
    }
    addAttributeOncopy(value) {
        this.addAttributeUnsafe("oncopy", value);
    }
    addAttributeOncut(value) {
        this.addAttributeUnsafe("oncut", value);
    }
    addAttributeOnpaste(value) {
        this.addAttributeUnsafe("onpaste", value);
    }
    addAttributeOnabort(value) {
        this.addAttributeUnsafe("onabort", value);
    }
    addAttributeOncanplay(value) {
        this.addAttributeUnsafe("oncanplay", value);
    }
    addAttributeOncanplaythrough(value) {
        this.addAttributeUnsafe("oncanplaythrough", value);
    }
    addAttributeOncuechange(value) {
        this.addAttributeUnsafe("oncuechange", value);
    }
    addAttributeOndurationchange(value) {
        this.addAttributeUnsafe("ondurationchange", value);
    }
    addAttributeOnemptied(value) {
        this.addAttributeUnsafe("onemptied", value);
    }
    addAttributeOnended(value) {
        this.addAttributeUnsafe("onended", value);
    }
    addAttributeOnloadeddata(value) {
        this.addAttributeUnsafe("onloadeddata", value);
    }
    addAttributeOnloadedmetadata(value) {
        this.addAttributeUnsafe("onloadedmetadata", value);
    }
    addAttributeOnloadstart(value) {
        this.addAttributeUnsafe("onloadstart", value);
    }
    addAttributeOnpause(value) {
        this.addAttributeUnsafe("onpause", value);
    }
    addAttributeOnplay(value) {
        this.addAttributeUnsafe("onplay", value);
    }
    addAttributeOnplaying(value) {
        this.addAttributeUnsafe("onplaying", value);
    }
    addAttributeOnprogress(value) {
        this.addAttributeUnsafe("onprogress", value);
    }
    addAttributeOnratechange(value) {
        this.addAttributeUnsafe("onratechange", value);
    }
    addAttributeOnseeked(value) {
        this.addAttributeUnsafe("onseeked", value);
    }
    addAttributeOnseeking(value) {
        this.addAttributeUnsafe("onseeking", value);
    }
    addAttributeOnstalled(value) {
        this.addAttributeUnsafe("onstalled", value);
    }
    addAttributeOnsuspend(value) {
        this.addAttributeUnsafe("onsuspend", value);
    }
    addAttributeOntimeupdate(value) {
        this.addAttributeUnsafe("ontimeupdate", value);
    }
    addAttributeOnvolumechange(value) {
        this.addAttributeUnsafe("onvolumechange", value);
    }
    addAttributeOnwaiting(value) {
        this.addAttributeUnsafe("onwaiting", value);
    }
    addAttributeOntoggle(value) {
        this.addAttributeUnsafe("ontoggle", value);
    }
    addAttributeAccesskey(value) {
        this.addAttributeUnsafe("accesskey", value);
    }
    addAttributeClass(value) {
        this.addAttributeUnsafe("class", value);
    }
    addAttributeContenteditable(value) {
        this.addAttributeUnsafe("contenteditable", value);
    }
    addAttributeDraggable(value) {
        this.addAttributeUnsafe("draggable", value);
    }
    addAttributeHidden(value) {
        this.addAttributeUnsafe("hidden", value);
    }
    addAttributeId(value) {
        this.addAttributeUnsafe("id", value);
    }
    addAttributeLang(value) {
        this.addAttributeUnsafe("lang", value);
    }
    addAttributeSpellcheck(value) {
        this.addAttributeUnsafe("spellcheck", value);
    }
    addAttributeStyle(value) {
        this.addAttributeUnsafe("style", value);
    }
    addAttributeTabindex(value) {
        this.addAttributeUnsafe("tabindex", value);
    }
    addAttributeTitle(value) {
        this.addAttributeUnsafe("title", value);
    }
    addAttributeTranslate(value) {
        this.addAttributeUnsafe("translate", value);
    }
    addStyleAlignContent(value) {
        if (this.validateStyleValue("align-content", value)) {
            this.addStyleUnsafe("align-content", value);
        }
    }
    addStyleAlignItems(value) {
        if (this.validateStyleValue("align-items", value)) {
            this.addStyleUnsafe("align-items", value);
        }
    }
    addStyleAlignSelf(value) {
        if (this.validateStyleValue("align-self", value)) {
            this.addStyleUnsafe("align-self", value);
        }
    }
    addStyleAll(value) {
        if (this.validateStyleValue("all", value)) {
            this.addStyleUnsafe("all", value);
        }
    }
    addStyleAnimation(value) {
        if (this.validateStyleValue("animation", value)) {
            this.addStyleUnsafe("animation", value);
        }
    }
    addStyleAnimationDelay(value) {
        if (this.validateStyleValue("animation-delay", value)) {
            this.addStyleUnsafe("animation-delay", value);
        }
    }
    addStyleAnimationDirection(value) {
        if (this.validateStyleValue("animation-direction", value)) {
            this.addStyleUnsafe("animation-direction", value);
        }
    }
    addStyleAnimationDuration(value) {
        if (this.validateStyleValue("animation-duration", value)) {
            this.addStyleUnsafe("animation-duration", value);
        }
    }
    addStyleAnimationFillMode(value) {
        if (this.validateStyleValue("animation-fill-mode", value)) {
            this.addStyleUnsafe("animation-fill-mode", value);
        }
    }
    addStyleAnimationIterationCount(value) {
        if (this.validateStyleValue("animation-iteration-count", value)) {
            this.addStyleUnsafe("animation-iteration-count", value);
        }
    }
    addStyleAnimationName(value) {
        if (this.validateStyleValue("animation-name", value)) {
            this.addStyleUnsafe("animation-name", value);
        }
    }
    addStyleAnimationPlayState(value) {
        if (this.validateStyleValue("animation-play-state", value)) {
            this.addStyleUnsafe("animation-play-state", value);
        }
    }
    addStyleAnimationTimingFunction(value) {
        if (this.validateStyleValue("animation-timing-function", value)) {
            this.addStyleUnsafe("animation-timing-function", value);
        }
    }
    addStyleBackfaceVisibility(value) {
        if (this.validateStyleValue("backface-visibility", value)) {
            this.addStyleUnsafe("backface-visibility", value);
        }
    }
    addStyleBackground(value) {
        if (this.validateStyleValue("background", value)) {
            this.addStyleUnsafe("background", value);
        }
    }
    addStyleBackgroundAttachment(value) {
        if (this.validateStyleValue("background-attachment", value)) {
            this.addStyleUnsafe("background-attachment", value);
        }
    }
    addStyleBackgroundBlendMode(value) {
        if (this.validateStyleValue("background-blend-mode", value)) {
            this.addStyleUnsafe("background-blend-mode", value);
        }
    }
    addStyleBackgroundClip(value) {
        if (this.validateStyleValue("background-clip", value)) {
            this.addStyleUnsafe("background-clip", value);
        }
    }
    addStyleBackgroundColor(value) {
        if (this.validateStyleValue("background-color", value)) {
            this.addStyleUnsafe("background-color", value);
        }
    }
    addStyleBackgroundImage(value) {
        if (this.validateStyleValue("background-image", value)) {
            this.addStyleUnsafe("background-image", value);
        }
    }
    addStyleBackgroundOrigin(value) {
        if (this.validateStyleValue("background-origin", value)) {
            this.addStyleUnsafe("background-origin", value);
        }
    }
    addStyleBackgroundPosition(value) {
        if (this.validateStyleValue("background-position", value)) {
            this.addStyleUnsafe("background-position", value);
        }
    }
    addStyleBackgroundRepeat(value) {
        if (this.validateStyleValue("background-repeat", value)) {
            this.addStyleUnsafe("background-repeat", value);
        }
    }
    addStyleBackgroundSize(value) {
        if (this.validateStyleValue("background-size", value)) {
            this.addStyleUnsafe("background-size", value);
        }
    }
    addStyleBorder(value) {
        if (this.validateStyleValue("border", value)) {
            this.addStyleUnsafe("border", value);
        }
    }
    addStyleBorderBottom(value) {
        if (this.validateStyleValue("border-bottom", value)) {
            this.addStyleUnsafe("border-bottom", value);
        }
    }
    addStyleBorderBottomColor(value) {
        if (this.validateStyleValue("border-bottom-color", value)) {
            this.addStyleUnsafe("border-bottom-color", value);
        }
    }
    addStyleBorderBottomLeftRadius(value) {
        if (this.validateStyleValue("border-bottom-left-radius", value)) {
            this.addStyleUnsafe("border-bottom-left-radius", value);
        }
    }
    addStyleBorderBottomRightRadius(value) {
        if (this.validateStyleValue("border-bottom-right-radius", value)) {
            this.addStyleUnsafe("border-bottom-right-radius", value);
        }
    }
    addStyleBorderBottomStyle(value) {
        if (this.validateStyleValue("border-bottom-style", value)) {
            this.addStyleUnsafe("border-bottom-style", value);
        }
    }
    addStyleBorderBottomWidth(value) {
        if (this.validateStyleValue("border-bottom-width", value)) {
            this.addStyleUnsafe("border-bottom-width", value);
        }
    }
    addStyleBorderCollapse(value) {
        if (this.validateStyleValue("border-collapse", value)) {
            this.addStyleUnsafe("border-collapse", value);
        }
    }
    addStyleBorderColor(value) {
        if (this.validateStyleValue("border-color", value)) {
            this.addStyleUnsafe("border-color", value);
        }
    }
    addStyleBorderImage(value) {
        if (this.validateStyleValue("border-image", value)) {
            this.addStyleUnsafe("border-image", value);
        }
    }
    addStyleBorderImageOutset(value) {
        if (this.validateStyleValue("border-image-outset", value)) {
            this.addStyleUnsafe("border-image-outset", value);
        }
    }
    addStyleBorderImageRepeat(value) {
        if (this.validateStyleValue("border-image-repeat", value)) {
            this.addStyleUnsafe("border-image-repeat", value);
        }
    }
    addStyleBorderImageSlice(value) {
        if (this.validateStyleValue("border-image-slice", value)) {
            this.addStyleUnsafe("border-image-slice", value);
        }
    }
    addStyleBorderImageSource(value) {
        if (this.validateStyleValue("border-image-source", value)) {
            this.addStyleUnsafe("border-image-source", value);
        }
    }
    addStyleBorderImageWidth(value) {
        if (this.validateStyleValue("border-image-width", value)) {
            this.addStyleUnsafe("border-image-width", value);
        }
    }
    addStyleBorderLeft(value) {
        if (this.validateStyleValue("border-left", value)) {
            this.addStyleUnsafe("border-left", value);
        }
    }
    addStyleBorderLeftColor(value) {
        if (this.validateStyleValue("border-left-color", value)) {
            this.addStyleUnsafe("border-left-color", value);
        }
    }
    addStyleBorderLeftStyle(value) {
        if (this.validateStyleValue("border-left-style", value)) {
            this.addStyleUnsafe("border-left-style", value);
        }
    }
    addStyleBorderLeftWidth(value) {
        if (this.validateStyleValue("border-left-width", value)) {
            this.addStyleUnsafe("border-left-width", value);
        }
    }
    addStyleBorderRadius(value) {
        if (this.validateStyleValue("border-radius", value)) {
            this.addStyleUnsafe("border-radius", value);
        }
    }
    addStyleBorderRight(value) {
        if (this.validateStyleValue("border-right", value)) {
            this.addStyleUnsafe("border-right", value);
        }
    }
    addStyleBorderRightColor(value) {
        if (this.validateStyleValue("border-right-color", value)) {
            this.addStyleUnsafe("border-right-color", value);
        }
    }
    addStyleBorderRightStyle(value) {
        if (this.validateStyleValue("border-right-style", value)) {
            this.addStyleUnsafe("border-right-style", value);
        }
    }
    addStyleBorderRightWidth(value) {
        if (this.validateStyleValue("border-right-width", value)) {
            this.addStyleUnsafe("border-right-width", value);
        }
    }
    addStyleBorderSpacing(value) {
        if (this.validateStyleValue("border-spacing", value)) {
            this.addStyleUnsafe("border-spacing", value);
        }
    }
    addStyleBorderStyle(value) {
        if (this.validateStyleValue("border-style", value)) {
            this.addStyleUnsafe("border-style", value);
        }
    }
    addStyleBorderTop(value) {
        if (this.validateStyleValue("border-top", value)) {
            this.addStyleUnsafe("border-top", value);
        }
    }
    addStyleBorderTopColor(value) {
        if (this.validateStyleValue("border-top-color", value)) {
            this.addStyleUnsafe("border-top-color", value);
        }
    }
    addStyleBorderTopLeftRadius(value) {
        if (this.validateStyleValue("border-top-left-radius", value)) {
            this.addStyleUnsafe("border-top-left-radius", value);
        }
    }
    addStyleBorderTopRightRadius(value) {
        if (this.validateStyleValue("border-top-right-radius", value)) {
            this.addStyleUnsafe("border-top-right-radius", value);
        }
    }
    addStyleBorderTopStyle(value) {
        if (this.validateStyleValue("border-top-style", value)) {
            this.addStyleUnsafe("border-top-style", value);
        }
    }
    addStyleBorderTopWidth(value) {
        if (this.validateStyleValue("border-top-width", value)) {
            this.addStyleUnsafe("border-top-width", value);
        }
    }
    addStyleBorderWidth(value) {
        if (this.validateStyleValue("border-width", value)) {
            this.addStyleUnsafe("border-width", value);
        }
    }
    addStyleBottom(value) {
        if (this.validateStyleValue("bottom", value)) {
            this.addStyleUnsafe("bottom", value);
        }
    }
    addStyleBoxDecorationBreak(value) {
        if (this.validateStyleValue("box-decoration-break", value)) {
            this.addStyleUnsafe("box-decoration-break", value);
        }
    }
    addStyleBoxShadow(value) {
        if (this.validateStyleValue("box-shadow", value)) {
            this.addStyleUnsafe("box-shadow", value);
        }
    }
    addStyleBoxSizing(value) {
        if (this.validateStyleValue("box-sizing", value)) {
            this.addStyleUnsafe("box-sizing", value);
        }
    }
    addStyleBreakAfter(value) {
        if (this.validateStyleValue("break-after", value)) {
            this.addStyleUnsafe("break-after", value);
        }
    }
    addStyleBreakBefore(value) {
        if (this.validateStyleValue("break-before", value)) {
            this.addStyleUnsafe("break-before", value);
        }
    }
    addStyleBreakInside(value) {
        if (this.validateStyleValue("break-inside", value)) {
            this.addStyleUnsafe("break-inside", value);
        }
    }
    addStyleCaptionSide(value) {
        if (this.validateStyleValue("caption-side", value)) {
            this.addStyleUnsafe("caption-side", value);
        }
    }
    addStyleCaretColor(value) {
        if (this.validateStyleValue("caret-color", value)) {
            this.addStyleUnsafe("caret-color", value);
        }
    }
    addStyleCharset(value) {
        if (this.validateStyleValue("@charset", value)) {
            this.addStyleUnsafe("@charset", value);
        }
    }
    addStyleClear(value) {
        if (this.validateStyleValue("clear", value)) {
            this.addStyleUnsafe("clear", value);
        }
    }
    addStyleClip(value) {
        if (this.validateStyleValue("clip", value)) {
            this.addStyleUnsafe("clip", value);
        }
    }
    addStyleColor(value) {
        if (this.validateStyleValue("color", value)) {
            this.addStyleUnsafe("color", value);
        }
    }
    addStyleColumnCount(value) {
        if (this.validateStyleValue("column-count", value)) {
            this.addStyleUnsafe("column-count", value);
        }
    }
    addStyleColumnFill(value) {
        if (this.validateStyleValue("column-fill", value)) {
            this.addStyleUnsafe("column-fill", value);
        }
    }
    addStyleColumnGap(value) {
        if (this.validateStyleValue("column-gap", value)) {
            this.addStyleUnsafe("column-gap", value);
        }
    }
    addStyleColumnRule(value) {
        if (this.validateStyleValue("column-rule", value)) {
            this.addStyleUnsafe("column-rule", value);
        }
    }
    addStyleColumnRuleColor(value) {
        if (this.validateStyleValue("column-rule-color", value)) {
            this.addStyleUnsafe("column-rule-color", value);
        }
    }
    addStyleColumnRuleStyle(value) {
        if (this.validateStyleValue("column-rule-style", value)) {
            this.addStyleUnsafe("column-rule-style", value);
        }
    }
    addStyleColumnRuleWidth(value) {
        if (this.validateStyleValue("column-rule-width", value)) {
            this.addStyleUnsafe("column-rule-width", value);
        }
    }
    addStyleColumnSpan(value) {
        if (this.validateStyleValue("column-span", value)) {
            this.addStyleUnsafe("column-span", value);
        }
    }
    addStyleColumnWidth(value) {
        if (this.validateStyleValue("column-width", value)) {
            this.addStyleUnsafe("column-width", value);
        }
    }
    addStyleColumns(value) {
        if (this.validateStyleValue("columns", value)) {
            this.addStyleUnsafe("columns", value);
        }
    }
    addStyleContent(value) {
        if (this.validateStyleValue("content", value)) {
            this.addStyleUnsafe("content", value);
        }
    }
    addStyleCounterIncrement(value) {
        if (this.validateStyleValue("counter-increment", value)) {
            this.addStyleUnsafe("counter-increment", value);
        }
    }
    addStyleCounterReset(value) {
        if (this.validateStyleValue("counter-reset", value)) {
            this.addStyleUnsafe("counter-reset", value);
        }
    }
    addStyleCursor(value) {
        if (this.validateStyleValue("cursor", value)) {
            this.addStyleUnsafe("cursor", value);
        }
    }
    addStyleDirection(value) {
        if (this.validateStyleValue("direction", value)) {
            this.addStyleUnsafe("direction", value);
        }
    }
    addStyleDisplay(value) {
        if (this.validateStyleValue("display", value)) {
            this.addStyleUnsafe("display", value);
        }
    }
    addStyleEmptyCells(value) {
        if (this.validateStyleValue("empty-cells", value)) {
            this.addStyleUnsafe("empty-cells", value);
        }
    }
    addStyleFilter(value) {
        if (this.validateStyleValue("filter", value)) {
            this.addStyleUnsafe("filter", value);
        }
    }
    addStyleFlex(value) {
        if (this.validateStyleValue("flex", value)) {
            this.addStyleUnsafe("flex", value);
        }
    }
    addStyleFlexBasis(value) {
        if (this.validateStyleValue("flex-basis", value)) {
            this.addStyleUnsafe("flex-basis", value);
        }
    }
    addStyleFlexDirection(value) {
        if (this.validateStyleValue("flex-direction", value)) {
            this.addStyleUnsafe("flex-direction", value);
        }
    }
    addStyleFlexFlow(value) {
        if (this.validateStyleValue("flex-flow", value)) {
            this.addStyleUnsafe("flex-flow", value);
        }
    }
    addStyleFlexGrow(value) {
        if (this.validateStyleValue("flex-grow", value)) {
            this.addStyleUnsafe("flex-grow", value);
        }
    }
    addStyleFlexShrink(value) {
        if (this.validateStyleValue("flex-shrink", value)) {
            this.addStyleUnsafe("flex-shrink", value);
        }
    }
    addStyleFlexWrap(value) {
        if (this.validateStyleValue("flex-wrap", value)) {
            this.addStyleUnsafe("flex-wrap", value);
        }
    }
    addStyleFloat(value) {
        if (this.validateStyleValue("float", value)) {
            this.addStyleUnsafe("float", value);
        }
    }
    addStyleFont(value) {
        if (this.validateStyleValue("font", value)) {
            this.addStyleUnsafe("font", value);
        }
    }
    addStyleFontFace(value) {
        if (this.validateStyleValue("@font-face", value)) {
            this.addStyleUnsafe("@font-face", value);
        }
    }
    addStyleFontFamily(value) {
        if (this.validateStyleValue("font-family", value)) {
            this.addStyleUnsafe("font-family", value);
        }
    }
    addStyleFontFeatureSettings(value) {
        if (this.validateStyleValue("font-feature-settings", value)) {
            this.addStyleUnsafe("font-feature-settings", value);
        }
    }
    addStyleFontKerning(value) {
        if (this.validateStyleValue("font-kerning", value)) {
            this.addStyleUnsafe("font-kerning", value);
        }
    }
    addStyleFontSize(value) {
        if (this.validateStyleValue("font-size", value)) {
            this.addStyleUnsafe("font-size", value);
        }
    }
    addStyleFontSizeAdjust(value) {
        if (this.validateStyleValue("font-size-adjust", value)) {
            this.addStyleUnsafe("font-size-adjust", value);
        }
    }
    addStyleFontStretch(value) {
        if (this.validateStyleValue("font-stretch", value)) {
            this.addStyleUnsafe("font-stretch", value);
        }
    }
    addStyleFontStyle(value) {
        if (this.validateStyleValue("font-style", value)) {
            this.addStyleUnsafe("font-style", value);
        }
    }
    addStyleFontVariant(value) {
        if (this.validateStyleValue("font-variant", value)) {
            this.addStyleUnsafe("font-variant", value);
        }
    }
    addStyleFontVariantCaps(value) {
        if (this.validateStyleValue("font-variant-caps", value)) {
            this.addStyleUnsafe("font-variant-caps", value);
        }
    }
    addStyleFontWeight(value) {
        if (this.validateStyleValue("font-weight", value)) {
            this.addStyleUnsafe("font-weight", value);
        }
    }
    addStyleGap(value) {
        if (this.validateStyleValue("gap", value)) {
            this.addStyleUnsafe("gap", value);
        }
    }
    addStyleGrid(value) {
        if (this.validateStyleValue("grid", value)) {
            this.addStyleUnsafe("grid", value);
        }
    }
    addStyleGridArea(value) {
        if (this.validateStyleValue("grid-area", value)) {
            this.addStyleUnsafe("grid-area", value);
        }
    }
    addStyleGridAutoColumns(value) {
        if (this.validateStyleValue("grid-auto-columns", value)) {
            this.addStyleUnsafe("grid-auto-columns", value);
        }
    }
    addStyleGridAutoFlow(value) {
        if (this.validateStyleValue("grid-auto-flow", value)) {
            this.addStyleUnsafe("grid-auto-flow", value);
        }
    }
    addStyleGridAutoRows(value) {
        if (this.validateStyleValue("grid-auto-rows", value)) {
            this.addStyleUnsafe("grid-auto-rows", value);
        }
    }
    addStyleGridColumn(value) {
        if (this.validateStyleValue("grid-column", value)) {
            this.addStyleUnsafe("grid-column", value);
        }
    }
    addStyleGridColumnEnd(value) {
        if (this.validateStyleValue("grid-column-end", value)) {
            this.addStyleUnsafe("grid-column-end", value);
        }
    }
    addStyleGridColumnGap(value) {
        if (this.validateStyleValue("grid-column-gap", value)) {
            this.addStyleUnsafe("grid-column-gap", value);
        }
    }
    addStyleGridColumnStart(value) {
        if (this.validateStyleValue("grid-column-start", value)) {
            this.addStyleUnsafe("grid-column-start", value);
        }
    }
    addStyleGridGap(value) {
        if (this.validateStyleValue("grid-gap", value)) {
            this.addStyleUnsafe("grid-gap", value);
        }
    }
    addStyleGridRow(value) {
        if (this.validateStyleValue("grid-row", value)) {
            this.addStyleUnsafe("grid-row", value);
        }
    }
    addStyleGridRowEnd(value) {
        if (this.validateStyleValue("grid-row-end", value)) {
            this.addStyleUnsafe("grid-row-end", value);
        }
    }
    addStyleGridRowGap(value) {
        if (this.validateStyleValue("grid-row-gap", value)) {
            this.addStyleUnsafe("grid-row-gap", value);
        }
    }
    addStyleGridRowStart(value) {
        if (this.validateStyleValue("grid-row-start", value)) {
            this.addStyleUnsafe("grid-row-start", value);
        }
    }
    addStyleGridTemplate(value) {
        if (this.validateStyleValue("grid-template", value)) {
            this.addStyleUnsafe("grid-template", value);
        }
    }
    addStyleGridTemplateAreas(value) {
        if (this.validateStyleValue("grid-template-areas", value)) {
            this.addStyleUnsafe("grid-template-areas", value);
        }
    }
    addStyleGridTemplateColumns(value) {
        if (this.validateStyleValue("grid-template-columns", value)) {
            this.addStyleUnsafe("grid-template-columns", value);
        }
    }
    addStyleGridTemplateRows(value) {
        if (this.validateStyleValue("grid-template-rows", value)) {
            this.addStyleUnsafe("grid-template-rows", value);
        }
    }
    addStyleHangingPunctuation(value) {
        if (this.validateStyleValue("hanging-punctuation", value)) {
            this.addStyleUnsafe("hanging-punctuation", value);
        }
    }
    addStyleHeight(value) {
        if (this.validateStyleValue("height", value)) {
            this.addStyleUnsafe("height", value);
        }
    }
    addStyleHyphens(value) {
        if (this.validateStyleValue("hyphens", value)) {
            this.addStyleUnsafe("hyphens", value);
        }
    }
    addStyleImageRendering(value) {
        if (this.validateStyleValue("image-rendering", value)) {
            this.addStyleUnsafe("image-rendering", value);
        }
    }
    addStyleImport(value) {
        if (this.validateStyleValue("@import", value)) {
            this.addStyleUnsafe("@import", value);
        }
    }
    addStyleIsolation(value) {
        if (this.validateStyleValue("isolation", value)) {
            this.addStyleUnsafe("isolation", value);
        }
    }
    addStyleJustifyContent(value) {
        if (this.validateStyleValue("justify-content", value)) {
            this.addStyleUnsafe("justify-content", value);
        }
    }
    addStyleKeyframes(value) {
        if (this.validateStyleValue("@keyframes", value)) {
            this.addStyleUnsafe("@keyframes", value);
        }
    }
    addStyleLeft(value) {
        if (this.validateStyleValue("left", value)) {
            this.addStyleUnsafe("left", value);
        }
    }
    addStyleLetterSpacing(value) {
        if (this.validateStyleValue("letter-spacing", value)) {
            this.addStyleUnsafe("letter-spacing", value);
        }
    }
    addStyleLineHeight(value) {
        if (this.validateStyleValue("line-height", value)) {
            this.addStyleUnsafe("line-height", value);
        }
    }
    addStyleListStyle(value) {
        if (this.validateStyleValue("list-style", value)) {
            this.addStyleUnsafe("list-style", value);
        }
    }
    addStyleListStyleImage(value) {
        if (this.validateStyleValue("list-style-image", value)) {
            this.addStyleUnsafe("list-style-image", value);
        }
    }
    addStyleListStylePosition(value) {
        if (this.validateStyleValue("list-style-position", value)) {
            this.addStyleUnsafe("list-style-position", value);
        }
    }
    addStyleListStyleType(value) {
        if (this.validateStyleValue("list-style-type", value)) {
            this.addStyleUnsafe("list-style-type", value);
        }
    }
    addStyleMargin(value) {
        if (this.validateStyleValue("margin", value)) {
            this.addStyleUnsafe("margin", value);
        }
    }
    addStyleMarginBottom(value) {
        if (this.validateStyleValue("margin-bottom", value)) {
            this.addStyleUnsafe("margin-bottom", value);
        }
    }
    addStyleMarginLeft(value) {
        if (this.validateStyleValue("margin-left", value)) {
            this.addStyleUnsafe("margin-left", value);
        }
    }
    addStyleMarginRight(value) {
        if (this.validateStyleValue("margin-right", value)) {
            this.addStyleUnsafe("margin-right", value);
        }
    }
    addStyleMarginTop(value) {
        if (this.validateStyleValue("margin-top", value)) {
            this.addStyleUnsafe("margin-top", value);
        }
    }
    addStyleMaskImage(value) {
        if (this.validateStyleValue("mask-image", value)) {
            this.addStyleUnsafe("mask-image", value);
        }
    }
    addStyleMaskOrigin(value) {
        if (this.validateStyleValue("mask-origin", value)) {
            this.addStyleUnsafe("mask-origin", value);
        }
    }
    addStyleMaskPosition(value) {
        if (this.validateStyleValue("mask-position", value)) {
            this.addStyleUnsafe("mask-position", value);
        }
    }
    addStyleMaskRepeat(value) {
        if (this.validateStyleValue("mask-repeat", value)) {
            this.addStyleUnsafe("mask-repeat", value);
        }
    }
    addStyleMaskSize(value) {
        if (this.validateStyleValue("mask-size", value)) {
            this.addStyleUnsafe("mask-size", value);
        }
    }
    addStyleMaxHeight(value) {
        if (this.validateStyleValue("max-height", value)) {
            this.addStyleUnsafe("max-height", value);
        }
    }
    addStyleMaxWidth(value) {
        if (this.validateStyleValue("max-width", value)) {
            this.addStyleUnsafe("max-width", value);
        }
    }
    addStyleMedia(value) {
        if (this.validateStyleValue("@media", value)) {
            this.addStyleUnsafe("@media", value);
        }
    }
    addStyleMinHeight(value) {
        if (this.validateStyleValue("min-height", value)) {
            this.addStyleUnsafe("min-height", value);
        }
    }
    addStyleMinWidth(value) {
        if (this.validateStyleValue("min-width", value)) {
            this.addStyleUnsafe("min-width", value);
        }
    }
    addStyleMixBlendMode(value) {
        if (this.validateStyleValue("mix-blend-mode", value)) {
            this.addStyleUnsafe("mix-blend-mode", value);
        }
    }
    addStyleObjectFit(value) {
        if (this.validateStyleValue("object-fit", value)) {
            this.addStyleUnsafe("object-fit", value);
        }
    }
    addStyleObjectPosition(value) {
        if (this.validateStyleValue("object-position", value)) {
            this.addStyleUnsafe("object-position", value);
        }
    }
    addStyleOpacity(value) {
        if (this.validateStyleValue("opacity", value)) {
            this.addStyleUnsafe("opacity", value);
        }
    }
    addStyleOrder(value) {
        if (this.validateStyleValue("order", value)) {
            this.addStyleUnsafe("order", value);
        }
    }
    addStyleOrphans(value) {
        if (this.validateStyleValue("orphans", value)) {
            this.addStyleUnsafe("orphans", value);
        }
    }
    addStyleOutline(value) {
        if (this.validateStyleValue("outline", value)) {
            this.addStyleUnsafe("outline", value);
        }
    }
    addStyleOutlineColor(value) {
        if (this.validateStyleValue("outline-color", value)) {
            this.addStyleUnsafe("outline-color", value);
        }
    }
    addStyleOutlineOffset(value) {
        if (this.validateStyleValue("outline-offset", value)) {
            this.addStyleUnsafe("outline-offset", value);
        }
    }
    addStyleOutlineStyle(value) {
        if (this.validateStyleValue("outline-style", value)) {
            this.addStyleUnsafe("outline-style", value);
        }
    }
    addStyleOutlineWidth(value) {
        if (this.validateStyleValue("outline-width", value)) {
            this.addStyleUnsafe("outline-width", value);
        }
    }
    addStyleOverflow(value) {
        if (this.validateStyleValue("overflow", value)) {
            this.addStyleUnsafe("overflow", value);
        }
    }
    addStyleOverflowWrap(value) {
        if (this.validateStyleValue("overflow-wrap", value)) {
            this.addStyleUnsafe("overflow-wrap", value);
        }
    }
    addStyleOverflowX(value) {
        if (this.validateStyleValue("overflow-x", value)) {
            this.addStyleUnsafe("overflow-x", value);
        }
    }
    addStyleOverflowY(value) {
        if (this.validateStyleValue("overflow-y", value)) {
            this.addStyleUnsafe("overflow-y", value);
        }
    }
    addStylePadding(value) {
        if (this.validateStyleValue("padding", value)) {
            this.addStyleUnsafe("padding", value);
        }
    }
    addStylePaddingBottom(value) {
        if (this.validateStyleValue("padding-bottom", value)) {
            this.addStyleUnsafe("padding-bottom", value);
        }
    }
    addStylePaddingLeft(value) {
        if (this.validateStyleValue("padding-left", value)) {
            this.addStyleUnsafe("padding-left", value);
        }
    }
    addStylePaddingRight(value) {
        if (this.validateStyleValue("padding-right", value)) {
            this.addStyleUnsafe("padding-right", value);
        }
    }
    addStylePaddingTop(value) {
        if (this.validateStyleValue("padding-top", value)) {
            this.addStyleUnsafe("padding-top", value);
        }
    }
    addStylePageBreakAfter(value) {
        if (this.validateStyleValue("page-break-after", value)) {
            this.addStyleUnsafe("page-break-after", value);
        }
    }
    addStylePageBreakBefore(value) {
        if (this.validateStyleValue("page-break-before", value)) {
            this.addStyleUnsafe("page-break-before", value);
        }
    }
    addStylePageBreakInside(value) {
        if (this.validateStyleValue("page-break-inside", value)) {
            this.addStyleUnsafe("page-break-inside", value);
        }
    }
    addStylePerspective(value) {
        if (this.validateStyleValue("perspective", value)) {
            this.addStyleUnsafe("perspective", value);
        }
    }
    addStylePerspectiveOrigin(value) {
        if (this.validateStyleValue("perspective-origin", value)) {
            this.addStyleUnsafe("perspective-origin", value);
        }
    }
    addStylePointerEvents(value) {
        if (this.validateStyleValue("pointer-events", value)) {
            this.addStyleUnsafe("pointer-events", value);
        }
    }
    addStylePosition(value) {
        if (this.validateStyleValue("position", value)) {
            this.addStyleUnsafe("position", value);
        }
    }
    addStyleQuotes(value) {
        if (this.validateStyleValue("quotes", value)) {
            this.addStyleUnsafe("quotes", value);
        }
    }
    addStyleResize(value) {
        if (this.validateStyleValue("resize", value)) {
            this.addStyleUnsafe("resize", value);
        }
    }
    addStyleRight(value) {
        if (this.validateStyleValue("right", value)) {
            this.addStyleUnsafe("right", value);
        }
    }
    addStyleRowGap(value) {
        if (this.validateStyleValue("row-gap", value)) {
            this.addStyleUnsafe("row-gap", value);
        }
    }
    addStyleScrollBehavior(value) {
        if (this.validateStyleValue("scroll-behavior", value)) {
            this.addStyleUnsafe("scroll-behavior", value);
        }
    }
    addStyleTabSize(value) {
        if (this.validateStyleValue("tab-size", value)) {
            this.addStyleUnsafe("tab-size", value);
        }
    }
    addStyleTableLayout(value) {
        if (this.validateStyleValue("table-layout", value)) {
            this.addStyleUnsafe("table-layout", value);
        }
    }
    addStyleTextAlign(value) {
        if (this.validateStyleValue("text-align", value)) {
            this.addStyleUnsafe("text-align", value);
        }
    }
    addStyleTextAlignLast(value) {
        if (this.validateStyleValue("text-align-last", value)) {
            this.addStyleUnsafe("text-align-last", value);
        }
    }
    addStyleTextDecoration(value) {
        if (this.validateStyleValue("text-decoration", value)) {
            this.addStyleUnsafe("text-decoration", value);
        }
    }
    addStyleTextDecorationColor(value) {
        if (this.validateStyleValue("text-decoration-color", value)) {
            this.addStyleUnsafe("text-decoration-color", value);
        }
    }
    addStyleTextDecorationLine(value) {
        if (this.validateStyleValue("text-decoration-line", value)) {
            this.addStyleUnsafe("text-decoration-line", value);
        }
    }
    addStyleTextDecorationStyle(value) {
        if (this.validateStyleValue("text-decoration-style", value)) {
            this.addStyleUnsafe("text-decoration-style", value);
        }
    }
    addStyleTextIndent(value) {
        if (this.validateStyleValue("text-indent", value)) {
            this.addStyleUnsafe("text-indent", value);
        }
    }
    addStyleTextJustify(value) {
        if (this.validateStyleValue("text-justify", value)) {
            this.addStyleUnsafe("text-justify", value);
        }
    }
    addStyleTextOverflow(value) {
        if (this.validateStyleValue("text-overflow", value)) {
            this.addStyleUnsafe("text-overflow", value);
        }
    }
    addStyleTextShadow(value) {
        if (this.validateStyleValue("text-shadow", value)) {
            this.addStyleUnsafe("text-shadow", value);
        }
    }
    addStyleTextTransform(value) {
        if (this.validateStyleValue("text-transform", value)) {
            this.addStyleUnsafe("text-transform", value);
        }
    }
    addStyleTop(value) {
        if (this.validateStyleValue("top", value)) {
            this.addStyleUnsafe("top", value);
        }
    }
    addStyleTransform(value) {
        if (this.validateStyleValue("transform", value)) {
            this.addStyleUnsafe("transform", value);
        }
    }
    addStyleTransformOrigin(value) {
        if (this.validateStyleValue("transform-origin", value)) {
            this.addStyleUnsafe("transform-origin", value);
        }
    }
    addStyleTransformStyle(value) {
        if (this.validateStyleValue("transform-style", value)) {
            this.addStyleUnsafe("transform-style", value);
        }
    }
    addStyleTransition(value) {
        if (this.validateStyleValue("transition", value)) {
            this.addStyleUnsafe("transition", value);
        }
    }
    addStyleTransitionDelay(value) {
        if (this.validateStyleValue("transition-delay", value)) {
            this.addStyleUnsafe("transition-delay", value);
        }
    }
    addStyleTransitionDuration(value) {
        if (this.validateStyleValue("transition-duration", value)) {
            this.addStyleUnsafe("transition-duration", value);
        }
    }
    addStyleTransitionProperty(value) {
        if (this.validateStyleValue("transition-property", value)) {
            this.addStyleUnsafe("transition-property", value);
        }
    }
    addStyleTransitionTimingFunction(value) {
        if (this.validateStyleValue("transition-timing-function", value)) {
            this.addStyleUnsafe("transition-timing-function", value);
        }
    }
    addStyleUnicodeBidi(value) {
        if (this.validateStyleValue("unicode-bidi", value)) {
            this.addStyleUnsafe("unicode-bidi", value);
        }
    }
    addStyleUserSelect(value) {
        if (this.validateStyleValue("user-select", value)) {
            this.addStyleUnsafe("user-select", value);
        }
    }
    addStyleVerticalAlign(value) {
        if (this.validateStyleValue("vertical-align", value)) {
            this.addStyleUnsafe("vertical-align", value);
        }
    }
    addStyleVisibility(value) {
        if (this.validateStyleValue("visibility", value)) {
            this.addStyleUnsafe("visibility", value);
        }
    }
    addStyleWhiteSpace(value) {
        if (this.validateStyleValue("white-space", value)) {
            this.addStyleUnsafe("white-space", value);
        }
    }
    addStyleWidows(value) {
        if (this.validateStyleValue("widows", value)) {
            this.addStyleUnsafe("widows", value);
        }
    }
    addStyleWidth(value) {
        if (this.validateStyleValue("width", value)) {
            this.addStyleUnsafe("width", value);
        }
    }
    addStyleWordBreak(value) {
        if (this.validateStyleValue("word-break", value)) {
            this.addStyleUnsafe("word-break", value);
        }
    }
    addStyleWordSpacing(value) {
        if (this.validateStyleValue("word-spacing", value)) {
            this.addStyleUnsafe("word-spacing", value);
        }
    }
    addStyleWordWrap(value) {
        if (this.validateStyleValue("word-wrap", value)) {
            this.addStyleUnsafe("word-wrap", value);
        }
    }
    addStyleWritingMode(value) {
        if (this.validateStyleValue("writing-mode", value)) {
            this.addStyleUnsafe("writing-mode", value);
        }
    }
    addStyleZIndex(value) {
        if (this.validateStyleValue("z-index", value)) {
            this.addStyleUnsafe("z-index", value);
        }
    }
    addStyleFontFeatureValues(value) {
        if (this.validateStyleValue("@font-feature-values", value)) {
            this.addStyleUnsafe("@font-feature-values", value);
        }
    }
    addStyleFontLanguageOverride(value) {
        if (this.validateStyleValue("font-language-override", value)) {
            this.addStyleUnsafe("font-language-override", value);
        }
    }
    addStyleFontSynthesis(value) {
        if (this.validateStyleValue("font-synthesis", value)) {
            this.addStyleUnsafe("font-synthesis", value);
        }
    }
    addStyleFontVariantAlternates(value) {
        if (this.validateStyleValue("font-variant-alternates", value)) {
            this.addStyleUnsafe("font-variant-alternates", value);
        }
    }
    addStyleFontVariantEastAsian(value) {
        if (this.validateStyleValue("font-variant-east-asian", value)) {
            this.addStyleUnsafe("font-variant-east-asian", value);
        }
    }
    addStyleFontVariantLigatures(value) {
        if (this.validateStyleValue("font-variant-ligatures", value)) {
            this.addStyleUnsafe("font-variant-ligatures", value);
        }
    }
    addStyleFontVariantNumeric(value) {
        if (this.validateStyleValue("font-variant-numeric", value)) {
            this.addStyleUnsafe("font-variant-numeric", value);
        }
    }
    addStyleFontVariantPosition(value) {
        if (this.validateStyleValue("font-variant-position", value)) {
            this.addStyleUnsafe("font-variant-position", value);
        }
    }
    addStyleLineBreak(value) {
        if (this.validateStyleValue("line-break", value)) {
            this.addStyleUnsafe("line-break", value);
        }
    }
    addStyleMask(value) {
        if (this.validateStyleValue("mask", value)) {
            this.addStyleUnsafe("mask", value);
        }
    }
    addStyleMaskClip(value) {
        if (this.validateStyleValue("mask-clip", value)) {
            this.addStyleUnsafe("mask-clip", value);
        }
    }
    addStyleMaskComposite(value) {
        if (this.validateStyleValue("mask-composite", value)) {
            this.addStyleUnsafe("mask-composite", value);
        }
    }
    addStyleMaskMode(value) {
        if (this.validateStyleValue("mask-mode", value)) {
            this.addStyleUnsafe("mask-mode", value);
        }
    }
    addStyleMaskType(value) {
        if (this.validateStyleValue("mask-type", value)) {
            this.addStyleUnsafe("mask-type", value);
        }
    }
    addStyleTextCombineUpright(value) {
        if (this.validateStyleValue("text-combine-upright", value)) {
            this.addStyleUnsafe("text-combine-upright", value);
        }
    }
    addStyleTextOrientation(value) {
        if (this.validateStyleValue("text-orientation", value)) {
            this.addStyleUnsafe("text-orientation", value);
        }
    }
    addStyleTextUnderlinePosition(value) {
        if (this.validateStyleValue("text-underline-position", value)) {
            this.addStyleUnsafe("text-underline-position", value);
        }
    }
}
exports.HTMLElement = HTMLElement;
//# sourceMappingURL=html_element.js.map