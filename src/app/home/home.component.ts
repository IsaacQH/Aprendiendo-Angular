import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class homeComponent  {

  public identificator:boolean

  constructor() {
    this.identificator = false
  }

  setIdentificator(){
    this.identificator = true
  }

  unsetIdentificator(){
    this.identificator = false
  }

}
