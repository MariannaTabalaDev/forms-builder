import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonElemComponent } from './button-elem.component';

describe('ButtonElemComponent', () => {
  let component: ButtonElemComponent;
  let fixture: ComponentFixture<ButtonElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
