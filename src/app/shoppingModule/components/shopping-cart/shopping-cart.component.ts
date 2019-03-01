import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../sharedModule/services/shopping-cart.service';
import { ArrayCart } from '../../../../../api-server/models/ArrayCart';
import { ShoppingCart } from '../../../../../api-server/models/ShoppingCart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$: ShoppingCart[];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  this.shoppingCartService.getAllCarts()
    .subscribe((carts: ShoppingCart[]) => {
      this.shoppingCart$ = carts;
    });
  }

  get countItem() {
    let count = 0;
      this.shoppingCart$.forEach((element: ShoppingCart) => {
        // tslint:disable-next-line:radix
        count += parseInt(element.quantity);
      });
    return count;
  }

  get TotalPrice() {
    let sum = 0;
    this.shoppingCart$.forEach((element: ShoppingCart) => {
      sum = sum + (element.product.price * element.quantity);
    });
    return sum;
  }
}
