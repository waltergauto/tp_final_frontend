import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataProductService {

  products: Product[]; //array of products

  constructor() {
    this.products = [];
  }

  getProducts(): Product[] {
    
    if ( localStorage.getItem('products') === null ) {
      
      this.products = [];
    
    } else {

      this.products = JSON.parse(localStorage.getItem('products') || '{}' );

    }

    return this.products;
  
  }

  addProduct( product: Product ): void {

    let products; 

    this.products.push( product );

    if ( localStorage.getItem('products') === null ) { //if array has not products yet
      
      products = [];
      products.push( product );
      localStorage.setItem( 'products', JSON.stringify( products ) );
    
    } else { //if array already products

      products = JSON.parse( localStorage.getItem( 'products' ) || '{}');
      products.push( product );
      localStorage.setItem( 'products', JSON.stringify( products ) );

    }

  }

  removeProduct( product: Product ) {

      for ( let i = 0; i < this.products.length; i++ ) {

        if ( product == this.products[i] ) {
          
          this.products.splice(i, 1);
          localStorage.setItem( 'products', JSON.stringify( this.products ) );
          
        } 
      }

  }
}
