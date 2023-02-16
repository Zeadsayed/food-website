import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/shared/models/CartItem';
import { cart } from 'src/app/shared/models/cart';
import { food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:cart = new cart()

  addToCart(food:food):void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number):void{
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():cart{
    return this.cart;
  }

}
