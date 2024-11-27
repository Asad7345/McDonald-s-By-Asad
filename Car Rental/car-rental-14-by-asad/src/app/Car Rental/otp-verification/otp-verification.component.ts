import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent  {
  constructor(private router:Router) { }

  onNavigate(): void {
    this.router.navigate(['/otp-verification']);
  }

  
onOtpChange(asad:any){
  console.log(asad);

}
}
