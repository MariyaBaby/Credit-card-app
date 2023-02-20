import { createSelector } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';
import { PaymentState } from './payment.state';

export const selectPayment: any = (state: { payment: PaymentState }) =>
  state;

export const selectPaymentAmount = createSelector(selectPayment, (payment) =>
  payment ? payment : null
);
