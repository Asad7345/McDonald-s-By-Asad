import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrls: ['./create-new-password.component.css']
})
export class CreateNewPasswordComponent  {

  constructor(private router:Router) { }

  onNavigate(): void {
    this.router.navigate(['/otp-verification']);
  }



}