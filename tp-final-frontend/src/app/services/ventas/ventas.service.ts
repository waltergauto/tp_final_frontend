import { Injectable } from '@angular/core';
import { Ventas } from 'src/app/models/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventas: Ventas[]; //array of ventas

  constructor() {
    this.ventas = [];
  }

  getVentas(): Ventas[] {

    if (localStorage.getItem('ventas') === null) {

      this.ventas = [];

    } else {

      this.ventas = JSON.parse(localStorage.getItem('ventas') || '{}');

    }

    return this.ventas;

  }

  addVentas(venta: Ventas): void {

    let ventas;

    this.ventas.push(venta);

    if (localStorage.getItem('ventas') === null) { //if array has not products yet

      ventas = [];
      ventas.push(venta);
      localStorage.setItem('ventas', JSON.stringify(ventas));

    } else { //if array already ventas

      ventas = JSON.parse(localStorage.getItem('venta') || '{}');
      ventas.push(venta);
      localStorage.setItem('ventas', JSON.stringify(ventas));

    }

  }

  removeVentas(venta: Ventas) {

    for (let i = 0; i < this.ventas.length; i++) {

      if (venta == this.ventas[i]) {

        this.ventas.splice(i, 1);
        localStorage.setItem('ventas', JSON.stringify(this.ventas));

      }
    }

  }
}
