import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori6Component } from './graphe-bar-hori6.component';

describe('GrapheBarHori6Component', () => {
  let component: GrapheBarHori6Component;
  let fixture: ComponentFixture<GrapheBarHori6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
