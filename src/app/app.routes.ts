//Importar modulos de router de angular

import { Routes, RouterModule } from '@angular/router';

//Importar conmponentes (carpetas.componente)

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { homeComponent } from './home/home.component';

//Array de rutas
export const routes: Routes = [
    {path: '', component: homeComponent},                       //Este carga la ruta vacia, la home
    {path: 'zapatillas', component: ZapatillasComponent},       //Este carga componente zapatilla
    {path: 'videojuego', component: VideojuegoComponent},       //Este carga componente videojuego
    {path: 'curso', component: CursosComponent},                //Este carga componente curso
    {path: '**' , component: homeComponent}                        //Ruta en caso de error
];
