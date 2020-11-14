# Derya - CSS-Parser

CSS-Parser, developed in TypeScript on Node.js.

**Works only with valid CSS-Code**

##Usage
```
import{Parser} from "./index";
let parser = new Parser();
...
let css = parser.parse(cssString);
```

##Return
Returns an Array of CSS-Elements with all Sub-Elements and Attributes.