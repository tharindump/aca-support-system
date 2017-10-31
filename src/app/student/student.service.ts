import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StudentGPA } from './student-gpa';
import { jsonHeader } from '../shared/xhrheaders';

@Injectable()
export class StudentService {

    private url = 'http://localhost:5000/api/get-gpa';

    constructor(private http: Http) { }

    getGpaValue(indexNo: string): Observable<StudentGPA> {
        const data = { 'indexNo': indexNo };
        return this.http.post(this.url, data, jsonHeader())
            .map((res: Response) => res.json())
            .catch((err: any) => Observable.throw(err.json().error || 'Server Error'));
    }
}
