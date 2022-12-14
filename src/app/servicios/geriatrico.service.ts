import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeriatricoService {
  api = "http://localhost:3000/";

  constructor(public usuariohttp: HttpClient){ }

  //clientes
  ingusuario(id:any):Observable<any>{ 
    return this.usuariohttp.post(this.api+"verificar",id);
  } 
} 