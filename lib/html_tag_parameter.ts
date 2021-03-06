//Class
export class HTMLTagParameter{
    //Declarations
    _name:string;
    _value:string;

    //Constructor
    constructor(name:string, value:string){
        this.name = name;
        this.value = value;
    }

    //Get-Methods
    get name():string{
        return this._name;
    }

    get value():string{
        return this._value;
    }

    //Set-Methods
    set name(value:string){
        this._name = value;
    }

    set value(value:string){
        this._value = value;
    }
}