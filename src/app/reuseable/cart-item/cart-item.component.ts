import { Component, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() quantity: number = 0;
  @Input() itemNo: number = 0;

  constructor(private cartService: CartServiceService){}

  onDelete(){
    this.cartService.removeFromCart(this.itemNo);
  }
}
