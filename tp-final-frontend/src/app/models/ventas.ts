import { Client } from "./client";
import { Product } from "./product";

export interface Ventas {
    id: number;
    fecha: string;
    numeroFactura: number;
    cliente: Client;
    total: number;
    detalle: [
        {
            producto: string,
            cantidad: number,
            totalDetalle: number
        }
    ];
}