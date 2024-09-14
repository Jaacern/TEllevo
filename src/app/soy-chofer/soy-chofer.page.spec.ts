import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoyChoferPage } from './soy-chofer.page';

describe('SoyChoferPage', () => {
  let component: SoyChoferPage;
  let fixture: ComponentFixture<SoyChoferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
