import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SGatoService } from 'src/app/services/s-gato.service';
import { SPerroService } from 'src/app/services/s-perro.service';

@Component({
  selector: 'app-modal-adoptar',
  templateUrl: './modal-adoptar.component.html',
  styleUrls: ['./modal-adoptar.component.scss']
})
export class ModalAdoptarComponent {

    nombre:string = "";
    telefono:string = "";
    rut:string = "";

    acuerdo:boolean = false;

  showNombreError:boolean = false;
  showTelefonoError:boolean = false;
  showRutError:boolean = false;

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

  adoptarMascota():void {
    const regexTel = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
    const regexRut = /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/;

    let nombreOk = false;
    let telefonoOk = false;
    let rutOk = false;

    if(this.nombre.length > 2){
      nombreOk = true;
      this.showNombreError = false;
    }else{
      nombreOk = false;
      this.showNombreError = true;
    }

    if(regexTel.test(this.telefono)){
      telefonoOk = true;
      this.showTelefonoError = false;
    }else{
      telefonoOk = false;
      this.showTelefonoError = true;
    }

    if(regexRut.test(this.rut)){
      rutOk = true;
      this.showRutError = false;
    }else{
      rutOk = false;
      this.showRutError = true;
    }

    if(nombreOk && telefonoOk && rutOk){

      const perro = this.perroService.perron;
      this.perroService.deletePerro(perro.id).subscribe({
        next: (resp: any) => {
          this.cerrarModal();
          alert('Mascota adoptada, tienes un plazo de 5 días para recogerla :)')
          console.log(resp);
          this.route.navigate(['/inicio'])
        },
        error: (err: any) => {
          console.log(err);
        }
      });
      
      
      const gato = this.gatoService.gaton;
      this.gatoService.deleteGato(gato.id).subscribe({
        next: (resp: any) => {
          this.cerrarModal();
          alert('Mascota adoptada, tienes un plazo de 5 días para recogerla :)')
          console.log(resp);
          this.route.navigate(['/inicio'])
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }

  }

}
