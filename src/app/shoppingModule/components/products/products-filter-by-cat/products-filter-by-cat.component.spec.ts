import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFilterByCatComponent } from './products-filter-by-cat.component';

describe('ProductsFilterByCatComponent', () => {
  let component: ProductsFilterByCatComponent;
  let fixture: ComponentFixture<ProductsFilterByCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFilterByCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFilterByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
