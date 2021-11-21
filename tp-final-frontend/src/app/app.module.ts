import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Product Component
import { NavbarProductComponent } from './components/products/navbar-product/navbar-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';

//Services
import { DataProductService } from './services/product/data-product.service';
import { DataClientService } from './services/client/data-client.service';

//Client Component
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ClientComponent } from './components/clients/client/client.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { NavbarClientComponent } from './components/clients/navbar-client/navbar-client.component';
import { ClientViewComponent } from './components/clients/client-view/client-view.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/products/product-view/product-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarProductComponent,
    AddProductComponent,
    ProductsListComponent,
    ProductComponent,
    AddClientComponent,
    ClientComponent,
    ClientListComponent,
    NavbarClientComponent,
    ClientViewComponent,
    HomeComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DataProductService,
    DataClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
