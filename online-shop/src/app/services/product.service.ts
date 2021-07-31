import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


import {Product} from '../model/product';


@Injectable({
    providedIn: 'root',
  })
export class ProductService {
    
    constructor(
        private http: HttpClient
    ){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>
        (`${environment.apiUrl}/products`);
    }

    getProduct(id: number): Observable<Product>{
        return this.http.get<Product>(
          `${environment.apiUrl}/products/${id}`
          );
    }

    updateProduct(product: Product): Observable<void> {
        return this.http.put<void>(
          `${environment.apiUrl}/products/${product.id}`,
          product
        );
      }
}