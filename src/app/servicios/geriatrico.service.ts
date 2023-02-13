import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeriatricoService {
  api = "http://localhost:3000/";

  constructor(public clientehttp: HttpClient){ }

  //clientes
  ingusuario(id:any):Observable<any>{  
    return this.clientehttp.post(this.api+"verificar",id);
  } 

  //Pacientes
  regUsuarios(id:any):Observable<any>{
    return this.clientehttp.post(this.api+"regUsuario",id);
  }
} 