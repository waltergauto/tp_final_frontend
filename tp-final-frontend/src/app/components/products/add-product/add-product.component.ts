import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  code!: number;
  name!: string;
  price!: number;
  quantity!: number;

  @Output()
  productAdded = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {}

  addProduct() {
    this.productAdded.emit({
      code: this.code,
      name: this.name,
      price: this.price,
      quantity: this.quantity,

    });
    this.code = 0;
    this.name = '';
    this.price = 0;
    this.quantity = 0;

  }

}
