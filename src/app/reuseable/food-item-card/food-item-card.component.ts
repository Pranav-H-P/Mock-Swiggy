import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-food-item-card',
  standalone: true,
  imports: [],
  templateUrl: './food-item-card.component.html',
  styleUrl: './food-item-card.component.scss'
})
export class FoodItemCardComponent {

  @Input() foodName:string = "";
  @Input() foodImg:string = "";
  
  constructor(private router: Router, private dataService: DataServiceService){}

  onClicked(){
    this.dataService.setCurrFood(this.foodName);
    this.router.navigate(['foodPage']);
    
  }

}


