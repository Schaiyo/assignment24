import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductitemComponent } from './productitem/productitem.component';
import { ProductlistComponent } from './productlist/productlist.component';


@NgModule({
  declarations: [
    ProductitemComponent,
    ProductlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductlistComponent
  ]
})
export class CatalogModule { }
