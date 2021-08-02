import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;

 constructor(private http: HttpClient) { 
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
    postaData:{
      name : string;
      category : string;
      image : string;
      price : Number;
      description : string;
    }
  ){
    this.http.post('http://localhost:3000/products', postaData)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

}
