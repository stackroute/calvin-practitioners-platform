import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetCommunity {

constructor(private http: Http) { }
 getCommunity() {
 
  const url = 'http://localhost:3000/api/v1/community-details/community-details';
  return this.http.get(url).map(response =>response.json());
  // console.log("inside community service");
  }
}


//  page = 1;
//  constructor(private http: Http) { }
//  getCommunity(domain: string) {
//   const url = `http://localhost:3000/api/vi`;
//  return this.http.get(url).map(res => res.json());
//   }
// }
