import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cart } from 'src/app/shared/models/cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  cart !:cart;

  searchTerm:string="";
  constructor(private _ActivatedRoute:ActivatedRoute, private _Router:Router,private _CartService:CartService){
    this.setCart();
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    })
  }
  
  search():void{
    if(this.searchTerm)
      this._Router.navigateByUrl('/search/' + this.searchTerm);
  }

  setCart(){
    this.cart=this._CartService.getCart();
  }
}
