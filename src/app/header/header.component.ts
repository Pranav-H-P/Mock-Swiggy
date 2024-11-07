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

  constructor(protected router: Router, protected cartService: CartServiceService,
    private dataService: DataServiceService){}

  goToProfile(event: MouseEvent){
    event.stopPropagation();
    this.router.navigate(['profile']);
  }

  getUserName(){
    return this.dataService.currUser()
  }

  getAddress(){
    return this.dataService.currAddress()
  }

  goToFavorites(event: MouseEvent){
    event.stopPropagation();
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

  logOut(event: MouseEvent){
    event.stopPropagation();
    this.dataService.clearUser();
    this.goToHome();
  }

}
