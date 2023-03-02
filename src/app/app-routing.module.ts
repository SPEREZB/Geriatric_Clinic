import { AtenderCitasComponent } from './componentes/atender-citas/atender-citas.component'; 
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

//componentes
import { RegistroComponent } from './componentes/registro/registro.component'; 
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistronewComponent } from './componentes/registronew/registronew.component';
import { AsignarCitasComponent } from './componentes/asignar-citas/asignar-citas.component';
import { CitasComponent } from './componentes/citas/citas.component'; 
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component';
import { sign } from 'crypto';

const routes: Routes = [

  {path:"registro",component:RegistroComponent},
  {path:"registronew",component:RegistronewComponent},
  {path:"inicio",component:InicioComponent},
  {path:"asignar-citas",component:AsignarCitasComponent},
  {path:"citas",component:CitasComponent},
  {path:"atender-citas",component:AtenderCitasComponent},
  {path:"acceder",component:SingInComponent},
  {path: "pre-registro",component:SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }