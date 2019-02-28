import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('product') product;
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product) {
    // console.log(product);
    this.shoppingCartService.addToCart(product)
      .subscribe(productAdded => {
        console.log(productAdded);
      });
  }

}
