import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../services/product.service";


enum EditorMode {
  CREATE,
  EDIT
}

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product|undefined;
  productId !: number;

  mode: EditorMode = EditorMode.CREATE;

  productForm = this.formBuilder.group({
    id : [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', [Validators.required]],
    imageUrl: [''],
    price: ['', [Validators.required, Validators.pattern("^\\d+\\.?\\d*$")]],
    description: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const ret = routeParams.get('productId');
    if (ret !== null) {
      this.mode = EditorMode.EDIT;
      this.productId = Number(ret);
      this.loadProduct();
    }
  }

  loadProduct(): void {
    this.productService.getProduct(this.productId).subscribe(product => this.initializeForm(product));
  }

  initializeForm(product: Product): void {
    this.product = product;

    this.productForm.patchValue({
        id: this.product.id,
        name: this.product.name,
        category: this.product.category,
        imageUrl: this.product.image,
        price: this.product.price,
        description: this.product.description
    });
  }

  submitForm(): void {
    const product = this.productForm.value as Product;

    if (this.mode === EditorMode.CREATE) {
      this.productService.updateProduct(product).subscribe(
        ret => this.router.navigate(['/products/', ret])
      );

    } else {
      this.productService.updateProduct(product).subscribe();
      this.router.navigate(['/products/', product.id]);
    }
  }

}
