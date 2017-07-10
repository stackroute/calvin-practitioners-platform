import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';


@Injectable()
export class UserInfoService {

constructor() {}

getUserDetail(done){


     const token= Cookie.get('currentUser');
    //  console.log('token is ....'+token);
     const base64Url = token.split('.')[1];
    //  console.log('base64',base64Url);
     const base64 = base64Url.replace('-', '+').replace('_', '/');
     const decoded= JSON.parse(window.atob(base64));   
    //  console.log('decoded.....',decoded);  
     return done(decoded);


}


getUserCommunity() {

     
}

}