import { createReducer, on } from '@ngrx/store';
import * as PaymentActions from './payment.actions';
import { CreditCard } from '../models/credit-card.model';
import { PaymentState } from './payment.state';

export const initialState: PaymentState = {
  payment: null
};


export const paymentReducer = createReducer(
  initialState,
  on(PaymentActions.addPayment, (state, { payment }) => (
    {
      ...state,
      payment: payment,
    }
  )),
  on(PaymentActions.removePayment, (state) => (
    {
      ...state,
      payment: null,
    }
  ))
);

