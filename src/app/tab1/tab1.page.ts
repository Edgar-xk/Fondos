import { Component } from '@angular/core';
import {TransaccionService} from '../Services/transaccion.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  saldo:number;
  constructor(public transaccion:TransaccionService) {}

  ngOnInit(){
    this.saldo=this.transaccion.obtenerSaldo();
  }
  doRefresh(event) {
    

    setTimeout(() => {
      //console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 2000);
  }
}
