import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{Http,Response, Headers, RequestOptions}from "@angular/http";
import 'rxjs/add/operator/map';

 @Injectable()
 export class Memberservice {

  constructor( private _http: Http) { }

  getMember(domain) {
    return this._http.get(`/api/v1/communityMembers/communitymembership/${domain}/members`).map(res => res.json());
  }  
   deleteMember(domain,data) {
    
    let body = JSON.stringify(data);

    console.log(".....",body);
    console.log("sdaaa",domain)
    let url =`/api/v1/communityMembers/communitymembership/${domain}/members`;
   let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
  let options = new RequestOptions({ headers: headers,
  body:body });
    console.log(body)
    return this._http.delete(url,options).map(res => res.json());
  }  
}
  
