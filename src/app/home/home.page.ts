import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent} from '../circulo/circulo.component'; 
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, IonSelect, IonSelectOption, TrianguloComponent, CommonModule]
})
export class HomePage {
figuraGeometrica:string =""

constructor() {}

esCirculo(){ return this.figuraGeometrica == "circulo"}
esTriangulo(){ return this.figuraGeometrica == "triangulo"}

seleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
  this.figuraGeometrica = $event.detail.value
  }  
}
