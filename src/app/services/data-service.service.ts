import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currFood = signal("Biryani");
  currRestaurant = signal("Indian Restaurant 1");

  currUser = signal("");
  currAddress = signal("");

  favoriteList = signal<string[]>([]);

  constructor() {
    let tempArr: string[] = [];
    
    const storedArrayString = localStorage.getItem('favorites');
    const storedUserString = localStorage.getItem('user');

    if (storedArrayString) {
        
        tempArr = JSON.parse(storedArrayString);
    }
    if (storedUserString) {
        
      this.currUser.update(() => JSON.parse(storedUserString).username);
      this.currAddress.update(() => JSON.parse(storedUserString).address);

    }
    this.favoriteList.update(values => {return tempArr});
   }

  setUser(name: string, address: string){
    this.currUser.update(() => name);
    this.currAddress.update(() => address);
    const stringArr = JSON.stringify({
      username: name,
      address: address
    });
    localStorage.setItem('user', stringArr);
  }

  clearUser(){
    this.currUser.update(() => "");
    this.currAddress.update(() => "");
    const stringArr = JSON.stringify({
      username: "",
      address: ""
    });
    localStorage.setItem('user', stringArr);
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
    

  }
  removeFromFavorite(restName: string){

    const tempArr = this.favoriteList().filter(item => item !== restName);

    this.favoriteList.update(values => {return tempArr});

    const stringArr = JSON.stringify(this.favoriteList());
    localStorage.setItem('favorites', stringArr);
    
  }

}
