import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image/product-image.component';
import { PriceDisplayComponent } from './price-display/price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department/product-department.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
