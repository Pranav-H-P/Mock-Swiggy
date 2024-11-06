import { Component } from '@angular/core';
import { RestaurantServiceService } from '../services/restaurant-service.service';
import { RestaurantType } from '../item-types';
import { DataServiceService } from '../services/data-service.service';
import { RestaurantCardComponent } from "../reuseable/restaurant-card/restaurant-card.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RestaurantCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favoriteaRestaurantData: RestaurantType[] = [];
  favoriteRestaurantNames: string[] = [];

  constructor(private restaurantService: RestaurantServiceService, private dataService: DataServiceService){

    let allRestData = restaurantService.getAllRestaurantData();

    this.favoriteRestaurantNames = dataService.favoriteList();

    for (let i = 0; i < allRestData.length; i++){
      if (this.favoriteRestaurantNames.includes(allRestData[i].restaurantName)){
        this.favoriteaRestaurantData.push(allRestData[i]);
      }
    }

  }

}
