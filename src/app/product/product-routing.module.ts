import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FiliterComponent } from './filiter/filiter.component';

const routes: Routes =
[
  {path:"",redirectTo:"productList",pathMatch:'full'},
  {path:"productList",component:ProductListComponent},
  {path:"productDetails/:id",component:ProductDetailsComponent},
  {path:"filiter",component:FiliterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
