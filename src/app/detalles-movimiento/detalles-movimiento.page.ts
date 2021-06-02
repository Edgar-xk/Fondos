

import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../Services/transaccion.service';
import { TransaccionIN } from '../transaccion-in';

@Component({
  selector: 'app-detalles-movimiento',
  templateUrl: './detalles-movimiento.page.html',
  styleUrls: ['./detalles-movimiento.page.scss'],
})
export class DetallesMovimientoPage implements OnInit {

  constructor(public transaccion:TransaccionService) {

   }

  data1:TransaccionIN;
  data:[];
  fecha:string;
  monto:number;
  concepto:string;
  fechaD:string;
  saldo:number;
  ngOnInit() {
    this.data1=JSON.parse(localStorage.getItem("DetalleDeposito"));
   
    this.fecha=this.data1.fecha;
    this.data=this.data1.gastos;
    this.monto=this.data1.deposito;
    this.fechaD=this.data1.fecha;
    this.concepto=this.data1.concepto;
    this.saldo=this.data1.saldo;
  }
  cambiar(){
    window.location.href="/tabs/TablaMovimientos";
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
