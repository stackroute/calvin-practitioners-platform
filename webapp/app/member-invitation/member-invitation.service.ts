import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

 @Injectable()
 export class InvitationServices {

  constructor( private http: Http) { }

  getRole(domain) {
    return this.http.get(`/api/v1/communityMembers/communitymembership/${domain}/members`).map(res => res.json());
  }

  inviteMember(inviteInfo, domain){
    const url = '/api/v1/communityMembers/communitymembership/members';
    return this.http.post(url,inviteInfo);
  }
  
  listUniqueRoles(domainname) {    
    const url = '/api/v1/communityroles/'+domainname+'?onlyroles=true';
    return this.http.get(url).map(res => res.json());
  }  
}
