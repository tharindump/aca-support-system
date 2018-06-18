import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-carrer-guidance',
  templateUrl: './student-carrer-guidance.component.html',
  styleUrls: ['./student-carrer-guidance.component.css']
})
export class StudentCarrerGuidanceComponent implements OnInit {

  indexNo: string;
  predictedPath: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  getCareerPath() {
    this.studentService.getCareerPath(this.indexNo)
      .map((res: Response) => res.json())
      .subscribe(result => {
        this.predictedPath = result;
      });
  }

}
