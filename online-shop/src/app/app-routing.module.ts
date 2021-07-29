import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch:'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: SingleProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
