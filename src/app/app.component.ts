import { GeriatricoService } from './servicios/geriatrico.service';
import { Component } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Geriatric_Clinic'; 
  showTemplate= localStorage.getItem('showTemplate');


  constructor(private servicio: GeriatricoService, private router: Router,) {}
  get():any
  {
   this.showTemplate = this.servicio.getShowTemplate();
   localStorage.setItem('showTemplate', "true");
  }
  logout():any
  {
   this.servicio.setShowTemplate("false");  
   this.showTemplate = this.servicio.getShowTemplate();
   localStorage.setItem('showTemplate', "false");
   this.router.navigate(['/', 'acceder']);
   
  }
}
