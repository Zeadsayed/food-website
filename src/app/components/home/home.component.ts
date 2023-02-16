import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  foods:food[]=[];

  constructor(private _FoodService:FoodService, private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params=>{
      if(params['searchTerm']){
        this.foods = this._FoodService.getAllFoodBySearchTerm(params['searchTerm'])
      }
      else if(params['tag']){
        this.foods= this._FoodService.getAllFoodByTag(params['tag'])
      }
      else{
        this.foods= this._FoodService.getAll();
      }
    })
  }
}
