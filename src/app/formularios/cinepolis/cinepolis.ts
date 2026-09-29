import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {nombre: string = '';
  compradores: number = 0;
  conTarjeta: boolean = true;
  sinTarjeta: boolean = false;
  boletos: number = 0;
  total: number = 0;
  boleta: number = 12.00;
  mensaje: string = '';

  procesar(): void {
    this.mensaje = '';
    this.total = 0;

    if (this.compradores <= 0 || this.boletos <= 0) {
      this.mensaje = 'Error: Ingrese valores mayores a cero';
      return;
    }

    let maxBoletas: number = this.compradores * 7;
    if (this.boletos > maxBoletas) {
      this.mensaje = `Error: Máximo 7 por persona (Límite: ${maxBoletas})`;
      return;
    }

    let pagar: number = this.boletos * this.boleta;
    let descuentoTexto: string = 'Sin descuento de boletos';

    if (this.boletos > 5) {
      pagar = pagar * 0.85;
      descuentoTexto = 'Descuento del 15%';
    } else if (this.boletos >= 3) {
      pagar = pagar * 0.90;
      descuentoTexto = 'Descuento del 10%';
    }

    if (this.conTarjeta) {
      pagar = pagar * 0.90;
      descuentoTexto += ' + 10% Tarjeta Cineco';
    }

    this.total = Math.round(pagar);
    this.mensaje = descuentoTexto;
  }

  salir(): void {
    this.nombre = '';
    this.compradores = 0;
    this.conTarjeta = true;
    this.sinTarjeta = false;
    this.boletos = 0;
    this.total = 0;
    this.mensaje = '';
  }}
