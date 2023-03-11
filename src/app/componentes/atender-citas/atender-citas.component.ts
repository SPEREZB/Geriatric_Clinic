import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  

@Component({
  selector: 'app-atender-citas',
  templateUrl: './atender-citas.component.html',
  styleUrls: ['./atender-citas.component.css']
})
export class AtenderCitasComponent implements OnInit {
  medi:any;
  diag:any;
  doc:any;
  form: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       diagnostico: [''],medi: [''],  dieta: [''],costo: [''],doctor: ['']
    }); }


  ngOnInit(): void {
    this.servicio.getMedi().subscribe(respuesta => { 
      this.medi = respuesta;
    });
    this.servicio.getDietas().subscribe(respuesta => { 
      this.diag = respuesta;
    });
    this.servicio.getDocEspecifico().subscribe(respuesta => { 
      this.doc = respuesta;
    });
  }
  enviardatos():any{
    this.servicio.regDiagnostico(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  } 

}
