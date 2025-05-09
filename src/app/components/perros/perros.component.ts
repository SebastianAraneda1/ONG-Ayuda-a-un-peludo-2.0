import { Component } from '@angular/core';
import { SPerroService } from 'src/app/services/s-perro.service';
import { Perro } from '../../interfaces/perro'
import { UsuarioService } from 'src/app/services/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalAgregarComponent } from '../modal-agregar/modal-agregar.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { ModalActualizarComponent } from '../modal-actualizar/modal-actualizar.component';
import { ModalAdoptarComponent } from '../modal-adoptar/modal-adoptar.component';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {

  perros: Array<Perro> = new Array<Perro>();
  botonesPerro:boolean = false;

  modalRef!: BsModalRef;

  constructor(
    private perroService: SPerroService, 
    private usuarioService:UsuarioService, 
    public modalService:BsModalService
    ) {}
  
  ngOnInit(): void {
    this.perroService.getPerros().subscribe((perro)=> {
      this.perros = perro;
      localStorage.setItem("perro", JSON.stringify(this.perros));
    });
    if(this.usuarioService.usuario.rol == 'user'){
      this.botonesPerro = true;
    }
    if(this.usuarioService.usuario.rol == 'admin'){
      this.botonesPerro = false;
    }
  }

  displayStyle = "none";
  
  abrirModal() {
   // this.displayStyle = "block";
   this.modalRef = this.modalService.show(ModalAgregarComponent);
  }

  abrirModalActualizar(perro: Perro){
    this.perroService.perron = perro;
    this.modalRef = this.modalService.show(ModalActualizarComponent);
  }

  abrirModalEliminar(perro: Perro){
    this.perroService.perron = perro;
    this.modalRef = this.modalService.show(ModalEliminarComponent);
  }

  abrirModalAdoptar(perro: Perro){
    this.perroService.perron = perro;
    this.modalRef = this.modalService.show(ModalAdoptarComponent);
  }

}
