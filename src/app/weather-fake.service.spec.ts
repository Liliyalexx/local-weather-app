import { TestBed } from '@angular/core/testing';

import { WeatherFakeService } from './weather-fake.service';

describe('WeatherFakeService', () => {
  let service: WeatherFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
