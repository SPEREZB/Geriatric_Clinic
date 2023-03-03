import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  

@Component({
  selector: 'app-asignar-citas',
  templateUrl: './asignar-citas.component.html',
  styleUrls: ['./asignar-citas.component.css']
})
export class AsignarCitasComponent implements OnInit {
   doc:any;
  form: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       fecha: [''] ,motivo: [''],doc: ['']
    }); }


  ngOnInit(): void {
    this.servicio.getDoc().subscribe(respuesta => { 
      this.doc = respuesta;
    });
  }
  enviardatos():any{
    this.servicio.regCitas(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  }

}
