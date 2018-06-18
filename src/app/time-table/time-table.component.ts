import { TableDataSource } from '../shared/data-source';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TimeTableService } from './time-table.service';
import { SubjectAllocation } from './subject-allocation';
import { TimetableInputForm } from './timetable-input-data';
import { LecturerPreferences } from './lecturer-preferences';
import { CheckBoxData } from './check-box-data';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})

export class TimeTableComponent implements OnInit {

  subjectsList: string[];
  subjectAllocForm: FormGroup;
  selectedAllocation: SubjectAllocation;
  selectedDays: CheckBoxData[];
  selectedTimeSlot: string;
  splitToGroups: string;
  isSplitGroupEnable: boolean;
  noOfGroups: number;
  timetableInputData: TimetableInputForm;
  timetableInputDataArr: TimetableInputForm[];
  lecturerPreferences: LecturerPreferences;
  displayedColumns = ['subject', 'type', 'subjtype', 'noOfStudents', 'time', 'days'];
  dataSource;
  jsonData: any;
  semester: string;
  sampleData;
  viewTimeTable = false;

  timeslotsDisplay = ['8.15-10.15', '10.30-12.30', '1.15-3.15', '3.30-5.30', '5.30-7.30'];
  subjectsPerTimeslot = [0, 1, 2, 3];
  tableData = {
    'monday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'tuesday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'wednesday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'thursday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    },
    'friday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    }
    ,
    'saturday': {
      '8.15-10.15': [],
      '10.30-12.30': [],
      '1.15-3.15': [],
      '3.30-5.30': [],
      '5.30-7.30': [],
    }
  };


  constructor(private timetableService: TimeTableService) { }

  ngOnInit() {
    this.isSplitGroupEnable = false;
    console.clear();
  }

  generateTimeTable(): void {
    this.timetableService.getTimeSlots(this.jsonData)
      .subscribe(result => {
        this.dataSource = null;
        this.sampleData = result;
        console.log(this.sampleData);
        this.arrangeData(result);
        this.viewTimeTable = true;
      });
  }

  getSemesterJSONData() {
    this.timetableService.getInputJSONData(this.semester)
      .subscribe(response => {
        this.jsonData = response;
        this.dataSource = new TableDataSource(this.jsonData.data);
      });

  }

  arrangeData(sampleData) {
    console.log(sampleData);
    for (let index = 0; index < sampleData.length; index++) {
      const element = this.sampleData[index];
      for (let timeslotIndex = 0; timeslotIndex < element.timeslot.length; timeslotIndex++) {
        const elementTimeslot = element.timeslot[timeslotIndex];

        if (elementTimeslot.hasOwnProperty('day') && elementTimeslot.hasOwnProperty('timeslot')) {

          if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.monday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.monday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.monday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.monday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Monday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.monday['5.30-7.30'].push(element.subject);
          }

          if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.tuesday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.tuesday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.tuesday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.tuesday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Tuesday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.tuesday['5.30-7.30'].push(element.subject);
          }

          if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.wednesday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.wednesday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.wednesday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.wednesday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Wednesday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.wednesday['5.30-7.30'].push(element.subject);
          }

          if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.thursday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.thursday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.thursday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.thursday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Thursday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.thursday['5.30-7.30'].push(element.subject);
          }

          if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.friday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.friday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.friday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.friday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Friday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.friday['5.30-7.30'].push(element.subject);
          }

          if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '8.15-10.15') {
            this.tableData.saturday['8.15-10.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '10.30-12.30') {
            this.tableData.saturday['10.30-12.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '1.15-3.15') {
            this.tableData.saturday['1.15-3.15'].push(element.subject);
          } else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '3.30-5.30') {
            this.tableData.saturday['3.30-5.30'].push(element.subject);
          } else if (elementTimeslot.day === 'Saturday' && elementTimeslot.timeslot === '5.30-7.30') {
            this.tableData.saturday['5.30-7.30'].push(element.subject);
          }
        }

      }

    }

    console.log(this.tableData);
  }

}
