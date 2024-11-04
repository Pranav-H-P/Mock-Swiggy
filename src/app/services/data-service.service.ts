import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currFood = signal("Biryani");
  currRestaurant = signal("Indian Restaurant 1");

  constructor() { }

  setCurrFood(name: string){
    this.currFood.update(() => name);
  }
  getCurrFood(){
    return this.currFood();
  }
  setCurrRestaurant(name: string){
    this.currRestaurant.update(() => name);
  }
  getCurrRestaurant(){
    return this.currRestaurant();
  }


}
