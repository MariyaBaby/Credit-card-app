import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/credit-card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/payments';

  constructor(private http: HttpClient) {}

  makePayment(creditCard: CreditCard): Observable<any> {
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.apiUrl, creditCard);
  }
}


