import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{

  food!:food;

  constructor(private _ActivatedRoute:ActivatedRoute,private _FoodService:FoodService,
    private _CartService:CartService, private _Router:Router){

    _ActivatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.food = _FoodService.getAllFoodById(params['id'])
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this._CartService.addToCart(this.food);
    this._Router.navigateByUrl('/cart-page');
  }

}
