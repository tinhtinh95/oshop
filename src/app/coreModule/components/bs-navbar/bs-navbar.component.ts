import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../api-server/models/User';
import { ShoppingCartService } from '../../../sharedModule/services/shopping-cart.service';
import { ShoppingCart } from '../.././../../../api-server/models/ShoppingCart';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  userInfo: User;
  countItem = 0;
  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCartService.getAllCarts().subscribe((carts: ShoppingCart[]) => {
      carts.forEach(element => {
        // tslint:disable-next-line:radix
        this.countItem += parseInt(element.quantity);
      });
    });
  }
}
