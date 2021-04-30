import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite7Component } from './agilite7.component';

describe('Agilite7Component', () => {
  let component: Agilite7Component;
  let fixture: ComponentFixture<Agilite7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
