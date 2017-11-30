import { Component } from '@angular/core';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(
      private servicio: ServicioService
    ) {}
    getAlgo() {
      this.servicio
          .getAlgo()
          .subscribe(
            algo => { console.log(algo); }
          )
    }
}
