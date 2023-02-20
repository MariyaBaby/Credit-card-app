import { CreditCard } from '../models/credit-card.model';

export interface PaymentState {
    payment: CreditCard | null;
  }
  