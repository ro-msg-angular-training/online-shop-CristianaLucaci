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
        (`${environment.apiUrl}/products`)
        .pipe(
          catchError(this.handleError<Product[]>('getProducts', []))
        );;
    }

    getProduct(id: number): Observable<Product>{
        return this.http.get<Product>(
          `${environment.apiUrl}/products/${id}`
          ).pipe(
            catchError(this.handleError<Product>(`getProduct id=${id}`))
          );
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(
          `${environment.apiUrl}/products/${product.id}`,
          product
        ).pipe(
          catchError(this.handleError('updateProduct/', product))
        );
    }

    createAndStoreProduct(productData : Product){
      this.http.post('http://localhost:3000/products', productData)
      .subscribe(responseData => {
      console.log(responseData);
    });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.apiUrl}/products/${id}`)
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