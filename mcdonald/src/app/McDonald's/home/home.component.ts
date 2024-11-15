import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel = [
    {imgPath:'../../../assets/Images/Chick-Mac-D.png'},
    {imgPath:'../../../assets/Images/Happy-Menu-24-D.png'},
    {imgPath:'../../../assets/Images/Shakespresso-D.png'},
    {imgPath:'../../../assets/Images/delivery-points-desktop-slider 33.png'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
