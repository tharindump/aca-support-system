import { Routes, RouterModule } from '@angular/router';
import { FindLecturersComponent } from './find-lecturers/find-lecturers.component';
import { StudentComponent } from './student/student.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { StudentCarrerGuidanceComponent } from './student-carrer-guidance/student-carrer-guidance.component';
import { StudentResultsPredictionComponent } from './student-results-prediction/student-results-prediction.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'find-lecturers', pathMatch: 'full' },
    { path: 'find-lecturers', component: FindLecturersComponent },
    { path: 'student', component: StudentComponent },
    { path: 'time-table', component: TimeTableComponent },
    { path: 'career-guidance', component: StudentCarrerGuidanceComponent },
    { path: 'results-predictions', component: StudentResultsPredictionComponent }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES, {useHash: false});
