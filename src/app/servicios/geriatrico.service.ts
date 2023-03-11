import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeriatricoService {
  api = "http://localhost:3000/"; 
  apirail = "https://geriatricback-end-production-9817.up.railway.app/";
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
    return this.clientehttp.post(this.apirail+"verificar",body);
  } 

  //Usuarios
  regUsuarios(body:any):Observable<any>{
    return this.clientehttp.post(this.apirail+"regUsuario",body);
  }
  
  //Doctores 
  getDoc():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getDoc");
  }
  getDocEspecifico():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getDocEspecifico");
  }

  //Citas
  regCitas(body:any):Observable<any>{ 
    return this.clientehttp.post(this.apirail+"regCitas",body);
  }

  getCitas():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getCitas");
  }

  //Diagnosticos
  regDiagnostico(body:any):Observable<any>{ 
    return this.clientehttp.post(this.apirail+"regDiagnostico",body);
  }
  getDiag():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getDiag");
  } 

  //medicamentos
  getMedi():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getMedi");
  }

  regMedi(body:any):Observable<any>{ 
    return this.clientehttp.post(this.apirail+"regMedi",body);
  }

  aggMedi(body:any):Observable<any>{ 
    return this.clientehttp.post(this.apirail+"aggMedi",body);
  }


  //Dietas
  getDietas():Observable<any>{ 
    return this.clientehttp.get(this.apirail+"getDietas");
  } 

  regDietas(body:any):Observable<any>{ 
    return this.clientehttp.post(this.apirail+"regDietas",body);
  }
} 