import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../Services/transaccion.service';
import { TransaccionIN } from '../transaccion-in';

@Component({
  selector: 'app-tabla-movimientos',
  templateUrl: './tabla-movimientos.page.html',
  styleUrls: ['./tabla-movimientos.page.scss'],
})
export class TablaMovimientosPage implements OnInit {

  constructor(public transaccion:TransaccionService) {

  }

 data:TransaccionIN[];
 
 fecha:string;
 monto:number;
 concepto:string;
 fechaD:string;
 saldo:number;
 ngOnInit() {
   this.data=this.transaccion.obtenerMovimientos();
   
 }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 2000);
  }
  Detalles(item){
    localStorage.setItem("DetalleDeposito",JSON.stringify(item));
    window.location.href="/tabs/detalles-movimiento";
  }
}
