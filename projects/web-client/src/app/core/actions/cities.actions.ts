import { createAction, props } from '@ngrx/store';
import { CityWeatherSetModel } from '../models/current-weather';

export const actionLoadedCityWeatherSet = createAction(
  '[API/Weather @Recurrent] Loaded cityWeatherSet',
  props<{ cityWeatherSetModel: CityWeatherSetModel }>()
);
