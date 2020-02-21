import { Observable } from 'rxjs';
import {ICurrentWeather} from './i-current-weather';


export interface IWeatherService {
  getCurrentWeather (searchText: string | number, country?: string) : Observable<ICurrentWeather>
}
