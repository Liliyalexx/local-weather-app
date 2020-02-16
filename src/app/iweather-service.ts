import { Observable } from 'rxjs';
import {ICurrentWeather} from './icurrent-weather';


export interface IWeatherService {
  getCurrentWeather (city: string, country: string):
  Observable <ICurrentWeather>
}
