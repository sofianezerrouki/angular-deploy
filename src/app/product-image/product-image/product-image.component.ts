import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

  @Component({
    selector: 'product-image',
    template: `
    <img class="product-image" [src]="product.imageUrl">  
    `
  })


 export class ProductImageComponent {
  
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
   
 

}
