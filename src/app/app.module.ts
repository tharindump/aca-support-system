import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatProgressBarModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FindLecturersComponent } from './find-lecturers/find-lecturers.component';
import { APP_ROUTES } from './app.routes';
import { FindLecturersService } from './find-lecturers/find-lecturers.service';
import { StudentComponent } from './student/student.component';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FindLecturersComponent,
    StudentComponent,
    TimeTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatProgressBarModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    FindLecturersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
