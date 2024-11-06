import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItemType } from '../item-types';
import { DataServiceService } from './data-service.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient, private dataService: DataServiceService) { }
  
  postOrder(orderList: CartItemType[]): Observable<any> {
    return this.http.post('https://672b798b1600dda5a9f52d13.mockapi.io/api/orders',
      {
       name: this.dataService.currUser(),
       order: orderList
      }
     ).pipe(
      catchError(error => {
        console.error('Error adding post:', error);
        return throwError(()=> new Error('Failed to add post.'));
      })
    );
  }
}
