import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perro } from '../interfaces/perro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SPerroService {
  private apiUrl = 'http://localhost:3000/perros';
  public perron: any;


  constructor(private http: HttpClient) {}

  getPerros(): Observable<Array<Perro>> {
    return this.http.get<Array<Perro>>(this.apiUrl).pipe(map(response => response));
  }

  createPerro(post:Perro){
    return this.http.post(this.apiUrl, post);
  }

  updatePerro(post:Perro){
    return this.http.put(`http://localhost:3000/perros/${post.id}`, post)
  }

  deletePerro(id:number): Observable<{}>{
    return this.http.delete<{}>(`http://localhost:3000/perros/${id}`);
  }

  // solicitarAdopcion(id: number, perros: Array<Perro>): Array<Perro>{
  //   const index = perros.findIndex((perro: Perro) => perro.id === id);
  //   perros[index].procesoAdopcion = true;
  //   return perros;
  // }
}
