import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../sharedModule/services/category.service';

@Component({
  selector: 'app-products-filter-by-cat',
  templateUrl: './products-filter-by-cat.component.html',
  styleUrls: ['./products-filter-by-cat.component.css']
})
export class ProductsFilterByCatComponent implements OnInit {
  categories$;
  // tslint:disable-next-line:no-input-rename
  @Input('category') category;

  constructor(private catService: CategoryService) { }

  ngOnInit() {
    this.categories$ = this.catService.getCategories();
  }

}
