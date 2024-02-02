import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { homeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

import { Configuracion } from './models/configuracion';  //Importar modelo

@Component({                   //Decorador component
  selector: 'app-root',       //Donde quiero que se vea en el index.html el componente
  standalone: true,           //Lo hace en modo standalone que hace modulos temporales para la injección de componentes
  imports: [CommonModule, RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent, homeComponent, FormsModule, RouterModule, ExternoComponent, HttpClientModule, ContactoComponent],    
  templateUrl: './app.component.html',     //Que quiero que se vea en el componente
  styleUrls: ['./app.component.css']       //Como quiero que se vea el componente
})
export class AppComponent {
  public title: string;    //Exporta variable title para poder ser modificada directamente y añade al app.component.html
  public descripcion: string;
  public mostrar_videojuegos : boolean = true;
  public config;

  ocultarVideojuegos(val: boolean){
    this.mostrar_videojuegos = val
  }

  constructor(){
    this.config = Configuracion
    this.title = Configuracion.titulo
    this.descripcion = Configuracion.descripcion
  }

} 
