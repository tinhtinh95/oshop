import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../sharedModule/services/product.service';
import { Product } from '../../../../../api-server/models/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
   }

  ngOnInit() {
  }

}
