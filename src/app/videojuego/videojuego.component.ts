import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";       //Trae el objeto component

@Component({
    selector: 'videojuego',           //Dice el nombre del compoente para llamarlo en otros archivos
    templateUrl: './videojuego.component.html',  //Template que se usará en el componente
    standalone: true
})

export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{          //Exportamos el compoente como VidejuegoComponent

 public titulo: string;                   //Defiiniendo propiedades
 public listado: string;
 
 constructor(){                           //Creando un sconstructor
    this.titulo = "Componente de Videojuegos";
    this.listado = "Lista de juegos: "
    //console.log("Componente videojuego cargado");
 }

 ngOnInit() {
     //console.log("OnInit ejecutado en Videojuego")
 }

 ngDoCheck(){
    //console.log("DoCheck ejecutado en Videojuego")
 }

 cambiarTitulo(){
    this.titulo = 'Nuevo titulo del comp'
 }

 ngOnDestroy() {
    //console.log("OnDestroy ejecutado en Videojuego")
 }

}