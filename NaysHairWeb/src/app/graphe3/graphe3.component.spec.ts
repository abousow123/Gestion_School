import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe3Component } from './graphe3.component';

describe('Graphe3Component', () => {
  let component: Graphe3Component;
  let fixture: ComponentFixture<Graphe3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
