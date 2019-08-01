import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUiComponent } from './lib-ui.component';

describe('LibUiComponent', () => {
  let component: LibUiComponent;
  let fixture: ComponentFixture<LibUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
