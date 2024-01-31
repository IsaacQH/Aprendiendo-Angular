import { Injectable } from "@angular/core";                               //Importamos el inyectable de componentes
import { HttpClient, HttpHeaders } from "@angular/common/http";     //Importamos libreia http
import { Observable } from "rxjs";


@Injectable()
export class PeticionesServices{

    public url:string

    constructor(
        public _http: HttpClient          //Declaramos un url con protcolos http como clase
        ){
        this.url = "https://reqres.in/"        //Link de backend simulado
    }


    getUser(userId:any): Observable<any>{
        return this._http.get(this.url + "api/users/" + userId)
    }

}