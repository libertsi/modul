import { Dot } from "./dot";
export class Ellipse extends Dot{
    secondR: number;
    constructor(name: string, r: number, s: number, x: number, y: number, secondR: number){
        super(name, r, s, x, y);
        this.secondR = secondR;
    }

    override calculateS(): number {
        return Math.PI * this.r * this.secondR;
    }
    override getSpecificAttributes(){
        let attributes = super.getSpecificAttributes();
        attributes.push(this.secondR);
        return attributes;
    }
}