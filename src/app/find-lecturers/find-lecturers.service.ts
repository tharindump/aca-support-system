import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Lecturer } from '../model/lecturer';
import {jsonHeader} from '../shared/xhrheaders';

@Injectable()
export class FindLecturersService {

  private url = 'http://localhost:5000/api/get-lecturers';

  constructor(private http: Http) { }

  findLecturers(course: string): Observable<Lecturer[]> {
    const data = {'course': course};
    return this.http.post(this.url, data, jsonHeader())
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
