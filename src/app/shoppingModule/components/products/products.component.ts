import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../sharedModule/services/product.service';
import { Product } from '../../../../../api-server/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string;
  products;
  productsFilter;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.route.queryParams.subscribe(params => { // hoac dung queryParamsMap => thay bang params.get('category')
      this.category = params['category'];
      this.getProducts(this.category);
    });
  }

  ngOnInit() {
  }

  getProducts(cat) {
    if (!cat) {
      this.productService.getProducts().subscribe(products => {
        this.products = products as Product[];
      });
    } else {
      this.productService.getProducts().subscribe((products: Product[]) => {
        this.products = products.filter((product: Product) => product.category === cat.toLowerCase());
      });
    }
  }
}
