import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { WeatherService } from './core/services/weather.service';
import { CityWeatherSetModel } from './core/models/current-weather';

import * as fromRoot from './reducers';
import { Observable, Subscription } from 'rxjs';

// import { WeatherService } from "../../services/weather.service";
@Component({
  selector: 'wc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'web-client';
  // private currentWeather: CityWeatherModel;
  cities$: Observable<CityWeatherSetModel[]>;
  lastCity$: Observable<CityWeatherSetModel>;
  lastCity: CityWeatherSetModel;
  lastCityKeys: string[];
  citiesSubscription: Subscription;

  constructor(private store: Store<fromRoot.State>, private ws: WeatherService) {
    this.cities$ = this.store.pipe(select(fromRoot.getCities));
  }

  ngOnInit() {
    this.citiesSubscription = this.cities$.subscribe((cs: CityWeatherSetModel[]) => {
      if (cs && cs.length > 0) {
        this.lastCity = cs[0];
        this.lastCityKeys = Object.keys(cs[0]);
        // console.log(JSON.stringify(this.lastCity, undefined, 2));
      }
    });

    this.ws.start();
  }

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate();
    // return n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '';
    let index: number;
    const suffixes = ['th', 'st', 'nd', 'rd'];
    let returnValue: string;
    if (n > 0) {
      if (n > 3) {
        index = 0;
      } else {
        index = n % 10;
      }
      returnValue = suffixes[index];
    } else {
      returnValue = '';
    }
    return returnValue;
  }
}
