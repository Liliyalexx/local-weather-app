import { Injectable } from '@angular/core';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './i-current-weather';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService {
  private fakeWeather: ICurrentWeather= {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image:'',
    temperature: 280.32,
    description: 'light drizzle',
  }

  constructor() { }

  public getCurrentWeather(searchText: string | number, country?: string):
  Observable<ICurrentWeather>{
    return of (this.fakeWeather);
  }
}
