import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaElemComponent } from './textarea-elem.component';

describe('TextareaElemComponent', () => {
  let component: TextareaElemComponent;
  let fixture: ComponentFixture<TextareaElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
