import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lui-city-temperature',
  templateUrl: './city-temperature.component.html',
  styleUrls: ['./city-temperature.component.scss']
})
export class CityTemperatureComponent implements OnInit {
  @Input()
  temperature: number;

  @Input()
  city: string;

  constructor() {}

  ngOnInit() {}
}
