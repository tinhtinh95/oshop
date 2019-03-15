import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../api-server/models/User';
import { ShoppingCartService } from '../../../sharedModule/services/shopping-cart.service';
import { ShoppingCart } from '../.././../../../api-server/models/ShoppingCart';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  userInfo: User;
  countItem = 0;
  constructor(private shoppingCartService: ShoppingCartService, private http: HttpClient) {
    this.loadData();
  }

  ngOnInit() {
    this.shoppingCartService.getData().subscribe(data => {
      this.countItem +=  1;
      // this.loadData();
    });
  }
   loadData() {
    this.countItem = 0;
     this.shoppingCartService.getAllCarts().subscribe((carts: ShoppingCart[]) => {
      carts.forEach(element => {
        this.countItem += parseInt(element.quantity);
      });
    });
  }
}
