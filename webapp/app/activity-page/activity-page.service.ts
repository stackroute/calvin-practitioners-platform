import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppBarService } from '../app-bar/app-bar.service';
import 'rxjs/add/operator/map';

@Injectable()

export class ActivityService {
resJson = [];
constructor(private http: Http) {}
  getTools(uname, communities, sort, order, page, limit) {
    //communities=c1,c2,c3&sort=ts&order=desc&limit=20&page=1
    return this.http
      // .get(`/api/v1/memberactivitypage/${username}?${communities}?${sort}?${order}?${page}?${limit}`)
      // .map((response: Response) => 
      //   response.json());

        .get(`http://localhost:3000/api/v1/memberactivitypage/Rajeshwari`)
      .map((response: Response) => 
        response.json());
  }
  getuserinfo() {   
  const url = ' http://localhost:3000/api/v1/user/getinfo';
  return this.http.get(url).map(
   (response: Response) => response.json());
 }
}
