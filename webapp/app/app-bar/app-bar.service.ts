import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppBarService {
 constructor(private http: Http) {}


 // getuserinfo()
 // {
 //     console.log("user data");
 //      let url=" http://localhost:3000/api/v1/user/getinfo";
 //    return this.http.get(url).map(res => res.json());
 // }


 getuserinfo() {
  const url = ' http://localhost:3000/api/v1/user/getinfo';
  return this.http.get(url).map(
   (response: Response) => response.json());
 }
}
