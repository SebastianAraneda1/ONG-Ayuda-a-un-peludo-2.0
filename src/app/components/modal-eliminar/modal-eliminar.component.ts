import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
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
  ) {}

  cerrarModal(){
    this.modalService.hide();
  }

  borrar(): void {

  if(this.perroService.perron){
    let post = {
      id: this.perroService.perron.id,
      tipo: "Perro",
      nombre: this.perroService.perron.nombre,
      descripcion: this.perroService.perron.descripcion,
      genero: this.perroService.perron.genero,
      raza: this.perroService.perron.raza,
      urlImg: this.perroService.perron.urlImg
    };
    this.perroService.deletePerro(post.id).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    })
  }
  
  if(this.gatoService.gaton){
    let postGato = {
      id: this.gatoService.gaton.id,
      tipo: "Gato",
      nombre: this.gatoService.gaton.nombre,
      descripcion: this.gatoService.gaton.descripcion,
      genero: this.gatoService.gaton.genero,
      raza: this.gatoService.gaton.raza,
      urlImg: this.gatoService.gaton.urlImg
    };
    this.gatoService.deleteGato(postGato.id).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    })
  }
  alert('Mascota eliminada');
  this.cerrarModal();
  this.route.navigate(['/inicio']);
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
