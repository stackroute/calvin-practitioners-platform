import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ActivityService{
resJson=[];
constructor(private http:Http){}
  getTools() {
      return this.http
                 .get('http://localhost:3000/api/v1/activity/active')
                 .map((response:Response) => response.json());
  }
}