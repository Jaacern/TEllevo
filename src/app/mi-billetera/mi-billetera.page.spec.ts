import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiBilleteraPage } from './mi-billetera.page';

describe('MiBilleteraPage', () => {
  let component: MiBilleteraPage;
  let fixture: ComponentFixture<MiBilleteraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MiBilleteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
