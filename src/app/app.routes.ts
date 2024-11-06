import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentFailureComponent } from './payment-failure/payment-failure.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "favorites",
        component: FavoritesComponent
    },
    {
        path: "foodPage",
        component: FoodPageComponent
    },
    {
        path: "restaurantPage",
        component: RestaurantPageComponent
    },
    {
        path: "payment",
        component: PaymentSuccessComponent
    },
    {
        path: "cart",
        component: CartPageComponent
    },
    {
        path: "search",
        component: SearchPageComponent
    },
    {
        path: "paymentFailed",
        component: PaymentFailureComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];
