import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori3Component } from './graphe-bar-hori3.component';

describe('GrapheBarHori3Component', () => {
  let component: GrapheBarHori3Component;
  let fixture: ComponentFixture<GrapheBarHori3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
