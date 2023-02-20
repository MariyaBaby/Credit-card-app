import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { CreditCard } from '../../models';
import { selectPayment } from '../../store/payment.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'myApp';
  payment: CreditCard | undefined;

  constructor(private router: Router, private store: Store) {}

  goToPayment() {
    this.router.navigate(['/payment']);
  }

  ngOnInit(): void {
    this.store.pipe(select(selectPayment)).subscribe((payment: any) => {
      console.log(payment.creditCard.payment); // consoling the store items
      this.payment = payment.creditCard.payment;
    });
  }
}
