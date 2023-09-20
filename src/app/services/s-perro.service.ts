import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perro } from '../interfaces/perro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SPerroService {
  private apiUrl = 'http://localhost:3000/perros'

  constructor(private http: HttpClient) { }

  getPerros(): Observable<Array<Perro>> {
    return this.http.get<Array<Perro>>(this.apiUrl).pipe(map(response => response));
  }
}
