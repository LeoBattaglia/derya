//Classes
export class HTMLTag{
    //Declarations
    _tag:string;

    //Constructor
    constructor(tag:string){
        this.tag = tag;
    }

    //Functions
    addParameter(name:string, value:string):void{
        let pos:number = this._tag.indexOf(">");
        if(pos > 0){
            this.tag = this.tag.replace(">", " " + name + "=\"" + value + "\">");
        }
    }
    get tag():string{
        return this._tag;
    }
    set tag(value:string){
        this._tag = value;
    }
}