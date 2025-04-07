import { TestBed } from '@angular/core/testing';

import { FiureSService } from './fiure-s.service';

describe('FiureSService', () => {
  let service: FiureSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiureSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Порахувати площу для круга', () => {
    let r = 10;
    let myS = r*r*Math.PI;
    let serviseS = service.circleS(r);
    expect(myS).toBe(serviseS);
  });

  it('Порахувати площу для еліпсу', () => {
    let r1 = 10;
    let r2 = 5;
    let myS = r1*r2*Math.PI;
    let serviseS = service.ellipseS(r1, r2);
    expect(myS).toBe(serviseS);
  });

  it('Порахувати площу для кільця', () => {
    let r1 = 10;
    let r2 = 5;
    let myS = Math.PI*(r1 * r1 - r2 * r2);
    let serviseS = service.ringS(r1, r2);
    expect(myS).toBe(serviseS);
  });

});
