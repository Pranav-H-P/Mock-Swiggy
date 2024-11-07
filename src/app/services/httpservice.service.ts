import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItemType } from '../item-types';
import { DataServiceService } from './data-service.service';
import { catchError, map, Observable, of, throwError } from 'rxjs';

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
  login(userName: string, password: string): Observable<boolean> {
    return this.http.get('https://672b798b1600dda5a9f52d13.mockapi.io/api/accounts').pipe(
      map(response => {
        
        if (Array.isArray(response) && response.length > 0){
          console.log(response);
          for (let i = 0; i < response.length; i++){
            if (response[i].username === userName && response[i].password == password){
              return true;
            }
          }

        }

        return false;
      }),
      catchError(error => {
        console.error('Error loggin in:', error);
        return of(false);
      })
    );
    
  }
}
