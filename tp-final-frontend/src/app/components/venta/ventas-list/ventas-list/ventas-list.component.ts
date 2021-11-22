import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/models/ventas';
import { VentasService } from 'src/app/services/ventas/ventas.service';

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  ventas!: Ventas[];

  constructor(public dataVentasService: VentasService) { }

  ngOnInit(): void {

    this.ventas = this.dataVentasService.getVentas();

  }

  addProduct(ventas: Ventas) {

    this.dataVentasService.addVentas(ventas);

  }


}
