import { Component } from '@angular/core';

import { Hero, Color } from '../../interfaces/hero.interface';


@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent  {
  public isUpperCase: boolean = false;
  public orderbY : keyof Hero | undefined | '' = '';

  public heroes:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Literna Verde',
      canFly: true,
      color: Color.green
    },
  ]



  toggleUperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderbY = value;
  }

}
