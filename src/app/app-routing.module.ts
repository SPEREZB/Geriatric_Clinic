 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { RegistroComponent } from './componentes/registro/registro.component'; 
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {path:"", redirectTo:"/inicio",pathMatch:"full"}, 
  {path:"registro",component:RegistroComponent},
  {path:"inicio",component:InicioComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }