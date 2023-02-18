import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeriatricoService {
  api = "http://localhost:3000/";
  
  constructor(public clientehttp: HttpClient){ }

  //Verificar
  ingUsuario(id:any):Observable<any>{  
    return this.clientehttp.post(this.api+"verificar",id);
  } 

  //Usuarios
  regUsuarios(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"regUsuario",id);
  }


  //Citas
  getCitas():Observable<any>{
    console.log("holaa");
    return this.clientehttp.get(this.api+"getCitas");
  }

  //Diagnosticos
  regDiagnostico(id:any):Observable<any>{ 
    return this.clientehttp.post(this.api+"regDiagnostico",id);
  }
   
} 