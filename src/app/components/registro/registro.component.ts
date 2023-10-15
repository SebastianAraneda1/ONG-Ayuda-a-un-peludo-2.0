import { Component } from '@angular/core';

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

  constructor(){}

  registrar(){

  }

}
