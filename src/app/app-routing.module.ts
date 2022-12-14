import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//componentes
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:"", redirectTo:"/registro",pathMatch:"full"},
  {path:"registro",component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
