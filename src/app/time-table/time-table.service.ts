import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ClassTimeSlotCombination } from './class-timeslot-combination';
import { SubjectAllocation } from './subject-allocation';
import { jsonHeader } from '../shared/xhrheaders';

@Injectable()
export class TimeTableService {

  private url = 'http://localhost:5000/api/get-time-slot';

  constructor(private http: Http) { }

  getSubjecstList(): string[] {
    return subjectsList;
  }

  getTimeSlots(subjectAllocation: SubjectAllocation): Observable<ClassTimeSlotCombination> {
    const data = { 'noOfStudents': subjectAllocation.noOfStudents };
    return this.http.post(this.url, data, jsonHeader())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}


const subjectsList = [
  'Fundermentals of databases',
  'Data communication',
  'Multimedia Technologies',
  'ICT project',
  'Principles of Economics',
  'Financial Accounting',
  'Sri Lankan Studies'
];
