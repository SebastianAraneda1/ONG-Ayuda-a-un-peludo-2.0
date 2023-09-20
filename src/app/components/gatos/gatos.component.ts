import { Component, OnInit } from '@angular/core';
import { SGatoService } from 'src/app/services/s-gato.service';
import { Gato } from '../../interfaces/gato'

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.scss']
})
export class GatosComponent implements OnInit{
  gatos: Array<Gato> = new Array<Gato>();

  constructor(private gatoService: SGatoService) {}
  
  ngOnInit(): void {
    this.gatoService.getGatos().subscribe((gato)=> (this.gatos = gato));
  }
  
}
