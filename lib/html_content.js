"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLContent = void 0;
//Class
var HTMLContent = /** @class */ (function () {
    //Constructor
    function HTMLContent(id, content) {
        this.content = content;
        this.id = id;
    }
    Object.defineProperty(HTMLContent.prototype, "content", {
        //Get-Methods
        get: function () {
            return this._content;
        },
        //Set-Methods
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HTMLContent.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return HTMLContent;
}());
exports.HTMLContent = HTMLContent;
//# sourceMappingURL=html_content.js.map