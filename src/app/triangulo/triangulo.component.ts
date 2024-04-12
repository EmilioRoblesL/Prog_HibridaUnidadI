import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../modelo/triangulo';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg]
})
export class TrianguloComponent  implements OnInit {
  ladoA!: number;
  ladoB!: number;
  ladoC!: number;
  resultado: string = "";

constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const triangulo = new Triangulo(this.ladoA, this.ladoB, this.ladoC);
    const perimetro = triangulo.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro}`;
  }
}
