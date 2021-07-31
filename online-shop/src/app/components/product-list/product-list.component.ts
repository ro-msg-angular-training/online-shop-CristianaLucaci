import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import {ProductService} from '../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  providers: [ProductService],
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() : void {
    this.productService.getProducts().subscribe(
      products => (this.products = products)
    );
  }

}
