import { Component, OnInit, Input } from '@angular/core';
import { format } from 'date-fns';
// import { CityWeatherDictionaryEntryModel } from 'projects/web-client/src/app/core/models/current-weather';

@Component({
  selector: 'lui-city-row',
  templateUrl: './city-row.component.html',
  styleUrls: ['./city-row.component.scss']
})
export class CityRowComponent implements OnInit {
  // citiesEntry: CityWeatherDictionaryEntryModel;
  @Input()
  citiesEntry: any;

  @Input()
  isFirst: boolean;

  cityNames: string[] = [];
  cityTemperatures: number[] = [];
  cityDate: string;
  cityTime: string;

  constructor() {}

  ngOnInit() {
    const keys: string[] = Object.keys(this.citiesEntry);
    keys.forEach((key: string) => {
      // this.cityDate = new Date(this.citiesEntry[key].date); //
      const measureDate: Date = new Date(this.citiesEntry[key].date);
      this.cityDate = format(measureDate, 'DD/MMM/YYYY');
      this.cityTime = format(measureDate, 'HH:mm:ss');
      this.cityNames.push(this.citiesEntry[key].city);
      this.cityTemperatures.push(this.citiesEntry[key].temperature);
    });
  }
}
