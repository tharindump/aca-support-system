import { Routes } from '@angular/router';
import { FindLecturersComponent } from './find-lecturers/find-lecturers.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'find-lecturers', pathMatch: 'full' },
    { path: 'find-lecturers', component: FindLecturersComponent }
];
