import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../sharedModule/services/shopping-cart.service';
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


}
