import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class SidenavService {

  constructor(private http: Http) { }

  updateUserProfile(profiledata, emailAddrs) {
    console.log('helloooooooooooooooo',profiledata);
    return this.http.patch(`api/v1/users/${emailAddrs}`, profiledata).map(() =>
            console.log('Updated Profile details', profiledata));
  }
  getUserProfile(emailAddrs){
    console.log("dfhdjfhdjfhjd",emailAddrs)
  return this.http.get(`api/v1/users/${emailAddrs}`).map( res => res.json());
 }
 
}
