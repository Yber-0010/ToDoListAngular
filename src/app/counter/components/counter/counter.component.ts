import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    
    <p>
      contador {{ contador }}
    </p>
    <button (click)="increseBy(+1)">+1</button>
    <button (click)="reset()">rest</button>
    <button (click)="increseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  
  public contador:number = 10;
  increseBy(value:number):void{
    this.contador += value
  }
  reset():void{
    this.contador = 10;
  }

}
