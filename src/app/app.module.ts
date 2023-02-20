import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { paymentReducer } from '../app/store/payment.reducer';
import { PaymentComponent } from './components/payment';
import { HomeComponent } from './components/home';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    MatSnackBarModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ creditCard: paymentReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


