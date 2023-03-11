import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-agg-medi',
  templateUrl: './agg-medi.component.html',
  styleUrls: ['./agg-medi.component.css']
})
export class AggMediComponent implements OnInit {
 
  form: FormGroup;
  form2: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
      nombre: [''] ,laboratorio: [''] ,cantidad: [''] ,costo: [''] ,uso: [''] ,efectos_secundarios: [''] 
    });
    this.form2 = this.formulario.group({
      id_medicamento: [''] ,cant: [''] 
    });
  }


  ngOnInit(): void { 
  }
  aggdatos():any{
    this.servicio.regMedi(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    });  
  } 


  enviardatos():any{
    this.servicio.aggMedi(this.form2.value).subscribe(respuesta=>{
      alert(respuesta.message)
    });  
  } 

}
