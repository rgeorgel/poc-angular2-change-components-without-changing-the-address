import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compoent2Component } from './compoent2.component';

describe('Compoent2Component', () => {
  let component: Compoent2Component;
  let fixture: ComponentFixture<Compoent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compoent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compoent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
