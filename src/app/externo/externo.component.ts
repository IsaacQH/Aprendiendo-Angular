import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeticionesServices } from "../services/peticiones.service";

@Component({
    selector: 'externo',
    imports: [CommonModule, FormsModule],
    standalone: true,
    templateUrl: './externo.component.html',
    providers: [PeticionesServices]
})

export class ExternoComponent implements OnInit{

    public user:any
    public userId:any
    public fecha:any

    constructor(
        private _peticionesService:PeticionesServices
    ){
        this.userId = 1       //Inicia el user ID para el input e imagen
    }

   ngOnInit(){

    this.fecha = new Date(2019,5,20)

    this.cargaUsuario()
   }

   cargaUsuario(){               //Método que se madna a llamar para cargar usuarios
    this.user = false
    this._peticionesService.getUser(this.userId).subscribe(         //Obtiene la información del objeto peticionesSerivios y llama al método getUser
        result => {
            this.user = result.data      //Guarda y accede al objeto del AJAX solicutado en peticionesService
        },
        error => {
            console.log(<any>error)
        }
       )
   }

}