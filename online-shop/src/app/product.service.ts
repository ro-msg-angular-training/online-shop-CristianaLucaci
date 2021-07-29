import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Product} from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    constructor(private messageService: MessageService){

    }

    getProducts(): Observable<Product[]>{
        const products = of(PRODUCTS);
        this.messageService.add('ProductService: fetched products');

        return products;
    }

    getProduct(id: number): Observable<Product>{
        const product = PRODUCTS.find(
            h => h.id === id
        )!;
        this.messageService.add('ProductService: fetched product id=${id}');
        return of(product);
    }
}