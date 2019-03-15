import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCart } from '../../../../api-server/models/ShoppingCart';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  uri = 'http://localhost:3000/shopping-cart';

  constructor(private http: HttpClient) { }

  private dataObs$ = new Subject();

  getAllCarts() {
    return this.http.get(`${this.uri}`);
  }

  addToCart(product) {
    return this.http.post(`${this.uri}/add`, product).subscribe(productAdded => {
      return this.dataObs$.next(product);
    });
  }
  getData() {
    return this.dataObs$;
  }
}
