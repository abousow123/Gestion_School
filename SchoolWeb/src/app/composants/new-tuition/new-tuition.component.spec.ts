import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTuitionComponent } from './new-tuition.component';

describe('NewTuitionComponent', () => {
  let component: NewTuitionComponent;
  let fixture: ComponentFixture<NewTuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTuitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
