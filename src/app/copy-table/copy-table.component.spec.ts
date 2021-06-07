import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTableComponent } from './copy-table.component';

describe('CopyTableComponent', () => {
  let component: CopyTableComponent;
  let fixture: ComponentFixture<CopyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
