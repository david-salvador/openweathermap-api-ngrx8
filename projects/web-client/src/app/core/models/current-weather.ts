export interface CityWeatherModel {
  id: number;
  city: string;
  country: string;
  date: number;
  temperature: number;
}

export interface CityWeatherSetModel {
  [id: number]: CityWeatherModel;
}

export interface ICurrentWeatherData {
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  id: number;
  name: string;
}

export interface CurrentWeatherIdBulkData {
  list: ICurrentWeatherData[];
}
