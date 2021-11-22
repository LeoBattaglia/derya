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
        this.properties.push(new CSSProperty(name, value));
    }
}

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