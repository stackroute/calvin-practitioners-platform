import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 @Injectable()
 export class Roleservice {

  constructor( private _http: Http) { }

  getRole(domain) {
    return this._http.get(`/api/v1/communityMembers/communitymembership/${domain}/members`).map(res => res.json());
  }  
}
