import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLecturersComponent } from './find-lecturers.component';

describe('FindLecturersComponent', () => {
  let component: FindLecturersComponent;
  let fixture: ComponentFixture<FindLecturersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLecturersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLecturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
