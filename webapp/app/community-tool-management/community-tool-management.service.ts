import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolService {
    constructor(private http: Http) { }

    getTools(domainName) {
        return this.http
            .get('/api/v1/communitytools/' + domainName)
            .map((response: Response) => response.json());
    }
}

