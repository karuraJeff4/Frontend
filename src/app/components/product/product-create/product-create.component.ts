import { product } from './../product.model';

import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto de Teste',
    price: 125.98
  }

  constructor( private ProductService : ProductService, private router : Router ) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    this.ProductService.create()
    this.ProductService.showMessage('Produto Criado!')
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
