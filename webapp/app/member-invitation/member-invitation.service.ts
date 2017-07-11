import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

 @Injectable()
 export class Roleservice {

  constructor( private http: Http) { }

  listUniqueRoles(domainname){
     console.log('In service');
    const url = '/api/v1/communityroles/'+domainname+'?onlyroles=true';
    console.log(url)
    return this.http.get(url).map(res => res.json());
  }  
}
