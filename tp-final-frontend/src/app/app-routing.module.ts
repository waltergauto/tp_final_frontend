import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { VentasComponent } from './components/venta/ventas/ventas.component';

const routes: Routes = [
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
