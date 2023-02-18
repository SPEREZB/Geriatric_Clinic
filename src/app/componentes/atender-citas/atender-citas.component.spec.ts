import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderCitasComponent } from './atender-citas.component';

describe('AtenderCitasComponent', () => {
  let component: AtenderCitasComponent;
  let fixture: ComponentFixture<AtenderCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtenderCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtenderCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
