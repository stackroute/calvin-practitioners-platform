import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';


@Injectable()
export class UserInfoService {

    constructor() { }

    getUserDetail(done) {


        const token = Cookie.get('currentUser');
        const base64Url = token.split('.')[1];
        return done(this.decodeJWTtoken(base64Url));


    }


    getUserCommunity(done) {

        const token = Cookie.get('userCommunity');
        const base64Url = token.split('.')[1];
        const comm = this.decodeJWTtoken(base64Url);
        return done(comm.communityDetails);
    }

    decodeJWTtoken(payloadUrl) {

        const base64 = payloadUrl.replace('-', '+').replace('_', '/');
        const decoded = JSON.parse(window.atob(base64));
        return decoded;
    }

}