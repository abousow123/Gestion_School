import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite3Component } from './agilite3.component';

describe('Agilite3Component', () => {
  let component: Agilite3Component;
  let fixture: ComponentFixture<Agilite3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
