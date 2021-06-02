import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { TransaccionI } from '../transaccion-i';
import { TransaccionIN } from '../transaccion-in';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor() { }


  realizarAbono(abono: number, descuento: Boolean,concepto:string) {
    let aDescontar:number=localStorage.getItem("aDescontar")!=null?parseInt(localStorage.getItem("aDescontar")):1000;
    console.clear();
    let fechaS = new Date();
    let fechaFormat: string = fechaS.getDate() + "/" + (fechaS.getMonth()+1) + "/" + fechaS.getFullYear();
    console.log(fechaS);
     console.log(fechaFormat);
 
    let abonos: TransaccionI[] = this.obtenerMovimientos()
    let saldoSuma;
    let saldoNuevo = descuento ? abono - aDescontar : abono;
    if (abonos.length != 0) {
      saldoSuma = abonos[abonos.length - 1].saldo;
      
      saldoSuma += saldoNuevo;
      abonos[abonos.length - 1].saldo=0;
      localStorage.setItem("abonos",JSON.stringify(abonos));
    }else{
      saldoSuma=saldoNuevo;
    }


    if(concepto==""||concepto==null){
      concepto="Salario";
    }

    let abonoNuevo: TransaccionIN = {
      concepto:concepto,
      año:fechaS.getFullYear(),
      mes:(fechaS.getMonth()+1),
      fecha: fechaFormat,
      deposito: abono,
      NoDisponible: descuento ? aDescontar : 0,
      gastos: [],
      saldo: saldoSuma
    }

    if (localStorage.getItem("abonos") == null) {
      localStorage.setItem("abonos", JSON.stringify([abonoNuevo]));
    } else {
      let movimientos = JSON.parse(localStorage.getItem("abonos"));
      movimientos.push(abonoNuevo);
      localStorage.setItem("abonos", JSON.stringify(movimientos));
    }

  }
  obtenerMovimiento() {
    if (localStorage.getItem("abonos") != null) {
      let transacciones: TransaccionI[] = JSON.parse(localStorage.getItem("abonos"));
      return transacciones[transacciones.length - 1];
    }

  }
  totalNoDisponible() {
    if (localStorage.getItem("abonos") != null) {
      let movimientos: TransaccionI[] = JSON.parse(localStorage.getItem("abonos"));
      let NoDisponible: number = 0;
      for (let movimiento of movimientos) {
        NoDisponible += movimiento.NoDisponible;
      }
      return NoDisponible;
    }
  }
  obtenerMovimientos() {
    if (localStorage.getItem("abonos") != null) {
      return JSON.parse(localStorage.getItem("abonos"));
    }
    else {
      return []
    }
  }
  ActualizarMovimiento(gasto: number, concepto: string) {
    let movimientos = this.obtenerMovimientos();
    console.log(movimientos);
    let movimientoUltimo: TransaccionI = movimientos[movimientos.length - 1];
    console.log(movimientoUltimo);
    let fechaS = new Date();
    let fechaFormat: string = fechaS.getDate() + "/" + (fechaS.getMonth()+1) + "/" + fechaS.getFullYear();
    movimientoUltimo.gastos.push({
      fecha:fechaFormat,
      concepto: concepto,
      monto: gasto
    });
    movimientoUltimo.saldo -= gasto;

    movimientos[movimientos.length - 1] = movimientoUltimo;
    localStorage.setItem("abonos", JSON.stringify(movimientos));
  }
  obtenerSaldo() {
    if (localStorage.getItem("abonos") != null) {
      let movimientos = JSON.parse(localStorage.getItem("abonos"));
      let saldoTotal: number = 0;
      for (let movimiento of movimientos) {
        saldoTotal += movimiento.saldo;
      }
      return saldoTotal;
    }
  }

  EliminarMovimiento(movimiento: TransaccionI) {
    if (localStorage.getItem("abonos") == null) {
      localStorage.setItem("abonos", JSON.stringify([movimiento]));
    } else {
      let movimientos = this.obtenerMovimientos();






      movimientos[movimientos.length - 1] = movimiento;
      localStorage.setItem("abonos", JSON.stringify(movimientos));
    }
  }

  registrarAhorroEspecial(cantidad:number){

    if(localStorage.getItem("AhorroEspecial")!=null){
      let AhorroEspecial:number=parseInt(localStorage.getItem("AhorroEspecial"));
      AhorroEspecial+=cantidad;
      localStorage.setItem("AhorroEspecial",JSON.stringify(AhorroEspecial));
            
      
    }else{
      let AhorroEspecial:number=cantidad;
      localStorage.setItem("AhorroEspecial",JSON.stringify(AhorroEspecial));
    }
    this.ActualizarMovimiento(cantidad,"AhorroEspecial");
  }

  VerAhorroEspecial(){
    if(localStorage.getItem("AhorroEspecial")!=null){
      return parseInt(localStorage.getItem("AhorroEspecial"));
    }else{
      return 0;
    }
  }
  DescontarAhorroEspecial(cantidad:number){
    if(localStorage.getItem("AhorroEspecial")!=null){
      let AhorroEspecial:number=parseInt(localStorage.getItem("AhorroEspecial"));
      AhorroEspecial-=cantidad;
      localStorage.setItem("AhorroEspecial",JSON.stringify(AhorroEspecial));
            
      
    }
  }

}
