import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResultsPredictionComponent } from './student-results-prediction.component';

describe('StudentResultsPredictionComponent', () => {
  let component: StudentResultsPredictionComponent;
  let fixture: ComponentFixture<StudentResultsPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentResultsPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentResultsPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
