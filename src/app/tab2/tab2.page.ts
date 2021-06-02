import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {TransaccionService} from '../Services/transaccion.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  concepto:string;
  cantidad: number;
  abono: number;
  texto: String;
  gasto:number;
  banderaAbono:Boolean;
  banderaGasto:Boolean;
  descuento:Boolean;
  movimiento;
  constructor(public alertController:AlertController, public transaccion:TransaccionService) {
    this.abono=0;
    this.banderaAbono=false;
    this.banderaGasto=false;
  }

  ngOnInit(){
    this.abono=this.transaccion.obtenerMovimiento()!=void(0)?this.transaccion.obtenerMovimiento().saldo:0;
  }
  agregarPago() {
    let aDescontar:number=localStorage.getItem("aDescontar")!=null?parseInt(localStorage.getItem("aDescontar")):1000;
    if(this.banderaGasto){
      this.banderaGasto=false;
    }
    if(this.cantidad>0){

     

      this.abono = this.cantidad;
      this.texto = "Se agregarón $" + this.abono+(this.descuento?" y se descontaron $"+aDescontar:"");
      
      let concepto:string;
      if(this.concepto!=""){
        concepto=this.concepto
      }else{
        concepto="";
      }

      this.banderaAbono=true;
      this.transaccion.realizarAbono(this.abono,this.descuento,concepto);
    }else{
      this.abono=0;
      this.banderaAbono=false;
    } 

  }
  async registrarGasto(){
    if(this.banderaAbono){
      this.banderaAbono=false;
    }

    if(this.cantidad>0){
      this.gasto = this.cantidad;
      if(this.abono!=0 && this.gasto<this.abono){
        
        this.concepto==""||this.concepto==void(0)?this.concepto="Otros":"";
        console.log(this.concepto);
        this.texto = "Se quitaron $" + this.gasto + "en concepto de "+this.concepto;

        this.concepto==""?this.concepto="Otros":console.log(this.concepto);

        this.abono=this.abono-this.gasto;
        this.banderaGasto=true;


        this.transaccion.ActualizarMovimiento(this.gasto,this.concepto);



      }else{
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Imposible realizar operación',
          
          message: 'No cuenta con los fondos suficientes para realizar la operación',
          buttons: ['Cancel']
        });
        await alert.present();
    
      }
      

      
    }else{
      this.gasto=0;
      this.banderaGasto=false;
    }
  }
  cerrar(op:Number){
    if(op==1){
      this.banderaAbono=false;
    }else{
      this.banderaGasto=false;
    }
  }

  registrarAhorro(){
    if(this.cantidad>0){
      this.transaccion.registrarAhorroEspecial(this.cantidad);
    }
    
  }
}
