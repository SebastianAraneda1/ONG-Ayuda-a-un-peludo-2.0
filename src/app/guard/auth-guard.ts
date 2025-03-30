import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UsuarioService } from "../services/user.service";

@Injectable({
    providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        public router: Router,
        private userService: UsuarioService
    ){}

    canActivate(): boolean {

        let logeado = localStorage.getItem("logeo");
        // if (!this.userService.logStatus) {
        //     this.router.navigate(['login']);
        //     return false;
        // }
        return logeado === "true";
    }
}