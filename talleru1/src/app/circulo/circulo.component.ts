import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardContent, 
        IonCardHeader, IonCardTitle, IonThumbnail, IonLabel, IonCardSubtitle,
        IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { circulo, figuraGeometrica } from '../modelo/figuraGeometrica';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonThumbnail, IonLabel,
            IonCardSubtitle, IonImg]
  
})
export class CirculoComponent  implements OnInit {
  radioSrt: string = "";    // variable que guarda el dato como string
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const radio = parseInt(this.radioSrt)  // Pasa el dato de string a numero
    const figuraGeometrica = new circulo(radio)   // Llamada  a la clase circulo heredada de figuraGeometrica 
    const nradio = figuraGeometrica.calcularPerimetro()   // Funsión que ejecuta el cálculo
    this.resultado = `El perímetro es ${nradio}`  // Resultado del calculo
  }
}
