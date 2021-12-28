import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingChoiseComponent } from './styling-choise.component';

describe('StylingChoiseComponent', () => {
  let component: StylingChoiseComponent;
  let fixture: ComponentFixture<StylingChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingChoiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StylingChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
