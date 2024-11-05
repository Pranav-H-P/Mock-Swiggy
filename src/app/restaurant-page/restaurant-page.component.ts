import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { MenuServiceService } from '../services/menu-service.service';
import { DataServiceService } from '../services/data-service.service';
import { FoodItemType, RestaurantType } from '../item-types';
import { MenuItemComponent } from "../reuseable/menu-item/menu-item.component";
import { UserReviewComponent } from '../reuseable/user-review/user-review.component';

@Component({
  selector: 'app-restaurant-page',
  standalone: true,
  imports: [MenuItemComponent, UserReviewComponent],
  templateUrl: './restaurant-page.component.html',
  styleUrl: './restaurant-page.component.scss'
})
export class RestaurantPageComponent {

  restName: string = "";
  restData: RestaurantType | undefined;
  foodData: FoodItemType[] = [];

  favorite: boolean = false;

  constructor( private router: Router, private restaurantService: RestaurantServiceService,
    private menuService: MenuServiceService, private dataService: DataServiceService
  ){
    this.restName = dataService.getCurrRestaurant();
    this.restData = restaurantService.getRestaurantData(this.restName);

    if (this.restData?.foodList != undefined){ // get food item data
      for (let i = 0; i < this.restData.foodList.length; i++){;
        let foodItem = menuService.getItem(this.restData.foodList[i])
        if (foodItem != undefined){
          this.foodData.push(foodItem);
        }
        
      }
    }
    
    if (dataService.favoriteList().includes(this.restName)){ // check if in favorites
      this.favorite = true;
    }else{
      this.favorite = false;
    }

  }
  toggleFavorite(){
    this.favorite = !this.favorite;
    if (this.favorite){
      this.dataService.addToFavorite(this.restName);
    }else{
      this.dataService.removeFromFavorite(this.restName);
    }
  }

}
