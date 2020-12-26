import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrochetComponent } from './crochet.component';

describe('CrochetComponent', () => {
  let component: CrochetComponent;
  let fixture: ComponentFixture<CrochetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrochetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrochetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
