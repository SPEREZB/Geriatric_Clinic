import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  
@Component({
  selector: 'app-crear-dietas',
  templateUrl: './crear-dietas.component.html',
  styleUrls: ['./crear-dietas.component.css']
})
export class CrearDietasComponent implements OnInit {

  form: FormGroup;
  form2: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
      nombre: [''] ,lunes: [''] ,martes: [''] ,miercoles: [''] ,jueves: [''] ,viernes: [''],
      sabado: [''] ,domingo: [''] ,costo: ['']
    });
    this.form2 = this.formulario.group({
      id_medicamento: [''] ,cant: [''] 
    });
  }


  ngOnInit(): void { 
  }
  aggdatos():any{
    this.servicio.regDietas(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    });  
  } 
 
 
}
