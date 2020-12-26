import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConroeComponent } from './conroe.component';

describe('ConroeComponent', () => {
  let component: ConroeComponent;
  let fixture: ComponentFixture<ConroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConroeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
