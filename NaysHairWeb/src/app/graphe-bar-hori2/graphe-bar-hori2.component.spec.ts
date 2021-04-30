import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori2Component } from './graphe-bar-hori2.component';

describe('GrapheBarHori2Component', () => {
  let component: GrapheBarHori2Component;
  let fixture: ComponentFixture<GrapheBarHori2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
