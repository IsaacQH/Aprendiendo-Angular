import { Component, OnInit } from "@angular/core";
import { ContactoUsuario } from "../models/contacto.usuario";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    imports: [FormsModule, CommonModule]
})


export class ContactoComponent implements OnInit{

    public usuario: ContactoUsuario

    constructor(){
        this.usuario = new ContactoUsuario('','','','')   //Le damos valores vacios para inicializar
    }

    ngOnInit() {
        
    }

    onSubmit(form:any){
        console.log("Evento submit activado!!")
        console.log(this.usuario)
        form.reset()
    }
}