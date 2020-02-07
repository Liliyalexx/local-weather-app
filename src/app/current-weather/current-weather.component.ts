import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../i-current-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current: ICurrentWeather
  constructor() { 
  this.current = {
    city: "Bethesda",
    country: 'US',
    date: 1485789600,
    image:'',
    temperature: 40,
    discription: 'sunny'
  } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
