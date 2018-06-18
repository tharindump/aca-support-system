import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCarrerGuidanceComponent } from './student-carrer-guidance.component';

describe('StudentCarrerGuidanceComponent', () => {
  let component: StudentCarrerGuidanceComponent;
  let fixture: ComponentFixture<StudentCarrerGuidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCarrerGuidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCarrerGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
