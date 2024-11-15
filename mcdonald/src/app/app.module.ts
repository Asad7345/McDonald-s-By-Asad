import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './McDonald\'s/header/header.component';
import { FooterComponent } from './McDonald\'s/footer/footer.component';
import { AboutourfoodComponent } from './McDonald\'s/aboutourfood/aboutourfood.component';
import { TrendingNowComponent } from './McDonald\'s/trending-now/trending-now.component';
import { HomeComponent } from './McDonald\'s/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutourfoodComponent,
    TrendingNowComponent,
    HomeComponent,
   
    
 
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
