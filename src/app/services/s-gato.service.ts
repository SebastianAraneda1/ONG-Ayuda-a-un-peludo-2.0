import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gato } from '../gato';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class SGatoService {
  private apiUrl = 'http://localhost:3000/gatos'

  constructor(private http: HttpClient) { }
  
  getGatos(): Observable<Array<Gato>> {
    return this.http.get<Array<Gato>>(this.apiUrl).pipe(map(response => response));
  }
}
