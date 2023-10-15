import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SGatoService } from 'src/app/services/s-gato.service';
import { SPerroService } from 'src/app/services/s-perro.service';

@Component({
    selector: 'app-modal-actualizar',
    templateUrl: './modal-actualizar.component.html',
    styleUrls: ['./modal-actualizar.component.scss']
})
export class ModalActualizarComponent {

    formActualizarMascota = {
        nombre: "",
        tipoP: "Perro",
        tipoG: "Gato",
        descripcion: "",
        genero: "",
        raza: "",
        url: ""
    }

    showNombreError:boolean = false;
    showDescripcionError:boolean = false;
    showGeneroError:boolean = false;
    showRazaError:boolean = false;
    showUrlErorr:boolean = false;

    constructor(
        public modalService:BsModalService, 
        private perroService:SPerroService,
        private route:Router,
        private gatoService:SGatoService
    ){}

    ngOnInit():void {}

    cerrarModal(){
        this.modalService.hide();
    }

    actualizar(){
        const regex = /(https?:\/\/.*\.(?:png|jpg|gif|svg))/i;

        let nombreOk = false;
        let descripcionOk = false;
        let generoOk = false;
        let razaOk = false;
        let urlOk = false;

        if(this.formActualizarMascota.nombre.length > 1){
            nombreOk = true;
            this.showNombreError = false;
        }else{
            this.showNombreError = true;
            nombreOk = false;
        }

        if(this.formActualizarMascota.descripcion.length > 10){
            descripcionOk = true;
            this.showDescripcionError = false;
        }else{
            descripcionOk = false;
            this.showDescripcionError = true;
        }

        if(this.formActualizarMascota.genero == "Macho" || this.formActualizarMascota.genero == "Hembra"){
            generoOk = true;
            this.showGeneroError = false;
        }else{
            generoOk = false;
            this.showGeneroError = true;
        }

        if(this.formActualizarMascota.raza.length > 2){
            razaOk = true;
            this.showRazaError = false;
        }else{
            razaOk = false;
            this.showRazaError = true;
        }

        if(regex.test(this.formActualizarMascota.url)){
            urlOk = true;
            this.showUrlErorr = false;
        }else{
            urlOk = false;
            this.showUrlErorr = true;
        }

        if(nombreOk && descripcionOk && generoOk && razaOk && urlOk){
            if(this.formActualizarMascota.tipoP == "Perro"){
                this.actualizarPerro();
                this.cerrarModal();
                alert('Mascota actualizada!');
                this.route.navigate(['/inicio']);
            }
            if(this.formActualizarMascota.tipoG == "Gato"){
                this.actualizarGato();
                this.cerrarModal();
                alert('Mascota actualizada!');
                this.route.navigate(['/inicio']);
            }
        }

    }

    actualizarPerro(){
        
        let post = {
            id: this.perroService.perron.id,
            tipo: "Perro",
            nombre: this.formActualizarMascota.nombre,
            descripcion: this.formActualizarMascota.descripcion,
            genero: this.formActualizarMascota.genero,
            raza: this.formActualizarMascota.raza,
            urlImg: this.formActualizarMascota.url
        };
        this.perroService.updatePerro(post).subscribe({
            next: (response) => {console.log(response)},
            error: (error) => {console.log(error)}
        })
    
    }

    actualizarGato(){

        let post = {
            id: this.gatoService.gaton.id,
            tipo: "Gato",
            nombre: this.formActualizarMascota.nombre,
            descripcion: this.formActualizarMascota.descripcion,
            genero: this.formActualizarMascota.genero,
            raza: this.formActualizarMascota.raza,
            urlImg: this.formActualizarMascota.url
        };
        this.gatoService.updateGato(post).subscribe({
            next: (response) => {console.log(response)},
            error: (error) => {console.log(error)}
        })
    
    }

}
