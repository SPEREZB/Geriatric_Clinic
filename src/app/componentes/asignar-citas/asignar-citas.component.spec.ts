import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCitasComponent } from './asignar-citas.component';

describe('AsignarCitasComponent', () => {
  let component: AsignarCitasComponent;
  let fixture: ComponentFixture<AsignarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
