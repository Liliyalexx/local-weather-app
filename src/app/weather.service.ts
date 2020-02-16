import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {ICurrentWeatherData } from './icurrent-weather-data';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { IWeatherService } from './iweather-service';
import { ICurrentWeather } from './i-current-weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor (private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): 
   Observable <ICurrentWeather> {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
    ).pipe(map(data=>this.transformToICurrentWeather(data)));
  }
  private transformToICurrentWeather(data:
    ICurrentWeatherData):
    ICurrentWeatherData {
      return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image:`http://openweathermap.org/omg/w/${data.weather[0].icon}.png`,
      temperature:this.convertKelvinToFahrenheit (data.main.temp),
      description: data.weather[0].description,
      }
    }
  private convertKelvinToFahrenheit ( kelvin: number): number {
    return kelvin * 9 / 5 -459.67;
}
    }