import { Component } from '@angular/core';
import { FoodItemType, RestaurantType } from '../item-types';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { MenuServiceService } from '../services/menu-service.service';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { RestaurantCardComponent } from '../reuseable/restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RestaurantCardComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  foodData: FoodItemType | undefined;
  restaurantList: RestaurantType[] = [];

  constructor(private router: Router, private dataService: DataServiceService,
    private menuService: MenuServiceService, private restaurantService: RestaurantServiceService
  ){
    let foodName = dataService.getCurrFood();
    this.foodData = menuService.getItem(foodName);
    

    if (this.foodData != undefined){
      
      for (let i = 0; i < this.foodData.shops.length; i++){
        
        let restData = restaurantService.getRestaurantData(this.foodData.shops[i]);
        
        if (restData != undefined){
          this.restaurantList.push(restData);
        }
      }

    }
      
  }


}
