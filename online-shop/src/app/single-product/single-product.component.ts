import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  product: Product | undefined;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
   }

  ngOnInit() : void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.getProduct();
  }
  getProduct(): void {
    this.productService.getProduct(this.id).subscribe(product => this.product = product);
  }
}
