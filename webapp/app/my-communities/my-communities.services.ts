import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserCommunities {
  
  constructor (private http: Http) { }

 serverUrl = 'http://localhost:3000/api/v1/community/userCommunities/';

 getCommunity() {
  return this.http.get(this.serverUrl).map((response: Response) => response.json());
 }
}
