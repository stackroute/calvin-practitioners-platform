import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetCommunity {

 page = 1;
 constructor(private http: Http) { }
 getCommunity(domain: string) {
  const url = `http://localhost:3000/api/vi`;
 return this.http.get(url).map(res => res.json());
  }
}
