import { Component } from '@angular/core';

@Component({
  selector: 'app-areas',
  standalone: false,
  templateUrl: './areas.html',
})
export class Areas {
  figura: string=''
  radio:string=''
  base:string=''
  altura:string=''
  lado:string=''
  apotema:string=''
  resultado:number=0

  calcular():void{
    if (this.figura === 'triangulo'){
      this.resultado = (parseFloat(this.base) * parseFloat(this.altura)) / 2
    }
    if (this.figura === 'circulo'){
      let r = parseFloat(this.radio)
      this.resultado = Math.PI * (r*r)
    }
    if (this.figura ==='rectangulo'){
      this.resultado = parseFloat(this.base) * parseFloat(this.altura)
    }
    if (this.figura === 'pentagono'){
      let perimetro = parseFloat(this.lado) * 5 
      this.resultado = (perimetro * parseFloat(this.apotema)) / 2 
    }
  }
}
