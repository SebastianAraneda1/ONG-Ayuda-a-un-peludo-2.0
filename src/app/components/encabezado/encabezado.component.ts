import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent {

  nombre:string = "";
  esAdmin: boolean = false;

  constructor(private usuarioService:UsuarioService, private route:Router){}

  ngOnInit():void{
    
    this.esAdmin = this.usuarioService.usuario.rol === "admin";

    
    if(this.usuarioService.usuario.rol == 'user'){
      this.nombre = 'cliente ' + this.usuarioService.usuario.nombre;
    }
    if(this.usuarioService.usuario.rol == 'admin'){
      this.nombre = 'admin ' + this.usuarioService.usuario.nombre;
    }
  }

  cerrarSesion(){
    localStorage.removeItem("logeo");
    this.usuarioService.setLogStatus(false);
    this.route.navigate(['/'])
  }

}
