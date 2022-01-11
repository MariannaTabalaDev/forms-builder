import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElemComponent } from './text-elem.component';

describe('TextElemComponent', () => {
  let component: TextElemComponent;
  let fixture: ComponentFixture<TextElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
