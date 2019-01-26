import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingFrogComponent } from './jumping-frog.component';

describe('JumpingFrogComponent', () => {
  let component: JumpingFrogComponent;
  let fixture: ComponentFixture<JumpingFrogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpingFrogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingFrogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
