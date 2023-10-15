import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Perro } from 'src/app/interfaces/perro';
import { Gato } from 'src/app/interfaces/gato';
import { SGatoService } from 'src/app/services/s-gato.service';
import { SPerroService } from 'src/app/services/s-perro.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.scss']
})
export class ModalEliminarComponent {

  constructor(
    public modalService:BsModalService, 
    private perroService:SPerroService,
    private route:Router,
    private gatoService:SGatoService
  ){}

  cerrarModal(){
    this.modalService.hide();
  }

  borrar(): void {
  
    this.perroService.getPerros().subscribe(
      (perros: Array<Perro>) => {
        let perro = perros.find(p => p.id);
        if (perro?.tipo === "perro") {

          const perro = this.perroService.perron;
          this.perroService.deletePerro(perro.id).subscribe({
            next: (resp: any) => {
              alert('Perro eliminado');
              this.cerrarModal();
              this.route.navigate(['/inicio']);
              console.log('Borrado');
              console.log(resp);
            },
            error: (err: any) => {
              console.log(err);
            }
          });
          
        }
      }
    )

    this.gatoService.getGatos().subscribe(
      (gatos: Array<Gato>) => {
        let gato = gatos.find(p => p.id);
        if (gato?.tipo === "gato") {

          const gato = this.gatoService.gaton;
          this.gatoService.deleteGato(gato.id).subscribe({
            next: (resp: any) => {
              alert('Gato eliminado');
              this.cerrarModal();
              this.route.navigate(['/inicio']);
              console.log('Borrado');
              console.log(resp);
            },
            error: (err:any) => {
              console.log(err);
            }
          })

        }
      }
    )

    /*const perro = this.perroService.perron;
    this.perroService.deletePerro(perro.id).subscribe({
      next: (resp: any) => {
        this.cerrarModal();
        alert('Mascota eliminada')
        console.log('Borrado');
        console.log(resp);
      },
      error: (err: any) => {
        console.log(err);
      }
    });*/

  }


}
