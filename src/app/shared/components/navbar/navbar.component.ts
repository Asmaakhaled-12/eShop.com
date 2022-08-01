import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName!:string
  constructor(private _UserService:UserService,private _ProductService:ProductService) { }

  ngOnInit(): void {
  this.userName=this._UserService.userName;
  }

  removeFilteration(){
    this._ProductService.filterd=false;
  }
}
