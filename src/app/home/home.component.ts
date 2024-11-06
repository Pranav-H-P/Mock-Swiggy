import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuServiceService } from '../services/menu-service.service';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { FoodItemType, RestaurantType } from '../item-types';
import { FoodItemCardComponent } from "../reuseable/food-item-card/food-item-card.component";
import { DataServiceService } from '../services/data-service.service';
import { RestaurantCardComponent } from "../reuseable/restaurant-card/restaurant-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FoodItemCardComponent, RestaurantCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userName: string = "";
  foodData: FoodItemType[];
  restaurantData: RestaurantType[];

  constructor(private dataService: DataServiceService,private menuService: MenuServiceService, 
    private restaurantService: RestaurantServiceService, private router: Router){
      this.foodData = menuService.getMenu();
      this.restaurantData = restaurantService.getAllRestaurantData();
      this.userName = dataService.currUser();
    }

}
