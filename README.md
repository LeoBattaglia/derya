# Derya - CSS-Parser

Just a small and simple Parser for CSS-Files. Cuts the CSS-String into
individual Elements.

**Works only with valid CSS-Code**

##Usage
```
import{Parser} from "./index";
let parser = new Parser();
...
parser.parse(cssString);
```

##Return
Returns an Array of Strings, containing all CSS-Elements, except Comments.

Cascaded Styles (for Example in @media) are parsed as one Element.