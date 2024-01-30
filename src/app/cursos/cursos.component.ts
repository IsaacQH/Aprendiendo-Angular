import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Librerias para leer parametros URL

@Component({
  selector: 'cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  public nombre:string = '';
  public followers:number = 0;

  constructor(private _route: ActivatedRoute, private _router: Router){}    //Activa la lectura de parámetros dados en URL

  ngOnInit() {
    this._route.params.subscribe((val:Params) =>{        //Lee el valor del parametro URL
      this.nombre = val['nombre']                        //Guarda el valor de URL 
      this.followers = Number(val['followers'])
      //console.log(this.nombre)
    })
      
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }

}
