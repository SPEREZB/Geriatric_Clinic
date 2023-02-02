import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
  styleUrls: ['./registro.component.css']
  
})

export class RegistroComponent implements OnInit {
   formulariousuario: FormGroup;
   constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.formulariousuario = this.formulario.group({
       nombre: ['']
    }); }

  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.ingusuario(this.formulariousuario.value).subscribe(respuesta=>{
      alert(respuesta.message)
    });  
  }
}

