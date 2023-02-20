import { createAction, props } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';

export const addPayment = createAction(
  '[Payment] Add Payment',
  props<{ payment: CreditCard }>()
);

export const removePayment = createAction(
  '[Payment] Remove Payment',
  props<{ id: number }>()
);