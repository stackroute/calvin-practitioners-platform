import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetCommunity {


 constructor(private http: Http) { }
 getCommunity() {
   
  const url = 'http://localhost:3000/api/v1/manage-community/community';
 return this.http.get(url).map(response =>response.json());
  }
}


