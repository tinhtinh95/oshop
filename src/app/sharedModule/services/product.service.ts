import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  uri = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  getProduct(title) {
    return this.http.get(`${this.uri}/checkExist/${title}`);
  }

  saveProduct(product) {
    return this.http.post(`${this.uri}/add`, product);
  }

  editProduct() {

  }

  deleteProduct(id) {
    console.log(id);
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
