import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDoctorComponent } from './panel-doctor.component';

describe('PanelDoctorComponent', () => {
  let component: PanelDoctorComponent;
  let fixture: ComponentFixture<PanelDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
