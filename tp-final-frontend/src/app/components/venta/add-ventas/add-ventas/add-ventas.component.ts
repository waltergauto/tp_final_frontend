import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Ventas } from 'src/app/models/ventas';

@Component({
  selector: 'app-add-ventas',
  templateUrl: './add-ventas.component.html',
  styleUrls: ['./add-ventas.component.css']
})
export class AddVentasComponent implements OnInit {
  id !: number;
  fecha !: string;
  numeroFactura !: number;
  cliente !: Client;
  total!: number;
  detalle!: []


  @Output()
  ventasAdded = new EventEmitter<Ventas>();

  constructor() { }

  ngOnInit() { }

  /*
  addProduct() {
    this.ventasAdded.emit({
      id: this.id,
      fecha: this.fecha,
      numeroFactura: this.numeroFactura,
      cliente: this.cliente,
      total: this.total,
      detalle: this.detalle,

    }); 

    this.id = 0;
    this.fecha = '12-12-2021';
    this.numeroFactura = 0;
    this.total= 4000;
    this.cliente = this.cliente;
    this.detalle = this.detalle;
  }
 */

}
