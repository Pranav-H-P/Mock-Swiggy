import { Component } from '@angular/core';
import { CartItemType } from '../item-types';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userName: string = "Pranav";

  constructor(protected router: Router, protected cartService: CartServiceService){
    
  }

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
