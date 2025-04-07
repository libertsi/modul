import { Dot } from "./dot";
export class Circle extends Dot{
    constructor(name: string, r: number, s: number, x: number, y: number){
        super(name, r, s, x, y);
    }

    override calculateS(): number {
        return Math.PI * this.r * this.r;
    }
}