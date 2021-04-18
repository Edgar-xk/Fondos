export interface TransaccionI {
    concepto: string,
    fecha: Date,
    deposito: number,
    NoDisponible: number,
    gastos: [{
        concepto: string,
        monto: number
    }],
    saldo: number
}
