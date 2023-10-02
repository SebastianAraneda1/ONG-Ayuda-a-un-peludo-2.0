import { Component, OnInit } from '@angular/core';
import { SGatoService } from 'src/app/services/s-gato.service';
import { Gato } from '../../interfaces/gato'
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent implements OnInit{
  gatos: Array<Gato> = new Array<Gato>();

  constructor(private gatoService: SGatoService
              , private usuarioService:UsuarioService) {}
  
  ngOnInit(): void {
    this.gatoService.getGatos().subscribe((gato)=> (this.gatos = gato));
    console.log("Componente gato: ", this.usuarioService.usuario.rol)
  }
  
}
