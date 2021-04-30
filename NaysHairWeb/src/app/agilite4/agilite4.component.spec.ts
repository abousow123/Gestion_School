import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite4Component } from './agilite4.component';

describe('Agilite4Component', () => {
  let component: Agilite4Component;
  let fixture: ComponentFixture<Agilite4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
