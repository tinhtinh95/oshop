import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // use ng-bootstrap

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './coreModule/components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './coreModule/components/home/home.component';
import { LoginComponent } from './coreModule/components/login/login.component';
import { AdminOrdersComponent } from './adminModule/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './adminModule/components/admin-products/admin-products.component';
import { ProductFormComponent } from './adminModule/components/product-form/product-form.component';
import { ProductCardComponent } from './sharedModule/components/product-card/product-card.component';
import { ProductQuantityComponent } from './sharedModule/components/product-quantity/product-quantity.component';
import { CheckOutComponent } from './shoppingModule/components/check-out/check-out.component';
import { MyOrdersComponent } from './shoppingModule/components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shoppingModule/components/order-success/order-success.component';
import { ProductsComponent } from './shoppingModule/components/products/products.component';
import { ShippingFormComponent } from './shoppingModule/components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shoppingModule/components/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './shoppingModule/components/shopping-cart-summary/shopping-cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    CheckOutComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShippingFormComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: []
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent
      },
      {
        path: 'admin/products/add-new',
        component: ProductFormComponent
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent
      },
      {
        path: 'order-success/:id',
        component: OrderSuccessComponent
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
