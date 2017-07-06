
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {

constructor() {}

getUserDetail(done){

    let cookie=Cookie.get('currentUser');
    //  alert('cookie is '+cookie); 
    let data=atob(cookie.split('.')[1]);
    // alert(data);
   
    return  done(JSON.parse(data));
}

getUserCommunity() {

     
}

}