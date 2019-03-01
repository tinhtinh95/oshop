import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCart } from '../../../../api-server/models/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  uri = 'http://localhost:3000/shopping-cart';

  constructor(private http: HttpClient) { }

  getAllCarts() {
    return this.http.get(`${this.uri}`);
  }

  addToCart(product) {
    return this.http.post(`${this.uri}/add`, product);
  }
}
