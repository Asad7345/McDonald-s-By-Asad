import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './McDonald\'s/home/home.component';
import { AboutourfoodComponent } from './McDonald\'s/aboutourfood/aboutourfood.component';
import { TrendingNowComponent } from './McDonald\'s/trending-now/trending-now.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent,
  },
  {
    path:'about-our-food', component:AboutourfoodComponent
  },  
  {
    path:'trending-now', component:TrendingNowComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
