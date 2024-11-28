import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 cardDatas=[
  {
    carname:'Swift',
    cartype:'sports',
    carimage:'.../../../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/product-images/car.png',
    carmilage:'90L',
    carprice:'4000/',
  },
  {
    carname:'Roll-Royce',
    cartype:'luxury',
    carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Roll royce.jpeg',
    carmilage:'60L',
    carprice:'34550/',
  },
  {
    carname:'Formula 1',
    cartype:'racing',
    carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/formula 1.jpeg',
    carmilage:'20L',
    carprice:'95000/',
  },
  {
    carname:'Mustang',
    cartype:'sports',
    carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Mustang.png',
    carmilage:'50L',
    carprice:'30000/',
  },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
