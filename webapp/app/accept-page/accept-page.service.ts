import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class acceptService {

  constructor(private http: Http) { }

//   updateUserProfile(profiledata, emailAddrs) {
//     return this.http.patch(`api/v1/users/${emailAddrs}`, profiledata).map(() =>
//             console.log('Updated Profile details', profiledata));
//   }
  getUserProfile(emailAddrs){
  return this.http.get(`api/v1/users/${emailAddrs}`).map( res => res.json());
 }
 updateMember(domain,person,role) {
 
  const headers = new Headers({
   'Content-Type': 'application/json;charset=utf-8'
  });
  const options = new RequestOptions({
   headers: headers
  });
//   const body = JSON.stringify(data);
  //console.log(body);
  const url = `/api/v1/communityMembers/memberrequests/invite/${domain}/person/${person}/${role}`;
  return this.http.patch(url,options).map(res => res.json());
 }
 
}