import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoleServices {
  constructor(private http: Http) {}
  listRoles() {
         console.log('In service');
        const url = '/api/v1/community-role-action/roles';
        return this.http.get(url).map(res => res.json());
      }
    }
