//Classes
export class SourceCode{
    //Declarations
    _src:string;

    //Constructor
    constructor(){
        this.src = "";
    }

    //Functions
    add(value:string):void{
        this.src += value + "\n";
    }
    get src():string{
        return this._src;
    }
    set src(value:string){
        this._src = value;
    }
}