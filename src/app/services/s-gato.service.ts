import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gato } from '../interfaces/gato';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class SGatoService {
  private apiUrl = 'http://localhost:3000/gatos'
  public gaton:any;

  constructor(private http: HttpClient) { }
  
  getGatos(): Observable<Array<Gato>> {
    return this.http.get<Array<Gato>>(this.apiUrl).pipe(map(response => response));
  }

  createGato(post:Gato){
    return this.http.post(this.apiUrl, post);
  }

   deleteGato(id:number): Observable<{}>{
    return this.http.delete<{}>(`http://localhost:3000/gatos/${id}`);
  }

}
