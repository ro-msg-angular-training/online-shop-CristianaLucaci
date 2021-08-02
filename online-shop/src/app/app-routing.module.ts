import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/auth/login/login.component';
import {AuthGuard} from "./components/auth/auth.guard"

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductListComponent, canActivate: [AuthGuard], data: {roles: ["user"]}},
  {path: 'products/editor', component: EditProductComponent, canActivate: [AuthGuard], data: {roles: ["admin"]}},
  {path: 'products/:productId', component: SingleProductComponent, canActivate: [AuthGuard], data: {roles: ["user"]}},
  {path: 'products/editor/:productId', component: EditProductComponent, canActivate: [AuthGuard], data: {roles: ["admin"]}},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
