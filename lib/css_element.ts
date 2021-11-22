//Imports
import {CSSProperty} from "./css_property";
import * as properties from "./ref/css_properties.json";
import * as sys from "samara";

//Classes
export class CSSElement{
    //Declarations
    id:number;
    properties:CSSProperty[];
    selector:string;

    //Constructor
    constructor(id:number, selector:string){
        this.id = id;
        this.properties = [];
        this.selector = selector;
    }

    //Methods
    addProperty(name:string, value:string):void{
        if(this.validateProperty(name)){
            this.addPropertyUnsafe(name, value);
        }
    }

    addPropertyUnsafe(name:string, value:string):void{
        if(!sys.isNull(name) && !sys.isNull(value)){
            this.properties.push(new CSSProperty(name.toLowerCase(), value));
        }
    }

    validateProperty(name:string):Boolean{
        for(let prop of properties.properties){
            if(prop.name === name){
                return true;
            }
        }
        return false;
    }

    //Generated-Methods
	addPropertyAlignContent(value:string):void{
		this.addPropertyUnsafe("align-content", value);
	}
	addPropertyAlignItems(value:string):void{
		this.addPropertyUnsafe("align-items", value);
	}
	addPropertyAlignSelf(value:string):void{
		this.addPropertyUnsafe("align-self", value);
	}
	addPropertyAll(value:string):void{
		this.addPropertyUnsafe("all", value);
	}
	addPropertyAnimation(value:string):void{
		this.addPropertyUnsafe("animation", value);
	}
	addPropertyAnimationDelay(value:string):void{
		this.addPropertyUnsafe("animation-delay", value);
	}
	addPropertyAnimationDirection(value:string):void{
		this.addPropertyUnsafe("animation-direction", value);
	}
	addPropertyAnimationDuration(value:string):void{
		this.addPropertyUnsafe("animation-duration", value);
	}
	addPropertyAnimationFillMode(value:string):void{
		this.addPropertyUnsafe("animation-fill-mode", value);
	}
	addPropertyAnimationIterationCount(value:string):void{
		this.addPropertyUnsafe("animation-iteration-count", value);
	}
	addPropertyAnimationName(value:string):void{
		this.addPropertyUnsafe("animation-name", value);
	}
	addPropertyAnimationPlayState(value:string):void{
		this.addPropertyUnsafe("animation-play-state", value);
	}
	addPropertyAnimationTimingFunction(value:string):void{
		this.addPropertyUnsafe("animation-timing-function", value);
	}
	addPropertyBackfaceVisibility(value:string):void{
		this.addPropertyUnsafe("backface-visibility", value);
	}
	addPropertyBackground(value:string):void{
		this.addPropertyUnsafe("background", value);
	}
	addPropertyBackgroundAttachment(value:string):void{
		this.addPropertyUnsafe("background-attachment", value);
	}
	addPropertyBackgroundBlendMode(value:string):void{
		this.addPropertyUnsafe("background-blend-mode", value);
	}
	addPropertyBackgroundClip(value:string):void{
		this.addPropertyUnsafe("background-clip", value);
	}
	addPropertyBackgroundColor(value:string):void{
		this.addPropertyUnsafe("background-color", value);
	}
	addPropertyBackgroundImage(value:string):void{
		this.addPropertyUnsafe("background-image", value);
	}
	addPropertyBackgroundOrigin(value:string):void{
		this.addPropertyUnsafe("background-origin", value);
	}
	addPropertyBackgroundPosition(value:string):void{
		this.addPropertyUnsafe("background-position", value);
	}
	addPropertyBackgroundRepeat(value:string):void{
		this.addPropertyUnsafe("background-repeat", value);
	}
	addPropertyBackgroundSize(value:string):void{
		this.addPropertyUnsafe("background-size", value);
	}
	addPropertyBorder(value:string):void{
		this.addPropertyUnsafe("border", value);
	}
	addPropertyBorderBottom(value:string):void{
		this.addPropertyUnsafe("border-bottom", value);
	}
	addPropertyBorderBottomColor(value:string):void{
		this.addPropertyUnsafe("border-bottom-color", value);
	}
	addPropertyBorderBottomLeftRadius(value:string):void{
		this.addPropertyUnsafe("border-bottom-left-radius", value);
	}
	addPropertyBorderBottomRightRadius(value:string):void{
		this.addPropertyUnsafe("border-bottom-right-radius", value);
	}
	addPropertyBorderBottomStyle(value:string):void{
		this.addPropertyUnsafe("border-bottom-style", value);
	}
	addPropertyBorderBottomWidth(value:string):void{
		this.addPropertyUnsafe("border-bottom-width", value);
	}
	addPropertyBorderCollapse(value:string):void{
		this.addPropertyUnsafe("border-collapse", value);
	}
	addPropertyBorderColor(value:string):void{
		this.addPropertyUnsafe("border-color", value);
	}
	addPropertyBorderImage(value:string):void{
		this.addPropertyUnsafe("border-image", value);
	}
	addPropertyBorderImageOutset(value:string):void{
		this.addPropertyUnsafe("border-image-outset", value);
	}
	addPropertyBorderImageRepeat(value:string):void{
		this.addPropertyUnsafe("border-image-repeat", value);
	}
	addPropertyBorderImageSlice(value:string):void{
		this.addPropertyUnsafe("border-image-slice", value);
	}
	addPropertyBorderImageSource(value:string):void{
		this.addPropertyUnsafe("border-image-source", value);
	}
	addPropertyBorderImageWidth(value:string):void{
		this.addPropertyUnsafe("border-image-width", value);
	}
	addPropertyBorderLeft(value:string):void{
		this.addPropertyUnsafe("border-left", value);
	}
	addPropertyBorderLeftColor(value:string):void{
		this.addPropertyUnsafe("border-left-color", value);
	}
	addPropertyBorderLeftStyle(value:string):void{
		this.addPropertyUnsafe("border-left-style", value);
	}
	addPropertyBorderLeftWidth(value:string):void{
		this.addPropertyUnsafe("border-left-width", value);
	}
	addPropertyBorderRadius(value:string):void{
		this.addPropertyUnsafe("border-radius", value);
	}
	addPropertyBorderRight(value:string):void{
		this.addPropertyUnsafe("border-right", value);
	}
	addPropertyBorderRightColor(value:string):void{
		this.addPropertyUnsafe("border-right-color", value);
	}
	addPropertyBorderRightStyle(value:string):void{
		this.addPropertyUnsafe("border-right-style", value);
	}
	addPropertyBorderRightWidth(value:string):void{
		this.addPropertyUnsafe("border-right-width", value);
	}
	addPropertyBorderSpacing(value:string):void{
		this.addPropertyUnsafe("border-spacing", value);
	}
	addPropertyBorderStyle(value:string):void{
		this.addPropertyUnsafe("border-style", value);
	}
	addPropertyBorderTop(value:string):void{
		this.addPropertyUnsafe("border-top", value);
	}
	addPropertyBorderTopColor(value:string):void{
		this.addPropertyUnsafe("border-top-color", value);
	}
	addPropertyBorderTopLeftRadius(value:string):void{
		this.addPropertyUnsafe("border-top-left-radius", value);
	}
	addPropertyBorderTopRightRadius(value:string):void{
		this.addPropertyUnsafe("border-top-right-radius", value);
	}
	addPropertyBorderTopStyle(value:string):void{
		this.addPropertyUnsafe("border-top-style", value);
	}
	addPropertyBorderTopWidth(value:string):void{
		this.addPropertyUnsafe("border-top-width", value);
	}
	addPropertyBorderWidth(value:string):void{
		this.addPropertyUnsafe("border-width", value);
	}
	addPropertyBottom(value:string):void{
		this.addPropertyUnsafe("bottom", value);
	}
	addPropertyBoxDecorationBreak(value:string):void{
		this.addPropertyUnsafe("box-decoration-break", value);
	}
	addPropertyBoxShadow(value:string):void{
		this.addPropertyUnsafe("box-shadow", value);
	}
	addPropertyBoxSizing(value:string):void{
		this.addPropertyUnsafe("box-sizing", value);
	}
	addPropertyBreakAfter(value:string):void{
		this.addPropertyUnsafe("break-after", value);
	}
	addPropertyBreakBefore(value:string):void{
		this.addPropertyUnsafe("break-before", value);
	}
	addPropertyBreakInside(value:string):void{
		this.addPropertyUnsafe("break-inside", value);
	}
	addPropertyCaptionSide(value:string):void{
		this.addPropertyUnsafe("caption-side", value);
	}
	addPropertyCaretColor(value:string):void{
		this.addPropertyUnsafe("caret-color", value);
	}
	addPropertyCharset(value:string):void{
		this.addPropertyUnsafe("@charset", value);
	}
	addPropertyClear(value:string):void{
		this.addPropertyUnsafe("clear", value);
	}
	addPropertyClip(value:string):void{
		this.addPropertyUnsafe("clip", value);
	}
	addPropertyColor(value:string):void{
		this.addPropertyUnsafe("color", value);
	}
	addPropertyColumnCount(value:string):void{
		this.addPropertyUnsafe("column-count", value);
	}
	addPropertyColumnFill(value:string):void{
		this.addPropertyUnsafe("column-fill", value);
	}
	addPropertyColumnGap(value:string):void{
		this.addPropertyUnsafe("column-gap", value);
	}
	addPropertyColumnRule(value:string):void{
		this.addPropertyUnsafe("column-rule", value);
	}
	addPropertyColumnRuleColor(value:string):void{
		this.addPropertyUnsafe("column-rule-color", value);
	}
	addPropertyColumnRuleStyle(value:string):void{
		this.addPropertyUnsafe("column-rule-style", value);
	}
	addPropertyColumnRuleWidth(value:string):void{
		this.addPropertyUnsafe("column-rule-width", value);
	}
	addPropertyColumnSpan(value:string):void{
		this.addPropertyUnsafe("column-span", value);
	}
	addPropertyColumnWidth(value:string):void{
		this.addPropertyUnsafe("column-width", value);
	}
	addPropertyColumns(value:string):void{
		this.addPropertyUnsafe("columns", value);
	}
	addPropertyContent(value:string):void{
		this.addPropertyUnsafe("content", value);
	}
	addPropertyCounterIncrement(value:string):void{
		this.addPropertyUnsafe("counter-increment", value);
	}
	addPropertyCounterReset(value:string):void{
		this.addPropertyUnsafe("counter-reset", value);
	}
	addPropertyCursor(value:string):void{
		this.addPropertyUnsafe("cursor", value);
	}
	addPropertyDirection(value:string):void{
		this.addPropertyUnsafe("direction", value);
	}
	addPropertyDisplay(value:string):void{
		this.addPropertyUnsafe("display", value);
	}
	addPropertyEmptyCells(value:string):void{
		this.addPropertyUnsafe("empty-cells", value);
	}
	addPropertyFilter(value:string):void{
		this.addPropertyUnsafe("filter", value);
	}
	addPropertyFlex(value:string):void{
		this.addPropertyUnsafe("flex", value);
	}
	addPropertyFlexBasis(value:string):void{
		this.addPropertyUnsafe("flex-basis", value);
	}
	addPropertyFlexDirection(value:string):void{
		this.addPropertyUnsafe("flex-direction", value);
	}
	addPropertyFlexFlow(value:string):void{
		this.addPropertyUnsafe("flex-flow", value);
	}
	addPropertyFlexGrow(value:string):void{
		this.addPropertyUnsafe("flex-grow", value);
	}
	addPropertyFlexShrink(value:string):void{
		this.addPropertyUnsafe("flex-shrink", value);
	}
	addPropertyFlexWrap(value:string):void{
		this.addPropertyUnsafe("flex-wrap", value);
	}
	addPropertyFloat(value:string):void{
		this.addPropertyUnsafe("float", value);
	}
	addPropertyFont(value:string):void{
		this.addPropertyUnsafe("font", value);
	}
	addPropertyFontFace(value:string):void{
		this.addPropertyUnsafe("@font-face", value);
	}
	addPropertyFontFamily(value:string):void{
		this.addPropertyUnsafe("font-family", value);
	}
	addPropertyFontFeatureSettings(value:string):void{
		this.addPropertyUnsafe("font-feature-settings", value);
	}
	addPropertyFontKerning(value:string):void{
		this.addPropertyUnsafe("font-kerning", value);
	}
	addPropertyFontSize(value:string):void{
		this.addPropertyUnsafe("font-size", value);
	}
	addPropertyFontSizeAdjust(value:string):void{
		this.addPropertyUnsafe("font-size-adjust", value);
	}
	addPropertyFontStretch(value:string):void{
		this.addPropertyUnsafe("font-stretch", value);
	}
	addPropertyFontStyle(value:string):void{
		this.addPropertyUnsafe("font-style", value);
	}
	addPropertyFontVariant(value:string):void{
		this.addPropertyUnsafe("font-variant", value);
	}
	addPropertyFontVariantCaps(value:string):void{
		this.addPropertyUnsafe("font-variant-caps", value);
	}
	addPropertyFontWeight(value:string):void{
		this.addPropertyUnsafe("font-weight", value);
	}
	addPropertyGap(value:string):void{
		this.addPropertyUnsafe("gap", value);
	}
	addPropertyGrid(value:string):void{
		this.addPropertyUnsafe("grid", value);
	}
	addPropertyGridArea(value:string):void{
		this.addPropertyUnsafe("grid-area", value);
	}
	addPropertyGridAutoColumns(value:string):void{
		this.addPropertyUnsafe("grid-auto-columns", value);
	}
	addPropertyGridAutoFlow(value:string):void{
		this.addPropertyUnsafe("grid-auto-flow", value);
	}
	addPropertyGridAutoRows(value:string):void{
		this.addPropertyUnsafe("grid-auto-rows", value);
	}
	addPropertyGridColumn(value:string):void{
		this.addPropertyUnsafe("grid-column", value);
	}
	addPropertyGridColumnEnd(value:string):void{
		this.addPropertyUnsafe("grid-column-end", value);
	}
	addPropertyGridColumnGap(value:string):void{
		this.addPropertyUnsafe("grid-column-gap", value);
	}
	addPropertyGridColumnStart(value:string):void{
		this.addPropertyUnsafe("grid-column-start", value);
	}
	addPropertyGridGap(value:string):void{
		this.addPropertyUnsafe("grid-gap", value);
	}
	addPropertyGridRow(value:string):void{
		this.addPropertyUnsafe("grid-row", value);
	}
	addPropertyGridRowEnd(value:string):void{
		this.addPropertyUnsafe("grid-row-end", value);
	}
	addPropertyGridRowGap(value:string):void{
		this.addPropertyUnsafe("grid-row-gap", value);
	}
	addPropertyGridRowStart(value:string):void{
		this.addPropertyUnsafe("grid-row-start", value);
	}
	addPropertyGridTemplate(value:string):void{
		this.addPropertyUnsafe("grid-template", value);
	}
	addPropertyGridTemplateAreas(value:string):void{
		this.addPropertyUnsafe("grid-template-areas", value);
	}
	addPropertyGridTemplateColumns(value:string):void{
		this.addPropertyUnsafe("grid-template-columns", value);
	}
	addPropertyGridTemplateRows(value:string):void{
		this.addPropertyUnsafe("grid-template-rows", value);
	}
	addPropertyHangingPunctuation(value:string):void{
		this.addPropertyUnsafe("hanging-punctuation", value);
	}
	addPropertyHeight(value:string):void{
		this.addPropertyUnsafe("height", value);
	}
	addPropertyHyphens(value:string):void{
		this.addPropertyUnsafe("hyphens", value);
	}
	addPropertyImageRendering(value:string):void{
		this.addPropertyUnsafe("image-rendering", value);
	}
	addPropertyImport(value:string):void{
		this.addPropertyUnsafe("@import", value);
	}
	addPropertyIsolation(value:string):void{
		this.addPropertyUnsafe("isolation", value);
	}
	addPropertyJustifyContent(value:string):void{
		this.addPropertyUnsafe("justify-content", value);
	}
	addPropertyKeyframes(value:string):void{
		this.addPropertyUnsafe("@keyframes", value);
	}
	addPropertyLeft(value:string):void{
		this.addPropertyUnsafe("left", value);
	}
	addPropertyLetterSpacing(value:string):void{
		this.addPropertyUnsafe("letter-spacing", value);
	}
	addPropertyLineHeight(value:string):void{
		this.addPropertyUnsafe("line-height", value);
	}
	addPropertyListStyle(value:string):void{
		this.addPropertyUnsafe("list-style", value);
	}
	addPropertyListStyleImage(value:string):void{
		this.addPropertyUnsafe("list-style-image", value);
	}
	addPropertyListStylePosition(value:string):void{
		this.addPropertyUnsafe("list-style-position", value);
	}
	addPropertyListStyleType(value:string):void{
		this.addPropertyUnsafe("list-style-type", value);
	}
	addPropertyMargin(value:string):void{
		this.addPropertyUnsafe("margin", value);
	}
	addPropertyMarginBottom(value:string):void{
		this.addPropertyUnsafe("margin-bottom", value);
	}
	addPropertyMarginLeft(value:string):void{
		this.addPropertyUnsafe("margin-left", value);
	}
	addPropertyMarginRight(value:string):void{
		this.addPropertyUnsafe("margin-right", value);
	}
	addPropertyMarginTop(value:string):void{
		this.addPropertyUnsafe("margin-top", value);
	}
	addPropertyMaskImage(value:string):void{
		this.addPropertyUnsafe("mask-image", value);
	}
	addPropertyMaskOrigin(value:string):void{
		this.addPropertyUnsafe("mask-origin", value);
	}
	addPropertyMaskPosition(value:string):void{
		this.addPropertyUnsafe("mask-position", value);
	}
	addPropertyMaskRepeat(value:string):void{
		this.addPropertyUnsafe("mask-repeat", value);
	}
	addPropertyMaskSize(value:string):void{
		this.addPropertyUnsafe("mask-size", value);
	}
	addPropertyMaxHeight(value:string):void{
		this.addPropertyUnsafe("max-height", value);
	}
	addPropertyMaxWidth(value:string):void{
		this.addPropertyUnsafe("max-width", value);
	}
	addPropertyMedia(value:string):void{
		this.addPropertyUnsafe("@media", value);
	}
	addPropertyMinHeight(value:string):void{
		this.addPropertyUnsafe("min-height", value);
	}
	addPropertyMinWidth(value:string):void{
		this.addPropertyUnsafe("min-width", value);
	}
	addPropertyMixBlendMode(value:string):void{
		this.addPropertyUnsafe("mix-blend-mode", value);
	}
	addPropertyObjectFit(value:string):void{
		this.addPropertyUnsafe("object-fit", value);
	}
	addPropertyObjectPosition(value:string):void{
		this.addPropertyUnsafe("object-position", value);
	}
	addPropertyOpacity(value:string):void{
		this.addPropertyUnsafe("opacity", value);
	}
	addPropertyOrder(value:string):void{
		this.addPropertyUnsafe("order", value);
	}
	addPropertyOrphans(value:string):void{
		this.addPropertyUnsafe("orphans", value);
	}
	addPropertyOutline(value:string):void{
		this.addPropertyUnsafe("outline", value);
	}
	addPropertyOutlineColor(value:string):void{
		this.addPropertyUnsafe("outline-color", value);
	}
	addPropertyOutlineOffset(value:string):void{
		this.addPropertyUnsafe("outline-offset", value);
	}
	addPropertyOutlineStyle(value:string):void{
		this.addPropertyUnsafe("outline-style", value);
	}
	addPropertyOutlineWidth(value:string):void{
		this.addPropertyUnsafe("outline-width", value);
	}
	addPropertyOverflow(value:string):void{
		this.addPropertyUnsafe("overflow", value);
	}
	addPropertyOverflowWrap(value:string):void{
		this.addPropertyUnsafe("overflow-wrap", value);
	}
	addPropertyOverflowX(value:string):void{
		this.addPropertyUnsafe("overflow-x", value);
	}
	addPropertyOverflowY(value:string):void{
		this.addPropertyUnsafe("overflow-y", value);
	}
	addPropertyPadding(value:string):void{
		this.addPropertyUnsafe("padding", value);
	}
	addPropertyPaddingBottom(value:string):void{
		this.addPropertyUnsafe("padding-bottom", value);
	}
	addPropertyPaddingLeft(value:string):void{
		this.addPropertyUnsafe("padding-left", value);
	}
	addPropertyPaddingRight(value:string):void{
		this.addPropertyUnsafe("padding-right", value);
	}
	addPropertyPaddingTop(value:string):void{
		this.addPropertyUnsafe("padding-top", value);
	}
	addPropertyPageBreakAfter(value:string):void{
		this.addPropertyUnsafe("page-break-after", value);
	}
	addPropertyPageBreakBefore(value:string):void{
		this.addPropertyUnsafe("page-break-before", value);
	}
	addPropertyPageBreakInside(value:string):void{
		this.addPropertyUnsafe("page-break-inside", value);
	}
	addPropertyPerspective(value:string):void{
		this.addPropertyUnsafe("perspective", value);
	}
	addPropertyPerspectiveOrigin(value:string):void{
		this.addPropertyUnsafe("perspective-origin", value);
	}
	addPropertyPointerEvents(value:string):void{
		this.addPropertyUnsafe("pointer-events", value);
	}
	addPropertyPosition(value:string):void{
		this.addPropertyUnsafe("position", value);
	}
	addPropertyQuotes(value:string):void{
		this.addPropertyUnsafe("quotes", value);
	}
	addPropertyResize(value:string):void{
		this.addPropertyUnsafe("resize", value);
	}
	addPropertyRight(value:string):void{
		this.addPropertyUnsafe("right", value);
	}
	addPropertyRowGap(value:string):void{
		this.addPropertyUnsafe("row-gap", value);
	}
	addPropertyScrollBehavior(value:string):void{
		this.addPropertyUnsafe("scroll-behavior", value);
	}
	addPropertyTabSize(value:string):void{
		this.addPropertyUnsafe("tab-size", value);
	}
	addPropertyTableLayout(value:string):void{
		this.addPropertyUnsafe("table-layout", value);
	}
	addPropertyTextAlign(value:string):void{
		this.addPropertyUnsafe("text-align", value);
	}
	addPropertyTextAlignLast(value:string):void{
		this.addPropertyUnsafe("text-align-last", value);
	}
	addPropertyTextDecoration(value:string):void{
		this.addPropertyUnsafe("text-decoration", value);
	}
	addPropertyTextDecorationColor(value:string):void{
		this.addPropertyUnsafe("text-decoration-color", value);
	}
	addPropertyTextDecorationLine(value:string):void{
		this.addPropertyUnsafe("text-decoration-line", value);
	}
	addPropertyTextDecorationStyle(value:string):void{
		this.addPropertyUnsafe("text-decoration-style", value);
	}
	addPropertyTextIndent(value:string):void{
		this.addPropertyUnsafe("text-indent", value);
	}
	addPropertyTextJustify(value:string):void{
		this.addPropertyUnsafe("text-justify", value);
	}
	addPropertyTextOverflow(value:string):void{
		this.addPropertyUnsafe("text-overflow", value);
	}
	addPropertyTextShadow(value:string):void{
		this.addPropertyUnsafe("text-shadow", value);
	}
	addPropertyTextTransform(value:string):void{
		this.addPropertyUnsafe("text-transform", value);
	}
	addPropertyTop(value:string):void{
		this.addPropertyUnsafe("top", value);
	}
	addPropertyTransform(value:string):void{
		this.addPropertyUnsafe("transform", value);
	}
	addPropertyTransformOrigin(value:string):void{
		this.addPropertyUnsafe("transform-origin", value);
	}
	addPropertyTransformStyle(value:string):void{
		this.addPropertyUnsafe("transform-style", value);
	}
	addPropertyTransition(value:string):void{
		this.addPropertyUnsafe("transition", value);
	}
	addPropertyTransitionDelay(value:string):void{
		this.addPropertyUnsafe("transition-delay", value);
	}
	addPropertyTransitionDuration(value:string):void{
		this.addPropertyUnsafe("transition-duration", value);
	}
	addPropertyTransitionProperty(value:string):void{
		this.addPropertyUnsafe("transition-property", value);
	}
	addPropertyTransitionTimingFunction(value:string):void{
		this.addPropertyUnsafe("transition-timing-function", value);
	}
	addPropertyUnicodeBidi(value:string):void{
		this.addPropertyUnsafe("unicode-bidi", value);
	}
	addPropertyUserSelect(value:string):void{
		this.addPropertyUnsafe("user-select", value);
	}
	addPropertyVerticalAlign(value:string):void{
		this.addPropertyUnsafe("vertical-align", value);
	}
	addPropertyVisibility(value:string):void{
		this.addPropertyUnsafe("visibility", value);
	}
	addPropertyWhiteSpace(value:string):void{
		this.addPropertyUnsafe("white-space", value);
	}
	addPropertyWidows(value:string):void{
		this.addPropertyUnsafe("widows", value);
	}
	addPropertyWidth(value:string):void{
		this.addPropertyUnsafe("width", value);
	}
	addPropertyWordBreak(value:string):void{
		this.addPropertyUnsafe("word-break", value);
	}
	addPropertyWordSpacing(value:string):void{
		this.addPropertyUnsafe("word-spacing", value);
	}
	addPropertyWordWrap(value:string):void{
		this.addPropertyUnsafe("word-wrap", value);
	}
	addPropertyWritingMode(value:string):void{
		this.addPropertyUnsafe("writing-mode", value);
	}
	addPropertyZIndex(value:string):void{
		this.addPropertyUnsafe("z-index", value);
	}
	addPropertyFontFeatureValues(value:string):void{
		this.addPropertyUnsafe("@font-feature-values", value);
	}
	addPropertyFontLanguageOverride(value:string):void{
		this.addPropertyUnsafe("font-language-override", value);
	}
	addPropertyFontSynthesis(value:string):void{
		this.addPropertyUnsafe("font-synthesis", value);
	}
	addPropertyFontVariantAlternates(value:string):void{
		this.addPropertyUnsafe("font-variant-alternates", value);
	}
	addPropertyFontVariantEastAsian(value:string):void{
		this.addPropertyUnsafe("font-variant-east-asian", value);
	}
	addPropertyFontVariantLigatures(value:string):void{
		this.addPropertyUnsafe("font-variant-ligatures", value);
	}
	addPropertyFontVariantNumeric(value:string):void{
		this.addPropertyUnsafe("font-variant-numeric", value);
	}
	addPropertyFontVariantPosition(value:string):void{
		this.addPropertyUnsafe("font-variant-position", value);
	}
	addPropertyLineBreak(value:string):void{
		this.addPropertyUnsafe("line-break", value);
	}
	addPropertyMask(value:string):void{
		this.addPropertyUnsafe("mask", value);
	}
	addPropertyMaskClip(value:string):void{
		this.addPropertyUnsafe("mask-clip", value);
	}
	addPropertyMaskComposite(value:string):void{
		this.addPropertyUnsafe("mask-composite", value);
	}
	addPropertyMaskMode(value:string):void{
		this.addPropertyUnsafe("mask-mode", value);
	}
	addPropertyMaskType(value:string):void{
		this.addPropertyUnsafe("mask-type", value);
	}
	addPropertyTextCombineUpright(value:string):void{
		this.addPropertyUnsafe("text-combine-upright", value);
	}
	addPropertyTextOrientation(value:string):void{
		this.addPropertyUnsafe("text-orientation", value);
	}
	addPropertyTextUnderlinePosition(value:string):void{
		this.addPropertyUnsafe("text-underline-position", value);
	}
}