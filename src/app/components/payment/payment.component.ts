// Angular Libraries
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

// models, services, store
import { CreditCard } from '../../models/credit-card.model';
import { PaymentService } from '../../services/payment.service';
import { addPayment } from '../../store/payment.actions';
import { selectPayment } from 'src/app/store';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  creditCardForm: FormGroup;
  creditCard:CreditCard = <CreditCard>{}
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private paymentServices: PaymentService,
    private store: Store< {creditCard: CreditCard} >,
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) {
    this.creditCardForm = this.fb.group({});
  }

  ngOnInit() {
    this.IntializeCreditCardForm();
  }

  IntializeCreditCardForm() {
    this.creditCardForm = this.fb.group({      
      creditCardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      securityCode: ['', [ Validators.pattern(/^\d{3}$/)]],
      cardHolder: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]   
    });
  }

  onSubmit() { 
    if(this.creditCardForm.touched) {
      this.submitted = true;
      const payment: CreditCard= this.creditCardForm.value;
      this.store.dispatch(addPayment({ payment }));
      this.paymentServices.makePayment(payment).subscribe(
        () => {
          this.snackBar.open('Payment Successful', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        }
      );
    } else {
      this.snackBar.open('Please fill the mandatory fields', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
