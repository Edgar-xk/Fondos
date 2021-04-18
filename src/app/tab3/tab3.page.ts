import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TransaccionService } from '../Services/transaccion.service';
import { TransaccionI } from '../transaccion-i';
import { TransaccionIN } from '../transaccion-in';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  movimientos;
  saldoTotal: number;
  totalNoDisponible: number;
  constructor(public transaccion: TransaccionService,public alertController: AlertController) {
    this.movimientos = [];

  }
  ngOnInit() {
    this.totalNoDisponible = this.transaccion.totalNoDisponible();
    this.saldoTotal = this.transaccion.obtenerSaldo();
    this.movimientos = this.transaccion.obtenerMovimientos();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      location.reload();
      event.target.complete();
    }, 2000);
  }

  async VerConcepto(transaccion: TransaccionI) {
    console.log(transaccion.concepto);
    const confirmacion = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Concepto',
      subHeader: "",
      message: transaccion.concepto=="" || transaccion.concepto==void(0)?"Salario":transaccion.concepto,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',

        }
      ]
    });

    await confirmacion.present();
  }



}
