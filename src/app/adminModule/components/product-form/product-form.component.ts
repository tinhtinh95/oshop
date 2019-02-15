import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TitleValidators } from 'src/app/common/validators/product.validators';
import { ProductService } from '../../../sharedModule/services/product.service';
import { CategoryService } from '../../../sharedModule/services/category.service';
import { Product } from '../../.../../../../../api-server/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cat$;
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ],
    TitleValidators.shouldBeUnique(this.productService).bind(TitleValidators)
    ),
    price: new FormControl('', [
      Validators.required
    ]),
    category: new FormControl('', [
      Validators.required
    ]),
    imageURL: new FormControl('', [
      Validators.required,
      // tslint:disable-next-line:max-line-length
      Validators.pattern('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')
    ])
  });

  constructor(
    private productService: ProductService,
    private catService: CategoryService,
    private router: Router
    ) {
    this.cat$ = catService.getCategories();
  }

  ngOnInit() {
  }

  get title() {
    return this.form.get('title');
  }
  get price() {
    return this.form.get('price');
  }
  get category() {
    return this.form.get('category');
  }
  get imageURL() {
    return this.form.get('imageURL');
  }

  save(product) {
    if (product) {
      this.productService.saveProduct(product)
        .subscribe(result => {
          console.log(result);
          this.router.navigate(['/admin/products', {result: result['product']}]);
        })
      ;
    }
  }
}
