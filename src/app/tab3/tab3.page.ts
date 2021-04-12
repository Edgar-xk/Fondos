import { Component } from '@angular/core';
import {TransaccionService} from '../Services/transaccion.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movimientos;
  saldoTotal:number;
  totalNoDisponible:number;
  constructor(public transaccion:TransaccionService) {
    this.movimientos=[];

  }
  ngOnInit(){
    this.totalNoDisponible=this.transaccion.totalNoDisponible();
    this.saldoTotal=this.transaccion.obtenerSaldo();
    this.movimientos=this.transaccion.obtenerMovimientos();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 2000);
  }




}
