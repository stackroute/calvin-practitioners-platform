import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserCommunities {
  // serverUrl = 'http://localhost:3000/api/v1/userCommunities/';
  serverUrl = 'http://localhost:3000/api/v1/community/userCommunities';
  
  constructor (private http: Http) { }

  getCommunity () {
    return this.http.get(this.serverUrl).map((response: Response) => response.json());
  }
}
