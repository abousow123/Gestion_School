import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori1Component } from './graphe-bar-hori1.component';

describe('GrapheBarHori1Component', () => {
  let component: GrapheBarHori1Component;
  let fixture: ComponentFixture<GrapheBarHori1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
