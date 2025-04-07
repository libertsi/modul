import { Circle } from './../class/circle';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dot } from '../class/dot';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { FiureSService } from '../service/fiure-s.service';
import { Ellipse } from '../class/ellipse';
import { Ring } from '../class/ring';

@Component({
  selector: 'app-add-figures',
  templateUrl: './add-figures.component.html',
  styleUrls: ['./add-figures.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard,  CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddFiguresComponent  implements OnInit {
  figureForm!: FormGroup;
  @Output() figureAdd: EventEmitter<Dot> = new EventEmitter<Dot>();
  constructor(private fb: FormBuilder, private figureS: FiureSService) {
    this.figureForm = this.fb.group({
      circlesNumber: ['1', [Validators.required, Validators.min(1), Validators.max(100)]],
      ellipsesNumber: ['1', [Validators.required, Validators.min(1), Validators.max(100)]],
      ringsNumber: ['1', [Validators.required, Validators.min(1), Validators.max(100)]],
      });

   }

  ngOnInit() {}

  onSubmit() {
    if (this.figureForm.valid) {
      const figureNumbers = this.figureForm.value;
      console.log(figureNumbers)
      for(let i = 0; i < figureNumbers.circlesNumber; i++){
        let r = Math.random()*10;
        let s = this.figureS.circleS(r);
        let x = Math.random()*100; 
        let y = Math.random()*100;
        let circle = new Circle("Circle", r, s, x, y);
        this.figureAdd.emit(circle)
      }
      for(let i = 0; i < figureNumbers.ellipsesNumber; i++){
        let r = Math.random()*10;
        let r2 = Math.random()*10;
        let s = this.figureS.ellipseS(r, r2);
        let x = Math.random()*100; 
        let y = Math.random()*100;
        let ellipse = new Ellipse("Ellipse", r, s, x, y, r2);
        this.figureAdd.emit(ellipse)
      }
      for(let i = 0; i < figureNumbers.ringsNumber; i++){
        let r = Math.random()*5;
        let r2 = r + Math.random()*5;
        let s = this.figureS.ringS(r2, r);
        let x = Math.random()*100; 
        let y = Math.random()*100;
        let ring = new Ring("Ring", r, s, x, y, r2);
        this.figureAdd.emit(ring)
      }
    } else {
      console.error('Форма не вірна');
    }
  }

}
