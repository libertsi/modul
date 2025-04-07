export abstract class Dot{
    name: string;
    r: number = 1;
    s: number = 1;
    x: number = 1;
    y: number = 1;
    constructor(name: string, r: number, s: number, x: number, y: number){
        this.name = name;
        this.r = r;
        this.s = s;
        this.x = x;
        this.y = y;
    }
    getName(){
        return this.name;
    }
    getR(){
        return this.r;
    }
    getS(){
        return this.s;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    getSpecificAttributes(): number[] {
        return [];
    }
    calculateS(){
        return this.s;
    }
}