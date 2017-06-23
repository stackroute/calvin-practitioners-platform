import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoleServices {
  constructor(private http: Http) { }
  listRoles() {
    console.log('In service');
<<<<<<< HEAD
    const url = '/api/v1/communityRoles/';
=======
    const url = '/api/v1/communityRoles';
>>>>>>> ff95ee252485682f0b2eb7132660297fdbee7d31
    return this.http.get(url).map(res => res.json());
  }
}
