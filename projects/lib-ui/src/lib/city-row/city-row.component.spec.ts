import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityRowComponent } from './city-row.component';

describe('CityRowComponent', () => {
  let component: CityRowComponent;
  let fixture: ComponentFixture<CityRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
