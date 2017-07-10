import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoleServices {
  constructor(private http: Http) { }

  listRoles(domainName) {
    console.log('In service');
    const url = '/api/v1/communityroleactions/communityrole/'+domainName;
    console.log(url)
    return this.http.get(url).map(res => res.json());
  }

  listUniqueRoles(domainname){
     console.log('In service');
    const url = '/api/v1/communityroleactions/'+domainname+'?onlyroles=true';
    console.log(url)
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
  const url = 'http://localhost:3000/api/v1/communityroleactions/';
  return this.http.patch(url, body,options).map(res => res.json());
 }
}
