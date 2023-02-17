 
 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//componentes
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component'; 
import { AsignarCitasComponent } from './componentes/asignar-citas/asignar-citas.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { RegistronewComponent } from './componentes/registronew/registronew.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';
 
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    AsignarCitasComponent,
    MenusComponent,
    RegistronewComponent,
    CitasComponent,
    HorariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
