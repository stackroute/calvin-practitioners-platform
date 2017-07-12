import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

 @Injectable()
 export class InvitationServices {

  constructor( private _http: Http) { }

  getRole(domain) {
    return this._http.get(`/api/v1/communityMembers/communitymembership/${domain}/members`).map(res => res.json());
  }

  inviteMember(inviteInfo, domain){
    const url = `/api/v1/communityMembers/communitymembership/membership`;
    return this._http.post(url,inviteInfo);
  }
}
