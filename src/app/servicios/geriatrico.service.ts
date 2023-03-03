import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeriatricoService {
  api = "http://localhost:3000/";
  private showTemplate = "false";
  
  constructor(public clientehttp: HttpClient){ }


  setShowTemplate(showTemplate: string) {
    this.showTemplate = showTemplate;
  }

  getShowTemplate() {
    return this.showTemplate;
  }


  //Verificar
  ingUsuario(body:any):Observable<any>{  
    return this.clientehttp.post(this.api+"verificar",body);
  } 

  //Usuarios
  regUsuarios(body:any):Observable<any>{
    return this.clientehttp.post(this.api+"regUsuario",body);
  }
  
  //Doctores 
  getDoc():Observable<any>{ 
    return this.clientehttp.get(this.api+"getDoc");
  }

  //Citas
  regCitas(body:any):Observable<any>{ 
    return this.clientehttp.post(this.api+"regCitas",body);
  }

  getCitas():Observable<any>{ 
    return this.clientehttp.get(this.api+"getCitas");
  }

  //Diagnosticos
  regDiagnostico(body:any):Observable<any>{ 
    return this.clientehttp.post(this.api+"regDiagnostico",body);
  }
   

  //medicamentos
  getMedi():Observable<any>{ 
    return this.clientehttp.get(this.api+"getMedi");
  }


} 