import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ToolConfigService {
  domainName;
  data;
    constructor(private http: Http, public snackBar: MdSnackBar) { }
    saveDomain(name){
      this.domainName=name;
      console.log('saved domai is',this.domainName)
    }

    getDomain(){
      return this.domainName;
    }

    getTools(toolid) {
        return this.http
            .get(`api/v1/toolmarketplace/tool/${toolid}`)
            .map((response: Response) => response.json());
    }

    getToolActions(toolid){        
        return this.http
             .get(`api/v1/toolmarketplace/actions/${toolid}`)
             .map((response: Response) => response.json());
    }
    
    getToolEvents(toolid){
        return this.http
               .get(`api/v1/toolmarketplace/events/${toolid}`)
               .map((response: Response) => response.json())
    }
   getEvents(){
     return this.http
     .get(`api/v1/activityevents/`)
     .map((response:Response) => response.json())
   }

   postTools(domain,data) {
   console.log('inside post tool');
   console.log("domainname",domain);
   console.log("data",data);
const headers = new Headers({
  'Content-Type': 'application/json;charset=utf-8'
 });
 const options = new RequestOptions({
  headers: headers
 });
 const body = JSON.stringify(data);
    const url = `/api/v1/communitytools/${domain}`;
 console.log("i am inside seivce angular",domain);
    return this.http
      .post(url,body,options)
      .catch(err => {
        console.log("errrorrr",err)
                this.snackBar.open('Please try again later..!!!', 'try again!', {
                    duration: 3000
                });
                return Observable.throw(err); // observable needs to be returned or exception raised
            }).map(data => this.data = data);
}
}
