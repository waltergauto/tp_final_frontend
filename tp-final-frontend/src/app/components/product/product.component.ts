import { Component, OnInit, Input } from '@angular/core';

import { Product } from 'src/app/models/product';

import { DataProductService } from 'src/app/services/data-product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input('product')
  product!: Product;

  constructor( public dataProductService: DataProductService ) { }

  ngOnInit(): void {
  }

  removeProduct ( product: Product ) {

    const response = confirm('Are you sure to delete it?');
    
    if ( response ) {

      this.dataProductService.removeProduct( product );
    }

  }

}
