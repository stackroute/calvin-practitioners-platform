import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserInfoService {

    constructor(private http: Http) { }

    getUserDetail(done) {
        const token = Cookie.get('currentUser');
        const base64Url = token.split('.')[1];
        return done(this.decodeJWTtoken(base64Url));
    }

    getUserCommunityFromServer(member) {
        console.log('calling server for user communities ');
        const url = `/api/v1/communities/membership/${member}`;

        return this.http.get(url).catch(err => {
            return Observable.throw(err); // observable needs to be returned or exception raised
        }).map(response => response.json());
    }

    getUserCommunity(done) {
      this.getUserDetail((userDetails) => {
        this.getUserCommunityFromServer(userDetails.username).subscribe(data => {
          // console.log('user communities are ', data);
          done(data.communities);
          return;
        });
      });
    }

    /*getUserCommunity(done) {
        const token = Cookie.get('userCommunity');
        // console.log(token);
        const base64Url = token.split('.')[1];
        const comm = this.decodeJWTtoken(base64Url);
        return done(comm.communities);
    }*/

    decodeJWTtoken(payloadUrl) {
        const base64 = payloadUrl.replace('-', '+').replace('_', '/');
        const decoded = JSON.parse(window.atob(base64));
        // console.log(decoded);
        return decoded;
    }
}