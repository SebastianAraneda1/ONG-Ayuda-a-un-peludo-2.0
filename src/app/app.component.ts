import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ONG_mascotas';
  
  mostrar:boolean = false;

  constructor(private userService:UsuarioService){}

  ngOnInit():void{
    let logeado = localStorage.getItem("logeo");
    if(logeado){
      this.mostrar = logeado === "true";
      return;
    }
    this.userService.getLogStatus().subscribe(logStatus => {
      this.mostrar = logStatus;
      console.log(this.userService.usuario);
    });
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
