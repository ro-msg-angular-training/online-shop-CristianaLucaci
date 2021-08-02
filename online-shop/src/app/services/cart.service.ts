import { Injectable } from '@angular/core';

import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  orderUrl = '/api/orders';

  constructor(private http: HttpClient) {}

}