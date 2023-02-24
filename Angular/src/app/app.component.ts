import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coches';
  autenticado: boolean = false;
  hola: string | null = sessionStorage.getItem('auth');

  constructor() {
    if(sessionStorage.getItem('auth')){
      this.autenticado = true;
    }
  }
}
