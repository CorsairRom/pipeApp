import { Component } from '@angular/core';

@Component({
  selector: 'app-un-common-pages',
  templateUrl: './un-common-pages.component.html',
  styleUrls: ['./un-common-pages.component.css']
})
export class UnCommonPagesComponent {

  // i18n Select
  public name:string = 'Richard';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }// este pipe necesita de un objeto literario o map para poder tomar la desicion

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }
}
