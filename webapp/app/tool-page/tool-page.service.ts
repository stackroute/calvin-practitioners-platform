import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
 export class ToolPageService{

constructor(private http: Http) { }

  updateSpecificCommunity(Form, domain){

  const url = `/api/v1/communities/communities/${domain}`;
  return this.http.patch(url, Form) .map(() =>
  console.log('angular service after patch ',Form));
  
 }

getToolinfo(toolid) {
   
   const url=`/api/v1/toolmarketplace/tool/${toolid}`;

     return this.http.get(url).map((response: Response)=> response);

//    return this.http.get(url).map((response: Response) => {
//          response=response;
//          console.log('inside response of service',response);
//    });

}

 }