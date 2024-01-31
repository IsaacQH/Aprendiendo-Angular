import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora',
    standalone: true
})

export class CalculadoraPipe implements PipeTransform{
    //Parámetros del transform ( dato | funcion: otroDato)
    //                           param1          param2
    transform(value: any, value_two:any) {
        let operaciones = `
        Suma: ${value + value_two} -
        Resta: ${value - value_two} -
        Multiplicación: ${value * value_two} -
        División: ${value / value_two}
        `;
        return operaciones
    }
}