import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuario.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    private apiUrl = 'http://localhost:3000/usuarios';

    usuarioLog = new BehaviorSubject<boolean>(false);
    logStatus = false;
    
    usuario = new UsuarioInterface();

    constructor (private http:HttpClient) {}

    getUsuarios(): Observable<Array<UsuarioInterface>>{
        return this.http.get<Array<UsuarioInterface>>(this.apiUrl)
        .pipe(map(response => response));
    }

    setLogStatus(status:boolean):void{
        this.logStatus = status;
        this.usuarioLog.next(status);
    }
    
    getLogStatus():Observable<boolean>{
        return this.usuarioLog.asObservable();
    }

    createUser(post:UsuarioInterface){
        return this.http.post(this.apiUrl, post);
    }

}