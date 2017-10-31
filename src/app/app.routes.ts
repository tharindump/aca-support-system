import { Routes } from '@angular/router';
import { FindLecturersComponent } from './find-lecturers/find-lecturers.component';
import { StudentComponent } from './student/student.component';
import { TimeTableComponent } from './time-table/time-table.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'find-lecturers', pathMatch: 'full' },
    { path: 'find-lecturers', component: FindLecturersComponent },
    { path: 'student', component: StudentComponent },
    { path: 'time-table', component: TimeTableComponent }
];
