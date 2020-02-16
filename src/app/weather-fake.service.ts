import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ICurrentWeather } from './i-current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherFakeService implements IWeatherService {
  private fakeWeather: ICurrentWeather= {
    city: "Bursa",
    country: "TR",
    date: 1485789600,
    image:'',
    temperature: 280.32,
    description: 'light drizzle'
  }

  constructor() { }

  public getCurrentWeather(city: string, country: string):
  Observable<ICurrentWeather>{
    return of (this.fakeWeather);
  }
}
