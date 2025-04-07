import { Injectable } from '@angular/core';
import { Dot } from '../class/dot';

@Injectable({
  providedIn: 'root'
})
export class FigureReadService {
  public figures: Dot[] = [];
  addFigure(figure: Dot) {
    this.figures.push(figure);
  }
  constructor() { }
}
