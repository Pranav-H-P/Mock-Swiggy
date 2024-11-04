import { Component } from '@angular/core';
import { CartItemType } from '../cart-item-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userName: string = "Pranav";
  cartItems: CartItemType[] = [
    
  ]; // contains name, quantity and price

  totalCost: number = 0;

  constructor(protected router: Router){}

  goToFavorites(){
    this.router.navigate(["favorites"]);
  }

  goToCart(){
    this.router.navigate(["cart"]);
  }

  goToSearch(){
    this.router.navigate(["search"]);
  }

  goToHome(){
    this.router.navigate([""]);
  }

}
