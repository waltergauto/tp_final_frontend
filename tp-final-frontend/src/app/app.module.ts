import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarProductComponent } from './components/products/navbar-product/navbar-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';

//Services
import { DataProductService } from './services/data-product.service';

import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarProductComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductComponent,
    AddClientComponent,
    ClientComponent,
    ClientListComponent
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
