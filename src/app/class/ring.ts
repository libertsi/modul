import { Dot } from "./dot";
export class Ring extends Dot{
    innerR: number;
    constructor(name: string, r: number, s: number, x: number, y: number, innerR: number){
        super(name, r, s, x, y);
        this.innerR = innerR;
    }

    override calculateS(): number {
        return Math.PI * ((this.r * this.r) - (this.innerR * this.innerR));
    }

    override getSpecificAttributes(){
        let attributes = super.getSpecificAttributes();
        attributes.push(this.innerR);
        return attributes;
    }
}