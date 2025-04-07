import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Dot } from '../class/dot';
import { IonHeader, IonTitle,IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Circle } from '../class/circle';
import { Ellipse } from '../class/ellipse';
import { Ring } from '../class/ring';

@Component({
  selector: 'app-edit-figures',
  templateUrl: './edit-figures.component.html',
  styleUrls: ['./edit-figures.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonTitle, CommonModule, FormsModule, ReactiveFormsModule]
})
export class EditFiguresComponent  implements OnInit {
  @Input() figure!: Dot;
  @Output() figureEdit: EventEmitter<Dot> = new EventEmitter<Dot>();
  figureForm!: FormGroup;

  constructor(private fb: FormBuilder) { 


  }

  onSubmit(){
    
    if(this.figureForm.valid){
      
      const figureData = this.figureForm.value;
      console.log(figureData)
      if(figureData.name == "Circle"){
        console.log(213123)
        const figure = new Circle(figureData.name, figureData.r, figureData.s, figureData.x, figureData.y);
        this.figureEdit.emit(figure)
      }
      if(figureData.name == "Ellipse"){
        const figure = new Ellipse(figureData.name, figureData.r, figureData.s, figureData.x, figureData.y, figureData.secondR[0]);
        this.figureEdit.emit(figure)
      }
      if(figureData.name == "Ring"){
        const figure = new Ring(figureData.name, figureData.r, figureData.s, figureData.x, figureData.y, figureData.innerR);
        this.figureEdit.emit(figure)
      }

    }
  }

  ngOnInit() {
    if(this.figure.getName() == 'Circle'){
      this.figureForm = this.fb.group({
        name: [this.figure.getName()],
        r: [this.figure.getR()],
        s: [this.figure.getS()],
        x: [this.figure.getX(), [Validators.required, Validators.min(1), Validators.max(100)]],
        y: [this.figure.getY(), [Validators.required, Validators.min(1), Validators.max(100)]],
      })  
    }
    if(this.figure.getName() == 'Ellipse'){
      this.figureForm = this.fb.group({
        name: [this.figure.getName()],
        r: [this.figure.getR()],
        s: [this.figure.getS()],
        x: [this.figure.getX(), [Validators.required, Validators.min(1), Validators.max(100)]],
        y: [this.figure.getY(), [Validators.required, Validators.min(1), Validators.max(100)]],
        secondR: [this.figure.getSpecificAttributes()],
      })  
    }

    if(this.figure.getName() == 'Ring'){
      this.figureForm = this.fb.group({
        name: [this.figure.getName()],
        r: [this.figure.getR()],
        s: [this.figure.getS()],
        x: [this.figure.getX(), [Validators.required, Validators.min(1), Validators.max(100)]],
        y: [this.figure.getY(), [Validators.required, Validators.min(1), Validators.max(100)]],
        innerR: [this.figure.getSpecificAttributes()],
      })  
    }

  }

}
