import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../Services/transaccion.service';
import { TransaccionIN } from '../transaccion-in';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public transaccion:TransaccionService) {

   }

  data1:TransaccionIN[];
  data:[];
  fecha:string;
  monto:number;
  concepto:string;
  fechaD:string;
  saldo:number;
  ngOnInit() {
    this.data1=this.transaccion.obtenerMovimientos();
    let inf=this.data1[this.data1.length-1];
    this.fecha=this.data1[this.data1.length-1].fecha;
    this.data=inf.gastos;
    this.monto=inf.deposito;
    this.fechaD=inf.fecha;
    this.concepto=inf.concepto;
    this.saldo=inf.saldo;
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
