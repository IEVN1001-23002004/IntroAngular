import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: string = '';
  y1: string = '';
  x2: string = '';
  y2: string = '';
  resultado: number = 0;

  calcular(): void {
    const difX = parseInt(this.x2) - parseInt(this.x1);
    const difY = parseInt(this.y2) - parseInt(this.y1);
    this.resultado = Math.sqrt((difX * difX) + (difY * difY));
}
}
