import { Component } from '@angular/core';
import { SPerroService } from 'src/app/services/s-perro.service';
import { Perro } from '../../interfaces/perro'

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {
  perros: Array<Perro> = new Array<Perro>();

  constructor(private perroService: SPerroService) {}
  
  ngOnInit(): void {
    this.perroService.getPerros().subscribe((perro)=> (this.perros = perro));
  }

}
