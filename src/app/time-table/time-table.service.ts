import { Injectable } from '@angular/core';

@Injectable()
export class TimeTableService {

  constructor() { }

  getSubjecstList(): string[] {
    return subjectsList;
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
