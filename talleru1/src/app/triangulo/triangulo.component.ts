import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
          IonThumbnail, IonLabel, IonCardSubtitle, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { triangulo } from '../modelo/figuraGeometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, 
            IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
            IonThumbnail, IonLabel, IonCardSubtitle, IonImg]
})
export class TrianguloComponent  implements OnInit {
  ladoAsrt: string = "";  // variables que guardan el dato como string
  ladoBsrt: string = "";
  ladoCsrt: string = "";

  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseInt(this.ladoAsrt)  // Se pasan los datos de string a numero
    const ladoB = parseInt(this.ladoBsrt)
    const ladoC = parseInt(this.ladoCsrt)

    const figuraGeometrica = new triangulo(ladoA, ladoB, ladoC) // Crea un nuevo triangulo

    const sumalados = figuraGeometrica.calcularPerimetro() // Funsión que ejecuta el cálculo y lo guarda el la var sumalados
      this.resultado = `El perímetro es ${sumalados}` //  Resltado del calculo
  }

}
