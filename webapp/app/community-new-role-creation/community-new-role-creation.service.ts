import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class NewRoleService {
  constructor(private http: Http) { }

  listTools(domainName) {
    //console.log('In service');
    const url = '/api/v1/communitytools/'+domainName;
    //console.log(url)
    return this.http.get(url).map(res => res.json());
  }

updateTools(domainName,data) {
  // console.log(domainName);
  // console.log(data);  
  const headers = new Headers({
   'Content-Type': 'application/json;charset=utf-8'
  });
  const options = new RequestOptions({
   headers: headers
  });
  const body = JSON.stringify(data);
  //console.log(body);
  const url = '/api/v1/communityroleactions/communityrole/'+domainName;
  return this.http.post(url, body,options).map(res => res.json());
 }
}
