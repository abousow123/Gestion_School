import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe10Component } from './graphe10.component';

describe('Graphe10Component', () => {
  let component: Graphe10Component;
  let fixture: ComponentFixture<Graphe10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
