import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ToolActions {
  constructor(private http: Http) { }

 listTools(domain) {
    console.log('In service');
<<<<<<< HEAD
    const url = 'http://localhost:3000/api/v1/communityTools/';
=======
    const url = '/api/v1/communityTools/';
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
    return this.http.get(url).map(res => res.json());
  }

 updateTools(data)
  {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify(data);
        let url = "http://localhost:3000";
        return this.http.patch(url,body,headers).map(res=>res.json());
  }

}