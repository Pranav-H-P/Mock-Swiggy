import { Component } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CartItemComponent } from '../reuseable/cart-item/cart-item.component';
import { Router } from '@angular/router';
import { HttpserviceService } from '../services/httpservice.service';
import { CartItemType } from '../item-types';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

  paymentButtonText: string = "PROCEED TO PAY";

  userAddress: string = "";

  constructor(protected cartService: CartServiceService, private router: Router,
    private httpService: HttpserviceService, private dataService: DataServiceService){
      this.userAddress = dataService.currAddress();
    }

  proceedToPay(){

    if (this.dataService.currUser() === ""){
      this.router.navigate(["profile"]);
    }

    this.paymentButtonText = "PROCESSING PAYMENT..."

    let order:CartItemType[] = this.cartService.cart();



    this.httpService.postOrder(order).subscribe({
      next: response => {
        this.router.navigate(["payment"]);
      
        this.cartService.clear()
      },
      error: error => {
        this.router.navigate(["failure"]);

      }
    });

  }

}
