import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../sharedModule/services/product.service';
import { Product } from '../../../../../api-server/models/Product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[];
  isAddingSucess: Boolean;
  successDescription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['result']) {
        this.isAddingSucess = true;
        this.successDescription = params['result'];
      }
    });
  }

  delete(idProduct) {
    if (confirm('Are you sure to delete this product')) {
      this.productService.deleteProduct(idProduct);
    }
  }

}
