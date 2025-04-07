import { TestBed } from '@angular/core/testing';

import { FigureReadService } from './figure-read.service';
import { Circle } from '../class/circle';
import { Ring } from '../class/ring';

describe('FigureReadService', () => {
  let service: FigureReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigureReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Додати фігуру до масиву', () => {
    let figure = new Circle("Circle", 10, 50, 2, 5);
    service.addFigure(figure);
    expect(service.figures[0]).toBe(figure);
  });

  it('Додати 2 фігури до масиву', () => {
    let figure1 = new Circle("Circle", 10, 50, 2, 5);
    let figure2 = new Ring("Ring", 5, 2, 2, 2, 2)
    service.addFigure(figure1);
    service.addFigure(figure2);
    let testArray = [figure1, figure2]
    expect(service.figures[1]).toBe(testArray[1]);
  });
});
