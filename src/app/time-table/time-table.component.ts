import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeTableService } from './time-table.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  subjectsList: string[];
  subjectAllocForm: FormGroup;

  constructor(private timetableService: TimeTableService) { }

  ngOnInit() {
    this.subjectsList = this.timetableService.getSubjecstList();
    this.subjectAllocForm = new FormGroup({
      selectedSubject: new FormControl(),
      noOfStudents: new FormControl()
    });
  }

  generateTimeSlot(): void { }

}
