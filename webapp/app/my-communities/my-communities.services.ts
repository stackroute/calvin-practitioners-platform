import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserCommunities {
  
    constructor(private http: Http) { }

    getCommunity() {

    // const url = `/api/v1/communities/communities/${member}`;
    // return this.http.get(url).map( response => response.json());
    

  }

}





