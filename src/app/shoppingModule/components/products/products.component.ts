import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../sharedModule/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories$;

  // tslint:disable-next-line:no-input-rename
  category: string;

  constructor(private catService: CategoryService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => { // hoac dung queryParamsMap => thay bang params.get('category')
      this.category = params['category'];
    });
  }

  ngOnInit() {
    this.categories$ = this.catService.getCategories();
  }
}
