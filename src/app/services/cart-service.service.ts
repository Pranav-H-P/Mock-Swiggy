import { Injectable, signal } from '@angular/core';
import { CartItemType } from '../item-types';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  cart = signal<CartItemType[]>([]);

  constructor() { }

  addToCart(cartItem: CartItemType){
    this.cart.update(values => {return [...values, cartItem]});
  }

  getTotal(){
    let sum = 0;

    for (let i = 0; i < this.cart().length; i++){
      
      sum += this.cart()[i].price;

    }
    return sum;
  }

  removeFromCart(id: number){

  }

}
