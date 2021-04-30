import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe4Component } from './graphe4.component';

describe('Graphe4Component', () => {
  let component: Graphe4Component;
  let fixture: ComponentFixture<Graphe4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
