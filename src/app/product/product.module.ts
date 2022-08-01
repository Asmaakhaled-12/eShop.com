import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FiliterComponent } from './filiter/filiter.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    FiliterComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,

  ]
})
export class ProductModule { }
