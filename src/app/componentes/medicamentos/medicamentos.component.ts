import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

  medi:any;
  constructor(public servicio: GeriatricoService) {}


  ngOnInit(): void {
    this.servicio.getMedi().subscribe(respuesta => { 
      this.medi = respuesta;
    });
  } 
}
