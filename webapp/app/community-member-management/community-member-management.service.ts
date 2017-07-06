import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; @Injectable()
export class Memberservice {  constructor( private _http: Http) { }  getMember(domain) {
   return this._http.get(/api/v1/communityMembers/communitymembership/${domain}/members).map(() =>
   console.log('hello',domain));
 }  
}