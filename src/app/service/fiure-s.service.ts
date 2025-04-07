import { Ellipse } from './../class/ellipse';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiureSService {

  constructor() { }

  circleS(r: number){
    return Math.PI * r * r;
  }

  ellipseS(a: number, b: number){
    return Math.PI * a * b;
  }

  ringS(r: number, innerR: number){
    return Math.PI * ((r * r) - (innerR * innerR));
  }
}
