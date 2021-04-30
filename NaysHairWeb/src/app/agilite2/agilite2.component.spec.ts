import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite2Component } from './agilite2.component';

describe('Agilite2Component', () => {
  let component: Agilite2Component;
  let fixture: ComponentFixture<Agilite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
