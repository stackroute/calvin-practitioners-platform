import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppBarService } from '../app-bar/app-bar.service';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';

@Injectable()

export class ActivityService {

  constructor(private http: Http, public snackBar: MdSnackBar) { }

  getActivities(uname, communities, sort, order, page, limit) {
    return this.http
      .get(`api/v1/memberactivitypage/` + uname)
      .catch(err => {
        this.snackBar.open('Unable to get user activities', 'X', {
          duration: 3000
        });

        return Observable.throw(err);
      })
      .map((response: Response) => response.json())
  }
    getActivitiesByDomainName(domainName) {
    return this.http
      .get(`api/v1/memberactivitypage/community/`+ domainName)
      .catch(err => {
        this.snackBar.open('Unable to get domain activities', 'X', {
          duration: 3000
        });

        return Observable.throw(err);
      })
      .map((response: Response) => response.json())
  }
}
