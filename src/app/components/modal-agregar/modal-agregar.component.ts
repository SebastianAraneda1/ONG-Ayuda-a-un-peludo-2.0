import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SGatoService } from 'src/app/services/s-gato.service';
import { SPerroService } from 'src/app/services/s-perro.service';
@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.scss']
})
export class ModalAgregarComponent {

  formAgregarMascota = {
    nombre: "",
    tipo: "",
    descripcion: "",
    genero: "",
    raza: "",
    url: ""
  }

  showNombreError:boolean = false;
  showTipoError:boolean = false;
  showDescripcionError:boolean = false;
  showGeneroError:boolean = false;
  showRazaError:boolean = false;
  showUrlErorr:boolean = false;

  constructor(
    public modalService:BsModalService, 
    private perroService:SPerroService,
    private route:Router,
    private gatoService:SGatoService
    ) {}

  ngOnInit():void {}

  cerrarModal(){
    this.modalService.hide();
  }

  guardarMascota(){

    const regex = /(https?:\/\/.*\.(?:png|jpg|gif|svg))/i;

    let nombreOk = false;
    let tipoOk = false;
    let descripcionOk = false;
    let generoOk = false;
    let razaOk = false;
    let urlOk = false;

    if(this.formAgregarMascota.nombre.length > 1){
      nombreOk = true;
      this.showNombreError = false;
    }else{
      this.showNombreError = true;
      nombreOk = false;
    }

    if(this.formAgregarMascota.tipo == 'Perro' || this.formAgregarMascota.tipo == 'Gato'){
      tipoOk = true;
      this.showTipoError = false;
    }else{
      tipoOk = false;
      this.showTipoError = true;
    }

    if(this.formAgregarMascota.descripcion.length > 10){
      descripcionOk = true;
      this.showDescripcionError = false;
    }else{
      descripcionOk = false;
      this.showDescripcionError = true;
    }

    if(this.formAgregarMascota.genero == "Macho" || this.formAgregarMascota.genero == "Hembra"){
      generoOk = true;
      this.showGeneroError = false;
    }else{
      generoOk = false;
      this.showGeneroError = true;
    }

    if(this.formAgregarMascota.raza.length > 2){
      razaOk = true;
      this.showRazaError = false;
    }else{
      razaOk = false;
      this.showRazaError = true;
    }

    if(regex.test(this.formAgregarMascota.url)){
      urlOk = true;
      this.showUrlErorr = false;
    }else{
      urlOk = false;
      this.showUrlErorr = true;
    }

    if(nombreOk && tipoOk && descripcionOk && generoOk && razaOk && urlOk){

      if(this.formAgregarMascota.tipo == "Perro"){
        this.crearPerro();
        this.cerrarModal();
        this.route.navigate(['/inicio']);
      }

      if(this.formAgregarMascota.tipo == "Gato"){
        this.crearGato();
        this.cerrarModal();
        this.route.navigate(['/inicio']);
      }

    }else{
      alert('No se pudo guardar la mascota')
    }


  }

  crearPerro(){
    let post = {
      tipo: "perro",
      nombre: this.formAgregarMascota.nombre,
      descripcion: this.formAgregarMascota.descripcion,
      genero: this.formAgregarMascota.genero,
      raza: this.formAgregarMascota.raza,
      urlImg: this.formAgregarMascota.url,
      procesoAdopcion: false,
      adoptado: false
    };
    this.perroService.createPerro(post).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    });
  }

  crearGato(){
    let post = {
      tipo: "gato",
      nombre: this.formAgregarMascota.nombre,
      descripcion: this.formAgregarMascota.descripcion,
      genero: this.formAgregarMascota.genero,
      raza: this.formAgregarMascota.raza,
      urlImg: this.formAgregarMascota.url,
      procesoAdopcion: false,
      adoptado: false
    };
    this.gatoService.createGato(post).subscribe({
      next: (response) => {console.log(response)},
      error: (error) => {console.log(error)}
    });
  }

}
