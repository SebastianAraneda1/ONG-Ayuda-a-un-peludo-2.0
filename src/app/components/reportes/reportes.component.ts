import { Component, inject, Inject, OnInit } from '@angular/core';
import { Gato } from 'src/app/interfaces/gato';
import { Perro } from 'src/app/interfaces/perro';
import { SGatoService } from 'src/app/services/s-gato.service';
import { SPerroService } from 'src/app/services/s-perro.service';
import { UsuarioService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit{

  solicitudesPendientes: number = 0;
  perrosAdoptados: number = 0;
  gatosAdoptados: number = 0;

  perroService: SPerroService = inject(SPerroService);
  gatoService: SGatoService = inject(SGatoService);

  perros: Array<Perro> = new Array<Perro>();
  gatos: Array<Gato> = new Array<Gato>();



  constructor() {
    
  }
  ngOnInit(): void {
    this.perroService.getPerros().subscribe((perro)=> {
      this.perros = perro;
      this.perros.forEach(perro =>{
        if(perro.procesoAdopcion){
          this.solicitudesPendientes = this.solicitudesPendientes + 1;
        }
        if(perro.adoptado){
          this.perrosAdoptados = this.perrosAdoptados + 1;
        }
      })
    });

    this.gatoService.getGatos().subscribe((gato) => {
      this.gatos = gato;
      this.gatos.forEach(gato =>{
        if(gato.procesoAdopcion){
          this.solicitudesPendientes = this.solicitudesPendientes + 1;
        }
        if(gato.adoptado){
          this.gatosAdoptados = this.gatosAdoptados + 1;
        }
      })
    });
  }

  aceptarSolicitudPerro(perro: Perro): void{
    perro.adoptado = true;
    perro.procesoAdopcion = false;
    this.perroService.updatePerro(perro).subscribe(resp =>{
      window.location.reload();
    });

  }

  aceptarSolicitudGato(gato: Gato): void{
    gato.adoptado = true;
    gato.procesoAdopcion = false;
    this.perroService.updatePerro(gato).subscribe(resp =>{
      alert("Solicitud aprobada!!")
    });
  }

  rechazarSolicitudPerro(perro: Perro): void{
    perro.adoptado = false;
    perro.procesoAdopcion = false;
    this.perroService.updatePerro(perro).subscribe(resp =>{
      alert("Solicitud rechazada")
    });
  }

  rechazarSolicitudGato(gato: Gato): void{
    gato.adoptado = false;
    gato.procesoAdopcion = false;
    this.perroService.updatePerro(gato).subscribe(resp =>{
      alert("Solicitud rechazada")
    });
  }
}
