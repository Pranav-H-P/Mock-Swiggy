import { Component, EventEmitter, Output, Input } from '@angular/core';

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
  @Output() foodClicked = new EventEmitter<string>();

  onClicked(){

    this.foodClicked.emit(this.foodName);
  }

}


