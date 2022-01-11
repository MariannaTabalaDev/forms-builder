import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElemComponent } from './select-elem.component';

describe('SelectElemComponent', () => {
  let component: SelectElemComponent;
  let fixture: ComponentFixture<SelectElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
