import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {WeatherService} from './weather.service'
import{HttpClientModule} from '@angular/common/http';
import { CitySearchComponent } from './city-search/city-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
