import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {
    constructor(private http: Http) { }
    getMember(domain) {
        //console.log("ssdf",domain)
        return this.http
            .get('/api/v1/community/communitymembership/' + domain + '/members')
            .map((response: Response) => response.json());

    }

}
