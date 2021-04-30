import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori4Component } from './graphe-bar-hori4.component';

describe('GrapheBarHori4Component', () => {
  let component: GrapheBarHori4Component;
  let fixture: ComponentFixture<GrapheBarHori4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
