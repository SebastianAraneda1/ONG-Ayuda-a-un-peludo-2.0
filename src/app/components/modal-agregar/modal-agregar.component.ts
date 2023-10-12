import { Component} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.scss']
})
export class ModalAgregarComponent {



  constructor(public modalService:BsModalService) {}

  ngOnInit():void {}

  cerrarModal(){
    this.modalService.hide();
  }

}
