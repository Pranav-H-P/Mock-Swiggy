import { Component, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() foodName: string = "";
  @Input() img: string = "";
  @Input() price: number = 0;

  count: number = 0;

  constructor( private cartService: CartServiceService){

  }


  onAddClicked(){

    if (this.count > 0){
      console.log("adding");
      let cartItem = {
        name: this.foodName,
        quantity: this.count,
        price: this.price
      }
      this.cartService.addToCart(cartItem);
    }
  }

  onPlusClicked(){
    this.count += 1;
  }

  onNegClicked(){

    if (this.count > 0){
      this.count -= 1;
    }
  }

  

}
