import { Component } from '@angular/core';
import { CartItemType } from '../item-types';
import { Router } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userName: string = "";

  constructor(protected router: Router, protected cartService: CartServiceService, private dataService: DataServiceService){
    this.userName = dataService.currUser();
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
