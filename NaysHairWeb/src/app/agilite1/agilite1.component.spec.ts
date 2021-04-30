import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite1Component } from './agilite1.component';

describe('Agilite1Component', () => {
  let component: Agilite1Component;
  let fixture: ComponentFixture<Agilite1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
