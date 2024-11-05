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

  removeFromCart(id: number){

  }

}
