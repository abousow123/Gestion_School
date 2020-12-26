import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwistComponent } from './twist.component';

describe('TwistComponent', () => {
  let component: TwistComponent;
  let fixture: ComponentFixture<TwistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
