import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.css']
})
export class DiagnosticoComponent implements OnInit {
  form: FormGroup;
  diag:any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {
    this.form = this.formulario.group({
      diagnostico: [''],medi: [''], dieta: [''],
      costo: [''],nombre: ['']  
    });
   }

  ngOnInit(): void {
    this.servicio.getDiag().subscribe(respuesta => { 
      this.diag = respuesta;
    });
  }
 
}
