import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDietasComponent } from './crear-dietas.component';

describe('CrearDietasComponent', () => {
  let component: CrearDietasComponent;
  let fixture: ComponentFixture<CrearDietasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDietasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
