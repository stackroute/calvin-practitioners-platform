import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { MdSnackBar } from '@angular/material';
import 'rxjs/Rx';

@Injectable()
export class updateSpecificCommunityService {
  counter = true;

  constructor(private http: Http, public snackBar: MdSnackBar) { }

  updateSpecificCommunity(Form, domain) {

    const url = `/api/v1/communities/communities/${domain}`;

    return this.http.patch(url, Form).catch(err => {
      this.snackBar.open('Unable to Update Community.. Please try again later..!!!', 'Close', {
        duration: 3000
      });
      return Observable.throw(err); // observable needs to be returned or exception raised
    })
      .map(() => Form);

  }
}