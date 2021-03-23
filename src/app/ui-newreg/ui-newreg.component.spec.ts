import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNewregComponent } from './ui-newreg.component';

describe('UiNewregComponent', () => {
  let component: UiNewregComponent;
  let fixture: ComponentFixture<UiNewregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNewregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNewregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
