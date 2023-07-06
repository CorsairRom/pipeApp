import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  //i18nPlural
  public clients:string[] =['Maria', 'Pedro', 'Fernando', 'Armando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient():void {
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ',value))
  );

  public promiseValues: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
    }, 3500);
  })


}
