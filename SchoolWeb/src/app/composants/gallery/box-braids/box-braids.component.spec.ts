import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBraidsComponent } from './box-braids.component';

describe('BoxBraidsComponent', () => {
  let component: BoxBraidsComponent;
  let fixture: ComponentFixture<BoxBraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBraidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
