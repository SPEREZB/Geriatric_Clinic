import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

//componentes 
import { InicioComponent } from './componentes/inicio/inicio.component'; 
import { AsignarCitasComponent } from './componentes/asignar-citas/asignar-citas.component';
import { CitasComponent } from './componentes/citas/citas.component'; 
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component'; 
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';
import { AtenderCitasComponent } from './componentes/atender-citas/atender-citas.component'; 

const routes: Routes = [
  {path:"", redirectTo:"/acceder",pathMatch:"full"}, 
  {path:"inicio",component:InicioComponent},
  {path:"asignar-citas",component:AsignarCitasComponent},
  {path:"citas",component:CitasComponent},
  {path:"atender-citas",component:AtenderCitasComponent},
  {path:"acceder",component:SingInComponent},
  {path:"medicamentos",component:MedicamentosComponent},
  {path: "pre-registro",component:SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }