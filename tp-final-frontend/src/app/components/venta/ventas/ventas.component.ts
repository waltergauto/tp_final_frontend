import { Component, Input, OnInit } from '@angular/core';
import { Ventas } from 'src/app/models/ventas';
import { VentasService } from 'src/app/services/ventas/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  @Input('ventas')
  ventas!: Ventas;

  constructor( public dataVentasService: VentasService ) { }

  ngOnInit(): void {
  }

  removeVentas ( ventas: Ventas ) {

    const response = confirm('Are you sure to delete it?');
    
    if ( response ) {

      this.dataVentasService.removeVentas( ventas );
    }

  }

}
