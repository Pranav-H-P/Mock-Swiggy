export interface CartItemType {
    name: string;
    quantity: number;
    price: number;
}

export interface FoodItemType{
    name: string;
    img: string;
    shops: string[];
    price: number;
}

export interface UserReviewType{
    userName: string;
    review: string;
}

export interface RestaurantType{
    restaurantName: string;
    img: string;
    foodList: string[];
    reviews: UserReviewType[];
}