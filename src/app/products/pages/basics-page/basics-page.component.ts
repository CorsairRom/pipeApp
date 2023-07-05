import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string ='richard';
  public nameUpper: string ='RICHARD';
  public fullName: string ='RicHArd RoMeRo';

  public customDate: Date = new Date();
}
