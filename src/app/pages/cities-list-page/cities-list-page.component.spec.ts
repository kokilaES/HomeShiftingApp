import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesListPageComponent } from './cities-list-page.component';

describe('CitiesListPageComponent', () => {
  let component: CitiesListPageComponent;
  let fixture: ComponentFixture<CitiesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
