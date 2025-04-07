import { FigureReadService } from './../service/figure-read.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,  IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonLabel} from '@ionic/angular/standalone';
import { AddFiguresComponent } from '../add-figures/add-figures.component';
import { EditFiguresComponent } from '../edit-figures/edit-figures.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [EditFiguresComponent, IonContent, IonHeader, CommonModule, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonItem, IonButton, IonInput, IonLabel, AddFiguresComponent],
})
export class HomePage {
  showEditForm = false;
  editFormNumber = 0;
  constructor(public figureReadService: FigureReadService) {}
  addFigure($event: any){
    this.figureReadService.addFigure($event)
  }
  editFormShow(i: number){
    this.showEditForm = true;
    this.editFormNumber = i;
  }
  editFigure($event: any, i: number){
    console.log(this.figureReadService.figures[i])
    this.figureReadService.figures[i] = $event;
    console.log(this.figureReadService.figures[i])
    this.showEditForm = false;
  }

}
