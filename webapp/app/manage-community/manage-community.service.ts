import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
// import { AppComponent } from './app.component';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
 export class patchCommunityService{

constructor(private http: Http) { }

  patchCommunity(Form, domain){
  // let headers= new Headers({'Content-Type':'application/json;charset=utf-8'});
  //  let options=new RequestOptions({headers:headers});
    const url = `/api/v1/communities/communities/${domain}`;
    console.log('angular service ',Form)
    console.log('url',url);
  return this.http.patch(url, Form).map(() =>
  console.log('angular service after patch ',Form));
  
 }
 }
