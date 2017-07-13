import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

    @Injectable()
    export class CommunityProfileService {
      counter = true;

    constructor(private http: Http) { }

    getCommunity(domain) {
      
    const url = `/api/v1/communities/communities/${domain}`;
    return this.http.get(url).map( response => response.json());
  }
}
