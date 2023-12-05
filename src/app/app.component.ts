import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
  selector: 'app-root',       //Donde quiero que se vea en el index.html el componente
  standalone: true,           //Lo hace en modo standalone que hace modulos temporales para la injección de componentes
  imports: [CommonModule, RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent],    
  templateUrl: './app.component.html',     //Que quiero que se vea en el componente
  styleUrls: ['./app.component.css']       //Como quiero que se vea el componente
})
export class AppComponent {
  public title = 'Master Angular';    //Exporta variable title para poder ser modificada directamente y añade al app.component.html
} 
