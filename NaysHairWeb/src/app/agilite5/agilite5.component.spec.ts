import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agilite5Component } from './agilite5.component';

describe('Agilite5Component', () => {
  let component: Agilite5Component;
  let fixture: ComponentFixture<Agilite5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agilite5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agilite5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
