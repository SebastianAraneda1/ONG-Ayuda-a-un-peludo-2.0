import { Component } from '@angular/core';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public email = "";
  public pass = "";
  listaUsuarios = new Array<UsuarioInterface>();
  existe = false;

  constructor(private userService:UsuarioService, private route:Router) {}

  ingreso(){

    this.userService.getUsuarios().subscribe((usuarios:Array<UsuarioInterface>)=>{

      this.listaUsuarios = usuarios;

      if(this.listaUsuarios.length > 0){

        this.listaUsuarios.forEach(usuario => {
  
          if(this.email === usuario.email && this.pass === usuario.contrasena){
            this.existe = true;
            console.log("Existe");
            this.userService.usuario = usuario;
            this.userService.setLogStatus(true);
            this.route.navigate(['/inicio']);
          }

        });
        if(!this.existe){
          alert("Email o Contraseña incorrectos")
        }
      }

    });
  }

}
