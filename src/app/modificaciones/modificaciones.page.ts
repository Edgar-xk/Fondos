import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ImportModalPage } from '../import-modal/import-modal.page';
import { TransaccionService } from '../Services/transaccion.service';
import { TransaccionI } from '../transaccion-i';



@Component({
  selector: 'app-modificaciones',
  templateUrl: './modificaciones.page.html',
  styleUrls: ['./modificaciones.page.scss'],
})
export class ModificacionesPage implements OnInit {
  aEliminar;
  aModificar:string;
  aDescontar:number;
  Movimiento: TransaccionI;
  constructor(public alertController: AlertController,
    public modalController: ModalController,
    public toastController: ToastController,
    public transaccion: TransaccionService) { }

  ngOnInit() {
    this.Movimiento = this.transaccion.obtenerMovimiento();
  }

  EditarAhorroEspecial(){
    document.getElementById("EditarAhorroEspecial").classList.toggle("ion-hide");
    
    
  }
  DescontarAhorro(){
    
    this.transaccion.DescontarAhorroEspecial(Number.parseInt(this.aModificar));
    document.getElementById("EditarAhorroEspecial").classList.toggle("ion-hide");
    this.aModificar="";
  }
  async deleteAll() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Precaución',

      message: '¿Seguro que desea eliminar todo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',

        },
        {
          text: 'Yes',
          handler: () => {
            localStorage.clear();
          }
        }
      ]
    });

    await alert.present();




  }

  async Importar() {
    const modal = await this.modalController.create({
      component: ImportModalPage,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null && dataReturned != "") {
        const confirmacion = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Precaución',
          subHeader: '¿Seguro que desea importar?',
          message: 'se eliminaran los datos existentes',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',

            },
            {
              text: 'Yes',
              handler: () => {
                //console.log(dataReturned.data);
                localStorage.setItem("abonos", JSON.stringify(dataReturned.data.data));
              }
            }
          ]
        });

        await confirmacion.present();
      }

    });
    return await modal.present();

  }

  async exportar() {

    if (localStorage.getItem("abonos") != null) {
      (<HTMLInputElement>document.getElementById("ExportarData")).appendChild(document.createTextNode(localStorage.getItem("abonos")));

      let input = (<HTMLInputElement>document.getElementById("ExportarData"));
      input.classList.remove("ion-hide");
      let btn = (<HTMLInputElement>document.getElementById("BtnOcultar"));
      btn.classList.remove("ion-hide");


      try {
        var successful = document.execCommand('copy');
        if (successful) {
          const toast = await this.toastController.create({
            message: 'Texto Copiado',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: 'Imposible Exportar',
            duration: 2000
          });
          toast.present();
        }
      } catch (err) {
        const toast = await this.toastController.create({
          message: 'No soporta el exportar',
          duration: 2000
        });
        toast.present();
      }
    }
  }
  Ocultar() {
    let input = (<HTMLInputElement>document.getElementById("ExportarData"));
    input.classList.add("ion-hide");
    let btn = (<HTMLInputElement>document.getElementById("BtnOcultar"));
    btn.classList.add("ion-hide");

  }

  EliminarMovimiento() {
    document.getElementById("EliminarMovimiento").classList.toggle("ion-hide");
    this.Movimiento = this.transaccion.obtenerMovimiento();

  }
  Eliminar() {
    console.log(this.aEliminar);

    if(this.Movimiento.gastos[this.aEliminar].concepto=="AhorroEspecial"){
      this.transaccion.DescontarAhorroEspecial(this.Movimiento.gastos[this.aEliminar].monto);
    }
    this.Movimiento.saldo = this.Movimiento.saldo + this.Movimiento.gastos[this.aEliminar].monto;
    this.Movimiento.gastos.splice(this.aEliminar, 1);

    this.transaccion.EliminarMovimiento(this.Movimiento);
    document.getElementById("EliminarMovimiento").classList.toggle("ion-hide");
  }

  async VerAhorroEspecial() {

    let AhorroEspecial:number=this.transaccion.VerAhorroEspecial();
    const confirmacion = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ahorro especial',
      subHeader: "",
      message: "$"+AhorroEspecial,
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
  EditarDescuento(){
    document.getElementById("EditarDescuento").classList.toggle("ion-hide");
  }
  GuardarDesucento(){
    
    localStorage.setItem("aDescontar",JSON.stringify(this.aDescontar));
    this.aDescontar=0;
  }

  EliminarUltimoDeposito(){
    
    this.Movimiento = this.transaccion.obtenerMovimiento();
  }
  Eliminar1() {
    this.Movimiento = this.transaccion.obtenerMovimiento();
    let movimientos=this.transaccion.obtenerMovimientos();

   /*  console.log(movimientos);
    console.log(movimientos.length);
    
    console.log( movimientos[movimientos.length - 1].deposito);
    console.log( movimientos[movimientos.length - 1].NoDisponible);
    console.log();
    //console.log(movimientos[movimientos.length - 1].saldo);
 */
    movimientos[movimientos.length - 2].saldo=movimientos[movimientos.length - 1].saldo-(movimientos[movimientos.length - 1].deposito- movimientos[movimientos.length - 1].NoDisponible);
    
    console.log( movimientos[movimientos.length - 2].saldo);
    
    movimientos.splice((movimientos.length-1),1);
    console.log(movimientos);
    this.transaccion.EliminarUltimoDeposito(movimientos);
    /*
    if(this.Movimiento.gastos[this.aEliminar].concepto=="AhorroEspecial"){
      this.transaccion.DescontarAhorroEspecial(this.Movimiento.gastos[this.aEliminar].monto);
    }
    this.Movimiento.saldo = this.Movimiento.saldo + this.Movimiento.gastos[this.aEliminar].monto;
    this.Movimiento.gastos.splice(this.aEliminar, 1);

    this.transaccion.EliminarMovimiento(this.Movimiento);*/
   // document.getElementById("EliminarMovimiento1").classList.toggle("ion-hide");
  }

}
