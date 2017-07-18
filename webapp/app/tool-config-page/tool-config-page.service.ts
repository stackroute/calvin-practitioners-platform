import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';


@Injectable()
export class ToolConfigService {
    constructor(private http: Http, public snackBar: MdSnackBar) { }

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


   postTools(domain,data) {
   console.log('inside post tool');
    const url = `/api/v1/communitytools/${domain}`;

    return this.http.post(url, data).catch(err => {
      this.snackBar.open('Unable to Post Tools.. Please try again later..!!!', 'Close', {
        duration: 3000
      });
      return Observable.throw(err); // observable needs to be returned or exception raised
    })
      .map(() => data);
}
}
