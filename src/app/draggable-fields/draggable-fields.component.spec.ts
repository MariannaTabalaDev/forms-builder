import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableFieldsComponent } from './draggable-fields.component';

describe('DraggableFieldsComponent', () => {
  let component: DraggableFieldsComponent;
  let fixture: ComponentFixture<DraggableFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
