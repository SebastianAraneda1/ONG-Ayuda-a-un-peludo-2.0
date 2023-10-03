import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {

  nombre:string = "";

  constructor(private usuarioService:UsuarioService){}

  ngOnInit():void{
    if(this.usuarioService.usuario.rol == 'user'){
      this.nombre = 'cliente ' + this.usuarioService.usuario.nombre;
    }
    if(this.usuarioService.usuario.rol == 'admin'){
      this.nombre = 'admin ' + this.usuarioService.usuario.nombre;
    }
  }

  cerrarSesion(){
    this.usuarioService.setLogStatus(false);
  }

}
