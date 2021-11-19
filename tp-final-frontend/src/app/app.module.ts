import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';

//Services
import { DataProductService } from './services/data-product.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductComponent
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
