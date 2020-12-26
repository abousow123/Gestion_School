import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewInComponent } from './sew-in.component';

describe('SewInComponent', () => {
  let component: SewInComponent;
  let fixture: ComponentFixture<SewInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
