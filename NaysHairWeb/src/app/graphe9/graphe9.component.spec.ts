import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe9Component } from './graphe9.component';

describe('Graphe9Component', () => {
  let component: Graphe9Component;
  let fixture: ComponentFixture<Graphe9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
