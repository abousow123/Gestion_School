import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheBarHoriComponent } from './graphe-bar-hori.component';

describe('GrapheBarHoriComponent', () => {
  let component: GrapheBarHoriComponent;
  let fixture: ComponentFixture<GrapheBarHoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheBarHoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheBarHoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
