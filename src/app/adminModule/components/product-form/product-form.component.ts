import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { TitleValidators } from 'src/app/common/validators/product.validators';
import { ProductService } from '../../../sharedModule/services/product.service';
import { CategoryService } from '../../../sharedModule/services/category.service';
import { Product } from '../../.../../../../../api-server/models/Product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  cat$;
  id;
  form = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ],
    // TitleValidators.shouldBeUnique(this.productService).bind(TitleValidators)
    ),
    price: new FormControl('', [
      Validators.required
    ]),
    category: new FormControl('', [
      Validators.required
    ]),
    imageUrl: new FormControl('', [
      Validators.required,
      // tslint:disable-next-line:max-line-length
      Validators.pattern('^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?')
    ])
  });

  constructor(
    private productService: ProductService,
    private catService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.cat$ = catService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProductByID(this.id).subscribe(product => {
      this.form.setValue({
        title: product['title'],
        price: product['price'],
        category: product['category'],
        imageUrl: product['imageUrl']
      });
    });
  }
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
  get imageUrl() {
    return this.form.get('imageUrl');
  }

  save(product) {
    if (product) {
      if (this.id) {
        console.log(this.id);
        this.productService.editProduct(product, this.id)
        .subscribe(result => {
          console.log(result);
          this.router.navigate(['/admin/products', {result: result['product']}]);
        });
      } else {
        this.productService.saveProduct(product)
        .subscribe(result => {
          this.router.navigate(['/admin/products', {result: result['product']}]);
        })
      ;
      }
    }
  }
}
