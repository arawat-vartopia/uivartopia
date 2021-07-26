import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprogramModalComponent } from './editprogram-modal.component';

describe('EditprogramModalComponent', () => {
  let component: EditprogramModalComponent;
  let fixture: ComponentFixture<EditprogramModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprogramModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprogramModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
