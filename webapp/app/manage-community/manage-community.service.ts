import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
 export class updateSpecificCommunityService{

constructor(private http: Http) { }

  updateSpecificCommunity(Form, domain){

  const url = `/api/v1/communities/communities/${domain}`;
  return this.http.patch(url, Form).map(() =>
  console.log('angular service after patch ',Form));
  
 }
 }
