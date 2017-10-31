import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class TableDataSource extends DataSource<any> {

    data: any;

    constructor(data: any) {
        super();
        this.data = data;
    }

    connect(): Observable<any> {
        return Observable.of(this.data);
    }

    disconnect() { }

}
