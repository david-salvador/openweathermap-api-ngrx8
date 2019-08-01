import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTemperatureComponent } from './city-temperature.component';

describe('CityTemperatureComponent', () => {
  let component: CityTemperatureComponent;
  let fixture: ComponentFixture<CityTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
