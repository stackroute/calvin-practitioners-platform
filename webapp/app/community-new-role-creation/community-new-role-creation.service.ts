import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar} from '@angular/material';
import 'rxjs/Rx';

@Injectable()
export class NewRoleService {
  constructor(private http: Http,private snackBar:MdSnackBar) { }

  listTools(domainName) {
    //console.log('In service');
    const url = '/api/v1/communitytools/'+domainName;
    //console.log(url)
    return this.http.get(url).catch(err => {
                this.snackBar.open('server error..!!!', 'please try again later!', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map(res => res.json());
  }

updateTools(domainName,data) {
  // console.log(domainName);
  // console.log(data);  
  const headers = new Headers({
   'Content-Type': 'application/json;charset=utf-8'
  });
  const options = new RequestOptions({
   headers: headers
  });
  const body = JSON.stringify(data);
  //console.log(body);
  const url = '/api/v1/communityroleactions/communityrole/'+domainName;
  return this.http.post(url, body,options).catch(err => {
                this.snackBar.open('server error..!!!', 'please try again later!', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map(res => res.json());
 }
   listUniqueRoles(domainname) {
    //console.log('In service');
    const url = '/api/v1/communityroleactions/' + domainname + '?onlyroles=true';
    // console.log(url)
    return this.http.get(url).catch(err => {
                this.snackBar.open('server error..!!!', 'try again!', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map(res => res.json());
  }
}
