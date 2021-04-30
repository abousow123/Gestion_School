import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe5Component } from './graphe5.component';

describe('Graphe5Component', () => {
  let component: Graphe5Component;
  let fixture: ComponentFixture<Graphe5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
