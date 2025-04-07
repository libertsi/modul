import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFiguresComponent } from './add-figures.component';

describe('AddFiguresComponent', () => {
  let component: AddFiguresComponent;
  let fixture: ComponentFixture<AddFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFiguresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});