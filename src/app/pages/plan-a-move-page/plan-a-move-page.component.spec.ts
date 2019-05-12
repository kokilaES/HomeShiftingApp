import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAMovePageComponent } from './plan-a-move-page.component';

describe('PlanAMovePageComponent', () => {
  let component: PlanAMovePageComponent;
  let fixture: ComponentFixture<PlanAMovePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAMovePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAMovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
