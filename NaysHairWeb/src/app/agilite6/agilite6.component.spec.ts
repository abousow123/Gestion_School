import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite6Component } from './agilite6.component';

describe('Agilite6Component', () => {
  let component: Agilite6Component;
  let fixture: ComponentFixture<Agilite6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
