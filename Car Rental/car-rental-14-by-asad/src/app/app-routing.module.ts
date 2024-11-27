import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Car Rental/log-in/log-in.component';
import { SignUpComponent } from './Car Rental/sign-up/sign-up.component';
import { CreateNewPasswordComponent } from './Car Rental/create-new-password/create-new-password.component';
import { ForgetPasswordComponent } from './Car Rental/forget-password/forget-password.component';
import { OtpVerificationComponent } from './Car Rental/otp-verification/otp-verification.component';

const routes: Routes = [
  {
    path:'', component:LogInComponent
  },
  {
    path: 'sign-up', component:SignUpComponent
  },
  {
    path:'create-new-password', component:CreateNewPasswordComponent
  },
  {
    path:'forget-password', component:ForgetPasswordComponent
  },
  {
    path:'otp-verification', component:OtpVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
