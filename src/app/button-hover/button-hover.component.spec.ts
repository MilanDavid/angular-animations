import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHoverComponent } from './button-hover.component';

describe('ButtonHoverComponent', () => {
  let component: ButtonHoverComponent;
  let fixture: ComponentFixture<ButtonHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
