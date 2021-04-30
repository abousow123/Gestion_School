import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe8Component } from './graphe8.component';

describe('Graphe8Component', () => {
  let component: Graphe8Component;
  let fixture: ComponentFixture<Graphe8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
