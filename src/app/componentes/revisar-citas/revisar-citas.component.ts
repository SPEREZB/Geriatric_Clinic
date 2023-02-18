import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-revisar-citas',
  templateUrl: './revisar-citas.component.html',
  styleUrls: ['./revisar-citas.component.css']
})
export class RevisarCitasComponent implements OnInit {
  form: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       diagnostico: [''],medicamentos: [''],  dietas: [''] 
    }); }


  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.regDiagnostico(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  }

}
