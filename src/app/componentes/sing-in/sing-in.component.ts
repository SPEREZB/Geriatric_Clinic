import { GeriatricoService } from './../../servicios/geriatrico.service';
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AppComponent } from '../../app.component';  

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  form: FormGroup;
   constructor(public formulario: FormBuilder,
    private ruteador: Router,
    private appComponent: AppComponent,
    public servicio: GeriatricoService) {  this.form = this.formulario.group({
       nombreusuario: [''], clave: ['']
    }); }

  ngOnInit(): void {
  }
  enviardatos():any{
    this.servicio.ingUsuario(this.form.value).subscribe(respuesta=>{ 

      if(respuesta.message=="INGRESO EXITOSO"){
        this.servicio.setShowTemplate("true");  
        this.appComponent.get(); 
        this.ruteador.navigate(['/', 'inicio']); 
      }
      else
      {
        alert(respuesta.message)
      }
  
    });  
  }
}
