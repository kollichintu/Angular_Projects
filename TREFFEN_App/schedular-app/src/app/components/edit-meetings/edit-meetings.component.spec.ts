import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeetingsComponent } from './edit-meetings.component';

describe('EditMeetingsComponent', () => {
  let component: EditMeetingsComponent;
  let fixture: ComponentFixture<EditMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
