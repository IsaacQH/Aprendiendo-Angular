import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZapatillaService } from "../services/zapatillas.service";

@Component({
    selector: 'zapatilla',
    imports: [CommonModule, FormsModule],
    standalone: true,
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
    public titulo:string = "Componente zapatillas"
    public zapatillas:Array<Zapatilla>      //Se crea como array
    public marcas:String[]
    public color:string
    public mi_marca:string 

    constructor(
        private _zapatillaService: ZapatillaService  //Nombramos los servicios con guion y es tipo ZapatillaService
    ){
        this.zapatillas = []
        this.marcas = new Array()
        this.color ='blue'
        this.mi_marca = 'Fila'
    }

    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapillas()
        //alert(this._zapatillaService.getTexto())
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
    
    getMar(){                                             //Muestra el valor de mi marca en un alert
        alert(this.mi_marca)
    }

    addMar(){                                             //Añade mi_marca del input al array marcas
        this.marcas.push(this.mi_marca)
    }

    delMar(indice:number){                                //Elimina el valor del indice mostrado en marca
        this.marcas.splice(indice, 1)
    }

    onBlur(){                                             //Muestra cuando deseleccionas el input
        console.log("Has salido del input")
    }

    mostrarPalabra(){
        alert("Pulsaste enter")
    }
}