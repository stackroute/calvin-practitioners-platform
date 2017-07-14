import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoleListServices {
  
  constructor(private http: Http) { }



  listUniqueRoles(domainname){
     console.log('In member-edit service');
    const url = '/api/v1/communityroleactions/'+domainname+'?onlyroles=true';
    console.log(url)
    return this.http.get(url).map(res => res.json());
  } 

updateRole(domain,data) {
  // console.log(domain);
  // console.log(role);
  // console.log(data);
  const headers = new Headers({
   'Content-Type': 'application/json;charset=utf-8'
  });
  const options = new RequestOptions({
   headers: headers
  });
  const body = JSON.stringify(data);
  //console.log(body);
  const url = `/api/v1/communityroleactions/communitymembership/${domain}/members`;
  return this.http.patch(url, body,options).map(res => res.json());
 }
}
