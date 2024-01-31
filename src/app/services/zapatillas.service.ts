
import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaService{

    public zapatillas:Array<Zapatilla>      //Se crea como array

    constructor(){
        this.zapatillas = [
            new Zapatilla('Zapato', 'Adidas', 'rojo', 123, true ),  //Creamos un objeto de zapatilla con el constructor para darle valores a la clase 
            new Zapatilla('Tenis', 'Lacoste', 'verde', 983, false ),
            new Zapatilla('Zapatilla', 'Nike', 'azul', 234, true ),
            new Zapatilla('Zapato', 'Nike', 'negro', 675, false )
        ]
    }
    
    getTexto(){
        return "Hola mundo desde servicio Zapatillas"
    }

    getZapillas(): Array<Zapatilla>{
        return this.zapatillas
    }

}