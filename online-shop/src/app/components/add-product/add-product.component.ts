import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

 constructor(private http: HttpClient, private productService: ProductService) { 
    this.addProductForm = new FormGroup({
      'name' : new FormControl(''),
      'category': new FormControl(''),
      'image': new FormControl(''),
      'price' : new FormControl(''),
      'description': new FormControl('')
    })
  }

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required),
      'image': new FormControl(''),
      'price' : new FormControl('', [Validators.required]),
      'description': new FormControl('', Validators.required)
    })
  }

  onSubmit() : void{
    console.log(this.addProductForm);
  }

  onCreateProduct(
    productData : Product
  ){
    this.productService.addProduct(productData);
  }

}
