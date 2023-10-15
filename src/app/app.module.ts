import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PerrosComponent } from './components/perros/perros.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { FormAdopcionComponent } from './components/form-adopcion/form-adopcion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { ModalAgregarComponent } from './components/modal-agregar/modal-agregar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';
import { AuthGuardService } from './guard/auth-guard';
import { ModalActualizarComponent } from './components/modal-actualizar/modal-actualizar.component';
import { OlvideContrasenaComponent } from './components/olvide-contrasena/olvide-contrasena.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'olvidar', component: OlvideContrasenaComponent},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuardService] },
  {path: 'perros', component: PerrosComponent, canActivate: [AuthGuardService] },
  {path: 'gatos', component: GatosComponent, canActivate: [AuthGuardService] },
  {path: 'modal', component: FormAdopcionComponent, canActivate: [AuthGuardService] },
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    CarouselComponent,
    PerrosComponent,
    GatosComponent,
    FormAdopcionComponent,
    LoginComponent,
    RegistroComponent,
    ModalAgregarComponent,
    ModalEliminarComponent,
    ModalActualizarComponent,
    OlvideContrasenaComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
