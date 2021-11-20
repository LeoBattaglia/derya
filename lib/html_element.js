"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLElement = void 0;
//Import
const html_tag_attribute_1 = require("./html_tag_attribute");
const sys = require("samara");
const properties = require("./ref/css/properties.json");
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
        if (this.tag && !this.closed && !sys.isNull(name)) {
            this.attributes.push(new html_tag_attribute_1.HTMLTagAttribute(name, value));
        }
    }
    addStyle(name, value) {
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
    addStyleGap(value) {
        this.addStyle("gap", value);
    }
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
    validateStyleValue(name, value) {
        let property;
        for (let prop of properties.properties) {
            if (prop.name === name) {
                for (let val of prop.values) {
                    if (val.value.indexOf("#") < 0 && val.value.indexOf("@") < 0) {
                        if (val.value === value) {
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
    //Generated Methods
    addAttributeAccesskey(value) {
        this.addAttribute("accesskey", value);
    }
    addAttributeClass(value) {
        this.addAttribute("class", value);
    }
    addAttributeContenteditable(value) {
        this.addAttribute("contenteditable", value);
    }
    addAttributeData(value) {
        this.addAttribute("data-*", value);
    }
    addAttributeDir(value) {
        this.addAttribute("dir", value);
    }
    addAttributeDraggable(value) {
        this.addAttribute("draggable", value);
    }
    addAttributeHidden(value) {
        this.addAttribute("hidden", value);
    }
    addAttributeId(value) {
        this.addAttribute("id", value);
    }
    addAttributeLang(value) {
        this.addAttribute("lang", value);
    }
    addAttributeSpellcheck(value) {
        this.addAttribute("spellcheck", value);
    }
    addAttributeStyle(value) {
        this.addAttribute("style", value);
    }
    addAttributeTabindex(value) {
        this.addAttribute("tabindex", value);
    }
    addAttributeTitle(value) {
        this.addAttribute("title", value);
    }
    addAttributeTranslate(value) {
        this.addAttribute("translate", value);
    }
    addAttributeDownload(value) {
        this.addAttribute("download", value);
    }
    addAttributeHref(value) {
        this.addAttribute("href", value);
    }
    addAttributeHreflang(value) {
        this.addAttribute("hreflang", value);
    }
    addAttributeMedia(value) {
        this.addAttribute("media", value);
    }
    addAttributePing(value) {
        this.addAttribute("ping", value);
    }
    addAttributeReferrerpolicy(value) {
        this.addAttribute("referrerpolicy", value);
    }
    addAttributeRel(value) {
        this.addAttribute("rel", value);
    }
    addAttributeTarget(value) {
        this.addAttribute("target", value);
    }
    addAttributeType(value) {
        this.addAttribute("type", value);
    }
    addAttributeAlt(value) {
        this.addAttribute("alt", value);
    }
    addAttributeCoords(value) {
        this.addAttribute("coords", value);
    }
    addAttributeShape(value) {
        this.addAttribute("shape", value);
    }
    addAttributeAutoplay(value) {
        this.addAttribute("autoplay", value);
    }
    addAttributeControls(value) {
        this.addAttribute("controls", value);
    }
    addAttributeLoop(value) {
        this.addAttribute("loop", value);
    }
    addAttributeMuted(value) {
        this.addAttribute("muted", value);
    }
    addAttributePreload(value) {
        this.addAttribute("preload", value);
    }
    addAttributeSrc(value) {
        this.addAttribute("src", value);
    }
    addAttributeCite(value) {
        this.addAttribute("cite", value);
    }
    addAttributeAutofocus(value) {
        this.addAttribute("autofocus", value);
    }
    addAttributeDisabled(value) {
        this.addAttribute("disabled", value);
    }
    addAttributeForm(value) {
        this.addAttribute("form", value);
    }
    addAttributeFormaction(value) {
        this.addAttribute("formaction", value);
    }
    addAttributeFormenctype(value) {
        this.addAttribute("formenctype", value);
    }
    addAttributeFormmethod(value) {
        this.addAttribute("formmethod", value);
    }
    addAttributeFormnovalidate(value) {
        this.addAttribute("formnovalidate", value);
    }
    addAttributeFormtarget(value) {
        this.addAttribute("formtarget", value);
    }
    addAttributeName(value) {
        this.addAttribute("name", value);
    }
    addAttributeValue(value) {
        this.addAttribute("value", value);
    }
    addAttributeHeight(value) {
        this.addAttribute("height", value);
    }
    addAttributeWidth(value) {
        this.addAttribute("width", value);
    }
    addAttributeSpan(value) {
        this.addAttribute("span", value);
    }
    addAttributeDatetime(value) {
        this.addAttribute("datetime", value);
    }
    addAttributeOpen(value) {
        this.addAttribute("open", value);
    }
    addAttributeAcceptCharset(value) {
        this.addAttribute("accept-charset", value);
    }
    addAttributeActionCharset(value) {
        this.addAttribute("action-charset", value);
    }
    addAttributeAutocomplete(value) {
        this.addAttribute("autocomplete", value);
    }
    addAttributeEnctype(value) {
        this.addAttribute("enctype", value);
    }
    addAttributeMethod(value) {
        this.addAttribute("method", value);
    }
    addAttributeNovalidate(value) {
        this.addAttribute("novalidate", value);
    }
    addAttributeCrossorigin(value) {
        this.addAttribute("crossorigin", value);
    }
    addAttributeIsmap(value) {
        this.addAttribute("ismap", value);
    }
    addAttributeLoading(value) {
        this.addAttribute("loading", value);
    }
    addAttributeLongdesc(value) {
        this.addAttribute("longdesc", value);
    }
    addAttributeSizes(value) {
        this.addAttribute("sizes", value);
    }
    addAttributeSrcset(value) {
        this.addAttribute("srcset", value);
    }
    addAttributeUsemap(value) {
        this.addAttribute("usemap", value);
    }
    addAttributeAccept(value) {
        this.addAttribute("accept", value);
    }
    addAttributeChecked(value) {
        this.addAttribute("checked", value);
    }
    addAttributeDirname(value) {
        this.addAttribute("dirname", value);
    }
    addAttributeList(value) {
        this.addAttribute("list", value);
    }
    addAttributeMax(value) {
        this.addAttribute("max", value);
    }
    addAttributeMaxlength(value) {
        this.addAttribute("maxlength", value);
    }
    addAttributeMin(value) {
        this.addAttribute("min", value);
    }
    addAttributeMinlength(value) {
        this.addAttribute("minlength", value);
    }
    addAttributeMultiple(value) {
        this.addAttribute("multiple", value);
    }
    addAttributePattern(value) {
        this.addAttribute("pattern", value);
    }
    addAttributePlaceholder(value) {
        this.addAttribute("placeholder", value);
    }
    addAttributeReadonly(value) {
        this.addAttribute("readonly", value);
    }
    addAttributeRequired(value) {
        this.addAttribute("required", value);
    }
    addAttributeSize(value) {
        this.addAttribute("size", value);
    }
    addAttributeStep(value) {
        this.addAttribute("step", value);
    }
    addAttributeFor(value) {
        this.addAttribute("for", value);
    }
    addAttributeCharset(value) {
        this.addAttribute("charset", value);
    }
    addAttributeContent(value) {
        this.addAttribute("content", value);
    }
    addAttributeHttpEquiv(value) {
        this.addAttribute("http-equiv", value);
    }
    addAttributeHigh(value) {
        this.addAttribute("high", value);
    }
    addAttributeLow(value) {
        this.addAttribute("low", value);
    }
    addAttributeOptimum(value) {
        this.addAttribute("optimum", value);
    }
    addAttributeTypemustmatch(value) {
        this.addAttribute("typemustmatch", value);
    }
    addAttributeReversed(value) {
        this.addAttribute("reversed", value);
    }
    addAttributeStart(value) {
        this.addAttribute("start", value);
    }
    addAttributeLabel(value) {
        this.addAttribute("label", value);
    }
    addAttributeSelected(value) {
        this.addAttribute("selected", value);
    }
    addAttributeAsync(value) {
        this.addAttribute("async", value);
    }
    addAttributeDefer(value) {
        this.addAttribute("defer", value);
    }
    addAttributeIntegrity(value) {
        this.addAttribute("integrity", value);
    }
    addAttributeNomodule(value) {
        this.addAttribute("nomodule", value);
    }
    addAttributeColspan(value) {
        this.addAttribute("colspan", value);
    }
    addAttributeHeaders(value) {
        this.addAttribute("headers", value);
    }
    addAttributeRowspan(value) {
        this.addAttribute("rowspan", value);
    }
    addAttributeCols(value) {
        this.addAttribute("cols", value);
    }
    addAttributeRows(value) {
        this.addAttribute("rows", value);
    }
    addAttributeWrap(value) {
        this.addAttribute("wrap", value);
    }
    addAttributeAbbr(value) {
        this.addAttribute("abbr", value);
    }
    addAttributeScope(value) {
        this.addAttribute("scope", value);
    }
    addAttributeDefault(value) {
        this.addAttribute("default", value);
    }
    addAttributeKind(value) {
        this.addAttribute("kind", value);
    }
    addAttributeSrclang(value) {
        this.addAttribute("srclang", value);
    }
    addAttributePoster(value) {
        this.addAttribute("poster", value);
    }
    addStyleAlignContent(value) {
        if (this.validateStyleValue("align-content", value)) {
            this.addStyle("align-content", value);
        }
    }
    addStyleAlignItems(value) {
        if (this.validateStyleValue("align-items", value)) {
            this.addStyle("align-items", value);
        }
    }
    addStyleAlignSelf(value) {
        if (this.validateStyleValue("align-self", value)) {
            this.addStyle("align-self", value);
        }
    }
    addStyleAll(value) {
        if (this.validateStyleValue("all", value)) {
            this.addStyle("all", value);
        }
    }
    addStyleAnimation(value) {
        if (this.validateStyleValue("animation", value)) {
            this.addStyle("animation", value);
        }
    }
    addStyleAnimationDelay(value) {
        if (this.validateStyleValue("animation-delay", value)) {
            this.addStyle("animation-delay", value);
        }
    }
    addStyleAnimationDirection(value) {
        if (this.validateStyleValue("animation-direction", value)) {
            this.addStyle("animation-direction", value);
        }
    }
    addStyleAnimationDuration(value) {
        if (this.validateStyleValue("animation-duration", value)) {
            this.addStyle("animation-duration", value);
        }
    }
    addStyleAnimationFillMode(value) {
        if (this.validateStyleValue("animation-fill-mode", value)) {
            this.addStyle("animation-fill-mode", value);
        }
    }
    addStyleAnimationIterationCount(value) {
        if (this.validateStyleValue("animation-iteration-count", value)) {
            this.addStyle("animation-iteration-count", value);
        }
    }
    addStyleAnimationName(value) {
        if (this.validateStyleValue("animation-name", value)) {
            this.addStyle("animation-name", value);
        }
    }
    addStyleAnimationPlayState(value) {
        if (this.validateStyleValue("animation-play-state", value)) {
            this.addStyle("animation-play-state", value);
        }
    }
    addStyleAnimationTimingFunction(value) {
        if (this.validateStyleValue("animation-timing-function", value)) {
            this.addStyle("animation-timing-function", value);
        }
    }
    addStyleBackfaceVisibility(value) {
        if (this.validateStyleValue("backface-visibility", value)) {
            this.addStyle("backface-visibility", value);
        }
    }
    addStyleBackground(value) {
        if (this.validateStyleValue("background", value)) {
            this.addStyle("background", value);
        }
    }
    addStyleBackgroundAttachment(value) {
        if (this.validateStyleValue("background-attachment", value)) {
            this.addStyle("background-attachment", value);
        }
    }
    addStyleBackgroundBlendMode(value) {
        if (this.validateStyleValue("background-blend-mode", value)) {
            this.addStyle("background-blend-mode", value);
        }
    }
    addStyleBackgroundClip(value) {
        if (this.validateStyleValue("background-clip", value)) {
            this.addStyle("background-clip", value);
        }
    }
    addStyleBackgroundColor(value) {
        if (this.validateStyleValue("background-color", value)) {
            this.addStyle("background-color", value);
        }
    }
    addStyleBackgroundImage(value) {
        if (this.validateStyleValue("background-image", value)) {
            this.addStyle("background-image", value);
        }
    }
    addStyleBackgroundOrigin(value) {
        if (this.validateStyleValue("background-origin", value)) {
            this.addStyle("background-origin", value);
        }
    }
    addStyleBackgroundPosition(value) {
        if (this.validateStyleValue("background-position", value)) {
            this.addStyle("background-position", value);
        }
    }
    addStyleBackgroundRepeat(value) {
        if (this.validateStyleValue("background-repeat", value)) {
            this.addStyle("background-repeat", value);
        }
    }
    addStyleBackgroundSize(value) {
        if (this.validateStyleValue("background-size", value)) {
            this.addStyle("background-size", value);
        }
    }
    addStyleBorder(value) {
        if (this.validateStyleValue("border", value)) {
            this.addStyle("border", value);
        }
    }
    addStyleBorderBottom(value) {
        if (this.validateStyleValue("border-bottom", value)) {
            this.addStyle("border-bottom", value);
        }
    }
    addStyleBorderBottomColor(value) {
        if (this.validateStyleValue("border-bottom-color", value)) {
            this.addStyle("border-bottom-color", value);
        }
    }
    addStyleBorderBottomLeftRadius(value) {
        if (this.validateStyleValue("border-bottom-left-radius", value)) {
            this.addStyle("border-bottom-left-radius", value);
        }
    }
    addStyleBorderBottomRightRadius(value) {
        if (this.validateStyleValue("border-bottom-right-radius", value)) {
            this.addStyle("border-bottom-right-radius", value);
        }
    }
    addStyleBorderBottomStyle(value) {
        if (this.validateStyleValue("border-bottom-style", value)) {
            this.addStyle("border-bottom-style", value);
        }
    }
    addStyleBorderBottomWidth(value) {
        if (this.validateStyleValue("border-bottom-width", value)) {
            this.addStyle("border-bottom-width", value);
        }
    }
    addStyleBorderCollapse(value) {
        if (this.validateStyleValue("border-collapse", value)) {
            this.addStyle("border-collapse", value);
        }
    }
    addStyleBorderColor(value) {
        if (this.validateStyleValue("border-color", value)) {
            this.addStyle("border-color", value);
        }
    }
    addStyleBorderImage(value) {
        if (this.validateStyleValue("border-image", value)) {
            this.addStyle("border-image", value);
        }
    }
    addStyleBorderImageOutset(value) {
        if (this.validateStyleValue("border-image-outset", value)) {
            this.addStyle("border-image-outset", value);
        }
    }
    addStyleBorderImageRepeat(value) {
        if (this.validateStyleValue("border-image-repeat", value)) {
            this.addStyle("border-image-repeat", value);
        }
    }
    addStyleBorderImageSlice(value) {
        if (this.validateStyleValue("border-image-slice", value)) {
            this.addStyle("border-image-slice", value);
        }
    }
    addStyleBorderImageSource(value) {
        if (this.validateStyleValue("border-image-source", value)) {
            this.addStyle("border-image-source", value);
        }
    }
    addStyleBorderImageWidth(value) {
        if (this.validateStyleValue("border-image-width", value)) {
            this.addStyle("border-image-width", value);
        }
    }
    addStyleBorderLeft(value) {
        if (this.validateStyleValue("border-left", value)) {
            this.addStyle("border-left", value);
        }
    }
    addStyleBorderLeftColor(value) {
        if (this.validateStyleValue("border-left-color", value)) {
            this.addStyle("border-left-color", value);
        }
    }
    addStyleBorderLeftStyle(value) {
        if (this.validateStyleValue("border-left-style", value)) {
            this.addStyle("border-left-style", value);
        }
    }
    addStyleBorderLeftWidth(value) {
        if (this.validateStyleValue("border-left-width", value)) {
            this.addStyle("border-left-width", value);
        }
    }
    addStyleBorderRadius(value) {
        if (this.validateStyleValue("border-radius", value)) {
            this.addStyle("border-radius", value);
        }
    }
    addStyleBorderRight(value) {
        if (this.validateStyleValue("border-right", value)) {
            this.addStyle("border-right", value);
        }
    }
    addStyleBorderRightColor(value) {
        if (this.validateStyleValue("border-right-color", value)) {
            this.addStyle("border-right-color", value);
        }
    }
    addStyleBorderRightStyle(value) {
        if (this.validateStyleValue("border-right-style", value)) {
            this.addStyle("border-right-style", value);
        }
    }
    addStyleBorderRightWidth(value) {
        if (this.validateStyleValue("border-right-width", value)) {
            this.addStyle("border-right-width", value);
        }
    }
    addStyleBorderSpacing(value) {
        if (this.validateStyleValue("border-spacing", value)) {
            this.addStyle("border-spacing", value);
        }
    }
    addStyleBorderStyle(value) {
        if (this.validateStyleValue("border-style", value)) {
            this.addStyle("border-style", value);
        }
    }
    addStyleBorderTop(value) {
        if (this.validateStyleValue("border-top", value)) {
            this.addStyle("border-top", value);
        }
    }
    addStyleBorderTopColor(value) {
        if (this.validateStyleValue("border-top-color", value)) {
            this.addStyle("border-top-color", value);
        }
    }
    addStyleBorderTopLeftRadius(value) {
        if (this.validateStyleValue("border-top-left-radius", value)) {
            this.addStyle("border-top-left-radius", value);
        }
    }
    addStyleBorderTopRightRadius(value) {
        if (this.validateStyleValue("border-top-right-radius", value)) {
            this.addStyle("border-top-right-radius", value);
        }
    }
    addStyleBorderTopStyle(value) {
        if (this.validateStyleValue("border-top-style", value)) {
            this.addStyle("border-top-style", value);
        }
    }
    addStyleBorderTopWidth(value) {
        if (this.validateStyleValue("border-top-width", value)) {
            this.addStyle("border-top-width", value);
        }
    }
    addStyleBottom(value) {
        if (this.validateStyleValue("bottom", value)) {
            this.addStyle("bottom", value);
        }
    }
    addStyleBoxDecorationBreak(value) {
        if (this.validateStyleValue("box-decoration-break", value)) {
            this.addStyle("box-decoration-break", value);
        }
    }
    addStyleBoxShadow(value) {
        if (this.validateStyleValue("box-shadow", value)) {
            this.addStyle("box-shadow", value);
        }
    }
    addStyleBoxSizing(value) {
        if (this.validateStyleValue("box-sizing", value)) {
            this.addStyle("box-sizing", value);
        }
    }
    addStyleBreakAfter(value) {
        if (this.validateStyleValue("break-after", value)) {
            this.addStyle("break-after", value);
        }
    }
    addStyleBreakBefore(value) {
        if (this.validateStyleValue("break-before", value)) {
            this.addStyle("break-before", value);
        }
    }
    addStyleBreakInside(value) {
        if (this.validateStyleValue("break-inside", value)) {
            this.addStyle("break-inside", value);
        }
    }
    addStyleCaptionSide(value) {
        if (this.validateStyleValue("caption-side", value)) {
            this.addStyle("caption-side", value);
        }
    }
    addStyleCaretColor(value) {
        if (this.validateStyleValue("caret-color", value)) {
            this.addStyle("caret-color", value);
        }
    }
    addStyleCharset(value) {
        if (this.validateStyleValue("@charset", value)) {
            this.addStyle("@charset", value);
        }
    }
    addStyleClear(value) {
        if (this.validateStyleValue("clear", value)) {
            this.addStyle("clear", value);
        }
    }
    addStyleClip(value) {
        if (this.validateStyleValue("clip", value)) {
            this.addStyle("clip", value);
        }
    }
    addStyleColor(value) {
        if (this.validateStyleValue("color", value)) {
            this.addStyle("color", value);
        }
    }
    addStyleColumnCount(value) {
        if (this.validateStyleValue("column-count", value)) {
            this.addStyle("column-count", value);
        }
    }
    addStyleColumnFill(value) {
        if (this.validateStyleValue("column-fill", value)) {
            this.addStyle("column-fill", value);
        }
    }
    addStyleColumnGap(value) {
        if (this.validateStyleValue("column-gap", value)) {
            this.addStyle("column-gap", value);
        }
    }
    addStyleColumnRule(value) {
        if (this.validateStyleValue("column-rule", value)) {
            this.addStyle("column-rule", value);
        }
    }
    addStyleColumnRuleColor(value) {
        if (this.validateStyleValue("column-rule-color", value)) {
            this.addStyle("column-rule-color", value);
        }
    }
    addStyleColumnRuleStyle(value) {
        if (this.validateStyleValue("column-rule-style", value)) {
            this.addStyle("column-rule-style", value);
        }
    }
    addStyleColumnRuleWidth(value) {
        if (this.validateStyleValue("column-rule-width", value)) {
            this.addStyle("column-rule-width", value);
        }
    }
    addStyleColumnSpan(value) {
        if (this.validateStyleValue("column-span", value)) {
            this.addStyle("column-span", value);
        }
    }
    addStyleColumnWidth(value) {
        if (this.validateStyleValue("column-width", value)) {
            this.addStyle("column-width", value);
        }
    }
    addStyleColumns(value) {
        if (this.validateStyleValue("columns", value)) {
            this.addStyle("columns", value);
        }
    }
    addStyleContent(value) {
        if (this.validateStyleValue("content", value)) {
            this.addStyle("content", value);
        }
    }
    addStyleCounterIncrement(value) {
        if (this.validateStyleValue("counter-increment", value)) {
            this.addStyle("counter-increment", value);
        }
    }
    addStyleCounterReset(value) {
        if (this.validateStyleValue("counter-reset", value)) {
            this.addStyle("counter-reset", value);
        }
    }
    addStyleCursor(value) {
        if (this.validateStyleValue("cursor", value)) {
            this.addStyle("cursor", value);
        }
    }
    addStyleDirection(value) {
        if (this.validateStyleValue("direction", value)) {
            this.addStyle("direction", value);
        }
    }
    addStyleDisplay(value) {
        if (this.validateStyleValue("display", value)) {
            this.addStyle("display", value);
        }
    }
    addStyleEmptyCells(value) {
        if (this.validateStyleValue("empty-cells", value)) {
            this.addStyle("empty-cells", value);
        }
    }
    addStyleFilter(value) {
        if (this.validateStyleValue("filter", value)) {
            this.addStyle("filter", value);
        }
    }
    addStyleFlex(value) {
        if (this.validateStyleValue("flex", value)) {
            this.addStyle("flex", value);
        }
    }
    addStyleFlexBasis(value) {
        if (this.validateStyleValue("flex-basis", value)) {
            this.addStyle("flex-basis", value);
        }
    }
    addStyleFlexDirection(value) {
        if (this.validateStyleValue("flex-direction", value)) {
            this.addStyle("flex-direction", value);
        }
    }
    addStyleFlexFlow(value) {
        if (this.validateStyleValue("flex-flow", value)) {
            this.addStyle("flex-flow", value);
        }
    }
    addStyleFlexGrow(value) {
        if (this.validateStyleValue("flex-grow", value)) {
            this.addStyle("flex-grow", value);
        }
    }
    addStyleFlexShrink(value) {
        if (this.validateStyleValue("flex-shrink", value)) {
            this.addStyle("flex-shrink", value);
        }
    }
    addStyleFlexWrap(value) {
        if (this.validateStyleValue("flex-wrap", value)) {
            this.addStyle("flex-wrap", value);
        }
    }
    addStyleFloat(value) {
        if (this.validateStyleValue("float", value)) {
            this.addStyle("float", value);
        }
    }
    addStyleFont(value) {
        if (this.validateStyleValue("font", value)) {
            this.addStyle("font", value);
        }
    }
    addStyleFontFace(value) {
        if (this.validateStyleValue("@font-face", value)) {
            this.addStyle("@font-face", value);
        }
    }
    addStyleFontFamily(value) {
        if (this.validateStyleValue("font-family", value)) {
            this.addStyle("font-family", value);
        }
    }
    addStyleFontFeatureSettings(value) {
        if (this.validateStyleValue("font-feature-settings", value)) {
            this.addStyle("font-feature-settings", value);
        }
    }
    addStyleFontKerning(value) {
        if (this.validateStyleValue("font-kerning", value)) {
            this.addStyle("font-kerning", value);
        }
    }
    addStyleFontSize(value) {
        if (this.validateStyleValue("font-size", value)) {
            this.addStyle("font-size", value);
        }
    }
    addStyleFontSizeAdjust(value) {
        if (this.validateStyleValue("font-size-adjust", value)) {
            this.addStyle("font-size-adjust", value);
        }
    }
    addStyleFontStretch(value) {
        if (this.validateStyleValue("font-stretch", value)) {
            this.addStyle("font-stretch", value);
        }
    }
    addStyleFontStyle(value) {
        if (this.validateStyleValue("font-style", value)) {
            this.addStyle("font-style", value);
        }
    }
    addStyleFontVariant(value) {
        if (this.validateStyleValue("font-variant", value)) {
            this.addStyle("font-variant", value);
        }
    }
    addStyleFontVariantCaps(value) {
        if (this.validateStyleValue("font-variant-caps", value)) {
            this.addStyle("font-variant-caps", value);
        }
    }
    addStyleFontWeight(value) {
        if (this.validateStyleValue("font-weight", value)) {
            this.addStyle("font-weight", value);
        }
    }
    addStyleGrid(value) {
        if (this.validateStyleValue("grid", value)) {
            this.addStyle("grid", value);
        }
    }
    addStyleGridArea(value) {
        if (this.validateStyleValue("grid-area", value)) {
            this.addStyle("grid-area", value);
        }
    }
    addStyleGridAutoColumns(value) {
        if (this.validateStyleValue("grid-auto-columns", value)) {
            this.addStyle("grid-auto-columns", value);
        }
    }
    addStyleGridAutoFlow(value) {
        if (this.validateStyleValue("grid-auto-flow", value)) {
            this.addStyle("grid-auto-flow", value);
        }
    }
    addStyleGridAutoRows(value) {
        if (this.validateStyleValue("grid-auto-rows", value)) {
            this.addStyle("grid-auto-rows", value);
        }
    }
    addStyleGridColumn(value) {
        if (this.validateStyleValue("grid-column", value)) {
            this.addStyle("grid-column", value);
        }
    }
    addStyleGridColumnEnd(value) {
        if (this.validateStyleValue("grid-column-end", value)) {
            this.addStyle("grid-column-end", value);
        }
    }
    addStyleGridColumnGap(value) {
        if (this.validateStyleValue("grid-column-gap", value)) {
            this.addStyle("grid-column-gap", value);
        }
    }
    addStyleGridColumnStart(value) {
        if (this.validateStyleValue("grid-column-start", value)) {
            this.addStyle("grid-column-start", value);
        }
    }
    addStyleGridGap(value) {
        if (this.validateStyleValue("grid-gap", value)) {
            this.addStyle("grid-gap", value);
        }
    }
    addStyleGridRow(value) {
        if (this.validateStyleValue("grid-row", value)) {
            this.addStyle("grid-row", value);
        }
    }
    addStyleGridRowEnd(value) {
        if (this.validateStyleValue("grid-row-end", value)) {
            this.addStyle("grid-row-end", value);
        }
    }
    addStyleGridRowGap(value) {
        if (this.validateStyleValue("grid-row-gap", value)) {
            this.addStyle("grid-row-gap", value);
        }
    }
    addStyleGridRowStart(value) {
        if (this.validateStyleValue("grid-row-start", value)) {
            this.addStyle("grid-row-start", value);
        }
    }
    addStyleGridTemplate(value) {
        if (this.validateStyleValue("grid-template", value)) {
            this.addStyle("grid-template", value);
        }
    }
    addStyleGridTemplateAreas(value) {
        if (this.validateStyleValue("grid-template-areas", value)) {
            this.addStyle("grid-template-areas", value);
        }
    }
    addStyleGridTemplateColumns(value) {
        if (this.validateStyleValue("grid-template-columns", value)) {
            this.addStyle("grid-template-columns", value);
        }
    }
    addStyleGridTemplateRows(value) {
        if (this.validateStyleValue("grid-template-rows", value)) {
            this.addStyle("grid-template-rows", value);
        }
    }
    addStyleHangingPunctuation(value) {
        if (this.validateStyleValue("hanging-punctuation", value)) {
            this.addStyle("hanging-punctuation", value);
        }
    }
    addStyleHeight(value) {
        if (this.validateStyleValue("height", value)) {
            this.addStyle("height", value);
        }
    }
    addStyleHyphens(value) {
        if (this.validateStyleValue("hyphens", value)) {
            this.addStyle("hyphens", value);
        }
    }
    addStyleImport(value) {
        if (this.validateStyleValue("@import", value)) {
            this.addStyle("@import", value);
        }
    }
    addStyleIsolation(value) {
        if (this.validateStyleValue("isolation", value)) {
            this.addStyle("isolation", value);
        }
    }
    addStyleJustifyContent(value) {
        if (this.validateStyleValue("justify-content", value)) {
            this.addStyle("justify-content", value);
        }
    }
    addStyleKeyframes(value) {
        if (this.validateStyleValue("@keyframes", value)) {
            this.addStyle("@keyframes", value);
        }
    }
    addStyleLeft(value) {
        if (this.validateStyleValue("left", value)) {
            this.addStyle("left", value);
        }
    }
    addStyleLetterSpacing(value) {
        if (this.validateStyleValue("letter-spacing", value)) {
            this.addStyle("letter-spacing", value);
        }
    }
    addStyleLineHeight(value) {
        if (this.validateStyleValue("line-height", value)) {
            this.addStyle("line-height", value);
        }
    }
    addStyleListStyle(value) {
        if (this.validateStyleValue("list-style", value)) {
            this.addStyle("list-style", value);
        }
    }
    addStyleListStyleImage(value) {
        if (this.validateStyleValue("list-style-image", value)) {
            this.addStyle("list-style-image", value);
        }
    }
    addStyleListStylePosition(value) {
        if (this.validateStyleValue("list-style-position", value)) {
            this.addStyle("list-style-position", value);
        }
    }
    addStyleListStyleType(value) {
        if (this.validateStyleValue("list-style-type", value)) {
            this.addStyle("list-style-type", value);
        }
    }
    addStyleMargin(value) {
        if (this.validateStyleValue("margin", value)) {
            this.addStyle("margin", value);
        }
    }
    addStyleMarginBottom(value) {
        if (this.validateStyleValue("margin-bottom", value)) {
            this.addStyle("margin-bottom", value);
        }
    }
    addStyleMarginLeft(value) {
        if (this.validateStyleValue("margin-left", value)) {
            this.addStyle("margin-left", value);
        }
    }
    addStyleMarginRight(value) {
        if (this.validateStyleValue("margin-right", value)) {
            this.addStyle("margin-right", value);
        }
    }
    addStyleMarginTop(value) {
        if (this.validateStyleValue("margin-top", value)) {
            this.addStyle("margin-top", value);
        }
    }
    addStyleMaxHeight(value) {
        if (this.validateStyleValue("max-height", value)) {
            this.addStyle("max-height", value);
        }
    }
    addStyleMaxWidth(value) {
        if (this.validateStyleValue("max-width", value)) {
            this.addStyle("max-width", value);
        }
    }
    addStyleMedia(value) {
        if (this.validateStyleValue("@media", value)) {
            this.addStyle("@media", value);
        }
    }
    addStyleMinHeight(value) {
        if (this.validateStyleValue("min-height", value)) {
            this.addStyle("min-height", value);
        }
    }
    addStyleMinWidth(value) {
        if (this.validateStyleValue("min-width", value)) {
            this.addStyle("min-width", value);
        }
    }
    addStyleMixBlendMode(value) {
        if (this.validateStyleValue("mix-blend-mode", value)) {
            this.addStyle("mix-blend-mode", value);
        }
    }
    addStyleObjectFit(value) {
        if (this.validateStyleValue("object-fit", value)) {
            this.addStyle("object-fit", value);
        }
    }
    addStyleObjectPosition(value) {
        if (this.validateStyleValue("object-position", value)) {
            this.addStyle("object-position", value);
        }
    }
    addStyleOpacity(value) {
        if (this.validateStyleValue("opacity", value)) {
            this.addStyle("opacity", value);
        }
    }
    addStyleOrder(value) {
        if (this.validateStyleValue("order", value)) {
            this.addStyle("order", value);
        }
    }
    addStyleOutline(value) {
        if (this.validateStyleValue("outline", value)) {
            this.addStyle("outline", value);
        }
    }
    addStyleOutlineColor(value) {
        if (this.validateStyleValue("outline-color", value)) {
            this.addStyle("outline-color", value);
        }
    }
    addStyleOutlineOffset(value) {
        if (this.validateStyleValue("outline-offset", value)) {
            this.addStyle("outline-offset", value);
        }
    }
    addStyleOutlineStyle(value) {
        if (this.validateStyleValue("outline-style", value)) {
            this.addStyle("outline-style", value);
        }
    }
    addStyleOutlineWidth(value) {
        if (this.validateStyleValue("outline-width", value)) {
            this.addStyle("outline-width", value);
        }
    }
    addStyleOverflow(value) {
        if (this.validateStyleValue("overflow", value)) {
            this.addStyle("overflow", value);
        }
    }
    addStyleOverflowX(value) {
        if (this.validateStyleValue("overflow-x", value)) {
            this.addStyle("overflow-x", value);
        }
    }
    addStyleOverflowY(value) {
        if (this.validateStyleValue("overflow-y", value)) {
            this.addStyle("overflow-y", value);
        }
    }
    addStylePadding(value) {
        if (this.validateStyleValue("padding", value)) {
            this.addStyle("padding", value);
        }
    }
    addStylePaddingBottom(value) {
        if (this.validateStyleValue("padding-bottom", value)) {
            this.addStyle("padding-bottom", value);
        }
    }
    addStylePaddingLeft(value) {
        if (this.validateStyleValue("padding-left", value)) {
            this.addStyle("padding-left", value);
        }
    }
    addStylePaddingRight(value) {
        if (this.validateStyleValue("padding-right", value)) {
            this.addStyle("padding-right", value);
        }
    }
    addStylePaddingTop(value) {
        if (this.validateStyleValue("padding-top", value)) {
            this.addStyle("padding-top", value);
        }
    }
    addStylePageBreakAfter(value) {
        if (this.validateStyleValue("page-break-after", value)) {
            this.addStyle("page-break-after", value);
        }
    }
    addStylePageBreakBefore(value) {
        if (this.validateStyleValue("page-break-before", value)) {
            this.addStyle("page-break-before", value);
        }
    }
    addStylePageBreakInside(value) {
        if (this.validateStyleValue("page-break-inside", value)) {
            this.addStyle("page-break-inside", value);
        }
    }
    addStylePerspective(value) {
        if (this.validateStyleValue("perspective", value)) {
            this.addStyle("perspective", value);
        }
    }
    addStylePerspectiveOrigin(value) {
        if (this.validateStyleValue("perspective-origin", value)) {
            this.addStyle("perspective-origin", value);
        }
    }
    addStylePointerEvents(value) {
        if (this.validateStyleValue("pointer-events", value)) {
            this.addStyle("pointer-events", value);
        }
    }
    addStylePosition(value) {
        if (this.validateStyleValue("position", value)) {
            this.addStyle("position", value);
        }
    }
    addStyleQuotes(value) {
        if (this.validateStyleValue("quotes", value)) {
            this.addStyle("quotes", value);
        }
    }
    addStyleResize(value) {
        if (this.validateStyleValue("resize", value)) {
            this.addStyle("resize", value);
        }
    }
    addStyleRight(value) {
        if (this.validateStyleValue("right", value)) {
            this.addStyle("right", value);
        }
    }
    addStyleRowGap(value) {
        if (this.validateStyleValue("row-gap", value)) {
            this.addStyle("row-gap", value);
        }
    }
    addStyleScrollBehavior(value) {
        if (this.validateStyleValue("scroll-behavior", value)) {
            this.addStyle("scroll-behavior", value);
        }
    }
    addStyleTabSize(value) {
        if (this.validateStyleValue("tab-size", value)) {
            this.addStyle("tab-size", value);
        }
    }
    addStyleTableLayout(value) {
        if (this.validateStyleValue("table-layout", value)) {
            this.addStyle("table-layout", value);
        }
    }
    addStyleTextAlign(value) {
        if (this.validateStyleValue("text-align", value)) {
            this.addStyle("text-align", value);
        }
    }
    addStyleTextAlignLast(value) {
        if (this.validateStyleValue("text-align-last", value)) {
            this.addStyle("text-align-last", value);
        }
    }
    addStyleTextDecoration(value) {
        if (this.validateStyleValue("text-decoration", value)) {
            this.addStyle("text-decoration", value);
        }
    }
    addStyleTextDecorationColor(value) {
        if (this.validateStyleValue("text-decoration-color", value)) {
            this.addStyle("text-decoration-color", value);
        }
    }
    addStyleTextDecorationLine(value) {
        if (this.validateStyleValue("text-decoration-line", value)) {
            this.addStyle("text-decoration-line", value);
        }
    }
    addStyleTextDecorationStyle(value) {
        if (this.validateStyleValue("text-decoration-style", value)) {
            this.addStyle("text-decoration-style", value);
        }
    }
    addStyleTextIndent(value) {
        if (this.validateStyleValue("text-indent", value)) {
            this.addStyle("text-indent", value);
        }
    }
    addStyleTextJustify(value) {
        if (this.validateStyleValue("text-justify", value)) {
            this.addStyle("text-justify", value);
        }
    }
    addStyleTextOverflow(value) {
        if (this.validateStyleValue("text-overflow", value)) {
            this.addStyle("text-overflow", value);
        }
    }
    addStyleTextShadow(value) {
        if (this.validateStyleValue("text-shadow", value)) {
            this.addStyle("text-shadow", value);
        }
    }
    addStyleTextTransform(value) {
        if (this.validateStyleValue("text-transform", value)) {
            this.addStyle("text-transform", value);
        }
    }
    addStyleTop(value) {
        if (this.validateStyleValue("top", value)) {
            this.addStyle("top", value);
        }
    }
    addStyleTransform(value) {
        if (this.validateStyleValue("transform", value)) {
            this.addStyle("transform", value);
        }
    }
    addStyleTransformOrigin(value) {
        if (this.validateStyleValue("transform-origin", value)) {
            this.addStyle("transform-origin", value);
        }
    }
    addStyleTransformStyle(value) {
        if (this.validateStyleValue("transform-style", value)) {
            this.addStyle("transform-style", value);
        }
    }
    addStyleTransition(value) {
        if (this.validateStyleValue("transition", value)) {
            this.addStyle("transition", value);
        }
    }
    addStyleTransitionDelay(value) {
        if (this.validateStyleValue("transition-delay", value)) {
            this.addStyle("transition-delay", value);
        }
    }
    addStyleTransitionDuration(value) {
        if (this.validateStyleValue("transition-duration", value)) {
            this.addStyle("transition-duration", value);
        }
    }
    addStyleTransitionProperty(value) {
        if (this.validateStyleValue("transition-property", value)) {
            this.addStyle("transition-property", value);
        }
    }
    addStyleTransitionTimingFunction(value) {
        if (this.validateStyleValue("transition-timing-function", value)) {
            this.addStyle("transition-timing-function", value);
        }
    }
    addStyleUnicodeBidi(value) {
        if (this.validateStyleValue("unicode-bidi", value)) {
            this.addStyle("unicode-bidi", value);
        }
    }
    addStyleUserSelect(value) {
        if (this.validateStyleValue("user-select", value)) {
            this.addStyle("user-select", value);
        }
    }
    addStyleVerticalAlign(value) {
        if (this.validateStyleValue("vertical-align", value)) {
            this.addStyle("vertical-align", value);
        }
    }
    addStyleVisibility(value) {
        if (this.validateStyleValue("visibility", value)) {
            this.addStyle("visibility", value);
        }
    }
    addStyleWhiteSpace(value) {
        if (this.validateStyleValue("white-space", value)) {
            this.addStyle("white-space", value);
        }
    }
    addStyleWidth(value) {
        if (this.validateStyleValue("width", value)) {
            this.addStyle("width", value);
        }
    }
    addStyleWordBreak(value) {
        if (this.validateStyleValue("word-break", value)) {
            this.addStyle("word-break", value);
        }
    }
    addStyleWordSpacing(value) {
        if (this.validateStyleValue("word-spacing", value)) {
            this.addStyle("word-spacing", value);
        }
    }
    addStyleWordWrap(value) {
        if (this.validateStyleValue("word-wrap", value)) {
            this.addStyle("word-wrap", value);
        }
    }
    addStyleWritingMode(value) {
        if (this.validateStyleValue("writing-mode", value)) {
            this.addStyle("writing-mode", value);
        }
    }
    addStyleZIndex(value) {
        if (this.validateStyleValue("z-index", value)) {
            this.addStyle("z-index", value);
        }
    }
}
exports.HTMLElement = HTMLElement;
//# sourceMappingURL=html_element.js.map