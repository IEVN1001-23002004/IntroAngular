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

}
