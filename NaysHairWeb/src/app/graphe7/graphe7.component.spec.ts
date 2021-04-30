import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe7Component } from './graphe7.component';

describe('Graphe7Component', () => {
  let component: Graphe7Component;
  let fixture: ComponentFixture<Graphe7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
