import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxElemComponent } from './checkbox-elem.component';

describe('CheckboxElemComponent', () => {
  let component: CheckboxElemComponent;
  let fixture: ComponentFixture<CheckboxElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
