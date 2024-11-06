import { Component } from '@angular/core';
import { MenuServiceService } from '../services/menu-service.service';
import { FoodItemType, RestaurantType } from '../item-types';
import { FoodItemCardComponent } from "../reuseable/food-item-card/food-item-card.component";
import { RestaurantCardComponent } from "../reuseable/restaurant-card/restaurant-card.component";
import { RestaurantServiceService } from '../services/restaurant-service.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [FoodItemCardComponent, RestaurantCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

  foodData: FoodItemType[] = [];
  restaurantData: RestaurantType[] = [];

  constructor(private menuService: MenuServiceService, private restaurantService: RestaurantServiceService){}

  onType(event: Event){
    
    let name = (event.target as HTMLInputElement).value.trimStart();
    
    if (name === ""){
      this.foodData = [];
      this.restaurantData = [];

    }else{
      this.foodData = this.menuService.getMatchingItems(name);
      this.restaurantData = this.restaurantService.getMatchingItems(name);
    }
  }

}
