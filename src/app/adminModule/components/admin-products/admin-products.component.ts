import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../sharedModule/services/product.service';
import { Product } from '../../../../../api-server/models/Product';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] = [];
  isAddingSuccess: Boolean;
  isDeleteSuccess: Boolean;
  successDescription;
  subscription: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.reloadData();
    this.route.params.subscribe(params => {
      if (params['result']) {
        this.isAddingSuccess = true;
        this.successDescription = params['result'];
      }
    });
  }
   reloadData() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
  delete(idProduct) {
    if (confirm('Are you sure to delete this product')) {
      this.productService.deleteProduct(idProduct)
        .subscribe(result => {
          this.isDeleteSuccess = true;
          this.successDescription = result['result'];
          this.reloadData();
        });
    }
  }

}
