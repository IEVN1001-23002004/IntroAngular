import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

   showImage():void{
    this.muestraImage=!this.muestraImage;
  } 

 heroes: IHeroes [] =[
  {
  imagen:'https://dragonball-api.com/characters/goku_normal.webp',
  nombre:'Goku',
  descripcion:'El protagonista de la serie',
  raza:'Saiyan',
  ki:60_000_000
  },
  {
  imagen:'https://dragonball-api.com/characters/vegeta_normal.webp',
  nombre:'Vegeta',
  descripcion:'Príncipe de los Saiyans',
  raza:'Saiyan',
  ki:54_000_000
  },
  {
  imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
  nombre:'Piccolo',
  descripcion:'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre',
  raza:'Namekiano',
  ki:2_000_000
  },
  {
  imagen:'https://dragonball-api.com/characters/Freezer.webp',
  nombre:'Freezer',
  descripcion:'Enemigo No.1 de Goku',
  raza:'Frieza Race',
  ki:530_000
  },
] 

}
