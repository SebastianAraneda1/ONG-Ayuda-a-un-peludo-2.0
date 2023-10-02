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
    this.userService.getLogStatus().subscribe(logStatus => {
      this.mostrar = logStatus;
      console.log(this.userService.usuario);
    });
  }
}
