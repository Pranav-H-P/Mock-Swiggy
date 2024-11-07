# MockSwiggy

# ACCEPTED LOGIN DETAILS ARE 
# username:Pranav
# password:testing123

This is a simplified Swiggy clone built using angular and tailwind css.
It will have basic functionality such as searching for food, adding to cart, placing orders and maintaining favorites.

It has the following components




## cart-page
It is the page where the cart can be viewed/edited and order can be placed

## favorites
It shows the user's favorite/saved restaurants and lets then quickly visit their menu

## food-page
It is a page the user can visit that shows all the restaurants that provide a certain kind of food item

## footer
It is a component for the footer

## header
It is a component for the header

## home
It is a home page where the user can view food items and restaurants

## login-page
It allows the user to login/logout and acts as a profile page

## page-not-found
It is a default page to handle unknown routes

## payment-failure
It is a page to display failure after an order has been placed

## payment-success
It is a page to display success after an order has been placed

## restaurant-page
It is a page which displays all the items available in a restaurant. It is where you add items to cart.

## search-page
It is a page where you can search for food items and restaurants by name





## reusable (folder to organize reusable components)
It holds all the reusable components

### cart-item
Component for cart items to be shown in cart page

### food-item-card
Component to show food item preview in home page and search page

### menu-item
Component to show food item, it's price and provide option to add to cart in restaurant-page

### restaurant-card
Component to show restaurant data preview in home page, food page and search page

### user-review
Component to show user reviews in the restaurant page




## services (folder to organize services)
It holds all the services used in the project

### cart-service
It provides functions related to managing and accessing items in the cart

### data-service
It provides functions related to managing and accessing data that must be shared among multiple components, such as current user, etc

### http-service
It provides functions related to accessing the mockAPI service and making http requests to it

### menu-service
It provides static data and functions related to the options and availability of food items

### restaurant-service
It provides static data and functions related to the options and availability of restaurants




## assets
Static files

### images 
Holds images used in the project

### images/food
Holds images used for food items in the project

### images/restaurants
Holds images used for restaurants in the project





## Other created files in src/app/

### item-types.ts
Holds interfaces for custom datatypes used in this project












(icons downloaded from icon8.com)
