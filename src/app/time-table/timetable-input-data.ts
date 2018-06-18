import {LecturerPreferences} from './lecturer-preferences';

export class TimetableInputForm {
    level: string;
    semester: string;
    subject: string;
    noOfStudents: number;
    lecturer: string;
    times: string;
    days:string[];
   
    constructor() {
        this.days = [];

    }
}