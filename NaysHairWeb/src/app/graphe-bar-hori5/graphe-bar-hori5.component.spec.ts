import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHori5Component } from './graphe-bar-hori5.component';

describe('GrapheBarHori5Component', () => {
  let component: GrapheBarHori5Component;
  let fixture: ComponentFixture<GrapheBarHori5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHori5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHori5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
