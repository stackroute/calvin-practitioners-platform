import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MdSnackBar } from '@angular/material';

 @Injectable()
 export class InvitationServices {

  constructor( private http: Http,public snackBar: MdSnackBar) { }

  getRole(domain) {
    return this.http.get(`/api/v1/communityMembers/communitymembership/${domain}/members`).map(res => res.json());
  }

  inviteMember(inviteInfo, domain){
    const headers = new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    });
    const options = new RequestOptions({
      headers: headers
    });
    const body = JSON.stringify(inviteInfo);    
    const url = `/api/v1/communityMembers/communitymembership/${domain}/members`;
    return this.http.post(url, body, options).catch(err => {
      this.snackBar.open('Sending Invitation failed', 'X', {
        duration: 3000
      });
      return Observable.throw(err);
    })
    .map(res => res.json());
  }
  
  listUniqueRoles(domain){
   const url = '/api/v1/communityroleactions/'+domain+'?onlyroles=true';
   return this.http.get(url).map(res => res.json());
 }
}
