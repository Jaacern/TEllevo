import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaTuCuentaPage } from './crea-tu-cuenta.page';

describe('CreaTuCuentaPage', () => {
  let component: CreaTuCuentaPage;
  let fixture: ComponentFixture<CreaTuCuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaTuCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
