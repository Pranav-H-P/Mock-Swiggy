import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currFood = signal("Biryani");
  currRestaurant = signal("Indian Restaurant 1");

  currUser = signal("Pranav");
  
  favoriteList = signal<string[]>([]);

  constructor() {
    let tempArr:string[] = [];

    const storedArrayString = localStorage.getItem('favorites');

    if (storedArrayString) {
        
        tempArr = JSON.parse(storedArrayString);
    }
    this.favoriteList.update(values => {return tempArr});
   }

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

  addToFavorite(restName: string){
    
    this.favoriteList.update(values => {return [...values, restName]});
    const stringArr = JSON.stringify(this.favoriteList());
    localStorage.setItem('favorites', stringArr);
    console.log(this.favoriteList());

  }
  removeFromFavorite(restName: string){

    const tempArr = this.favoriteList().filter(item => item !== restName);

    this.favoriteList.update(values => {return tempArr});

    const stringArr = JSON.stringify(this.favoriteList());
    localStorage.setItem('favorites', stringArr);
    console.log(this.favoriteList());
  }

}
