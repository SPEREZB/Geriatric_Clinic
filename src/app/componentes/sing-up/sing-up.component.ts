import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';  


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  form: FormGroup;
  constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       nombreusuario: [''],clave: [''],  tipousuario: [''] 
    }); }


  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.regUsuarios(this.form.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
    
  }
}
