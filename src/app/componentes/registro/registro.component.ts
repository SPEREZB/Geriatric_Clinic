import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeriatricoService } from 'src/app/servicios/geriatrico.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html', 
  styleUrls: ['./registro.component.css']
  
})

export class RegistroComponent implements OnInit {
  form: FormGroup;
   constructor(public formulario: FormBuilder,
    private ruteador: Router,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       nombreusuario: [''], clave: ['']
    }); }

  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.ingUsuario(this.form.value).subscribe(respuesta=>{ 

      if(respuesta.message=="INGRESO EXITOSO"){
        this.ruteador.navigateByUrl('/citas');
      }
      else
      {
        alert(respuesta.message)
      }
  
    });  
  }
}

