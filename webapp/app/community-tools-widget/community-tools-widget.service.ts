import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolsService {
    constructor(private http: Http) { }

    getTools(domainName) {
    console.log('In service');
    const url = '/api/v1/communitytools/'+domainName;
    console.log(url)
    return this.http.get(url).map(res => res.json());
  }
}

