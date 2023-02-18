import { AtenderCitasComponent } from './componentes/atender-citas/atender-citas.component';
import { RevisarCitasComponent } from './componentes/revisar-citas/revisar-citas.component';
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

//componentes
import { RegistroComponent } from './componentes/registro/registro.component'; 
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistronewComponent } from './componentes/registronew/registronew.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { AsignarCitasComponent } from './componentes/asignar-citas/asignar-citas.component';
import { CitasComponent } from './componentes/citas/citas.component'; 

const routes: Routes = [
  {path:"", redirectTo:"/registronew",pathMatch:"full"}, 
  {path:"registro",component:RegistroComponent},
  {path:"registronew",component:RegistronewComponent},
  {path:"inicio",component:InicioComponent},
  {path:"asignar-citas",component:AsignarCitasComponent},
  {path:"citas",component:CitasComponent},
  {path:"atender-citas",component:AtenderCitasComponent},
  {path:"menus",component:MenusComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }