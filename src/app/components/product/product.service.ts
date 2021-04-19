import { product } from './product.model';

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="http://localhost:3001/produts"

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg,'Entendi',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: product) {
    return this.http.post(this.baseUrl, product)
  }
}
