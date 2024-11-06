import { Injectable } from '@angular/core';
import { FoodItemType } from '../item-types';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  foodItemList: FoodItemType[] = [
    {
      name: "Biryani",
      img: "../../assets/images/food/biryani.avif",
      shops: [
        "Indian Restaurant 1",
        "Indian Restaurant 2"
      ],
      price: 200
    },
    {
      name: "Pizza",
      img: "../../assets/images/food/pizza.avif",
      shops: [
        "Fast Food 1",
        "Fast Food 2"
      ],
      price: 150
    },
    {
      name: "Burger",
      img: "../../assets/images/food/burger.avif",
      shops: [
        "Fast Food 1",
        "Fast Food 2"
      ],
      price: 150
    },
    {
      name: "Shawarma",
      img: "../../assets/images/food/shawarma.avif",
      shops: [
        "Fast Food 1",
        "Indian Restaurant 1"
      ],
      price: 130
    },
    {
      name: "Noodles",
      img: "../../assets/images/food/noodles.avif",
      shops: [
        "Chineese Restaurant 1",
        "Chineese Restaurant 2"
      ],
      price: 140
    },
    {
      name: "Momos",
      img: "../../assets/images/food/momos.avif",
      shops: [
        "Chineese Restaurant 2"
      ],
      price: 60
    },
    {
      name: "Parotta",
      img: "../../assets/images/food/parotta.avif",
      shops: [
        "Indian Restaurant 1",
        "Indian Restaurant 2"
      ],
      price: 60
    },
    {
      name: "Roll",
      img: "../../assets/images/food/roll.avif",
      shops: [
        "Chineese Restaurant 1",
        "Chineese Restaurant 2",
        "Indian Restaurant 1",
        "Indian Restaurant 2",
        "Fast Food 1",
        "Fast Food 2"
        
      ],
      price: 80
    },
    {
      name: "Samosa",
      img: "../../assets/images/food/samosa.avif",
      shops: [
        "Indian Restaurant 1"
      ],
      price: 50
    }
  ]

  constructor() { }


  getMenu(){ // returns all available food data
    return this.foodItemList
  }
  getItem(name: string){ // returns specific food item data

    for (let i = 0; i < this.foodItemList.length; i++){

      if (this.foodItemList[i].name === name){
        return this.foodItemList[i];
      }

    }
    
    return undefined;
  }

  getMatchingItems(name: string){ // for search
    
    name=name.toLowerCase().trimStart().trimEnd()
    
    return this.foodItemList.filter(item => item.name.toLowerCase().startsWith(name));
    
  }
}
