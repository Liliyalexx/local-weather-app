import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {WeatherService } from './weather.service';
import{ WeatherService} from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule]
  }));

    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });
  it('should be created'), () => {
    WeatherService
    expect(service).toBeTruthy();
  };
