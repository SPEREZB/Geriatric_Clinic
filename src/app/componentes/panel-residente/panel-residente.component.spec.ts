import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelResidenteComponent } from './panel-residente.component';

describe('PanelResidenteComponent', () => {
  let component: PanelResidenteComponent;
  let fixture: ComponentFixture<PanelResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelResidenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
