import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss'
})
export class RestaurantCardComponent {

  @Input() restName: string = ""
  @Input() restImg: string = ""
  @Input() restItems: string = ""

  constructor(private router: Router, private dataService: DataServiceService){

  }

  onCardClicked(){
    this.dataService.setCurrRestaurant(this.restName);
    this.router.navigate(["restaurantPage"]);

  }

}
