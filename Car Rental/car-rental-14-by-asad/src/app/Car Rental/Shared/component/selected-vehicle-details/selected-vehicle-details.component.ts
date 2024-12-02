import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-vehicle-details',
  templateUrl: './selected-vehicle-details.component.html',
  styleUrls: ['./selected-vehicle-details.component.css']
})
export class SelectedVehicleDetailsComponent implements OnInit {
  mainImage: string = '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/photo-1494976388531-d1058494cdd8 1.png';

  
  images = [
    { img: '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/product-images/View2.png' },
    { img: '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/product-images/View3.png' },
    { img: '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/product-images/View2.png' },
    { img: '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/product-images/View5.png' },
    { img: '../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/web-pages/car-renatl-sharing-data/product-images/View2.png' },
  ];

  
  onChangeImage(asad: string): void {
    this.mainImage = asad;
  }
  cardDatas=[
    {
      carname:'Swift',
      cartype:'sports',
      carimage:'.../../../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/product-images/car.png',
      carmilage:'90L',
      carprice:'4000/',
      personsit:'4 People',
    },
    {
      carname:'Roll-Royce',
      cartype:'luxury',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Roll royce.jpeg',
      carmilage:'60L',
      carprice:'34550/',
      personsit:'4 People',
    },
    {
      carname:'Formula 1',
      cartype:'racing',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/formula 1.jpeg',
      carmilage:'20L',
      carprice:'95000/',
      personsit:'1 People',
    },
    {
      carname:'Mustang',
      cartype:'sports',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Mustang.png',
      carmilage:'50L',
      carprice:'30000/',
      personsit:'4 People',
    },
   ]
  cardData=[
    {
      carname:'Swift',
      cartype:'sports',
      carimage:'.../../../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/product-images/car.png',
      carmilage:'90L',
      carprice:'4000/',
      personsit:'4 People',
    },
    {
      carname:'Roll-Royce',
      cartype:'luxury',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Roll royce.jpeg',
      carmilage:'60L',
      carprice:'34550/',
      personsit:'4 People',
    },
    {
      carname:'Formula 1',
      cartype:'racing',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/formula 1.jpeg',
      carmilage:'20L',
      carprice:'95000/',
      personsit:'1 People',
    },
    {
      carname:'Mustang',
      cartype:'sports',
      carimage:'../../../../../assets/car-renatl-sharing-data/car-renatl-sharing-data/Mustang.png',
      carmilage:'50L',
      carprice:'30000/',
      personsit:'4 People',
    },
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
