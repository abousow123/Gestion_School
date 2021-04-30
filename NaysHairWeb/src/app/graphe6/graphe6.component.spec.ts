import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphe6Component } from './graphe6.component';

describe('Graphe6Component', () => {
  let component: Graphe6Component;
  let fixture: ComponentFixture<Graphe6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphe6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
