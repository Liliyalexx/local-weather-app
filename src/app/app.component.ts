import { Component } from '@angular/core';
import { ICurrentWeather } from './i-current-weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Local Weather';

  currentWeather:ICurrentWeather;
  constructor(private weatherService: WeatherService){}

  doSearch(searchValue){}
}
