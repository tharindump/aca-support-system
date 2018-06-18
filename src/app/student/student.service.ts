import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StudentGPA } from './student-gpa';
import { jsonHeader } from '../shared/xhrheaders';

@Injectable()
export class StudentService {

    private url = 'http://localhost:5000/api/';

    constructor(private http: Http) { }

    getCareerPath(indexNo: string): Observable<any> {
        const data = { 'indexNo': indexNo };
        const careerPathUrl = this.url + 'student/career-path';
        return this.http.post(careerPathUrl, data, jsonHeader());
    }

    getCPredictedResult(indexNo: string, selectedSubject: string): Observable<any> {
        const data = { 'indexNo': indexNo, 'selectedSubject': selectedSubject };
        const careerPathUrl = this.url + 'student/predict-results';
        return this.http.post(careerPathUrl, data, jsonHeader());
    }

    getGpaValue(indexNo: string): Observable<StudentGPA> {
        const data = { 'indexNo': indexNo };
        return this.http.post(this.url, data, jsonHeader())
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
    }
}
