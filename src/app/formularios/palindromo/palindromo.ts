import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.html',
})
export class Palindromo {
frase = '';
  vocales: string[] = [];
  consonantes: string[] = [];
  nVocales = 0;
  nConsonantes = 0;
  resultado = '';

  procesar(): void {
    this.vocales = [];
    this.consonantes = [];

    let normal = '';

    for (const c of this.frase.toLowerCase()) {
      if ('aeiou'.includes(c)) {
        this.vocales.push(c);
        normal += c;
      } else if ((c >= 'a' && c <= 'z') || c === 'ñ') {
        this.consonantes.push(c);
        normal += c;
      }
    }

    this.nVocales = this.vocales.length;
    this.nConsonantes = this.consonantes.length;

    if (!normal) {
      this.resultado = 'Escribe una frase';
    } else {
      const invertida = normal.split('').reverse().join('');
      this.resultado = normal === invertida ? 'Es palíndromo' : 'No es palíndromo';
    }
  }

  limpiar(): void {
    this.frase = '';
    this.vocales = [];
    this.consonantes = [];
    this.nVocales = 0;
    this.nConsonantes = 0;
    this.resultado = '';
  }

}
