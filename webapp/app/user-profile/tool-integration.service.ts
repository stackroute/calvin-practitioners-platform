import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ToolIntegrationService {
    data;
    @Input()
    toolInfo = [];
    constructor(private _http: Http, private snackBar: MdSnackBar) { }

    getTool(toolName) {
        window.location.replace('/api/v1/toolauth/auth/'+toolName);
        // console.log('***inside component service***', toolName);
        //    return this._http
        //         .get('/api/v1/toolauth/auth/'+toolName) 
        //         .catch(err => {
        //         this.snackBar.open('server error..!!!', 'try again!', {
        //             duration: 3000
        //         });
        //         return Observable.throw(err); // observable needs to be returned or exception raised
        //     }).map(res => res.json());
    }
}