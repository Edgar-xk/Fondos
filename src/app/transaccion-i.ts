export interface TransaccionI {
    concepto: string,
    fecha: Date,
    deposito: number,
    NoDisponible: number,
    gastos: [{
        fecha:string,
        concepto: string,
        monto: number
    }],
    saldo: number
}
