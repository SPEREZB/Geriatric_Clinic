import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-registronew',
  templateUrl: './registronew.component.html',
  styleUrls: ['./registronew.component.css']
})
export class RegistronewComponent implements OnInit {

  formulariocedula: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.formulariocedula = this.formulario.group({
       nombreusuario: [''],clave: [''],  tipousuario: [''] 
    }); }


  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.regUsuarios(this.formulariocedula.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  }
}
