import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {ProductService} from "../../services/product.service";
import { HttpClient } from '@angular/common/http';

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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  

}
