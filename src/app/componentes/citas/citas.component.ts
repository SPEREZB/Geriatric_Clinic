import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  formulariocedula: FormGroup;
  citas:any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.formulariocedula = this.formulario.group({
       nombreusuario: [''],clave: [''],  tipousuario: [''] 
    }); }


  ngOnInit(): void {
    this.servicio.getCitas().subscribe(respuesta => { 
      this.citas = respuesta;
    });
  } 

}
