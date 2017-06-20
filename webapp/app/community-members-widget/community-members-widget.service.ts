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
                  .get('http://localhost:3000/api/v1/tools/tools')
                  .map((response:Response) => response.json());
   }
}