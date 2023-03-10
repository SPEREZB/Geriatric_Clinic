import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.css']
})
export class DietasComponent implements OnInit {

  formulariocedula: FormGroup;
  dietas:any;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.formulariocedula = this.formulario.group({
       nombre: [''],lunes: [''],martes: [''],miercoles: [''],
       jueves: [''],viernes: [''],sabado: [''],domingo: ['']
    }); }


  ngOnInit(): void {
    this.servicio.getDietas().subscribe(respuesta => { 
      this.dietas = respuesta;
    });
  } 

}
