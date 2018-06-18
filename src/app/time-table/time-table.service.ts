import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ClassTimeSlotCombination } from './class-timeslot-combination';
import { SubjectAllocation } from './subject-allocation';
import { jsonHeader } from '../shared/xhrheaders';
import { CheckBoxData } from './check-box-data';
import { TimetableInputForm } from './timetable-input-data';
import { concat } from 'rxjs/observable/concat';

@Injectable()
export class TimeTableService {

  private url = 'http://127.0.0.1:5000/api/get-timeslots';

  constructor(private http: Http) { }

  getSubjecstList(): string[] {
    return subjectsList;
  }

  getTimeSlots(data: any): Observable<ClassTimeSlotCombination> {
      return this.http.post(this.url, data, jsonHeader())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  getdDaysOfWeek(): CheckBoxData[] {
    const data: CheckBoxData[] = [];
    daysOfWeek.forEach(element => {
      data.push(element);
    });
    return data;
  }

  getTimeSlotSet(): CheckBoxData[] {
    const data: CheckBoxData[] = [];
    timeslots.forEach(element => {
      data.push(element);
    });
    return data;
  }

  getInputJSONData(semester: string): Observable<any> {
    const url = "assets/"+semester+".json";
    console.log(url);
    return this.http.get(url)
      .map((res: Response) => {
        console.log(res.json())
        return res.json()
      });
  }

}

const timeslots = [
  { property: 'Morning 8.15 - 10.15', value: false},
  { property: 'Morning 10.30 - 12.30', value: false},
  { property: 'Evening 1.15 - 3.15', value: false},
  { property: 'Evening 3.30 - 5.30', value: false},
  { property: 'Evening 5.30 - 7.30', value: false}
];

const daysOfWeek = [
  { property: 'Moday', value: false},
  { property: 'Tuesday', value: false},
  { property: 'Wednesday', value: false},
  { property: 'Thursday', value: false},
  { property: 'Friday', value: false},
  { property: 'Saturday', value: false}
];

const subjectsList = [
  'Fundermentals of databases',
  'Data communication',
  'Multimedia Technologies',
  'ICT project',
  'Principles of Economics',
  'Financial Accounting',
  'Sri Lankan Studies'
];
