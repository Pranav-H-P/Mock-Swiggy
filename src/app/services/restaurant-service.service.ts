import { Injectable } from '@angular/core';
import { RestaurantType } from '../item-types';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {


  restaurantList:RestaurantType[] = [
    {
      restaurantName: "Indian Restaurant 1",
      img: "../../assets/images/restaurants/ir1.png",
      foodList: [
        "Biryani", "Samosa", "Parotta", "Roll", "Shawarma"
      ],
      reviews: [
        {
          userName: "user1",
          review: "Nice food"
        },
        {
          userName: "user3",
          review: "lorem ipsum"
        },
        {
          userName: "user6",
          review: "tasty"
        },
      ]
    },
    {
      restaurantName: "Indian Restaurant 2",
      img: "../../assets/images/restaurants/ir2.png",
      foodList: [
        "Biryani", "Parotta", "Roll"
      ],
      reviews: [
        {
          userName: "user7",
          review: "Nice"
        },
        {
          userName: "user3",
          review: "Not satisfied"
        },
        {
          userName: "user10",
          review: "Why is there no pizza"
        },
        {
          userName: "user12",
          review: "Good service"
        },
        {
          userName: "user13",
          review: "lorem ipsum"
        },
        {
          userName: "user16",
          review: "tasty"
        },
      ]
    },
    {
      restaurantName: "Chineese Restaurant 1",
      img: "../../assets/images/restaurants/cr1.png",
      foodList: [
        "Noodles", "Roll"
      ],
      reviews: [
        {
          userName: "user10",
          review: "Why is there no pizza"
        },
        {
          userName: "user12",
          review: "Good service"
        },
        {
          userName: "user13",
          review: "lorem ipsum"
        },
        {
          userName: "user16",
          review: "tasty"
        },
      ]
    },
    {
      restaurantName: "Chineese Restaurant 2",
      img: "../../assets/images/restaurants/cr2.png",
      foodList: [
        "Noodles", "Roll", "Momos"
      ],
      reviews: [
        {
          userName: "user3",
          review: "Friendly staff"
        },
        {
          userName: "user23",
          review: "Good service"
        },
        {
          userName: "user83",
          review: "lorem ipsum"
        },
        {
          userName: "user0",
          review: "tasty and quick"
        },
      ]
    },
    {
      restaurantName: "Fast Food 1",
      img: "../../assets/images/restaurants/ff2.png",
      foodList: [
        "Pizza", "Burger", "Samosa", "Shawarma", "Roll"
      ],
      reviews: [
        {
          userName: "user33",
          review: "very fast"
        },
        {
          userName: "user32",
          review: "Good service"
        },
        {
          userName: "user53",
          review: "lorem ipsum"
        },
        {
          userName: "user17",
          review: "tasty"
        },
        {
          userName: "user10",
          review: "Why is there no idly"
        },
        {
          userName: "user12",
          review: "Good service"
        },
        {
          userName: "user13",
          review: "lorem ipsum"
        },
        {
          userName: "user16",
          review: "tasty"
        },
      ]
    },
    {
      restaurantName: "Fast Food 2",
      img: "../../assets/images/restaurants/ff2.png",
      foodList: [
        "Pizza", "Burger", "Samosa", "Roll"
      ],
      reviews: [
        {
          userName: "user10",
          review: "nothing good to say......"
        },
        {
          userName: "user12",
          review: "bad service"
        },
        {
          userName: "user13",
          review: "lorem ipsum"
        },
        {
          userName: "user16",
          review: "tasty"
        },
        {
          userName: "user76",
          review: "tastiest"
        },
      ]
    }
  ];

  constructor() { }

  getAllRestaurantData(){
    return this.restaurantList;
  }

  getRestaurantData(restaurantName:string){

    for (let i = 0 ; i< this.restaurantList.length; i++){
      if (this.restaurantList[i].restaurantName === restaurantName){
        return this.restaurantList[i];
      }
    }

    return undefined;
  }

}
