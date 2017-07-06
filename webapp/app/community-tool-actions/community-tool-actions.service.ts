import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToolActions {
 constructor(private http: Http) {}

 listTools(domain) {

  console.log('In service');
  const url = '/api/v1/communityTools/';
  return this.http.get(url).map(res => res.json());
 }
 updateTools(data) {
  const headers = new Headers({
   'Content-Type': 'application/json;charset=utf-8'
  });
  const options = new RequestOptions({
   headers: headers
  });
  const body = JSON.stringify(data);
  console.log(body);
  const url = 'http://localhost:3000/api/v1/communityRoles/';
  return this.http.patch(url, body,options).map(res => res.json());
 }

}

