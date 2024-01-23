import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'zapatilla',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo:string = "Componente zapatillas"
    public zapatillas:Array<Zapatilla>      //Se crea como array

    constructor(){
        this.zapatillas = [
            new Zapatilla('Zapato', 'Adidas', 'rojo', 123, true ),  //Creamos un objeto de zapatilla con el constructor para darle valores a la clase 
            new Zapatilla('Tenis', 'Lacoste', 'verde', 983, false ),
            new Zapatilla('Zapatilla', 'Nike', 'azul', 234, true ) 
        ]
    }

    ngOnInit() {
        console.log(this.zapatillas)
    }

}