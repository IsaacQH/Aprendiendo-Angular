import { Component } from "@angular/core";       //Trae el objeto component

@Component({
    selector: 'videojuego',           //Dice el nombre del compoente para llamarlo en otros archivos
    template: `
    <h2>Componente de videojuego</h2>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    `,  //Template que se usará en el componente
    standalone: true
})

export class VideojuegoComponent{          //Exportamos el compoente como VidejuegoComponent
 constructor(){
    console.log("Componente videojuego cargado");
 }
}