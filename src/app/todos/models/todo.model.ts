
export class Todo {

    public id: number;
    public text: string;
    public completat: boolean;

    constructor( text: string ) {
        this.text = text;
        this.id = Math.random();
        this.completat = false;
    }
}
