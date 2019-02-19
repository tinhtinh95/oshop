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

  getProductByID(id) {
    return this.http.get(`${this.uri}/get/${id}`);
  }

  saveProduct(product) {
    return this.http.post(`${this.uri}/add`, product);
  }

  editProduct(product, id) {
    console.log(product, id);
    return this.http.post(`${this.uri}/edit/${id}`, product);
  }

  deleteProduct(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
