import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, 
        SelectChangeEventDetail, IonItem, IonList, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonThumbnail, IonLabel } from '@ionic/angular/standalone';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, IonSelect, 
            IonSelectOption, CommonModule, IonItem, IonList, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonThumbnail, IonLabel ],
})

export class HomePage {
  figuraGeometrica: string = ""  // Variable de tipo propiedad

  constructor() {}

  esCirculo() { return this.figuraGeometrica == "circulo"}
  esTriangulo() { return this.figuraGeometrica == "triangulo"}

  manejarSeleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>){
    this.figuraGeometrica = $event.detail.value
  }
}
