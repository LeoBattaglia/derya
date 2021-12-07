//Imports
import * as sys from "samara"

//Class
export class HTMLTagAttribute{
    //Declarations
    _name:string;
    _value:string;

    //Constructor
    constructor(name:string, value?:string){
        this.name = name;
        if(!sys.isNull(value)){
            this.value = value;
        }
    }

    //Get-Methods
    get name():string{
        return this._name;
    }

    get value():string{
        if(sys.isNull(this._value)){
            return undefined;
        }else{
            return this._value;
        }
    }

    //Set-Methods
    set name(value:string){
        this._name = value;
    }

    set value(value:string){
        this._value = value;
    }
}