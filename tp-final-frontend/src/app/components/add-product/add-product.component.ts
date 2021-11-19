import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  code!: number;
  name!: string;
  price!: number;
  existence!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log( this.code, this.name, this.price, this.existence );
  }

}
