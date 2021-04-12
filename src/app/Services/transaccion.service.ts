import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { TransaccionI } from '../transaccion-i';
import { TransaccionIN } from '../transaccion-in';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor() { }


  realizarAbono(abono: number, descuento: Boolean) {
    console.clear();
    let fechaS = new Date();
    let fechaFormat: string = fechaS.getDay() + "/" + fechaS.getMonth() + "/" + fechaS.getFullYear();
    // console.log(fechaFormat);

    let abonos: TransaccionI[] = this.obtenerMovimientos()
    let saldoSuma;
    let saldoNuevo = descuento ? abono - 1000 : abono;
    if (abonos.length != 0) {
      saldoSuma = abonos[abonos.length - 1].saldo;
      
      saldoSuma += saldoNuevo;
      abonos[abonos.length - 1].saldo=0;
      localStorage.setItem("abonos",JSON.stringify(abonos));
    }else{
      saldoSuma=saldoNuevo;
    }



    let abonoNuevo: TransaccionIN = {
      fecha: fechaFormat,
      deposito: abono,
      NoDisponible: descuento ? 1000 : 0,
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
    movimientoUltimo.gastos.push({
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


}
