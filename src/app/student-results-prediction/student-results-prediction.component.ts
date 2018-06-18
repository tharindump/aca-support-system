import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-results-prediction',
  templateUrl: './student-results-prediction.component.html',
  styleUrls: ['./student-results-prediction.component.css']
})
export class StudentResultsPredictionComponent implements OnInit {

  subjects = ['Multimedia_Systems',
    'Decision_Management',
    'Natural_Language_Processing',
    'Artificial_Neural_Networks_And_Evolutionary_Computing',
    'Mobile_And_Wireless_Networks',
    'Computer_And_Network_Security',
    'Cluster_Computing',
    'Advanced_Database_Management_Systems'];
  selectedSubject: string;
  indexNo: string;
  predictedResult: any;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  getPredictedResult() {
    this.studentService.getCPredictedResult(this.indexNo, this.selectedSubject)
      .map((res: Response) => res.json())
      .subscribe(result => {
        this.predictedResult = result;
      });
  }

}
