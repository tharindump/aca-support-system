import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';

import { SubjectList } from './subject-list';
import {LecturerList} from './lecturer-result';
import { TableDataSource } from '../shared/data-source';
import {FindLecturersService} from './find-lecturers.service';

@Component({
  selector: 'app-find-lecturers',
  templateUrl: './find-lecturers.component.html',
  styleUrls: ['./find-lecturers.component.css']
})
export class FindLecturersComponent implements OnInit {

  levels = ['Level 01', 'Level 02', 'Level 03', 'Level 04'];
  selectedLevel: string;
  coursesList = SubjectList[this.selectedLevel];
  selectedCourse: string;
  displayedColumns = ['name', 'url'];
  dataSource;
  isCompleted: boolean;

  constructor(private lecturerService: FindLecturersService) { }

  ngOnInit() {
  }

  findLecturers() {
    this.isCompleted = true;
    this.lecturerService.findLecturers(this.selectedCourse).subscribe(
      lecturers => {
        this.isCompleted = false;
        this.dataSource = new TableDataSource(lecturers);
        console.log(lecturers);
      },
      err => {
        console.log(err);
        this.isCompleted = false;
      }
    );
  }

  onLevelChange(event: any) {
    // this.selectedLevel = event.target.value;
    this.coursesList = SubjectList[this.selectedLevel];
  }


}
