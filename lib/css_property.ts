//Classes
export class CSSProperty{
    //Declarations
    private readonly name:string;
    private readonly value:string;

    //Constructor
    constructor(name:string, value:string){
        this.name = name;
        this.value = value;
    }

    //Methods
    getName():string{
        return this.name;
    }

    getValue():string{
        return this.value;
    }
}