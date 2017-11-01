import { TableDataSource } from '../shared/data-source';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeTableService } from './time-table.service';
import { SubjectAllocation } from './subject-allocation';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  subjectsList: string[];
  subjectAllocForm: FormGroup;
  selectedAllocation: SubjectAllocation;
  displayedColumns = ['roomID', 'timeSlotID', 'status'];
  dataSource;

  constructor(private timetableService: TimeTableService) { }

  ngOnInit() {
    this.subjectsList = this.timetableService.getSubjecstList();
    this.subjectAllocForm = new FormGroup({
      selectedSubject: new FormControl(),
      noOfStudents: new FormControl()
    });
  }

  generateTimeSlot(): void {
    this.selectedAllocation = new SubjectAllocation();
    this.selectedAllocation.noOfStudents = this.subjectAllocForm.controls.noOfStudents.value;
    this.selectedAllocation.subject = this.subjectAllocForm.controls.selectedSubject.value;
    this.timetableService.getTimeSlots(this.selectedAllocation).subscribe(
      combinations => {
        this.dataSource = new TableDataSource(combinations);
        console.log(combinations);
      },
      err => {
        console.log(err);
      }
    );
  }

}
