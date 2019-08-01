import { NgModule } from '@angular/core';
import { LibUiComponent } from './lib-ui.component';
import { CityTemperatureComponent } from './city-temperature/city-temperature.component';
import { CityRowComponent } from './city-row/city-row.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LibUiComponent, CityTemperatureComponent, CityRowComponent],
  imports: [BrowserModule],
  exports: [CityTemperatureComponent, CityRowComponent]
})
export class LibUiModule {}
