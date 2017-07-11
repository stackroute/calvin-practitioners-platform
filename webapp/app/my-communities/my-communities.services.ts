
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserCommunities {
 
 constructor (private http: Http) { }
 member = "mr.w" ;
    getCommunity(member) {
    
    console.log('member...',member);
    // const url = `/api/v1/communities/membership/${member}`;
    const url = `/api/v1/communities/membership/${member}`;

    return this.http.get(url).map( response => response.json());
    

  }

}
