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
