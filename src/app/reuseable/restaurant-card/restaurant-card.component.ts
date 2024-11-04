import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() restClicked = new EventEmitter<string>();

  onCardClicked(){
    this.restClicked.emit(this.restName);
  }

}
