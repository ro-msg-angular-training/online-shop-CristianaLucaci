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
    private productsUrl = '/api/products';
    constructor(
        private http: HttpClient
    ){}

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>
        (this.productsUrl)
        .pipe(
          catchError(this.handleError<Product[]>('getProducts', []))
        );;
    }

    getProduct(id: number): Observable<Product>{
        return this.http.get<Product>(
          `${this.productsUrl}/${id}`
          ).pipe(
            catchError(this.handleError<Product>(`getProduct id=${id}`))
          );
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(
          `${this.productsUrl}/${product.id}`,
          product
        ).pipe(
          catchError(this.handleError('updateProduct/', product))
        );
    }

    addProduct(productData : Product){
      this.http.post(this.productsUrl, productData)
      .subscribe(responseData => {
      console.log(responseData);
    });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productsUrl}/${id}`)
    .pipe(
      catchError(this.handleError('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}