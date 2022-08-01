import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { IProduct } from 'src/app/shared/models/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId:any;
  product!:IProduct;
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService) { }

  ngOnInit(): void {
      this.productId=this._ActivatedRoute.snapshot.paramMap.get('id');
      this._ProductService.getById(+this.productId).subscribe((data)=>{
          this.product=data;
          console.log(this.product)
      });

  }


}
