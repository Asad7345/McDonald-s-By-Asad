import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Car Rental/log-in/log-in.component';
import { SignUpComponent } from './Car Rental/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './Car Rental/forget-password/forget-password.component';
import { CreateNewPasswordComponent } from './Car Rental/create-new-password/create-new-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    CreateNewPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
