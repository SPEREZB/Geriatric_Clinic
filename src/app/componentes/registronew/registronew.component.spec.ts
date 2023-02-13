import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistronewComponent } from './registronew.component';

describe('RegistronewComponent', () => {
  let component: RegistronewComponent;
  let fixture: ComponentFixture<RegistronewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistronewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistronewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
