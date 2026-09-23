import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
})
export class Usuarios {
  usuarioCorrecto:string='OmarAdmin'
  contrasenaCorrecta:string='Paso1234'
  usuarioIngresado:string=''
  contrasenaIngresada:string=''
  mensaje:string=''
  validar():void{
    if(this.usuarioIngresado !== this.usuarioCorrecto){
      this.mensaje = 'El nombre de usuario no es valido'
    }else if(this.contrasenaIngresada !== this.contrasenaCorrecta){
      this.mensaje='La contraseña no es valida'
    }else {
      this.mensaje = 'Bienvenido'
    }
  }

}
