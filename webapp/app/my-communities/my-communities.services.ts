import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserCommunities {
 
 constructor (private http: Http,public snackBar: MdSnackBar) { }
//  member = "mr.w" ;
    getCommunity(member) {
    const url = `/api/v1/communities/membership/${member}`;
    return this.http.get(url).catch(err => {
    this.snackBar.open('Unable to get Communities.. Please try again later..!!!','Close',{
        duration: 3000
      });
      return Observable.throw(err); // observable needs to be returned or exception raised
    })
    .map( response => response.json());
  

  }

}
  