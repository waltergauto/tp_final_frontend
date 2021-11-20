import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product';

import { DataProductService } from 'src/app/services/data-product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  constructor( public dataProductService: DataProductService ) { }

  ngOnInit(): void {

    this.products = this.dataProductService.getProducts();

  }

  addProduct( product: Product ) {

    this.dataProductService.addProduct( product );
  
  }

}
