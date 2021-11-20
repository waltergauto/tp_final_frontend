import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';

//Services
import { DataProductService } from './services/data-product.service';
import { AddSaleComponent } from './components/sales/add-sale/add-sale.component';
import { SaleComponent } from './components/sales/sale/sale.component';
import { SalesListComponent } from './components/sales/sales-list/sales-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductComponent,
    AddSaleComponent,
    SaleComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
