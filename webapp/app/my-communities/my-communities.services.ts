import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyCommunities {
  constructor (private http:Http){ } 
getCommunity(){
  const url='';
    return this.http.get(url).map((response:Response) => response.json());
  }

}
