"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSSElement = void 0;
//Imports
const css_property_1 = require("./css_property");
const properties = require("./ref/css_properties.json");
const sys = require("samara");
//Classes
class CSSElement {
    //Constructor
    constructor(id, selector) {
        this.id = id;
        this.properties = [];
        this.selector = selector;
    }
    //Methods
    addProperty(name, value) {
        if (this.validateProperty(name)) {
            this.addPropertyUnsafe(name, value);
        }
    }
    addPropertyUnsafe(name, value) {
        if (!sys.isNull(name) && !sys.isNull(value)) {
            this.properties.push(new css_property_1.CSSProperty(name.toLowerCase(), value));
        }
    }
    validateProperty(name) {
        for (let prop of properties.properties) {
            if (prop.name === name) {
                return true;
            }
        }
        return false;
    }
    //Generated-Methods
    addPropertyAlignContent(value) {
        this.addPropertyUnsafe("align-content", value);
    }
    addPropertyAlignItems(value) {
        this.addPropertyUnsafe("align-items", value);
    }
    addPropertyAlignSelf(value) {
        this.addPropertyUnsafe("align-self", value);
    }
    addPropertyAll(value) {
        this.addPropertyUnsafe("all", value);
    }
    addPropertyAnimation(value) {
        this.addPropertyUnsafe("animation", value);
    }
    addPropertyAnimationDelay(value) {
        this.addPropertyUnsafe("animation-delay", value);
    }
    addPropertyAnimationDirection(value) {
        this.addPropertyUnsafe("animation-direction", value);
    }
    addPropertyAnimationDuration(value) {
        this.addPropertyUnsafe("animation-duration", value);
    }
    addPropertyAnimationFillMode(value) {
        this.addPropertyUnsafe("animation-fill-mode", value);
    }
    addPropertyAnimationIterationCount(value) {
        this.addPropertyUnsafe("animation-iteration-count", value);
    }
    addPropertyAnimationName(value) {
        this.addPropertyUnsafe("animation-name", value);
    }
    addPropertyAnimationPlayState(value) {
        this.addPropertyUnsafe("animation-play-state", value);
    }
    addPropertyAnimationTimingFunction(value) {
        this.addPropertyUnsafe("animation-timing-function", value);
    }
    addPropertyBackfaceVisibility(value) {
        this.addPropertyUnsafe("backface-visibility", value);
    }
    addPropertyBackground(value) {
        this.addPropertyUnsafe("background", value);
    }
    addPropertyBackgroundAttachment(value) {
        this.addPropertyUnsafe("background-attachment", value);
    }
    addPropertyBackgroundBlendMode(value) {
        this.addPropertyUnsafe("background-blend-mode", value);
    }
    addPropertyBackgroundClip(value) {
        this.addPropertyUnsafe("background-clip", value);
    }
    addPropertyBackgroundColor(value) {
        this.addPropertyUnsafe("background-color", value);
    }
    addPropertyBackgroundImage(value) {
        this.addPropertyUnsafe("background-image", value);
    }
    addPropertyBackgroundOrigin(value) {
        this.addPropertyUnsafe("background-origin", value);
    }
    addPropertyBackgroundPosition(value) {
        this.addPropertyUnsafe("background-position", value);
    }
    addPropertyBackgroundRepeat(value) {
        this.addPropertyUnsafe("background-repeat", value);
    }
    addPropertyBackgroundSize(value) {
        this.addPropertyUnsafe("background-size", value);
    }
    addPropertyBorder(value) {
        this.addPropertyUnsafe("border", value);
    }
    addPropertyBorderBottom(value) {
        this.addPropertyUnsafe("border-bottom", value);
    }
    addPropertyBorderBottomColor(value) {
        this.addPropertyUnsafe("border-bottom-color", value);
    }
    addPropertyBorderBottomLeftRadius(value) {
        this.addPropertyUnsafe("border-bottom-left-radius", value);
    }
    addPropertyBorderBottomRightRadius(value) {
        this.addPropertyUnsafe("border-bottom-right-radius", value);
    }
    addPropertyBorderBottomStyle(value) {
        this.addPropertyUnsafe("border-bottom-style", value);
    }
    addPropertyBorderBottomWidth(value) {
        this.addPropertyUnsafe("border-bottom-width", value);
    }
    addPropertyBorderCollapse(value) {
        this.addPropertyUnsafe("border-collapse", value);
    }
    addPropertyBorderColor(value) {
        this.addPropertyUnsafe("border-color", value);
    }
    addPropertyBorderImage(value) {
        this.addPropertyUnsafe("border-image", value);
    }
    addPropertyBorderImageOutset(value) {
        this.addPropertyUnsafe("border-image-outset", value);
    }
    addPropertyBorderImageRepeat(value) {
        this.addPropertyUnsafe("border-image-repeat", value);
    }
    addPropertyBorderImageSlice(value) {
        this.addPropertyUnsafe("border-image-slice", value);
    }
    addPropertyBorderImageSource(value) {
        this.addPropertyUnsafe("border-image-source", value);
    }
    addPropertyBorderImageWidth(value) {
        this.addPropertyUnsafe("border-image-width", value);
    }
    addPropertyBorderLeft(value) {
        this.addPropertyUnsafe("border-left", value);
    }
    addPropertyBorderLeftColor(value) {
        this.addPropertyUnsafe("border-left-color", value);
    }
    addPropertyBorderLeftStyle(value) {
        this.addPropertyUnsafe("border-left-style", value);
    }
    addPropertyBorderLeftWidth(value) {
        this.addPropertyUnsafe("border-left-width", value);
    }
    addPropertyBorderRadius(value) {
        this.addPropertyUnsafe("border-radius", value);
    }
    addPropertyBorderRight(value) {
        this.addPropertyUnsafe("border-right", value);
    }
    addPropertyBorderRightColor(value) {
        this.addPropertyUnsafe("border-right-color", value);
    }
    addPropertyBorderRightStyle(value) {
        this.addPropertyUnsafe("border-right-style", value);
    }
    addPropertyBorderRightWidth(value) {
        this.addPropertyUnsafe("border-right-width", value);
    }
    addPropertyBorderSpacing(value) {
        this.addPropertyUnsafe("border-spacing", value);
    }
    addPropertyBorderStyle(value) {
        this.addPropertyUnsafe("border-style", value);
    }
    addPropertyBorderTop(value) {
        this.addPropertyUnsafe("border-top", value);
    }
    addPropertyBorderTopColor(value) {
        this.addPropertyUnsafe("border-top-color", value);
    }
    addPropertyBorderTopLeftRadius(value) {
        this.addPropertyUnsafe("border-top-left-radius", value);
    }
    addPropertyBorderTopRightRadius(value) {
        this.addPropertyUnsafe("border-top-right-radius", value);
    }
    addPropertyBorderTopStyle(value) {
        this.addPropertyUnsafe("border-top-style", value);
    }
    addPropertyBorderTopWidth(value) {
        this.addPropertyUnsafe("border-top-width", value);
    }
    addPropertyBorderWidth(value) {
        this.addPropertyUnsafe("border-width", value);
    }
    addPropertyBottom(value) {
        this.addPropertyUnsafe("bottom", value);
    }
    addPropertyBoxDecorationBreak(value) {
        this.addPropertyUnsafe("box-decoration-break", value);
    }
    addPropertyBoxShadow(value) {
        this.addPropertyUnsafe("box-shadow", value);
    }
    addPropertyBoxSizing(value) {
        this.addPropertyUnsafe("box-sizing", value);
    }
    addPropertyBreakAfter(value) {
        this.addPropertyUnsafe("break-after", value);
    }
    addPropertyBreakBefore(value) {
        this.addPropertyUnsafe("break-before", value);
    }
    addPropertyBreakInside(value) {
        this.addPropertyUnsafe("break-inside", value);
    }
    addPropertyCaptionSide(value) {
        this.addPropertyUnsafe("caption-side", value);
    }
    addPropertyCaretColor(value) {
        this.addPropertyUnsafe("caret-color", value);
    }
    addPropertyCharset(value) {
        this.addPropertyUnsafe("@charset", value);
    }
    addPropertyClear(value) {
        this.addPropertyUnsafe("clear", value);
    }
    addPropertyClip(value) {
        this.addPropertyUnsafe("clip", value);
    }
    addPropertyColor(value) {
        this.addPropertyUnsafe("color", value);
    }
    addPropertyColumnCount(value) {
        this.addPropertyUnsafe("column-count", value);
    }
    addPropertyColumnFill(value) {
        this.addPropertyUnsafe("column-fill", value);
    }
    addPropertyColumnGap(value) {
        this.addPropertyUnsafe("column-gap", value);
    }
    addPropertyColumnRule(value) {
        this.addPropertyUnsafe("column-rule", value);
    }
    addPropertyColumnRuleColor(value) {
        this.addPropertyUnsafe("column-rule-color", value);
    }
    addPropertyColumnRuleStyle(value) {
        this.addPropertyUnsafe("column-rule-style", value);
    }
    addPropertyColumnRuleWidth(value) {
        this.addPropertyUnsafe("column-rule-width", value);
    }
    addPropertyColumnSpan(value) {
        this.addPropertyUnsafe("column-span", value);
    }
    addPropertyColumnWidth(value) {
        this.addPropertyUnsafe("column-width", value);
    }
    addPropertyColumns(value) {
        this.addPropertyUnsafe("columns", value);
    }
    addPropertyContent(value) {
        this.addPropertyUnsafe("content", value);
    }
    addPropertyCounterIncrement(value) {
        this.addPropertyUnsafe("counter-increment", value);
    }
    addPropertyCounterReset(value) {
        this.addPropertyUnsafe("counter-reset", value);
    }
    addPropertyCursor(value) {
        this.addPropertyUnsafe("cursor", value);
    }
    addPropertyDirection(value) {
        this.addPropertyUnsafe("direction", value);
    }
    addPropertyDisplay(value) {
        this.addPropertyUnsafe("display", value);
    }
    addPropertyEmptyCells(value) {
        this.addPropertyUnsafe("empty-cells", value);
    }
    addPropertyFilter(value) {
        this.addPropertyUnsafe("filter", value);
    }
    addPropertyFlex(value) {
        this.addPropertyUnsafe("flex", value);
    }
    addPropertyFlexBasis(value) {
        this.addPropertyUnsafe("flex-basis", value);
    }
    addPropertyFlexDirection(value) {
        this.addPropertyUnsafe("flex-direction", value);
    }
    addPropertyFlexFlow(value) {
        this.addPropertyUnsafe("flex-flow", value);
    }
    addPropertyFlexGrow(value) {
        this.addPropertyUnsafe("flex-grow", value);
    }
    addPropertyFlexShrink(value) {
        this.addPropertyUnsafe("flex-shrink", value);
    }
    addPropertyFlexWrap(value) {
        this.addPropertyUnsafe("flex-wrap", value);
    }
    addPropertyFloat(value) {
        this.addPropertyUnsafe("float", value);
    }
    addPropertyFont(value) {
        this.addPropertyUnsafe("font", value);
    }
    addPropertyFontFace(value) {
        this.addPropertyUnsafe("@font-face", value);
    }
    addPropertyFontFamily(value) {
        this.addPropertyUnsafe("font-family", value);
    }
    addPropertyFontFeatureSettings(value) {
        this.addPropertyUnsafe("font-feature-settings", value);
    }
    addPropertyFontKerning(value) {
        this.addPropertyUnsafe("font-kerning", value);
    }
    addPropertyFontSize(value) {
        this.addPropertyUnsafe("font-size", value);
    }
    addPropertyFontSizeAdjust(value) {
        this.addPropertyUnsafe("font-size-adjust", value);
    }
    addPropertyFontStretch(value) {
        this.addPropertyUnsafe("font-stretch", value);
    }
    addPropertyFontStyle(value) {
        this.addPropertyUnsafe("font-style", value);
    }
    addPropertyFontVariant(value) {
        this.addPropertyUnsafe("font-variant", value);
    }
    addPropertyFontVariantCaps(value) {
        this.addPropertyUnsafe("font-variant-caps", value);
    }
    addPropertyFontWeight(value) {
        this.addPropertyUnsafe("font-weight", value);
    }
    addPropertyGap(value) {
        this.addPropertyUnsafe("gap", value);
    }
    addPropertyGrid(value) {
        this.addPropertyUnsafe("grid", value);
    }
    addPropertyGridArea(value) {
        this.addPropertyUnsafe("grid-area", value);
    }
    addPropertyGridAutoColumns(value) {
        this.addPropertyUnsafe("grid-auto-columns", value);
    }
    addPropertyGridAutoFlow(value) {
        this.addPropertyUnsafe("grid-auto-flow", value);
    }
    addPropertyGridAutoRows(value) {
        this.addPropertyUnsafe("grid-auto-rows", value);
    }
    addPropertyGridColumn(value) {
        this.addPropertyUnsafe("grid-column", value);
    }
    addPropertyGridColumnEnd(value) {
        this.addPropertyUnsafe("grid-column-end", value);
    }
    addPropertyGridColumnGap(value) {
        this.addPropertyUnsafe("grid-column-gap", value);
    }
    addPropertyGridColumnStart(value) {
        this.addPropertyUnsafe("grid-column-start", value);
    }
    addPropertyGridGap(value) {
        this.addPropertyUnsafe("grid-gap", value);
    }
    addPropertyGridRow(value) {
        this.addPropertyUnsafe("grid-row", value);
    }
    addPropertyGridRowEnd(value) {
        this.addPropertyUnsafe("grid-row-end", value);
    }
    addPropertyGridRowGap(value) {
        this.addPropertyUnsafe("grid-row-gap", value);
    }
    addPropertyGridRowStart(value) {
        this.addPropertyUnsafe("grid-row-start", value);
    }
    addPropertyGridTemplate(value) {
        this.addPropertyUnsafe("grid-template", value);
    }
    addPropertyGridTemplateAreas(value) {
        this.addPropertyUnsafe("grid-template-areas", value);
    }
    addPropertyGridTemplateColumns(value) {
        this.addPropertyUnsafe("grid-template-columns", value);
    }
    addPropertyGridTemplateRows(value) {
        this.addPropertyUnsafe("grid-template-rows", value);
    }
    addPropertyHangingPunctuation(value) {
        this.addPropertyUnsafe("hanging-punctuation", value);
    }
    addPropertyHeight(value) {
        this.addPropertyUnsafe("height", value);
    }
    addPropertyHyphens(value) {
        this.addPropertyUnsafe("hyphens", value);
    }
    addPropertyImageRendering(value) {
        this.addPropertyUnsafe("image-rendering", value);
    }
    addPropertyImport(value) {
        this.addPropertyUnsafe("@import", value);
    }
    addPropertyIsolation(value) {
        this.addPropertyUnsafe("isolation", value);
    }
    addPropertyJustifyContent(value) {
        this.addPropertyUnsafe("justify-content", value);
    }
    addPropertyKeyframes(value) {
        this.addPropertyUnsafe("@keyframes", value);
    }
    addPropertyLeft(value) {
        this.addPropertyUnsafe("left", value);
    }
    addPropertyLetterSpacing(value) {
        this.addPropertyUnsafe("letter-spacing", value);
    }
    addPropertyLineHeight(value) {
        this.addPropertyUnsafe("line-height", value);
    }
    addPropertyListStyle(value) {
        this.addPropertyUnsafe("list-style", value);
    }
    addPropertyListStyleImage(value) {
        this.addPropertyUnsafe("list-style-image", value);
    }
    addPropertyListStylePosition(value) {
        this.addPropertyUnsafe("list-style-position", value);
    }
    addPropertyListStyleType(value) {
        this.addPropertyUnsafe("list-style-type", value);
    }
    addPropertyMargin(value) {
        this.addPropertyUnsafe("margin", value);
    }
    addPropertyMarginBottom(value) {
        this.addPropertyUnsafe("margin-bottom", value);
    }
    addPropertyMarginLeft(value) {
        this.addPropertyUnsafe("margin-left", value);
    }
    addPropertyMarginRight(value) {
        this.addPropertyUnsafe("margin-right", value);
    }
    addPropertyMarginTop(value) {
        this.addPropertyUnsafe("margin-top", value);
    }
    addPropertyMaskImage(value) {
        this.addPropertyUnsafe("mask-image", value);
    }
    addPropertyMaskOrigin(value) {
        this.addPropertyUnsafe("mask-origin", value);
    }
    addPropertyMaskPosition(value) {
        this.addPropertyUnsafe("mask-position", value);
    }
    addPropertyMaskRepeat(value) {
        this.addPropertyUnsafe("mask-repeat", value);
    }
    addPropertyMaskSize(value) {
        this.addPropertyUnsafe("mask-size", value);
    }
    addPropertyMaxHeight(value) {
        this.addPropertyUnsafe("max-height", value);
    }
    addPropertyMaxWidth(value) {
        this.addPropertyUnsafe("max-width", value);
    }
    addPropertyMedia(value) {
        this.addPropertyUnsafe("@media", value);
    }
    addPropertyMinHeight(value) {
        this.addPropertyUnsafe("min-height", value);
    }
    addPropertyMinWidth(value) {
        this.addPropertyUnsafe("min-width", value);
    }
    addPropertyMixBlendMode(value) {
        this.addPropertyUnsafe("mix-blend-mode", value);
    }
    addPropertyObjectFit(value) {
        this.addPropertyUnsafe("object-fit", value);
    }
    addPropertyObjectPosition(value) {
        this.addPropertyUnsafe("object-position", value);
    }
    addPropertyOpacity(value) {
        this.addPropertyUnsafe("opacity", value);
    }
    addPropertyOrder(value) {
        this.addPropertyUnsafe("order", value);
    }
    addPropertyOrphans(value) {
        this.addPropertyUnsafe("orphans", value);
    }
    addPropertyOutline(value) {
        this.addPropertyUnsafe("outline", value);
    }
    addPropertyOutlineColor(value) {
        this.addPropertyUnsafe("outline-color", value);
    }
    addPropertyOutlineOffset(value) {
        this.addPropertyUnsafe("outline-offset", value);
    }
    addPropertyOutlineStyle(value) {
        this.addPropertyUnsafe("outline-style", value);
    }
    addPropertyOutlineWidth(value) {
        this.addPropertyUnsafe("outline-width", value);
    }
    addPropertyOverflow(value) {
        this.addPropertyUnsafe("overflow", value);
    }
    addPropertyOverflowWrap(value) {
        this.addPropertyUnsafe("overflow-wrap", value);
    }
    addPropertyOverflowX(value) {
        this.addPropertyUnsafe("overflow-x", value);
    }
    addPropertyOverflowY(value) {
        this.addPropertyUnsafe("overflow-y", value);
    }
    addPropertyPadding(value) {
        this.addPropertyUnsafe("padding", value);
    }
    addPropertyPaddingBottom(value) {
        this.addPropertyUnsafe("padding-bottom", value);
    }
    addPropertyPaddingLeft(value) {
        this.addPropertyUnsafe("padding-left", value);
    }
    addPropertyPaddingRight(value) {
        this.addPropertyUnsafe("padding-right", value);
    }
    addPropertyPaddingTop(value) {
        this.addPropertyUnsafe("padding-top", value);
    }
    addPropertyPageBreakAfter(value) {
        this.addPropertyUnsafe("page-break-after", value);
    }
    addPropertyPageBreakBefore(value) {
        this.addPropertyUnsafe("page-break-before", value);
    }
    addPropertyPageBreakInside(value) {
        this.addPropertyUnsafe("page-break-inside", value);
    }
    addPropertyPerspective(value) {
        this.addPropertyUnsafe("perspective", value);
    }
    addPropertyPerspectiveOrigin(value) {
        this.addPropertyUnsafe("perspective-origin", value);
    }
    addPropertyPointerEvents(value) {
        this.addPropertyUnsafe("pointer-events", value);
    }
    addPropertyPosition(value) {
        this.addPropertyUnsafe("position", value);
    }
    addPropertyQuotes(value) {
        this.addPropertyUnsafe("quotes", value);
    }
    addPropertyResize(value) {
        this.addPropertyUnsafe("resize", value);
    }
    addPropertyRight(value) {
        this.addPropertyUnsafe("right", value);
    }
    addPropertyRowGap(value) {
        this.addPropertyUnsafe("row-gap", value);
    }
    addPropertyScrollBehavior(value) {
        this.addPropertyUnsafe("scroll-behavior", value);
    }
    addPropertyTabSize(value) {
        this.addPropertyUnsafe("tab-size", value);
    }
    addPropertyTableLayout(value) {
        this.addPropertyUnsafe("table-layout", value);
    }
    addPropertyTextAlign(value) {
        this.addPropertyUnsafe("text-align", value);
    }
    addPropertyTextAlignLast(value) {
        this.addPropertyUnsafe("text-align-last", value);
    }
    addPropertyTextDecoration(value) {
        this.addPropertyUnsafe("text-decoration", value);
    }
    addPropertyTextDecorationColor(value) {
        this.addPropertyUnsafe("text-decoration-color", value);
    }
    addPropertyTextDecorationLine(value) {
        this.addPropertyUnsafe("text-decoration-line", value);
    }
    addPropertyTextDecorationStyle(value) {
        this.addPropertyUnsafe("text-decoration-style", value);
    }
    addPropertyTextIndent(value) {
        this.addPropertyUnsafe("text-indent", value);
    }
    addPropertyTextJustify(value) {
        this.addPropertyUnsafe("text-justify", value);
    }
    addPropertyTextOverflow(value) {
        this.addPropertyUnsafe("text-overflow", value);
    }
    addPropertyTextShadow(value) {
        this.addPropertyUnsafe("text-shadow", value);
    }
    addPropertyTextTransform(value) {
        this.addPropertyUnsafe("text-transform", value);
    }
    addPropertyTop(value) {
        this.addPropertyUnsafe("top", value);
    }
    addPropertyTransform(value) {
        this.addPropertyUnsafe("transform", value);
    }
    addPropertyTransformOrigin(value) {
        this.addPropertyUnsafe("transform-origin", value);
    }
    addPropertyTransformStyle(value) {
        this.addPropertyUnsafe("transform-style", value);
    }
    addPropertyTransition(value) {
        this.addPropertyUnsafe("transition", value);
    }
    addPropertyTransitionDelay(value) {
        this.addPropertyUnsafe("transition-delay", value);
    }
    addPropertyTransitionDuration(value) {
        this.addPropertyUnsafe("transition-duration", value);
    }
    addPropertyTransitionProperty(value) {
        this.addPropertyUnsafe("transition-property", value);
    }
    addPropertyTransitionTimingFunction(value) {
        this.addPropertyUnsafe("transition-timing-function", value);
    }
    addPropertyUnicodeBidi(value) {
        this.addPropertyUnsafe("unicode-bidi", value);
    }
    addPropertyUserSelect(value) {
        this.addPropertyUnsafe("user-select", value);
    }
    addPropertyVerticalAlign(value) {
        this.addPropertyUnsafe("vertical-align", value);
    }
    addPropertyVisibility(value) {
        this.addPropertyUnsafe("visibility", value);
    }
    addPropertyWhiteSpace(value) {
        this.addPropertyUnsafe("white-space", value);
    }
    addPropertyWidows(value) {
        this.addPropertyUnsafe("widows", value);
    }
    addPropertyWidth(value) {
        this.addPropertyUnsafe("width", value);
    }
    addPropertyWordBreak(value) {
        this.addPropertyUnsafe("word-break", value);
    }
    addPropertyWordSpacing(value) {
        this.addPropertyUnsafe("word-spacing", value);
    }
    addPropertyWordWrap(value) {
        this.addPropertyUnsafe("word-wrap", value);
    }
    addPropertyWritingMode(value) {
        this.addPropertyUnsafe("writing-mode", value);
    }
    addPropertyZIndex(value) {
        this.addPropertyUnsafe("z-index", value);
    }
    addPropertyFontFeatureValues(value) {
        this.addPropertyUnsafe("@font-feature-values", value);
    }
    addPropertyFontLanguageOverride(value) {
        this.addPropertyUnsafe("font-language-override", value);
    }
    addPropertyFontSynthesis(value) {
        this.addPropertyUnsafe("font-synthesis", value);
    }
    addPropertyFontVariantAlternates(value) {
        this.addPropertyUnsafe("font-variant-alternates", value);
    }
    addPropertyFontVariantEastAsian(value) {
        this.addPropertyUnsafe("font-variant-east-asian", value);
    }
    addPropertyFontVariantLigatures(value) {
        this.addPropertyUnsafe("font-variant-ligatures", value);
    }
    addPropertyFontVariantNumeric(value) {
        this.addPropertyUnsafe("font-variant-numeric", value);
    }
    addPropertyFontVariantPosition(value) {
        this.addPropertyUnsafe("font-variant-position", value);
    }
    addPropertyLineBreak(value) {
        this.addPropertyUnsafe("line-break", value);
    }
    addPropertyMask(value) {
        this.addPropertyUnsafe("mask", value);
    }
    addPropertyMaskClip(value) {
        this.addPropertyUnsafe("mask-clip", value);
    }
    addPropertyMaskComposite(value) {
        this.addPropertyUnsafe("mask-composite", value);
    }
    addPropertyMaskMode(value) {
        this.addPropertyUnsafe("mask-mode", value);
    }
    addPropertyMaskType(value) {
        this.addPropertyUnsafe("mask-type", value);
    }
    addPropertyTextCombineUpright(value) {
        this.addPropertyUnsafe("text-combine-upright", value);
    }
    addPropertyTextOrientation(value) {
        this.addPropertyUnsafe("text-orientation", value);
    }
    addPropertyTextUnderlinePosition(value) {
        this.addPropertyUnsafe("text-underline-position", value);
    }
}
exports.CSSElement = CSSElement;
//# sourceMappingURL=css_element.js.map