import { DiagnosticoComponent } from './componentes/diagnostico/diagnostico.component';
import { AggMediComponent } from './componentes/agg-medi/agg-medi.component';
import { CrearDietasComponent } from './componentes/crear-dietas/crear-dietas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

//componentes 
import { InicioComponent } from './componentes/inicio/inicio.component'; 
import { AsignarCitasComponent } from './componentes/asignar-citas/asignar-citas.component';
import { CitasComponent } from './componentes/citas/citas.component'; 
import { SingInComponent } from './componentes/sing-in/sing-in.component';
import { SingUpComponent } from './componentes/sing-up/sing-up.component'; 
import { MedicamentosComponent } from './componentes/medicamentos/medicamentos.component';
import { DietasComponent } from './componentes/dietas/dietas.component';
import { AtenderCitasComponent } from './componentes/atender-citas/atender-citas.component'; 

const routes: Routes = [
  {path:"", redirectTo:"/acceder",pathMatch:"full"}, 
  {path:"inicio",component:InicioComponent},
  {path:"asignar-citas",component:AsignarCitasComponent},
  {path:"citas",component:CitasComponent},
  {path:"atender-citas",component:AtenderCitasComponent},
  {path:"diagnostico",component:DiagnosticoComponent},
  {path:"acceder",component:SingInComponent},
  {path:"medicamentos",component:MedicamentosComponent},
  {path:"agg-medi",component:AggMediComponent},
  {path: "dietas",component:DietasComponent}, 
  {path:"crear-dietas",component:CrearDietasComponent},
  {path: "pre-registro",component:SingUpComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }