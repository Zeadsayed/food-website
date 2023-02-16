import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return[
      {name: 'All' , count: 14},
      {name: 'FastFood' , count: 4},
      {name: 'Pizza' , count: 2},
      {name: 'Lunch' , count: 3},
      {name: 'SlowFood' , count: 2},
      {name: 'Hamburger' , count: 1},
      {name: 'Fry' , count: 1},
      {name: 'Soup' , count: 1},
    ];
  }

  getAllFoodBySearchTerm(searchTerm:string):food[]{
    return this.getAll()
    .filter(food=>food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()));
  }

  getAllFoodByTag(tag:string):food[]{
    return tag =='All' ?
    this.getAll() :
    this.getAll().filter(food =>food.tags?.includes(tag));

    // if(tag == 'All'){
    //   return this.getAll();
    // }
    // else{
    //   return this.getAll().filter(food =>food.tags?.includes(tag));
    // }
  }

  getAllFoodById(id:number):food{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAll():food[]{
    return[
    {
      id:1,
      name:'Pizza Pepperoni',
      price:10,
      stars:4.5,
      tags:['FastFood','Pizza','Lunch'],
      favorite:false,
      imgUrl:'/assets/img/food-1.jpg',
      origins:['italy'],
      cookTime:'10-20',
    },
    {
      id:2,
      name:'Meetball',
      price:20,
      stars:4.7,
      tags:['SlowFood','Lunch'],
      favorite:true,
      imgUrl:'/assets/img/food-2.jpg',
      origins:['persia','middle east','china'],
      cookTime:'20-30',
    },
    {
      id:3,
      name:'Hamburger',
      price:5,
      stars:3.5,
      tags:['FastFood','Hamburger'],
      favorite:false,
      imgUrl:'/assets/img/food-3.jpg',
      origins:['germany','us'],
      cookTime:'10-15',
    },
    {
      id:4,
      name:'Fride Potatoes',
      price:2,
      stars:3.3,
      tags:['FastFood','Fry'],
      favorite:true,
      imgUrl:'/assets/img/food-4.jpg',
      origins:['belgium','france'],
      cookTime:'10-20',
    },
    {
      id:5,
      name:'Chicken Soup',
      price:11,
      stars:3.0,
      tags:['SlowFood','Soup'],
      favorite:false,
      imgUrl:'/assets/img/food-5.jpg',
      origins:['india','asia'],
      cookTime:'40-50',
    },
    {
      id:6,
      name:'Vegetables Pizza',
      price:9,
      stars:4.0,
      tags:['FastFood','Pizza','Lunch'],
      favorite:false,
      imgUrl:'/assets/img/food-6.jpg',
      origins:['italy'],
      cookTime:'40-50',
    },
  ]
  }

}
