import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggMediComponent } from './agg-medi.component';

describe('AggMediComponent', () => {
  let component: AggMediComponent;
  let fixture: ComponentFixture<AggMediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggMediComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggMediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
