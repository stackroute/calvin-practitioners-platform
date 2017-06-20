import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MembersService{
   
    resJson=[];
 constructor(private http:Http){}
   getMember() {
       return this.http
                  .get('/api/v1/members/members')
                  .map((response:Response) => response.json());
   }
}