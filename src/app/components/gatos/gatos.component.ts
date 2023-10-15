import { Component, OnInit } from '@angular/core';
import { SGatoService } from 'src/app/services/s-gato.service';
import { Gato } from '../../interfaces/gato'
import { UsuarioService } from 'src/app/services/user.service';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { ModalActualizarComponent } from '../modal-actualizar/modal-actualizar.component';
import { ModalAdoptarComponent } from '../modal-adoptar/modal-adoptar.component';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent implements OnInit{

  gatos: Array<Gato> = new Array<Gato>();
  botonesGato:boolean = false;

  modalRef!: BsModalRef;

  constructor(
      private gatoService: SGatoService,
      private usuarioService:UsuarioService,
      public modalService:BsModalService
    ) {}
  
  ngOnInit(): void {
    this.gatoService.getGatos().subscribe((gato)=> (this.gatos = gato));
    console.log("Componente gato: ", this.usuarioService.usuario.rol)
    if(this.usuarioService.usuario.rol == 'user'){
      this.botonesGato = true;
    }
    if(this.usuarioService.usuario.rol == 'admin'){
      this.botonesGato = false;
    }
  }

  displayStyle = "none";
  
  abrirModal() {
   // this.displayStyle = "block";
   this.modalRef = this.modalService.show(ModalAgregarComponent);
  }

  abrirModalActualizar(gato: Gato){
    this.gatoService.gaton = gato
    this.modalRef = this.modalService.show(ModalActualizarComponent);
  }

  abrirModalEliminar(gato: Gato){
    this.gatoService.gaton = gato;
    this.modalRef = this.modalService.show(ModalEliminarComponent);
  }

  abrirModalAdoptar(gato: Gato){
    this.gatoService.gaton = gato;
    this.modalRef = this.modalService.show(ModalAdoptarComponent);
  }
  
}
