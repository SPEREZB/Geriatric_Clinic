import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResidenteHorariosComponent } from './panel-residente-horarios.component';

describe('PanelResidenteHorariosComponent', () => {
  let component: PanelResidenteHorariosComponent;
  let fixture: ComponentFixture<PanelResidenteHorariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelResidenteHorariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResidenteHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
