import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Car Rental/log-in/log-in.component';
import { SignUpComponent } from './Car Rental/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Car Rental/forget-password/forget-password.component';
import { CreateNewPasswordComponent } from './Car Rental/create-new-password/create-new-password.component';

import { OtpVerificationComponent } from './Car Rental/otp-verification/otp-verification.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { HeaderComponent } from './Car Rental/Shared/component/header/header.component';
import { FooterComponent } from './Car Rental/Shared/component/footer/footer.component';
import { HomeComponent } from './Car Rental/Shared/component/home/home.component';
import { CardsComponent } from './Car Rental/Shared/component/cards/cards.component';
import { VehicleListingComponent } from './Car Rental/Shared/component/vehicle-listing/vehicle-listing.component';
import { SelectedVehicleDetailsComponent } from './Car Rental/Shared/component/selected-vehicle-details/selected-vehicle-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    CreateNewPasswordComponent,
    OtpVerificationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    VehicleListingComponent,
    SelectedVehicleDetailsComponent,
  
  ],
  imports: [
    BrowserModule,
    NgOtpInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
