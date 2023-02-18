import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarCitasComponent } from './revisar-citas.component';

describe('RevisarCitasComponent', () => {
  let component: RevisarCitasComponent;
  let fixture: ComponentFixture<RevisarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
