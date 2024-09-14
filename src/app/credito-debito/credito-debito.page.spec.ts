import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreditoDebitoPage } from './credito-debito.page';

describe('CreditoDebitoPage', () => {
  let component: CreditoDebitoPage;
  let fixture: ComponentFixture<CreditoDebitoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoDebitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
