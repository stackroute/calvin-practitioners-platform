import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';


@Injectable()
export class UserInfoService {

    constructor() { }

    getUserDetail(done) {


        const token = Cookie.get('currentUsers');
        const base64Url = token.split('.')[1];
        return done(this.decodeJWTtoken(base64Url));


    }

    getUserCommunity(done) {

        const token = Cookie.get('userCommunity');
        console.log(token);
        const base64Url = token.split('.')[1];
        const comm = this.decodeJWTtoken(base64Url);
        return done(comm.communities);
    }

    decodeJWTtoken(payloadUrl) {

        const base64 = payloadUrl.replace('-', '+').replace('_', '/');
        const decoded = JSON.parse(window.atob(base64));
        // console.log(decoded);
        return decoded;
    }

}