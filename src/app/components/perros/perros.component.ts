import { Component } from '@angular/core';
import { SPerroService } from 'src/app/services/s-perro.service';
import { Perro } from '../../interfaces/perro'
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {

  perros: Array<Perro> = new Array<Perro>();
  botonesPerro:boolean = false;

  constructor(private perroService: SPerroService, private usuarioService:UsuarioService) {}
  
  ngOnInit(): void {
    this.perroService.getPerros().subscribe((perro)=> (this.perros = perro));
    if(this.usuarioService.usuario.rol == 'user'){
      this.botonesPerro = true;
    }
    if(this.usuarioService.usuario.rol == 'admin'){
      this.botonesPerro = false;
    }
  }

}
