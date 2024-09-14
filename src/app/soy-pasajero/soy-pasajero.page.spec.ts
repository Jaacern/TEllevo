import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoyPasajeroPage } from './soy-pasajero.page';

describe('SoyPasajeroPage', () => {
  let component: SoyPasajeroPage;
  let fixture: ComponentFixture<SoyPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
