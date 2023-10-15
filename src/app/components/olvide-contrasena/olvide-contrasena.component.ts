import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioInterface } from 'src/app/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-olvide-contrasena',
  templateUrl: './olvide-contrasena.component.html',
  styleUrls: ['./olvide-contrasena.component.scss']
})
export class OlvideContrasenaComponent {

  email:string = "";
  listaUsuarios = new Array<UsuarioInterface>();
  showErrorEmail:boolean = false;

  constructor(
    private userService:UsuarioService,
    private route:Router
  ){}

  recuperar(){
    this.userService.getUsuarios().subscribe((usuarios:Array<UsuarioInterface>)=>{

      this.listaUsuarios = usuarios;

      this.listaUsuarios.forEach(usuario => {
        if(this.email === usuario.email){
          alert("Le hemos enviado su contraseña a su correo!!")
          this.route.navigate(['/login'])
          this.showErrorEmail = false;
        }else{
          this.showErrorEmail = true;
        }
      });

    })

  }

}
