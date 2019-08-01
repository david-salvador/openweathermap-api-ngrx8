import { createReducer, on } from '@ngrx/store';
import { CityWeatherModel, CityWeatherSetModel } from '../models/current-weather';

import * as citiesActions from '../actions/cities.actions';

export interface State {
  cities: CityWeatherSetModel[];
}

const initialState: State = {
  cities: []
};

export const reducer = createReducer(
  initialState,

  on(citiesActions.actionLoadedCityWeatherSet, (state, { cityWeatherSetModel }) => {
    const newCityWeathers: CityWeatherSetModel[] = [cityWeatherSetModel].concat([
      ...state.cities
    ]);
    return { ...state, cities: newCityWeathers };
  })
);

export const getCities = (state: State) => state.cities;
