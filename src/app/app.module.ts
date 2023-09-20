import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PerrosComponent } from './components/perros/perros.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { FormAdopcionComponent } from './components/form-adopcion/form-adopcion.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'perros', component: PerrosComponent},
  {path: 'gatos', component: GatosComponent},
  {path: 'modal', component: FormAdopcionComponent},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InicioComponent,
    CarouselComponent,
    PerrosComponent,
    GatosComponent,
    FormAdopcionComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
