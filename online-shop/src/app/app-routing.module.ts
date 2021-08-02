import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch:'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: SingleProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent},
  {path: 'products/add', component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
