export class Color {
    public name: string;
    public selected: boolean;
    public red: number;
    public green: number;
    public blue: number;

    constructor(name: string, selected: boolean, red: number, green: number, blue: number){
        this.name = name;
        this.selected = selected;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
}