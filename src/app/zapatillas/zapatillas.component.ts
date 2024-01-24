import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'zapatilla',
    imports: [CommonModule, FormsModule],
    standalone: true,
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo:string = "Componente zapatillas"
    public zapatillas:Array<Zapatilla>      //Se crea como array
    public marcas:String[]
    public color:string
    public mi_marca:string 

    constructor(){
        this.zapatillas = [
            new Zapatilla('Zapato', 'Adidas', 'rojo', 123, true ),  //Creamos un objeto de zapatilla con el constructor para darle valores a la clase 
            new Zapatilla('Tenis', 'Lacoste', 'verde', 983, false ),
            new Zapatilla('Zapatilla', 'Nike', 'azul', 234, true ),
            new Zapatilla('Zapato', 'Nike', 'negro', 675, false )
        ]
        this.marcas = new Array()
        this.color ='blue'
        this.mi_marca = 'Fila'
    }

    ngOnInit() {
        console.log(this.zapatillas)
        this.getMarcas()
    }


    getMarcas(){
        this.zapatillas.forEach((value, index) => {       //Entra a metodo getmarcas, llama zapatillas y crea bucle
            if(this.marcas.indexOf(value.marca) < 0){     //Revisa que sea falso y no se repita para añador
                this.marcas.push(value.marca)             //hace push en array de string public creado e iniciado en constructor
            }
            //console.log(index)                          //imprime index
        })
        console.log(this.marcas)                          //Imprime array
    }
    
    getMar(){
        alert(this.mi_marca)
    }

    addMar(){
        this.marcas.push(this.mi_marca)
    }

}