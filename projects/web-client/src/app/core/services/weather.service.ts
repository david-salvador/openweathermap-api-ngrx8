import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, mergeMap, tap, startWith } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import {
  CityWeatherModel,
  ICurrentWeatherData,
  CurrentWeatherIdBulkData,
  CityWeatherSetModel
} from '../models/current-weather';
import { Store } from '@ngrx/store';
import * as fromCities from '../reducers/cities.reducer';
import * as fromCitiesActions from '../actions/cities.actions';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  countries: string[] = ['Santiago', 'Buenos Aires', 'Lima', 'Sao Paulo']; // Philippines, Argentina, Peru, Brasil
  cityIds: number[] = [1687836, 3433955, 3936456, 3448439];

  constructor(private httpClient: HttpClient, private store: Store<fromCities.State>) {}

  public start() {
    interval(3000)
      .pipe(
        startWith(1),
        mergeMap(
          (): Observable<CityWeatherSetModel> =>
            this.getCurrentWeatherForCitiIds$(this.cityIds)
        ),
        tap((cityWeatherSetModel: CityWeatherSetModel) => {
          this.store.dispatch(
            fromCitiesActions.actionLoadedCityWeatherSet({
              cityWeatherSetModel
            })
          );
        })
      )
      .subscribe();
  }

  private getCurrentWeatherForCitiIds$(cityIds: number[]): Observable<CityWeatherSetModel> {
    const cityIdsSeparatedByCommaString: string = this.cityIds.join(',');
    const openweathermapUrl: string =
      `https://api.openweathermap.org/data/2.5/group?` +
      `id=${cityIdsSeparatedByCommaString}` +
      `&appid=${environment.thirdParties.weatherAppId}`;

    return this.httpClient
      .get<CurrentWeatherIdBulkData>(openweathermapUrl) // .get<ICurrentWeatherData[]>(openweathermapUrl)
      .pipe(
        map(
          (data: CurrentWeatherIdBulkData): CityWeatherModel[] =>
            this.transformToCurrentWeatherArray(data)
        ),
        map(
          (data: CityWeatherModel[]): CityWeatherSetModel =>
            this.transformToCityWeatherDictionaryEntryModel(data)
        )
      );
  }

  private transformToCurrentWeatherArray(
    data: CurrentWeatherIdBulkData
  ): CityWeatherModel[] {
    return data.list.map((i: ICurrentWeatherData) => {
      return {
        id: i.id,
        city: i.name,
        country: i.sys.country,
        // date: i.dt * 1000,
        date: new Date().getTime(),
        temperature: this.convertKelvinToCelsius(i.main.temp)
      } as CityWeatherModel;
    });
  }

  private transformToCityWeatherDictionaryEntryModel(
    data: CityWeatherModel[]
  ): CityWeatherSetModel {
    const returnValue: CityWeatherSetModel = {};
    data.forEach((cityWeatherModel: CityWeatherModel) => {
      returnValue[cityWeatherModel.id] = cityWeatherModel;
    });
    return returnValue;
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
}
