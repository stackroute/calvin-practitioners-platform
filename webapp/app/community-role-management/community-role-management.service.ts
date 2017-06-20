import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoleServices {
  constructor(private http: Http) {}
  updateRole(data) {
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const options = new RequestOptions({ headers: headers });
        const body = JSON.stringify(data);
        const url = '';
        return this.http.put(`${url}/${data.id}`, data, headers).map(res => res.json());
    }
      listRoles() {
         console.log('In service');
        const url = '/api/v1/community-role-action/get';
        return this.http.get(url).map(res => res.json());
      }
}
