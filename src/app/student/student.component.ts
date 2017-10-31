import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { StudentService } from './student.service';
import { StudentGPA } from './student-gpa';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  studentGpa: StudentGPA;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      indexNo: new FormControl('', [Validators.required,
      Validators.pattern('[0-9]{6}[a-zA-Z]')])
    });
  }

  calculateGPA() {
    const indexNo = this.studentForm.controls.indexNo.value;
    if (this.studentForm.valid) {
      this.studentService.getGpaValue(indexNo).subscribe(
        studentGPA => {
          this.studentGpa = studentGPA;
          console.log(studentGPA);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
