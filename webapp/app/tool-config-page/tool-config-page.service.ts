import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ToolConfigService {
    constructor(private http: Http) { }

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
}
