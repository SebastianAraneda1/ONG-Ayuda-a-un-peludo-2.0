import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  formRegistro = {
    user: "",
    email: "",
    pass: "",
    rPass: ""
  }

  acuerdo:boolean = false;

  showErrorUser:boolean = false;
  showErrorEmail:boolean = false;
  showErrorPass:boolean = false;
  showErrorDosPass:boolean = false;
  showErrorDosEmail:boolean = false;

  constructor(
    private userService:UsuarioService,
    private route:Router
  ){}

  registrar(){

    const admin = "admin";
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let userOk = false;
    let emailOk = false;
    let passOk = false;

    //-------------------USUARIO----------------------------

    if(this.formRegistro.user.length > 4){
      userOk = true;
      this.showErrorUser = false;
    }else{
      userOk = false;
      this.showErrorUser = true;
    }

    //----------------------EMAIL---------------------------
    
    if(regex.test(this.formRegistro.email)){
      emailOk = true;
      this.showErrorEmail = false;
    }else{
      emailOk = false;
      this.showErrorEmail = true;
    }

    if(this.formRegistro.email.includes(admin)){
      emailOk = false;
      this.showErrorDosEmail = true
    }else{
      this.showErrorDosEmail = false;
    }

    //-------------------CONTRASEÑA---------------------------

    if(this.formRegistro.pass.length == 0 || this.formRegistro.rPass.length == 0){
      passOk = false;
      this.showErrorDosPass = true;
    }else{
      this.showErrorDosPass = false;
    }

    if(this.formRegistro.pass === this.formRegistro.rPass){
      passOk = true;
      this.showErrorPass = false;
    }else{
      passOk = false;
      this.showErrorPass = true
    }

    //------------------VALIDACIÓN FINAL----------------------

    if(userOk && emailOk && passOk){
      this.crearUser();
      alert('Usuario registrado con exito')
      this.route.navigate(['/login'])
    }

  }

  crearUser(){
    let post = {
      nombre: this.formRegistro.user,
      contrasena: this.formRegistro.pass,
      email: this.formRegistro.email,
      rol: "user"
    };
    this.userService.createUser(post).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    });
  }

}
