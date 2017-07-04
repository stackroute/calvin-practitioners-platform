import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';





@Injectable()
export class AddToolService {

    constructor(private http: Http) { }

    addTool(toolobj) {

        //    const headers = new Headers(
        //         { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DEconstE, OPTIONS' });
        //     const options = new RequestOptions({ headers: headers });
        //     return this.http.post('http://localhost:3000/api/v1/toolmarketplace/tool', toolobj).map(() => console.log('New community details posted', toolobj));  

        const headers = new Headers();
        const url = 'http://localhost:3000/api/v1/toolmarketplace/tool';
        headers.append('Content-Type', 'application/json');


        return this.http.post(url, toolobj, { headers: headers }).map(data => {
            console.log("ok");
        }, error => {
            console.log(JSON.stringify(error.json()));
        });

    }
}