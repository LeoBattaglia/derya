//Class
export class HTMLContent{
    //Declarations
    _content:string;
    _id:number;

    //Constructor
    constructor(id:number, content:string){
        this.content = content;
        this.id = id;
    }

    //Get-Methods
    get content():string{
        return this._content;
    }

    get id():number{
        return this._id;
    }

    //Set-Methods
    set content(value:string){
        this._content = value;
    }

    set id(value:number){
        this._id = value;
    }
}