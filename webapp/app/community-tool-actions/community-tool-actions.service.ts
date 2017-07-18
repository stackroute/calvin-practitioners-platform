import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar} from '@angular/material';
import 'rxjs/Rx';

@Injectable()
export class ToolActions {

  constructor(private http: Http,private snackBar:MdSnackBar) { }
  
listTools(domainName) {
 const url = '/api/v1/communitytools/' + domainName;
 return this.http.get(url).catch(err => {
  this.snackBar.open('server error..!!!', 'please try again later!', {
   duration: 3000
  });
  return Observable.throw(err); // observable needs to be returned or exception raised
 }).map(res => res.json());
}

updateTools(domain, role, data) {
 const headers = new Headers({
  'Content-Type': 'application/json;charset=utf-8'
 });
 const options = new RequestOptions({
  headers: headers
 });
 const body = JSON.stringify(data);
 const url = '/api/v1/communityroleactions/communityrole/' + domain + '/roles/' + role;
 return this.http.patch(url, body, options)
  .catch(err => {
   this.snackBar.open('Please try again later..!!!', 'try again!', {
    duration: 3000
   });
   return Observable.throw(err); // observable needs to be returned or exception raised
  })
  .map(res => res.json());
}
}