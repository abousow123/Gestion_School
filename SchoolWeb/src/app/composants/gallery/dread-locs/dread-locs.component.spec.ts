import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreadLocsComponent } from './dread-locs.component';

describe('DreadLocsComponent', () => {
  let component: DreadLocsComponent;
  let fixture: ComponentFixture<DreadLocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreadLocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreadLocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
